/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";


/**
 * <h4>イベント</h4>
 * <p>イベントクラスの継承して使用出来ます｡メディエーターとしても使用すことも可能</p>
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
     * <h4>id</h4>
     * @private
     * @property _id
     * @type {String}
     */
    this._id = utils.createId();

    /**
     * <h4>イベントリスナーを連想配列で格納します</h4>
     * @private
     * @property _listeners
     * @type {Object}
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
   * <h4>イベント登録</h4>
   * <p>イベント名に属性名を付与するも可能</p>
   * @method on
   * @param {String} type イベントタイプ
   * @param {Function} listener イベントリスナー
   * @param {Object} context コンテキスト
   * @return {Events}
   */
  on(type, listener, context){
    this._addEvent(type, listener, context);
    return this;
  }


  /**
   * <h4>1度だけ実行するイベント登録</h4>
   * @method onece
   * @param {String} type イベントタイプ
   * @param {Function} listener イベントリスナー
   * @param {Object} context コンテキスト
   * @return {Events}
   */
  onece(type, listener, context){
    this.on(type, () => {
      this.off(type);
      listener.apply(this, arguments);
    }, context);

    return this;
  }


  /**
   * <h4>イベント削除</h4>
   * <p>type省略時は、全てのイベントを削除<br>
   * listener省略時は、指定イベントタイプ全て削除</p>
   *
   * @method off
   * @param {String} type イベントタイプ 省略可
   * @param {Function} listener イベントリスナー 省略可
   * @return {Events}
   */
  off(type, listener){
    this._removeEvent(type, listener);
    return this;
  }


  /**
   * <h4>イベント追加</h4>
   * @private
   * @method _addEvent
   * @param {String} type イベントタイプ
   * @param {Function} listener コールバック関数
   * @param {Object} context コンテキスト
   * @return {Void}
   */
  _addEvent(type, listener, context){
    let events = type.split(' ');

    if(is.isFunction(listener)){
      utils.each(events, (item) => {
        let eventObj = this._getEventNameMap(item);

        this._listeners[eventObj.type] = this._listeners[eventObj.type] || [];
        this._listeners[eventObj.type].push({
          attr    : eventObj.attr,
          listener: listener,
          context : context
        });
      });
    }
  }


  /**
   * <h4>イベント削除</h4>
   * @private
   * @method _removeEvent
   * @param {String} type イベントタイプ
   * @param {Function} listener コールバック関数
   * @return {Void}
   */
  _removeEvent(type, listener){
    let events = type ? type.split(' ') : [],
    ary = null,
    listeners;

    listener = utils.getFunctionName(listener);

    utils.each(events, (event) => {
      let eventObj = this._getEventNameMap(event);

      if(eventObj && eventObj.attr && this._listeners[eventObj.type]){
        // イベント属性指定がある場合
        listeners = this._listeners[eventObj.type];

        utils.each(listeners, (item) => {
          if(item.attr !== eventObj.attr){
            if(listener){
              if(listener !== utils.getFunctionName(item.listener)){
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

      } else if(eventObj){
        // イベントタイプ指定ある場合
        if(listener){
          listeners = this._listeners[eventObj.type];

          utils.each(listeners, (item) => {
            if(listener !== utils.getFunctionName(item.listener)){
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
   * <h4>イベント名、イベント属性を連想配列にして返す</h4>
   * @private
   * @method _getEventNameMap
   * @param {String} type イベントタイプ
   * @return {Object}
   */
  _getEventNameMap(type){
    let events = type.split('.');
    return {
      type: events[0],
      attr: events[1]
    };
  }


  /**
   * <h4>登録イベントがあるか判定します</h4>
   * @method hasEvent
   * @param {String} type イベントタイプ
   * @return {Boolean}
   */
  hasEvent(type){
    let flag = false,
    events = this._getEventNameMap(type),
    listeners = this._listeners[events.type];

    // イベントリスナーの有無
    if(listeners){
      // 属性指定がある場合
      if(events.attr){
        utils.each(listeners, (item) => {
          if(item.attr === events.attr){
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
   * <h4>イベント発行</h4>
   * <p>第二引数以降に値を渡すとcallbackに引数として渡します</p>
   * @method trigger
   * @param {String} type イベントタイプ
   * @return {Events}
   */
  trigger(type){
    let events = this._getEventNameMap(type),
    listeners = this._listeners[events.type],
    args = utils.argsToArray(arguments, 1);

    if(listeners){
      utils.each(listeners, (item) => {
        if(!events.attr || item.attr === events.attr){
          item.listener.apply(item.context, args);
        }
      });
    }
    return this;
  }
}
