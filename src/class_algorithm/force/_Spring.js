/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function(global, AMP){

  // 'use strict';


  /*----------------------------------------------------------------------
    @constructor
  ----------------------------------------------------------------------*/
  /**
   * バネ運動 v4実装予定
   *
   * @class AMP.Spring
   * @extends AMP.BaseClass
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {object} option値
   */
  function Spring(x, y, options){
    // super class call
    AMP.ForceInterface.call(this);

    var self = this,
    props = AMP.mixin(true, {}, Spring.OPTIONS, options);

    this.position = new AMP.Vector2(x, y);

    // option値をエクスポート
    AMP.each(props, function(val, key){
      self[key] = val;
    });
  }

  // 基底クラスを継承
  AMP.inherits(Spring, AMP.ForceInterface);

  // prototype
  var p = Spring.prototype;



  /*--------------------------------------------------------------------------
    @property
  --------------------------------------------------------------------------*/
  /**
   * バージョン情報
   *
   * @static
   * @property VERSION
   * @type {string}
   */
  Spring.VERSION = '1.0.0';


  /**
   * デフォルト値オブジェクト
   * コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします
   *
   * @static
   * @property OPTIONS
   * @type {object}
   */
  /**
   * 反発係数
   *
   * @static
   * @property OPTIONS.rebound
   * @default 0.1
   * @type {number}
   */
  /**
   * バネの長さ（オブジェクトとの最小の距離）
   *
   * @static
   * @property OPTIONS.distance
   * @default 0
   * @type {number}
   */
  /**
   * バネの最大の長さ（オブジェクトとの距離）
   *
   * @static
   * @property OPTIONS.maxDistance
   * @default null
   * @type {number}
   */
  Spring.OPTIONS = {
    rebound    : 0.1,
    distance   : 0,
    maxDistance: null,
    minDistance: null
  };



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * Springインスタンスの生成
   *
   * @static
   * @method get
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {object} option値
   * @return {Spring}
   */
  Spring.get = function(x, y, options){
    return new Spring(x, y, options);
  };


  /**
   * /// FIXME : 計算ミス
   * 座標からSpringの力を取得します
   *
   * @method getForce
   * @param  {Number|Vector2} x 座標
   * @param  {number} y 座標
   * @return {vector2}
   */
  p.getForce = function(x, y){
    var force = AMP.Vector2.sub(this.position, new AMP.Vector2(x, y));

    force
    .setMag(force.mag() - this.distance)
    .mult(this.rebound);

    if(AMP.isNumber(this.maxDistance)){
      force.limit(this.maxDistance);
    }

    return force;
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Spring = Spring;



}(window, AMP));
