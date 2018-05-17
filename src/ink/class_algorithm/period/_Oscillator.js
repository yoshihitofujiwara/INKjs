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
   * <h4>Oscillator v4実装予定</h4>
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
     * <h4>現在値</h4>
     *
     * @property position
     * @type {AMP.Vector2}
     */
    this.position = new AMP.Vector2();

    /**
     * <h4>角度</h4>
     *
     * @property angle
     * @type {AMP.Vector2}
     */
    this.angle = angle;

    /**
     * <h4>速度</h4>
     *
     * @property velocity
     * @type {AMP.Vector2}
     */
    this.velocity = velocity;

    /**
     * <h4>振り幅</h4>
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  Oscillator.VERSION = '1.0.0';



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
  Oscillator.get = function(x, y){
    return new Force(x, y);
  };


  /**
   * <h4>ポジションを更新</h4>
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
