/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";


/**
 * イベント
 * イベントクラスの継承して使用出来ます｡メディエーターとしても使用すことも可能
 *
 * @class Events
 * @constructor
 * @example
 *   var events = new Events();
 *
 *   // on<br>
 *   events.on('change', listener);<br>
 *   events.on('change.type', listener);<br>
 *
 *   // off<br>
 *   events.off('change');<br>
 *   events.off('change', listener);<br>
 *   events.off();<br>
 *
 *   // trigger<br>
 *   events.trigger('change');<br>
 *   events.trigger('change.type');
 */
export default class Events {
  /**
   * constructor
   */
	constructor() {
    /**
     * id
     * @private
     * @property _id
     * @type {string}
     */
		this._id = utils.createId();

    /**
     * イベントリスナーを連想配列で格納します
     * @private
     * @property _listeners
     * @type {object}
     * @example
     *   _listeners[eventName] = [{
     *      attr    : eventObj.attr, <br>
     *      listener: listener, <br>
     *      context : context <br>
     *   }]
     */
		this._listeners = {};
	}


  /**
   * イベント登録
   * イベント名に属性名を付与するも可能
   * @method on
   * @param {string} type イベントタイプ
   * @param {function} listener イベントリスナー
   * @param {object} context コンテキスト
   * @return {Events}
   */
	on(type, listener, context) {
		this._addEvent(type, listener, context);
		return this;
	}


  /**
   * 1度だけ実行するイベント登録
   * @method onece
   * @param {string} type イベントタイプ
   * @param {function} listener イベントリスナー
   * @param {object} context コンテキスト
   * @return {Events}
   */
	onece(type, listener, context) {
		this.on(type, () => {
			this.off(type);
			listener.apply(this, arguments);
		}, context);

		return this;
	}


  /**
   * イベント削除
   * type省略時は、全てのイベントを削除<br>
   * listener省略時は、指定イベントタイプ全て削除
   *
   * @method off
   * @param {string} type イベントタイプ 省略可
   * @param {function} listener イベントリスナー 省略可
   * @return {Events}
   */
	off(type, listener) {
		this._removeEvent(type, listener);
		return this;
	}


  /**
   * イベント追加
   * @private
   * @method _addEvent
   * @param {string} type イベントタイプ
   * @param {function} listener コールバック関数
   * @param {object} context コンテキスト
   * @return {Void}
   */
	_addEvent(type, listener, context) {
		let events = type.split(' ');
		if (utils.isFunction(listener)) {
			utils.each(events, (item) => {
				let eventObj = this._getEventNameMap(item);
				this._listeners[eventObj.type] = this._listeners[eventObj.type] || [];
				this._listeners[eventObj.type].push({
					attr: eventObj.attr,
					listener: listener,
					context: context
				});
			});
		}
	}


  /**
   * イベント削除
   * @private
   * @method _removeEvent
   * @param {string} type イベントタイプ
   * @param {function} listener コールバック関数
   * @return {Void}
   */
	_removeEvent(type, listener) {
		let events = type ? type.split(' ') : [],
			ary = null,
			listeners;

		listener = utils.getFunctionName(listener);

		utils.each(events, (event) => {
			let eventObj = this._getEventNameMap(event);

			if (eventObj && eventObj.attr && this._listeners[eventObj.type]) {
				// イベント属性指定がある場合
				listeners = this._listeners[eventObj.type];

				utils.each(listeners, (item) => {
					if (item.attr !== eventObj.attr) {
						if (listener) {
							if (listener !== utils.getFunctionName(item.listener)) {
								ary = ary || [];
								ary.push(item);
							}
						} else {
							ary = ary || [];
							ary.push(item);
						}
					}
				});

				this._listeners[eventObj.type] = ary;

			} else if (eventObj) {
				// イベントタイプ指定ある場合
				if (listener) {
					listeners = this._listeners[eventObj.type];

					utils.each(listeners, (item) => {
						if (listener !== utils.getFunctionName(item.listener)) {
							ary = ary || [];
							ary.push(item);
						}
					});
				}

				this._listeners[eventObj.type] = ary;

			} else {
				// イベント全て削除
				this._listeners = null;
				this._listeners = {};
			}
		});
	}


  /**
   * イベント名、イベント属性を連想配列にして返す
   * @private
   * @method _getEventNameMap
   * @param {string} type イベントタイプ
   * @return {object}
   */
	_getEventNameMap(type) {
		let events = type.split('.');
		return {
			type: events[0],
			attr: events[1]
		};
	}


  /**
   * 登録イベントがあるか判定します
   * @method hasEvent
   * @param {string} type イベントタイプ
   * @return {boolean}
   */
	hasEvent(type) {
		let flag = false,
			events = this._getEventNameMap(type),
			listeners = this._listeners[events.type];


		// イベントリスナーの有無
		if (listeners) {
			// 属性指定がある場合
			if (events.attr) {
				utils.each(listeners, (item) => {
					if (item.attr === events.attr) {
						flag = true;
						return false;
					}
				});

			} else {
				flag = true;
			}
		}
		return flag;
	}


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
