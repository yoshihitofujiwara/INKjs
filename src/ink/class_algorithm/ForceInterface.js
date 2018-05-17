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
   * <h4>ForceInterface</h4>
   *
   * @constructor
   * @class AMP.ForceInterface
   * @extends AMP.Vector2
   * @param {Number} vx Vector.x
   * @param {Number} vy Vector.y
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  ForceInterface.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>ForceInterfaceインスタンスの生成</h4>
   *
   * @static
   * @method get
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @return {ForceInterface}
   */
  ForceInterface.get = function(x, y){
    return new ForceInterface(x, y);
  };


  /**
   * <h4>加速度の取得</h4>
   *
   * @method speed
   * @return {Particle}
   */
  p.getSpeed = function(){
    return this.mag();
  };


  /**
   * <h4>加速度の設定</h4>
   *
   * @method speed
   * @return {Particle}
   */
  p.setSpeed = function(speed){
    this.setMag(speed);
    return this;
  };


  /**
   * <h4>パーティクルに加える力を生成</h4>
   * <p>インターフェースのみ実装</p>
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
