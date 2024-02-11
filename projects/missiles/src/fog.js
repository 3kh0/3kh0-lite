


MG.fog = (function (){
    var SHOW_TIME = 2.0;
    var HIDE_TIME = 4.0;

    var FogState = {
        FADING_IN:  'fading-in',
        FADING_OUT: 'fading-out'
    };

    var mState = FogState.FADING_OUT;

    var mCallback = null;

    var mRootNode;
    var mVisibility = 1.0;

    return {
        init: function () {
            mRootNode = document.getElementById('fog');
        },

        fadeIn: function (newCallback) {
            mState = FogState.FADING_IN;
            mRootNode.setAttribute('visibility', 'visible');
            mCallback = newCallback;
        },

        fadeOut: function (callback) {
            mState = FogState.FADING_OUT;
            mCallback = callback;
        },

        update: function (dt) {
            if (mState === FogState.FADING_OUT) {
                mVisibility -= dt/HIDE_TIME;

                if (mVisibility < 0) {
                    mVisibility = 0;
                    if (mCallback) {
                        mCallback();
                        mCallback = undefined;
                    }
                }
            } else {
                mVisibility += dt/SHOW_TIME;

                if (mVisibility > 1) {
                    mVisibility = 1;
                    if (mCallback) {
                        mCallback();
                        mCallback = undefined;
                    }
                }
            }
        },

        updateDOM: function () {
            if (mVisibility < 0) {
                mRootNode.setAttribute('visibility', 'hidden');
            } else {
                mRootNode.setAttribute('visibility', 'visible');
                mRootNode.setAttribute('opacity', String((0.5 - 0.5*Math.cos(Math.PI*mVisibility))));
            }
        }
    };
}());
