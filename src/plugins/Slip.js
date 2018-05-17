/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import Events from "../ink/class_events/Events";
// import is from "../ink/utils/is";

/**
 * <h4>ホバースライドアニメーション</h4>
 * <p>INKjs jquery.plugins(jQuery.Slip)に依存します</p>
 * @class Slip
 * @extends Events
 * @constructor
 * @param {jQuery} $target 対象の要素
 * @param {Object} options オプション値
 */
export default class Slip extends Events {
  /**
   * constructor
   */
  constructor($target, options){
    super();

    // $target指定がない場合、初期値を設定
    if(!$target || !($target instanceof jQuery)){
      options = $target;
      $target = $(".slip");
    }

    /**
     * <h4>プロパティオブジェクト</h4>
     * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてpropsオブジェクトに格納</p>
     * @property props
     * @type {Object}
     */
    /**
     * <h4>target要素</h4>
     * @propaty props.$target
     * @type {jQuery}
     */
    /**
     * <h4>マウスイン時のアニメーション方向</h4>
     * <p>以下7タイプ (allはデフォルト4方向)<br>
     * all, horizontal, vertical, up, down, left, right</p>
     * @property props.inDirection
     * @default all
     * @type {String}
     */
    /**
     * <h4>マウスアウト時のアニメーション方向</h4>
     * <p>以下7タイプ (allはデフォルト4方向)<br>
     * all, horizontal, vertical, up, down, left, right</p>
     * @property props.outDirection
     * @default all
     * @type {String}
     */
    /**
     * <h4>アニメーション要素クラス名</h4>
     * @property props.tweenClass
     * @default slip_tween
     * @type {String}
     */
    /**
     * <h4>アクティブ時に付与するクラス名</h4>
     * @property props.activeClass
     * @default .activeClass
     * @type {String}
     */
    /**
     * <h4>アニメーションしない要素に付与するクラス名</h4>
     * @property props.noTweenClass
     * @default .no_slip
     * @type {String}
     */
    /**
     * <h4>Tween option</h4>
     * <p><a href="http://api.jquery.com/animate/#animate-properties-options" target="_blank">$.animate</a></p>
     * @property props.tween
     * @default .no_slip
     * @type {Object}
     */
    this.props = $.extend(true, {
      $target     : $target,
      inDirection : "all",
      outDirection: "all",
      tweenClass  : "slip_tween",
      activeClass : "active",
      noTweenClass: "no_slip",
      tween       : {
        duration  : 400,
        easing    : "easeOutExpo"
      }
    }, options);
	}


  /**
   * <h4>イベント登録</h4>
   * @method bind
   * @return {Slip}
   */
  bind(){
    // 二重登録回避
    this.unbind();

    this.props.$target
    .on("slipin." + this.id, (inEvent) => {
      this._tween(this.props.$target.index(this), inEvent);
    })
    .on("slipout." + this.id, (outEvent) => {
      this._tween(this.props.$target.index(this), outEvent);
    })
    .each((i) => {
      let $this = this.props.$target.eq(i);
      if($this.hasClass(this.props.noTweenClass)){
        this.passive(i);
      } else if($this.hasClass(this.props.activeClass)){
        this.active(i);
      }
    });

    return this;
  }


  /**
   * <h4>イベント削除</h4>
   * @method unbind
   * @return {Slip}
   */
  unbind(){
    this.props.$target.off("." + this.id);
    return this;
  }


  /**
   * <h4>アクティブ</h4>
   * @method active
   * @param {Number} num 要素のインデックス
   * @return {Slip}
   */
  active(num){
    let $target = is.isNumber(num) ? this.props.$target.eq(num) : this.props.$target;

    $target
    .addClass(this.props.activeClass)
    .find("." + this.props.tweenClass)
    .stop(true, false).css({top: 0, left: 0});

    return this;
  }


  /**
   * <h4>待機状態のスタイル</h4>
   * @method passive
   * @param {Number} num 要素のインデックス
   * @return {Slip}
   */
  passive(num){
    let $target = is.isNumber(num) ? this.props.$target.eq(num) : this.props.$target;

    $target
    .removeClass(this.props.activeClass)
    .find("." + this.props.tweenClass)
    .stop(true, false).css({top: "-100%"});

    return this;
  }


  /**
   * <h4>アニメーション</h4>
   * @private
   * @method _tween
   * @param {Number} num   要素のインデックス
   * @param {Object} event イベントオブジェクト
   * @return {Void}
   */
  _tween(num, event){
    let style = this._createTweenStyle(event),
    $target = this.props.$target.eq(num);

    if(!$target.hasClass(this.props.activeClass) && !$target.hasClass(this.props.noTweenClass)){
      $target.find("." + this.props.tweenClass)
      .stop(true, false)
      .css(style.start)
      .animate(style.end, this.props.tween);
    }
  }

  /**
   * <h4>Tweenスタイルの生成</h4>
   * @private
   * @method _createTweenStyle
   * @param {Object} event イベントオブジェクト
   * @return {Object}
   */
  _createTweenStyle(event){
    let isSlipin = event.type === "slipin",
    direction = isSlipin ? this.props.inDirection : this.props.outDirection,
    style01 = {left: 0, top: 0},
    style02 = $.extend({}, style01),
    style = isSlipin ? style01 : style02;

    if(direction === "horizontal"){
      style.left = event.x < 0 ? "-100%" : "100%";
    } else if(direction === "vertical"){
      style.top = event.y < 0 ? "-100%" : "100%";
    } else if(direction === "up"){
      style.top = "-100%";
    } else if(direction === "down"){
      style.top = "100%";
    } else if(direction === "left"){
      style.left = "-100%";
    } else if(direction === "right"){
      style.left = "100%";
    } else {
      // direction All
      if(event.direction === "top"){
        style.top = "-100%";
      } else if(event.direction === "bottom"){
        style.top = "100%";
      } else if(event.direction === "left"){
        style.left = "-100%";
      } else {
        style.left = "100%";
      }
    }

    return {
      start: style01,
      end  : style02
    }
  }
}
