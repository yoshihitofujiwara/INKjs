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
   * 重力 v4実装予定
   *
   * @class AMP.GravityForce
   * @extends AMP.Force
   * @param {number} x x座標
   * @param {number} y y座標
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
   * バージョン情報
   *
   * @static
   * @property VERSION
   * @type {string}
   */
  GravityForce.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * Forceインスタンスの生成
   *
   * @static
   * @method get
   * @param {number} x x座標
   * @param {number} y y座標
   * @return {Force}
   */
  GravityForce.get = function(x, y){
    return new GravityForce(x, y);
  };


  /**
   * 重力の取得
   *
   * @method getForce
   * @param  {number} mass 質量
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
