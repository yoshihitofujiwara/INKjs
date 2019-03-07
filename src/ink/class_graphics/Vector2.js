/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";


/**
 * @class Vector2 - 2Dベクトル・座標を管理します
 * @param {number|Vector2} x x座標値 default 0
 * @param {number} y y座標値 default 0
 * @param {boolean} isDegrees アングルモードをDegreesにするか
 */
export default class Vector2 {
  /**
   * constructor
   */
	constructor(x = 0, y = 0) {
		if (utils.isObject(x)) {
			y = x.y || 0;
			x = x.x || 0;
		}

    /**
     * X座標
     * @property x
     * @type {number}
     */
		this.x = x;

    /**
     * Y座標
     * @property y
     * @type {number}
     */
		this.y = y;
	}


	/*--------------------------------------------------------------------------
		@method
	--------------------------------------------------------------------------*/
  /**
   * Vector2のcloneを生成します
   * @method clone
   * @return {vector2}
   */
	clone() {
		return new Vector2(this.x, this.y);
	}


  /**
   * 初期値にセット
   * @method identity
   * @return {vector2}
   */
	identity() {
		this.x = 0;
		this.y = 0;
		return this;
	}


  /**
   * ベクトル座標のセット
   * @method set
   * @param {number} x x座標値
   * @param {number} y y座標値
   * @return {vector2}
   */
	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}


  /**
   * ベクトル座標の加算
   * @method add
   * @param {vector2} vec2 Vector2
   * @return {vector2}
   */
	add(vec2) {
		this.x += vec2.x;
		this.y += vec2.y;
		return this;
	}


  /**
   * ベクトル座標の減算
   * @method sub
   * @param {vector2} vec2 Vector2
   * @return {vector2}
   */
	sub(vec2) {
		this.x -= vec2.x;
		this.y -= vec2.y;
		return this;
	}


  /**
   * ベクトル座標の乗算
   * @method mult
   * @param {number} num 乗数
   * @return {vector2}
   */
	mult(num) {
		this.x *= num;
		this.y *= num;
		return this;
	}


  /**
   * ベクトル座標の除算
   * @method div
   * @param {number} num 除数
   * @return {vector2}
   */
	div(num) {
		this.x /= num;
		this.y /= num;
		return this;
	}


  /**
   * ベクトルの大きさを設定
   * @method setMag
   * @param {number} mag ベクトルの大きさ
   * @return {vector2}
   */
	setMag(mag) {
		let vec2 = Vector2.radToVector2(this.angle(), mag);
		this.set(vec2.x, vec2.y);
		return this;
	}


  /**
   * ベクトル2乗を返す
   * @method magSq
   * @return {number} ベクトルの大きさ(長さ)の2乗を返す
   */
	magSq() {
		return this.x * this.x + this.y * this.y;
	}


  /**
   * ベクトルの大きさ(長さ)を返す
   * @method mag
   * @return {number} ベクトルの大きさ(長さ)を返す
   */
	mag() {
		return Math.sqrt(this.magSq(this.x, this.y));
	}


  /**
   * ベクトルのアングル(angle mode指定)取得
   * @method angle
   * @return {number} アングルを返す
   */
	angle() {
		return Math.atan2(this.y, this.x);
	}


  /**
   * ベクトルのアングル(angle mode指定)をセットする
   * @method setAngle
   * @param {number} angle radianかdegrees値(angle mode指定)
   * @return {vector2}
   */
	setAngle(angle) {
		let vec2 = Vector2.radToVector2(angle, this.mag());
		this.set(vec2.x, vec2, y);
		return this;
	}


  /**
   * ベクトルのアングル(ラジアン角)を加算
   * @method addAngle
   * @param {number} angle 加算するangle量
   * @return {vector2}
   */
	addAngle(angle) {
		this.setAngle(this.angle() + angle);
		return this;
	}


  /**
   * ベクトルのアングル(ラジアン角)を減算
   * @method subAngle
   * @param {number} angle 減算するangle量
   * @return {vector2}
   */
	subAngle(angle) {
		this.setAngle(this.angle() - angle);
		return this;
	}


  /**
   * ベクトルのアングル(ラジアン角)の乗算
   * @method multAngle
   * @param {number} num 乗数
   * @return {vector2}
   */
	multAngle(num) {
		this.setAngle(this.angle() * num);
		return this;
	}


  /**
   * ベクトルのアングル(ラジアン角)の除算
   * @method divAngle
   * @param {number} num 除数
   * @return {vector2}
   */
	divAngle(num) {
		this.setAngle(this.angle() / num);
		return this;
	}


  /**
   * 正規化
   * @method normalize
   * @return {vector2}
   */
	normalize() {
		let mag = this.mag();
		if (mag !== 0) {
			this.div(mag);
		}
		return this;
	}


  /**
   * 最大値の制限
   * @method limit
   * @param {number} max 最大値
   * @return {vector2}
   */
	limit(max) {
		if (max * max < this.magSq()) {
			this.normalize().mult(max);
		}
		return this;
	}


  /**
   * 線形補間
   * @method lerp
   * @param {vector2} vec2 Vector2
   * @param {number} amount amount量
   * @return {vector2}
   */
	lerp(vec2, amount) {
		this.x += (vec2.x - this.x) * (amount || 0);
		this.y += (vec2.y - this.y) * (amount || 0);
		return this;
	}


  /**
   * 内積
   * @method dot
   * @param {vector2} vec2 Vector2
   * @return {number} ベクトルの内積
   */
	dot(vec2) {
		return Vector2.dot(this, vec2);
	}


  /**
   * 外積
   * @method dot
   * @param {vector2} vec2 Vector2
   * @return {number} ベクトルの外積
   */
	cross(vec2) {
		return Vector2.cross(this, vec2);
	}


	/* static
	--------------------------------------------------------------------------*/
  /**
   * ラジアン角から2Dベクトルを作成
   * @static
   * @method radToVector2
   * @param {number} rad radian
   * @param {number} mag ベクトルの大きさ
   * @return {vector2}
   */
	static radToVector2(rad, mag) {
		return new Vector2(Math.cos(rad) * mag, Math.sin(rad) * mag);
	}


  /**
   * 角度から2Dベクトルを作成
   * @static
   * @method degToVector2
   * @param {number} deg degrees
   * @param {number} mag ベクトルの大きさ
   * @return {vector2}
   */
	static degToVector2(deg, mag) {
		return Vector2.radToVector2(deg * utils.DEG_TO_RAD, mag);
	}


  /**
   * ランダムな2Dベクトルを作成
   * @static
   * @method random
   * @param {number} mag ベクトルの大きさ
   * @return {vector2}
   */
	static random(mag) {
		return Vector2.radToVector2(utils.random(utils.TWO_PI), mag);
	}


  /**
   * 座標の同値判定
   * @static
   * @method equals
   * @param {vector2} v1 Vector2
   * @param {vector2} v2 Vector2
   * @return {boolean}
   */
	static equals(v1, v2) {
		return (v1.x === v2.x && v1.y === v2.y);
	}


  /**
   * 2つのベクトル座標間のユーグリッド距離
   * @static
   * @method distance
   * @param {vector2} v1 Vector2
   * @param {vector2} v2 Vector2
   * @return {number} 2つのベクトル間のユーグリッド距離
   */
	static distance(v1, v2) {
		let vec = new Vector2(v1.x, v1.y);
		return vec.sub(v2).mag();
	}


  /**
   * ベクトルの内積
   *
   * @static
   * @method dot
   * @param {vector2} v1 Vector2
   * @param {vector2} v2 Vector2
   * @return {number} ベクトルの内積
   */
	static dot(v1, v2) {
		return v1.x * v2.x + v1.y * v2.y;
	}


  /**
   * ベクトルの外積
   * @static
   * @method cross
   * @param {vector2} v1 Vector2
   * @param {vector2} v2 Vector2
   * @return {number} ベクトルの外積
   */
	static cross(v1, v2) {
		return v1.x * v2.y - v1.y * v2.x;
	}


  /**
   * 別のベクトルに対する線形補間
   * @static
   * @method lerp
   * @param {vector2} v1 Vector2
   * @param {vector2} v2 Vector2
   * @param {number} amount amount量
   * @return {vector2}
   */
	static lerp(v1, v2, amount) {
		let v = v1.clone();
		v.leap(v2, amount);
		return v;
	}


	/**
	 *
	 *
	 * @static
	 * @param {*} v1
	 * @param {*} v2
	 * @returns
	 * @memberof Vector2
	 */
	static add(v1, v2) {
		let vec = new Vector2(v1.x, v1.y);
		return vec.add(v2);
	}


	/**
	 *
	 *
	 * @static
	 * @param {*} v1
	 * @param {*} v2
	 * @returns
	 * @memberof Vector2
	 */
	static sub(v1, v2) {
		let vec = new Vector2(v1.x, v1.y);
		return vec.sub(v2);
	}


	/**
	 *
	 *
	 * @static
	 * @param {*} vec2
	 * @param {*} num
	 * @returns
	 * @memberof Vector2
	 */
	static mult(vec2, num) {
		let vec = new Vector2(vec2.x, vec2.y);
		return vec.mult(num);
	}


	/**
	 *
	 *
	 * @static
	 * @param {*} vec2
	 * @param {*} num
	 * @returns
	 * @memberof Vector2
	 */
	static div(vec2, num) {
		let vec = new Vector2(vec2.x, vec2.y);
		return vec.div(num);
	}


	/**
	 * ベクトル2乗を返す
	 *
	 * @static
	 * @param {vector2} vec2
	 * @returns
	 * @memberof Vector2
	 */
	static magSq(vec2) {
		return vec2.x * vec2.x + vec2.y * vec2.y;
	}


	/**
	 * ベクトルの大きさ(長さ)を返す
	 *
	 * @static
	 * @param {vector2} vec2
	 * @returns
	 * @memberof Vector2
	 */
	static mag(vec2) {
		let vec = new Vector2(vec2.x, vec2.y);
		return vec.mag();
	}


	///==========================================================================
	/// Not Recommended
	///==========================================================================
  /**
   * ベクトル差分を返す
   * @method diff
   * @param {vector2} vec2 Vector2
   * @return {vector2}
   */
	diff(vec2) {
		return new Vector2(Math.abs(this.x - vec2.x), Math.abs(this.y - vec2.y));
	}

  /**
   * ベクトルの大きさ(長さ)の差分を返す
   * @method diffMag
   * @param {vector2} vec2 Vector2
   * @return {number}
   */
	diffMag(vec2) {
		return vec2.diff(this).mag();
	}

  /**
   * ベクトルのラジアン差分を返す
   * @method diffRad
   * @param {vector2} vec2 Vector2
   * @return {number}
   */
	diffRad(vec2) {
		let rad1 = Math.atan2(this.y, this.x),
			rad2 = Math.atan2(vec2.y, vec2.x);

		return Math.abs(rad2 - rad1);
	}

  /**
   * ベクトルの角度差分を返す
   * @method diffDeg
   * @param {vector2} vec2 Vector2
   * @param {number} y y座標値
   * @return {number}
   */
	diffDeg(vec2) {
		return this.diffRad(vec2) * utils.RAD_TO_DEG;
	}

  /**
   * 2つのベクトルの大きさの中間値を返す
   * @method betweenMag
   * @param {vector2} vec2 Vector2
   * @param {number} ratio 中間ポイント 0 < 1 初期値: 0.5
   * @return {number}
   */
	betweenMag(vec2, ratio) {
		let mag1 = this.mag(),
			mag2 = vec2.mag();

		ratio = utils.isNumber(ratio) ? ratio : 0.5;

		return mag1 + (mag2 - mag1) * ratio;
	}

  /**
   * 2つのベクトルの大きさの中間ラジアン値を返す
   * @method betweenRad
   * @param {vector2} vec2 Vector2
   * @param {number} ratio 中間ポイント 0 < 1 初期値: 0.5
   * @return {number}
   */
	betweenRad(vec2, ratio) {
		let rad1 = Math.atan2(this.y, this.x),
			rad2 = Math.atan2(vec2.y, vec2.x);

		ratio = utils.isNumber(ratio) ? ratio : 0.5;
		return rad1 + (rad2 - rad1) * ratio;
	}

  /**
   * 2つのベクトルの大きさの中間角を返す
   * @method betweenDeg
   * @param {vector2} vec2 Vector2
   * @param {number} ratio 中間ポイント 0 < 1 初期値: 0.5
   * @return {number}
   */
	betweenDeg(vec2, ratio) {
		return this.betweenRad(vec2, ratio) * utils.RAD_TO_DEG;
	}

  /**
   * 角度から2Dベクトルを作成
   * @static
   * @method degTo2d
   * @param {number} deg degrees
   * @param {number} mag ベクトルの大きさ
   * @return {vector2}
   */
	static degToVector2(deg, mag) {
		let vector = Vector2.radToVector2(utils.degToRad(deg), mag);
		vector.setAngleMode(true);
		return vector;
	}

  /**
   * ベクトルの角度を取得する
   * @static
   * @method angle
   * @param {vector2} vec2 Vector2
   * @return {number} アングルを返す
   */
	static angle(vec2) {
		return Math.atan2(vec2.y, vec2.x);
	}

  /**
   * ベクトル間の角度
   * @static
   * @method angleBetween
   * @param {vector2} v1 Vector2
   * @param {vector2} v2 Vector2
   * @return {number} ラジアン角
   */
	static angleBetween(v1, v2) {
		return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
	}
}
