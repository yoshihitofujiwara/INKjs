/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "../ink/class_events/Events";
// import is from "../ink/utils/is";

/**
 * スムーススクロール（慣性スクロール）
 * <p>WindowsPCのみマウスホイールスクロールを慣性スクロール実装します。(Macはデフォルトの慣性スクロール)</p>
 *
 * @class SmoothScroll
 * @extends Events
 */
export default class SmoothScroll extends Events {
  /**
   * constructor
   */
  constructor(options){
    super();

    /**
     * プロパティオブジェクト
     * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてpropsオブジェクトに格納</p>
     * @property props
     * @type {Object}
     */
    /**
     * mousewheelイベント名
     * @property props.mousewheel
     * @type {String}
     */
    /**
     * スムーススクロールエリア
     * @property props.$scroll
     * @default $("html, body")
     * @type {jQuery}
     */
    /**
     * スクロール量
     * @property props.amount
     * @default 500
     * @type {Number}
     */
    /**
     * tween
     * <p><a href="http://api.jquery.com/animate/#animate-properties-options" target="_blank">$.animate</a></p>
     * @property props.tween
     * @type {Object}
     */
    this.props = $.extend(true, {
      mousewheel: "onwheel" in document ? "wheel." : "onmousewheel" in document ? "mousewheel." : "DOMMouseScroll.",
      $scroll: $("html, body"),
      amount : 500,
      tween  : {
        duration: 600,
        easing  : "easeOutCubic",
        start   : null,
        progress: null,
        complete: null
      }
    }, options);
  }


  /**
   * 初期化
   * @method bind
   * @return {SmoothScroll}
   */
  bind(){
    // WindowsPCのみ有効
    if(is.isWindows()){
      this.unbind();
      this.props.$scroll
      .on(this.props.mousewheel + this.id, (e) => {
        e.preventDefault();
        let move = e.originalEvent.deltaY ? 1 : -1;
        this.tween(move);
        // return false;
      });
    }
    return this;
  }


  /**
   * イベント削除
   * @method unbind
   * @return {SmoothScroll}
   */
  unbind(){
    this.props.$scroll.off("." + this.id);
    return this;
  }


  /**
   * スクロールアニメーション
   * @method tween
   * @param {Number} move スクロール上下値(1 || -1)
   * @return {jQuery} tween要素
   */
  tween(move){
    var y = is.isWebkit() ? this.props.$scroll.eq(1).scrollTop() : this.props.$scroll.eq(0).scrollTop(),
    options = $.extend(true, {}, this.props.tween),
    scrollTop = move > 0 ? y - this.props.amount : y + this.props.amount;

    return this.props.$scroll.stop().animate({scrollTop: scrollTop}, options);
  }
}
