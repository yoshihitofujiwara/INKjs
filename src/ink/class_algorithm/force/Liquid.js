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
   * <h4>液体抵抗</h4>
   *
   * @class AMP.Liquid
   * @extends AMP.Rect
   * @param {Number} x      x座標
   * @param {Number} y      y座標
   * @param {Number} width  幅
   * @param {Number} height 高さ
   * @param {Number} drag   抗力
   */
  function Liquid(x, y, width, height, drag){
    // super class call
    AMP.Rect.call(this, x, y, width, height);

    /**
     * <h4>抗力</h4>
     *
     * @property drag
     * @type {Number}
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  Liquid.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>液体抵抗</h4>
   *
   * @class AMP.Liquid
   * @extends AMP.BaseClass
   * @param {Number} x      x座標
   * @param {Number} y      y座標
   * @param {Number} width  幅
   * @param {Number} height 高さ
   * @param {Number} drag   抗力
   */
  Liquid.get = function(x, y, width, height, drag){
    return new Liquid(x, y, width, height, drag);
  };


  /**
   * <h4>力の取得</h4>
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
