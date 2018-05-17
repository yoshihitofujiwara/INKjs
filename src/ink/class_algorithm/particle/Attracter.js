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
   * <h4>Attractor</h4>
   *
   * @class AMP.Attractor
   * @extends AMP.BaseClass
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {Number} y y座標
   * @param {Object} option値
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  Attractor.VERSION = '1.0.0';


  /**
   * <h4>デフォルト値オブジェクト</h4>
   * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします</p>
   *
   * @static
   * @property OPTIONS
   * @type {Object}
   */
  /**
   * <h4>重力</h4>
   *
   * @static
   * @property OPTIONS.g
   * @default 1
   * @type {Vector2}
   */
  Attractor.OPTIONS = Attractor.OPTIONS || {};
  Attractor.OPTIONS.g = 1;



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>Attractorインスタンスの生成</h4>
   *
   * @static
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @param {Object} option値
   * @return {}
   */
  Attractor.get = function(x, y, options){
    return new Attractor(x, y, options);
  };


  /**
   * <h4>Attractorの重力</h4>
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
