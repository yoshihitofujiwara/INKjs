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
   * Vehicle
   *
   * @class AMP.Vehicle
   * @extends AMP.ParticleInterface
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {number} y y座標
   * @param {object} option値
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
   * バージョン情報
   *
   * @static
   * @property VERSION
   * @type {string}
   */
  Vehicle.VERSION = '1.0.0';


  /**
   * デフォルト値オブジェクト
   * コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします
   *
   * @static
   * @property OPTIONS
   * @type {object}
   */
  /**
   * 最高速スケール値
   *
   * @static
   * @property OPTIONS.maxAxcel
   * @default 4
   * @type {number}
   */
  /**
   * 加速度の最大値
   *
   * @static
   * @property OPTIONS.maxForce
   * @default 0.1
   * @type {number}
   */
  /**
   * 目標地の減速ポイント（距離）
   *
   * @static
   * @property OPTIONS.targetArea
   * @default null
   * @type {number}
   */
  Vehicle.OPTIONS = Vehicle.OPTIONS || {};
  Vehicle.OPTIONS.maxAxcel = 4;
  Vehicle.OPTIONS.maxForce = 0.1;
  Vehicle.OPTIONS.targetArea = null;



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * Vehicleインスタンスの生成
   *
   * @static
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {object} option値
   * @return {Vehicle}
   */
  Vehicle.get = function(x, y, options){
    return new Vehicle(x, y, options);
  };


  /**
   * 現在地から目標地へ移動距離を加算
   *
   * @method seek
   * @param  {Number|AMP.Vector} x 目的地のx座標
   * @param  {number} y 目的地のy座標
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
   * 現在地から目標地へ移動距離を加算
   * targetAreaに入ると減速します
   *
   * @method arrive
   * @param  {Number|AMP.Vector} x 目的地のx座標
   * @param  {number} y 目的地のy座標
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
