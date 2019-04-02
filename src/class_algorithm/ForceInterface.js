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
   * ForceInterface
   *
   * @constructor
   * @class AMP.ForceInterface
   * @extends AMP.Vector2
   * @param {number} vx Vector.x
   * @param {number} vy Vector.y
   */
  function ForceInterface(vx, vy){
    // super class call
    AMP.Vector2.call(this, vx, vy);
  }

  // 基底クラスを継承
  AMP.inherits(ForceInterface, AMP.Vector2);

  // prototype
  var p = ForceInterface.prototype;



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
  ForceInterface.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * ForceInterfaceインスタンスの生成
   *
   * @static
   * @method get
   * @param {number} x x座標
   * @param {number} y y座標
   * @return {ForceInterface}
   */
  ForceInterface.get = function(x, y){
    return new ForceInterface(x, y);
  };


  /**
   * 加速度の取得
   *
   * @method speed
   * @return {Particle}
   */
  p.getSpeed = function(){
    return this.mag();
  };


  /**
   * 加速度の設定
   *
   * @method speed
   * @return {Particle}
   */
  p.setSpeed = function(speed){
    this.setMag(speed);
    return this;
  };


  /**
   * パーティクルに加える力を生成
   * インターフェースのみ実装
   *
   * @interface
   * @method createForce
   * param {Particle} particle パーティクル
   * @return {ForceInterface}
   */
  p.getForce = function(particle){
    return this;
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.ForceInterface = ForceInterface;



}(window, AMP));
