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
   * 流体抵抗 v4実装予定
   *
   * @class AMP.DragForce
   * @extends AMP.Force
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {number} coefficient 反発係数
   */
  function DragForce(x, y, coefficient){
    // super class call
    AMP.ForceInterface.call(this, x, y);

    /**
     * 反発係数
     *
     * @property coefficient
     * @type {number}
     */
    this.coefficient = coefficient || 1;
  }

  // 基底クラスを継承
  AMP.inherits(DragForce, AMP.ForceInterface);

  // prototype
  var p = DragForce.prototype;



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
  DragForce.VERSION = '1.0.0';



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
   * @param {number} coefficient 反発係数
   * @return {Force}
   */
  DragForce.get = function(x, y, coefficient){
    return new DragForce(x, y, coefficient);
  };


  /**
   * 流体抵抗力の取得
   *
   * @method getForce
   * @param  {AMP.Vector2} velocity 速度
   * @return {AMP.Vector2}
   */
  p.getForce = function(velocity){
    var speed = velocity.mag(),
    dragMagnitude = this.coefficient * speed * speed,
    dragForce = velocity.clone();

    return dragForce.mult(-1).normalize().mult(dragMagnitude);
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.DragForce = DragForce;



}(window, AMP));
