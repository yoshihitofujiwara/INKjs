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
   * <h4>流体抵抗 v4実装予定</h4>
   *
   * @class AMP.DragForce
   * @extends AMP.Force
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @param {Number} coefficient 反発係数
   */
  function DragForce(x, y, coefficient){
    // super class call
    AMP.ForceInterface.call(this, x, y);

    /**
     * <h4>反発係数</h4>
     *
     * @property coefficient
     * @type {Number}
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  DragForce.VERSION = '1.0.0';



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
   * @param {Number} coefficient 反発係数
   * @return {Force}
   */
  DragForce.get = function(x, y, coefficient){
    return new DragForce(x, y, coefficient);
  };


  /**
   * <h4>流体抵抗力の取得</h4>
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
