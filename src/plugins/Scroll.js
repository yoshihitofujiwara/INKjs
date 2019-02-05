/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "../ink/class_events/Events";
// import is from "../ink/utils/is";

/**
 * ページ内リンクのスクロール
 * @class Scroll
 * @extends Events
 * @constructor
 * @param {jQuery} $trigger トリガーとなるa要素
 * @param {Object} options オプション値
 */
export default class Scroll extends Events {
  /**
   * constructor
   */
  constructor($trigger, options){
    super();

    // $trigger指定がない場合、初期値を設定
    if(!$trigger || !($trigger instanceof jQuery)){
      options = $trigger;
			$trigger = $('a[href^="#"]');
    }

    /**
     * プロパティオブジェクト
     * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてpropsオブジェクトに格納</p>
     * @property props
     * @type {Object}
     */
    /**
     * トリガーとなるa要素
     * @property props.$trigger
     * @type {jQuery}
     */
    /**
     * ページ要素
     * @property props.$scroll
     * @default $('html, body')
     * @type {jQuery}
     */
    /**
     * 停止位置調整値
     * @property props.adjust
     * @default 0
     * @type {Number|Function}
     */
    /**
     * スクロールしないトリガークラス名
     * @property props.noScrollClass
     * @default no_scroll
     * @type {String}
     */
    /**
     * tween
     * <p><a href="http://api.jquery.com/animate/#animate-properties-options" target="_blank">$.animate</a></p>
     * @property props.tween
     * @type {Object}
     */
    this.props = $.extend(true, {
      $trigger     : $trigger,
      $window      : $(window),
      $scroll      : $("html, body"),
      adjust       : 0,
      noScrollClass: "no_scroll",
      tween        : {
        duration   : 800,
        easing     : "easeOutQuint"
      }
    }, options);
  }


  /**
   * イベント登録
   * @method bind
   * @return {Scroll}
   */
  bind(){
    let self = this;

    // スクロールイベントの重複回避
		this.unbind();

    this.props.$trigger.on("click." + this.id, function(event){
      if(!$(this).hasClass(self.props.noScrollClass)){
        event.preventDefault();
        self.tween($($(this).attr("href")));
      }
    });

    return this;
  }


  /**
   * イベント削除
   * @method unbind
   * @return {Scroll}
   */
  unbind(){
    this.props.$trigger.off("." + this.id);
    return this;
  }


  /**
   * スクロールアニメーション
   * @method tween
   * @param {jQuery} $target トリガー要素のインデックス
   * @return {jQuery} tween要素
   */
  tween($target){
    let adjust, scrollTop;

    if($target[0]){
      adjust = is.isFunction(this.props.adjust) ? this.props.adjust($target) : this.props.adjust;
      adjust = is.isNumber(adjust) ? adjust : 0;
      scrollTop = $target.offset().top - adjust;

      if(this.$window.scrollTop() !== scrollTop){
        return this.props.$scroll.stop().animate({scrollTop: scrollTop}, this.props.tween);
      }
    } else {
      return this.props.$scroll;
    }
  }
}
