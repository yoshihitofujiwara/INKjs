/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";


/**
 * <h4>2Dベクトル・座標を管理します</h4>
 * @class Vector2
 * @param {Number} x x座標値
 * @param {Number} y y座標値
 * @param {Boolean} isDegrees アングルモードをDegreesにするか
 */
export default class Vector2 {
  /**
   * constructor
   */
  constructor(x, y) {
    /**
     * <h4>X座標</h4>
     * @property x
     * @type {Number}
     */
    this.x = x;

    /**
     * <h4>Y座標</h4>
     * @property y
     * @type {Number}
     */
    this.y = y;
  }


  /**
   * <h4>argumentsからVector2を生成</h4>
   * @static
   * @method coordToJson
   * @param {Number} x x座標値
   * @param {Number} y y座標値
   * @return {Object}
   */
  static coordToJson(x, y){
    if(utils.isObject(x)){
      return {
        x: utils.isNumber(x.x) ? x.x : 0,
        y: utils.isNumber(x.y) ? x.y : 0
      };

    } else if(utils.isArray(x)){
      return {
        x: utils.isNumber(x[0]) ? x[0] : 0,
        y: utils.isNumber(x[1]) ? x[1] : 0
      };

    } else {
      return {
        x: utils.isNumber(x) ? x : 0,
        y: utils.isNumber(y) ? y : 0
      };
    }
  }


  /**
   * <h4>ラジアン角から2Dベクトルを作成</h4>
   * @static
   * @method radToVector2
   * @param {Number} rad radian
   * @param {Number} mag ベクトルの大きさ
   * @return {Vector2}
   */
  static radToVector2(rad, mag){
    return new Vector2(Math.cos(rad) * mag, Math.sin(rad) * mag);
  }


  /**
   * <h4>角度から2Dベクトルを作成</h4>
   * @static
   * @method degToVector2
   * @param {Number} deg degrees
   * @param {Number} mag ベクトルの大きさ
   * @return {Vector2}
   */
  static degToVector2(deg, mag){
    return Vector2.radToVector2(deg * utils.DEG_TO_RAD, mag);
  }


  /**
   * <h4>ランダムな2Dベクトルを作成</h4>
   * @static
   * @method random
   * @param {Number} mag ベクトルの大きさ
   * @return {Vector2}
   */
  static random(mag){
    return Vector2.radToVector2(utils.random(utils.TWO_PI), mag);
  }


  /**
   * <h4>座標の同値判定</h4>
   * @static
   * @method equals
   * @param {Vector2} v1 Vector2
   * @param {Vector2} v2 Vector2
   * @return {Boolean}
   */
  static equals(v1, v2){
    return (v1.x === v2.x && v1.y === v2.y);
  }


  /**
   * <h4>2つのベクトル座標間のユーグリッド距離</h4>
   * @static
   * @method distance
   * @param {Vector2} v1 Vector2
   * @param {Vector2} v2 Vector2
   * @return {Number} 2つのベクトル間のユーグリッド距離
   */
  static distance(v1, v2){
    return v1.clone().sub(v2).mag();
  }


  /**
   * <h4>Vector2のcloneを生成します</h4>
   * @method clone
   * @return {Vector2}
   */
  clone(){
    return new Vector2(this.x, this.y, (this.angleMode === ANGLE_MODE_DEGREES));
  }


  /**
   * <h4>初期値にセット</h4>
   * @method identity
   * @return {Vector2}
   */
  identity(){
    this.x = 0;
    this.y = 0;
    return this;
  }


  /**
   * <h4>ベクトル座標のセット</h4>
   * @method set
   * @param {Number} x x座標値
   * @param {Number} y y座標値
   * @return {Vector2}
   */
  set(x, y){
    this.x = x;
    this.y = y;
    return this;
  }


  /**
   * <h4>ベクトル座標の加算</h4>
   * @method add
   * @param {Vector2} vec2 Vector2
   * @return {Vector2}
   */
  add(vec2){
    this.x += vec2.x;
    this.y += vec2.y;
    return this;
  }


  /**
   * <h4>ベクトル座標の減算</h4>
   * @method sub
   * @param {Vector2} vec2 Vector2
   * @return {Vector2}
   */
  sub(vec2){
    this.x -= vec2.x;
    this.y -= vec2.y;
    return this;
  }


  /**
   * <h4>ベクトル座標の乗算</h4>
   * @method mult
   * @param {Number} num 乗数
   * @return {Vector2}
   */
  mult(num){
    this.x *= num;
    this.y *= num;
    return this;
  }


  /**
   * <h4>ベクトル座標の除算</h4>
   * @method div
   * @param {Number} num 除数
   * @return {Vector2}
   */
  div(num){
    this.x /= num;
    this.y /= num;
    return this;
  }


  /**
   * <h4>ベクトルの大きさを設定</h4>
   * @method setMag
   * @param {Number} mag ベクトルの大きさ
   * @return {Vector2}
   */
  setMag(mag){
    let vec2 = Vector2.radToVector2(this.angle(), mag);
    this.set(vec2.x, vec2.y);
    return this;
  }


  /**
   * <h4>ベクトル2乗を返す</h4>
   * @method magSq
   * @return {Number} ベクトルの大きさ(長さ)の2乗を返す
   */
  magSq(){
    return this.x * this.x + this.y * this.y;
  }


  /**
   * <h4>ベクトルの大きさ(長さ)を返す</h4>
   * @method mag
   * @return {Number} ベクトルの大きさ(長さ)を返す
   */
  mag(){
    return Math.sqrt(this.magSq(this.x, this.y));
  }


  /**
   * <h4>ベクトルのアングル(angle mode指定)取得</h4>
   * @method angle
   * @return {Number} アングルを返す
   */
  angle(){
    return Math.atan2(this.y, this.x);
  }


  /**
   * <h4>ベクトルのアングル(angle mode指定)をセットする</h4>
   * @method setAngle
   * @param {Number} angle radianかdegrees値(angle mode指定)
   * @return {Vector2}
   */
  setAngle(angle){
    let vec2 = Vector2.radToVector2(angle, this.mag());
    this.set(vec2.x, vec2,y);
    return this;
  }


  /**
   * <h4>ベクトルのアングル(ラジアン角)を加算</h4>
   * @method addAngle
   * @param {Number} angle 加算するangle量
   * @return {Vector2}
   */
  addAngle(angle){
    this.setAngle(this.angle() + angle);
    return this;
  }


  /**
   * <h4>ベクトルのアングル(ラジアン角)を減算</h4>
   * @method subAngle
   * @param {Number} angle 減算するangle量
   * @return {Vector2}
   */
  subAngle(angle){
    this.setAngle(this.angle() - angle);
    return this;
  }


  /**
   * <h4>ベクトルのアングル(ラジアン角)の乗算</h4>
   * @method multAngle
   * @param {Number} num 乗数
   * @return {Vector2}
   */
  multAngle(num){
    this.setAngle(this.angle() * num);
    return this;
  }


  /**
   * <h4>ベクトルのアングル(ラジアン角)の除算</h4>
   * @method divAngle
   * @param {Number} num 除数
   * @return {Vector2}
   */
  divAngle(num){
    this.setAngle(this.angle() / num);
    return this;
  }


  /**
   * <h4>正規化</h4>
   * @method normalize
   * @return {Vector2}
   */
  normalize(){
    let mag = this.mag();
    if(mag !== 0){
      this.div(mag);
    }
    return this;
  }


  /**
   * <h4>最大値の制限</h4>
   * @method limit
   * @param {Number} max 最大値
   * @return {Vector2}
   */
  limit(max){
    if(max * max < this.magSq()) {
      this.normalize().mult(max);
    }
    return this;
  }


  /**
   * <h4>線形補間</h4>
   * @method lerp
   * @param {Vector2} vec2 Vector2
   * @param {Number} amount amount量
   * @return {Vector2}
   */
  lerp(vec2, amount){
    this.x += (vec2.x - this.x) * (amount || 0);
    this.y += (vec2.y - this.y) * (amount || 0);
    return this;
  }


  /**
   * <h4>内積</h4>
   * @method dot
   * @param {Vector2} vec2 Vector2
   * @return {Number} ベクトルの内積
   */
  dot(vec2){
    return Vector2.dot(this, vec2);
  }


  /**
   * <h4>外積</h4>
   * @method dot
   * @param {Vector2} vec2 Vector2
   * @return {Number} ベクトルの外積
   */
  cross(vec2){
    return Vector2.cross(this, vec2);
  }


  ///==========================================================================
  /// Not Recommended
  ///==========================================================================
  /**
   * <h4>ベクトル差分を返す</h4>
   * @method diff
   * @param {Vector2} vec2 Vector2
   * @return {Vector2}
   */
  diff(vec2){
    return new Vector2(Math.abs(this.x - vec2.x), Math.abs(this.y - vec2.y));
  }

  /**
   * <h4>ベクトルの大きさ(長さ)の差分を返す</h4>
   * @method diffMag
   * @param {Vector2} vec2 Vector2
   * @return {Number}
   */
  diffMag(vec2){
    return vec2.diff(this).mag();
  }

  /**
   * <h4>ベクトルのラジアン差分を返す</h4>
   * @method diffRad
   * @param {Vector2} vec2 Vector2
   * @return {Number}
   */
  diffRad(vec2){
    let rad1 = Math.atan2(this.y, this.x),
    rad2 = Math.atan2(vec2.y, vec2.x);

    return Math.abs(rad2 - rad1);
  }

  /**
   * <h4>ベクトルの角度差分を返す</h4>
   * @method diffDeg
   * @param {Vector2} vec2 Vector2
   * @param {Number} y y座標値
   * @return {Number}
   */
  diffDeg(vec2){
    return this.diffRad(vec2) * utils.RAD_TO_DEG;
  }

  /**
   * <h4>2つのベクトルの大きさの中間値を返す</h4>
   * @method betweenMag
   * @param {Vector2} vec2 Vector2
   * @param {Number} ratio 中間ポイント 0 < 1 初期値: 0.5
   * @return {Number}
   */
  betweenMag(vec2, ratio){
    let mag1 = this.mag(),
    mag2 = vec2.mag();

    ratio = utils.isNumber(ratio) ? ratio : 0.5;

    return mag1 + (mag2 - mag1) * ratio;
  }

  /**
   * <h4>2つのベクトルの大きさの中間ラジアン値を返す</h4>
   * @method betweenRad
   * @param {Vector2} vec2 Vector2
   * @param {Number} ratio 中間ポイント 0 < 1 初期値: 0.5
   * @return {Number}
   */
  betweenRad(vec2, ratio){
    let rad1 = Math.atan2(this.y, this.x),
    rad2 = Math.atan2(vec2.y, vec2.x);

    ratio = utils.isNumber(ratio) ? ratio : 0.5;
    return rad1 + (rad2 - rad1) * ratio;
  }

  /**
   * <h4>2つのベクトルの大きさの中間角を返す</h4>
   * @method betweenDeg
   * @param {Vector2} vec2 Vector2
   * @param {Number} ratio 中間ポイント 0 < 1 初期値: 0.5
   * @return {Number}
   */
  betweenDeg(vec2, ratio){
    return this.betweenRad(vec2, ratio) * utils.RAD_TO_DEG;
  }


  /**
   * <h4>角度から2Dベクトルを作成</h4>
   * @static
   * @method degTo2d
   * @param {Number} deg degrees
   * @param {Number} mag ベクトルの大きさ
   * @return {Vector2}
   */
  static degToVector2(deg, mag){
    let vector = Vector2.radToVector2(utils.degToRad(deg), mag);
    vector.setAngleMode(true);
    return vector;
  }


  /**
   * <h4>ベクトルの角度を取得する</h4>
   * @static
   * @method angle
   * @param {Vector2} vec2 Vector2
   * @return {Number} アングルを返す
   */
  static angle(vec2){
    return Math.atan2(vec2.y, vec2.x);
  }


  /**
   * <h4>ベクトルの内積</h4>
   *
   * @static
   * @method dot
   * @param {Vector2} v1 Vector2
   * @param {Vector2} v2 Vector2
   * @return {Number} ベクトルの内積
   */
  static dot(v1, v2){
    return v1.x * v2.x + v1.y * v2.y;
  }


  /**
   * <h4>ベクトルの外積</h4>
   * @static
   * @method cross
   * @param {Vector2} v1 Vector2
   * @param {Vector2} v2 Vector2
   * @return {Number} ベクトルの外積
   */
  static cross(v1, v2){
    return v1.x * v2.y - v1.y * v2.x;
  }


  /**
   * <h4>ベクトル間の角度</h4>
   * @static
   * @method angleBetween
   * @param {Vector2} v1 Vector2
   * @param {Vector2} v2 Vector2
   * @return {Number} ラジアン角
   */
  static angleBetween(v1, v2) {
    return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
  }


  /**
   * <h4>別のベクトルに対する線形補間</h4>
   * @static
   * @method lerp
   * @param {Vector2} v1 Vector2
   * @param {Vector2} v2 Vector2
   * @param {Number} amount amount量
   * @return {Vector2}
   */
  static lerp(v1, v2, amount){
    let v = v1.clone();
    v.leap(v2, amount);
    return v;
  }
}
