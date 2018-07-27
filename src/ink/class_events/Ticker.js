/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "./Events";
import * as utils from "../utils";


// MAX_FPS {Number} FPSのMAX値
const MAX_FPS = 60;


/**
 * <h4>Ticker</h4>
 * <p>fpsの設定値は、FPSの実行を保証するものではありません。実際の処理ではFPS値が前後する場合があります</p>
 * @class Ticker
 * @extends Events
 * @constructor
 */
export default class Ticker extends Events {
  /**
   * constructor
   */
  constructor(){
    super();

    /**
     * <h4>イベントリスト</h4>
     * @private
     * @property _EVENTS
     * @type {Object}
     */
    this._EVENTS = {
      TICK: "tick"
    };

    /**
     * <h4>フレームレート</h4>
     * @property fps
     * @type {Number}
     */
    this.fps = MAX_FPS;

    /**
     * <h4>tickイベント毎にカウントされます</h4>
     * @property tickCount
     * @type {Number}
     */
    this.tickCount = 1;

    /**
     * <h4>requestAnimationFrame毎にカウントされます</h4>
     * @property fpsCount
     * @type {Number}
     */
    this.fpsCount = 1;

    /**
     * <h4>初回tickイベントが呼び出された時間</h4>
     * @property startTime
     * @type {Number}
     */
    this.startTime = 0;

    /**
     * <h4>最後にtickイベントが呼び出された時間</h4>
     * @property lastTime
     * @type {Number}
     */
    this.lastTime = 0;

    /**
     * <h4>tickイベントの再起処理呼び出されているか</h4>
     * @private
     * @property _isTick
     * @type {Boolean}
     */
    this._isTick = false;

    /**
     * <h4>tickイベントタイマーid</h4>
     * @private
     * @property _tickerId
     * @type {String}
     */
    this._tickerId  = null;
  }


  /**
   * <h4>FPSの設定(1-60内の値)</h4>
   * @method setFPS
   * @param {Number} fps 1-60fps
   * @return {Ticker}
   */
  setFPS(fps){
    this.fps = utils.clamp(fps, 1, MAX_FPS);
    return this;
  }


  /**
   * <h4>値のリセット</h4>
   * @method reset
   * @return {Ticker}
   */
  reset(){
    this.tickCount = 1;
    this.fpsCount  = 1;
    this.startTime = performance.now();
    this.lastTime  = 0;
    return this;
  }


  /**
   * <h4>イベント登録</h4>
   * <p>イベント名に属性名を付与するも可能</p>
   * @overide
   * @method on
   * @param {String} type イベントタイプ
   * @param {Function} listener イベントリスナー
   * @param {Object} context コンテキスト
   * @return {Events}
   */
  on(type, listener, context){
    if(!this.hasEvent(this._EVENTS.TICK)){
      this._isTick = true;
      this.reset();
      this._tick();
    }
    this._addEvent(type, listener, context);
    return this;
  }


  /**
   * <h4>イベント削除</h4>
   * <p>type省略時は、全てのイベントを削除<br>
   * listener省略時は、指定イベントタイプ全て削除</p>
   * @overide
   * @method off
   * @param {String} type イベントタイプ 省略可
   * @param {Function} listener イベントリスナー 省略可
   * @return {Events}
   */
  off(type, listener){
    this._removeEvent(type, listener);
    if(!this.hasEvent(this._EVENTS.TICK)){
      this._isTick = false;
      cancelAnimationFrame(this._tickerId);
    }
    return this;
  }


  /**
   * <h4>requestAnimationFrameの再起処理</h4>
   * @private
   * @method _tick
   * @return {Void}
   */
  _tick(){
    this._tickerId = requestAnimationFrame(this._tick.bind(this));
    this.lastTime  = performance.now() - this.startTime;
    this.fpsCount  = MAX_FPS < this.fpsCount + 1 ? 1 : this.fpsCount + 1;

    if( ~~(this.fpsCount % (MAX_FPS / (MAX_FPS - this.fps))) ){
      this.tickCount = this.fps < this.tickCount + 1 ? 1 : this.tickCount + 1;
      this.trigger(this._EVENTS.TICK, this);
    }
  }
}
