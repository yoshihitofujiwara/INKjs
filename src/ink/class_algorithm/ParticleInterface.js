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
   * ParticleInterface
   * パーティクルクラスのインターフェース定義
   *
   * @constructor
   * @class AMP.ParticleInterface
   * @extends AMP.BaseClass
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {number} y y座標
   * @param {object} option値
   */
  function ParticleInterface(x, y, options){
    // super class call
    AMP.BaseClass.call(this);

    if(AMP.isObject(x)){
      options = y;
      y = x.y;
      x = x.x;
    }

    var self = this,
    props = AMP.mixin(true, {}, ParticleInterface.OPTIONS, options);

    // option値をエクスポート
    AMP.each(props, function(val, key){
      self[key] = val;
    });

    /**
     * 座標
     *
     * @property position
     * @type {AMP.Vector2}
     */
    this.position = new AMP.Vector2(x, y);

    /**
     * 加速度
     *
     * @private
     * @property acceleration
     * @type {vector2}
     */
    this.acceleration = new AMP.Vector2();
  }

  // 基底クラスを継承
  AMP.inherits(ParticleInterface, AMP.BaseClass);

  // prototype
  var p = ParticleInterface.prototype;



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
  ParticleInterface.VERSION = '1.0.0';


  /**
   * デフォルト値オブジェクト
   * コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします
   *
   * @static
   * @property OPTIONS
   * @type {object}
   */
  /**
   * スピード（加速度）
   *
   * @static
   * @property OPTIONS.velocity
   * @type {AMP.Vector2}
   */
  /**
   * 質量
   *
   * @static
   * @property OPTIONS.mass
   * @default 1
   * @type {number}
   */
  /**
   * 摩擦係数
   *
   * @static
   * @property OPTIONS.friction
   * @default 1
   * @type {number}
   */
  /**
   * 減衰値
   *
   * @static
   * @property OPTIONS.damping
   * @default 1
   * @type {number}
   */
  /**
   * 加速度の最大値
   * 初期値はリミット無し
   *
   * @static
   * @property OPTIONS.maxSpeed
   * @default null
   * @type {number}
   */
  ParticleInterface.OPTIONS = {
    velocity: AMP.Vector2.radToVector2(0, 0), // angle, speed
    mass    : 1,
    friction: 0,
    // damping : 1,
    maxSpeed: null
  };



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * ParticleInterfaceインスタンスの生成
   *
   * @static
   * @param {number} x x座標
   * @param {number} y y座標
   * @param {object} option値
   * @return {ParticleInterface}
   */
  ParticleInterface.get = function(x, y, options){
    return new ParticleInterface(x, y, options);
  };


  /* Utils
  -----------------------------------------------------------------*/
  /**
   * 加速度の取得
   *
   * @method speed
   * @return {ParticleInterface}
   */
  p.getSpeed = function(){
    return this.velocity.mag();
  };


  /**
   * 加速度の設定
   *
   * @method speed
   * @return {ParticleInterface}
   */
  p.setSpeed = function(speed){
    this.velocity.setMag(speed);
    return this;
  };


  /**
   * 加速度の向きを取得
   *
   * @method angle
   * @param {boolean} isDegrees 角度で返すか
   * @return {number} ラジアン角、角度
   */
  p.getAngle = function(isDegrees){
    if(isDegrees){
      return AMP.radToDeg(this.velocity.angle());
    } else {
      return this.velocity.angle();
    }
  };


  /**
   * 加速度の向きの設定
   *
   * @method setAngle
   * @param {number} angle ラジアン角、角度
   * @param {boolean} isDegrees 第一引数が角度か
   * @return {ParticleInterface}
   */
  p.setAngle = function(angle, isDegrees){
    angle = isDegrees ? AMP.degToRad(angle) : angle;
    this.velocity.setAngle(angle);
    return this;
  };


  /**
   * パーティクルとの角度の差を返します
   *
   * @method angleTo
   * @param  {ParticleInterface}  particle 比較するパーティクル
   * @param  {boolean} isDegrees 角度で返すか
   * @return {number}
   */
  p.angleTo = function(particle, isDegrees){
    var p = particle.position.toJSON(),
    rad = Math.atan2(p.y - this.position.y, p.x - this.position.x);

    if(isDegrees){
      return AMP.radToDeg(rad);
    } else {
      return rad;
    }
  };


  /**
   * 指定の座標との距離を返す
   *
   * @method distanceTo
   * @param  {Number|Vector2} x x座標、もしくはVector2座標
   * @param  {number} y y座標
   * @return {number}
   */
  p.distanceTo = function(x, y){
    var p = new AMP.Vector2(x, y);
    return p.sub(this.position).mag();
  };


  /**
   * 力を加えます
   * F = M * A
   *
   * @method applyForce
   * @param  {vector2} force Vector2オブジェクト
   * @return {Mover}
   */
  p.applyForce = function(force){
    this.acceleration.add(AMP.Vector2.div(force, this.mass));
    return this;
  };


  /**
   * プロパティの更新
   *
   * @method update
   * @return {ParticleInterface}
   */
  p.update = function(){
    // 加速度を追加
    this.velocity.add(this.acceleration);

    // 摩擦を追加
    if(this.friction){
      var friction = this.velocity.clone();
      friction.mult(-1).normalize().mult(this.friction);
      this.applyForce(friction);
    }

    // * 減衰量
    // this.velocity.mult(this.damping);

    // 最高速度制限
    if(AMP.isNumber(this.maxSpeed)){
      this.velocity.limit(this.maxSpeed);
    }

    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.validate();
    return this;
  };


  /**
   * アップデート後に、値のチェックを行います
   * インターフェースのみ実装
   *
   * @interface
   * @method validate
   * @return {ParticleInterface}
   */
  p.validate = function(){};


  /**
   * パーティクルの生死判定
   * インターフェースのみ実装
   *
   * @interface
   * @method isDead
   * @return {boolean}
   */
  p.isDead = function(){};


  /**
   * 描画を行います
   * インターフェースのみ実装
   *
   * @interface
   * @method draw
   * @return {ParticleInterface}
   */
  p.draw = function(){};



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.ParticleInterface = ParticleInterface;



}(window, AMP));
