/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "../class_events/Events";
import * as utils from "../utils";
import getUserMedia from "get-user-media-promise";


/**
 * <h4>WebCamera</h4>
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
     * <h4>イベントリスト</h4>
     * @private
     * @property _EVENTS
     * @type {Object}
     */
    this._EVENTS = {
      // FAIL        : 'fail',
      DONE : "done",
      ERROR: "error",
      LOAD : "load"
    };

    /// FIXME: offscreenレンダリング可能か？
    /**
     * <h4>表示用video</h4>
     * @property video
     * @type {DOM}
     */
    this.video = video;

    /**
     * options
     * @type {Object}
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
    getUserMedia(this.options.constraints)
    .then(
      (stream) => {
        this.trigger(this._EVENTS.DONE, stream);
        this.video.src = window.URL.createObjectURL(stream);
        this.video.onloadedmetadata = (evt) => {
          this.trigger(this._EVENTS.LOAD, evt);
        };
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


  // /**
  //  * @static
  //  * @method getUserMedia
  //  * @return {getUserMedia}
  //  */
  // static getUserMedia
}
