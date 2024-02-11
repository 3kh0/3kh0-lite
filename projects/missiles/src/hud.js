MG.hud = (function () {
    var mRootNode;

    var mRadar;
    var mSpeedometer;
    var mLevelIndicator;
    var mProgressIndicator;
    var mLifeCounter;

    return {

        init: function () {
            mRootNode = document.getElementById('hud');

            // ----------------------------------------------------------- Radar

            mRadar = (function () {
                var mMissilePositionDot = document.getElementById('hud-radar-scope-missile');
                var mMissileTargetDot = document.getElementById('hud-radar-scope-missile-target');

                var mMissileTarget = {x: 0.0, y: 0.0};
                var mMissilePosition = {x: 0.0, y: 0.0};

                return {
                    update: function (dt) {
                        mMissileTarget = MG.missile.getTarget();
                        mMissilePosition = MG.missile.getPosition();
                        // PASS
                    },
                    updateDOM: function () {
                        var x,y;
                        var scopeRadius = 0.5;

                        /* Set the position of the dot indicating the intended target of the missile */
                        x = scopeRadius + 0.95 * scopeRadius * mMissileTarget.x
                                               / MG.TUNNEL_RADIUS;
                        y = scopeRadius + 0.95 * scopeRadius * mMissileTarget.y
                                               / MG.TUNNEL_RADIUS;

                        mMissileTargetDot.setAttribute('cx', String(x));
                        mMissileTargetDot.setAttribute('cy', String(y));

                        /* Set the position of the dot indicating the actual position of the missile */
                        x = scopeRadius + 0.95 * scopeRadius * mMissilePosition.x
                                               / MG.TUNNEL_RADIUS;
                        y = scopeRadius + 0.95 * scopeRadius * mMissilePosition.y
                                               / MG.TUNNEL_RADIUS;

                        mMissilePositionDot.setAttribute('cx', String(x));
                        mMissilePositionDot.setAttribute('cy', String(y));
                    }
                };
            }());



            // ----------------------------------------------------- Speedometer

            mSpeedometer = (function () {
                var mBarNode = document.getElementById('hud-speedometer-bar');

                var mTextNode = document.createTextNode('');
                document.getElementById('hud-speedometer-speed-text').appendChild(mTextNode);
            
                var mSpeed = 0.0;

                return {
                    update: function (dt) {
                        mSpeed = MG.missile.getVelocity();
                    },
                    updateDOM: function () {
                        mTextNode.data = mSpeed.toFixed(0);
                        
                        // TODO (possibly) work out the maximum speed properly and put a cap on the level with a nice victory screen
                        mBarNode.setAttribute('x', mSpeed/2000 - 1);
                    }
                };
            } ());

            // ------------------------------------------------- Level Indicator
            mLevelIndicator = (function () {
                var mTextNode = document.createTextNode('');
                document.getElementById('hud-level-indicator').appendChild(mTextNode);

                return {
                    update: function (dt) {
                    // PASS
                    },

                    updateDOM: function () {
                        mTextNode.data = MG.game.getLevelString();
                    }
                };
            } ());

            // ---------------------------------------------- Progress Indicator
            mProgressIndicator = (function () {
                var mProgressMarkNode = document.getElementById('hud-progress-indicator-progress');
                var mBestProgressMarkNode = document.getElementById('hud-progress-indicator-best-progress');

                var mProgress = 0.0;
                var mBestProgress = 0.0;

                return {
                    update: function (dt) {
                        mProgress = MG.game.getProgress();
                        mBestProgress = MG.game.getBestProgress();
                    },

                    updateDOM: function () {
                        mProgressMarkNode.setAttribute('transform', 'translate(0,'+mProgress+')');
                        mBestProgressMarkNode.setAttribute('transform', 'translate(0,'+mBestProgress+')');
                    }
                };
            } ());
            // ---------------------------------------------------- Life Counter

            mLifeCounter = (function () {
                var i;

                var mInfiniteLivesNode = document.getElementById('hud-lives-indicator-infinite');
                var mZeroLivesNode = document.getElementById('hud-lives-indicator-none');

                var mLivesNodes = [];
                for (i=0; i<5; i++) {
                    mLivesNodes[i] = document.getElementById('hud-lives-indicator-missile-' + (i+1));
                }

                var mLives = -1;

                return {
                    update: function (dt) {
                        mLives = MG.game.getNumLives();
                    },

                    updateDOM: function () {
                        var i;

                        switch (mLives) {
                          case Infinity:
                            mInfiniteLivesNode.setAttribute('visibility', 'visible');
                            mZeroLivesNode.setAttribute('visibility', 'hidden');

                            for (i=0; i<5; i++) {
                                mLivesNodes[i].setAttribute('visibility', 'hidden');
                            }
                            break;
                          case 0:
                            mInfiniteLivesNode.setAttribute('visibility', 'hidden');
                            mZeroLivesNode.setAttribute('visibility', 'visible');

                            for (i=0; i<5; i++) {
                                mLivesNodes[i].setAttribute('visibility', 'hidden');
                            }
                            break;
                          default:
                            mInfiniteLivesNode.setAttribute('visibility', 'hidden');
                            mZeroLivesNode.setAttribute('visibility', 'hidden');

                            for (i=0; i<5; i++) {
                                mLivesNodes[i].setAttribute('visibility', i<mLives ? 'visible' : 'hidden');
                            }
                            break;
                        }
                    }
                };
            } ());

            // --------------------------------------------- Framerate Indicator
            mFrameRateIndicator = (function () {
                var mTextNode = document.createTextNode('');
                document.getElementById('hud-frame-rate-indicator').appendChild(mTextNode);

                var mFrameRate = 0

                return {
                    update: function (dt) {
                        if (dt === 0) {
                            return;
                        }

                        if (mFrameRate <= 0) {
                            /* Assume game has just started and use first time
                            step as an initial guess for the frame rate */
                            mFrameRate = 1/dt ;
                        } else {
                            /* Smooth out the frame rate readings over a number of frames */
                            mFrameRate = 0.99*mFrameRate + 0.01/dt;
                        }
                    },

                    updateDOM: function () {
                        mTextNode.data = mFrameRate.toPrecision(3) + 'FPS' ;
                    }
                };
            } ());



            mRootNode.setAttribute('visibility', 'visible');
        },

        update: function (dt) {
            mRadar.update(dt);
            mSpeedometer.update(dt);
            mLevelIndicator.update(dt);
            mProgressIndicator.update(dt);
            mLifeCounter.update(dt);
            mFrameRateIndicator.update(dt);
        },

        updateDOM: function () {
            mRadar.updateDOM();
            mSpeedometer.updateDOM();
            mLevelIndicator.updateDOM();
            mProgressIndicator.updateDOM();
            mLifeCounter.updateDOM();
            mFrameRateIndicator.updateDOM();
        }
    };
}());
