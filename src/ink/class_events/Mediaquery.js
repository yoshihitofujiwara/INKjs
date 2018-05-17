/// utilsjs Javascript Library
/// The MIT License (MIT)
/// Author Yoshihito Fujiwara
/// Source https://bitbucket.org/yoshihitofujiwara/ampjs
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "./Events";


/// NOTE: アップデート予定なし
/**
 * <h4>Mediaqueryのブレイクポイントイベント</h4>
 * <p>!!!: 対象の要素(head)にcssでフォントファミリーを指定してください<br>
 * ブレイクポイントで変更した、フォントファミリーをイベントオブジェクトに渡します<br>
 * シングルトン: コンストラクタを呼び出しで使用しません｡</p>
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
  constructor(elm){
    super();

    /**
     * <h4>イベントリスト</h4>
     * @private
     * @property _EVENTS
     * @type {Object}
     */
    this._EVENTS = {
      CHANGE: "change"
    };

    /**
     * <h4>スタイルを監視する要素</h4>
     * @property elm
     * @default head
     * @type {DOM}
     */
    if(elm && elm.nodeType === 1){
      this.elm = elm;
    } else {
      this.elm = document.getElementsByTagName("head")[0];
    }

    /**
     * <h4>要素を監視しているか</h4>
     * @property isObserver
     * @default false
     * @type {Boolean}
     */
    this.isObserver = false;

    /**
     * <h4>監視するスタイル名</h4>
     * @property observeStyle
     * @default "font-family"
     * @type {String}
     */
    this.observeStyle = "font-family";

    /**
     * <h4>要素の現在のスタイルを保管します</h4>
     * @property mediaStyle
     * @type {String}
     */
    this.mediaStyle = null;
  }


  /**
   * <h4>イベントコントローラー</h4>
   * <p>状態を監視し、フォトサイズに変更があればイベントを発行します</p>
   * @private
   * @method _controller
   * @return {Void}
   */
  _controller(){
    // set property
    this.isObserver = true;
    this.mediaStyle = window.getComputedStyle(this.elm).getPropertyValue(this.observeStyle);

    // event
    window.addEventListener("resize", () => {
      let style = window.getComputedStyle(this.elm).getPropertyValue(this.observeStyle);
      if(this.mediaStyle !== style){
        this.mediaStyle = style;
        this.trigger(this._EVENTS.CHANGE);
      }
    });
  }


  /**
   * <h4>イベント登録</h4>
   * @method on
   * @param {String} type イベントタイプ
   * @param {Function} listener イベントリスナー
   * @param {Object} context コンテキスト
   * @return {Events}
   */
  on(type, listener, context){
    if(!this.isObserver){
      this._controller();
    }
    this._addEvent(type, listener, context);
    return this;
  };


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

    args.unshift({mediaStyle: this.mediaStyle, eventType: type});

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
