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
   * 重力 v4実装予定
   *
   * @class AMP.Gravity
   * @extends AMP.BaseClass
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {object} option値
   */
  function Gravity(x, y, options){
    if(AMP.isObject(x)){
      options = y;
      y = x.y;
      x = x.x;
    }

    // super class call
    AMP.ForceInterface.call(this, x, y);

    var self = this,
    props = AMP.mixin(true, {}, Particle.OPTIONS, options);

    // option値をエクスポート
    AMP.each(props, function(val, key){
      self[key] = val;
    });
  }

  // 基底クラスを継承
  AMP.inherits(Gravity, AMP.ForceInterface);

  // prototype
  var p = Gravity.prototype;



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
  Gravity.VERSION = '1.0.0';


  /**
   * デフォルト値オブジェクト
   * コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします
   *
   * @static
   * @property OPTIONS
   * @type {object}
   */
  Gravity.OPTIONS = {
    g   : 0.1, // 重力
    mass: 20 // 質量
  };



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * Gravityインスタンスの生成
   *
   * @static
   * @method get
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {object} option値
   * @return {Gravity}
   */
  Gravity.get = function(x, y, options){
    return new Gravity(x, y, options);
  };


  /**
   * 重力を取得
   *
   * @method getForce
   * @param  {AMP.Particle} particle パーティクル
   * @return {AMP.Vector2}
   */
  p.getForce = function(particle){
    var force = AMP.Vector2.sub(this, particle.position),
    distance = force.mag(),
    strength;

    // constrain?
    // distance = AMP.clamp(distance, 5, 25);

    strength = (this.g * this.mass * particle.mass) / (distance * distance);
    force.normalize().mult(strength);
    return force;
  };

  p.applyGravity = function(gravity){
    var force = AMP.Vector2.sub(gravity.position, this.position),
    mag = force.mag(),
    coefficient = gravity.mass / mag;

    force.div(mag).mult(coefficient);
    this.acceleration.add(force);
    return this;
  };



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Gravity = Gravity;



}(window, AMP));
