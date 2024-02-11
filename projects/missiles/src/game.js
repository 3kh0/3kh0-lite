MG.game = (function () {
    /** Constants **/
    var GameState = {
        WAIT_START: 'wait_start',
        STARTING:   'starting',
        RUNNING:    'running',
        FINISHED:   'finished',
        CRASHED:    'crashed'
    }

    var STARTING_LIVES = 5;

    var LEVEL_NUM_BARRIERS = 20;

    /** Variables **/
    var mState = GameState.WAIT_START;

    var mLives = STARTING_LIVES;
    var mLevel = 0;

    var mRemainingBarriers = 0;
    var mBarriersToPass = 0;

    var mProgress = 0.0;
    var mBestProgress = 0.0;

    /* Strings for UI ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var getLevelString = function () {
        return mLevel ? 'LEVEL ' + mLevel : 'QUALIFYING LEVEL';
    }

    var Messages = {
        START: {
            title: getLevelString,
            text:  function () {return 'CLICK TO BEGIN';}
        },
        CRASH: {
            title: function () {return 'CRASHED';},
            text:  function () {return 'CLICK TO RETRY';}
        },
        GAME_OVER: {
            title: function () {return 'GAME OVER';},
            text:  function () {return 'CLICK TO START AGAIN';}
        },
        FINISH: {
            title: function () {return 'LEVEL COMPLETED';},
            text:  function () {return 'CLICK TO CONTINUE';}
        }
    };



    var getLevelStartVelocity   = function (level) {
        return 300 + 100*level;
    }

    var getLevelFinishVelocity  = function (level) {
        return 400 + 100*level;
    }

    var getPreLevelIdleVelocity = function (level) {
        return 350 + 100*level;
    }

    var getPostLevelIdleVelocity = function (level) {
        return 550 + 100*level;
    }

    var playCrashAnimation = function () {
        // TODO move drawing out of the update loop

        // create a copy of the explosion element
        var explosion = document.getElementById('explosion');

        // play the animation
        explosion.firstChild.beginElement();
        explosion.setAttribute('visibility', 'visible');

        // TODO can't seem to get a callback to fire when the animation
        // finishes. Use timeout instead
        setTimeout(function (){
            var explosion = document.getElementById('explosion');
            explosion.setAttribute('visibility', 'hidden');
        }, 400);
    }

    var goWaitStartLevel = function () {
        MG.banner.show(Messages.START.title(), Messages.START.text());
        MG.util.showMouse();

        MG.missile.setAutopilot();
        MG.missile.setVelocity(getPreLevelIdleVelocity(mLevel));

        if (mLevel === 0) {mLives = Infinity;}

        mState = GameState.WAIT_START;
    }

    /**
     *
     */
    var goRun = function () {
        MG.banner.hide();
        MG.util.hideMouse();

        /* TODO should the start barrier be pushed here?
        If so, should all of the barriers for the entire level be pushed as well? */
        mRemainingBarriers = LEVEL_NUM_BARRIERS;
        MG.barrierQueue.pushBarrier(MG.BarrierType.START);

        mBarriersToPass = LEVEL_NUM_BARRIERS;

        MG.missile.setManual();

        mState = GameState.STARTING;
    }

    var goFinish = function () {
        MG.banner.show(Messages.FINISH.title(), Messages.FINISH.text());
        MG.util.showMouse();

        MG.missile.setAutopilot();
        MG.missile.setVelocity(getPostLevelIdleVelocity(mLevel));

        mState = GameState.FINISHED;
    }

    var goCrash = function () {
        MG.util.showMouse();

        if (mLives === 0) {
            MG.banner.show(Messages.GAME_OVER.title(), Messages.GAME_OVER.text());
        } else {
            MG.banner.show(Messages.CRASH.title(), Messages.CRASH.text());
        }

        playCrashAnimation()

        mState = GameState.CRASHED;

    }


    //==========================================================================

    return {
        init: function () {
            var rootNode = document.getElementById('tunnel');

            MG.missile.init();

            //

            var wallNode;

            wallNode = document.createElementNS(NAMESPACE_SVG, 'g');
            wallNode.setAttribute('transform', 'scale(1,-1)');

            MG.tunnelWall.init(wallNode);

            rootNode.appendChild(wallNode);

            //

            var barrierQueueNode;

            barrierQueueNode = document.createElementNS(NAMESPACE_SVG, 'g');
            barrierQueueNode.setAttribute('transform', 'scale(1,-1)');

            MG.barrierQueue.init(barrierQueueNode);

            rootNode.appendChild(barrierQueueNode);

            //

            goWaitStartLevel();

            rootNode.setAttribute('visibility', 'visible');
        },


        update: function (dt) {
            MG.missile.update(dt);    
            MG.tunnelWall.update(dt);
            MG.barrierQueue.update(dt);    

            /* check whether the nearest barrier has been reached and whether the missile collides with it. */
            if (!MG.barrierQueue.isEmpty()) {
                if (MG.missile.getOffset() < MG.MISSILE_LENGTH && !MG.missile.isCrashed()){
                    var barrier = MG.barrierQueue.nextBarrier();

                    if (barrier.collides(MG.missile.getPosition().x, MG.missile.getPosition().y)) {
                        // CRASH
                        MG.missile.onCrash();
                        goCrash();
                    } else {

                        // BARRIER PASSED
                        MG.barrierQueue.popBarrier();
                        MG.missile.onBarrierPassed();

                        // TODO this block makes loads of assumptions about state
                        if (mState === GameState.RUNNING
                         || mState === GameState.STARTING) {
                            switch(barrier.getType()) {
                              case MG.BarrierType.FINISH:
                                goFinish();
                                break;
                              case MG.BarrierType.BLANK:
                                break;
                              case MG.BarrierType.START:
                                mState = GameState.RUNNING;
                                // FALLTHROUGH
                              default:
                                mBarriersToPass--;

                                var startVelocity = getLevelStartVelocity(mLevel);
                                var finishVelocity = getLevelFinishVelocity(mLevel);

                                MG.missile.setVelocity(startVelocity
                                                         + (startVelocity - finishVelocity)
                                                           * (mBarriersToPass - LEVEL_NUM_BARRIERS)
                                                             / LEVEL_NUM_BARRIERS);
                                break;
                            }
                        }
                    }
                }    
            }

        
            /* Pad the barrier queue with blank barriers so that there are barriers
            as far as can be seen. */
            while (MG.barrierQueue.numBarriers() < MG.LINE_OF_SIGHT/MG.BARRIER_SPACING) {
                var type = MG.BarrierType.BLANK;
    
                if (mState === GameState.RUNNING
                 || mState === GameState.STARTING) {
                    mRemainingBarriers--;
                    if (mRemainingBarriers > 0) {
                        type = MG.BarrierType.RANDOM;
                    } else if (mRemainingBarriers === 0) {
                        type = MG.BarrierType.FINISH;
                    } else {
                        type = MG.BarrierType.BLANK;
                    }
                }
    
                MG.barrierQueue.pushBarrier(type);
            }

            /* Update progress */
            switch (mState) {
              case GameState.RUNNING:
                mProgress = 1 - (mBarriersToPass*MG.BARRIER_SPACING + MG.missile.getOffset())/(LEVEL_NUM_BARRIERS * MG.BARRIER_SPACING);
                mBestProgress = Math.max(mProgress, mBestProgress);
                break;
              case GameState.FINISHED:
                mProgress = 1;
                mBestProgress = 1;
                break;
              case GameState.STARTING:
                mProgress = 0;
                break;
              default:
                break;
            }

        },

        updateDOM: function () {
            var position = MG.missile.getPosition();
            var offset = MG.missile.getOffset();

            MG.barrierQueue.updateDOM(-position.x, -position.y, offset);
            MG.tunnelWall.updateDOM(-position.x, -position.y, offset);
        },

        onMouseMove: function (x, y) {
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;

            MG.missile.setTarget(x - 0.5*windowWidth, -(y - 0.5*windowHeight));

        },

        onMouseClick: function () {
            if (MG.banner.isFullyVisible()) {
                switch (mState) {
                  case GameState.WAIT_START:
                    goRun();
                    break;
                  case GameState.FINISHED:
                    /* The player is given an infinite number of lives
                    during the qualifying level but these should be
                    removed before continuing. */
                    if (mLevel === 0) {mLives = STARTING_LIVES;}

                    mLevel++;

                    mBestProgress = 0.0;

                    goWaitStartLevel();
                    break;
                  case GameState.CRASHED:
                    MG.banner.hide();
                    MG.fog.fadeIn(function() {
                            if (mLives === 0) {
                                mLevel = 0;
                                mLives = STARTING_LIVES;
                                mBestProgress = 0.0;
                            } else {
                                mLives--;
                            }


                            MG.missile.reset();
                            MG.barrierQueue.reset();

                            MG.fog.fadeOut();
                            goWaitStartLevel();
                        });
                    break;
                }
            }
        },

        /* Returns an integer representing the current level */
        getLevel: function () {
            return mLevel;
        },

        /* Returns a human readable string describing the current level */
        getLevelString: getLevelString,

        /* Returns the number of times the player can crash before game over. */
        /* If the player crashes with zero lives remaining the game ends */
        getNumLives: function () {
            return mLives;
        },

        /* Returns the progress through the level as a value between 0 and 1,
        where 0 is not yet started and 1 is completed. */
        getProgress: function () {
            return mProgress;       
        },

        getBestProgress: function () {
            return mBestProgress;
        }
    };

}());
