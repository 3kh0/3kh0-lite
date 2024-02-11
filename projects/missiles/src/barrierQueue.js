MG.barrierQueue = (function () {
    var mBarrierQueue = [];
    var mRootNode;

    var mFirstBarrierIndex = 0;

    return {
        init: function (rootNode) {
            mRootNode = rootNode;
        },

        update: function (dt) {
            var i;

            /* iterate through and update each of the barriers in the queue */
            for (i = mFirstBarrierIndex; i < mBarrierQueue.length; i++) {
                mBarrierQueue[i].update(dt);
            }
        },

        updateDOM: function (missileX, missileY, missileOffset) {
            var i;

            /* Remove any barriers that have been queued for deletion */
            while (mFirstBarrierIndex > 0) {
                mBarrierQueue[0].destroy();
                mBarrierQueue.shift();
                mFirstBarrierIndex --;
            }

            /* Initialise any uninitialised barriers and add them behind the ones already there. */
            for (i = 0; i < mBarrierQueue.length; i++) {
                var barrier = mBarrierQueue[i];

                if (!barrier.isInitialised()) {
                    barrier.init();

                    if (i > 0) {
                        mRootNode.insertBefore(barrier.getRootNode(), mBarrierQueue[i-1].getRootNode());
                    } else {
                        mRootNode.appendChild(barrier.getRootNode());
                    }
                }
            }

            var z = 0.0;
            for (i = 0; i < mBarrierQueue.length; i++) {
                mBarrierQueue[i].updateDOM(missileX, missileY, z + missileOffset);
                z += MG.BARRIER_SPACING;
            }
        },

        /**
         * Adds a new barrier to the end of the queue.
         * The starting angle and angular rate are randomized.
         */
        pushBarrier: function (type) {
            /* Create a new barrier but do not initialise it */
            var barrier = new MG.Barrier(type);

            /* Add the barrier to the internal list */
            mBarrierQueue[mBarrierQueue.length] = barrier;

        },

        /**
         * Pops the barrier closest to the missile.
         */
        popBarrier: function () {
            mFirstBarrierIndex++;
            mFirstBarrierIndex = Math.min(mFirstBarrierIndex, mBarrierQueue.length);
        },

        /**
         * Returns a reference to the barrier at the front of the queue.
         */
        nextBarrier: function () {
            return mBarrierQueue[mFirstBarrierIndex];
        },

        /**
         * Deletes all barriers and returns the queue to it's original, empty state.
         */
        reset: function () {
            while (mFirstBarrierIndex < mBarrierQueue.length) {
                this.popBarrier();
            }
        },

        /**
         * Returns true if there are no barriers queued.
         */
        isEmpty: function () {
            return this.nextBarrier() === undefined;
        },


        /**
         * Returns the number of barriers in the queue that have not been marked for deletion.
         */
        numBarriers: function () {
            return mBarrierQueue.length - mFirstBarrierIndex;
        }
    };
}());
