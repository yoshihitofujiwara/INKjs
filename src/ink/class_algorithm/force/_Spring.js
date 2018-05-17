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
   * <h4>バネ運動 v4実装予定</h4>
   *
   * @class AMP.Spring
   * @extends AMP.BaseClass
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @param {Object} option値
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  Spring.VERSION = '1.0.0';


  /**
   * <h4>デフォルト値オブジェクト</h4>
   * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします</p>
   *
   * @static
   * @property OPTIONS
   * @type {Object}
   */
  /**
   * <h4>反発係数</h4>
   *
   * @static
   * @property OPTIONS.rebound
   * @default 0.1
   * @type {Number}
   */
  /**
   * <h4>バネの長さ（オブジェクトとの最小の距離）</h4>
   *
   * @static
   * @property OPTIONS.distance
   * @default 0
   * @type {Number}
   */
  /**
   * <h4>バネの最大の長さ（オブジェクトとの距離）</h4>
   *
   * @static
   * @property OPTIONS.maxDistance
   * @default null
   * @type {Number}
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
   * <h4>Springインスタンスの生成</h4>
   *
   * @static
   * @method get
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @param {Object} option値
   * @return {Spring}
   */
  Spring.get = function(x, y, options){
    return new Spring(x, y, options);
  };


  /**
   * /// FIXME : 計算ミス
   * <h4>座標からSpringの力を取得します</h4>
   *
   * @method getForce
   * @param  {Number|Vector2} x 座標
   * @param  {Number} y 座標
   * @return {Vector2}
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
