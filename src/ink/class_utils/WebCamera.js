/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "../class_events/Events";
import * as utils from "../utils";


/**
 * @class WebCamera
 * @constructor
 */
export default class WebCamera extends Events {
  /**
   * constructor
   */
  constructor(video, options) {
    super();

    /**
     * イベントリスト
     * @private
     * @property _EVENTS
     * @type {object}
     */
    this._EVENTS = {
      // FAIL        : 'fail',
      DONE : "done",
      ERROR: "error",
      LOAD : "load"
    };

    /// FIXME: offscreenレンダリング可能か？
    /**
     * 表示用video
     * @property video
     * @type {DOM}
     */
    this.video = video;

    /**
     * options
     * @type {object}
     */
    this.options = utils.mixin(true, {
      constraints: {
        video: true,
        audio: false
      }
    }, options);
  }


  /**
   * setup
   * @return {WebCamera}
   */
  setup(){
		navigator.mediaDevices.getUserMedia(
			this.options.constraints
		)
    .then(
      (stream) => {
        this.trigger(this._EVENTS.DONE, stream);
				this.video.srcObject = stream;
				this.trigger(this._EVENTS.LOAD);
      }
    )
    .catch((err) => {
      this.trigger(this._EVENTS.ERROR, err);
      utils.log(err.name + ": " + err.message);
    });

    return this;
  }


  /**
   * play
   * @return {WebCamera}
   */
  play(){
    this.video.play();
    return this;
  }


  /**
   * pause
   * @return {WebCamera}
   */
  pause(){
    this.video.pause();
    return this;
  }
}
