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
   * <h4>ParticleInterface</h4>
   * <p>パーティクルクラスのインターフェース定義</p>
   *
   * @constructor
   * @class AMP.ParticleInterface
   * @extends AMP.BaseClass
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {Number} y y座標
   * @param {Object} option値
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
     * <h4>座標</h4>
     *
     * @property position
     * @type {AMP.Vector2}
     */
    this.position = new AMP.Vector2(x, y);

    /**
     * <h4>加速度</h4>
     *
     * @private
     * @property acceleration
     * @type {Vector2}
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  ParticleInterface.VERSION = '1.0.0';


  /**
   * <h4>デフォルト値オブジェクト</h4>
   * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてプロパティとしてエクスポートします</p>
   *
   * @static
   * @property OPTIONS
   * @type {Object}
   */
  /**
   * <h4>スピード（加速度）</h4>
   *
   * @static
   * @property OPTIONS.velocity
   * @type {AMP.Vector2}
   */
  /**
   * <h4>質量</h4>
   *
   * @static
   * @property OPTIONS.mass
   * @default 1
   * @type {Number}
   */
  /**
   * <h4>摩擦係数</h4>
   *
   * @static
   * @property OPTIONS.friction
   * @default 1
   * @type {Number}
   */
  /**
   * <h4>減衰値</h4>
   *
   * @static
   * @property OPTIONS.damping
   * @default 1
   * @type {Number}
   */
  /**
   * <h4>加速度の最大値</h4>
   * <p>初期値はリミット無し</p>
   *
   * @static
   * @property OPTIONS.maxSpeed
   * @default null
   * @type {Number}
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
   * <h4>ParticleInterfaceインスタンスの生成</h4>
   *
   * @static
   * @param {Number} x x座標
   * @param {Number} y y座標
   * @param {Object} option値
   * @return {ParticleInterface}
   */
  ParticleInterface.get = function(x, y, options){
    return new ParticleInterface(x, y, options);
  };


  /* Utils
  -----------------------------------------------------------------*/
  /**
   * <h4>加速度の取得</h4>
   *
   * @method speed
   * @return {ParticleInterface}
   */
  p.getSpeed = function(){
    return this.velocity.mag();
  };


  /**
   * <h4>加速度の設定</h4>
   *
   * @method speed
   * @return {ParticleInterface}
   */
  p.setSpeed = function(speed){
    this.velocity.setMag(speed);
    return this;
  };


  /**
   * <h4>加速度の向きを取得</h4>
   *
   * @method angle
   * @param {Boolean} isDegrees 角度で返すか
   * @return {Number} ラジアン角、角度
   */
  p.getAngle = function(isDegrees){
    if(isDegrees){
      return AMP.radToDeg(this.velocity.angle());
    } else {
      return this.velocity.angle();
    }
  };


  /**
   * <h4>加速度の向きの設定</h4>
   *
   * @method setAngle
   * @param {Number} angle ラジアン角、角度
   * @param {Boolean} isDegrees 第一引数が角度か
   * @return {ParticleInterface}
   */
  p.setAngle = function(angle, isDegrees){
    angle = isDegrees ? AMP.degToRad(angle) : angle;
    this.velocity.setAngle(angle);
    return this;
  };


  /**
   * <h4>パーティクルとの角度の差を返します</h4>
   *
   * @method angleTo
   * @param  {ParticleInterface}  particle 比較するパーティクル
   * @param  {Boolean} isDegrees 角度で返すか
   * @return {Number}
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
   * <h4>指定の座標との距離を返す</h4>
   *
   * @method distanceTo
   * @param  {Number|Vector2} x x座標、もしくはVector2座標
   * @param  {Number} y y座標
   * @return {Number}
   */
  p.distanceTo = function(x, y){
    var p = new AMP.Vector2(x, y);
    return p.sub(this.position).mag();
  };


  /**
   * <h4>力を加えます</h4>
   * <p>F = M * A</p>
   *
   * @method applyForce
   * @param  {Vector2} force Vector2オブジェクト
   * @return {Mover}
   */
  p.applyForce = function(force){
    this.acceleration.add(AMP.Vector2.div(force, this.mass));
    return this;
  };


  /**
   * <h4>プロパティの更新</h4>
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
   * <h4>アップデート後に、値のチェックを行います</h4>
   * <p>インターフェースのみ実装</p>
   *
   * @interface
   * @method validate
   * @return {ParticleInterface}
   */
  p.validate = function(){};


  /**
   * <h4>パーティクルの生死判定</h4>
   * <p>インターフェースのみ実装</p>
   *
   * @interface
   * @method isDead
   * @return {Boolean}
   */
  p.isDead = function(){};


  /**
   * <h4>描画を行います</h4>
   * <p>インターフェースのみ実装</p>
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
