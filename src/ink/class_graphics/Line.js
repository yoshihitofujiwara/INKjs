/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


import Vector2 from "./Vector2";


// FIXME: class_graphicsに移動

/**
 * Line
 * @class Line
 * @param {vector2} vec1 開始座標オブジェクト
 * @param {vector2} vec2 終了座標オブジェクト
 */
export default class Line {
  /**
   * constructor
   */
	constructor(point1, point2) {
    /**
     * 頂点リスト
     * @property vertices
     * @type {array}
     */
		this.points = [point1, point2];
	}


	/*--------------------------------------------------------------------------
		@method
	--------------------------------------------------------------------------*/
  /**
   * Lineのクローンを生成します
   * @method clone
   * @return {Line}
   */
	clone() {
		return new Line(this.points[0], this.points[1]);
	}


  /**
   * Lineの始点・終点をセットします
   * @method setPoint
   * @param {vector2} v1 開始座標オブジェクト
   * @param {vector2} v2 終了座標オブジェクト
   */
	setPoint(point1, point2) {
		this.points[0] = point1 || this.points[0];
		this.points[1] = point2 || this.points[1];
		return this;
	}


  /**
   * スタートからエンドポイントの距離(大きさ)
   * @method mag
   * @return {number}
   */
	mag() {
		let vec = new Vector2(this.points[0].x, this.points[0].y);
		return vec.sub(this.points[1]).mag();
	}


  /**
   * Lineのアングル(ラジアン角)を返します
   * @method angle
   * @return {number}
   */
	angle() {
		let vec = new Vector2(this.points[0].x, this.points[0].y);
		vec.add({
			x: this.points[1].x - this.points[0].x,
			y: this.points[1].y - this.points[0].y
		});
		return vec.angle();
	}


	/* static
	--------------------------------------------------------------------------*/
	/**
		* 二つの直線(延長線含む)の交差点を返します
		* 交差点がない場合、nullを返します
		* @static
		* @method intersection
		* @param {Line} line1 Lineインスタンス1
		* @param {Line} line2 Lineインスタンス2
		* @return {vector2} 交差点座標オブジェクト
		*/
	static intersection(line1, line2) {
		let p1 = line1.points[0],
			p2 = line1.points[1],
			p3 = line2.points[0],
			p4 = line2.points[1];

		let ax = p2.x - p1.x,
			ay = p2.y - p1.y,
			bx = p4.x - p3.x,
			by = p4.y - p3.y,
			cx = p3.x - p1.x,
			cy = p3.y - p1.y;

		let cross1 = bx * cy - by * cx,
			cross2 = bx * ay - by * ax;

		if (!cross2) {
			return null;
		}

		let t = cross1 / cross2,
			x = p1.x + ax * t,
			y = p1.y + ay * t;

		return new Vector2(x, y);
	}


  /**
   * 直線の交点を返します
   * @static
   * @method cross
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @return {vector2} 交差点座標オブジェクト
   */
	static cross(line1, line2) {
		if (Line.isIntersection(line1, line2)) {
			return Line.intersection(line1, line2);
		} else {
			return null;
		}
	}


  /**
   * 二つの直線が交わるかチェックします(延長線は含まない)
   * @static
   * @method intersection
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @return {boolean}
   */
	static isIntersection(line1, line2) {
		let p = Line.intersection(line1, line2);

		if (p === null) {
			return false;
		}

		let p1 = line1.points[0],
			p2 = line1.points[1],
			p3 = line2.points[0],
			p4 = line2.points[1],
			a = (p.x - p1.x) * (p.x - p2.x) + (p.y - p1.y) * (p.y - p2.y) <= 0,
			b = (p.x - p3.x) * (p.x - p4.x) + (p.y - p3.y) * (p.y - p4.y) <= 0;

		return a && b;
	}


  /**
   * 二つの直線が等しいかチェックします
   * @static
   * @method equals
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @param {boolean} isBoth もしくはstart、endが逆方向でマッチした場合も判定するか
   * @return {boolean}
   */
	static equals(line1, line2, isBoth) {
		let flag = (Vector2.equals(line1.points[0], line2.points[0]) &&
			Vector2.equals(line1.points[1], line2.points[1]));

		if (isBoth && !flag) {
			flag = (Vector2.equals(line1.points[1], line2.points[0]) &&
				Vector2.equals(line1.points[0], line2.points[1]));
		}

		return flag;
	}
}
