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
   * <h4>重力 v4実装予定</h4>
   *
   * @class AMP.GravityForce
   * @extends AMP.Force
   * @param {Number} x x座標
   * @param {Number} y y座標
   */
  function GravityForce(x, y){
    // superClass constructor call
    AMP.ForceInterface.call(this, x, y);
  }

  // 基底クラスを継承
  AMP.inherits(GravityForce, AMP.ForceInterface);

  // prototype
  var p = GravityForce.prototype;



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
  GravityForce.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>Forceインスタンスの生成</h4>
   *
   * @static
   * @method get
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @return {Force}
   */
  GravityForce.get = function(x, y){
    return new GravityForce(x, y);
  };


  /**
   * <h4>重力の取得</h4>
   *
   * @method getForce
   * @param  {Number} mass 質量
   * @return {AMP.Vector2}
   */
  p.getForce = function(mass){
  	mass = mass || 1;
  	return AMP.Vector2.mult(this, mass);
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Force = Force;



}(window, AMP));
