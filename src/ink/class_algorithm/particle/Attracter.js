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
   * Attractor
   *
   * @class AMP.Attractor
   * @extends AMP.BaseClass
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {number} y y座標
   * @param {object} option値
   */
  function Attractor(x, y, options){
    // super class call
    AMP.ForceInterface.call(this, x, y, options);
  }

  // 基底クラスを継承
  AMP.inherits(Attractor, AMP.ForceInterface);

  // prototype
  var p = Attractor.prototype;



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
  Attractor.VERSION = '1.0.0';


  /**
   * デフォルト値オブジェクト
   * コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします
   *
   * @static
   * @property OPTIONS
   * @type {object}
   */
  /**
   * 重力
   *
   * @static
   * @property OPTIONS.g
   * @default 1
   * @type {vector2}
   */
  Attractor.OPTIONS = Attractor.OPTIONS || {};
  Attractor.OPTIONS.g = 1;



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * Attractorインスタンスの生成
   *
   * @static
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {object} option値
   * @return {}
   */
  Attractor.get = function(x, y, options){
    return new Attractor(x, y, options);
  };


  /**
   * Attractorの重力
   *
   * @method getForce
   * @param  {AMP.Particle} particle パーティクル
   * @return {AMP.Vector2}
   */
  p.getForce = function(particle){
    var force = AMP.Vector2.sub(this.position, particle.position),
    distance = force.mag(),
    strength = (this.g * this.mass * particle.mass) / (distance * distance);
    force.normalize().mult(strength);
    return force;
    /*
    var force = AMP.Vector2.sub(this.position, particle.position),
    mag = force.mag(),
    coefficient = this.mass / mag;

    force.div(mag).mult(coefficient);
    // this.acceleration.add(force);
    return force;
    */
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Attractor = Attractor;



}(window, AMP));
