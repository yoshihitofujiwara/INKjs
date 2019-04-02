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
   * Oscillator v4実装予定
   *
   * @class AMP.Oscillator
   * @extends AMP.BaseClass
   * @param {AMP.Vector2} angle 角度
   * @param {AMP.Vector2} velocity 速度
   * @param {AMP.Vector2} amplitude 振り幅
   */
  function Oscillator(angle, velocity, amplitude){
    // super class call
    AMP.BaseClass.call(this);

    /**
     * 現在値
     *
     * @property position
     * @type {AMP.Vector2}
     */
    this.position = new AMP.Vector2();

    /**
     * 角度
     *
     * @property angle
     * @type {AMP.Vector2}
     */
    this.angle = angle;

    /**
     * 速度
     *
     * @property velocity
     * @type {AMP.Vector2}
     */
    this.velocity = velocity;

    /**
     * 振り幅
     *
     * @property amplitude
     * @type {AMP.Vector2}
     */
    this.amplitude = amplitude;
  }

  // 基底クラスを継承
  AMP.inherits(Oscillator, AMP.BaseClass);

  // prototype
  var p = Oscillator.prototype;



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
  Oscillator.VERSION = '1.0.0';



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
  Oscillator.get = function(x, y){
    return new Force(x, y);
  };


  /**
   * ポジションを更新
   *
   * @method update
   * @return {Oscillator}
   */
  p.update = function(){
    this.angle.add(this.velocity);

    this.position.set({
      // x: Math.sin(this.angle.x) * this.amplitude.x,
      x: Math.cos(this.angle.x) * this.amplitude.x,
      y: Math.sin(this.angle.y) * this.amplitude.y
    });

    return this;
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Oscillator = Oscillator;



}(window, AMP));
