/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "./Events";
import * as utils from "../utils";


// MAX_FPS {number} FPSのMAX値
const MAX_FPS = 60;


/**
 * Ticker
 * fpsの設定値は、FPSの実行を保証するものではありません。実際の処理ではFPS値が前後する場合があります
 * @class Ticker
 * @extends Events
 * @constructor
 */
export default class Ticker extends Events {
  /**
   * constructor
   */
	constructor() {
		super();

    /**
     * イベントリスト
     * @private
     * @property _EVENTS
     * @type {object}
     */
		this._EVENTS = {
			TICK: "tick"
		};

    /**
     * フレームレート
     * @property fps
     * @type {number}
     */
		this.fps = MAX_FPS;

    /**
     * tickイベント毎にカウントされます
     * @property tickCount
     * @type {number}
     */
		this.tickCount = 1;

    /**
     * requestAnimationFrame毎にカウントされます
     * @property fpsCount
     * @type {number}
     */
		this.fpsCount = 1;

    /**
     * 初回tickイベントが呼び出された時間
     * @property startTime
     * @type {number}
     */
		this.startTime = 0;

    /**
     * 最後にtickイベントが呼び出された時間
     * @property lastTime
     * @type {number}
     */
		this.lastTime = 0;

    /**
     * tickイベントの再起処理呼び出されているか
     * @private
     * @property _isTick
     * @type {boolean}
     */
		this._isTick = false;

    /**
     * tickイベントタイマーid
     * @private
     * @property _tickerId
     * @type {string}
     */
		this._tickerId = null;
	}


	/*----------------------------------------------------------------------
		@method
	----------------------------------------------------------------------*/
  /**
   * FPSの設定(1-60内の値)
   * @method setFPS
   * @param {number} fps 1-60fps
   * @return {Ticker}
   */
	setFPS(fps) {
		this.fps = utils.clamp(fps, 1, MAX_FPS);
		return this;
	}


  /**
   * 値のリセット
   * @method reset
   * @return {Ticker}
   */
	reset() {
		this.tickCount = 1;
		this.fpsCount = 1;
		this.startTime = performance.now();
		this.lastTime = 0;
		return this;
	}


  /**
   * イベント登録
   * イベント名に属性名を付与するも可能
   * @overide
   * @method on
   * @param {string} type イベントタイプ
   * @param {function} listener イベントリスナー
   * @param {object} context コンテキスト
   * @return {Events}
   */
	on(type, listener, context) {
		if (!this.hasEvent(this._EVENTS.TICK)) {
			this._isTick = true;
			this.reset();
			this._tick();
		}
		this._addEvent(type, listener, context);
		return this;
	}


  /**
   * イベント削除
   * type省略時は、全てのイベントを削除<br>
   * listener省略時は、指定イベントタイプ全て削除
   * @overide
   * @method off
   * @param {string} type イベントタイプ 省略可
   * @param {function} listener イベントリスナー 省略可
   * @return {Events}
   */
	off(type, listener) {
		this._removeEvent(type, listener);
		if (!this.hasEvent(this._EVENTS.TICK)) {
			this._isTick = false;
			cancelAnimationFrame(this._tickerId);
		}
		return this;
	}


  /**
   * requestAnimationFrameの再起処理
   * @private
   * @method _tick
   * @return {Void}
   */
	_tick() {
		this._tickerId = requestAnimationFrame(this._tick.bind(this));
		this.lastTime = performance.now() - this.startTime;
		this.fpsCount = MAX_FPS < this.fpsCount + 1 ? 1 : this.fpsCount + 1;

		if (~~(this.fpsCount % (MAX_FPS / (MAX_FPS - this.fps)))) {
			this.tickCount = this.fps < this.tickCount + 1 ? 1 : this.tickCount + 1;
			this.trigger(this._EVENTS.TICK, this);
		}
	}
}
