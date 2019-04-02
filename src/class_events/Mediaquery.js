/// INKjs Javascript Library
/// The MIT License (MIT)
/// Author Yoshihito Fujiwara
/// Source https://bitbucket.org/yoshihitofujiwara/ampjs
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "./Events";
import * as utils from "../utils";


/// NOTE: アップデート予定なし
/**
 * Mediaqueryのブレイクポイントイベント
 * !!!: 対象の要素(head)にcssでフォントファミリーを指定してください<br>
 * ブレイクポイントで変更した、フォントファミリーをイベントオブジェクトに渡します<br>
 * シングルトン: コンストラクタを呼び出しで使用しません｡
 *
 * @class Mediaquery
 * @extends Events
 * @constructor
 * @param {DOM} elm 監視対象要素
 */
export default class Mediaquery extends Events {
  /**
   * constructor
   */
	constructor(elm) {
		super();

    /**
     * イベントリスト
     * @private
     * @property _EVENTS
     * @type {object}
     */
		this._EVENTS = {
			CHANGE: "change"
		};

    /**
     * スタイルを監視する要素
     * @property elm
     * @default head
     * @type {DOM}
     */
		if (elm && elm.nodeType === 1) {
			this.elm = elm;
		} else {
			this.elm = document.getElementsByTagName("head")[0];
		}

    /**
     * 要素を監視しているか
     * @property isObserver
     * @default false
     * @type {boolean}
     */
		this.isObserver = false;

    /**
     * 監視するスタイル名
     * @property observeStyle
     * @default "font-family"
     * @type {string}
     */
		this.observeStyle = "font-family";

    /**
     * 要素の現在のスタイルを保管します
     * @property mediaStyle
     * @type {string}
     */
		this.mediaStyle = null;
	}


  /**
   * イベントコントローラー
   * 状態を監視し、フォトサイズに変更があればイベントを発行します
   * @private
   * @method _controller
   * @return {Void}
   */
	_controller() {
		// set property
		this.isObserver = true;
		this.mediaStyle = window.getComputedStyle(this.elm).getPropertyValue(this.observeStyle);

		// event
		window.addEventListener("resize", () => {
			let style = window.getComputedStyle(this.elm).getPropertyValue(this.observeStyle);
			if (this.mediaStyle !== style) {
				this.mediaStyle = style;
				this.trigger(this._EVENTS.CHANGE);
			}
		});
	}


  /**
   * イベント登録
   * @method on
   * @param {string} type イベントタイプ
   * @param {function} listener イベントリスナー
   * @param {object} context コンテキスト
   * @return {Events}
   */
	on(type, listener, context) {
		if (!this.isObserver) {
			this._controller();
		}
		this._addEvent(type, listener, context);
		return this;
	};


  /**
   * イベント発行
   * 第二引数以降に値を渡すとcallbackに引数として渡します
   * @method trigger
   * @param {string} type イベントタイプ
   * @return {Events}
   */
	trigger(type) {
		let events = this._getEventNameMap(type),
			listeners = this._listeners[events.type],
			args = utils.argsToArray(arguments, 1);

		args.unshift({ mediaStyle: this.mediaStyle, eventType: type });

		if (listeners) {
			utils.each(listeners, (item) => {
				if (!events.attr || item.attr === events.attr) {
					item.listener.apply(item.context, args);
				}
			});
		}
		return this;
	}
}
