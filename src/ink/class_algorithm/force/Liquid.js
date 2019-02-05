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
   * 液体抵抗
   *
   * @class AMP.Liquid
   * @extends AMP.Rect
   * @param {number} x      x座標
   * @param {number} y      y座標
   * @param {number} width  幅
   * @param {number} height 高さ
   * @param {number} drag   抗力
   */
  function Liquid(x, y, width, height, drag){
    // super class call
    AMP.Rect.call(this, x, y, width, height);

    /**
     * 抗力
     *
     * @property drag
     * @type {number}
     */
    this.drag = drag || 1;
  }

  // 基底クラスを継承
  AMP.inherits(Liquid, AMP.Rect);

  // prototype
  var p = Liquid.prototype;



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
  Liquid.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * 液体抵抗
   *
   * @class AMP.Liquid
   * @extends AMP.BaseClass
   * @param {number} x      x座標
   * @param {number} y      y座標
   * @param {number} width  幅
   * @param {number} height 高さ
   * @param {number} drag   抗力
   */
  Liquid.get = function(x, y, width, height, drag){
    return new Liquid(x, y, width, height, drag);
  };


  /**
   * 力の取得
   *
   * @method getForce
   * @return {AMP.Vector2}
   */
  p.getForce = function(mover){
    if(this.inside(mover.position.x, mover.position.y)){
      var speed = mover.velocity.mag(),
      dragMagnitude = this.drag * speed * speed,
      velocity = mover.velocity.clone();

      return velocity.mult(-1).normalize().mult(dragMagnitude);

    } else {
      return new AMP.Vector2(0, 0);
    }
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Liquid = Liquid;



}(window, AMP));
