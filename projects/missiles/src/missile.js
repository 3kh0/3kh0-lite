MG.missile = (function () {

    var ACCELERATION_TIME_CONSTANT = 1.0;
    var DRIFT_DAMPING = 0.25;

    var MAX_RADIUS = 0.8*MG.TUNNEL_RADIUS;

    var MissileState = {
        CRASHED:   'crashed',
        AUTOPILOT: 'autopilot',
        MANUAL:    'manual'
    }

    var mState;

    var mOffset;
    var mVelocity;
    var mTargetVelocity;

    var mX;
    var mY;

    var mTargetX;
    var mTargetY;

    var mDriftVelX;
    var mDriftVelY;
    var mDriftCounter;


    return {
        init: function () {
            this.reset();
        },


        reset: function (){
            mState = MissileState.AUTOPILOT;

            mOffset = 200.0;
            mVelocity = 0.0;
            mTargetVelocity = 400.0;

            mX = 0.0;
            mY = 0.0;

            mTargetX = 0.0;
            mTargetY = 0.0;

            mDriftVelX = 0.0;
            mDriftVelY = 0.0;
            mDriftCounter = 1.0;

        },


        update: function (dt) {

            switch (mState) {
                case MissileState.AUTOPILOT:
                    /* When under autopilot control, the missile will randomly
                    drift around the center of the tunnel, changing direction at
                    discrete intervals. */
                    /* The drift counter contains the time until the next direction change. */
                    mDriftCounter -= dt;
                    if (mDriftCounter < 0) {
                        mDriftCounter = 1.1 + 0.9*Math.random();

                        mDriftVelX = (MG.TUNNEL_RADIUS*(Math.random()-0.5) - mTargetX)/1.5;
                        mDriftVelY = (MG.TUNNEL_RADIUS*(Math.random()-0.5) - mTargetY)/1.5;
                    }

                    /* TODO Smooth */
                    mX += mDriftVelX * dt ;
                    mY += mDriftVelY * dt ;

                    break;

                case MissileState.MANUAL:
                    mX += (mTargetX - mX) * dt / DRIFT_DAMPING;
                    mY += (mTargetY - mY) * dt / DRIFT_DAMPING;
                    break;

                default:
                    /* leave the missile pointing in the same direction */
            }

            /* Clamp the missile's position to inside the tunnel wall */
            var radius = Math.sqrt(mX*mX + mY*mY);
            var newRadius = Math.min(MAX_RADIUS, radius);

            mX = (radius === 0) ? 0 : mX*newRadius/radius;
            mY = (radius === 0) ? 0 : mY*newRadius/radius;



            if (mState === MissileState.CRASHED) {
                /* If the missile has crashed, it will bounce backwards coming
                to rest near the location of the previous barrier. */
                mVelocity += dt*MG.BARRIER_SPACING*mVelocity/(mOffset - MG.BARRIER_SPACING);
            } else {
                mVelocity += dt*(mTargetVelocity - mVelocity)/ACCELERATION_TIME_CONSTANT;
            }

            mOffset -= mVelocity * dt;
        },

        getPosition: function () {
            return {x: mX, y:mY};
        },

        getTarget: function () {
            return {x: mTargetX, y:mTargetY};
        },

        getOffset: function () {
            return mOffset;
        },

        getVelocity: function () {
            return mVelocity;
        },

        isCrashed: function () {
            return mState == MissileState.CRASHED;
        },

        setTarget: function (targetX, targetY) {
            if (mState === MissileState.MANUAL) {
                mTargetX = targetX;
                mTargetY = targetY;
            }
        },

        setVelocity: function (velocity) {
            mTargetVelocity = velocity;
        },


        setManual: function () {
            mState = MissileState.MANUAL;
        },

        setAutopilot: function () {
            mState = MissileState.AUTOPILOT;
        },


        onBarrierPassed: function () {
            mOffset += MG.BARRIER_SPACING;
        },

        onCrash: function () {
            mVelocity = -Math.abs(mVelocity);

            mState = MissileState.CRASHED;
        }
    };
}());
