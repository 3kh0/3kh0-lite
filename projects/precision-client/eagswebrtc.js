"use strict";

/*

This is the backend for voice channels in eaglercraft, it links with TeaVM EaglerAdapter at runtime

Copyright 2022 Calder Young & ayunami2000. All rights reserved.

Based on code written by ayunami2000

*/

window.initializeVoiceClient = (() => {

	const READYSTATE_NONE = 0;
	const READYSTATE_ABORTED = -1;
	const READYSTATE_DEVICE_INITIALIZED = 1;

	const PEERSTATE_FAILED = 0;
	const PEERSTATE_SUCCESS = 1;
	const PEERSTATE_LOADING = 2;

	class EaglercraftVoicePeer {

		constructor(client, peerId, peerConnection, offer) {
			this.client = client;
			this.peerId = peerId;
			this.peerConnection = peerConnection;
			this.stream = null;

			const self = this;
			this.peerConnection.addEventListener("icecandidate", (evt) => {
				if (evt.candidate) {
					self.client.iceCandidateHandler(self.peerId, JSON.stringify({
						sdpMLineIndex: evt.candidate.sdpMLineIndex,
						candidate: evt.candidate.candidate
					}));
				}
			});

			this.peerConnection.addEventListener("track", (evt) => {
				self.rawStream = evt.streams[0];
				const aud = new Audio();
				aud.autoplay = true;
				aud.muted = true;
				aud.onended = function () {
					aud.remove();
				};
				aud.srcObject = self.rawStream;
				self.client.peerTrackHandler(self.peerId, self.rawStream);
			});

			this.peerConnection.addStream(this.client.localMediaStream.stream);
			if (offer) {
				this.peerConnection.createOffer((desc) => {
					const selfDesc = desc;
					self.peerConnection.setLocalDescription(selfDesc, () => {
						self.client.descriptionHandler(self.peerId, JSON.stringify(selfDesc));
						if (self.client.peerStateInitial != PEERSTATE_SUCCESS) self.client.peerStateInitial = PEERSTATE_SUCCESS;
					}, (err) => {
						console.error("Failed to set local description for \"" + self.peerId + "\"! " + err);
						if (self.client.peerStateInitial == PEERSTATE_LOADING) self.client.peerStateInitial = PEERSTATE_FAILED;
						self.client.signalDisconnect(self.peerId);
					});
				}, (err) => {
					console.error("Failed to set create offer for \"" + self.peerId + "\"! " + err);
					if (self.client.peerStateInitial == PEERSTATE_LOADING) self.client.peerStateInitial = PEERSTATE_FAILED;
					self.client.signalDisconnect(self.peerId);
				});
			}

			this.peerConnection.addEventListener("connectionstatechange", (evt) => {
				if (evt.connectionState === 'disconnected') {
					self.client.signalDisconnect(self.peerId);
				} else if (evt.connectionState === 'connected') {
					if (self.client.peerState != PEERSTATE_SUCCESS) self.client.peerState = PEERSTATE_SUCCESS;
				} else if (evt.connectionState === 'failed') {
					if (self.client.peerState == PEERSTATE_LOADING) self.client.peerState = PEERSTATE_FAILED;
					self.client.signalDisconnect(self.peerId);
				}
			});

		}

		disconnect() {
			this.peerConnection.close();
		}

		mute(muted) {
			this.rawStream.getAudioTracks()[0].enabled = !muted;
		}

		setRemoteDescription(descJSON) {
			const self = this;
			try {
				const remoteDesc = JSON.parse(descJSON);
				this.peerConnection.setRemoteDescription(remoteDesc, () => {
					if (remoteDesc.type == 'offer') {
						self.peerConnection.createAnswer((desc) => {
							const selfDesc = desc;
							self.peerConnection.setLocalDescription(selfDesc, () => {
								self.client.descriptionHandler(self.peerId, JSON.stringify(selfDesc));
								if (self.client.peerStateDesc != PEERSTATE_SUCCESS) self.client.peerStateDesc = PEERSTATE_SUCCESS;
							}, (err) => {
								console.error("Failed to set local description for \"" + self.peerId + "\"! " + err);
								if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
								self.client.signalDisconnect(self.peerId);
							});
						}, (err) => {
							console.error("Failed to create answer for \"" + self.peerId + "\"! " + err);
							if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
							self.client.signalDisconnect(self.peerId);
						});
					}
				}, (err) => {
					console.error("Failed to set remote description for \"" + self.peerId + "\"! " + err);
					if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
					self.client.signalDisconnect(self.peerId);
				});
			} catch (err) {
				console.error("Failed to parse remote description for \"" + self.peerId + "\"! " + err);
				if (self.client.peerStateDesc == PEERSTATE_LOADING) self.client.peerStateDesc = PEERSTATE_FAILED;
				self.client.signalDisconnect(self.peerId);
			}
		}

		addICECandidate(candidate) {
			try {
				this.peerConnection.addIceCandidate(new RTCIceCandidate(JSON.parse(candidate)));
				if (this.client.peerStateIce != PEERSTATE_SUCCESS) this.client.peerStateIce = PEERSTATE_SUCCESS;
			} catch (err) {
				console.error("Failed to parse ice candidate for \"" + this.peerId + "\"! " + err);
				if (this.client.peerStateIce == PEERSTATE_LOADING) this.client.peerStateIce = PEERSTATE_FAILED;
				this.client.signalDisconnect(this.peerId);
			}
		}

	}

	class EaglercraftVoiceClient {

		constructor() {
			this.ICEServers = [];
			this.hasInit = false;
			this.peerList = new Map();
			this.readyState = READYSTATE_NONE;
			this.peerState = PEERSTATE_LOADING;
			this.peerStateConnect = PEERSTATE_LOADING;
			this.peerStateInitial = PEERSTATE_LOADING;
			this.peerStateDesc = PEERSTATE_LOADING;
			this.peerStateIce = PEERSTATE_LOADING;
			this.iceCandidateHandler = null;
			this.descriptionHandler = null;
			this.peerTrackHandler = null;
			this.peerDisconnectHandler = null;
			this.microphoneVolumeAudioContext = null;
		}

		voiceClientSupported() {
			return typeof window.RTCPeerConnection !== "undefined" && typeof navigator.mediaDevices !== "undefined" &&
				typeof navigator.mediaDevices.getUserMedia !== "undefined";
		}

		setICEServers(urls) {
			this.ICEServers.length = 0;
			for (var i = 0; i < urls.length; ++i) {
				var etr = urls[i].split(";");
				if (etr.length == 1) {
					this.ICEServers.push({
						urls: etr[0]
					});
				} else if (etr.length == 3) {
					this.ICEServers.push({
						urls: etr[0],
						username: etr[1],
						credential: etr[2]
					});
				}
			}
		}

		setICECandidateHandler(cb) {
			this.iceCandidateHandler = cb;
		}

		setDescriptionHandler(cb) {
			this.descriptionHandler = cb;
		}

		setPeerTrackHandler(cb) {
			this.peerTrackHandler = cb;
		}

		setPeerDisconnectHandler(cb) {
			this.peerDisconnectHandler = cb;
		}

		activateVoice(tk) {
			if (this.hasInit) this.localRawMediaStream.getAudioTracks()[0].enabled = tk;
		}

		initializeDevices() {
			if (!this.hasInit) {
				const self = this;
				navigator.mediaDevices.getUserMedia({
					audio: true,
					video: false
				}).then((stream) => {
					self.microphoneVolumeAudioContext = new AudioContext();
					self.localRawMediaStream = stream;
					self.localRawMediaStream.getAudioTracks()[0].enabled = false;
					self.localMediaStream = self.microphoneVolumeAudioContext.createMediaStreamDestination();
					self.localMediaStreamGain = self.microphoneVolumeAudioContext.createGain();
					var localStreamIn = self.microphoneVolumeAudioContext.createMediaStreamSource(stream);
					localStreamIn.connect(self.localMediaStreamGain);
					self.localMediaStreamGain.connect(self.localMediaStream);
					self.localMediaStreamGain.gain.value = 1.0;
					self.readyState = READYSTATE_DEVICE_INITIALIZED;
					this.hasInit = true;
				}).catch((err) => {
					console.error(err);
					self.readyState = READYSTATE_ABORTED;
				});
			} else {
				this.readyState = READYSTATE_DEVICE_INITIALIZED;
			}
		}

		setMicVolume(val) {
			if (this.hasInit) {
				if (val > 0.5) val = 0.5 + (val - 0.5) * 2.0;
				if (val > 1.5) val = 1.5;
				if (val < 0.0) val = 0.0;
				this.localMediaStreamGain.gain.value = val * 2.0;
			}
		}

		resetPeerStates() {
			this.peerState = this.peerStateConnect = this.peerStateInitial = this.peerStateDesc = this.peerStateIce = PEERSTATE_LOADING;
		}

		getPeerState() {
			return this.peerState;
		}

		getPeerStateConnect() {
			return this.peerStateConnect;
		}

		getPeerStateInitial() {
			return this.peerStateInitial;
		}

		getPeerStateDesc() {
			return this.peerStateDesc;
		}

		getPeerStateIce() {
			return this.peerStateIce;
		}

		getReadyState() {
			return this.readyState;
		}

		signalConnect(peerId, offer) {
			if (!this.hasInit) initializeDevices();
			try {
				const peerConnection = new RTCPeerConnection({
					iceServers: this.ICEServers,
					optional: [{
						DtlsSrtpKeyAgreement: true
					}]
				});
				const peerInstance = new EaglercraftVoicePeer(this, peerId, peerConnection, offer);
				this.peerList.set(peerId, peerInstance);
				if (this.peerStateConnect != PEERSTATE_SUCCESS) this.peerStateConnect = PEERSTATE_SUCCESS;
			} catch (e) {
				if (this.peerStateConnect == PEERSTATE_LOADING) this.peerStateConnect = PEERSTATE_FAILED;
			}
		}

		signalDescription(peerId, descJSON) {
			var thePeer = this.peerList.get(peerId);
			if ((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.setRemoteDescription(descJSON);
			}
		}

		signalDisconnect(peerId, quiet) {
			var thePeer = this.peerList.get(peerId);
			if ((typeof thePeer !== "undefined") && thePeer !== null) {
				this.peerList.delete(thePeer);
				try {
					thePeer.disconnect();
				} catch (e) {}
				this.peerDisconnectHandler(peerId, quiet);
			}
		}

		mutePeer(peerId, muted) {
			var thePeer = this.peerList.get(peerId);
			if ((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.mute(muted);
			}
		}

		signalICECandidate(peerId, candidate) {
			var thePeer = this.peerList.get(peerId);
			if ((typeof thePeer !== "undefined") && thePeer !== null) {
				thePeer.addICECandidate(candidate);
			}
		}

	}

	window.constructVoiceClient = () => new EaglercraftVoiceClient();
});

window.startVoiceClient = () => {
	if (typeof window.constructVoiceClient !== "function") {
		window.initializeVoiceClient();
	}
	return window.constructVoiceClient();
};