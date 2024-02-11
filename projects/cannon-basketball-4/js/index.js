! function(t) {
    function e(t, e, a) {
        this.onClick = new c, this.onDown = new c, this.onUp = new c, this.onOut = new c, e && (e = e.bind(a || this), this.onClick.add(e)), this.disposed = !1, this.isDown = !1, this.isOver = !1, this.name = "TintButton", this.upTint = 16777215, this.overTint = 15658734, this.downTint = 14540253, this.disableTint = 8947848, this.tint = this.upTint, PIXI.Sprite.call(this, t), this.mousedown = this.touchstart = this._mouseDown, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp, this.mouseover = this._mouseOver, this.mouseout = this._mouseOut, this.click = this.tap = this._clickTap, this.interactive = !0, this.buttonMode = !0, this.anchor.set(.5, .5), this._cacheAnchorY = null
    }

    function a(t, e) {
        PIXI.Container.call(this), this.name = t || "Item", this.zOrder = e || Z.zOrder.defaultZ, this._body = null, this.angleUpdate = !1, this.positionUpdate = !1
    }

    function n() {
        PIXI.Container.call(this);
        var t = new PIXI.TextStyle({
                fontFamily: "Impact",
                fontSize: 42,
                fill: "white",
                align: "center"
            }),
            e = new PIXI.Graphics;
        e.beginFill(0), e.drawRect(0, 0, Pt.gameWidth0, Pt.gameHeight0), e.endFill(), this.addChild(e), this._txtLoading = new PIXI.Text("Loading", t), this._txtLoading.scale.set(.5, .5), this._txtLoading.anchor.set(.5, .5), this._txtLoading.x = Pt.gameWidth0 / 2, this._txtLoading.y = Pt.gameHeight0 / 2 - 10, this.addChild(this._txtLoading), Pt.pixi.ticker.add(this._update, this), this._loaded = 0, this._curr = 0
    }

    function i() {
        PIXI.Container.call(this);
        var t = e.generateButton("splash", null, this._onBtnsClick, this);
        t.anchor.set(.5, .5), t.scale.set(.5, .5), t.x = Pt.gameWidth0 / 2, t.y = Pt.gameHeight0 / 2, this.addChild(t)
    }

    function s(t) {
        this.app = t
    }

    function o() {
        EventTarget.call(this), this._event = {}, this._event.type = "", this._event.orientation = "", this._event.originalEvent = null, this._onVisibilityChange = this._onVisibilityChange.bind(this), this._onWebkitVisibilityChange = this._onWebkitVisibilityChange.bind(this), this._onPageShow = this._onPageShow.bind(this), this._onPageHide = this._onPageHide.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onResize = this._onResize.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), document.addEventListener("visibilitychange", this._onVisibilityChange, !1), document.addEventListener("webkitvisibilitychange", this._onWebkitVisibilityChange, !1), document.addEventListener("pageshow", this._onPageHide, !1), document.addEventListener("pagehide", this._onPageShow, !1), t.onfocus = this._onFocus, t.onblur = this._onBlur, this.orientation = this._getOrientation(), this._event.orientation = this.orientation, t.addEventListener("resize", this._onResize, !1), t.addEventListener("orientationchange", this._onOrientationChange, !1)
    }

    function r(t, e, a, n, i) {
        this.up = t, this.over = e, this.down = a, this.onClick = new c, this.onDown = new c, this.onUp = new c, this.onOut = new c, n && (n = n.bind(i || this), this.onClick.add(n)), this.name = "Button", this.disposed = !1, this.isDown = !1, this.isOver = !1, PIXI.Sprite.call(this, t), this.mousedown = this.touchstart = this._mouseDown, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp, this.mouseover = this._mouseOver, this.mouseout = this._mouseOut, this.click = this.tap = this._clickTap, this.interactive = !0, this.anchor.set(.5, .5), this._cacheAnchorY = null
    }

    function l(t, a, n, i) {
        var s = Pt.assets.getTexture("btnNumLevel" + a, "atlasUI");
        e.call(this, s, n, i), this.num = t, this.name = "ButtonLevel" + t;
        var o = "levelNumbers_" + rt.pad(t + "", 4, "0", 1),
            r = Pt.assets.getSprite(o, "atlasUI", !0);
        if (r.anchor.set(.5, .5), r.x = this.width / 2 - 3, r.y = this.height / 2, this.addChild(r), null == r) {
            var l = new PIXI.TextStyle({
                fontFamily: "CroMagnum",
                fontSize: 42,
                fill: "#FEF4B0",
                stroke: "#4D1604",
                strokeThickness: 8
            });
            this.setLabel(t + "", l)
        }
        var y = Pt.assets.getSprite("icoStarLevelBtn", "atlasUI");
        y.anchor.set(.5, .5), y.x = s.width / 2, y.y = s.height - y.height / 2 + 3, this.addChild(y);
        var h = Pt.assets.getSprite("icoStarLevelBtn", "atlasUI");
        h.anchor.set(.5, .5), h.x = y.x - y.width + 3, h.y = y.y, this.addChild(h);
        var d = Pt.assets.getSprite("icoStarLevelBtn", "atlasUI");
        d.anchor.set(.5, .5), d.x = y.x + y.width - 3, d.y = y.y, this.addChild(d), this.scale.set(.5, .5), this._stars = [y, h, d]
    }

    function y(t, a, n, i, s) {
        PIXI.Container.call(this), this._callback = i, this._callbackScope = s, this._on = e.generateButton(t, n, this._onClick, this), this._on.name = "ON", this.addChild(this._on), this._off = e.generateButton(a, n, this._onClick, this), this._off.name = "OFF", this.addChild(this._off), this.on = !0
    }

    function h(t) {
        this.name = t || "Collection#" + ++h.__id, this._arr = [], this.throwIfIn = !1, this.throwIfNotIn = !1, this.throwIfOut = !1
    }

    function d() {
        Box2D.Dynamics.b2ContactListener.call(this), this._ee = new EventEmitter, this._eventNameBeginContact = "onBeginContact", this._eventNameEndContact = "onEndContact"
    }

    function c() {
        this.count = 0, this._callbacks = [], this._doItAfter = [], this._blocked = !1, this.disposed = !1
    }

    function p() {
        this.startTime = Date.now(), this.prevTime = this.startTime, this.ms = 0, this.msMin = 1 / 0, this.msMax = 0, this.fps = 0, this.fpsMin = 1 / 0, this.fpsMax = 0, this.frames = 0, this.update = this.update.bind(this)
    }

    function g(t) {
        this.stage = t, this.mouse = new PIXI.InteractionData, this.touchs = {}, this.interactInvisible = !1, this.tempPoint = new PIXI.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0
    }

    function m() {
        this.localStorageEnable = !1, this._storage = {};
        try {
            this.localStorageEnable = "localStorage" in t && null !== t.localStorage
        } catch (t) {}
    }

    function u(e) {
        t.b2Vec2 = Box2D.Common.Math.b2Vec2, t.b2AABB = Box2D.Collision.b2AABB, t.b2BodyDef = Box2D.Dynamics.b2BodyDef, t.b2Body = Box2D.Dynamics.b2Body, t.b2FixtureDef = Box2D.Dynamics.b2FixtureDef, t.b2Fixture = Box2D.Dynamics.b2Fixture, t.b2World = Box2D.Dynamics.b2World, t.b2MassData = Box2D.Collision.Shapes.b2MassData, t.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape, t.b2CircleShape = Box2D.Collision.Shapes.b2CircleShape, t.b2DebugDraw = Box2D.Dynamics.b2DebugDraw, t.b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef, t.b2RevoluteJoint = Box2D.Dynamics.Joints.b2RevoluteJoint, t.b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef, this.world = new ct(new lt(0, 12), !0), this.contactListener = new d, this.world.SetContactListener(this.contactListener), Pt.physWorld = this.world, this.clearDoIt(), this._canvas = null, this._context = null, e && this.enableDebugDraw(), Pt.pixi.ticker.add(this._update, this)
    }

    function x(t) {
        "undefined" == typeof t && (t = []), this.c = 1, this.s0 = 0, this.s1 = 0, this.s2 = 0, this.sow(t)
    }

    function w(t) {
        PIXI.Container.call(this);
        var e = Pt.assets.getSprite("creditsBoard", "atlasUI");
        e.scale.set(.5, .5), e.anchor.set(.5, .76), this.addChild(e);
        var a = new PIXI.TextStyle({
                fontFamily: "Arial",
                fontSize: 42,
                fill: "#EFE9BF",
                stroke: "#4D1604",
                strokeThickness: 8,
                align: "center",
                lineHeight: 42
            }),
            n = new PIXI.Text(t, a);
        n.scale.set(.5, .5), n.anchor.set(.5, .45), this.addChild(n)
    }

    function P(t, a) {
        PIXI.Container.call(this), this.x = -Pt.gameWidth0;
        var n = Pt.assets.getSprite("creditsBoard", "atlasUI");
        n.scale.set(.5, .5), n.anchor.set(.5, .76), n.x = .5 * Pt.gameWidth0, n.y = .5 * Pt.gameHeight0, this.addChild(n);
        var i = e.generateButton("btnBackCredits", "atlasUI", t, a);
        i.name = "BackCredits", i.scale.set(.5, .5), i.x = Pt.gameWidth0 - i.width / 2 - 10, i.y = Pt.gameHeight0 - i.height / 2 - 5, this.addChild(i)
    }

    function _(t, e) {
        PIXI.Container.call(this), this._buttonsHandler = e;
        var a = Pt.assets.getSprite("levelsBoard" + t, "atlasUI");
        a.scale.set(.5, .5), a.anchor.set(.5, .5), this.addChild(a);
        var n = 15 * (t - 1) + 1;
        this._buttons = [], this._btnsContainer = new PIXI.Container, this.addChild(this._btnsContainer);
        for (var i = 12, s = 7, o = 0, r = 8, y = 0; y < 2; y++) {
            for (var h = 0; h < r; h++) {
                var d = new l(n, t, this._onClick, this);
                d.x += o + h * (i + d.width), d.y += y * (s + d.height), d.anchor.set(0, 0), this._btnsContainer.addChild(d), d.setLocked(n > Pt.levelMng.lastOpened), this._buttons.push(d), n++
            }
            r--, 2 == t && (o = i + d.width)
        }
        this._btnsContainer.x = -this._btnsContainer.width / 2, this._btnsContainer.y = -this._btnsContainer.height / 2 + 10
    }

    function v(t, a) {
        PIXI.Container.call(this), this._buttonsHandler = t;
        var n = Pt.assets.getSprite("levelCompleted");
        n.interactive = !0, this.addChild(n);
        const i = .35;
        this._btnRestart = e.generateButton("btnRestartComplete", "atlasUI", t, a), this._btnRestart.name = "Restart", this._btnRestart.scale.set(i, i), this._btnRestart.anchor.set(.5, .5), this._btnRestart.x = this._btnRestart.xIn = Pt.gameWidth0 / 2, this._btnRestart.y = this._btnRestart.yIn = Pt.gameHeight0 / 2 + 100, this._btnRestart.xOut = this._btnRestart.xIn, this._btnRestart.yOut = Pt.gameHeight0 + this._btnRestart.height / 2 + 10, this.addChild(this._btnRestart), this._btnMenu = e.generateButton("btnMenuComplete", "atlasUI", t, a), this._btnMenu.name = "Menu", this._btnMenu.scale.set(i, i), this._btnMenu.anchor.set(.5, .5), this._btnMenu.x = this._btnMenu.xIn = this._btnRestart.x - this._btnRestart.width / 2 - this._btnMenu.width / 2 - 20, this._btnMenu.y = this._btnMenu.yIn = this._btnRestart.y, this._btnMenu.xOut = -this._btnMenu.width / 2 - 10, this._btnMenu.yOut = this._btnMenu.yIn, this.addChild(this._btnMenu), this._btnNext = e.generateButton("btnNextComplete", "atlasUI", t, a), this._btnNext.name = "Next", this._btnNext.scale.set(i, i), this._btnNext.anchor.set(.5, .5), this._btnNext.x = this._btnNext.xIn = this._btnRestart.x + this._btnRestart.width / 2 + this._btnNext.width / 2 + 20, this._btnNext.y = this._btnNext.yIn = this._btnRestart.y, this._btnNext.xOut = Pt.gameWidth0 + this._btnNext.width / 2 + 10, this._btnNext.yOut = this._btnNext.yIn, this.addChild(this._btnNext);
        var s = new PIXI.TextStyle({
                fontFamily: "CroMagnum",
                fontSize: 72,
                fill: "#FFDC90",
                stroke: "#4D1604",
                strokeThickness: 6,
                align: "center"
            }),
            o = "LEVEL " + Pt.levelMng.currLevel + " COMPLETED!";
        Pt.levelMng.currLevel == Pt.levelMng.totalLevels && (o = "CONGRATULATIONS!\nYOU'VE PASSED THE GAME!", s.fontSize = 36), this._text = new PIXI.Text(o, s), this._text.anchor.set(.5, .5), this._text.scale.set(.5, .5), this._text.x = Pt.gameWidth0 / 2, this._text.y = Pt.gameHeight0 / 2 - 100, this.addChild(this._text);
        var r = Pt.assets.getSprite("starComplete", "atlasUI");
        r.anchor.set(.5, .5), r.scale.set(.5, .5), r.x = Pt.gameWidth0 / 2, r.y = Pt.gameHeight0 / 2, this.addChild(r);
        var l = Pt.assets.getSprite("starComplete", "atlasUI");
        l.anchor.set(.5, .5), l.scale.set(.5, .5), l.x = r.x - r.width / 2 - l.width / 2 - 10, l.y = r.y, this.addChild(l);
        var y = Pt.assets.getSprite("starComplete", "atlasUI");
        y.anchor.set(.5, .5), y.scale.set(.5, .5), y.x = r.x + r.width / 2 + y.width / 2 + 10, y.y = r.y, this.addChild(y), this._stars = [r, l, y], this.sndWin = Pt.assets.getSound("sndWin")
    }

    function b(t, a, n) {
        PIXI.Container.call(this), this._buttonsHandler = t, this.x = Pt.gameWidth0;
        var i = new _(1, t);
        i.x = 310, i.y = 122, this.addChild(i);
        var s = new _(2, t);
        s.x = 410, s.y = 320, this.addChild(s), this._boards = [i, s];
        var o = e.generateButton("btnBackLevels", "atlasUI", a, n);
        o.name = "BackLevels", o.scale.set(.5, .5), o.x = o.width / 2 + 10, o.y = Pt.gameHeight0 - o.height / 2 - 5, this.addChild(o)
    }

    function S(t, a) {
        PIXI.Container.call(this);
        var n = Pt.assets.getSprite("gameName", null, !0);
        n.scale.set(.45, .45), n.x = Pt.gameWidth0 / 2, n.y = Pt.gameHeight0 / 2 - n.height / 2, this.addChild(n);
        var i = e.generateButton("btnPlayMenu", "atlasUI", t, a);
        i.name = "Play", i.scale.set(.45, .45), i.x = n.x, i.y = n.y + n.height / 2 + i.height / 2 + 15, this.addChild(i);
        var s = e.generateButton("btnMoreGames", "atlasUI", t, a);
        s.name = "MoreGames", s.scale.set(.45, .45), s.x = i.x + i.width / 2 + s.width / 2 + 10, s.y = i.y + i.height / 2 - 10, this.addChild(s);
        var o = e.generateButton("btnFB", "atlasUI", t, a);
        o.name = "Facebook", o.scale.set(.45, .45), o.x = i.x - i.width / 2 - o.width / 2 - 10, o.y = s.y, this.addChild(o);
        var r = e.generateButton("btnCreditsMenu", "atlasUI", t, a);
        r.name = "Credits", r.scale.set(.45, .45), r.x = i.x, r.y = s.y + s.height / 2 + r.height / 2 + 5, this.addChild(r);
        var l = new y("btnMusicOn", "btnMusicOff", "atlasUI", t, a);
        l.name = "Music", l.scale.set(.5, .5), l.x = s.x, l.y = r.y, l.on = Pt.musicOn, this.addChild(l);
        var h = new y("btnSoundOn", "btnSoundOff", "atlasUI", t, a);
        h.name = "Sound", h.scale.set(.5, .5), h.x = o.x, h.y = r.y, h.on = Pt.soundOn, this.addChild(h), this.sndButton = Pt.assets.getSound("sndButton")
    }

    function A(t, e) {
        a.call(this, "Ball", Z.zOrder.ball);
        var n = Pt.assets.getSprite("ball", "atlasGame");
        n.scale.set(.5, .5), n.anchor.set(.5, .5), this.addChild(n), this.x = t, this.y = e;
        var i = u.createCircleShape(7.5),
            s = u.createFixtureDef(i, .5, .15, 1, {
                item: this,
                isBall: !0,
                dynamic: !0
            }),
            o = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, 0, !0);
        this._body = u.createBody(o, [s]), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0
    }

    function I(t, e) {
        a.call(this, "Basket", Z.zOrder.basket), this.x = t, this.y = e;
        var n = Pt.assets.getSprite("basket", "atlasGame");
        n.scale.set(.55, .55), n.anchor.set(.5, -.12), this.addChild(n);
        var i = 23,
            s = u.createPolygonShape(22.5, 4, 0, 30 + i),
            o = u.createFixtureDef(s, .5, .1, 1, this),
            r = u.createPolygonShape(4, 42, 14.85, 10.85 + i, ot.toRadians(15)),
            l = u.createFixtureDef(r, .5, .1, 1, this),
            y = u.createPolygonShape(4, 42, -14.85, 10.85 + i, ot.toRadians(-15)),
            h = u.createFixtureDef(y, .5, .1, 1, this),
            d = u.createPolygonShape(7.5, 6.6, 22.8, -7.75 + i, ot.toRadians(-15)),
            c = u.createFixtureDef(d, .5, .1, 1, this),
            p = u.createPolygonShape(7.5, 6.6, -22.8, -7.75 + i, ot.toRadians(15)),
            g = u.createFixtureDef(p, .5, .1, 1, this),
            m = u.createPolygonShape(27, 4, 0, i),
            x = u.createFixtureDef(m, .5, .1, 1, {
                item: this,
                basketSensor: !0
            }, !0),
            w = u.createBodyDef(t, e, ht.b2_staticBody);
        this._body = u.createBody(w, [o, l, h, c, g, x]), Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this), this.sndBallInBasket = Pt.assets.getSound("sndBallInBasket")
    }

    function D(t, e, n, i, s) {
        a.call(this, "BasketRail", Z.zOrder.basket), this._orienation = 0 == n ? "v" : "h", this._end = i, this.x = t, this.y = e, this.id = s;
        var o = Pt.assets.getSprite("railBasket", "atlasGame");
        o.scale.set(.55, .55), o.anchor.set(.5, .46), this.addChild(o);
        var r = u.createPolygonShape(22.5, 4, 0, 30),
            l = u.createFixtureDef(r, .5, .1, 1, this),
            y = u.createPolygonShape(4, 42, 14.85, 10.85, ot.toRadians(15)),
            h = u.createFixtureDef(y, .5, .1, 1, this),
            d = u.createPolygonShape(4, 42, -14.85, 10.85, ot.toRadians(-15)),
            c = u.createFixtureDef(d, .5, .1, 1, this),
            p = u.createPolygonShape(7.5, 6.6, 22.8, -7.75, ot.toRadians(-15)),
            g = u.createFixtureDef(p, .5, .1, 1, this),
            m = u.createPolygonShape(7.5, 6.6, -22.8, -7.75, ot.toRadians(15)),
            x = u.createFixtureDef(m, .5, .1, 1, this),
            w = u.createPolygonShape(27, 4),
            f = u.createFixtureDef(w, .5, .1, 1, {
                item: this,
                basketSensor: !0
            }, !0),
            P = u.createBodyDef(t, e, ht.b2_kinematicBody);
        this._body = u.createBody(P, [l, h, c, g, x, f]), this._createRails(), Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this), a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this), this.sndStart = Pt.assets.getSound("sndRailStart"), this.sndStop = Pt.assets.getSound("sndRailStop")
    }

    function C(t, e, n, i) {
        a.call(this, "Box", Z.zOrder.defaultZ), this.x = t, this.y = e;
        var s = Pt.assets.getSprite("box", "atlasGame");
        s.scale.set(.5, .5), s.anchor.set(.5, .5), this.addChild(s);
        var o = u.createPolygonShape(45, 45),
            r = u.createFixtureDef(o, .5, 0, i, {
                item: this,
                dynamic: !0
            }),
            l = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, n);
        this._body = u.createBody(l, [r]), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0
    }

    function B(t, e) {
        a.call(this, "Cannon", Z.zOrder.cannon), this.lowerAngle = -45, this.upperAngle = 45, this.shotScale = 150, this.minPower = 250, this.maxPower = 500, this.x = t, this.y = e;
        var n = Pt.assets.getSprite("cannonPlatform", "atlasGame");
        n.anchor.set(.5, .7), n.scale.set(.5, .5), this.addChild(n);
        var i = rt.generateFrameNames("cannon_", 1, 15, "", 4),
            s = Pt.assets.getTextures(i, "atlasGame");
        this._cannon = new PIXI.extras.AnimatedSprite(s), this._cannon.anchor.set(.5, 1.32), this._cannon.scale.set(.5, .5), this._cannon.animationSpeed = 1, this._cannon.loop = !1, this.addChildAt(this._cannon, 0);
        var o = Pt.assets.getSprite("cannonPowerBarBG", "atlasGame");
        o.anchor.set(.5, 1), o.x = 30, o.y = -60, this._cannon.addChild(o), this._powerBar = Pt.assets.getSprite("cannonPowerBar", "atlasGame"), this._powerBar.anchor.set(.5, 1), o.addChild(this._powerBar), this._powerBarMask = new PIXI.Graphics, o.addChild(this._powerBarMask), this._powerBarMask.beginFill(0), this._powerBarMask.drawRect(-this._powerBar.width / 2, -this._powerBar.height, this._powerBar.width, this._powerBar.height), this._powerBar.mask = this._powerBarMask, this._shotComplete = this._shotComplete.bind(this), this._cannon.onComplete = this._shotComplete, this._frameChanged = this._frameChanged.bind(this), this._cannon.onFrameChange = this._frameChanged, this._shot = this._shot.bind(this), Pt.playState.shotHandler.add(this._shot), this._helperPoint = new PIXI.Point, this._ballSpawnPoint = new PIXI.Point(0, -43), this._shoted = !1, Pt.pixi.ticker.add(this._update, this), this._isAllowMove = !0, Pt.playState.aimControl && (Pt.playState.bg.on("pointerdown", this._pointerDown, this), Pt.playState.bg.on("pointerup", this._pointerUp, this), Pt.playState.bg.on("pointerupoutside", this._pointerUp, this), this._isAllowMove = !1, this._countTouches = 0), this.graphics = new PIXI.Graphics, this.addChild(this.graphics), this.sndShot = Pt.assets.getSound("sndShot")
    }

    function M(t, e) {
        a.call(this, "Domino", Z.zOrder.defaultZ), this.x = t, this.y = e;
        var n = Pt.assets.getSprite("domino", "atlasGame");
        n.scale.set(.5, .5), n.anchor.set(.5, .5), this.addChild(n);
        var i = u.createPolygonShape(10, 50),
            s = u.createFixtureDef(i, .5, 0, .5, {
                item: this,
                dynamic: !0
            }),
            o = u.createBodyDef(t, e, ht.b2_dynamicBody);
        this._body = u.createBody(o, [s]), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0
    }

    function E(t, e, n, i, s, o) {
        a.call(this, "Gate", Z.zOrder.defaultZ);
        var r = 0;
        s = void 0 != s ? s : 90, o = o || !1, o && (r = s, s = 0, "right" == n && (r = -r)), this.inversed = o, r = ot.toRadians(r), this.x = t, this.y = e, this.rotation = r, this.openAngle = ot.toRadians(s), this.direction = n, this.opened = !1, this.rotation = r, this.id = i;
        var l = Pt.assets.getSprite("gate_" + n, "atlasGame");
        l.scale.set(.5, .5), "left" == n ? l.anchor.set(.2, .5) : "right" == n && l.anchor.set(.8, .5), this.addChild(l);
        var y;
        "left" == n ? y = u.createPolygonShape(30, 8, 11) : "right" == n && (y = u.createPolygonShape(30, 8, -11));
        var h = u.createFixtureDef(y, 1, .1, .1),
            d = u.createBodyDef(t, e, ht.b2_kinematicBody, !1, !0, r);
        this._body = u.createBody(d, [h]), a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this), this.sndGate = Pt.assets.getSound("sndGate")
    }

    function T(t, e, n, i) {
        a.call(this, "Hammer", Z.zOrder.defaultZ), i = i || 1, this.x = t, this.y = e, n = ot.toRadians(n), this.rotation = n;
        var s = Pt.assets.getSprite("hammer", "atlasGame");
        s.scale.set(.5, .5), s.anchor.set(.1, .5), this.addChild(s);
        var o = u.createPolygonShape(12, 74, 62, 0),
            r = u.createFixtureDef(o, .3, .1, i, {
                item: this,
                dynamic: !0
            }),
            l = u.createPolygonShape(59, 12, 26, 0),
            y = u.createFixtureDef(l, .3, .1, i, {
                item: this,
                dynamic: !0
            }),
            h = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, n);
        this._body = u.createBody(h, [r, y]);
        var d = Pt.physWorld.GetGroundBody(),
            c = new xt;
        c.Initialize(d, this._body, this._body.GetPosition()), Pt.physWorld.CreateJoint(c), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0
    }

    function O(t, e, n, i, s) {
        a.call(this, "Mill", Z.zOrder.defaultZ), this.x = t, this.y = e, this.enableMotor = n, this.motorSpeed = i, this.signalID = s;
        var o = Pt.assets.getSprite("mill", "atlasGame");
        o.scale.set(.5, .5), o.anchor.set(.5, .5), this.addChild(o);
        var r = u.createPolygonShape(150, 14),
            l = u.createFixtureDef(r, .5, 0, .2, {
                item: this,
                dynamic: !0
            }),
            y = u.createPolygonShape(14, 150),
            h = u.createFixtureDef(y, .5, 0, .2, {
                item: this,
                dynamic: !0
            }),
            d = u.createBodyDef(t, e, ht.b2_dynamicBody);
        this._body = u.createBody(d, [l, h]), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0;
        var c = new lt(t / Pt.physScale, e / Pt.physScale),
            p = new xt;
        if (p.Initialize(Pt.physWorld.GetGroundBody(), this._body, c), this._revJoint = Pt.physWorld.CreateJoint(p), this.enableMotor) {
            var g = this.motorSpeed;
            this._revJoint.EnableMotor(!0), this._revJoint.SetMotorSpeed(g), this._revJoint.SetMaxMotorTorque(Math.abs(g)), a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
        }
    }

    function k(t, e) {
        a.call(this, "Peg", Z.zOrder.defaultZ), this.x = t, this.y = e;
        var n = Pt.assets.getSprite("peg", "atlasGame");
        n.scale.set(.5, .5), n.anchor.set(.5, .5), this.addChild(n);
        var i = u.createCircleShape(15),
            s = u.createFixtureDef(i, .2, .1, 1, {
                item: this,
                isPeg: !0
            }),
            o = u.createBodyDef(t, e, ht.b2_staticBody);
        this._body = u.createBody(o, [s]), Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this), this.sndPeg = Pt.assets.getSound("sndPeg")
    }

    function R(t, e, n, i, s, o, r, l, y) {
        if (a.call(this, "Pivot", Z.zOrder.pivot), this.x = t, this.y = e, this.type = n, "bolt" == this.type) {
            var h = Pt.assets.getSprite("bolt", "atlasGame");
            h.scale.set(.5, .5), h.anchor.set(.5, .5), this.addChild(h), this.boltLowerAngle = ot.toRadians(l), this.boltUpperAngle = ot.toRadians(y)
        } else if ("gear" == this.type) {
            var d = "gear" + s + "_",
                c = rt.generateFrameNames(d, 1, 40, "", 4),
                p = Pt.assets.getTextures(c, "atlasGame");
            this._gear = new PIXI.extras.AnimatedSprite(p), this._gear.anchor.set(.5, .5), this._gear.scale.set(.5, .5), this._gear.animationSpeed = 1, this._gear.loop = !0, this.addChildAt(this._gear, 0), this.gearSignalID = i, this.gearColor = s, this.gearMaxAngle = o, this.gearPower = r, this.TO_DESTINATION = 1, this.TO_START_ANGLE = 2, this._movingTo = 0
        }
        for (var g = [], m = new lt(t / Pt.physScale, e / Pt.physScale), u = Pt.physWorld.GetBodyList(); null != u;) {
            for (var x = u.GetFixtureList(); null != x;) {
                var w = x.TestPoint(m);
                if (w) {
                    g.push(u);
                    break
                }
                x = x.GetNext()
            }
            u = u.GetNext()
        }
        if (g.length > 2) throw "Too many bodies under pivot. Max is 2";
        1 == g.length && (g[1] = g[0], g[0] = Pt.physWorld.GetGroundBody());
        var f = g[0],
            P = g[1];
        if (f.type != ht.b2_staticBody && (f = P, P = g[0]), this._revJointDef = new xt, this._revJointDef.Initialize(f, P, m), "bolt" == this.type) this._revJoint = Pt.physWorld.CreateJoint(this._revJointDef), this._revJoint.EnableLimit(!0), this._revJoint.SetLimits(this.boltLowerAngle, this.boltUpperAngle);
        else if ("gear" == this.type) {
            if (this._trackBody = P, this._massData = new pt, this._trackBody.GetMassData(this._massData), this._massData.mass = .05, this._trackBody.SetUseOwnGravity(!0), this._trackBody.SetGravity(0, 0), this._trackBody.SetType(ht.b2_staticBody), this._trackBodyStartAngle = ot.toDegrees(this._trackBody.GetAngle()), a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this), this._lowerAngle = -this._trackBody.GetAngle(), this._upperAngle = ot.toRadians(this.gearMaxAngle), this._lowerAngle > this._upperAngle) {
                var _ = this._lowerAngle;
                this._lowerAngle = this._upperAngle, this._upperAngle = _
            }
            this.sndGear = Pt.assets.getSound("sndGear")
        }
    }

    function L(t, e, n, i, s, o) {
        i = ot.toRadians(i || 0);
        var r = u.convertBodyTypeFromStringToNumber(s),
            l = 18;
        a.call(this, "Platform", Z.zOrder.platform), this.x = t, this.y = e, this.rotation = i;
        var y = new PIXI.Container;
        this.addChild(y);
        var h = Pt.assets.getSprite("platform", "atlasGame");
        h.scale.set(.5, .5), h.anchor.set(.5, .5), h.x = Pt.rnd.realInRange(0, h.width / 2 - n / 2), y.addChild(h);
        var d = 1,
            c = new PIXI.Graphics;
        c.lineStyle(d, 1968900, 1), c.drawRect(-n / 2 - d / 2, -l / 2, n + d, l), this.addChild(c);
        var p = u.createPolygonShape(n, l),
            g = u.createFixtureDef(p, .1, .1, o, {
                item: this,
                dynamic: !0
            }),
            m = u.createBodyDef(t, e, r, !1, !0, i, !1);
        this._body = u.createBody(m, [g]);
        var x = new PIXI.Graphics;
        x.beginFill(9160191, .4), x.drawRect(-n / 2, -l / 2, n, l), x.endFill(), y.addChild(x), y.mask = x, r != ht.b2_staticBody && (this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0)
    }

    function G(t, e, n) {
        a.call(this, "Rock", Z.zOrder.defaultZ), this.x = t, this.y = e;
        var i = Pt.assets.getSprite("rock", "atlasGame");
        i.scale.set(.5, .5), i.anchor.set(.5, .5), this.addChild(i);
        var s = u.createCircleShape(24),
            o = u.createFixtureDef(s, .5, 0, n, {
                item: this,
                dynamic: !0
            }),
            r = u.createBodyDef(t, e, ht.b2_dynamicBody);
        this._body = u.createBody(r, [o]), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0
    }

    function U(t, e, n, i, s) {
        a.call(this, "Spring", Z.zOrder.defaultZ), n = ot.toRadians(n), this.x = t, this.y = e, this.rotation = n, this.type = i, this.elasticity = s;
        var o = rt.generateFrameNames("spring_", 1, 8, "", 4),
            r = Pt.assets.getTextures(o, "atlasGame");
        this._spring = new PIXI.extras.AnimatedSprite(r), this._spring.anchor.set(.5, .95), this._spring.scale.set(.5, .5), this._spring.animationSpeed = .5, this._spring.loop = !1, this._spring.stop(), this.addChildAt(this._spring, 0);
        var l = u.createPolygonShape(14, 14),
            y = u.createFixtureDef(l, .1, .1, .1),
            h = u.createBodyDef(t, e, u.convertBodyTypeFromStringToNumber(this.type), !1, !0, n);
        this._body = u.createBody(h, [y]);
        var d = u.createPolygonShape(4, 10, -22, -26),
            c = u.createFixtureDef(d, 1, 0, .2),
            p = u.createPolygonShape(4, 10, 22, -26),
            g = u.createFixtureDef(p, 1, 0, .2),
            m = u.createPolygonShape(48, 6, 0, -24),
            x = u.createFixtureDef(m, 1, 0, .1, this, !0),
            w = u.createPolygonShape(44, 6, 0, -30),
            f = u.createFixtureDef(w, 1, 0, .1, {
                item: this,
                isSensor: !1
            }, !1),
            P = u.createPolygonShape(14, 11, 0, -15),
            _ = u.createFixtureDef(P, .1, .1, .1, this, "dynamic" == i),
            v = u.createBodyDef(t, e, u.convertBodyTypeFromStringToNumber(this.type), !1, !0, n);
        if (this._body2 = u.createBody(v, [c, g, x, f, _]), "dynamic" == i) {
            var b = new wt;
            b.Initialize(this._body, this._body2, new lt(t / Pt.physScale, e / Pt.physScale));
            Pt.physWorld.CreateJoint(b)
        }
        Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this), "dynamic" == this.type && (this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0), this.sndSpring = Pt.assets.getSound("sndSpring")
    }

    function F(t, e) {
        a.call(this, "Star", Z.zOrder.defaultZ), this.x = t, this.y = e;
        var n = rt.generateFrameNames("star_", 1, 52, "", 4),
            i = Pt.assets.getTextures(n, "atlasGame"),
            s = new PIXI.extras.AnimatedSprite(i);
        s.anchor.set(.5, .5), s.scale.set(.5, .5), s.animationSpeed = 1, s.loop = !0, s.play(), this.addChildAt(s, 0);
        var o = u.createCircleShape(10),
            r = u.createFixtureDef(o, .2, .1, 1, {
                item: this,
                starSensor: !0
            }, !0),
            l = u.createBodyDef(t, e, ht.b2_staticBody);
        this._body = u.createBody(l, [r]), Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this), this.sndStar = Pt.assets.getSound("sndStar")
    }

    function V(t, e) {
        a.call(this, "Stopper", Z.zOrder.defaultZ), this.x = t, this.y = e;
        var n = Pt.assets.getSprite("stopper", "atlasGame");
        n.scale.set(.5, .5), n.anchor.set(.5, .5), this.addChild(n);
        var i = u.createCircleShape(5),
            s = u.createFixtureDef(i, .2, .1, 1, this),
            o = u.createBodyDef(t, e, ht.b2_staticBody);
        this._body = u.createBody(o, [s])
    }

    function X(t, e, n, i, s) {
        a.call(this, "Swings", Z.zOrder.peg), n = ot.toRadians(n), this.x = t, this.y = e, this.rotation = n, this.lowerAngle = ot.toRadians(i), this.upperAngle = ot.toRadians(s);
        var o = Pt.assets.getSprite("swings", "atlasGame");
        o.scale.set(.5, .5), o.anchor.set(.5, .83), this.addChild(o);
        var r = u.createPolygonShape(60, 11, 0, .5),
            l = u.createFixtureDef(r, 1, 0, .4, this),
            y = u.createPolygonShape(11, 30, 0, -20),
            h = u.createFixtureDef(y, 1, 0, .4, this),
            d = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, n);
        this._body = u.createBody(d, [l, h]);
        var c = Pt.physWorld.GetGroundBody(),
            p = new xt;
        p.Initialize(c, this._body, this._body.GetPosition());
        var g = Pt.physWorld.CreateJoint(p);
        g.EnableLimit(!0), g.SetLimits(this.lowerAngle - n, this.upperAngle - n), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0
    }

    function N(t, e, n, i, s, o) {
        a.call(this, "Switcher", Z.zOrder.switcher), n = ot.toRadians(n), this.x = t, this.y = e, this.rotation = n, this.type = i, this.signalID = s, this.color = o;
        var r = this.type + this.color + "_",
            l = rt.generateFrameNames(r, 1, 6, "", 4),
            y = Pt.assets.getTextures(l, "atlasGame");
        this._switcher = new PIXI.extras.AnimatedSprite(y), this._switcher.anchor.set(.5, 1), this._switcher.scale.set(.5, .5), this._switcher.animationSpeed = 1, this._switcher.loop = !1, this.addChildAt(this._switcher, 0), this._on = !1;
        var h = u.createPolygonShape(30, 8, 0, -12),
            d = u.createFixtureDef(h, 1, 0, .1, {
                item: this,
                isSensor: !0
            }, !0),
            c = u.createPolygonShape(40, 10, 0, -4),
            p = u.createFixtureDef(c, 1, 0, .1, this),
            g = u.createBodyDef(t, e, ht.b2_staticBody, !1, !0, n);
        this._body = u.createBody(g, [d, p]), Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this), "button" == this.type && Pt.physics.contactListener.addEndContactListener(this._onEndContact, this), this._countContacts = 0, this.sndSwitcher = Pt.assets.getSound("sndSwitcher")
    }

    function W(t, e, n, i, s) {
        a.call(this, "Teleport", Z.zOrder.teleport), i = ot.toRadians(i), this.x = t, this.y = e, this.rotation = i, this.id = n;
        var o = rt.generateFrameNames("teleport" + s + "_", 1, 20, "", 4),
            r = Pt.assets.getTextures(o, "atlasGame"),
            l = new PIXI.extras.AnimatedSprite(r);
        l.anchor.set(.5, .3), l.scale.set(.5, .5), l.animationSpeed = .5, l.loop = !0, l.play(), this.addChildAt(l, 0);
        var y = u.createPolygonShape(6, 60, -20, 12),
            h = u.createFixtureDef(y, 1, 0, .2),
            d = u.createPolygonShape(6, 60, 20, 12),
            c = u.createFixtureDef(d, 1, 0, .2),
            p = u.createPolygonShape(44, 6, 0, 39),
            g = u.createFixtureDef(p, 1, 0, 1),
            m = u.createPolygonShape(44, 6),
            x = u.createFixtureDef(m, 1, 0, 1, {
                item: this,
                teleportSensor: !0
            }, !0),
            w = u.createBodyDef(t, e, ht.b2_staticBody, !0, !0, i);
        this._body = u.createBody(w, [h, c, g, x]), Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this), Pt.physics.contactListener.addEndContactListener(this._onEndContact, this), a.events.on(a.EVENT_TELEPORTATION, this._teleportation, this), this._inUse = !1, this.sndTeleport = Pt.assets.getSound("sndTeleport")
    }

    function Y(t, e, n, i, s) {
        a.call(this, "Tube", Z.zOrder.defaultZ), i = i || 0, s = s || 0, n = ot.toRadians(n), this.x = t, this.y = e, this.rotation = n;
        var o = ot.vectorVelocityRad(n, 100);
        this._force = new lt(o.x, o.y);
        var r = Pt.assets.getSprite("tube", "atlasGame");
        r.scale.set(.5, .5), r.anchor.set(.5, .5), this.addChild(r);
        var l = i + s,
            y = u.createPolygonShape(50, 6, 0, -13.5),
            h = u.createFixtureDef(y, 1, .1, 1),
            d = u.createPolygonShape(50, 6, 0, 13.5),
            c = u.createFixtureDef(d, 1, .1, 1),
            p = u.createPolygonShape(50 + l, 10, -i / 2 + s / 2),
            g = u.createFixtureDef(p, 1, .1, 1, {
                item: this,
                tubeSensor: !0
            }, !0),
            m = u.createBodyDef(t, e, ht.b2_staticBody, !1, !0, n);
        this._body = u.createBody(m, [c, g, h]), this._enableUpdate()
    }

    function z(t) {
        if (a.call(this, "Tutorial", Z.zOrder.tutorial), 1 == t) {
            var e = Pt.assets.getSprite("tutorial1_1", "atlasUI");
            e.scale.set(.5, .5), e.anchor.set(.5, .5), e.x = 380, e.y = 150, this.addChild(e);
            var n = Pt.assets.getSprite("tutorial1_2", "atlasUI");
            n.scale.set(.5, .5), n.anchor.set(.5, .5), n.x = 300, n.y = 450, this.addChild(n)
        }
    }

    function H(t, e, n) {
        a.call(this, "WightBall", Z.zOrder.peg), n = n || 2, this.x = t, this.y = e;
        var i = Pt.assets.getSprite("weightBall", "atlasGame");
        i.scale.set(.5, .5), i.anchor.set(.5, .5), this.addChild(i);
        var s = u.createCircleShape(40),
            o = u.createFixtureDef(s, .2, .1, n, this),
            r = u.createBodyDef(t, e, ht.b2_dynamicBody);
        this._body = u.createBody(r, [o]), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0
    }

    function j() {
        this.currLevel = 1, this.lastOpened = Pt.storage.get(Pt.SAVE_KEY_LAST_OPENED) || 1, this.totalLevels = ft.length
    }

    function J() {
        PIXI.Container.call(this), Pt.pixi.stage.addChild(this);
        var t = new PIXI.Graphics;
        t.beginFill(0), t.drawRect(0, 0, Pt.gameWidth0, Pt.gameHeight0), t.endFill(), this.addChild(t)
    }

    function K() {
        if (Pt.menuState) throw new Error("MenuState singelton!");
        Pt.menuState = this, PIXI.Container.call(this), Pt.pixi.stage.addChildAt(this, 0);
        var t = Pt.assets.getSprite("bg_menu");
        t.scale.set(.5, .5), this.addChild(t), this._onBtnsLevelClick = this._onBtnsLevelClick.bind(this), this._menuDialog = new S(this._onClick, this), this.addChild(this._menuDialog), this._levelsDialog = new b(this._onBtnsLevelClick, this._onClick, this), this.addChild(this._levelsDialog), this._creditsDialog = new P(this._onClick, this), this.addChild(this._creditsDialog), this.sndButton = Pt.assets.getSound("sndButton")
    }

    function Z() {
        if (Pt.playState) throw new Error("MenuState singelton!");
        Pt.playState = this, PIXI.Container.call(this), Pt.pixi.stage.addChildAt(this, 0), this.aimControl = !Pt.device.desktop && !Pt.device.chromeOS;
        var t = Math.ceil(Pt.levelMng.currLevel / 15);
        this.bg = Pt.assets.getSprite("bg_" + t), this.bg.scale.set(.5, .5), this.bg.interactive = !0, this.aimControl || this.bg.on("pointerdown", this._onStageClick, this), this.addChild(this.bg);
        var e = new PIXI.Graphics;
        e.alpha = .1, e.beginFill(0), e.drawRect(0, 0, Pt.gameWidth0, Pt.gameHeight0), e.endFill(), this.addChild(e), this.shotHandler = new c, this._onGameLayerChildAdded = this._onGameLayerChildAdded.bind(this), this.gameLayer = new PIXI.Container, this.gameLayer.onChildrenChange = this._onGameLayerChildAdded, this.addChild(this.gameLayer), this.ballLayer = new PIXI.Container, this.ballLayer.zOrder = Z.zOrder.ball, this.gameLayer.addChild(this.ballLayer), this.uiLayer = new PIXI.Container, this.addChild(this.uiLayer), this._createUI(), this._levelComplete = new v(this._onBtnsClick, this), this._levelComplete.hide(), this._isComplete = !1, Pt.levelMng.create(), Pt.levelMng.currLevel >= 1 && Pt.levelMng.currLevel <= 2 && this.gameLayer.addChild(new z(Pt.levelMng.currLevel)), this.sndButton = Pt.assets.getSound("sndButton"), this.aimControl && (this.aim = Pt.assets.getSprite("aim"), this.aim.scale.set(.5, .5), this.aim.anchor.set(.5, .5), this.aim.visible = !1, this.addChild(this.aim))
    }

    function q() {
        nt(), Pt.inited ? (Pt.pixi.renderer.autoResize = !0, Pt.pixi.renderer.resize(Pt.canvasWidth, Pt.canvasHeight), Pt.pixi.stage.scale.set(Pt.scale, Pt.scale), Pt.physics.enabledDD && Pt.physics.updateCanvasSize()) : $(), Pt.resizeHandler && Pt.resizeHandler.call(), Pt.imgRotate && (Pt.imgRotate.position.set(Pt.canvasWidth / 2, Pt.canvasHeight / 2), Pt.imgRotate.scale.x = Pt.imgRotate.scale.y = Pt.scale);
    }

    function $() {
        if (Pt.device = new Device, Pt.audioEnabled = !Pt.device.ie && (Pt.device.canPlayAudio("ogg") || Pt.device.canPlayAudio("m4a")), Pt.device.android && !Pt.device.chrome) {
            var t = document.createElement("p"),
                e = document.createTextNode("This game doesn't work correctly in default Android browser. Please install Chrome on your device.");
            return t.appendChild(e), void document.getElementById("msg").appendChild(t)
        }
        var a = document.getElementById("msg");
        a.parentNode.removeChild(a), Pt.pixi = new PIXI.Application(Pt.canvasWidth, Pt.canvasHeight, {
            antialias: !0
        }), Pt.pixi.renderer.backgroundColor = 0, Pt.pixi.stage.scale.set(Pt.scale, Pt.scale), document.body.appendChild(Pt.pixi.view), document.ontouchstart = function(t) {
            t.preventDefault()
        }, document.body.addEventListener("selectstart", function(t) {
            t.preventDefault()
        }, !1), console.log(Pt.pixi.renderer.view.width, Pt.pixi.renderer.view.height), Pt.physics = new u(!1), Pt.currLevelDebug = 4, Pt.browserEvents = new o, Pt.browserEvents.on("onResize", q), Pt.browserEvents.on("onOrientationChange", q), Pt.storage = new m;
        var i = [];
        i.push(Pt.SAVE_KEY_LAST_OPENED, Pt.SAVE_KEY_MUSIC, Pt.SAVE_KEY_SOUND);
        for (var r = 1; r <= 30; r++) i.push(Pt.SAVE_KEY_STARS + r);
        Pt.storage.read(i), Pt.assets = new s(Pt), Pt.rnd = new x([(Date.now() * Math.random()).toString()]);
        try {
            Pt.fps = new FPSMeter(document.body)
        } catch (t) {}
        if (Pt.levelMng = new j, Pt.shutter = new J, Pt.pixi.stage.addChild(Pt.preloader = new n), PIXI.loader.baseUrl = "assets", PIXI.loader.add("atlasUI", "images/atlasUI.json").add("atlasGame", "images/atlasGame.json").add("splash", "images/splash.png").add("bg_menu", "images/bg_menu.png").add("bg_1", "images/bg_1.png").add("bg_2", "images/bg_2.png"), Pt.audioEnabled) {
            var l = Pt.device.iOS ? ".m4a" : ".ogg";
            console.log(l), PIXI.loader.add("sndButton", "audio/button" + l).add("sndBallInBasket", "audio/ball_in_basket" + l).add("sndGear", "audio/gear" + l).add("sndShot", "audio/shot" + l).add("sndSpring", "audio/spring" + l).add("sndStar", "audio/star" + l).add("sndSwitcher", "audio/switcher" + l).add("sndTeleport", "audio/teleport" + l).add("sndTheme", "audio/theme" + l).add("sndWin", "audio/win" + l)
        }
        PIXI.loader.on("progress", Q).load(tt), Pt.inited = !0
    }

    function Q(t, e) {
        if (console.log("loading: " + e.url), Pt.preloader) {
            var a = Math.round(t.progress);
            Pt.preloader.setLoading(a)
        }
    }

    function tt() {
        Pt.preloader ? (Pt.preloader.setLoading(100), Pt.preloader.loadedCallback(et)) : at()
    }

    function et() {
        Pt.splash = new i, Pt.splash.runAfter(at, 3e3), Pt.pixi.stage.addChild(Pt.splash)
    }

    function at() {
        if (Pt.preloader && (Pt.preloader.destroy(), Pt.preloader = null), Pt.splash && (Pt.splash.destroy(), Pt.splash = null), rt.atHome(["games.armorgames.com", "preview.armorgames.com", "cache.armorgames.com", "cdn.armorgames.com", "gamemedia.armorgames.com", "files.armorgames.com", "armorgames.com", "www.cb4.bitballoon.com", "cb4.bitballoon.com", "localhost"])) {
            Pt._checkAudio();
            var t = 1;
            1 == t ? new K : 2 == t && (Pt.levelMng.currLevel = Pt.currLevelDebug, new Z), Pt.shutter.hide()
        }
    }

    function nt() {
        var e = t.innerWidth,
            a = t.innerHeight,
            n = it(Pt.gameWidth0 / Pt.gameHeight0, e, a);
        Pt.gameWidth1 = n.width, Pt.gameHeight1 = n.height, Pt.scale = Pt.gameWidth1 / Pt.gameWidth0, Pt.gameMaxWidth1 = Pt.gameMaxWidth0 * Pt.scale, Pt.gameMaxHeight1 = Pt.gameMaxHeight0 * Pt.scale, Pt.canvasWidth = Pt.gameMaxWidth1 > e ? e : Pt.gameMaxWidth1, Pt.canvasHeight = Pt.gameMaxHeight1 > a ? a : Pt.gameMaxHeight1;
        var i = document.body;
        i.style.width = Pt.canvasWidth + "px", i.style.height = Pt.canvasHeight + "px", i.style.marginLeft = e / 2 - Pt.canvasWidth / 2 + "px", i.style.marginTop = a / 2 - Pt.canvasHeight / 2 + "px"
    }

    function it(t, e, a) {
        var n = Math.floor(e),
            i = Math.floor(a);
        return t < 1 && e >= a ? n = Math.floor(a * t) : t >= 1 && e <= a ? i = Math.floor(e / t) : Math.floor(a * t) > e ? i = Math.floor(e / t) : n = Math.floor(a * t), {
            width: n,
            height: i
        }
    }
    e.prototype = Object.create(PIXI.Sprite.prototype), e.prototype.constructor = e, e.prototype.destroy = function() {
        this.disposed || (this.disposed = !0, this.parent && this.parent.removeChild(this), this.onClick.dispose(), this.onClick = null, this.onDown.dispose(), this.onDown = null, this.onUp.dispose(), this.onUp = null, this.onOut.dispose(), this.onOut = null, this._label && (this._label.destroy(), this._label = null), this.mousedown = this.touchstart = null, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null, this.mouseover = null, this.mouseout = null, this.click = null, this.interactive = !1, this._cacheAnchorY = null)
    }, e.prototype.setOpenURL = function(e) {
        this.disposed || this.onClick.add(function(a) {
            t.open(e, "_blank")
        })
    }, e.prototype.setIcon = function(t, e, a, n, i) {
        if (!this.disposed) {
            a = a || 0, n = n || 0, i = i || 1;
            var s;
            if ("string" == typeof t) s = this.app.assets.getTexture(t, e);
            else if (t instanceof PIXI.Texture) s = t;
            else if (t instanceof PIXI.Sprite) this.icon = t;
            else if (null == t && this.icon) return this.removeChild(this.icon), void(this.icon = null);
            s && (this.icon ? this.icon.setTexture(s) : this.icon = new PIXI.Sprite(s)), this.icon.anchor.set(.5, .5), this.icon.x = a, this.icon.y = n, this.icon.scale.set(i, i), this.addChild(this.icon)
        }
    }, e.prototype.setLabel = function(t, e, a, n) {
        t = t || "", a = a || 0, n = n || 0, this._label || (this._label = new PIXI.Text(t, e), this.addChild(this._label)), this._label.text = t, e && (this._label.style = e), this._label.x = this.width / 2 - this._label.width / 2 + a, this._label.y = this.height / 2 - this._label.height / 2 + n
    }, e.prototype._mouseOver = function(t) {
        this.disposed || (this.isOver = !0, this.isDown || (this.tint = this.overTint))
    }, e.prototype._mouseOut = function(t) {
        this.disposed || (this.isOver = !1, this.onOut.call(t), this.isDown || (this.tint = this.upTint))
    }, e.prototype._mouseDown = function(t) {
        this.disposed || (this.isDown = !0, this.tint = this.downTint, this.onDown.call(t))
    }, e.prototype._mouseUp = function(t) {
        this.disposed || (this.isDown = !1, this.isOver ? this.tint = this.overTint : this.tint = this.upTint, this.onUp.call(t))
    }, e.prototype._clickTap = function(t) {
        this.disposed || this.onClick.call(t)
    }, Object.defineProperty(e.prototype, "enable", {
        get: function() {
            return this.interactive
        },
        set: function(t) {
            this.disposed || (this.interactive = t, t === !1 ? (this.isOver = !1, this._mouseUp(), this.tint = this.disableTint) : this.tint = this.upTint)
        }
    }), e.generateButton = function(t, a, n, i) {
        var s = Pt.assets.getTexture(t, a);
        return new e(s, n, i)
    }, a.prototype = Object.create(PIXI.Container.prototype), a.prototype.constructor = a, a.prototype.destroy = function() {
        PIXI.Container.prototype.destroy.call(this), this._body && Pt.physWorld.DestroyBody(this._body), this._body = null, Pt.pixi.ticker.remove(this._update, this)
    }, a.prototype.setPosition = function(t, e) {
        if (this._body) {
            var a = this;
            Pt.physics.doIt(function() {
                a._body.SetPosition(new lt(t / Pt.physScale, e / Pt.physScale))
            })
        }
        this.position.set(t, e)
    }, a.prototype._enableUpdate = function() {
        Pt.pixi.ticker.add(this._update, this)
    }, a.prototype._disableUpdate = function() {
        Pt.pixi.ticker.remove(this._update, this)
    }, a.prototype._update = function() {
        this.angleUpdate && (this.rotation = this._body.GetAngle()), this.positionUpdate && (this.x = this._body.GetPosition().x * Pt.physScale, this.y = this._body.GetPosition().y * Pt.physScale), this.y > 3e3 && (console.log("Item " + this.name + " has reached position of y at 3000. The item has been destroyed."), this.destroy())
    }, a.prototype.GetBody = function() {
        return this._body
    }, a.events = new EventEmitter, a.EVENT_TRIGGER_PRESSED = "TriggerPressed", a.EVENT_TELEPORTATION = "Teleportation", n.prototype = Object.create(PIXI.Container.prototype), n.prototype.constructor = n, n.prototype.setLoading = function(t) {
        this._loaded = t
    }, n.prototype.loadedCallback = function(t) {
        this._loadedCB = t
    }, n.prototype._update = function() {
        this._curr < this._loaded && (this._curr = Math.round(this._curr + 2 * Pt.pixi.ticker.deltaTime)), this._curr > this._loaded && (this._curr = this._loaded), this._txtLoading.text = "Loading " + this._curr + "%", 100 == this._curr && (Pt.pixi.ticker.remove(this._update, this), this._loadedCB && setTimeout(this._loadedCB, 500))
    }, i.prototype = Object.create(PIXI.Container.prototype), i.prototype.constructor = i, i.prototype.runAfter = function(t, e) {
        e = void 0 != e ? e : 1e3, setTimeout(t, e)
    }, i.prototype._onBtnsClick = function(e) {

    }, s.prototype.constructor = s, s.prototype.getTexture = function(t, e) {
        return e ? PIXI.loader.resources[e].textures[t] : PIXI.utils.TextureCache[t]
    }, s.prototype.getTextures = function(t, e) {
        var a;
        a = e ? PIXI.loader.resources[e].textures : PIXI.utils.TextureCache;
        for (var n = [], i = 0; i < t.length; i++) n.push(a[t[i]]);
        return n
    }, s.prototype.getSprite = function(t, e, a) {
        var n = new PIXI.Sprite(this.getTexture(t, e));
        return a && n.anchor.set(.5, .5), n
    }, s.prototype.getSound = function(t) {
        return 0 == Pt.audioEnabled ? null : PIXI.loader.resources[t].sound
    }, o.prototype.constructor = o, o.prototype._onVisibilityChange = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = document.hidden === !1 ? "onPageShow" : "onPageHide", this.emit(this._event)
    }, o.prototype._onWebkitVisibilityChange = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = document.webkitHidden === !1 ? "onPageShow" : "onPageHide", this.emit(this._event)
    }, o.prototype._onPageShow = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onPageShow", this.emit(this._event)
    }, o.prototype._onPageHide = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onPageHide", this.emit(this._event)
    }, o.prototype._onFocus = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onFocusGet", this.emit(this._event)
    }, o.prototype._onBlur = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onFocusLost", this.emit(this._event)
    }, o.prototype._onResize = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onResize", this.emit(this._event);
        var e = this._getOrientation();
        this.orientation !== e && (this._event.orientation = this.orientation = e, this._onOrientationChange(t))
    }, o.prototype._onOrientationChange = function(t) {
        t.preventDefault(), this._event.originalEvent = t, this._event.type = "onOrientationChange", this._event.orientation = this.orientation = this._getOrientation(), this.emit(this._event)
    }, o.prototype._getOrientation = function() {
        return t.innerWidth > t.innerHeight ? "landscape" : "portrait"
    }, EventTarget = function() {
        var t = {};
        this.addEventListener = this.on = function(e, a) {
            void 0 === t[e] && (t[e] = []), t[e].indexOf(a) === -1 && t[e].push(a)
        }, this.dispatchEvent = this.emit = function(e) {
            if (t[e.type] && t[e.type].length)
                for (var a = 0, n = t[e.type].length; a < n; a++) t[e.type][a](e)
        }, this.removeEventListener = this.off = function(e, a) {
            var n = t[e].indexOf(a);
            n !== -1 && t[e].splice(n, 1)
        }, this.removeAllEventListeners = function(e) {
            var a = t[e];
            a && (a.length = 0)
        }
    }, r.prototype = Object.create(PIXI.Sprite.prototype), r.prototype.constructor = r, r.prototype.destroy = function() {
        this.disposed || (this.disposed = !0, this.parent && this.parent.removeChild(this), this.onClick.dispose(), this.onClick = null, this.onDown.dispose(), this.onDown = null, this.onUp.dispose(), this.onUp = null, this.onOut.dispose(), this.onOut = null, this.up = null, this.over = null, this.down = null, this.mousedown = this.touchstart = null, this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null, this.mouseover = null, this.mouseout = null, this.click = null, this.interactive = !1, this._cacheAnchorY = null)
    }, r.prototype.setOpenURL = function(e) {
        this.disposed || this.onClick.add(function(a) {
            t.open(e, "_blank")
        })
    }, r.prototype._mouseOver = function(t) {
        this.disposed || (this.isOver = !0, this.isDown || (this.over ? this.texture = this.over : (this._cacheAnchorY = this.anchor.y, this.anchor.y -= .01)))
    }, r.prototype._mouseOut = function(t) {
        this.disposed || (this.isOver = !1, this.onOut.call(t), this.isDown || (this.texture = this.up, this._cacheAnchorY && (this.anchor.y = this._cacheAnchorY, this._cacheAnchorY = null)))
    }, r.prototype._mouseDown = function(t) {
        this.disposed || (this.isDown = !0, this.down && (this.texture = this.down), this.onDown.call(t))
    }, r.prototype._mouseUp = function(t) {
        this.disposed || (this.isDown = !1, this.isOver ? this.over ? this.texture = this.over : this.anchor.y = this._cacheAnchorY - .01 : (this.texture = this.up, this._cacheAnchorY && (this.anchor.y = this._cacheAnchorY, this._cacheAnchorY = null)), this.onUp.call(t))
    }, r.prototype._clickTap = function(t) {
        this.disposed || this.onClick.call(t)
    }, Object.defineProperty(r.prototype, "enable", {
        get: function() {
            return this.interactive
        },
        set: function(t) {
            this.disposed || (this.interactive = t, t === !1 && (this.isOver = !1, this._mouseUp()))
        }
    }), r.generateButton = function(t, e, a, n) {
        var i, s, o;
        i = Pt.assets.getTexture(t + "up", e);
        try {
            s = Pt.assets.getTexture(t + "over", e)
        } catch (t) {}
        try {
            o = Pt.assets.getTexture(t + "down", e)
        } catch (t) {}
        return new r(i, s, o, a, n)
    }, l.prototype = Object.create(e.prototype), l.prototype.constructor = l, l.prototype.setLocked = function(t) {
        if (this.enable = !t, t) {
            this.alpha = .5;
            for (var e = 0; e < 3; e++) this._stars[e].visible = !1
        } else {
            for (var a = Pt.storage.get(Pt.SAVE_KEY_STARS + this.num), n = 0; n < 3; n++) this._stars[n].visible = n + 1 <= a;
            this.alpha = 1
        }
    }, y.prototype = Object.create(PIXI.Container.prototype), y.prototype.constructor = l, y.prototype._onClick = function(t) {
        t.target == this._on ? this.on = !1 : t.target == this._off && (this.on = !0), t.target = this, t.isOn = this.on, this._callback.call(this._callbackScope, t)
    }, Object.defineProperty(y.prototype, "on", {
        get: function() {
            return this._on.visible
        },
        set: function(t) {
            this.disposed || (this._on.visible = t, this._off.visible = !t)
        }
    }), h.__id = 0, h.prototype.add = function(t) {
        var e = this._arr.indexOf(t);
        return e >= 0 ? void(this.throwIfIn && new Error("Item already in collection. [" + this.name + "].")) : void(this._arr[this._arr.length] = t)
    }, h.prototype.remove = function(t) {
        var e = this._arr.indexOf(t);
        return e < 0 ? void(this.throwIfNotIn && new Error("There is not item in collection. [" + this.name + "].")) : void this._arr.splice(e, 1)
    }, h.prototype.at = function(t) {
        return t < 0 ? (this.throwIfOut && new Error("Index is lower than zero. [" + this.name + "]."), t = 0) : t >= this._arr.length && (this.throwIfOut && new Error("Index is higher than total. [" + this.name + "]."), t = this._arr.length - 1), this._arr[t]
    }, h.prototype.first = function() {
        return this._arr[0]
    }, h.prototype.last = function() {
        return this._arr[this._arr.length - 1]
    }, h.prototype.getByProperty = function(t, e) {
        if (null == t || null == e) return null;
        for (var a = this.total(), n = 0; n < a; n++) {
            var i = this._arr[n];
            if (i[t] && i[t] == e) return i
        }
        return null
    }, h.prototype.has = function(t) {
        return this._arr.indexOf(t) >= 0
    }, h.prototype.clear = function() {
        this._arr.splice(0, this._arr.length)
    }, h.prototype.total = function() {
        return this._arr.length
    }, d.prototype = Object.create(Box2D.Dynamics.b2ContactListener.prototype), d.prototype.constructor = d, d.prototype.BeginContact = function(t) {
        this._ee.emit(this._eventNameBeginContact, t)
    }, d.prototype.EndContact = function(t) {
        this._ee.emit(this._eventNameEndContact, t)
    }, d.prototype.addBeginContactListener = function(t, e) {
        this._ee.on(this._eventNameBeginContact, t, e)
    }, d.prototype.removeBeginContactListener = function(t, e) {
        this._ee.off(this._eventNameBeginContact, t, e)
    }, d.prototype.addEndContactListener = function(t, e) {
        this._ee.on(this._eventNameEndContact, t, e)
    }, d.prototype.removeEndContactListener = function(t, e) {
        this._ee.off(this._eventNameEndContact, t, e)
    }, Device = function() {
        this.patchAndroidClearRectBug = !1, this.desktop = !1, this.iOS = !1, this.cocoonJS = !1, this.ejecta = !1, this.android = !1, this.chromeOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.canvas = !1, this.file = !1, this.fileSystem = !1, this.localStorage = !1, this.webGL = !1, this.worker = !1, this.touch = !1, this.mspointer = !1, this.css3D = !1, this.pointerLock = !1, this.typedArray = !1, this.vibration = !1, this.quirksMode = !1, this.arora = !1, this.chrome = !1, this.epiphany = !1, this.firefox = !1, this.ie = !1, this.ieVersion = 0, this.trident = !1, this.tridentVersion = 0, this.mobileSafari = !1, this.midori = !1, this.opera = !1, this.safari = !1, this.webApp = !1, this.silk = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.pixelRatio = 0, this.littleEndian = !1, this._checkAudio(), this._checkBrowser(), this._checkCSS3D(), this._checkDevice(), this._checkFeatures(), this._checkOS()
    }, Device.prototype = {
        _checkOS: function() {
            var t = navigator.userAgent;
            /Android/.test(t) ? this.android = !0 : /CrOS/.test(t) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(t) ? this.iOS = !0 : /Linux/.test(t) ? this.linux = !0 : /Mac OS/.test(t) ? this.macOS = !0 : /Windows/.test(t) && (this.windows = !0), (this.windows || this.macOS || this.linux && this.silk === !1) && (this.desktop = !0)
        },
        _checkFeatures: function() {
            this.canvas = !!t.CanvasRenderingContext2D;
            try {
                this.localStorage = !!localStorage.getItem
            } catch (t) {
                this.localStorage = !1
            }
            this.file = !!(t.File && t.FileReader && t.FileList && t.Blob), this.fileSystem = !!t.requestFileSystem, this.webGL = function() {
                try {
                    var e = document.createElement("canvas");
                    return !!t.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (t) {
                    return !1
                }
            }(), null === this.webGL || this.webGL === !1 ? this.webGL = !1 : this.webGL = !0, this.worker = !!t.Worker, ("ontouchstart" in document.documentElement || t.navigator.maxTouchPoints && t.navigator.maxTouchPoints > 1) && (this.touch = !0), (t.navigator.msPointerEnabled || t.navigator.pointerEnabled) && (this.mspointer = !0), this.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document, this.quirksMode = "CSS1Compat" !== document.compatMode
        },
        _checkBrowser: function() {
            var e = navigator.userAgent;
            /Arora/.test(e) ? this.arora = !0 : /Chrome/.test(e) ? this.chrome = !0 : /Epiphany/.test(e) ? this.epiphany = !0 : /Firefox/.test(e) ? this.firefox = !0 : /Mobile Safari/.test(e) ? this.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(e) ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(e) ? this.midori = !0 : /Opera/.test(e) ? this.opera = !0 : /Safari/.test(e) ? this.safari = !0 : /Silk/.test(e) ? this.silk = !0 : /Trident\/(\d+\.\d+);/.test(e) && (this.ie = !0, this.trident = !0, this.tridentVersion = parseInt(RegExp.$1, 10)), navigator.standalone && (this.webApp = !0), navigator.isCocoonJS && (this.cocoonJS = !0), "undefined" != typeof t.ejecta && (this.ejecta = !0)
        },
        _checkAudio: function() {
            this.audioData = !!t.Audio, this.webAudio = !(!t.webkitAudioContext && !t.AudioContext);
            var e = document.createElement("audio"),
                a = !1;
            try {
                (a = !!e.canPlayType) && (e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") && (this.opus = !0), e.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0), e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (this.webm = !0))
            } catch (t) {}
        },
        _checkDevice: function() {
            this.pixelRatio = t.devicePixelRatio || 1, this.iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") != -1, this.iPhone4 = 2 == this.pixelRatio && this.iPhone, this.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") != -1, "undefined" != typeof Int8Array ? (this.littleEndian = new Int8Array(new Int16Array([1]).buffer)[0] > 0, this.typedArray = !0) : (this.littleEndian = !1, this.typedArray = !1), navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, navigator.vibrate && (this.vibration = !0)
        },
        _checkCSS3D: function() {
            var e, a = document.createElement("p"),
                n = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            document.body.insertBefore(a, null);
            for (var i in n) void 0 !== a.style[i] && (a.style[i] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(a).getPropertyValue(n[i]));
            document.body.removeChild(a), this.css3D = void 0 !== e && e.length > 0 && "none" !== e
        },
        canPlayAudio: function(t) {
            return !("mp3" != t || !this.mp3) || (!("ogg" != t || !this.ogg && !this.opus) || (!("m4a" != t || !this.m4a) || (!("wav" != t || !this.wav) || !("webm" != t || !this.webm))))
        },
        isConsoleOpen: function() {
            return !(!t.console || !t.console.firebug) || !!t.console && (console.profile(), console.profileEnd(), console.clear && console.clear(), console.profiles.length > 0)
        }
    }, Device.prototype.constructor = Device, c.prototype.dispose = function() {
        this.disposed || (this.disposed = !0, this.count = 0, this._callbacks = null, this._doItAfter = null)
    }, c.prototype.has = function(t, e) {
        if (!this.disposed) return this._callbacks.indexOf(t) >= 0
    }, c.prototype.add = function(t) {
        if (!this.disposed && !this.has(t)) {
            var e = this,
                a = function() {
                    e._callbacks[e.count] = t, e.count++
                };
            this._blocked ? this._doItAfter[this._doItAfter.length] = a : a()
        }
    }, c.prototype.remove = function(t) {
        if (!(this.disposed || this._callbacks.indexOf(t) < 0)) {
            var e = this,
                a = function() {
                    var a = e._callbacks.indexOf(t);
                    e._callbacks.splice(a, 1), e.count--
                };
            this._blocked ? this._doItAfter[this._doItAfter.length] = a : a()
        }
    }, c.prototype.call = function() {
        if (!this.disposed && this._callbacks.length > 0) {
            var t;
            for (this._blocked = !0, t = this._callbacks.length - 1; t >= 0; t--) this._callbacks[t].apply(null, arguments.length > 0 ? Array.prototype.slice.call(arguments) : null);
            if (this._blocked = !1, this.disposed) return;
            if (this._doItAfter.length > 0) {
                for (t = this._doItAfter.length - 1; t >= 0; t--) this._doItAfter[t]();
                this._doItAfter.splice(0, this._doItAfter.length)
            }
        }
    }, p.prototype.update = function() {
        var t = Date.now();
        this.ms = t - this.startTime, this.msMin = Math.min(this.msMin, this.ms), this.msMax = Math.max(this.msMax, this.ms), this.frames++, t > this.prevTime + 1e3 && (this.fps = Math.round(1e3 * this.frames / (t - this.prevTime)), this.fpsMin = Math.min(this.fpsMin, this.fps), this.fpsMax = Math.max(this.fpsMax, this.fps), this.prevTime = t, this.frames = 0)
    }, g.prototype.constructor = g;
    var st = "";
    g.prototype.collectInteractiveSprite = function(t, e) {
        for (var a = t.children, n = a.length, i = 0; i < n; i++) {
            var s = a[i];
            s.visible === !1 && this.interactInvisible === !1 || (s.interactive ? (console.log(st, s.name), s.__iParent = e, this.interactiveItems.push(s), s.children.length > 0 && (st += "\t", this.collectInteractiveSprite(s, s))) : (s.__iParent = null, s.children.length > 0 && this.collectInteractiveSprite(s, e)))
        }
        st = ""
    }, g.prototype.setTarget = function(t) {
        this.target = t, null === this.interactionDOMElement && this.setTargetDomElement(t.view), document.body.addEventListener("mouseup", this.onMouseUp, !0)
    }, g.prototype.setTargetDomElement = function(e) {
        null !== this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0)), t.navigator.msPointerEnabled && (e.style["-ms-content-zooming"] = "none", e.style["-ms-touch-action"] = "none"), this.interactionDOMElement = e, e.addEventListener("mousemove", this.onMouseMove, !0), e.addEventListener("mousedown", this.onMouseDown, !0), e.addEventListener("mouseout", this.onMouseOut, !0), e.addEventListener("touchstart", this.onTouchStart, !0), e.addEventListener("touchend", this.onTouchEnd, !0), e.addEventListener("touchmove", this.onTouchMove, !0)
    }, g.prototype.update = function() {
        if (this.target) {
            var t = Date.now(),
                e = t - this.last;
            if (e = 30 * e / 1e3, !(e < 1)) {
                this.last = t;
                var a = 0;
                this.dirty && (this.dirty = !1, this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage));
                this.interactionDOMElement.style.cursor = "inherit";
                var n = this.interactiveItems.length;
                for (a = n - 1; a >= 0; a--) {
                    var i = this.interactiveItems[a];
                    if (i.mouseover || i.mouseout || i.buttonMode) {
                        if (i.__iParent && i.__iParent.__target) continue;
                        i.__hit = null != i.__target || this.hitTest(i, this.mouse), i.__hit ? (i.buttonMode && (this.interactionDOMElement.style.cursor = i.defaultCursor), i.__iParent && (i.__iParent.__target = i), i.__target ? this.mouse.target = i.__target : this.mouse.target = i, i.__isOver || (i.mouseover && i.mouseover(this.mouse), i.__isOver = !0)) : i.__isOver && (i.mouseout && i.mouseout(this.mouse), i.__isOver = !1)
                    }
                }
                for (a = n - 1; a >= 0; a--) i = this.interactiveItems[a], i.__target = null
            }
        }
    }, g.prototype.onMouseMove = function(e) {
        this.mouse.originalEvent = e || t.event;
        var a = this.interactionDOMElement.getBoundingClientRect();
        this.mouse.global.x = (e.clientX - a.left) * (this.target.width / a.width), this.mouse.global.y = (e.clientY - a.top) * (this.target.height / a.height);
        for (var n = this.interactiveItems.length, i = 0; i < n; i++) {
            var s = this.interactiveItems[i];
            s.mousemove && s.mousemove(this.mouse)
        }
    }, g.prototype.onMouseDown = function(e) {
        this.mouse.originalEvent = e || t.event;
        for (var a = this.interactiveItems.length, n = function(t, e) {
            return t === e || !!t.__target && n(t.__target, e)
        }, i = null, s = 0, o = a - 1; o >= 0; o--) {
            var r = this.interactiveItems[o];
            if (r.mousedown || r.click) {
                if (r != i && i && 0 == n(r, i)) continue;
                r.__hit = r.__target || this.hitTest(r, this.mouse), s++, r.__hit && (i || (i = r), r.__iParent && (r.__iParent.__target = r.__target || r), this.mouse.target = r.__target || r, r.mousedown && r.mousedown(this.mouse), r.__isDown = !0)
            } else r.__iParent.__target = r.__target
        }
        for (console.log(s, a), o = a - 1; o >= 0; o--) r = this.interactiveItems[o], r.__target = null
    }, g.prototype.onMouseOut = function() {
        var t = this.interactiveItems.length;
        this.interactionDOMElement.style.cursor = "inherit";
        for (var e = 0; e < t; e++) {
            var a = this.interactiveItems[e];
            a.__isOver && (this.mouse.target = a, a.mouseout && a.mouseout(this.mouse), a.__isOver = !1)
        }
    }, g.prototype.onMouseUp = function(e) {
        this.mouse.originalEvent = e || t.event;
        for (var a = this.interactiveItems.length, n = !1, i = 0; i < a; i++) {
            var s = this.interactiveItems[i];
            s.__hit = this.hitTest(s, this.mouse), s.__hit && !n ? (s.mouseup && s.mouseup(this.mouse), s.__isDown && s.click && s.click(this.mouse), s.interactiveChildren || (n = !0)) : s.__isDown && s.mouseupoutside && s.mouseupoutside(this.mouse), s.__isDown = !1
        }
    }, g.prototype.hitTest = function(t, e) {
        var a = e.global;
        if (!t.worldVisible) return !1;
        var n = t instanceof PIXI.Sprite,
            i = t.worldTransform,
            s = i[0],
            o = i[1],
            r = i[2],
            l = i[3],
            y = i[4],
            h = i[5],
            d = 1 / (s * y + o * -l),
            c = y * d * a.x + -o * d * a.y + (h * o - r * y) * d,
            p = s * d * a.y + -l * d * a.x + (-h * s + r * l) * d;
        if (t.hitArea && t.hitArea.contains) return !!t.hitArea.contains(c, p) && (e.target = t, !0);
        if (n) {
            var g, m = t.texture.frame.width,
                u = t.texture.frame.height,
                x = -m * t.anchor.x;
            if (c > x && c < x + m && (g = -u * t.anchor.y, p > g && p < g + u)) return e.target = t, !0
        }
        for (var w = t.children.length, f = 0; f < w; f++) {
            var P = t.children[f],
                _ = this.hitTest(P, e);
            if (_) return e.target = P, e.currentTarget = t, !0
        }
        return !1
    }, g.prototype.onTouchMove = function(e) {
        var a, n = this.interactionDOMElement.getBoundingClientRect(),
            i = e.changedTouches,
            s = 0;
        for (s = 0; s < i.length; s++) {
            var o = i[s];
            a = this.touchs[o.identifier], a.originalEvent = e || t.event, a.global.x = (o.clientX - n.left) * (this.target.width / n.width), a.global.y = (o.clientY - n.top) * (this.target.height / n.height), navigator.isCocoonJS && (a.global.x = o.clientX, a.global.y = o.clientY)
        }
        var r = this.interactiveItems.length;
        for (s = 0; s < r; s++) {
            var l = this.interactiveItems[s];
            l.touchmove && l.touchmove(a)
        }
    }, g.prototype.onTouchStart = function(e) {
        for (var a = this.interactionDOMElement.getBoundingClientRect(), n = e.changedTouches, i = 0; i < n.length; i++) {
            var s = n[i],
                o = this.pool.pop();
            o || (o = new PIXI.InteractionData), o.originalEvent = e || t.event, this.touchs[s.identifier] = o, o.global.x = (s.clientX - a.left) * (this.target.width / a.width), o.global.y = (s.clientY - a.top) * (this.target.height / a.height), navigator.isCocoonJS && (o.global.x = s.clientX, o.global.y = s.clientY);
            for (var r = this.interactiveItems.length, l = 0; l < r; l++) {
                var y = this.interactiveItems[l];
                if ((y.touchstart || y.tap) && (y.__hit = this.hitTest(y, o), y.__hit && (y.touchstart && y.touchstart(o), y.__isDown = !0, y.__touchData = o, !y.interactiveChildren))) break
            }
        }
    }, g.prototype.onTouchEnd = function(e) {
        for (var a = this.interactionDOMElement.getBoundingClientRect(), n = e.changedTouches, i = 0; i < n.length; i++) {
            var s = n[i],
                o = this.touchs[s.identifier],
                r = !1;
            o.global.x = (s.clientX - a.left) * (this.target.width / a.width), o.global.y = (s.clientY - a.top) * (this.target.height / a.height), navigator.isCocoonJS && (o.global.x = s.clientX, o.global.y = s.clientY);
            for (var l = this.interactiveItems.length, y = 0; y < l; y++) {
                var h = this.interactiveItems[y],
                    d = h.__touchData;
                h.__hit = this.hitTest(h, o), d === o && (o.originalEvent = e || t.event, (h.touchend || h.tap) && (h.__hit && !r ? (h.touchend && h.touchend(o), h.__isDown && h.tap && h.tap(o), h.interactiveChildren || (r = !0)) : h.__isDown && h.touchendoutside && h.touchendoutside(o), h.__isDown = !1), h.__touchData = null)
            }
            this.pool.push(o), this.touchs[s.identifier] = null
        }
    }, g.InteractionData = function() {
        this.global = new PIXI.Point, this.local = new PIXI.Point, this.currentTarget = null, this.target = null, this.originalEvent = null
    }, g.InteractionData.prototype.getLocalPosition = function(t) {
        var e = t.worldTransform,
            a = this.global,
            n = e[0],
            i = e[1],
            s = e[2],
            o = e[3],
            r = e[4],
            l = e[5],
            y = 1 / (n * r + i * -o);
        return new PIXI.Point(r * y * a.x + -i * y * a.y + (l * i - s * r) * y, n * y * a.y + -o * y * a.x + (-l * n + s * o) * y)
    }, g.InteractionData.prototype.constructor = g.InteractionData;
    var ot = {};
    ot.distance1 = function(t, e, a, n) {
        var i = a - t,
            s = n - e;
        return Math.sqrt(i * i + s * s)
    }, ot.distance2 = function(t, e) {
        var a = e.x - t.x,
            n = e.y - t.y;
        return Math.sqrt(a * a + n * n)
    }, ot.angleRad1 = function(t, e, a, n) {
        return Math.atan2(n - e, a - t)
    }, ot.angleDeg1 = function(t, e, a, n) {
        return Math.atan2(n - e, a - t) / Math.PI * 180
    }, ot.angleRad2 = function(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x)
    }, ot.angleDeg2 = function(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x) / Math.PI * 180
    }, ot.vectorVelocityRad = function(t, e) {
        return {
            x: Math.cos(t) * e,
            y: Math.sin(t) * e
        }
    }, ot.vectorVelocityDeg = function(t, e) {
        var a = t * Math.PI / 180;
        return {
            x: Math.cos(a) * e,
            y: Math.sin(a) * e
        }
    }, ot.equal = function(t, e, a) {
        return a = a || 1e-5, Math.abs(t - e) <= a
    }, ot.toDegrees = function(t) {
        return 180 * t / Math.PI
    }, ot.toRadians = function(t) {
        return t * Math.PI / 180
    }, ot.normAngleDeg = function(t, e) {
        return t %= 360, t = (t + 360) % 360, e && t > 180 && (t -= 360), t
    }, ot.pointLength = function(t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
    }, ot.pointNormalize = function(t, e) {
        var a = ot.pointLength(t);
        return 0 == a ? t : (t.x /= a, t.y /= a, e && (t.x *= e, t.y *= e), t)
    }, ot.intersection = function(t, e, a, n, i, s, o, r, l) {
        if (t === i && e === s) return null != l && (l.x = t, l.y = e), !0;
        if (t == o && e == r) return null != l && (l.x = t, l.y = e), !0;
        if (a == i && n == s) return null != l && (l.x = a, l.y = n), !0;
        if (a == o && n == r) return null != l && (l.x = a, l.y = n), !0;
        var y = a - t,
            h = n - e,
            d = o - i,
            c = r - s,
            p = -h,
            g = y,
            m = -(p * t + g * e),
            u = -c,
            x = d,
            w = -(u * i + x * s),
            P = u * t + x * e + w,
            _ = u * a + x * n + w,
            v = p * i + g * s + m,
            b = p * o + g * r + m;
        if (P * _ >= 0 || v * b >= 0) return !1;
        var S = P / (P - _);
        y *= S, h *= S;
        return null != l && (l.x = f.x, l.y = f.y), !0
    }, ot.intersection = function(t, e, a, n, i) {
        if (t.x == a.x && t.y == a.y) return null != i && i.set(t), !0;
        if (t.x == n.x && t.y == n.y) return null != i && i.set(t), !0;
        if (e.x == a.x && e.y == a.y) return null != i && i.set(e), !0;
        if (e.x == n.x && e.y == n.y) return null != i && i.set(e), !0;
        var s = e.sub(t),
            o = n.sub(a),
            r = -s.y,
            l = s.x,
            y = -(r * t.x + l * t.y),
            h = -o.y,
            d = o.x,
            c = -(h * a.x + d * a.y),
            p = h * t.x + d * t.y + c,
            g = h * e.x + d * e.y + c,
            m = r * a.x + l * a.y + y,
            u = r * n.x + l * n.y + y;
        if (p * g >= 0 || m * u >= 0) return !1;
        var x = p / (p - g);
        s.x *= x, s.y *= x;
        var w = t.add(s);
        return null != i && (i.x = w.x), null != i && (i.y = w.y), !0
    }, m.prototype.get = function(t) {
        return this._storage[t]
    }, m.prototype.set = function(t, e) {
        this._storage[t] = e.toString(), this.localStorageEnable && localStorage.setItem(t, e.toString())
    }, m.prototype.read = function(t) {
        if (this.localStorageEnable)
            for (var e = t.length, a = 0; a < e; a++) {
                var n = t[a],
                    i = localStorage.getItem(n);
                i && (this._storage[n] = i)
            }
    }, m.prototype.clear = function() {
        this._storage = {}, localStorage.clear()
    };
    var rt = {};
    rt.generateFrameNames = function(t, e, a, n, i) {
        "undefined" == typeof n && (n = "");
        var s, o = [],
            r = "";
        if (e < a)
            for (s = e; s <= a; s++) r = "number" == typeof i ? rt.pad(s.toString(), i, "0", 1) : s.toString(), r = t + r + n, o.push(r);
        else
            for (s = e; s >= a; s--) r = "number" == typeof i ? Phaser.Utils.pad(s.toString(), i, "0", 1) : s.toString(), r = t + r + n, o.push(r);
        return o
    }, rt.pad = function(t, e, a, n) {
        "undefined" == typeof e && (e = 0), "undefined" == typeof a && (a = " "), "undefined" == typeof n && (n = 3);
        var i = 0;
        if (e + 1 >= t.length) switch (n) {
            case 1:
                t = Array(e + 1 - t.length).join(a) + t;
                break;
            case 3:
                var s = Math.ceil((i = e - t.length) / 2),
                    o = i - s;
                t = Array(o + 1).join(a) + t + Array(s + 1).join(a);
                break;
            default:
                t += Array(e + 1 - t.length).join(a)
        }
        return t
    }, rt.atHome = function(e) {
        var a = t.location.hostname;
        return true
    };
    var lt = Box2D.Common.Math.b2Vec2,
        yt = (Box2D.Collision.b2AABB, Box2D.Dynamics.b2BodyDef),
        ht = Box2D.Dynamics.b2Body,
        dt = Box2D.Dynamics.b2FixtureDef,
        ct = (Box2D.Dynamics.b2Fixture, Box2D.Dynamics.b2World),
        pt = Box2D.Collision.Shapes.b2MassData,
        gt = Box2D.Collision.Shapes.b2PolygonShape,
        mt = Box2D.Collision.Shapes.b2CircleShape,
        ut = Box2D.Dynamics.b2DebugDraw,
        xt = (Box2D.Dynamics.Joints.b2MouseJointDef, Box2D.Dynamics.Joints.b2RevoluteJoint, Box2D.Dynamics.Joints.b2RevoluteJointDef),
        wt = Box2D.Dynamics.Joints.b2WeldJointDef;
    Box2D.Dynamics.Joints.b2WeldJoint;
    u.prototype.constructor = u, u.prototype.enableDebugDraw = function() {
        this.enabledDD = !0, this._canvas = document.createElement("canvas"), this._canvas.id = "PhysDebugDraw", this._canvas.width = Pt.pixi.renderer.width, this._canvas.height = Pt.pixi.renderer.height, this._canvas.style.zIndex = 1, this._canvas.style.left = 0, this._canvas.style.position = "absolute",
            this._canvas.style.pointerEvents = "none", document.body.appendChild(this._canvas), this._context = this._canvas.getContext("2d"), this._context.scale(Pt.scale, Pt.scale);
        var t = new ut;
        t.SetSprite(this._context), t.SetDrawScale(Pt.physScale), t.SetFillAlpha(.3), t.SetLineThickness(1), t.SetFlags(ut.e_shapeBit | ut.e_jointBit), this.world.SetDebugDraw(t)
    }, u.prototype.updateCanvasSize = function() {
        this.enabledDD && (this._canvas.width = Pt.pixi.renderer.width, this._canvas.height = Pt.pixi.renderer.height, this._canvas.style.width = Pt.pixi.view.style.width, this._canvas.style.height = Pt.pixi.view.style.height, this._context.scale(Pt.scale, Pt.scale))
    }, u.prototype.doIt = function(t) {
        return this.world.IsLocked() ? (this._doIt.push(t), !1) : (t.call(), !0)
    }, u.prototype.doItAll = function() {
        for (var t = this._doIt.length, e = 0; e < t; e++) {
            var a = this._doIt[e];
            a.call()
        }
        this.clearDoIt()
    }, u.prototype.clearDoIt = function() {
        this._doIt = []
    }, u.prototype._update = function() {
        this.world.Step(1 / 60, 10, 10), this.enabledDD && this.world.DrawDebugData(), this.world.ClearForces(), this._doIt.length > 0 && this.doItAll()
    }, u.prototype._createGround = function() {
        var t = new dt;
        t.density = 1, t.friction = .5, t.restitution = .2;
        var e = new yt;
        e.type = ht.b2_staticBody, t.shape = new gt, t.shape.SetAsBox((Pt.gameWidth0 / 2 - 4) / Pt.physScale, 10 / Pt.physScale), e.position.Set(Pt.gameWidth0 / 2 / Pt.physScale, Pt.gameHeight0 / Pt.physScale), this.world.CreateBody(e).CreateFixture(t)
    }, u.createCircleShape = function(t, e) {
        var a = new mt(t / Pt.physScale);
        return e && a.SetLocalPosition(e), a
    }, u.createPolygonShape = function(t, e, a, n, i) {
        a = a || 0, n = n || 0, i = i || 0;
        var s = new gt;
        return 0 == a && 0 == n && 0 == i ? s.SetAsBox(t / 2 / Pt.physScale, e / 2 / Pt.physScale) : s.SetAsOrientedBox(t / 2 / Pt.physScale, e / 2 / Pt.physScale, new lt(a / Pt.physScale, n / Pt.physScale), i), s
    }, u.createFixtureDef = function(t, e, a, n, i, s, o) {
        var r = new dt;
        return i = i || null, s = s || !1, o = o || null, r.shape = t, r.friction = e, r.restitution = a, r.density = n, r.isSensor = s, r.userData = i, o && (r.filter = o), r
    }, u.createBodyDef = function(t, e, a, n, i, s, o) {
        var r = new yt;
        return n = n || !1, i = i || !0, s = s || 0, o = o || !1, r.type = a, r.position.Set(t / Pt.physScale, e / Pt.physScale), r.angle = s, r.active = i, r.bullet = o, r.fixedRotation = n, r
    }, u.createBody = function(t, e) {
        var a = Pt.physWorld.CreateBody(t);
        if (e)
            for (var n = e.length, i = 0; i < n; i++) a.CreateFixture(e[i]);
        return a
    }, u.convertBodyTypeFromStringToNumber = function(t) {
        if ("static" == t) return ht.b2_staticBody;
        if ("dynamic" == t) return ht.b2_dynamicBody;
        if ("kinematic" == t) return ht.b2_kinematicBody;
        throw "Error! typeString has a wrong value."
    }, u.hasContactPairOfProperties = function(t, e, a) {
        var n = t.GetFixtureA(),
            i = t.GetFixtureB();
        if (null == n || null == i) return !1;
        var s = n.GetUserData(),
            o = i.GetUserData();
        if (null == s || null == o) return !1;
        var r = s.hasOwnProperty(e) && o.hasOwnProperty(a),
            l = s.hasOwnProperty(a) && o.hasOwnProperty(e);
        return r || l
    }, u.getAnotherOfContact = function(t, e) {
        var a = t.GetFixtureA(),
            n = t.GetFixtureB();
        if (null == a && null == n) return null;
        var i = a ? a.GetUserData() : null,
            s = n ? n.GetUserData() : null;
        if (null == i && null == s) return null;
        var o = null != i ? i.item : null,
            r = null != s ? s.item : null;
        return null == o && null == r ? null : o == e ? r : r == e ? o : null
    }, u.getAnotherUserDataOfContact = function(t, e) {
        var a = t.GetFixtureA(),
            n = t.GetFixtureB();
        if (null == a && null == n) return null;
        var i = a ? a.GetUserData() : null,
            s = n ? n.GetUserData() : null;
        if (null == i && null == s) return null;
        var o = null != i ? i.item : null,
            r = null != s ? s.item : null;
        return null == o && null == r ? null : o == e ? s : r == e ? i : null
    }, x.prototype = {
        rnd: function() {
            var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
            return this.c = 0 | t, this.s0 = this.s1, this.s1 = this.s2, this.s2 = t - this.c, this.s2
        },
        sow: function(t) {
            "undefined" == typeof t && (t = []), this.s0 = this.hash(" "), this.s1 = this.hash(this.s0), this.s2 = this.hash(this.s1), this.c = 1;
            for (var e, a = 0; e = t[a++];) this.s0 -= this.hash(e), this.s0 += ~~(this.s0 < 0), this.s1 -= this.hash(e), this.s1 += ~~(this.s1 < 0), this.s2 -= this.hash(e), this.s2 += ~~(this.s2 < 0)
        },
        hash: function(t) {
            var e, a, n;
            for (n = 4022871197, t = t.toString(), a = 0; a < t.length; a++) n += t.charCodeAt(a), e = .02519603282416938 * n, n = e >>> 0, e -= n, e *= n, n = e >>> 0, e -= n, n += 4294967296 * e;
            return 2.3283064365386963e-10 * (n >>> 0)
        },
        integer: function() {
            return 4294967296 * this.rnd.apply(this)
        },
        frac: function() {
            return this.rnd.apply(this) + 1.1102230246251565e-16 * (2097152 * this.rnd.apply(this) | 0)
        },
        real: function() {
            return this.integer() + this.frac()
        },
        integerInRange: function(t, e) {
            return Math.round(this.realInRange(t, e))
        },
        realInRange: function(t, e) {
            return this.frac() * (e - t) + t
        },
        normal: function() {
            return 1 - 2 * this.frac()
        },
        uuid: function() {
            var t = "",
                e = "";
            for (e = t = ""; t++ < 36; e += ~t % 5 | 3 * t & 4 ? (15 ^ t ? 8 ^ this.frac() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-");
            return e
        },
        pick: function(t) {
            return t[this.integerInRange(0, t.length - 1)]
        },
        weightedPick: function(t) {
            return t[~~(Math.pow(this.frac(), 2) * t.length)]
        },
        timestamp: function(t, e) {
            return this.realInRange(t || 9466848e5, e || 1577862e6)
        }
    }, w.prototype = Object.create(PIXI.Container.prototype), w.prototype.constructor = w, w.prototype.show = function(t) {
        TweenMax.to(this, t, {
            x: 0,
            y: this.showY,
            ease: Expo.easeOut
        })
    }, P.prototype = Object.create(PIXI.Container.prototype), P.prototype.constructor = P, P.prototype.show = function(t) {
        TweenMax.to(this, t, {
            x: 0,
            y: this.showY,
            ease: Expo.easeOut
        })
    }, P.prototype.hide = function(t) {
        TweenMax.to(this, t, {
            x: -Pt.gameWidth0,
            y: this.hideY,
            ease: Expo.easeOut
        })
    }, _.prototype = Object.create(PIXI.Container.prototype), _.prototype.constructor = _, _.prototype._onClick = function(t) {
        this._buttonsHandler(t.target.num)
    }, _.prototype.refresh = function() {
        for (var t = this._buttons.length, e = 0; e < t; e++) {
            var a = this._buttons[e];
            a.setLocked(e + 1 > Pt.levelMng.lastOpened)
        }
    }, v.prototype = Object.create(PIXI.Container.prototype), v.prototype.constructor = v, v.prototype.show = function(t, e) {
        t = t || 0;
        var a = .4;
        this.visible = !0;
        var n = this;
        TweenMax.to(this, a, {
            delay: t,
            alpha: 1
        }), TweenMax.to(this._text.scale, 2 * a, {
            delay: t += .1,
            x: .5,
            y: .5,
            ease: Elastic.easeOut,
            onStart: function() {
                Pt.soundOn && n.sndWin.play()
            }
        });
        for (var i = 0; i < 3; i++) {
            var s = this._stars[i];
            s.visible = i + 1 <= e, 0 != s.visible && (s.scale.set(0, 0), TweenMax.to(s.scale, 2 * a, {
                delay: t += .1,
                x: .5,
                y: .5,
                ease: Elastic.easeOut
            }))
        }
        var o = Quad.easeOut,
            r = this._btnMenu.xIn,
            l = this._btnMenu.yIn;
        TweenMax.to(this._btnMenu, a, {
            delay: t += .1,
            x: r,
            y: l,
            ease: o
        }), r = this._btnRestart.xIn, l = this._btnRestart.yIn, TweenMax.to(this._btnRestart, a, {
            delay: t += .05,
            x: r,
            y: l,
            ease: o
        }), this._btnNext.enable = Pt.levelMng.currLevel != Pt.levelMng.totalLevels, r = this._btnNext.xIn, l = this._btnNext.yIn, TweenMax.to(this._btnNext, a, {
            delay: t += .05,
            x: r,
            y: l,
            ease: o
        });
        var y = Pt.storage.get(Pt.SAVE_KEY_STARS + Pt.levelMng.currLevel) || 0;
        y < e && Pt.storage.set(Pt.SAVE_KEY_STARS + Pt.levelMng.currLevel, e)
    }, v.prototype.hide = function() {
        this.visible = !1, this.alpha = 0, this._btnRestart.x = this._btnRestart.xOut, this._btnRestart.y = this._btnRestart.yOut, this._btnMenu.x = this._btnMenu.xOut, this._btnMenu.y = this._btnMenu.yOut, this._btnNext.x = this._btnNext.xOut, this._btnNext.y = this._btnNext.yOut, this._text.scale.set(0, 0)
    }, b.prototype = Object.create(PIXI.Container.prototype), b.prototype.constructor = b, b.prototype.show = function(t) {
        TweenMax.to(this, t, {
            x: 0,
            ease: Expo.easeOut
        })
    }, b.prototype.hide = function(t) {
        TweenMax.to(this, t, {
            x: Pt.gameWidth0,
            y: this.hideY,
            ease: Expo.easeOut
        })
    }, b.prototype.refresh = function() {
        for (var t = this._boards.length, e = 0; e < t; e++) this._boards[e].refresh()
    }, S.prototype = Object.create(PIXI.Container.prototype), S.prototype.constructor = S, S.prototype.show = function(t) {
        TweenMax.to(this, t, {
            x: 0,
            ease: Expo.easeOut
        })
    }, S.prototype.hideToLeft = function(t) {
        TweenMax.to(this, t, {
            x: -Pt.gameWidth0,
            y: this.hideY,
            ease: Expo.easeOut
        })
    }, S.prototype.hideToRight = function(t) {
        TweenMax.to(this, t, {
            x: Pt.gameWidth0,
            y: this.hideY,
            ease: Expo.easeOut
        })
    }, A.prototype = Object.create(a.prototype), A.prototype.constructor = A, A.prototype.destroy = function() {
        a.prototype.destroy.call(this), A._balls.remove(this)
    }, A.prototype.setVelocity = function(t) {
        var e = new lt(t.x / Pt.physScale, t.y / Pt.physScale);
        this._body.SetLinearVelocity(e), this._body.SetAngularVelocity(e.x / 10 + .4), this._body.SetAwake(!0)
    }, A.prototype._update = function() {
        a.prototype._update.call(this), this.y > Pt.gameHeight0 + 50 && this.destroy()
    }, A._balls = new h("Balls"), A._maxBalls = 25, A.create = function(t, e, a) {
        if (A._balls.total() >= A._maxBalls) {
            var n = A._balls.first();
            n.destroy(), A._balls.remove(n)
        }
        var i = new A(t, e);
        return a.addChild(i), A._balls.add(i), i
    }, I.prototype = Object.create(a.prototype), I.prototype.constructor = I, I.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }, I.prototype._onBeginContact = function(t) {
        var e = u.getAnotherOfContact(t, this);
        e instanceof A && this._ballInTheNet()
    }, I.prototype._ballInTheNet = function() {
        Pt.soundOn && this.sndBallInBasket.play(), Pt.playState.complete()
    }, D.prototype = Object.create(a.prototype), D.prototype.constructor = D, D.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this), a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this), this.sndStart && this.sndStart.stop(), this._rails.destroy(!0)
    }, D.prototype._createRails = function() {
        this._rails = new PIXI.Container, this._rails.x = this.x, this._rails.y = this.y, this._rails.zOrder = Z.zOrder.rail, Pt.playState.gameLayer.addChild(this._rails), this._endX = this.x, this._endY = this.y;
        var t;
        "v" == this._orienation ? (this._endY = this._end, this._rails.y = this.y - 22) : (this._endX = this._end, this._rails.y = this.y - 22), t = ot.distance1(this.x, this.y, this._endX, this._endY);
        var e = Pt.assets.getSprite("rail", "atlasGame").width / 2,
            a = Math.ceil(t / e);
        console.log(a);
        for (var n = 0; n < a; n++) {
            var i = Pt.assets.getSprite("rail", "atlasGame");
            i.scale.set(.5, .5), i.anchor.set(0, .5), i.x = (i.width - 1) * n, this._rails.addChild(i)
        }
        "v" == this._orienation ? (this._rails.rotation = ot.toRadians(90), this.y > this._endY && (this._rails.y -= t)) : this.x > this._endX && (this._rails.x -= t)
    }, D.prototype._onBeginContact = function(t) {
        var e = u.getAnotherOfContact(t, this);
        e instanceof A && this._ballInTheNet()
    }, D.prototype._ballInTheNet = function() {
        Pt.playState.complete()
    }, D.prototype._onTriggerEvent = function(t) {
        var e = t.id;
        this.id == e && this._move()
    }, D.prototype._move = function() {
        this._isMove || (this._isMove = !0, this._defDirection(), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0, Pt.soundOn && this.sndStart.play())
    }, D.prototype._defDirection = function() {
        this._isUsed || (this._isUsed = !0, this._speed = 2, this._vel = new lt, this._stopVal = 0, "v" == this._orienation ? (this._vel.y = this._speed * (this.y > this._endY ? -1 : 1), this._stopVal = this._endY, this.y > this._endY && (this._rails.y -= length)) : (this._vel.x = this._speed * (this.x > this._endX ? -1 : 1), this._stopVal = this._endX), this._body.SetAwake(!0), this._body.GetLinearVelocity().Set(this._vel.x, this._vel.y))
    }, D.prototype._update = function() {
        a.prototype._update.call(this), this._isMove && ("v" == this._orienation ? ot.equal(this.y, this._stopVal, 3) && this._stop() : ot.equal(this.x, this._stopVal, 3) && this._stop())
    }, D.prototype._stop = function() {
        this._isMove = !1, this._body.GetLinearVelocity().SetZero(), Pt.soundOn && (this.sndStart.stop(), this.sndStop.play())
    }, C.prototype = Object.create(a.prototype), C.prototype.constructor = G, B.prototype = Object.create(a.prototype), B.prototype.constructor = B, B.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.playState.bg.off("pointerdown", this._pointerDown, this), Pt.playState.bg.off("pointerup", this._pointerUp, this), Pt.playState.bg.off("pointerupoutside", this._pointerUp, this)
    }, B.prototype._shot = function(t) {
        this._cannon.playing || (this._shoted = !1, this._cannon.gotoAndStop(0), this._cannon.play(), Pt.soundOn && this.sndShot.play())
    }, B.prototype._pointerDown = function(t) {
        this._countTouches++, null == this._pointerData && (this._pointerData = t.data, this._isAllowMove = !0, Pt.playState.aim.visible = !0, Pt.playState.btnFire.enable = !1)
    }, B.prototype._pointerUp = function(t) {
        this._countTouches--, this._countTouches > 0 || (this._countTouches = 0, this._pointerData == t.data && (this._pointerData = null, this._isAllowMove = !1, Pt.playState.blinkBtnFire(), Pt.playState.btnFire.enable = !0))
    }, B.prototype._frameChanged = function(t) {
        if (t >= 8 && !this._shoted) {
            if (this._shoted = !0, void 0 == this._launchX || void 0 == this._launchY) return;
            var e = A.create(this._launchX, this._launchY, Pt.playState.ballLayer);
            e.setVelocity(this._direction)
        }
    }, B.prototype._shotComplete = function(t) {
        this._cannon.gotoAndStop(0)
    }, B.prototype._update = function(t) {
        if (this._isAllowMove) {
            var e = Pt.pixi.renderer.plugins.interaction,
                a = {};
            Pt.playState.aimControl ? (a.x = this._pointerData.global.x, a.y = this._pointerData.global.y) : a = e.pointer.global, a = {
                x: a.x / Pt.scale,
                y: a.y / Pt.scale
            }, Pt.playState.aimControl && (a.y -= 50, Pt.playState.aim.position.set(a.x, a.y)), this._helperPoint.set(this.x, this.y);
            var n = ot.angleDeg2(a, this._helperPoint) - 90;
            n = ot.normAngleDeg(n, !0), n < this.lowerAngle ? n = this.lowerAngle : n > this.upperAngle && (n = this.upperAngle), this._cannon.rotation = ot.toRadians(n), this._cannon.toLocal(this._ballSpawnPoint, this, this._helperPoint);
            var i = {
                x: -this._helperPoint.x,
                y: this._helperPoint.y
            };
            this._helperPoint.x *= -1;
            var s = 0,
                o = 0;
            Pt.playState.aimControl ? (s = Pt.playState.aim.position.x, o = Pt.playState.aim.position.y) : (e = Pt.pixi.renderer.plugins.interaction, a = e.pointer.global, s = a.x / Pt.scale, o = a.y / Pt.scale), this._launchX = this._helperPoint.x + this.x, this._launchY = this._helperPoint.y + this.y;
            var r = ot.distance1(this._launchX, this._launchY, s, o) / this.shotScale,
                l = ot.distance1(this.x, this.y, s, o),
                y = ot.distance1(this._launchX, this._launchY, s, o),
                h = ot.distance1(this.x, this.y, this._launchX, this._launchY);
            (l < h || l < y || o > this.y + 50) && (r = 0), r > 1 && (r = 1), this._powerBarMask.scale.y = r;
            var d = r * (this.maxPower - this.minPower) + this.minPower;
            this._direction = {
                x: this.x - this._launchX,
                y: this.y - this._launchY
            }, this._direction = ot.pointNormalize(this._direction, -d);
            var c = {
                x: this._direction.x,
                y: this._direction.y
            };
            ot.pointNormalize(c, d);
            var p = 360;
            this.graphics.clear(), this.graphics.drawCircle(i.x, i.y, 4);
            for (var g = 25, m = 4, u = .8, x = 1; x <= 15 * r; x++) this.graphics.beginFill(32110, u /= 1.1), this.graphics.drawCircle(i.x, i.y, m /= 1.05), this.graphics.endFill(), c.y += p / g, i.x += c.x / g, i.y += c.y / g
        }
    }, M.prototype = Object.create(a.prototype), M.prototype.constructor = M, E.prototype = Object.create(a.prototype), E.prototype.constructor = E, E.prototype.destroy = function() {
        a.prototype.destroy.call(this), a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }, E.prototype._onTriggerEvent = function(t) {
        var e = t.id;
        if (this.id == e && !this.opened) {
            this.opened = !0;
            var a = 2;
            "left" == this.direction ? (this._body.SetAwake(!0), this._body.SetAngularVelocity(a * (this.inversed ? -1 : 1))) : "right" == this.direction && (this._body.SetAwake(!0), this._body.SetAngularVelocity(-a * (this.inversed ? -1 : 1))), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0, Pt.soundOn && this.sndGate.play()
        }
    }, E.prototype._stop = function() {
        this._body.SetAngularVelocity(0), this._disableUpdate(), this.angleUpdate = !1, this.positionUpdate = !1
    }, E.prototype._update = function() {
        a.prototype._update.call(this), this.inversed ? ("left" == this.direction && this._body.GetAngle() <= this.openAngle || "right" == this.direction && this._body.GetAngle() >= -this.openAngle) && this._stop() : ("left" == this.direction && this._body.GetAngle() >= this.openAngle || "right" == this.direction && this._body.GetAngle() <= -this.openAngle) && this._stop()
    }, T.prototype = Object.create(a.prototype), T.prototype.constructor = T, O.prototype = Object.create(a.prototype), O.prototype.constructor = O, O.prototype.destroy = function() {
        a.prototype.destroy.call(this), a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }, O.prototype._onTriggerEvent = function(t) {
        var e = t.id;
        this.signalID == e && (this.motorSpeed *= -1, this._revJoint.SetMotorSpeed(this.motorSpeed))
    }, k.prototype = Object.create(a.prototype), k.prototype.constructor = k, k.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }, k.prototype._onBeginContact = function(t) {
        var e = u.getAnotherOfContact(t, this);
        e instanceof A && this.unhook()
    }, k.prototype._update = function() {
        a.prototype._update.call(this), this.y > Pt.gameHeight0 + 50 && this.destroy()
    }, k.prototype.unhook = function() {
        Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this), this._body.SetType(ht.b2_dynamicBody), this._body.SetAwake(!0), this._enableUpdate(), this.angleUpdate = !0, this.positionUpdate = !0, Pt.soundOn && this.sndPeg.play()
    }, R.prototype = Object.create(a.prototype), R.prototype.constructor = R, R.prototype.destroy = function() {
        a.prototype.destroy.call(this), a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }, R.prototype._onTriggerEvent = function(t) {
        var e = t.id;
        t.state;
        this.gearSignalID == e && ("on" == this._state ? this._state = "off" : this._state = "on", "on" == this._state ? this._motorOn(this.gearPower, this.TO_DESTINATION) : "off" == this._state && this._motorOn(-this.gearPower, this.TO_START_ANGLE))
    }, R.prototype._motorOn = function(t, e) {
        if (!Pt.playState.isDestroying) {
            var a = this;
            Pt.physics.doIt(function() {
                a._revJoint = Pt.physWorld.CreateJoint(a._revJointDef), a._trackBody.SetType(ht.b2_dynamicBody), a._trackBody.SetMassData(a._massData), a._trackBody.SetAngularVelocity(0), a._trackBody.SetLinearVelocity(new lt(0, 0)), a._revJoint.EnableMotor(!0), a._revJoint.SetMotorSpeed(t), a._revJoint.SetMaxMotorTorque(Math.abs(t)), a._enableUpdate(), a._gear.play(), a._movingTo = e, Pt.soundOn && a.sndGear.play()
            })
        }
    }, R.prototype._motorOff = function() {
        var t = this;
        Pt.physics.doIt(function() {
            t._movingTo == t.TO_DESTINATION ? t._trackBody.SetAngle(ot.toRadians(t.gearMaxAngle)) : t._movingTo == t.TO_START_ANGLE && t._trackBody.SetAngle(ot.toRadians(t._trackBodyStartAngle)), Pt.physWorld.DestroyJoint(t._revJoint), t._revJoint = null, t._trackBody.SetType(ht.b2_staticBody), t._disableUpdate(), t._gear.stop(), t._movingTo = 0
        })
    }, R.prototype._update = function() {
        a.prototype._update.call(this);
        var t = Math.floor(ot.toDegrees(this._trackBody.GetAngle()));
        this._movingTo == this.TO_DESTINATION ? ot.equal(t, this.gearMaxAngle, 2) && this._motorOff() : this._movingTo == this.TO_START_ANGLE && ot.equal(t, this._trackBodyStartAngle, 2) && this._motorOff()
    }, L.prototype = Object.create(a.prototype), L.prototype.constructor = L, G.prototype = Object.create(a.prototype), G.prototype.constructor = G, U.prototype = Object.create(a.prototype), U.prototype.constructor = U, U.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this), Pt.physWorld.DestroyBody(this._body2)
    }, U.prototype._onBeginContact = function(t) {
        var e = u.getAnotherUserDataOfContact(t, this);
        null != e && 1 == e.dynamic && this._throwBody(e.item.GetBody())
    }, U.prototype._throwBody = function(t) {
        var e = ot.toDegrees(this.rotation) - 90,
            a = ot.vectorVelocityDeg(e, 5 * this.elasticity);
        t.SetLinearVelocity(a), this._spring.gotoAndPlay(0), this._spring.play(), Pt.soundOn && this.sndSpring.play()
    }, F.prototype = Object.create(a.prototype), F.prototype.constructor = F, F.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }, F.prototype._onBeginContact = function(t) {
        var e = u.getAnotherOfContact(t, this);
        e instanceof A && this._catch()
    }, F.prototype._catch = function() {
        this._catched || (Pt.soundOn && this.sndStar.play(), this._catched = !0, TweenMax.to(this, 1, {
            alpha: 0,
            y: this.y - 30,
            onComplete: this.destroy,
            onCompleteScope: this
        }), Pt.playState.addStar())
    }, V.prototype = Object.create(a.prototype), V.prototype.constructor = V, X.prototype = Object.create(a.prototype), X.prototype.constructor = X, N.prototype = Object.create(a.prototype), N.prototype.constructor = N, N.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this), Pt.physics.contactListener.removeEndContactListener(this._onEndContact, this)
    }, N.prototype._onBeginContact = function(t) {
        var e = u.getAnotherUserDataOfContact(t, this);
        if (null != e && 1 == e.dynamic) {
            if ("button" == this.type) {
                if (this._countContacts++, this._switcher.onComplete = null, this._on) return;
                this._on = !0, this._switcher.animationSpeed = 1, this._switcher.play();
                var n = this;
                this._switcher.onComplete = function() {
                    n._on && a.events.emit(a.EVENT_TRIGGER_PRESSED, {
                        id: n.signalID,
                        state: "on"
                    })
                }
            } else "toogle" == this.type && (this._on ? (this._on = !1, this._switcher.animationSpeed = -1, a.events.emit(a.EVENT_TRIGGER_PRESSED, {
                id: this.signalID,
                state: "off"
            })) : (this._on = !0, this._switcher.animationSpeed = 1, a.events.emit(a.EVENT_TRIGGER_PRESSED, {
                id: this.signalID,
                state: "on"
            })), this._switcher.play());
            Pt.soundOn && this.sndSwitcher.play()
        }
    }, N.prototype._onEndContact = function(t) {
        var e = u.getAnotherUserDataOfContact(t, this);
        if (null != e && 1 == e.dynamic && (this._switcher.onComplete = null, this._countContacts--, this._countContacts <= 0 && (this._countContacts = 0, "button" == this.type))) {
            if (0 == this._on) return;
            this._on = !1, this._switcher.stop(), this._switcher.animationSpeed = -1, this._switcher.play(), a.events.emit(a.EVENT_TRIGGER_PRESSED, {
                id: this.signalID,
                state: "off"
            })
        }
    }, W.prototype = Object.create(a.prototype), W.prototype.constructor = W, W.prototype.destroy = function() {
        a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this), Pt.physics.contactListener.removeEndContactListener(this._onEndContact, this), a.events.off(a.EVENT_TELEPORTATION, this._teleportation, this)
    }, W.prototype._onBeginContact = function(t) {
        var e = u.getAnotherOfContact(t, this);
        e instanceof A && (null != e.teleportPhase && 0 != e.teleportPhase || (e.teleportPhase = 1, a.events.emit(a.EVENT_TELEPORTATION, {
            sender: this,
            ball: e,
            id: this.id
        })))
    }, W.prototype._onEndContact = function(t) {
        var e = u.getAnotherOfContact(t, this);
        e instanceof A && (e.teleportPhase++, e.teleportPhase >= 3 && (e.teleportPhase = 0))
    }, W.prototype._teleportation = function(t) {
        var e = t.sender,
            a = t.ball,
            n = t.id;
        if (e != this && n == this.id) {
            var i = this;
            Pt.physics.doIt(function() {
                a.setPosition(i.x, i.y);
                var t = a._body.GetLinearVelocity(),
                    e = ot.vectorVelocityRad(i.rotation - ot.toRadians(90), t.Length() * i.mulVel),
                    n = new lt(e.x, e.y);
                a._body.SetLinearVelocity(n)
            }), Pt.soundOn && this.sndTeleport.play()
        }
    }, Y.prototype = Object.create(a.prototype), Y.prototype.constructor = Y, Y.prototype.suck = function() {
        for (var t = this._body.GetContactList(); null != t;) {
            var e = t.contact;
            if (e.IsEnabled() && e.IsTouching()) {
                var a = u.getAnotherOfContact(e, this);
                a instanceof A && this.suckIt(a._body)
            }
            t = t.next
        }
    }, Y.prototype.suckIt = function(t) {
        t.GetLinearVelocity().SetZero(), t.ApplyForce(this._force, t.GetPosition())
    }, Y.prototype._update = function() {
        a.prototype._update.call(this), this.suck()
    }, z.prototype = Object.create(a.prototype), z.prototype.constructor = z, H.prototype = Object.create(a.prototype), H.prototype.constructor = H, H.prototype._update = function() {
        a.prototype._update.call(this), this.y > Pt.gameHeight0 + 100 && this.destroy()
    }, j.prototype.constructor = j, j.prototype.create = function(t) {
        t = t || this.currLevel, t < 1 ? t = 1 : t > this.totalLevels && (t = this.totalLevels), this.currLevel = t, t--;
        for (var e = ft[t].items, a = e.length, n = 0; n < a; n++) this._createItem(e[n])
    }, j.prototype.onLevelComplete = function() {
        this.currLevel == this.lastOpened && (this.lastOpened++, Pt.storage.set(Pt.SAVE_KEY_LAST_OPENED, this.lastOpened))
    }, j.prototype._createItem = function(t) {
        if ("Cannon" == t.name) {
            var e = new B(t.x, t.y);
            e.lowerAngle = void 0 != t.lowerAngle ? t.lowerAngle : -45, e.upperAngle = void 0 != t.upperAngle ? t.upperAngle : 45, Pt.playState.gameLayer.addChild(e)
        } else if ("Basket" == t.name) {
            var a = new I(t.x, t.y);
            Pt.playState.gameLayer.addChild(a)
        } else if ("Ball" == t.name) {
            var n = new A(t.x, t.y);
            Pt.playState.gameLayer.addChild(n)
        } else if ("Platform" == t.name) {
            var i = new L(t.x, t.y, t.width, t.angle, t.type, t.density);
            Pt.playState.gameLayer.addChild(i)
        } else if ("Star" == t.name) {
            var s = new F(t.x, t.y);
            Pt.playState.gameLayer.addChild(s)
        } else if ("Pivot" == t.name) {
            var o = new R(t.x, t.y, t.type, t.signalID, t.color, t.gearMaxAngle, t.gearPower, t.lowerAngle, t.upperAngle);
            Pt.playState.gameLayer.addChild(o)
        } else if ("Switcher" == t.name) {
            var r = new N(t.x, t.y, t.angle, t.type, t.signalID, t.color);
            Pt.playState.gameLayer.addChild(r)
        } else if ("Teleport" == t.name) {
            var l = new W(t.x, t.y, t.id, t.angle, t.color);
            l.mulVel = t.mulVel || 1, Pt.playState.gameLayer.addChild(l)
        } else if ("Spring" == t.name) {
            var y = new U(t.x, t.y, t.angle, t.type, t.elasticity);
            Pt.playState.gameLayer.addChild(y)
        } else if ("Mill" == t.name) {
            var h = new O(t.x, t.y, t.enableMotor, t.motorSpeed, t.signalID);
            Pt.playState.gameLayer.addChild(h)
        } else if ("Rock" == t.name) {
            var d = new G(t.x, t.y, t.density);
            Pt.playState.gameLayer.addChild(d)
        } else if ("Box" == t.name) {
            var c = new C(t.x, t.y, t.angle, t.density);
            Pt.playState.gameLayer.addChild(c)
        } else if ("Swings" == t.name) {
            var p = new X(t.x, t.y, t.angle, t.lowerAngle, t.upperAngle);
            Pt.playState.gameLayer.addChild(p)
        } else if ("Peg" == t.name) {
            var g = new k(t.x, t.y);
            Pt.playState.gameLayer.addChild(g)
        } else if ("Hammer" == t.name) {
            var m = new T(t.x, t.y, t.angle, t.hmDensity);
            Pt.playState.gameLayer.addChild(m)
        } else if ("WeightBall" == t.name) {
            var u = new H(t.x, t.y, t.wbDensity);
            Pt.playState.gameLayer.addChild(u)
        } else if ("Stopper" == t.name) {
            var x = new V(t.x, t.y);
            Pt.playState.gameLayer.addChild(x)
        } else if ("PushButton" == t.name) {
            var w = new PushButton(t.x, t.y, t.btnID, t.angle);
            Pt.playState.gameLayer.addChild(w)
        } else if ("Gate" == t.name) {
            var f = new E(t.x, t.y, t.direction, t.gateLeftID || t.gateRightID, t.openAngle, t.inversed || !1);
            Pt.playState.gameLayer.addChild(f)
        } else if ("Domino" == t.name) {
            var P = new M(t.x, t.y);
            Pt.playState.gameLayer.addChild(P)
        } else if ("Tube" == t.name) {
            var _ = new Y(t.x, t.y, t.angle, t.plusSensorFront, t.plusSensorBack);
            Pt.playState.gameLayer.addChild(_)
        } else if ("BasketRail" == t.name) {
            var v = new D(t.x, t.y, t.orientation, t.end, t.basketID);
            Pt.playState.gameLayer.addChild(v)
        }
    }, j.prototype.unlockAllLevels = function() {
        this.lastOpened = this.totalLevels
    };
    var ft = [];
    ft[0] = {
        items: [{
            name: "Cannon",
            x: 557.3,
            y: 383.8,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Basket",
            x: 221.55,
            y: 340.85
        }, {
            name: "Platform",
            type: "static",
            x: 188.55,
            y: 312.95,
            density: 1,
            width: 82.1,
            angle: -90
        }, {
            name: "Star",
            x: 277.9,
            y: 167
        }, {
            name: "Star",
            x: 369.35,
            y: 212.8
        }, {
            name: "Star",
            x: 452.4,
            y: 261.25
        }, {
            name: "Platform",
            type: "static",
            x: 256.55,
            y: 314.6,
            density: 1,
            width: 82.1,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 134.8,
            y: 229.2,
            density: 1,
            width: 149.3,
            angle: -135
        }, {
            name: "Platform",
            type: "static",
            x: 84.65,
            y: 98.05,
            density: 1,
            width: 174.2,
            angle: -90
        }]
    }, ft[1] = {
        items: [{
            name: "Basket",
            x: 548.05,
            y: 399.8
        }, {
            name: "Cannon",
            x: 328.2,
            y: 407.45,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 498,
            y: 321.75,
            density: 1,
            width: 187.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 514.05,
            y: 277.3,
            density: 1,
            width: 47.5,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 517.2,
            y: 363.95,
            density: 1,
            width: 50.8,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 583.4,
            y: 327.85,
            density: 1,
            width: 179.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 630.05,
            y: 220.35,
            density: 1,
            width: 118.1,
            angle: 150
        }, {
            name: "Platform",
            type: "static",
            x: 568.2,
            y: 320.65,
            density: 1,
            width: 48.7,
            angle: -30
        }, {
            name: "Star",
            x: 639.65,
            y: 89.8
        }, {
            name: "Star",
            x: 453.3,
            y: 333.9
        }, {
            name: "Star",
            x: 128.3,
            y: 273.55
        }, {
            name: "Platform",
            type: "static",
            x: 558.15,
            y: 200.55,
            density: 1,
            width: 149.3,
            angle: 150
        }, {
            name: "Platform",
            type: "static",
            x: 676.7,
            y: 108.9,
            density: 1,
            width: 179.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 53.05,
            y: 125.8,
            density: 1,
            width: 187.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 83.6,
            y: 232.55,
            density: 1,
            width: 80.9,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 154,
            y: 211.85,
            density: 1,
            width: 187.2,
            angle: 90
        }]
    }, ft[2] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 236.4,
            y: 35.5,
            density: 1,
            width: 294.1,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 235.4,
            y: 216.4,
            density: .6,
            width: 120,
            angle: 90
        }, {
            name: "Basket",
            x: 198.45,
            y: 380.3
        }, {
            name: "Cannon",
            x: 570.05,
            y: 407.5,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 178,
            y: 289.5,
            density: 1,
            width: 132.8,
            angle: 0
        }, {
            name: "Pivot",
            x: 235.6,
            y: 169.45,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -360,
            upperAngle: 270,
            signalID: 0
        }, {
            name: "Platform",
            type: "static",
            x: 41.75,
            y: 245.2,
            density: 1,
            width: 282.5,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 95.7,
            y: 299.75,
            density: 1,
            width: 47.1,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 101.7,
            y: 377.45,
            density: 1,
            width: 136,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 235.4,
            y: 338.65,
            density: 1,
            width: 116.3,
            angle: 90
        }, {
            name: "Star",
            x: 292.3,
            y: 74
        }, {
            name: "Star",
            x: 65.2,
            y: 281.15
        }, {
            name: "Star",
            x: 541.3,
            y: 74
        }]
    }, ft[3] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 401.85,
            y: 423.5,
            density: 1,
            width: 227,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 363.4,
            y: 318,
            density: 1,
            width: 94,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 103.15,
            y: 256.05,
            density: 1,
            width: 195.6,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 177.05,
            y: 320.55,
            density: 1,
            width: 213,
            angle: 90
        }, {
            name: "Basket",
            x: 364,
            y: 329.25
        }, {
            name: "Cannon",
            x: 626,
            y: 365,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Switcher",
            x: 117,
            y: 260,
            angle: 45,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Pivot",
            x: 401.85,
            y: 317.2,
            type: "gear",
            color: "Red",
            gearMaxAngle: 90,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 36.65,
            y: 83.95,
            density: 1,
            width: 216.1,
            angle: 90
        }, {
            name: "Star",
            x: 583.7,
            y: 39.5
        }, {
            name: "Star",
            x: 215.35,
            y: 327.95
        }, {
            name: "Star",
            x: 362.35,
            y: 285.15
        }, {
            name: "Platform",
            type: "static",
            x: 324.85,
            y: 443.5,
            density: 1,
            width: 227,
            angle: 90
        }, {
            name: "Box",
            x: 177.05,
            y: 191.55,
            angle: 0,
            density: 1.8
        }, {
            name: "Platform",
            type: "static",
            x: 177.05,
            y: 57.55,
            density: 1,
            width: 213,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 109.15,
            y: 55.55,
            density: 1,
            width: 195.6,
            angle: 0
        }]
    }, ft[4] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 119.55,
            y: 217.95,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Basket",
            x: 603.3,
            y: 97.35
        }, {
            name: "Cannon",
            x: 461.05,
            y: 330.05,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "dynamic",
            x: 118.7,
            y: 192.35,
            density: 6,
            width: 168.9,
            angle: 88
        }, {
            name: "Switcher",
            x: 18.75,
            y: 151.7,
            angle: 90,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 290.5,
            y: 330.95,
            density: 1,
            width: 90,
            angle: 90
        }, {
            name: "Pivot",
            x: 119.55,
            y: 217.95,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -720,
            upperAngle: 720,
            signalID: 0
        }, {
            name: "Platform",
            type: "static",
            x: 190.5,
            y: 294.9,
            density: .9,
            width: 218.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 11,
            y: 209.3,
            density: 1,
            width: 201.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 59.1,
            y: 116.65,
            density: .9,
            width: 90.6,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 641.4,
            y: 177.85,
            density: 1,
            width: 387.1,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 610.85,
            y: 85.75,
            density: 1,
            width: 79.1,
            angle: 0
        }, {
            name: "Star",
            x: 57.55,
            y: 82.85
        }, {
            name: "Star",
            x: 40.35,
            y: 294.85
        }, {
            name: "Star",
            x: 315.35,
            y: 322.95
        }, {
            name: "Pivot",
            x: 641.6,
            y: 84.65,
            type: "gear",
            color: "Red",
            gearMaxAngle: 60,
            gearPower: 8,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 683.55,
            y: 163.95,
            density: .9,
            width: 218.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 741.85,
            y: 362.4,
            density: .9,
            width: 218.9,
            angle: 0
        }]
    }, ft[5] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 612.15,
            y: 223.65,
            density: 1,
            width: 18,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 637.25,
            y: 149.35,
            density: 1,
            width: 53.8,
            angle: 90
        }, {
            name: "Basket",
            x: 42,
            y: 284.1
        }, {
            name: "Cannon",
            x: 341.2,
            y: 395.25,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Teleport",
            x: 108.15,
            y: 140.95,
            angle: 180,
            color: "Red",
            id: 0,
            mulVel: 1
        }, {
            name: "Teleport",
            x: 651.55,
            y: 199.25,
            angle: -90,
            color: "Red",
            id: 0,
            mulVel: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 576.75,
            y: 270.45,
            density: 1,
            width: 136.7,
            angle: 127
        }, {
            name: "Platform",
            type: "static",
            x: 121.25,
            y: 225.5,
            density: 1,
            width: 157.9,
            angle: 127
        }, {
            name: "Switcher",
            x: 174.25,
            y: 200.05,
            angle: 90,
            type: "toogle",
            color: "Green",
            signalID: 1
        }, {
            name: "Pivot",
            x: 612.15,
            y: 223.65,
            type: "gear",
            color: "Green",
            gearMaxAngle: 225,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 92.8,
            y: 76.7,
            density: 1,
            width: 160.5,
            angle: 180
        }, {
            name: "Star",
            x: 313.85,
            y: 35
        }, {
            name: "Star",
            x: 65.35,
            y: 44
        }, {
            name: "Star",
            x: 668.35,
            y: 151.35
        }, {
            name: "Platform",
            type: "static",
            x: 166.5,
            y: 191.2,
            density: 1,
            width: 247,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 21.55,
            y: 177.8,
            density: 1,
            width: 217.9,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 601.75,
            y: 178.5,
            density: .6,
            width: 136.7,
            angle: 127
        }, {
            name: "Pivot",
            x: 638,
            y: 129.65,
            type: "gear",
            color: "Green",
            gearMaxAngle: 225,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 698.25,
            y: 116.65,
            density: 1,
            width: 254.8,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 667.85,
            y: 238.6,
            density: 1,
            width: 78.9,
            angle: 0
        }]
    }, ft[6] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 609.6,
            y: 67.45,
            density: 1,
            width: 171.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 610,
            y: 144.45,
            density: 1,
            width: 86.2,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 644.1,
            y: 181,
            density: 1,
            width: 91.1,
            angle: 90
        }, {
            name: "Cannon",
            x: 119.2,
            y: 387.85,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Basket",
            x: 419.45,
            y: 73.4
        }, {
            name: "Rock",
            x: 375.7,
            y: 204.55,
            density: 2
        }, {
            name: "Platform",
            type: "static",
            x: 465.75,
            y: 173.15,
            density: 1,
            width: 294.1,
            angle: 90
        }, {
            name: "Switcher",
            x: 610,
            y: 152.45,
            angle: -180,
            type: "button",
            color: "Blue",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 377.6,
            y: 150.05,
            density: 1,
            width: 46.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 420.7,
            y: 136,
            density: 1,
            width: 104,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 421.75,
            y: 32.45,
            density: 1,
            width: 106.2,
            angle: 0
        }, {
            name: "Star",
            x: 516.3,
            y: 384.2
        }, {
            name: "Star",
            x: 47.35,
            y: 106
        }, {
            name: "Star",
            x: 437.3,
            y: 307.8
        }, {
            name: "Platform",
            type: "dynamic",
            x: 377.6,
            y: 68.65,
            density: 1,
            width: 91.1,
            angle: 90
        }, {
            name: "Pivot",
            x: 377.85,
            y: 31.85,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 180,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 377.6,
            y: 260.05,
            density: 1,
            width: 60.2,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 525.65,
            y: 267,
            density: .3,
            width: 253.8,
            angle: 0
        }, {
            name: "Pivot",
            x: 465.45,
            y: 267.2,
            type: "bolt",
            color: "Blue",
            gearMaxAngle: 178,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 639.6,
            y: 302.55,
            density: 1,
            width: 43.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 377.6,
            y: 373.05,
            density: 1,
            width: 46.1,
            angle: 90
        }, {
            name: "Rock",
            x: 375.7,
            y: 321.55,
            density: 2
        }, {
            name: "Platform",
            type: "static",
            x: 421.25,
            y: 399.8,
            density: 1,
            width: 104,
            angle: 15
        }, {
            name: "Platform",
            type: "static",
            x: 539.2,
            y: 412.95,
            density: 1,
            width: 141,
            angle: 0
        }, {
            name: "Switcher",
            x: 642.15,
            y: 435.05,
            angle: 0,
            type: "button",
            color: "Green",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 683.6,
            y: 377.55,
            density: 1,
            width: 143.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 600.7,
            y: 427,
            density: 1,
            width: 46.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 642.15,
            y: 441.05,
            density: 1,
            width: 100.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 662.15,
            y: 315.05,
            density: 1,
            width: 60.9,
            angle: 0
        }, {
            name: "Pivot",
            x: 644.35,
            y: 143.8,
            type: "gear",
            color: "Green",
            gearMaxAngle: 0,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }]
    }, ft[7] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 571.45,
            y: 149.35,
            density: 1,
            width: 210.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 323.15,
            y: 147.25,
            density: 1,
            width: 42.4,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 258.75,
            y: 147.35,
            density: 1,
            width: 117,
            angle: 0
        }, {
            name: "Basket",
            x: 83.4,
            y: 313.3
        }, {
            name: "Cannon",
            x: 486.15,
            y: 396.95,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Switcher",
            x: 644.85,
            y: 60,
            angle: 180,
            type: "toogle",
            color: "Purple",
            signalID: 1
        }, {
            name: "Pivot",
            x: 309.9,
            y: 147.25,
            type: "gear",
            color: "Purple",
            gearMaxAngle: 60,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Rock",
            x: 482.15,
            y: 187,
            density: .35
        }, {
            name: "Platform",
            type: "static",
            x: 64.05,
            y: 245.75,
            density: 1,
            width: 120.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 106.55,
            y: 181.85,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 146.55,
            y: 181.85,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 188.05,
            y: 245.4,
            density: 1,
            width: 119.6,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 166.65,
            y: 154.55,
            density: 1,
            width: 56.8,
            angle: -15
        }, {
            name: "Platform",
            type: "static",
            x: 126.55,
            y: 328.85,
            density: 1,
            width: 142.7,
            angle: 90
        }, {
            name: "Swings",
            x: 126.55,
            y: 243.1,
            angle: -20,
            lowerAngle: -20,
            upperAngle: 20
        }, {
            name: "Platform",
            type: "static",
            x: 91.05,
            y: 157.8,
            density: 1,
            width: 43.8,
            angle: 15
        }, {
            name: "Platform",
            type: "static",
            x: 167.8,
            y: 194.8,
            density: 1,
            width: 60.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 85.1,
            y: 194.8,
            density: 1,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 74.5,
            y: 97.5,
            density: 1,
            width: 129.5,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 710.8,
            y: 150.5,
            density: 1,
            width: 212.5,
            angle: 90
        }, {
            name: "Star",
            x: 356.7,
            y: 366
        }, {
            name: "Star",
            x: 478.5,
            y: 80
        }, {
            name: "Star",
            x: 652.45,
            y: 299.7
        }, {
            name: "Platform",
            type: "static",
            x: 456.45,
            y: 232.85,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 506.45,
            y: 232.85,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 537.2,
            y: 245.8,
            density: 1,
            width: 79.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 385.25,
            y: 290.45,
            density: 1,
            width: 173.7,
            angle: -30
        }, {
            name: "Spring",
            x: 282.45,
            y: 366.65,
            angle: -10,
            type: "static",
            elasticity: 3
        }, {
            name: "Platform",
            type: "static",
            x: 336.35,
            y: 98.5,
            density: 1,
            width: 112.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 523.7,
            y: 52.25,
            density: 1,
            width: 392.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 354.35,
            y: 210.3,
            density: 1,
            width: 94.2,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 389.95,
            y: 122.9,
            density: 1,
            width: 151.8,
            angle: -90
        }, {
            name: "Spring",
            x: 651.45,
            y: 395.55,
            angle: 0,
            type: "static",
            elasticity: 3
        }]
    }, ft[8] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 61.1,
            y: 271.25,
            density: 1,
            width: 71.6,
            angle: 13
        }, {
            name: "Platform",
            type: "static",
            x: 533.95,
            y: 71.3,
            density: 1,
            width: 265,
            angle: 0
        }, {
            name: "Basket",
            x: 573.05,
            y: 172.55
        }, {
            name: "Cannon",
            x: 263.75,
            y: 230.1,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "dynamic",
            x: 411.6,
            y: 106.9,
            density: .1,
            width: 90.4,
            angle: 90
        }, {
            name: "Box",
            x: 158.55,
            y: 169.55,
            angle: 0,
            density: .3
        }, {
            name: "Platform",
            type: "static",
            x: 534.45,
            y: 238.1,
            density: 1,
            width: 263.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 457,
            y: 366.1,
            density: 1,
            width: 306.4,
            angle: 5
        }, {
            name: "Platform",
            type: "static",
            x: 599.45,
            y: 401.1,
            density: 1,
            width: 59.6,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 657.7,
            y: 245.1,
            density: 1,
            width: 365.8,
            angle: -90
        }, {
            name: "Switcher",
            x: 628.65,
            y: 414.8,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 628.75,
            y: 421.85,
            density: 1,
            width: 76.1,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 411.4,
            y: 202.25,
            density: 1,
            width: 91.6,
            angle: -90
        }, {
            name: "Switcher",
            x: 61.55,
            y: 263.1,
            angle: 13,
            type: "button",
            color: "Green",
            signalID: 3
        }, {
            name: "Star",
            x: 556.3,
            y: 44
        }, {
            name: "Star",
            x: 22.35,
            y: 41.2
        }, {
            name: "Star",
            x: 460.3,
            y: 207.15
        }, {
            name: "Platform",
            type: "static",
            x: 611.25,
            y: 200.85,
            density: 1,
            width: 90.6,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 581.05,
            y: 163.95,
            density: .1,
            width: 78.4,
            angle: 0
        }, {
            name: "Pivot",
            x: 611,
            y: 165.75,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 45,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 634.25,
            y: 165.8,
            density: 1,
            width: 160.6,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 577.75,
            y: 94.55,
            density: 1,
            width: 131,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 522.15,
            y: 176.8,
            density: .1,
            width: 138.6,
            angle: -90
        }, {
            name: "Pivot",
            x: 523,
            y: 237.15,
            type: "gear",
            color: "Red",
            gearMaxAngle: -135,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Pivot",
            x: 411.15,
            y: 71.05,
            type: "gear",
            color: "Green",
            gearMaxAngle: 225,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 33.35,
            y: 160.8,
            density: 1,
            width: 203.4,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 271.1,
            y: 238.1,
            density: 1,
            width: 200.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 137.45,
            y: 258.95,
            density: 1,
            width: 130.4,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 192.35,
            y: 329.05,
            density: 1,
            width: 127,
            angle: 13
        }, {
            name: "Switcher",
            x: 279.75,
            y: 394.85,
            angle: 0,
            type: "button",
            color: "Blue",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 308.45,
            y: 317.7,
            density: 1,
            width: 175.5,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 280.3,
            y: 401.85,
            density: 1,
            width: 75.1,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 247.45,
            y: 373.35,
            density: 1,
            width: 76.6,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 2.75,
            y: 68.1,
            density: 1,
            width: 79.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 179.45,
            y: 219.95,
            density: 1,
            width: 52.4,
            angle: -90
        }]
    }, ft[9] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 36.45,
            y: 375.85,
            density: 1,
            width: 99.7,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 103.85,
            y: 334.95,
            density: .1,
            width: 152.6,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 671.95,
            y: 401.35,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 104.95,
            y: 385.55,
            density: 1,
            width: 80.2,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 396.15,
            y: 161.3,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Switcher",
            x: 494.35,
            y: 100.7,
            angle: -45,
            type: "button",
            color: "Red",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 539.05,
            y: 67.4,
            density: 1,
            width: 153.3,
            angle: -45
        }, {
            name: "Basket",
            x: 164.25,
            y: 111.4
        }, {
            name: "Cannon",
            x: 293.75,
            y: 406.05,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Teleport",
            x: 137.75,
            y: 383.65,
            angle: 0,
            color: "Blue",
            id: 0,
            mulVel: 4
        }, {
            name: "Teleport",
            x: 449.15,
            y: 362.65,
            angle: 0,
            color: "Blue",
            id: 0,
            mulVel: 1.4
        }, {
            name: "Spring",
            x: 672.8,
            y: 401.15,
            angle: 20,
            type: "dynamic",
            elasticity: 2.4
        }, {
            name: "Platform",
            type: "dynamic",
            x: 395.9,
            y: 102.2,
            density: .2,
            width: 137.7,
            angle: 90
        }, {
            name: "Pivot",
            x: 396.15,
            y: 161.3,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 0
        }, {
            name: "Pivot",
            x: 672.95,
            y: 401.1,
            type: "gear",
            color: "Red",
            gearMaxAngle: -45,
            gearPower: -8,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Pivot",
            x: 37.7,
            y: 335.7,
            type: "bolt",
            color: "Blue",
            gearMaxAngle: -90,
            gearPower: -5,
            lowerAngle: -180,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 373.9,
            y: 25.35,
            density: 1,
            width: 38.6,
            angle: -90
        }, {
            name: "Star",
            x: 124.4,
            y: 51
        }, {
            name: "Star",
            x: 48.45,
            y: 251.55
        }, {
            name: "Star",
            x: 459.3,
            y: 39.95
        }, {
            name: "Platform",
            type: "static",
            x: 416.9,
            y: 329.15,
            density: 1,
            width: 153.4,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 477.4,
            y: 261.45,
            density: 1,
            width: 137.6,
            angle: 15
        }, {
            name: "Platform",
            type: "static",
            x: 472.75,
            y: 414.85,
            density: 1,
            width: 128.4,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 170.5,
            y: 385.35,
            density: 1,
            width: 79.5,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 691.45,
            y: 414.85,
            density: 1,
            width: 57,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 70.95,
            y: 416.95,
            density: 1,
            width: 86.5,
            angle: 0
        }, {
            name: "Switcher",
            x: 71.2,
            y: 409.1,
            angle: 0,
            type: "button",
            color: "Blue",
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 126.8,
            y: 136.7,
            density: 1,
            width: 94.5,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 163.85,
            y: 97.9,
            density: 1,
            width: 94.1,
            angle: 0
        }, {
            name: "Pivot",
            x: 126.05,
            y: 98.65,
            type: "gear",
            color: "Blue",
            gearMaxAngle: -45,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 201.25,
            y: 145.9,
            density: 1,
            width: 73.5,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 164.1,
            y: 174.55,
            density: 1,
            width: 90.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 482.25,
            y: 15.05,
            density: 1,
            width: 234.5,
            angle: 0
        }]
    }, ft[10] = {
        items: [{
            name: "Platform",
            type: "dynamic",
            x: 184.4,
            y: 74,
            density: 1,
            width: 128.5,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 237.65,
            y: 159.15,
            density: 1,
            width: 162.8,
            angle: -15
        }, {
            name: "Platform",
            type: "static",
            x: 114.95,
            y: 313.75,
            density: 1,
            width: 151.5,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 629.7,
            y: 395.25,
            density: 1,
            width: 170.9,
            angle: 90
        }, {
            name: "Spring",
            x: 662.9,
            y: 300.35,
            angle: -20,
            type: "static",
            elasticity: 2
        }, {
            name: "Basket",
            x: 590.7,
            y: 419.7
        }, {
            name: "Cannon",
            x: 413.55,
            y: 374.15,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 329.65,
            y: 137.15,
            density: 1,
            width: 44.7,
            angle: 0
        }, {
            name: "Switcher",
            x: 222.35,
            y: 27.85,
            angle: -90,
            type: "button",
            color: "Red",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 447.15,
            y: 137.15,
            density: 1,
            width: 125.8,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 142.65,
            y: 247.05,
            density: .1,
            width: 71.5,
            angle: 0
        }, {
            name: "Pivot",
            x: 115.7,
            y: 247.95,
            type: "gear",
            color: "Green",
            gearMaxAngle: -45,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Spring",
            x: 531.35,
            y: 190.3,
            angle: 20,
            type: "static",
            elasticity: 2.35
        }, {
            name: "Rock",
            x: 334.95,
            y: 100.25,
            density: 5
        }, {
            name: "Platform",
            type: "static",
            x: 664.95,
            y: 303.95,
            density: 1,
            width: 51.7,
            angle: -20
        }, {
            name: "Platform",
            type: "static",
            x: 167.95,
            y: 300.5,
            density: 1,
            width: 79.6,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 431.25,
            y: 396.8,
            density: 1,
            width: 414,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 682.1,
            y: 55.9,
            density: 1,
            width: 96.1,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 365.35,
            y: 436.2,
            density: 1,
            width: 390.1,
            angle: 0
        }, {
            name: "Switcher",
            x: 674.1,
            y: 80.95,
            angle: -90,
            type: "toogle",
            color: "Green",
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 136.65,
            y: 402.6,
            density: 1,
            width: 77.4,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 198.4,
            y: 366.05,
            density: 1,
            width: 92.4,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 527.3,
            y: 193.5,
            density: 1,
            width: 58,
            angle: 20
        }, {
            name: "Platform",
            type: "static",
            x: 231.6,
            y: 28.2,
            density: 1,
            width: 40.7,
            angle: 90
        }, {
            name: "Star",
            x: 466.25,
            y: 173
        }, {
            name: "Star",
            x: 106.3,
            y: 203.2
        }, {
            name: "Star",
            x: 206.35,
            y: 342.95
        }, {
            name: "Platform",
            type: "static",
            x: 184.55,
            y: 68.15,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Pivot",
            x: 184.55,
            y: 68.15,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 180,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 504.35,
            y: 100.4,
            density: 1,
            width: 177,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 632.1,
            y: 111.4,
            density: 1,
            width: 85.1,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 652.7,
            y: 160.45,
            density: 1,
            width: 58,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 593.3,
            y: 18.15,
            density: 1,
            width: 195.7,
            angle: 0
        }, {
            name: "Pivot",
            x: 115.7,
            y: 381.95,
            type: "gear",
            color: "Green",
            gearMaxAngle: 0,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 610.8,
            y: 318.75,
            density: 1,
            width: 54.9,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 565.35,
            y: 271.95,
            density: .1,
            width: 120.9,
            angle: 60
        }, {
            name: "Pivot",
            x: 593.55,
            y: 318.9,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }]
    }, ft[11] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 526.45,
            y: 380.1,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Switcher",
            x: 608.95,
            y: 318.3,
            angle: 0,
            type: "button",
            color: "Blue",
            signalID: 2
        }, {
            name: "Basket",
            x: 404.15,
            y: 149.4
        }, {
            name: "Mill",
            x: 115,
            y: 161.3,
            enableMotor: !0,
            motorSpeed: 10,
            signalID: 2
        }, {
            name: "Spring",
            x: 527.1,
            y: 378.2,
            angle: -15,
            type: "static",
            elasticity: 4
        }, {
            name: "Switcher",
            x: 670.3,
            y: 318.3,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Cannon",
            x: 315.25,
            y: 405.7,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 639.4,
            y: 327.35,
            density: 1,
            width: 142.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 284.75,
            y: 161.65,
            density: 1,
            width: 181,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 254.4,
            y: 72.35,
            density: 1,
            width: 360.6,
            angle: 0
        }, {
            name: "Star",
            x: 552.3,
            y: 145
        }, {
            name: "Star",
            x: 586.1,
            y: 377.2
        }, {
            name: "Star",
            x: 44.35,
            y: 294.95
        }, {
            name: "Platform",
            type: "static",
            x: 52.1,
            y: 225.85,
            density: 1,
            width: 205.7,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 33.05,
            y: 119.35,
            density: 1,
            width: 137.7,
            angle: 135
        }, {
            name: "Platform",
            type: "static",
            x: 425.75,
            y: 106.05,
            density: 1,
            width: 85.5,
            angle: 90
        }, {
            name: "Teleport",
            x: 457.75,
            y: 105.5,
            angle: 180,
            color: "Red",
            id: 0,
            mulVel: 1
        }, {
            name: "Teleport",
            x: 640.05,
            y: 156.6,
            angle: 180,
            color: "Red",
            id: 0,
            mulVel: 1
        }, {
            name: "Platform",
            type: "static",
            x: 366.25,
            y: 195.4,
            density: 1,
            width: 85.5,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 395.25,
            y: 229.15,
            density: 1,
            width: 76.1,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 172.35,
            y: 245.1,
            density: 1,
            width: 158.2,
            angle: 135
        }, {
            name: "Pivot",
            x: 122.9,
            y: 293.25,
            type: "gear",
            color: "Red",
            gearMaxAngle: 225,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 577.9,
            y: 258.5,
            density: 1,
            width: 120.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 620.4,
            y: 194.6,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 660.4,
            y: 194.6,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 701.9,
            y: 258.15,
            density: 1,
            width: 119.6,
            angle: 90
        }, {
            name: "Swings",
            x: 640.4,
            y: 255.85,
            angle: -20,
            lowerAngle: -20,
            upperAngle: 20
        }, {
            name: "Platform",
            type: "static",
            x: 681.65,
            y: 207.55,
            density: 1,
            width: 60.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 598.95,
            y: 207.55,
            density: 1,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 607.5,
            y: 73.8,
            density: 1,
            width: 194.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 674.5,
            y: 73.8,
            density: 1,
            width: 192.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 638.4,
            y: 301.4,
            density: 1,
            width: 37.2,
            angle: 90
        }]
    }, ft[12] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 512.1,
            y: 123.1,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 661.45,
            y: 345.95,
            density: 1,
            width: 52.1,
            angle: 120
        }, {
            name: "Platform",
            type: "static",
            x: 548.75,
            y: 260.95,
            density: 1,
            width: 296.3,
            angle: 30
        }, {
            name: "Platform",
            type: "dynamic",
            x: 489.15,
            y: 264.6,
            density: 5,
            width: 92.9,
            angle: 90
        }, {
            name: "Pivot",
            x: 489.15,
            y: 227.15,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 583.15,
            y: 320.65,
            density: 5,
            width: 92.9,
            angle: 90
        }, {
            name: "Pivot",
            x: 583.15,
            y: 283.2,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 0
        }, {
            name: "Platform",
            type: "static",
            x: 39.9,
            y: 333.7,
            density: 1,
            width: 18,
            angle: 180
        }, {
            name: "Basket",
            x: 152.65,
            y: 341.35
        }, {
            name: "Cannon",
            x: 107.65,
            y: 246.75,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "dynamic",
            x: 105.5,
            y: 333.05,
            density: .1,
            width: 147.3,
            angle: 0
        }, {
            name: "Teleport",
            x: 72.15,
            y: 377.7,
            angle: 30,
            color: "Red",
            id: 0,
            mulVel: 3
        }, {
            name: "Teleport",
            x: 641.5,
            y: 392.65,
            angle: -60,
            color: "Red",
            id: 0,
            mulVel: 3
        }, {
            name: "Pivot",
            x: 39.9,
            y: 333.7,
            type: "gear",
            color: "Red",
            gearMaxAngle: -20,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 190.8,
            y: 388,
            density: 1,
            width: 263.9,
            angle: 90
        }, {
            name: "Star",
            x: 48.35,
            y: 32.6
        }, {
            name: "Star",
            x: 219.6,
            y: 377
        }, {
            name: "Platform",
            type: "static",
            x: 562.6,
            y: 178.6,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Switcher",
            x: 647.95,
            y: 155.4,
            angle: -45,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 568.95,
            y: 101.55,
            density: .3,
            width: 135.9,
            angle: -20
        }, {
            name: "Platform",
            type: "dynamic",
            x: 554.5,
            y: 154.45,
            density: 1,
            width: 70.2,
            angle: -110
        }, {
            name: "Pivot",
            x: 562.95,
            y: 178.3,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 0
        }, {
            name: "Pivot",
            x: 512.1,
            y: 123.1,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 0
        }, {
            name: "Platform",
            type: "static",
            x: 653.35,
            y: 160.8,
            density: 1,
            width: 46.9,
            angle: 135
        }, {
            name: "Star",
            x: 555.8,
            y: 72.4
        }, {
            name: "Platform",
            type: "static",
            x: 46.6,
            y: 426.7,
            density: 1,
            width: 69.4,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 498.75,
            y: 341.95,
            density: 1,
            width: 264,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 87.35,
            y: 263.95,
            density: 1,
            width: 224.9,
            angle: 0
        }]
    }, ft[13] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 680,
            y: 269.9,
            density: 1,
            width: 311.5,
            angle: 90
        }, {
            name: "Basket",
            x: 642.15,
            y: 348.6
        }, {
            name: "Platform",
            type: "static",
            x: 642.4,
            y: 416.35,
            density: 1,
            width: 94.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 94.5,
            y: 262.1,
            density: 1,
            width: 91.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 249.5,
            y: 262.1,
            density: 1,
            width: 91.7,
            angle: 90
        }, {
            name: "Swings",
            x: 172.55,
            y: 273.6,
            angle: -25,
            lowerAngle: -25,
            upperAngle: 25
        }, {
            name: "Platform",
            type: "static",
            x: 233.25,
            y: 397.8,
            density: 1,
            width: 57.7,
            angle: 90
        }, {
            name: "Switcher",
            x: 199.9,
            y: 410.9,
            angle: 0,
            type: "button",
            color: "Blue",
            signalID: 3
        }, {
            name: "Switcher",
            x: 140.4,
            y: 410.9,
            angle: 0,
            type: "button",
            color: "Green",
            signalID: 2
        }, {
            name: "Swings",
            x: 110.25,
            y: 352.45,
            angle: -25,
            lowerAngle: -25,
            upperAngle: 30
        }, {
            name: "Swings",
            x: 230.25,
            y: 352.45,
            angle: -30,
            lowerAngle: -30,
            upperAngle: 25
        }, {
            name: "Platform",
            type: "static",
            x: 170.25,
            y: 359.1,
            density: 1,
            width: 135.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 109.25,
            y: 397.9,
            density: 1,
            width: 58,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 73.4,
            y: 298.7,
            density: 1,
            width: 60.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 192.55,
            y: 208.6,
            density: 1,
            width: 50,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 151.55,
            y: 208.6,
            density: 1,
            width: 50,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 221.75,
            y: 224.95,
            density: 1,
            width: 75,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 123.65,
            y: 224.95,
            density: 1,
            width: 75.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 274.15,
            y: 298.7,
            density: 1,
            width: 67.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 51.25,
            y: 357.9,
            density: 1,
            width: 135,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 177.15,
            y: 417.9,
            density: 1,
            width: 265.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 124.3,
            y: 132.45,
            density: 1,
            width: 64.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 156.3,
            y: 108.1,
            density: 1,
            width: 80.7,
            angle: 0
        }, {
            name: "Cannon",
            x: 435.35,
            y: 348.45,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 301.8,
            y: 358.1,
            density: 1,
            width: 136,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 603.9,
            y: 270.35,
            density: 1,
            width: 312.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 137.65,
            y: 172.45,
            density: 1,
            width: 50,
            angle: -135
        }, {
            name: "Star",
            x: 136.1,
            y: 32.25
        }, {
            name: "Star",
            x: 51.35,
            y: 249.9
        }, {
            name: "Star",
            x: 575.75,
            y: 362.2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 615.9,
            y: 329.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 604.25,
            y: 328.4,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: 40,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 4
        }, {
            name: "Platform",
            type: "dynamic",
            x: 668.85,
            y: 329.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 680.25,
            y: 328.4,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: -40,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 4
        }, {
            name: "Switcher",
            x: 269.9,
            y: 410.9,
            angle: 0,
            type: "button",
            color: "Yellow",
            signalID: 4
        }, {
            name: "Switcher",
            x: 79.9,
            y: 410.9,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 615.9,
            y: 279.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 604.25,
            y: 278.4,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 40,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "dynamic",
            x: 668.85,
            y: 279.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 680.25,
            y: 278.4,
            type: "gear",
            color: "Blue",
            gearMaxAngle: -40,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "dynamic",
            x: 615.9,
            y: 219.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 604.25,
            y: 218.4,
            type: "gear",
            color: "Green",
            gearMaxAngle: 40,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 668.85,
            y: 219.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 680.25,
            y: 218.4,
            type: "gear",
            color: "Green",
            gearMaxAngle: -40,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 615.9,
            y: 159.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 604.25,
            y: 158.4,
            type: "gear",
            color: "Red",
            gearMaxAngle: 40,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 668.85,
            y: 159.2,
            density: 1,
            width: 40,
            angle: 0
        }, {
            name: "Pivot",
            x: 680.25,
            y: 158.4,
            type: "gear",
            color: "Red",
            gearMaxAngle: -40,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 603.85,
            y: 110,
            density: 1,
            width: 40,
            angle: -90
        }, {
            name: "Pivot",
            x: 604.25,
            y: 121.4,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 679.45,
            y: 110,
            density: 1,
            width: 40,
            angle: 90
        }, {
            name: "Pivot",
            x: 680.25,
            y: 121.4,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }]
    }, ft[14] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 372.15,
            y: 319.1,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 153.75,
            y: 119.85,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 271.95,
            y: 119.85,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Basket",
            x: 304.15,
            y: 361.35
        }, {
            name: "Platform",
            type: "static",
            x: 137.85,
            y: 274.05,
            density: 1,
            width: 100,
            angle: 0
        }, {
            name: "Box",
            x: 212.45,
            y: 104.6,
            angle: 0,
            density: 1
        }, {
            name: "Cannon",
            x: 564.3,
            y: 410.85,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "dynamic",
            x: 350.2,
            y: 318.9,
            density: 1,
            width: 62.9,
            angle: 0
        }, {
            name: "Pivot",
            x: 372.15,
            y: 319.1,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: -35,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 178.1,
            y: 296.95,
            density: 1,
            width: 62.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 181.9,
            y: 319.1,
            density: 1,
            width: 25.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 330,
            y: 274.8,
            density: 1,
            width: 180,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 411.9,
            y: 289.15,
            density: 1,
            width: 307.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 340.95,
            y: 131.1,
            density: 1,
            width: 159.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 389.95,
            y: 257.1,
            density: 1,
            width: 65.2,
            angle: 150
        }, {
            name: "Platform",
            type: "dynamic",
            x: 176.9,
            y: 132.1,
            density: 1,
            width: 71.8,
            angle: 30
        }, {
            name: "Platform",
            type: "dynamic",
            x: 248.95,
            y: 132.1,
            density: 1,
            width: 71.8,
            angle: -30
        }, {
            name: "Pivot",
            x: 153.75,
            y: 119.85,
            type: "gear",
            color: "Green",
            gearMaxAngle: 90,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Pivot",
            x: 271.95,
            y: 119.85,
            type: "gear",
            color: "Green",
            gearMaxAngle: -90,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Switcher",
            x: 694.3,
            y: 105.4,
            angle: -90,
            type: "toogle",
            color: "Green",
            signalID: 1
        }, {
            name: "Switcher",
            x: 49.85,
            y: 261.25,
            angle: 90,
            type: "toogle",
            color: "Yellow",
            signalID: 2
        }, {
            name: "Ball",
            x: 333.15,
            y: 300.3
        }, {
            name: "Platform",
            type: "static",
            x: 192.25,
            y: 60.4,
            density: 1,
            width: 316.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 42.85,
            y: 166.6,
            density: 1,
            width: 229.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 249.1,
            y: 296.25,
            density: 1,
            width: 61.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 245.5,
            y: 318.1,
            density: 1,
            width: 26.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 702,
            y: 99.5,
            density: 1,
            width: 71.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 680.75,
            y: 72.85,
            density: 1,
            width: 60.5,
            angle: 0
        }, {
            name: "Star",
            x: 128.9,
            y: 33
        }, {
            name: "Star",
            x: 214.35,
            y: 326.95
        }, {
            name: "Star",
            x: 678.35,
            y: 47.05
        }, {
            name: "Platform",
            type: "static",
            x: 330,
            y: 433.8,
            density: 1,
            width: 180,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 249.1,
            y: 388.25,
            density: 1,
            width: 105.7,
            angle: 90
        }]
    }, ft[15] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 630.8,
            y: 63.4,
            density: 1,
            width: 155.8,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 356.95,
            y: 400.7,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Switcher",
            x: 431.95,
            y: 152.95,
            angle: 180,
            type: "toogle",
            color: "Purple",
            signalID: 3
        }, {
            name: "Basket",
            x: 172.1,
            y: 290.3
        }, {
            name: "Switcher",
            x: 20.3,
            y: 386.6,
            angle: 90,
            type: "toogle",
            color: "Blue",
            signalID: 1
        }, {
            name: "Cannon",
            x: 498.75,
            y: 364.8,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Star",
            x: 273.3,
            y: 319.3
        }, {
            name: "Star",
            x: 159.45,
            y: 209
        }, {
            name: "Star",
            x: 617.35,
            y: 36.95
        }, {
            name: "Platform",
            type: "static",
            x: 435.5,
            y: 29.45,
            density: 1,
            width: 60.3,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 69.85,
            y: 29.45,
            density: 1,
            width: 60.3,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 185.25,
            y: 163,
            density: 1,
            width: 175.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 358.9,
            y: 162.95,
            density: 1,
            width: 94.4,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 101.15,
            y: 145,
            density: 1,
            width: 29,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 444.8,
            y: 144.95,
            density: 1,
            width: 113.5,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 252.1,
            y: 31.4,
            density: .01,
            width: 266.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 106.65,
            y: 154,
            density: 1,
            width: 36,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 397.05,
            y: 154,
            density: 1,
            width: 36,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 98.65,
            y: 50.65,
            density: 1,
            width: 75.8,
            angle: 0
        }, {
            name: "Pivot",
            x: 67.95,
            y: 51.1,
            type: "gear",
            color: "Green",
            gearMaxAngle: 180,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 406.05,
            y: 50.6,
            density: 1,
            width: 76.7,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 565.5,
            y: 96.65,
            density: .1,
            width: 63.3,
            angle: 45
        }, {
            name: "Rock",
            x: 581,
            y: 61.25,
            density: 10
        }, {
            name: "Platform",
            type: "static",
            x: 63.1,
            y: 331.75,
            density: 1,
            width: 112,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 119.5,
            y: 256.4,
            density: 1,
            width: 168.8,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 223.25,
            y: 317.9,
            density: 1,
            width: 55,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 131.45,
            y: 281.4,
            density: .8,
            width: 201.4,
            angle: 0
        }, {
            name: "Pivot",
            x: 119.25,
            y: 281.4,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -720,
            upperAngle: 720,
            signalID: 0
        }, {
            name: "Pivot",
            x: 435.95,
            y: 51.1,
            type: "gear",
            color: "Green",
            gearMaxAngle: -180,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Pivot",
            x: 581.95,
            y: 112.1,
            type: "gear",
            color: "Blue",
            gearMaxAngle: -20,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 11.55,
            y: 273.85,
            density: 1,
            width: 305.9,
            angle: 90
        }, {
            name: "Spring",
            x: 358,
            y: 400.7,
            angle: 0,
            type: "dynamic",
            elasticity: 4
        }, {
            name: "Pivot",
            x: 357.95,
            y: 399.7,
            type: "gear",
            color: "Purple",
            gearMaxAngle: -90,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 38.95,
            y: 11,
            density: 1,
            width: 72.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 626.5,
            y: 94.75,
            density: 1,
            width: 60.3,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 626.5,
            y: 216.6,
            density: .8,
            width: 223.3,
            angle: 90
        }, {
            name: "Pivot",
            x: 625.7,
            y: 113.65,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -720,
            upperAngle: 720,
            signalID: 0
        }, {
            name: "Switcher",
            x: 691.95,
            y: 302.75,
            angle: -90,
            type: "toogle",
            color: "Green",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 699,
            y: 167.95,
            density: 1,
            width: 325,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 206.5,
            y: 424.15,
            density: 1,
            width: 229.8,
            angle: 3
        }, {
            name: "Platform",
            type: "static",
            x: 360.15,
            y: 331.3,
            density: 1,
            width: 92.7,
            angle: 8
        }, {
            name: "Platform",
            type: "static",
            x: 398.35,
            y: 379.95,
            density: 1,
            width: 102.1,
            angle: 90
        }]
    }, ft[16] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 616.4,
            y: 367.7,
            density: 1,
            width: 20,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 117.6,
            y: 224.5,
            density: 1,
            width: 114.1,
            angle: 90
        }, {
            name: "Switcher",
            x: 255.55,
            y: 209.4,
            angle: 135,
            type: "toogle",
            color: "Yellow",
            signalID: 3
        }, {
            name: "Basket",
            x: 84.6,
            y: 389.35
        }, {
            name: "Cannon",
            x: 422.95,
            y: 394.95,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Switcher",
            x: 549.15,
            y: 169.15,
            angle: 30,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 708.2,
            y: 94.55,
            density: 1,
            width: 583.8,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 522.55,
            y: -8.55,
            density: 1,
            width: 567.9,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 542.85,
            y: 173.9,
            density: 1,
            width: 54.2,
            angle: -150
        }, {
            name: "Star",
            x: 481.3,
            y: 14.1
        }, {
            name: "Teleport",
            x: 77.45,
            y: 237.15,
            angle: 0,
            color: "Red",
            id: 1,
            mulVel: 6
        }, {
            name: "Platform",
            type: "static",
            x: 212.1,
            y: 404,
            density: 1,
            width: 223.8,
            angle: 14
        }, {
            name: "Box",
            x: 233.5,
            y: 376.9,
            angle: 14,
            density: .5
        }, {
            name: "Teleport",
            x: 271.05,
            y: 385.2,
            angle: -76,
            color: "Red",
            id: 1,
            mulVel: 10
        }, {
            name: "Platform",
            type: "static",
            x: 26.25,
            y: 324.95,
            density: 1,
            width: 84.1,
            angle: 104
        }, {
            name: "Platform",
            type: "static",
            x: 39.05,
            y: 372.3,
            density: 1,
            width: 66.4,
            angle: 14
        }, {
            name: "Platform",
            type: "static",
            x: 322.55,
            y: 397.35,
            density: 1,
            width: 83.1,
            angle: 104
        }, {
            name: "Platform",
            type: "static",
            x: 181.4,
            y: 328.65,
            density: 1,
            width: 318.9,
            angle: 14
        }, {
            name: "Teleport",
            x: 77.2,
            y: 100.4,
            angle: 180,
            color: "Blue",
            id: 2,
            mulVel: 1
        }, {
            name: "Teleport",
            x: 194.05,
            y: 237.15,
            angle: 0,
            color: "Blue",
            id: 2,
            mulVel: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 95.2,
            y: 171.4,
            density: .1,
            width: 61.1,
            angle: 10
        }, {
            name: "Pivot",
            x: 116.35,
            y: 175.35,
            type: "gear",
            color: "Red",
            gearMaxAngle: -35,
            gearPower: -3,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 43.45,
            y: 162.3,
            density: 1,
            width: 25.5,
            angle: 10
        }, {
            name: "Platform",
            type: "static",
            x: 37,
            y: 86.2,
            density: 1,
            width: 162.6,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 257.2,
            y: 197.9,
            density: 1,
            width: 85.6,
            angle: 135
        }, {
            name: "Platform",
            type: "static",
            x: 157.6,
            y: 206.45,
            density: 1,
            width: 150.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 135.25,
            y: 136.15,
            density: 1,
            width: 58.1,
            angle: 10
        }, {
            name: "Spring",
            x: 616.4,
            y: 367.7,
            angle: -5,
            type: "dynamic",
            elasticity: 3
        }, {
            name: "Pivot",
            x: 616.4,
            y: 367.7,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: 5,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 229.6,
            y: 251,
            density: 1,
            width: 61.2,
            angle: 90
        }, {
            name: "Mill",
            x: 345.5,
            y: 109.1,
            enableMotor: !0,
            motorSpeed: -10,
            signalID: 2
        }, {
            name: "Star",
            x: 138.2,
            y: 266.45
        }, {
            name: "Platform",
            type: "static",
            x: 424.05,
            y: 31.05,
            density: 1,
            width: 59.9,
            angle: 135
        }, {
            name: "Platform",
            type: "static",
            x: 31.8,
            y: 210.25,
            density: 1,
            width: 49.2,
            angle: 10
        }, {
            name: "Platform",
            type: "static",
            x: 14,
            y: 109.75,
            density: 1,
            width: 211.5,
            angle: 90
        }, {
            name: "Switcher",
            x: 682.2,
            y: 177.6,
            angle: -40,
            type: "toogle",
            color: "Green",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 687.85,
            y: 181.85,
            density: 1,
            width: 54.2,
            angle: -40
        }, {
            name: "Platform",
            type: "static",
            x: 227.85,
            y: 11.55,
            density: 1,
            width: 444.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 113.25,
            y: 69,
            density: 1,
            width: 138,
            angle: 90
        }, {
            name: "Star",
            x: 679.3,
            y: 275.05
        }]
    }, ft[17] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 207.5,
            y: 404.8,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 377.35,
            y: 469.15,
            density: 1,
            width: 36,
            angle: 0
        }, {
            name: "Basket",
            x: 486.55,
            y: 394
        }, {
            name: "Cannon",
            x: 621.25,
            y: 444.4,
            lowerAngle: -60,
            upperAngle: 70
        }, {
            name: "Spring",
            x: 377.95,
            y: 463.55,
            angle: 45,
            type: "dynamic",
            elasticity: 4
        }, {
            name: "Pivot",
            x: 377.35,
            y: 461.9,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: 0,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 4
        }, {
            name: "Platform",
            type: "static",
            x: 526.4,
            y: 442.55,
            density: 1,
            width: 143.1,
            angle: -90
        }, {
            name: "Star",
            x: 485.75,
            y: 196.7
        }, {
            name: "Platform",
            type: "static",
            x: 253.45,
            y: 251.05,
            density: 1,
            width: 18.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 162.45,
            y: 251.05,
            density: 1,
            width: 18.7,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 237.5,
            y: 267,
            density: 1,
            width: 60,
            angle: -45
        }, {
            name: "Platform",
            type: "dynamic",
            x: 177.5,
            y: 267,
            density: 1,
            width: 60,
            angle: 45
        }, {
            name: "Rock",
            x: 207.5,
            y: 249,
            density: 1
        }, {
            name: "Pivot",
            x: 162.5,
            y: 252,
            type: "gear",
            color: "Green",
            gearMaxAngle: 90,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Pivot",
            x: 252.5,
            y: 252,
            type: "gear",
            color: "Green",
            gearMaxAngle: -90,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 220.75,
            y: 403.65,
            density: .1,
            width: 242.6,
            angle: 8
        }, {
            name: "Pivot",
            x: 207.5,
            y: 401.8,
            type: "gear",
            color: "Red",
            gearMaxAngle: -8,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Spring",
            x: 49.35,
            y: 453.55,
            angle: 0,
            type: "static",
            elasticity: 4.1
        }, {
            name: "Platform",
            type: "static",
            x: 49.35,
            y: 460.5,
            density: 1,
            width: 36,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 446.5,
            y: 326.6,
            density: 1,
            width: 368.9,
            angle: 90
        }, {
            name: "Switcher",
            x: 679.5,
            y: 159.05,
            angle: 180,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 577.15,
            y: 151.3,
            density: 1,
            width: 281.5,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 486.95,
            y: 359.25,
            density: .1,
            width: 96.9,
            angle: 0
        }, {
            name: "Pivot",
            x: 446.7,
            y: 359.25,
            type: "gear",
            color: "Purple",
            gearMaxAngle: -45,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 5
        }, {
            name: "Switcher",
            x: 584.5,
            y: 159.05,
            angle: 180,
            type: "toogle",
            color: "Green",
            signalID: 2
        }, {
            name: "Switcher",
            x: 494.5,
            y: 159.05,
            angle: 180,
            type: "toogle",
            color: "Blue",
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 253.45,
            y: 161.05,
            density: 1,
            width: 18.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 162.45,
            y: 161.05,
            density: 1,
            width: 18.7,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 237.5,
            y: 177,
            density: 1,
            width: 60,
            angle: -45
        }, {
            name: "Platform",
            type: "dynamic",
            x: 177.5,
            y: 177,
            density: 1,
            width: 60,
            angle: 45
        }, {
            name: "Rock",
            x: 207.5,
            y: 159,
            density: 1
        }, {
            name: "Pivot",
            x: 162.5,
            y: 162,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 90,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Pivot",
            x: 252.5,
            y: 162,
            type: "gear",
            color: "Blue",
            gearMaxAngle: -90,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 215.2,
            y: 119.3,
            density: 1,
            width: 223.5,
            angle: 0
        }, {
            name: "Spring",
            x: 17.55,
            y: 71.15,
            angle: 97,
            type: "static",
            elasticity: 2.2
        }, {
            name: "Platform",
            type: "static",
            x: 208.4,
            y: 56.75,
            density: 1,
            width: 143.1,
            angle: -90
        }, {
            name: "Switcher",
            x: 199.7,
            y: 89.3,
            angle: -90,
            type: "button",
            color: "Yellow",
            signalID: 4
        }, {
            name: "Star",
            x: 549.75,
            y: 454.65
        }, {
            name: "Star",
            x: 697.1,
            y: 458.65
        }, {
            name: "Platform",
            type: "dynamic",
            x: 317.75,
            y: 169,
            density: .1,
            width: 116,
            angle: 90
        }, {
            name: "Pivot",
            x: 317.7,
            y: 119.3,
            type: "gear",
            color: "Red",
            gearMaxAngle: 15,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 708.9,
            y: 70.25,
            density: 1,
            width: 180,
            angle: -90
        }, {
            name: "Switcher",
            x: 700.2,
            y: 121.3,
            angle: -90,
            type: "button",
            color: "Purple",
            signalID: 5
        }]
    }, ft[18] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 311.85,
            y: 66.95,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 236.9,
            y: 355.65,
            density: 1,
            width: 82.1,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 85.55,
            y: 406.3,
            density: 1,
            width: 63.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 148.35,
            y: 81.75,
            density: 1,
            width: 74.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 120.15,
            y: 185.65,
            density: 1,
            width: 226.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 353.15,
            y: 350.15,
            density: 1,
            width: 165.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 216.35,
            y: 283.65,
            density: 1,
            width: 103.7,
            angle: 26
        }, {
            name: "Platform",
            type: "dynamic",
            x: 147.35,
            y: 290.45,
            density: .5,
            width: 72.5,
            angle: 0
        }, {
            name: "Pivot",
            x: 120.75,
            y: 290.45,
            type: "gear",
            color: "Red",
            gearMaxAngle: 25,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 175.2,
            y: 214.8,
            density: 1,
            width: 108.1,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 205.65,
            y: 98.9,
            density: .5,
            width: 84.7,
            angle: 30
        }, {
            name: "Pivot",
            x: 175.95,
            y: 81.75,
            type: "gear",
            color: "Red",
            gearMaxAngle: 90,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 466.8,
            y: 446.75,
            density: 1,
            width: 125.5,
            angle: 90
        }, {
            name: "Spring",
            x: 312.5,
            y: 339.2,
            angle: -20,
            type: "static",
            elasticity: 2.5
        }, {
            name: "Platform",
            type: "static",
            x: 343.5,
            y: 315.25,
            density: 1,
            width: 85.8,
            angle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 268.3,
            y: 328.4,
            density: 1,
            width: 57.8,
            angle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 449.2,
            y: 369.85,
            density: 1,
            width: 60.6,
            angle: 45
        }, {
            name: "Star",
            x: 602,
            y: 31.55
        }, {
            name: "Platform",
            type: "static",
            x: 373.75,
            y: 174.2,
            density: 1,
            width: 245.8,
            angle: 23
        }, {
            name: "Platform",
            type: "static",
            x: 269.1,
            y: 164.9,
            density: 1,
            width: 82.9,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 375.5,
            y: 209.9,
            density: 1,
            width: 222.8,
            angle: 8
        }, {
            name: "Cannon",
            x: 621.3,
            y: 437.75,
            lowerAngle: -70,
            upperAngle: 0
        }, {
            name: "Basket",
            x: 164.8,
            y: 390.15
        }, {
            name: "Platform",
            type: "dynamic",
            x: 311.8,
            y: 82.25,
            density: 1,
            width: 47.5,
            angle: 90
        }, {
            name: "Rock",
            x: 272.5,
            y: 94.7,
            density: .8
        }, {
            name: "Pivot",
            x: 311.85,
            y: 66.95,
            type: "gear",
            color: "Green",
            gearMaxAngle: 0,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Switcher",
            x: 680.2,
            y: 258.65,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Spring",
            x: 534.5,
            y: 248.6,
            angle: -15,
            type: "static",
            elasticity: 3.8
        }, {
            name: "Platform",
            type: "static",
            x: 11.2,
            y: 127.2,
            density: 1,
            width: 624.2,
            angle: 90
        }, {
            name: "Box",
            x: 418.95,
            y: 301.75,
            angle: 0,
            density: .5
        }, {
            name: "Box",
            x: 418.95,
            y: 255.75,
            angle: 0,
            density: .5
        }, {
            name: "Platform",
            type: "dynamic",
            x: 111,
            y: 382.45,
            density: .1,
            width: 165.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 37.25,
            y: 427.75,
            density: 1,
            width: 33.7,
            angle: 90
        }, {
            name: "Pivot",
            x: 85.95,
            y: 382.65,
            type: "bolt",
            color: "Purple",
            gearMaxAngle: 45,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 709.2,
            y: 127.2,
            density: 1,
            width: 624.2,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 679.45,
            y: 266.4,
            density: 1,
            width: 80.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 567,
            y: 94.8,
            density: 1,
            width: 289.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 648.1,
            y: 251.2,
            density: 1,
            width: 48.4,
            angle: 90
        }, {
            name: "Switcher",
            x: 680.2,
            y: 148.65,
            angle: 0,
            type: "button",
            color: "Green",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 679.45,
            y: 156.4,
            density: 1,
            width: 80.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 648.1,
            y: 141.2,
            density: 1,
            width: 48.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 127.2,
            y: 408.3,
            density: 1,
            width: 33.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 399.15,
            y: 333.1,
            density: 1,
            width: 73.5,
            angle: 0
        }, {
            name: "Star",
            x: 200.15,
            y: 245.5
        }, {
            name: "Star",
            x: 653.65,
            y: 309.6
        }]
    }, ft[19] = {
        items: [{
            name: "Basket",
            x: 184.55,
            y: 422.65
        }, {
            name: "Cannon",
            x: 318,
            y: 294.1,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 317.85,
            y: 301.95,
            density: 1,
            width: 55.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 570.35,
            y: 185.1,
            density: 2,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 442.5,
            y: 371.1,
            density: 1,
            width: 70.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 439.85,
            y: 331.1,
            density: 1,
            width: 65.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 572.8,
            y: 371.1,
            density: 1,
            width: 74.6,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 660,
            y: 186.5,
            density: 1,
            width: 268.9,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 606.5,
            y: 316.4,
            density: 1,
            width: 49.2,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 564.4,
            y: 277,
            density: 1,
            width: 58.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 558.25,
            y: 220.6,
            density: 1,
            width: 46,
            angle: 0
        }, {
            name: "Switcher",
            x: 573.55,
            y: 270.05,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 2
        }, {
            name: "Box",
            x: 444,
            y: 247.3,
            angle: 0,
            density: .85
        }, {
            name: "Spring",
            x: 570.9,
            y: 184.6,
            angle: 25,
            type: "dynamic",
            elasticity: 2.5
        }, {
            name: "Platform",
            type: "static",
            x: 567.7,
            y: 111.65,
            density: 1,
            width: 123.9,
            angle: 25
        }, {
            name: "Pivot",
            x: 571.1,
            y: 185.85,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: -45,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 598,
            y: 200.55,
            density: 1,
            width: 64.8,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 442.05,
            y: 279.05,
            density: 2,
            width: 20,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 544.3,
            y: 248.85,
            density: 1,
            width: 74.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 602.9,
            y: 264.2,
            density: 1,
            width: 44.4,
            angle: 135
        }, {
            name: "Platform",
            type: "dynamic",
            x: 544.45,
            y: 399.3,
            density: .1,
            width: 74.5,
            angle: -90
        }, {
            name: "Pivot",
            x: 544.45,
            y: 371.1,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 0,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 5
        }, {
            name: "Platform",
            type: "static",
            x: 621.25,
            y: 274.35,
            density: 1,
            width: 64,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 618.35,
            y: 156.6,
            density: 1,
            width: 54.4,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 382.8,
            y: 378.05,
            density: 1,
            width: 55.3,
            angle: -15
        }, {
            name: "Platform",
            type: "static",
            x: 565.55,
            y: 331.1,
            density: 1,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 633.1,
            y: 344.25,
            density: 1,
            width: 83.9,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 286.75,
            y: 363.65,
            density: 1,
            width: 254.3,
            angle: -15
        }, {
            name: "Star",
            x: 344.85,
            y: 30.7
        }, {
            name: "Star",
            x: 122.9,
            y: 166.75
        }, {
            name: "Platform",
            type: "static",
            x: 425.05,
            y: 140.25,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 356.25,
            y: 140.5,
            density: .1,
            width: 155.7,
            angle: 0
        }, {
            name: "Pivot",
            x: 425.05,
            y: 140.25,
            type: "bolt",
            color: "Green",
            gearMaxAngle: 25,
            gearPower: 12,
            lowerAngle: 0,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 181.05,
            y: 140.45,
            density: 1,
            width: 188.8,
            angle: 0
        }, {
            name: "Switcher",
            x: 104.35,
            y: 220.65,
            angle: 90,
            type: "toogle",
            color: "Yellow",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 95.6,
            y: 254.35,
            density: 1,
            width: 245.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 34.45,
            y: 219.75,
            density: 1,
            width: 56.8,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 18.6,
            y: 106,
            density: 1,
            width: 200.2,
            angle: 90
        }, {
            name: "Switcher",
            x: 40.85,
            y: 214.7,
            angle: 45,
            type: "toogle",
            color: "Blue",
            signalID: 5
        }, {
            name: "Platform",
            type: "static",
            x: 51.9,
            y: 301.95,
            density: 1,
            width: 144.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 705.75,
            y: 12.55,
            density: 1,
            width: 136.9,
            angle: -45
        }, {
            name: "Platform",
            type: "dynamic",
            x: 364.4,
            y: 452.65,
            density: .1,
            width: 157.2,
            angle: -90
        }, {
            name: "Pivot",
            x: 364.45,
            y: 383.1,
            type: "gear",
            color: "Red",
            gearMaxAngle: -15,
            gearPower: 6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 276.45,
            y: 158.7,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Star",
            x: 511.1,
            y: 424.65
        }, {
            name: "Platform",
            type: "static",
            x: 164,
            y: 13.45,
            density: 1,
            width: 308.8,
            angle: 0
        }]
    }, ft[20] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 128.95,
            y: 140,
            density: 1,
            width: 120,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 166.05,
            y: 411.8,
            density: 1,
            width: 140.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 263.05,
            y: 160,
            density: 1,
            width: 184.1,
            angle: 90
        }, {
            name: "Basket",
            x: 221.75,
            y: 177.75
        }, {
            name: "Cannon",
            x: 389.45,
            y: 369,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 600,
            y: 169,
            density: 1,
            width: 4.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 577.95,
            y: 255.1,
            density: 1,
            width: 100.8,
            angle: 0
        }, {
            name: "Switcher",
            x: 610.4,
            y: 391.65,
            angle: 0,
            type: "button",
            color: "Green",
            signalID: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 600,
            y: 170,
            density: .1,
            width: 172.9,
            angle: -50
        }, {
            name: "Pivot",
            x: 600,
            y: 170,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 50,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Swings",
            x: 640,
            y: 337.15,
            angle: -20,
            lowerAngle: -20,
            upperAngle: 20
        }, {
            name: "Platform",
            type: "static",
            x: 620,
            y: 271.25,
            density: 1,
            width: 50,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 660,
            y: 271,
            density: 1,
            width: 50,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 679.4,
            y: 248.25,
            density: 1,
            width: 53.9,
            angle: -14
        }, {
            name: "Platform",
            type: "static",
            x: 640,
            y: 399.65,
            density: 1,
            width: 138.2,
            angle: 0
        }, {
            name: "Switcher",
            x: 670,
            y: 391.65,
            angle: 0,
            type: "button",
            color: "Yellow",
            signalID: 4
        }, {
            name: "Platform",
            type: "static",
            x: 640,
            y: 379.35,
            density: 1,
            width: 58.6,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 700,
            y: 204.2,
            density: 1,
            width: 408.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 579.5,
            y: 327.9,
            density: 1,
            width: 161.9,
            angle: 90
        }, {
            name: "Star",
            x: 665.8,
            y: 193.15
        }, {
            name: "Platform",
            type: "static",
            x: 550.25,
            y: 75.1,
            density: 1,
            width: 127.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 12.55,
            y: 269.25,
            density: 1,
            width: 439.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 689.25,
            y: 95.1,
            density: 1,
            width: 41.4,
            angle: 0
        }, {
            name: "Switcher",
            x: 692.25,
            y: 58.65,
            angle: -90,
            type: "toogle",
            color: "Blue",
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 536.55,
            y: 42,
            density: 1,
            width: 84.2,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 214.8,
            y: 243.15,
            density: 3,
            width: 115.5,
            angle: 0
        }, {
            name: "Pivot",
            x: 263.8,
            y: 243.85,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 50,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 6
        }, {
            name: "Platform",
            type: "dynamic",
            x: 166.5,
            y: 306.5,
            density: 1,
            width: 99.1,
            angle: 90
        }, {
            name: "Pivot",
            x: 166.25,
            y: 348.8,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 50,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 6
        }, {
            name: "Platform",
            type: "static",
            x: 83.4,
            y: 367.8,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 328.25,
            y: 75.1,
            density: 1,
            width: 147.5,
            angle: 0
        }, {
            name: "Teleport",
            x: 47.15,
            y: 410.85,
            angle: 0,
            color: "Red",
            id: 1,
            mulVel: 1
        }, {
            name: "Teleport",
            x: 219.75,
            y: 110.15,
            angle: 180,
            color: "Red",
            id: 1,
            mulVel: 1
        }, {
            name: "Spring",
            x: 495,
            y: 77.8,
            angle: 0,
            type: "dynamic",
            elasticity: 2
        }, {
            name: "Pivot",
            x: 495,
            y: 75.75,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: -60,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 4
        }, {
            name: "Platform",
            type: "static",
            x: 399.2,
            y: 9.1,
            density: 1,
            width: 289.5,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 202.75,
            y: 140,
            density: 1,
            width: 54.5,
            angle: 0
        }, {
            name: "Pivot",
            x: 183.8,
            y: 140.75,
            type: "gear",
            color: "Red",
            gearMaxAngle: 50,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 166.05,
            y: 189.05,
            density: 1,
            width: 80,
            angle: 90
        }, {
            name: "Switcher",
            x: 43.9,
            y: 212.25,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 88.3,
            y: 220.05,
            density: 1,
            width: 167.4,
            angle: 0
        }, {
            name: "Mill",
            x: 121.4,
            y: 51,
            enableMotor: !0,
            motorSpeed: -10,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 21.5,
            y: 55.6,
            density: 1,
            width: 37,
            angle: 0
        }, {
            name: "Star",
            x: 542.8,
            y: 386.35
        }, {
            name: "Star",
            x: 43.85,
            y: 248.55
        }, {
            name: "Platform",
            type: "static",
            x: 76.05,
            y: 181.05,
            density: 1,
            width: 96,
            angle: 90
        }]
    }, ft[21] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 531.85,
            y: 29.05,
            density: 1,
            width: 164.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 238.45,
            y: 123.75,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 318.45,
            y: 123.75,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Cannon",
            x: 274.25,
            y: 371.4,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 472.1,
            y: 161,
            density: 1,
            width: 63.3,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 538.6,
            y: 160.9,
            density: 1,
            width: 106.1,
            angle: 0
        }, {
            name: "Basket",
            x: 666.6,
            y: 354.6
        }, {
            name: "Rock",
            x: 657.8,
            y: 282.95,
            density: 1
        }, {
            name: "Pivot",
            x: 494.45,
            y: 160.95,
            type: "gear",
            color: "Red",
            gearMaxAngle: 90,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 604.85,
            y: 122.6,
            density: 1,
            width: 623.9,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 708.6,
            y: 236.35,
            density: 1,
            width: 396.6,
            angle: 90
        }, {
            name: "Star",
            x: 47.65,
            y: 236.2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 584.55,
            y: 322.2,
            density: .1,
            width: 210.6,
            angle: 0
        }, {
            name: "Pivot",
            x: 604.05,
            y: 323.4,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 90,
            gearPower: 1,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 468.6,
            y: 278.65,
            density: 1,
            width: 253.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 491.25,
            y: 396.55,
            density: 1,
            width: 63.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 630.9,
            y: 382.55,
            density: 1,
            width: 102.6,
            angle: 90
        }, {
            name: "Switcher",
            x: 111.4,
            y: 159,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Spring",
            x: 449.8,
            y: 25.7,
            angle: -120,
            type: "static",
            elasticity: 2.3
        }, {
            name: "Platform",
            type: "static",
            x: 141.55,
            y: 145.1,
            density: 1,
            width: 60.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 176.25,
            y: 122.8,
            density: 1,
            width: 87.4,
            angle: 0
        }, {
            name: "Teleport",
            x: 655.3,
            y: 50.75,
            angle: -135,
            color: "Red",
            id: 0,
            mulVel: 1
        }, {
            name: "Platform",
            type: "static",
            x: 640.25,
            y: 129.6,
            density: 1,
            width: 26.6,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 631.25,
            y: 210.55,
            density: 1,
            width: 60.6,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 684.1,
            y: 167.3,
            density: 1,
            width: 61.9,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 698,
            y: 20.35,
            density: 1,
            width: 76.8,
            angle: 45
        }, {
            name: "Teleport",
            x: 277.25,
            y: 46.85,
            angle: 180,
            color: "Red",
            id: 0,
            mulVel: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 303.25,
            y: 123,
            density: .1,
            width: 47.4,
            angle: 0
        }, {
            name: "Pivot",
            x: 317.45,
            y: 123.75,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 90,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 252.25,
            y: 123,
            density: .1,
            width: 47.4,
            angle: 0
        }, {
            name: "Pivot",
            x: 237.45,
            y: 123.75,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 90,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 249.25,
            y: 141,
            density: 1,
            width: 10,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 304.25,
            y: 141,
            density: 1,
            width: 10,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 237.45,
            y: -52.3,
            density: 1,
            width: 253.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 319.25,
            y: -52.3,
            density: 1,
            width: 253.7,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 81.55,
            y: 273.5,
            density: 1,
            width: 317.8,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 109.75,
            y: 166.8,
            density: 1,
            width: 74.4,
            angle: 0
        }, {
            name: "Switcher",
            x: 176.25,
            y: 129.8,
            angle: 180,
            type: "toogle",
            color: "Blue",
            signalID: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 95.25,
            y: 123,
            density: .1,
            width: 47.4,
            angle: 0
        }, {
            name: "Pivot",
            x: 80.45,
            y: 123.75,
            type: "gear",
            color: "Blue",
            gearMaxAngle: -90,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 11.55,
            y: 216.15,
            density: 1,
            width: 432.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 121.55,
            y: 9,
            density: 1,
            width: 242.3,
            angle: 0
        }, {
            name: "Star",
            x: 499.6,
            y: 57.25
        }, {
            name: "Star",
            x: 114.6,
            y: 310.2
        }]
    }, ft[22] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 651.75,
            y: 343,
            density: 1,
            width: 36.8,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 412.65,
            y: 299.05,
            density: 1,
            width: 36.8,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 412.65,
            y: 389.05,
            density: 1,
            width: 36.8,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 371.75,
            y: 343,
            density: 1,
            width: 36.8,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 692.65,
            y: 299.05,
            density: 1,
            width: 36.8,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 692.65,
            y: 389.05,
            density: 1,
            width: 36.8,
            angle: -30
        }, {
            name: "Basket",
            x: 61.05,
            y: 424.2
        }, {
            name: "Cannon",
            x: 548.6,
            y: 361.85,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 248.05,
            y: 260,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Switcher",
            x: 243.55,
            y: 446.05,
            angle: 0,
            type: "button",
            color: "Green",
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 138.05,
            y: 205.7,
            density: 1,
            width: 73.6,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 72.05,
            y: 251.35,
            density: 1,
            width: 165.3,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 121.6,
            y: 178,
            density: 1,
            width: 109.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 315.7,
            y: 178,
            density: 1,
            width: 234.9,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 248.05,
            y: 260,
            density: .05,
            width: 193.9,
            angle: 10
        }, {
            name: "Switcher",
            x: 385.55,
            y: 457.9,
            angle: 30,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 358.05,
            y: 367.75,
            density: 1,
            width: 187.6,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 138.05,
            y: 304,
            density: 1,
            width: 60,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 425.05,
            y: 298.55,
            density: 1,
            width: 259,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 207.15,
            y: 157,
            density: 1,
            width: 60,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 167.1,
            y: 157,
            density: 1,
            width: 60,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 229.1,
            y: 119.9,
            density: 1,
            width: 60,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 151.75,
            y: 114.95,
            density: 1,
            width: 60,
            angle: 45
        }, {
            name: "Platform",
            type: "dynamic",
            x: 138.05,
            y: 248.1,
            density: 1,
            width: 41.7,
            angle: -90
        }, {
            name: "Pivot",
            x: 138.05,
            y: 235.5,
            type: "gear",
            color: "Purple",
            gearMaxAngle: 0,
            gearPower: 6,
            lowerAngle: 180,
            upperAngle: 0,
            signalID: 4
        }, {
            name: "Platform",
            type: "static",
            x: 209.65,
            y: 420.8,
            density: 1,
            width: 82.4,
            angle: -90
        }, {
            name: "Box",
            x: 209.2,
            y: 357.1,
            angle: 0,
            density: .5
        }, {
            name: "Platform",
            type: "static",
            x: 283,
            y: 453,
            density: 1,
            width: 165.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 358.05,
            y: 205.7,
            density: 1,
            width: 73.6,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 358.05,
            y: 247.9,
            density: 1,
            width: 41.7,
            angle: 90
        }, {
            name: "Pivot",
            x: 358.05,
            y: 235.5,
            type: "gear",
            color: "Green",
            gearMaxAngle: 1,
            gearPower: -6,
            lowerAngle: -720,
            upperAngle: 720,
            signalID: 3
        }, {
            name: "Star",
            x: 455.9,
            y: 413.1
        }, {
            name: "Star",
            x: 166.9,
            y: 29.6
        }, {
            name: "Teleport",
            x: 106.05,
            y: 291.8,
            angle: 0,
            color: "Red",
            id: 1,
            mulVel: 1
        }, {
            name: "Pivot",
            x: 248.05,
            y: 260,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: -10,
            gearPower: -10,
            lowerAngle: 180,
            upperAngle: 0,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 278.65,
            y: 423.5,
            density: 1,
            width: 77,
            angle: -90
        }, {
            name: "Teleport",
            x: 304.85,
            y: 357.75,
            angle: -90,
            color: "Red",
            id: 1,
            mulVel: 5
        }, {
            name: "Platform",
            type: "static",
            x: 133.2,
            y: 5,
            density: 1,
            width: 194,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 378.4,
            y: 463.4,
            density: 1,
            width: 46.2,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 47.4,
            y: 325.75,
            density: 1,
            width: 67.3,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 21.75,
            y: 398.65,
            density: 1,
            width: 165.3,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 102.05,
            y: 455,
            density: 1,
            width: 60,
            angle: -90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 102.1,
            y: 395.4,
            density: .1,
            width: 97,
            angle: -90
        }, {
            name: "Pivot",
            x: 101.8,
            y: 435.25,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 3,
            lowerAngle: -720,
            upperAngle: 720,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 704.05,
            y: 167.05,
            density: 1,
            width: 507,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 641.05,
            y: 308.4,
            density: 1,
            width: 293.9,
            angle: -90
        }, {
            name: "Switcher",
            x: 668.55,
            y: 449.9,
            angle: 30,
            type: "toogle",
            color: "Yellow",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 661.4,
            y: 455.4,
            density: 1,
            width: 46.2,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 675.5,
            y: 72,
            density: 1,
            width: 75.3,
            angle: 0
        }, {
            name: "Switcher",
            x: 675,
            y: 64.25,
            angle: 0,
            type: "button",
            color: "Purple",
            signalID: 4
        }, {
            name: "Platform",
            type: "static",
            x: 646.05,
            y: 62.95,
            density: 1,
            width: 37,
            angle: -90
        }, {
            name: "Star",
            x: 617.9,
            y: 413.1
        }]
    }, ft[23] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 126.3,
            y: 302,
            density: 1,
            width: 32,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 643.75,
            y: 437.2,
            density: 1,
            width: 48.7,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 19.35,
            y: 239.75,
            density: 1,
            width: 18.5,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 620,
            y: 70,
            density: 1,
            width: 200,
            angle: 0
        }, {
            name: "Basket",
            x: 630,
            y: 130
        }, {
            name: "Cannon",
            x: 360,
            y: 370,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 100,
            y: 190,
            density: 1,
            width: 200,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 620,
            y: 190,
            density: 1,
            width: 200,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 190.95,
            y: 241.45,
            density: .1,
            width: 110.6,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 100,
            y: 450,
            density: 1,
            width: 200,
            angle: 0
        }, {
            name: "Pivot",
            x: 191,
            y: 190,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 620,
            y: 310,
            density: 1,
            width: 200,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 190.95,
            y: 121.1,
            density: 1,
            width: 119.8,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 620,
            y: 450,
            density: 1,
            width: 200,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 529,
            y: 242,
            density: .1,
            width: 109.3,
            angle: 90
        }, {
            name: "Pivot",
            x: 529,
            y: 190,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 35,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "dynamic",
            x: 528.95,
            y: 118.45,
            density: .1,
            width: 115.6,
            angle: 90
        }, {
            name: "Pivot",
            x: 529,
            y: 69.5,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: 180,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 4
        }, {
            name: "Platform",
            type: "dynamic",
            x: 529,
            y: 393.2,
            density: .1,
            width: 132.1,
            angle: 90
        }, {
            name: "Pivot",
            x: 530,
            y: 449.95,
            type: "gear",
            color: "Green",
            gearMaxAngle: 0,
            gearPower: -5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 590,
            y: 169,
            density: 1,
            width: 60,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 670,
            y: 146,
            density: 1,
            width: 106,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 100,
            y: 70,
            density: 1,
            width: 200,
            angle: 0
        }, {
            name: "Star",
            x: 100,
            y: 40
        }, {
            name: "Star",
            x: 620,
            y: 40
        }, {
            name: "Star",
            x: 36,
            y: 214
        }, {
            name: "Switcher",
            x: 93.35,
            y: 442.25,
            angle: 0,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 62.35,
            y: 410.75,
            density: 1,
            width: 96.5,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 123.3,
            y: 439,
            density: 1,
            width: 40,
            angle: -90
        }, {
            name: "Rock",
            x: 88.4,
            y: 155.25,
            density: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 126.3,
            y: 271.3,
            density: 1,
            width: 44.7,
            angle: -90
        }, {
            name: "Pivot",
            x: 126.3,
            y: 292,
            type: "bolt",
            color: "Green",
            gearMaxAngle: 180,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "dynamic",
            x: 86.5,
            y: 239.5,
            density: 1,
            width: 153.1,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 154,
            y: 198.75,
            density: 1,
            width: 36.5,
            angle: -90
        }, {
            name: "Switcher",
            x: 103.85,
            y: 197.75,
            angle: 180,
            type: "toogle",
            color: "Green",
            signalID: 2
        }, {
            name: "Pivot",
            x: 19.35,
            y: 239.75,
            type: "bolt",
            color: "Green",
            gearMaxAngle: 180,
            gearPower: 5,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Teleport",
            x: 618.6,
            y: 391.7,
            angle: -30,
            color: "Red",
            id: 1,
            mulVel: 1
        }, {
            name: "Teleport",
            x: 142.05,
            y: 113.2,
            angle: -120,
            color: "Red",
            id: 1,
            mulVel: 1.5
        }, {
            name: "Platform",
            type: "static",
            x: 10,
            y: 160.75,
            density: 1,
            width: 40.5,
            angle: -90
        }, {
            name: "Switcher",
            x: 17.75,
            y: 161,
            angle: 90,
            type: "button",
            color: "Blue",
            signalID: 3
        }, {
            name: "Spring",
            x: 711.55,
            y: 300.1,
            angle: -45,
            type: "static",
            elasticity: 2.5
        }, {
            name: "Switcher",
            x: 626.35,
            y: 213,
            angle: 120,
            type: "toogle",
            color: "Yellow",
            signalID: 4
        }, {
            name: "Platform",
            type: "static",
            x: 619.9,
            y: 209.2,
            density: 1,
            width: 43.5,
            angle: 120
        }, {
            name: "Platform",
            type: "static",
            x: 100,
            y: 310,
            density: 1,
            width: 200,
            angle: 0
        }]
    }, ft[24] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 704.05,
            y: 198.05,
            density: 1,
            width: 26.3,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 705.7,
            y: 358.6,
            density: 1,
            width: 190.9,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 77.8,
            y: 381.4,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 574.15,
            y: 372.15,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 457.65,
            y: 332.55,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 300.95,
            y: 282.2,
            density: 1,
            width: 18,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 96.05,
            y: 208.2,
            density: 1,
            width: 170.4,
            angle: 0
        }, {
            name: "Basket",
            x: 668.75,
            y: 380.65
        }, {
            name: "Cannon",
            x: 391.95,
            y: 199.35,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Platform",
            type: "static",
            x: 363.45,
            y: 444.1,
            density: 1,
            width: 701.7,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 77.8,
            y: 378.4,
            density: 1,
            width: 71.3,
            angle: -15
        }, {
            name: "Rock",
            x: 76.5,
            y: 343.9,
            density: .05
        }, {
            name: "Platform",
            type: "static",
            x: 20.05,
            y: 325.25,
            density: 1,
            width: 250.8,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 141.75,
            y: 248,
            density: 1,
            width: 406.9,
            angle: 90
        }, {
            name: "Switcher",
            x: 133.75,
            y: 347.85,
            angle: -90,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Switcher",
            x: 28.05,
            y: 348.4,
            angle: 90,
            type: "button",
            color: "Blue",
            signalID: 2
        }, {
            name: "Switcher",
            x: 542.95,
            y: 101.75,
            angle: -135,
            type: "toogle",
            color: "Green",
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 230.85,
            y: 256,
            density: 1,
            width: 106.1,
            angle: 17
        }, {
            name: "Platform",
            type: "dynamic",
            x: 301.8,
            y: 346.6,
            density: 1,
            width: 155.2,
            angle: 90
        }, {
            name: "Pivot",
            x: 300.95,
            y: 282.2,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: -10,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 524.7,
            y: 72.35,
            density: 1,
            width: 130.1,
            angle: 45
        }, {
            name: "Platform",
            type: "dynamic",
            x: 574.05,
            y: 396.05,
            density: 1,
            width: 70.2,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 457.5,
            y: 374.65,
            density: 1,
            width: 107.2,
            angle: 90
        }, {
            name: "Pivot",
            x: 457.65,
            y: 332.2,
            type: "gear",
            color: "Yellow",
            gearMaxAngle: 0,
            gearPower: -10,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 4
        }, {
            name: "Pivot",
            x: 574.15,
            y: 372.15,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 0,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Spring",
            x: 703.65,
            y: 198.6,
            angle: -30,
            type: "static",
            elasticity: 2.6
        }, {
            name: "Platform",
            type: "static",
            x: 672.1,
            y: 4.8,
            density: 1,
            width: 79.4,
            angle: -45
        }, {
            name: "Pivot",
            x: 77.8,
            y: 378.4,
            type: "gear",
            color: "Green",
            gearMaxAngle: 15,
            gearPower: 12,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 350.05,
            y: 208.2,
            density: 1,
            width: 248.1,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 173.75,
            y: 224.05,
            density: 1,
            width: 48.9,
            angle: 90
        }, {
            name: "Star",
            x: 44.25,
            y: 179.25
        }, {
            name: "Switcher",
            x: 111.8,
            y: 200.5,
            angle: 0,
            type: "button",
            color: "Yellow",
            signalID: 4
        }, {
            name: "Platform",
            type: "static",
            x: 39.4,
            y: 64.05,
            density: 1,
            width: 52.8,
            angle: 0
        }, {
            name: "Swings",
            x: 77.45,
            y: 146.1,
            angle: 20,
            lowerAngle: -20,
            upperAngle: 20
        }, {
            name: "Platform",
            type: "static",
            x: 57.45,
            y: 5.6,
            density: 1,
            width: 199.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 97.45,
            y: 79.95,
            density: 1,
            width: 50,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 116.85,
            y: 57.2,
            density: 1,
            width: 53.9,
            angle: -14
        }, {
            name: "Platform",
            type: "static",
            x: 77.45,
            y: 188.3,
            density: 1,
            width: 58.6,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 19.95,
            y: 108.4,
            density: 1,
            width: 105,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 549.75,
            y: -31.5,
            density: 1,
            width: 201,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 580.6,
            y: 96.3,
            density: 1,
            width: 63.8,
            angle: -45
        }, {
            name: "Star",
            x: 561.2,
            y: 70.45
        }, {
            name: "Star",
            x: 375.2,
            y: 412.3
        }, {
            name: "Platform",
            type: "static",
            x: 591.05,
            y: 238.2,
            density: 1,
            width: 250.5,
            angle: 15
        }]
    }, ft[25] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 443,
            y: 468.35,
            density: 1,
            width: 162.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 443,
            y: 305.85,
            density: 1,
            width: 93.4,
            angle: 90
        }, {
            name: "Switcher",
            x: 219.7,
            y: 464.25,
            angle: 30,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 175.95,
            y: 459.1,
            density: 1,
            width: 92.1,
            angle: 90
        }, {
            name: "Cannon",
            x: 176.6,
            y: 250.1,
            lowerAngle: -52,
            upperAngle: 70
        }, {
            name: "Basket",
            x: 558.35,
            y: 433.45
        }, {
            name: "Platform",
            type: "static",
            x: 170.4,
            y: 264.95,
            density: 1,
            width: 428.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 375.95,
            y: 264.95,
            density: 1,
            width: 670,
            angle: 90
        }, {
            name: "Teleport",
            x: 176.35,
            y: 326.7,
            angle: 180,
            color: "Red",
            id: 1,
            mulVel: 1
        }, {
            name: "Teleport",
            x: 317.1,
            y: 79.3,
            angle: -150,
            color: "Red",
            id: 1,
            mulVel: 1
        }, {
            name: "Teleport",
            x: 70.55,
            y: 78.1,
            angle: 150,
            color: "Blue",
            id: 2,
            mulVel: 1
        }, {
            name: "Platform",
            type: "static",
            x: 185.95,
            y: 47.95,
            density: 1,
            width: 86,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 176.4,
            y: 13.95,
            density: 1,
            width: 323.2,
            angle: 0
        }, {
            name: "Teleport",
            x: 553.9,
            y: 49.65,
            angle: 180,
            color: "Blue",
            id: 2,
            mulVel: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 481.05,
            y: 286.5,
            density: .1,
            width: 104.2,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 670.5,
            y: 264.95,
            density: 1,
            width: 231.1,
            angle: 0
        }, {
            name: "Pivot",
            x: 443.3,
            y: 266.3,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 187.45,
            y: 397.6,
            density: .1,
            width: 62,
            angle: 120
        }, {
            name: "Pivot",
            x: 176.7,
            y: 417.7,
            type: "gear",
            color: "Red",
            gearMaxAngle: 60,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 556.95,
            y: 174.9,
            density: 1,
            width: 88.6,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 544.7,
            y: 112.45,
            density: .1,
            width: 62,
            angle: 60
        }, {
            name: "Pivot",
            x: 557.2,
            y: 133.75,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 120,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Switcher",
            x: 131.95,
            y: 464.3,
            angle: -30,
            type: "toogle",
            color: "Blue",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 137.2,
            y: 469.9,
            density: 1,
            width: 84.6,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 214.2,
            y: 469.9,
            density: 1,
            width: 84.6,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 600.35,
            y: 320.2,
            density: 1,
            width: 202.9,
            angle: 150
        }, {
            name: "Switcher",
            x: 622.7,
            y: 234.5,
            angle: 30,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 610.55,
            y: 236.15,
            density: 1,
            width: 108.6,
            angle: 30
        }, {
            name: "Platform",
            type: "dynamic",
            x: 481.1,
            y: 416.55,
            density: .1,
            width: 104.2,
            angle: 30
        }, {
            name: "Pivot",
            x: 443.3,
            y: 396.3,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 0,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Star",
            x: 409.3,
            y: 413.95
        }, {
            name: "Star",
            x: 705.05,
            y: 240.75
        }, {
            name: "Star",
            x: 71.1,
            y: 480.7
        }]
    }, ft[26] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 586.75,
            y: 43.4,
            density: 1,
            width: 229,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 636.95,
            y: 385.65,
            density: 1,
            width: 34.1,
            angle: 0
        }, {
            name: "Cannon",
            x: 360,
            y: 420,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Basket",
            x: 511.75,
            y: 245.5
        }, {
            name: "Switcher",
            x: 325.75,
            y: 39.55,
            angle: 90,
            type: "button",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 318.05,
            y: 102.7,
            density: 1,
            width: 172.4,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 335,
            y: 86.15,
            density: 1,
            width: 49.9,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 376.6,
            y: 86.15,
            density: .2,
            width: 63.9,
            angle: 0
        }, {
            name: "Pivot",
            x: 352.7,
            y: 86.1,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: 1,
            lowerAngle: -360,
            upperAngle: 0,
            signalID: 0
        }, {
            name: "Star",
            x: 186.6,
            y: 442.1
        }, {
            name: "Platform",
            type: "static",
            x: 557.85,
            y: 180.4,
            density: 1,
            width: 304,
            angle: 0
        }, {
            name: "Spring",
            x: 636.95,
            y: 385.65,
            angle: 10,
            type: "dynamic",
            elasticity: 2.5
        }, {
            name: "Platform",
            type: "static",
            x: 499.6,
            y: 211.1,
            density: 1,
            width: 112.2,
            angle: 145
        }, {
            name: "Platform",
            type: "static",
            x: 701.8,
            y: 197.4,
            density: 1,
            width: 51.9,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 598.6,
            y: 224.35,
            density: .1,
            width: 104.8,
            angle: 120
        }, {
            name: "Pivot",
            x: 621,
            y: 181.15,
            type: "gear",
            color: "Red",
            gearMaxAngle: 50,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 0,
            signalID: 1
        }, {
            name: "Pivot",
            x: 636.95,
            y: 385.65,
            type: "gear",
            color: "Blue",
            gearMaxAngle: -15,
            gearPower: -2,
            lowerAngle: -360,
            upperAngle: 0,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 685.4,
            y: 199.5,
            density: 1,
            width: 53,
            angle: 45
        }, {
            name: "Switcher",
            x: 31.75,
            y: 93.1,
            angle: 90,
            type: "toogle",
            color: "Blue",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 26,
            y: 368.7,
            density: 1,
            width: 120.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 68.5,
            y: 304.8,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 108.5,
            y: 304.8,
            density: 1,
            width: 43.8,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 150,
            y: 368.35,
            density: 1,
            width: 119.6,
            angle: 90
        }, {
            name: "Swings",
            x: 88.5,
            y: 366.05,
            angle: -20,
            lowerAngle: -20,
            upperAngle: 20
        }, {
            name: "Platform",
            type: "static",
            x: 129.75,
            y: 317.75,
            density: 1,
            width: 60.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 47.05,
            y: 317.75,
            density: 1,
            width: 60,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 86.5,
            y: 411.6,
            density: 1,
            width: 37.2,
            angle: 90
        }, {
            name: "Teleport",
            x: 55.5,
            y: 445.5,
            angle: 0,
            color: "Blue",
            id: 2,
            mulVel: 1
        }, {
            name: "Platform",
            type: "static",
            x: 46.35,
            y: 246.05,
            density: 1,
            width: 93.4,
            angle: -120
        }, {
            name: "Platform",
            type: "static",
            x: 121.35,
            y: 274.15,
            density: 1,
            width: 43.8,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 24.2,
            y: 114.05,
            density: 1,
            width: 193.7,
            angle: -90
        }, {
            name: "Platform",
            type: "static",
            x: 458,
            y: 279.4,
            density: 1,
            width: 88.9,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 171,
            y: 25.4,
            density: 1,
            width: 312.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 171.35,
            y: 198.8,
            density: 1,
            width: 312.9,
            angle: 0
        }, {
            name: "Teleport",
            x: 77.2,
            y: 165.4,
            angle: 90,
            color: "Blue",
            id: 2,
            mulVel: 10
        }, {
            name: "Platform",
            type: "static",
            x: 171.9,
            y: 188.8,
            density: 1,
            width: 97.5,
            angle: -8
        }, {
            name: "Platform",
            type: "static",
            x: 244,
            y: 168.95,
            density: 1,
            width: 73.9,
            angle: -23
        }, {
            name: "Platform",
            type: "static",
            x: 285.4,
            y: 140.35,
            density: 1,
            width: 52.2,
            angle: -53
        }, {
            name: "Platform",
            type: "static",
            x: 296.9,
            y: 100.15,
            density: 1,
            width: 52.2,
            angle: -98
        }, {
            name: "Platform",
            type: "static",
            x: 274.2,
            y: 65.55,
            density: 1,
            width: 52.2,
            angle: -143
        }, {
            name: "Platform",
            type: "static",
            x: 134.45,
            y: 123.1,
            density: 1,
            width: 234.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 234.5,
            y: 54.15,
            density: 1,
            width: 52.2,
            angle: 172
        }, {
            name: "Platform",
            type: "static",
            x: 189.05,
            y: 67.85,
            density: 1,
            width: 52.2,
            angle: 157
        }, {
            name: "Switcher",
            x: 679.3,
            y: 204.8,
            angle: -135,
            type: "toogle",
            color: "Green",
            signalID: 3
        }, {
            name: "Platform",
            type: "dynamic",
            x: 436.85,
            y: 43.4,
            density: .1,
            width: 110.9,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 543,
            y: -7.35,
            density: 1,
            width: 119.6,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 683.55,
            y: -7.35,
            density: 1,
            width: 119.6,
            angle: 90
        }, {
            name: "Pivot",
            x: 481.7,
            y: 43.6,
            type: "gear",
            color: "Green",
            gearMaxAngle: 90,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 0,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 495.95,
            y: 315.9,
            density: 1,
            width: 93.9,
            angle: 0
        }, {
            name: "Star",
            x: 119.6,
            y: 451
        }, {
            name: "Star",
            x: 686.9,
            y: 309.85
        }, {
            name: "Platform",
            type: "static",
            x: 338.4,
            y: 180.4,
            density: 1,
            width: 61.1,
            angle: 0
        }]
    }, ft[27] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 90,
            y: 52.6,
            density: 1,
            width: 122.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 497.3,
            y: 95.9,
            density: 1,
            width: 172.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 480.4,
            y: 135.6,
            density: 1,
            width: 137.2,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 140.95,
            y: 340.9,
            density: 1,
            width: 88.1,
            angle: 90
        }, {
            name: "Cannon",
            x: 421.5,
            y: 363,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Basket",
            x: 180.95,
            y: 319.9
        }, {
            name: "Platform",
            type: "static",
            x: 209.95,
            y: 158.7,
            density: 1,
            width: 64.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 141.35,
            y: 158.05,
            density: 1,
            width: 63.2,
            angle: 90
        }, {
            name: "Box",
            x: 176,
            y: 149,
            angle: 0,
            density: .1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 185.9,
            y: 181.75,
            density: .1,
            width: 66,
            angle: 0
        }, {
            name: "Pivot",
            x: 210.3,
            y: 181.35,
            type: "gear",
            color: "Green",
            gearMaxAngle: -90,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 219.95,
            y: 349.9,
            density: 1,
            width: 66.1,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 179.9,
            y: 305.95,
            density: .05,
            width: 96.1,
            angle: 0
        }, {
            name: "Pivot",
            x: 141.3,
            y: 306.55,
            type: "gear",
            color: "Blue",
            gearMaxAngle: -90,
            gearPower: -6,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 123,
            y: 135.6,
            density: 1,
            width: 52.1,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 105.95,
            y: 158.45,
            density: 1,
            width: 63.6,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 37.35,
            y: 107.75,
            density: 1,
            width: 130.1,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 90.75,
            y: 207.55,
            density: 1,
            width: 57.4,
            angle: -52
        }, {
            name: "Switcher",
            x: 85.55,
            y: 204.05,
            angle: -52,
            type: "toogle",
            color: "Green",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 576.75,
            y: 242.3,
            density: 1,
            width: 57.3,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 606.6,
            y: 200.9,
            density: 1,
            width: 52.2,
            angle: -60
        }, {
            name: "Platform",
            type: "static",
            x: 620.2,
            y: 168.15,
            density: 1,
            width: 29.1,
            angle: -75
        }, {
            name: "Platform",
            type: "static",
            x: 617.55,
            y: 137.5,
            density: 1,
            width: 45.6,
            angle: -105
        }, {
            name: "Platform",
            type: "static",
            x: 596.5,
            y: 106.65,
            density: 1,
            width: 45.6,
            angle: -150
        }, {
            name: "Platform",
            type: "static",
            x: 536.85,
            y: 206.5,
            density: 1,
            width: 52.2,
            angle: -45
        }, {
            name: "Platform",
            type: "static",
            x: 564.9,
            y: 166.9,
            density: 1,
            width: 52.2,
            angle: -60
        }, {
            name: "Platform",
            type: "static",
            x: 564.3,
            y: 145.4,
            density: 1,
            width: 41.1,
            angle: -150
        }, {
            name: "Teleport",
            x: 526.7,
            y: 255.9,
            angle: 45,
            color: "Red",
            id: 1,
            mulVel: 6
        }, {
            name: "Teleport",
            x: 543.2,
            y: 308.85,
            angle: -135,
            color: "Red",
            id: 1,
            mulVel: 3
        }, {
            name: "Spring",
            x: 295.5,
            y: 120.6,
            angle: 90,
            type: "static",
            elasticity: 4
        }, {
            name: "Platform",
            type: "static",
            x: 249,
            y: 135.6,
            density: 1,
            width: 96.1,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 289.25,
            y: 122.55,
            density: 1,
            width: 44.1,
            angle: 90
        }, {
            name: "Platform",
            type: "dynamic",
            x: 379.45,
            y: 135.6,
            density: .1,
            width: 87.1,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 379.75,
            y: 95.9,
            density: .1,
            width: 85.9,
            angle: 0
        }, {
            name: "Pivot",
            x: 417.1,
            y: 135.35,
            type: "gear",
            color: "Red",
            gearMaxAngle: 20,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Pivot",
            x: 417.1,
            y: 96.35,
            type: "gear",
            color: "Red",
            gearMaxAngle: 30,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Switcher",
            x: 272.95,
            y: 430.35,
            angle: 90,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 171.45,
            y: 52.6,
            density: .1,
            width: 73,
            angle: 0
        }, {
            name: "Switcher",
            x: 501.1,
            y: 144.35,
            angle: 180,
            type: "toogle",
            color: "Blue",
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 263.95,
            y: 297.4,
            density: 1,
            width: 338.9,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 278,
            y: 52.6,
            density: 1,
            width: 126,
            angle: 0
        }, {
            name: "Pivot",
            x: 141.85,
            y: 51.85,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 90,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 279.05,
            y: 460.35,
            density: 1,
            width: 45.8,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 378.9,
            y: 396.1,
            density: 1,
            width: 18.1,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 378.9,
            y: 418.05,
            density: .1,
            width: 52.6,
            angle: 90
        }, {
            name: "Pivot",
            x: 379.65,
            y: 395.1,
            type: "bolt",
            color: "Red",
            gearMaxAngle: 20,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 348.7,
            y: 374.35,
            density: 1,
            width: 184.4,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 399.05,
            y: 460.35,
            density: 1,
            width: 85.8,
            angle: 0
        }, {
            name: "Star",
            x: 289.55,
            y: 175.4
        }, {
            name: "Star",
            x: 328.6,
            y: 471.95
        }, {
            name: "Star",
            x: 473.5,
            y: 463.25
        }]
    }, ft[28] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 279.25,
            y: 108.5,
            density: 1,
            width: 17.8,
            angle: 0
        }, {
            name: "Cannon",
            x: 681.95,
            y: 360.65,
            lowerAngle: -70,
            upperAngle: 0
        }, {
            name: "Basket",
            x: 36,
            y: 286.5
        }, {
            name: "Platform",
            type: "static",
            x: 114.35,
            y: 295.5,
            density: 1,
            width: 75.6,
            angle: 0
        }, {
            name: "Box",
            x: 113.95,
            y: 169,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 113.95,
            y: 217,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 113.95,
            y: 264,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 113.95,
            y: 122,
            angle: 0,
            density: .05
        }, {
            name: "Platform",
            type: "static",
            x: 314.35,
            y: 295.5,
            density: 1,
            width: 75.6,
            angle: 0
        }, {
            name: "Box",
            x: 313.95,
            y: 169,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 313.95,
            y: 217,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 313.95,
            y: 264,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 313.95,
            y: 122,
            angle: 0,
            density: .05
        }, {
            name: "Platform",
            type: "static",
            x: 514.35,
            y: 295.5,
            density: 1,
            width: 75.6,
            angle: 0
        }, {
            name: "Box",
            x: 513.95,
            y: 169,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 513.95,
            y: 217,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 513.95,
            y: 264,
            angle: 0,
            density: .05
        }, {
            name: "Box",
            x: 513.95,
            y: 122,
            angle: 0,
            density: .05
        }, {
            name: "Platform",
            type: "dynamic",
            x: 279.35,
            y: 189.9,
            density: .1,
            width: 180.9,
            angle: 90
        }, {
            name: "Pivot",
            x: 279.3,
            y: 108.35,
            type: "gear",
            color: "Green",
            gearMaxAngle: 0,
            gearPower: -10,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 79.25,
            y: 108.5,
            density: 1,
            width: 17.8,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 79.35,
            y: 189.9,
            density: .1,
            width: 180.9,
            angle: 90
        }, {
            name: "Pivot",
            x: 79.3,
            y: 108.35,
            type: "gear",
            color: "Blue",
            gearMaxAngle: 0,
            gearPower: -10,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 479.25,
            y: 108.5,
            density: 1,
            width: 17.8,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 479.35,
            y: 189.9,
            density: .1,
            width: 180.9,
            angle: 90
        }, {
            name: "Pivot",
            x: 479.3,
            y: 108.35,
            type: "gear",
            color: "Red",
            gearMaxAngle: 0,
            gearPower: -10,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 94.9,
            y: 81.55,
            density: 1,
            width: 429.5,
            angle: 0
        }, {
            name: "Switcher",
            x: 521.1,
            y: 333.3,
            angle: 90,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "static",
            x: 534.9,
            y: 81.55,
            density: 1,
            width: 429.5,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 313.35,
            y: 407.55,
            density: 1,
            width: 235.5,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 113.35,
            y: 407.55,
            density: 1,
            width: 235.5,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 513.35,
            y: 407.55,
            density: 1,
            width: 235.5,
            angle: 90
        }, {
            name: "Switcher",
            x: 321.1,
            y: 333.3,
            angle: 90,
            type: "toogle",
            color: "Green",
            signalID: 2
        }, {
            name: "Switcher",
            x: 121.1,
            y: 333.3,
            angle: 90,
            type: "toogle",
            color: "Blue",
            signalID: 3
        }, {
            name: "Star",
            x: 416.3,
            y: 430.95
        }, {
            name: "Star",
            x: 209.3,
            y: 430.95
        }, {
            name: "Star",
            x: 614.3,
            y: 430.95
        }]
    }, ft[29] = {
        items: [{
            name: "Platform",
            type: "static",
            x: 351.05,
            y: 321.3,
            density: 1,
            width: 97.5,
            angle: 0
        }, {
            name: "Platform",
            type: "dynamic",
            x: 268.6,
            y: 300.55,
            density: .1,
            width: 86.2,
            angle: 30
        }, {
            name: "Platform",
            type: "static",
            x: 513.1,
            y: 117.65,
            density: 1,
            width: 77,
            angle: -140
        }, {
            name: "Platform",
            type: "static",
            x: 338.7,
            y: 145.55,
            density: 1,
            width: 46.4,
            angle: 122
        }, {
            name: "Platform",
            type: "static",
            x: 560.7,
            y: 82.65,
            density: 1,
            width: 97.5,
            angle: 45
        }, {
            name: "Platform",
            type: "static",
            x: 334.55,
            y: 57,
            density: 1,
            width: 88.7,
            angle: -22
        }, {
            name: "Platform",
            type: "static",
            x: 591.4,
            y: 307.4,
            density: 1,
            width: 97.5,
            angle: -45
        }, {
            name: "Basket",
            x: 672.45,
            y: 185.1
        }, {
            name: "Cannon",
            x: 34.25,
            y: 370.7,
            lowerAngle: -70,
            upperAngle: 70
        }, {
            name: "Teleport",
            x: 246.2,
            y: 400.45,
            angle: 90,
            color: "Red",
            id: 0,
            mulVel: 30
        }, {
            name: "Platform",
            type: "static",
            x: 314.65,
            y: 413.25,
            density: 1,
            width: 99.6,
            angle: -15
        }, {
            name: "Platform",
            type: "dynamic",
            x: 517.65,
            y: 354,
            density: .1,
            width: 107.9,
            angle: -20
        }, {
            name: "Platform",
            type: "static",
            x: 630.2,
            y: 237.25,
            density: 1,
            width: 97.5,
            angle: -83
        }, {
            name: "Platform",
            type: "static",
            x: 611.95,
            y: 152,
            density: .1,
            width: 94.4,
            angle: 60
        }, {
            name: "Teleport",
            x: 152.7,
            y: 243.8,
            angle: -135,
            color: "Red",
            id: 0,
            mulVel: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 414.8,
            y: 34.65,
            density: .1,
            width: 92.7,
            angle: -7
        }, {
            name: "Platform",
            type: "static",
            x: 259.3,
            y: 100.2,
            density: 1,
            width: 88.7,
            angle: -37
        }, {
            name: "Platform",
            type: "static",
            x: 208.7,
            y: 162.5,
            density: 1,
            width: 88.7,
            angle: -67
        }, {
            name: "Platform",
            type: "static",
            x: 208.7,
            y: 233.25,
            density: 1,
            width: 88.7,
            angle: -112
        }, {
            name: "Platform",
            type: "static",
            x: 441.05,
            y: 309,
            density: 1,
            width: 97.5,
            angle: -15
        }, {
            name: "Platform",
            type: "static",
            x: 516.75,
            y: 275.85,
            density: 1,
            width: 88.4,
            angle: -30
        }, {
            name: "Platform",
            type: "static",
            x: 562.8,
            y: 236.95,
            density: 1,
            width: 39.6,
            angle: -60
        }, {
            name: "Platform",
            type: "static",
            x: 569.95,
            y: 201.7,
            density: 1,
            width: 46.5,
            angle: -95
        }, {
            name: "Platform",
            type: "static",
            x: 554.6,
            y: 159.75,
            density: 1,
            width: 55.9,
            angle: -125
        }, {
            name: "Platform",
            type: "dynamic",
            x: 456.5,
            y: 100,
            density: .1,
            width: 64.1,
            angle: 175
        }, {
            name: "Platform",
            type: "dynamic",
            x: 383.1,
            y: 115.5,
            density: .1,
            width: 77,
            angle: 160
        }, {
            name: "Platform",
            type: "static",
            x: 341.55,
            y: 176.2,
            density: 1,
            width: 51.4,
            angle: 55
        }, {
            name: "Platform",
            type: "static",
            x: 376.5,
            y: 245.45,
            density: 1,
            width: 48.3,
            angle: 15
        }, {
            name: "Rock",
            x: 314.15,
            y: 371.2,
            density: 4
        }, {
            name: "Switcher",
            x: 309.8,
            y: 58.55,
            angle: -23,
            type: "toogle",
            color: "Red",
            signalID: 1
        }, {
            name: "Platform",
            type: "dynamic",
            x: 406.9,
            y: 388.55,
            density: .1,
            width: 113.6,
            angle: -15
        }, {
            name: "Pivot",
            x: 564.1,
            y: 337.5,
            type: "gear",
            color: "Red",
            gearMaxAngle: 9,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Pivot",
            x: 357.85,
            y: 402.35,
            type: "gear",
            color: "Red",
            gearMaxAngle: 30,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 1
        }, {
            name: "Spring",
            x: 377.4,
            y: 248.15,
            angle: 12,
            type: "static",
            elasticity: 3
        }, {
            name: "Platform",
            type: "static",
            x: 441.05,
            y: 239,
            density: 1,
            width: 97.5,
            angle: -15
        }, {
            name: "Pivot",
            x: 374.1,
            y: 40.45,
            type: "gear",
            color: "Green",
            gearMaxAngle: -43,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 251.75,
            y: -159.4,
            density: 1,
            width: 474.3,
            angle: -112
        }, {
            name: "Pivot",
            x: 351.1,
            y: 130.7,
            type: "gear",
            color: "Green",
            gearMaxAngle: 105,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Pivot",
            x: 484.35,
            y: 99.35,
            type: "gear",
            color: "Green",
            gearMaxAngle: 240,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Switcher",
            x: 54.45,
            y: 85.85,
            angle: 180,
            type: "toogle",
            color: "Green",
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 50.85,
            y: 77.15,
            density: 1,
            width: 101.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 709.45,
            y: 126.3,
            density: 1,
            width: 252.3,
            angle: 90
        }, {
            name: "Platform",
            type: "static",
            x: 503.3,
            y: 42,
            density: 1,
            width: 70.4,
            angle: 15
        }, {
            name: "Platform",
            type: "dynamic",
            x: 682.65,
            y: 176.8,
            density: .1,
            width: 69.6,
            angle: 0
        }, {
            name: "Pivot",
            x: 709.6,
            y: 176,
            type: "gear",
            color: "Purple",
            gearMaxAngle: 45,
            gearPower: 4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 3
        }, {
            name: "Pivot",
            x: 305.3,
            y: 318.8,
            type: "gear",
            color: "Green",
            gearMaxAngle: 0,
            gearPower: -4,
            lowerAngle: -360,
            upperAngle: 360,
            signalID: 2
        }, {
            name: "Platform",
            type: "static",
            x: 191.35,
            y: 253,
            density: 1,
            width: 59.3,
            angle: 135
        }, {
            name: "Platform",
            type: "static",
            x: 203.25,
            y: 366.25,
            density: 1,
            width: 75.7,
            angle: 0
        }, {
            name: "Platform",
            type: "static",
            x: 174.4,
            y: 320.9,
            density: 1,
            width: 108.7,
            angle: 90
        }, {
            name: "Switcher",
            x: 205.85,
            y: 359.1,
            angle: 0,
            type: "button",
            color: "Purple",
            signalID: 3
        }, {
            name: "Platform",
            type: "static",
            x: 235.85,
            y: 354.1,
            density: 1,
            width: 38.7,
            angle: 90
        }, {
            name: "Star",
            x: 686.3,
            y: 137
        }, {
            name: "Star",
            x: 630.4,
            y: 390.55
        }, {
            name: "Platform",
            type: "static",
            x: 9,
            y: 2.8,
            density: 1,
            width: 166.8,
            angle: 90
        }, {
            name: "Star",
            x: 479.2,
            y: 438.75
        }, {
            name: "Platform",
            type: "static",
            x: 269.15,
            y: 351.1,
            density: 1,
            width: 64.3,
            angle: -21
        }]
    }, J.prototype = Object.create(PIXI.Container.prototype), J.prototype.constructor = J, J.prototype.run = function(t, e) {
        t && this.once("onMiddle", t, e || this);
        var a = this;
        this.show(function() {
            TweenMax.delayedCall(.1, function() {
                a.emit("onMiddle"), TweenMax.delayedCall(.1, this.hide, null, this)
            }, null, this)
        }, this)
    }, J.prototype.show = function(t, e) {
        t && this.once("showComplete", t, e || this);
        var a = this;
        TweenMax.to(this, .4, {
            alpha: 1,
            onComplete: function() {
                a.emit("showComplete")
            }
        })
    }, J.prototype.hide = function(t, e) {
        t && this.once("hideComplete", t, e || this);
        var a = this;
        TweenMax.to(this, .4, {
            alpha: 0,
            onComplete: function() {
                a.emit("hideComplete")
            }
        })
    }, K.prototype = Object.create(PIXI.Container.prototype), K.prototype.constructor = K, K.prototype._onClick = function(e) {
        const a = 1;
        switch (e.target.name) {
            case "Play":
                this._menuDialog.hideToLeft(a), this._levelsDialog.show(a);
                try {
                    parent.cmgGameEvent("start")
                } catch (t) {}
                break;
            case "BackLevels":
                this._menuDialog.show(a), this._levelsDialog.hide(a);
                break;
            case "Credits":
                this._menuDialog.hideToRight(a), this._creditsDialog.show(a);
                break;
            case "BackCredits":
                this._menuDialog.show(a), this._creditsDialog.hide(a);
                break;
            case "Music":
                Pt.setMusicEnable(e.isOn);
                break;
            case "Sound":
                Pt.setSoundEnable(e.isOn);
                break;
            case "MoreGames":

                break;
            case "Facebook":
              //  t.open("http://www.facebook.com/ArmorGames")
        }
        Pt.soundOn && this.sndButton.play()
    }, K.prototype._onBtnsLevelClick = function(t) {
        Pt.levelMng.currLevel = t, Pt.shutter.run(function() {
            this.destroy({
                children: !0
            }), Pt.menuState = null, new Z
        }, this), Pt.soundOn && this.sndButton.play();
        try {
            parent.cmgGameEvent("start", t)
        } catch (t) {}
    }, Z.prototype = Object.create(PIXI.Container.prototype), Z.prototype.constructor = Z, Z.prototype.destroy = function(t) {
        PIXI.Container.prototype.destroy.call(this, t)
    }, Z.prototype._onStageClick = function(t) {
        this._isComplete || this.shotHandler.call(t)
    }, Z.prototype._onGameLayerChildAdded = function() {
        this.updateLayersOrder()
    }, Z.prototype.updateLayersOrder = function() {
        this.gameLayer.children.sort(function(t, e) {
            return t.zOrder = t.zOrder || 0, e.zOrder = e.zOrder || 0, t.zOrder != e.zOrder ? t.zOrder - e.zOrder : t.y - e.y
        })
    }, Z.prototype.complete = function() {
        this._isComplete || (this._isComplete = !0, this.addChild(this._levelComplete), this._levelComplete.show(.5, this._catchedStars), Pt.levelMng.onLevelComplete())
    }, Z.zOrder = {
        defaultZ: 100,
        cannon: 100,
        ball: 50,
        basket: 100,
        platform: 150,
        switcher: 40,
        teleport: 41,
        rail: 30,
        tutorial: 20,
        pivot: 200
    }, Z.prototype._createUI = function() {
        var t = e.generateButton("btnMenuGame", "atlasUI", this._onBtnsClick, this);
        t.name = "Menu", t.scale.set(.5, .5), t.anchor.set(.5, 1), t.x = Pt.gameWidth0 - t.width / 2 - 5, t.y = t.height + 5, this.uiLayer.addChild(t);
        var a = e.generateButton("btnRestartGame", "atlasUI", this._onBtnsClick, this);
        a.name = "Restart", a.scale.set(.5, .5), a.anchor.set(.5, 1), a.x = t.x - t.width / 2 - a.width / 2 - 5, a.y = t.y, this.uiLayer.addChild(a);
        var n = e.generateButton("btnFBGame", "atlasUI", this._onBtnsClick, this);
        n.name = "Facebook", n.scale.set(.5, .5), n.anchor.set(.5, 1), n.x = a.x - a.width / 2 - n.width / 2 - 5, n.y = t.y, this.uiLayer.addChild(n);
        var i = e.generateButton("btnMoreGamesGame", "atlasUI", this._onBtnsClick, this);
        if (i.name = "Facebook", i.scale.set(.5, .5), i.anchor.set(.5, 1), i.x = n.x - n.width / 2 - i.width / 2 - 5, i.y = t.y, this.uiLayer.addChild(i), this.aimControl) {
            var s = e.generateButton("btnFire", "atlasUI", this._onBtnsClick, this);
            s.name = "Fire", s.scale.set(.4, .4), s.anchor.set(.5, .5), s.x = 40, s.y = Pt.gameHeight0 - 40, this.uiLayer.addChild(s), this.btnFire = s, this._btnFireBlinked = !1, this._blinker = Pt.assets.getSprite("btnFireBlink"), this._blinker.scale.set(.4, .4), this._blinker.anchor.set(.5, .5), this._blinker.x = s.x, this._blinker.y = s.y, this._blinker.visible = !1, this.addChild(this._blinker)
        }
        var o = new PIXI.TextStyle({
            fontFamily: "CroMagnum",
            fontSize: 42,
            fill: "#FFDC90",
            stroke: "#4D1604",
            strokeThickness: 8,
            align: "center",
            lineHeight: 42
        });
        this._txtLevel = new PIXI.Text("Level: " + Pt.levelMng.currLevel, o), this._txtLevel.x = 5, this._txtLevel.y = 5, this._txtLevel.scale.set(.5, .5), this.uiLayer.addChild(this._txtLevel);
        var r = Pt.assets.getSprite("toolbarStarPlace", "atlasUI");
        r.anchor.set(.5, .5), r.scale.set(.5, .5), r.x = Pt.gameWidth0 - r.width / 2 - 10, r.y = Pt.gameHeight0 - r.height / 2 - 5, r.empty = !0, this.addChild(r);
        var l = Pt.assets.getSprite("toolbarStarPlace", "atlasUI");
        l.anchor.set(.5, .5), l.scale.set(.5, .5), l.x = r.x - r.width / 2 - l.width / 2 - 5, l.y = r.y, l.empty = !0, this.addChild(l);
        var y = Pt.assets.getSprite("toolbarStarPlace", "atlasUI");
        y.anchor.set(.5, .5), y.scale.set(.5, .5), y.x = l.x - l.width / 2 - y.width / 2 - 5, y.y = r.y, y.empty = !0, this.addChild(y), this._starPlaces = [r, l, y], this._catchedStars = 0
    }, Z.prototype.addStar = function() {
        for (var t = null, e = 0; e < this._starPlaces.length; e++)
            if (this._starPlaces[e].empty) {
                t = this._starPlaces[e], t.empty = !1;
                break
            }
        if (null != t) {
            var a = Pt.assets.getSprite("toolbarStar", "atlasUI");
            a.anchor.set(.5, .5), a.scale.set(.5, .5), a.x = t.x, a.y = t.y, a.alpha = 0, this.addChildAt(a, this.getChildIndex(t) + 1), TweenMax.to(a, 1, {
                alpha: 1
            }), this._catchedStars++
        }
    }, Z.prototype.blinkBtnFire = function() {
        this._btnFireBlinked || (this._btnFireBlinked = !0, this._blinker.visible = !0, this._blinker.alpha = 0, this._blinkTween = TweenMax.to(this._blinker, .5, {
            alpha: 1,
            repeat: -1,
            yoyo: !0
        }))
    }, Z.prototype.stopBlinkBtnFire = function() {
        this._blinkTween && (this._blinker.visible = !1, this._blinkTween.kill(), this._blinkTween = null)
    }, Z.prototype._onBtnsClick = function(e) {
        switch (e.target.name) {
            case "Menu":
                Pt.shutter.run(function() {
                    this.destroy({
                        children: !0
                    }), Pt.playState = null, new K
                }, this);
                break;
            case "Restart":
                Pt.shutter.run(function() {
                    try {
                        parent.cmgGameEvent("replay", Pt.levelMng.currLevel)
                    } catch (t) {}
                    Pt.playState.isDestroying = !0, this.destroy({
                        children: !0
                    }), Pt.playState = null, new Z
                }, this);
                break;
            case "Next":
                Pt.shutter.run(function() {
                    Pt.levelMng.currLevel++;
                    try {
                        parent.cmgGameEvent("start", Pt.levelMng.currLevel)
                    } catch (t) {}
                    Pt.playState.isDestroying = !0, this.destroy({
                        children: !0
                    }), Pt.playState = null, new Z
                }, this);
                break;
            case "Fire":
                if (this._isComplete) return;
                this.shotHandler.call(e), this.stopBlinkBtnFire();
                break;
            case "Facebook":
               // t.open("http://www.facebook.com/ArmorGames");
                break;
            case "MoreGames":

        }
        Pt.soundOn && this.sndButton.play()
    };
    var Pt = {
        pixi: null,
        physics: null,
        physWorld: null,
        physScale: 30,
        soundMng: null,
        assets: null,
        inited: !1,
        audioEnabled: !1,
        musicOn: !0,
        soundOn: !0,
        levelMng: null,
        menuState: null,
        playState: null,
        shutter: null,
        tutorial: null,
        SAVE_KEY_LAST_OPENED: "cb4_lastOpened",
        SAVE_KEY_MUSIC: "cb4_saveMusic",
        SAVE_KEY_SOUND: "cb4_saveSound",
        SAVE_KEY_STARS: "cb4_saveStars",
        storage: null,
        browserEvents: null,
        gameWidth0: 720,
        gameHeight0: 500,
        gameMaxWidth0: 720,
        gameMaxHeight0: 500,
        gameWidth1: null,
        gameHeight1: null,
        gameMaxWidth1: null,
        gameMaxHeight1: null,
        border: null,
        canvasWidth: null,
        canvasHeight: null,
        scale: 1,
        imgRotate: null,
        rnd: null,
        device: null,
        fps: null,
        sponsorURL: ""
    };
    t.App = Pt, t.trace = console.log, q(), Pt.mainTheme = null, Pt._checkAudio = function() {
        Pt.audioEnabled ? (void 0 != Pt.storage.get(Pt.SAVE_KEY_MUSIC) && (Pt.musicOn = "true" == Pt.storage.get(Pt.SAVE_KEY_MUSIC)), void 0 != Pt.storage.get(Pt.SAVE_KEY_SOUND) && (Pt.soundOn = "true" == Pt.storage.get(Pt.SAVE_KEY_SOUND)), Pt.mainTheme = Pt.assets.getSound("sndTheme"), Pt.mainTheme.loop = !0, Pt.mainTheme.volume = .3, Pt.musicOn && Pt.mainTheme.play(), Pt.browserEvents.on("onPageShow", function(t) {
            PIXI.sound.resumeAll()
        }), Pt.browserEvents.on("onPageHide", function(t) {
            PIXI.sound.pauseAll()
        }), Pt.browserEvents.on("onFocusGet", function(t) {
            PIXI.sound.resumeAll()
        }), Pt.browserEvents.on("onFocusLost", function(t) {
            PIXI.sound.pauseAll()
        })) : (Pt.musicOn = !1, Pt.soundOn = !1)
    }, Pt.setMusicEnable = function(t) {
        Pt.audioEnabled !== !1 && (Pt.musicOn = t, Pt.musicOn ? Pt.mainTheme.isPlaying || (Pt.mainTheme.resume(), Pt.mainTheme.isPlaying || Pt.mainTheme.play()) : Pt.mainTheme.isPlaying && Pt.mainTheme.pause(), Pt.storage.set(Pt.SAVE_KEY_MUSIC, Pt.musicOn))
    }, Pt.switchMusicEnable = function() {
        Pt.setMusicEnable(!Pt.musicOn)
    }, Pt.setSoundEnable = function(t) {
        Pt.audioEnabled !== !1 && (Pt.soundOn = t, Pt.storage.set(Pt.SAVE_KEY_SOUND, Pt.soundOn))
    }, Pt.switchSoundEnable = function() {
        Pt.setSoundEnable(!Pt.soundOn)
    }, t.unlockAllLevels = function() {
        Pt.levelMng && Pt.levelMng.unlockAllLevels(), Pt.menuState && Pt.menuState._levelsDialog.refresh()
    }, parent.unlockAllLevels = t.unlockAllLevels
}(window);