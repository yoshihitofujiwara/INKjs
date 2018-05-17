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
   * <h4>Vehicle</h4>
   *
   * @class AMP.Vehicle
   * @extends AMP.ParticleInterface
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {Number} y y座標
   * @param {Object} option値
   */
  function Vehicle(x, y, options){
    // super class call
    AMP.ParticleInterface.call(this, x, y, options);
  }

  // 基底クラスを継承
  AMP.inherits(Vehicle, AMP.ParticleInterface);

  // prototype
  var p = Vehicle.prototype;



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
  Vehicle.VERSION = '1.0.0';


  /**
   * <h4>デフォルト値オブジェクト</h4>
   * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします</p>
   *
   * @static
   * @property OPTIONS
   * @type {Object}
   */
  /**
   * <h4>最高速スケール値</h4>
   *
   * @static
   * @property OPTIONS.maxAxcel
   * @default 4
   * @type {Number}
   */
  /**
   * <h4>加速度の最大値</h4>
   *
   * @static
   * @property OPTIONS.maxForce
   * @default 0.1
   * @type {Number}
   */
  /**
   * <h4>目標地の減速ポイント（距離）</h4>
   *
   * @static
   * @property OPTIONS.targetArea
   * @default null
   * @type {Number}
   */
  Vehicle.OPTIONS = Vehicle.OPTIONS || {};
  Vehicle.OPTIONS.maxAxcel = 4;
  Vehicle.OPTIONS.maxForce = 0.1;
  Vehicle.OPTIONS.targetArea = null;



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>Vehicleインスタンスの生成</h4>
   *
   * @static
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @param {Object} option値
   * @return {Vehicle}
   */
  Vehicle.get = function(x, y, options){
    return new Vehicle(x, y, options);
  };


  /**
   * <h4>現在地から目標地へ移動距離を加算</h4>
   *
   * @method seek
   * @param  {Number|AMP.Vector} x 目的地のx座標
   * @param  {Number} y 目的地のy座標
   * @return {AMP.Vector}
   */
  p.seek = function(x, y){
    var desired = AMP.Vector2.sub(new AMP.Vector2(x, y), this.position);
    desired.normalize().mult(this.maxAxcel);

    var steer = AMP.Vector2.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);

    return this;
  };


  /**
   * <h4>現在地から目標地へ移動距離を加算</h4>
   * <p>targetAreaに入ると減速します</p>
   *
   * @method arrive
   * @param  {Number|AMP.Vector} x 目的地のx座標
   * @param  {Number} y 目的地のy座標
   * @return {AMP.Vector}
   */
  p.arrive = function(x, y){
    var desired = AMP.Vector2.sub(new AMP.Vector2(x, y), this.position),
    d = desired.mag();

    if(AMP.isNumber(this.targetArea) && d < this.targetArea){
      var m = AMP.optimize(d, 0, 100, 0, this.maxAxcel);
      desired.setMag(m);

    } else {
      desired.setMag(this.maxAxcel);
    }

    var steer = AMP.Vector2.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Vehicle = Vehicle;



}(window, AMP));
