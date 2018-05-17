/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "../ink/class_events/Events";
// import is from "../ink/utils/is";

/**
 * <h4>Loader</h4>
 * <p>imagesLoadedに依存</p>
 * @class Loader
 * @extends Events
 * @constructor
 * @param {jQuery} elm 対象のエリア要素 省略可 初期値： "body"
 * @param {Object} options imagesLoadedオプション値
 */
export default class Loader extends Events {
  /**
   * constructor
   */
  constructor(elm, options){
    super();

    /**
     * <h4>読み込み対象wrap要素</h4>
     * @property elm
     * @type {DOM}
     */
    this.elm = elm || "body";

    /**
     * <h4>読み込み対象wrap要素</h4>
     * @property elm
     * @type {DOM}
     */
    this.options =  Object.assign({
      isSmooth: true // 画像読み込みカウントアップをスムースにするか
    }, options);

    /**
     * <h4>imagesloadedオブジェクト</h4>
     * @property imagesLoaded
     * @type {imagesloaded}
     */
    this.imagesLoaded = null;

    /**
     * <h4>画像読み状況をカウントアップ(0から1まで)</h4>
     * @property updateCount
     * @type {Number}
     */
    this.loadCount = 0;

    /**
     * <h4>読み込み完了画像点数</h4>
     * @property loadedLength
     * @type {Number}
     */
    this.loadedLength = 0;

    /**
     * <h4>Loaderイベントタイプ</h4>
     * @private
     * @property _EVENT_TYPE
     * @type {Object}
     */
    /**
     * <h4>カウントアップ毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.COUNT
     * @default "update"
     * @type {String}
     */
    /**
     * <h4>画像処理完了（成功・失敗）毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.PROGRESS
     * @default "progress"
     * @type {String}
     */
    /**
     * <h4>画像読込み失敗毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.FAIL
     * @default "fail"
     * @type {String}
     */
    /**
     * <h4>画像読込み成功毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.DONE
     * @default "done"
     * @type {String}
     */
    /**
     * <h4>画像全て読込み処理完了時、呼び出すイベント名</h4>
     * @private
     * @property EVENTS.ALWAYS
     * @default "always"
     * @type {String}
     */
    /**
     * <h4>画像読込みカウント終了時、呼び出すイベント名</h4>
     * @private
     * @property EVENTS.COUNT_COMPLEAT
     * @default "compleat"
     * @type {String}
     */
    this._EVENT_TYPE = {
      PROGRESS: "progress",
      FAIL    : "fail",
      DONE    : "done",
      ALWAYS  : "always",
      COUNT   : "count",
      COUNT_COMPLEAT: "countCompleat"
    };
  }


  /**
   * <h4>load開始</h4>
   * @method load
   * @return {jQuery.Deferred} jQuery.Deferred.promiseを返す
   */
  load(){
    if(!is.isNull(this.imagesLoaded)){
      return this;
    }

    this.imagesLoaded = imagesLoaded(this.elm, this.options);

    // progress: 画像処理完了毎（成功・失敗）にインクリメントする
    this.imagesLoaded.on("progress", (a, b) => {
      this.loadedLength += 1;
      this.trigger(Loader.EVENTS.PROGRESS, a, b);
    });

    // fail: 読込み失敗毎
    this.imagesLoaded.on("fail", () => {
      this.trigger(Loader.EVENTS.FAIL, arguments);
    });

    // done: 読込み成功毎
    this.imagesLoaded.on("done", () => {
      this.trigger(Loader.EVENTS.DONE, arguments);
    });

    // always: 全ての読込み処理完了時
    this.imagesLoaded.on("always", () => {
      this.trigger(Loader.EVENTS.ALWAYS, arguments);
    });

    // カウントを更新する
    this._update();

    return this;
  }


  /**
   * <h4>カウントアップデート</h4>
   * @private
   * @method _update
   * @return {Void}
   */
  _update(){
    let current = this.loadedLength / this.imagesLoaded.images.length;

    // カウンターのインクリメント
    if(this.loadCount < current){
      if(this.options.isSmooth){
        this.loadCount += 0.01;
      } else {
        this.loadCount += 1 / this.imagesLoaded.images.length;
      }
    }

    // update: カウントアップ毎
    this.trigger(Loader.EVENTS.COUNT, this.loadCount);

    if(1 <= this.loadCount){
      // compleat: カウント終了時
      this.trigger(Loader.EVENTS.COUNT_COMPLEAT, this.loadCount);
    } else {
      window.requestAnimationFrame(() => {
        this._update();
      });
    }
  }
}
