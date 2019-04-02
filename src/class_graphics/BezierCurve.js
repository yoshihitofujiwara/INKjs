/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


import * as utils from "../utils";
import Vector2 from "./Vector2";


/**
 * ベジェ曲線
 * @class BezierCurve
 * @param {array} vertices パスポイントリスト
 * @param {number} placing ベジェ曲線状の位置(0-1)
 */
export default class BezierCurve {
  /**
   * constructor
   */
	constructor(vertices, placing) {
    /**
     * パス座標リスト
     * @property vertices
     * @type {array}
     */
		this.vertices = vertices;

    /**
     * ベジェ曲線上の位置（正規化された値）
     * @properth placing
     * @type {number}
     */
		this.placing = placing || 0;

    /**
     * position 現在のポジション
     * @type {vector2}
     */
		this.position = new Vector2(vertices[0].x, vertices[0].y);

    /**
     * 始点からのラジアン角
     * @property rad
     * @type {number}
     */
		this.rad = null;

		// コンストラクタ呼び出し時、スタート座標をセット
		this.update(this.placing);
	}


	/*--------------------------------------------------------------------------
		@method
	--------------------------------------------------------------------------*/
  /**
   * インスタンスのcloneを生成
   * @method clone
   * @return {BezierCurve}
   */
	clone() {
		return new BezierCurve(this.vertices, this.placing);
	}


  /**
   * パスポイントのイテレーション処理
   * @method each
   * @param {function} callback コールバック関数
   * @return {BezierCurve}
   */
	each(callback) {
		utils.each(this.vertices, callback);
		return this;
	}


  /**
   * 現在地を更新
   *
   * @method update
   * @param {number} placing パスポイント（軌道）位置 (0 < 1)
   * @return {BezierCurve}
   */
	update(placing) {
		// 正規化された値の範囲に収める
		this.placing = utils.clamp(placing, 0, 1);

		let
			vertices = this.vertices.concat(),
			position = this.position.clone(),
			max = vertices.length - 1,
			factNum = utils.factorial(max),
			p = 1 - this.placing,
			vec = new Vector2(),
			a, b, c, m;

		this.each((i, v) => {
			if (i === 0 || i === max) {
				a = 1;
			} else {
				a = factNum / (utils.factorial(max - i) * utils.factorial(i));
			}
			b = Math.pow(p, (max - i));
			c = Math.pow((1 - p), i);
			m = (a * b * c);
			vec.add({
				x: m * v.x,
				y: m * v.y
			});
		});

		// update position
		this.position.set(vec.x, vec.y);

		vec.sub(position);
		this.rad = Math.acos(vec.x / vec.mag()) || 0;

		return this;
	}


	/* static
	--------------------------------------------------------------------------*/
  /**
   * 2次ベジエ曲線
   * @static
   * @method quadratic
   * @param  {vector2} startPoint 開始位置
   * @param  {vector2} pathPoint  パスポイント
   * @param  {vector2} endPoint   終了位置
   * @param  {number} placing パスポイント（軌道）位置 (0 < 1)
   * @return {BezierCurve}
   */
	static quadratic(startPoint, pathPoint, endPoint, placing) {
		return new BezierCurve([startPoint, pathPoint, endPoint], placing);
	}


  /**
   * 3次ベジエ曲線
   * @static
   * @method cubicz
   * @param  {vector2} startPoint 開始位置
   * @param  {vector2} pathPoint1 パスポイント1
   * @param  {vector2} pathPoint2 パスポイント2
   * @param  {vector2} endPoint   終了位置
   * @param  {number} placing パスポイント（軌道）位置 (0 < 1)
   * @return {BezierCurve}
   */
	static cubic(startPoint, pathPoint1, pathPoint2, endPoint, placing) {
		return new BezierCurve([startPoint, pathPoint1, pathPoint2, endPoint], placing);
	}
}
