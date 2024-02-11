MG.banner = (function () {
    var SHOW_TIME = 1.1;
    var HIDE_TIME = 0.8;

    var BannerState = {
        HIDDEN: 'hidden',
        VISIBLE: 'visible',
        MESSAGE_QUEUED: 'message-queued'
    };

    var mTitle = '';
    var mText = '';

    var mRootNode;
    var mTitleNode;
    var mTextNode;
    var mVisibility;
    var mState;
  
    return {
        init: function () {
            mVisibility = 0.0;
            mState = BannerState.HIDDEN;

            mRootNode = document.getElementById('banner');

            var titleBoxNode = document.getElementById('banner-title');
            mTitleNode = document.createTextNode('');
            titleBoxNode.appendChild(mTitleNode);

            var textBoxNode = document.getElementById('banner-text');
            mTextNode = document.createTextNode('');
            textBoxNode.appendChild(mTextNode);

            mRootNode.setAttribute('visibility', 'visible');

        },

        update: function (dt) {
            switch (mState) {
              case BannerState.VISIBLE:
                mVisibility += dt/SHOW_TIME;
                break;
              case BannerState.MESSAGE_QUEUED:
                if (mVisibility === 0) {
                    mState = BannerState.VISIBLE;

                    mTitleNode.data = mTitle;
                    mTextNode.data  = mText;
                }
                // FALLTHROUGH
              case BannerState.HIDDEN:
                mVisibility -= dt/HIDE_TIME;
                break;
            }
            mVisibility = Math.max(0,Math.min(1, mVisibility));
        },

        updateDOM: function () {
            if (mVisibility === 0) {
                mRootNode.setAttribute('visibility', 'hidden');
            } else {
                mRootNode.setAttribute('width', (30 + 80*(0.5 + 0.5*Math.cos(Math.PI*mVisibility))) + '%');
                mRootNode.setAttribute('visibility', 'visible');
            }
        },

        hide: function () {
            mState = BannerState.HIDDEN;
        },

        show: function (newTitle, newText) {

            mTitle = String(newTitle);
            mText = String(newText);

            mState = BannerState.MESSAGE_QUEUED;
        },

        isFullyVisible: function () {
            return mVisibility === 1;
        }
        
    };
}());
