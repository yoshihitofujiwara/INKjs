/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";
import Line from "./Line";
import Point2 from "./Point2";
import Polygon from "./Polygon";
import Vector2 from "./Vector2";
import { Point } from "pixi.js";


/**
 * Circle
 * @class Circle
 * @param  {number} x      x座標
 * @param  {number} y      y座標
 * @param  {number} radius 半径
 */
export default class Circle extends Point2 {
  /**
   * constructor
  /**
	 *Creates an instance of Circle.
	 * @param {*} x
	 * @param {*} y
	 * @param {*} radius
	 * @memberof Circle
	 */
	constructor(x, y, radius) {
		super(x, y);

		// /**
		//  * 座標
		//  * @property position
		//  * @type {vector2}
		//  */
		// this.position = new Vector2(x, y);

		/**
		 * x
		 * @property x
		 * @type {number}
		 */
		/**
		 * y
		 * @property x
		 * @type {number}
		 */
    /**
     * 半径
     * @property radius
     * @type {number}
     */
		this.radius = radius;
	}


	/*--------------------------------------------------------------------------
		@method
	--------------------------------------------------------------------------*/
  /**
   * クローンを生成
   * @method clone
   * @return {Circle}
   */
	clone() {
		return new Circle(this.x, this.y, this.radius);
	}


	/* static
	--------------------------------------------------------------------------*/
  /**
   * ラジアンと半径から円弧を求める
   * @static
   * @method radToArc
   * @param {number} rad ラジアン
   * @param {number} radius 半径
   * @return {number} 円弧
   */
	static radToArc(rad, radius) {
		return (utils.TWO_PI * radius) * (rad / utils.TWO_PI);
	}


  /**
   * 円周の現在の位置を返す
   * @static
   * @method betweenArc
   * @param  {number} radius        半径
   * @param  {number} startAngle    開始アングル
   * @param  {number} endAngle      終了アングル
   * @param  {number} tick          座標ポイント比 0-1の値
   * @return {Vector}
   */
	static betweenArc(radius, startAngle, endAngle, tick) {
		let angle = (endAngle - startAngle) * tick;
		return new Point2(
			Math.cos(angle) * radius,
			Math.sin(angle) * radius
		);
	}


  /**
   * 円周を分割して座標を配列格納して返します
   * @static
   * @method circumference
   * @param  {number}   radius   半径
   * @param  {number}   split    分割数
   * @param  {number}   angle    スタートアングル
   * @param  {boolean}   isCCW   反時計回り
   * @param  {function} callback コールバック関数
   * @return {array}
   */
	static circumference(split, radius, angle, isCCW, callback) {
		callback = callback || function () { };

		let points = [],
			rad = utils.TWO_PI / split,
			flag = false,
			_angle = 0;

		angle = utils.isNumber(angle) ? angle : 0;

		if (isCCW) {
			rad *= -1;
		}

		utils.each(split, (i) => {
			_angle = i * rad + angle;
			points[i] = new Point2(
				Math.cos(_angle) * radius,
				Math.sin(_angle) * radius
			);

			if (!flag) {
				flag = callback(i, points[i]);
			}
			if (flag) {
				return false;
			}
		});

		return points;
	}


  /**
   * 衝突判定
   * @static
   * @method isCollision
   * @param  {Circle}  circle1 Circle1
   * @param  {Circle}  circle2 Circle2
   * @return {boolean}
   */
	static isCollision(circle1, circle2) {
		let vec = new Vector2(circle1.x, circle1.y);
		let diff = vec.sub(circle2);
		return diff.mag() <= circle1.radius + circle2.radius;
	}


  /**
   * 座標を含んでいるか
   * @static
   * @method inPoint
   * @param  {Circle}  circle Circle
   * @param  {vector2} position Vector2
   * @return {boolean}
   */
	static inPoint(circle, point) {
		let diff = Vector2.sub(circle, point);
		return diff.mag() < circle.radius;
	}


	/**
	 * inLine
	 * 円と線が交錯しているか
	 *
	 * @static
	 * @param {*} circle
	 * @param {*} line
	 * @returns
	 * @memberof Circle
	 */
	static inLine(circle, line) {
		let inLine = false;
		let a = new Vector2(line.points[0].x, line.points[0].y);
		let b = new Vector2(line.points[1].x, line.points[1].y);
		let p = new Vector2(circle.x, circle.y);

		// ベクトル生成
		let ab = b.clone().sub(a);
		let abDist = ab.mag();
		let ap = p.clone().sub(a);
		let apDist = ap.mag();
		let bp = p.clone().sub(b);
		let bpDist = bp.mag();
		let abNorm = ab.normalize();
		let lenAX = abNorm.dot(ap);

		//線分APとPの最短距離
		let shortestDistance;

		if (lenAX < 0) {
			//AXが負なら APが円の中心までの最短距離
			shortestDistance = apDist;

		} else if (lenAX > abDist) {
			//AXがAPよりも長い場合は、BPが円の中心までの最短距離
			shortestDistance = bpDist;

		} else {
			//PがAB上にあるので、PXが最短距離
			//単位ベクトルABとベクトルAPの外積で求める
			shortestDistance = Math.abs(abNorm.cross(ap));
		}

		if (shortestDistance < circle.radius) {
			// let v2 = new Vector2(a.x + (abNorm.x * lenAX), a.y + (abNorm.y * lenAX));
			//最短距離が円の半径よりも小さい場合は、当たり
			inLine = true;
		}

		return inLine;
	}


	/**
	 *
	 *
	 * @static
	 * @param {*} circle
	 * @param {*} rect
	 * @returns
	 * @memberof Circle
	 */
	static inRectangle(circle, rect) {
		let hasX = utils.isIntersect(
			rect.x - circle.radius, rect.x + rect.width + circle.radius,
			circle.x, circle.x
		);
		let hasY = utils.isIntersect(
			rect.y - circle.radius, rect.y + rect.height + circle.radius,
			circle.y, circle.y
		);

		// 1 大雑把な領域で判定
		// ・rを足した領域がポイントに含まれるか
		// ・含まれなければfalseで抜ける
		// 2. 入っていれば厳密に判定する
		if (hasX && hasY) {
			let a = new Circle(rect.x, rect.y, circle.radius);
			let b = new Circle(rect.x, rect.y + rect.height, circle.radius);
			let c = new Circle(rect.x + rect.width, rect.y, circle.radius);
			let d = new Circle(rect.x + rect.width, rect.y + rect.height, circle.radius);
			let hasX = utils.isIntersect(rect.x, rect.x + rect.width, circle.x, circle.x);
			let hasY = utils.isIntersect(rect.y, rect.y + rect.height, circle.y, circle.y);

			// a, b, c, d
			if (hasX || hasY ||
				Circle.inPoint(a, circle) ||
				Circle.inPoint(b, circle) ||
				Circle.inPoint(c, circle) ||
				Circle.inPoint(d, circle)
			) {
				return true;
			}
		}

		return false;
	}


	/**
	 *
	 *
	 * @static
	 * @param {*} circle
	 * @param {*} polygon
	 * @returns
	 * @memberof Circle
	 */
	static inPolygon(circle, polygon) {
		let inPolygon = false;
		let point = new Point2();
		let line = new Line(point.clone(), point.clone());
		let l = polygon.points.length;

		for (let i = 0; i < l; i += 1) {
			let _line = line.clone().setPoint({
				x: polygon.points[i % l].x,
				y: polygon.points[i % l].y
			}, {
					x: polygon.points[(i + 1) % l].x,
					y: polygon.points[(i + 1) % l].y
				});

			inPolygon = inLine(circle, _line);

			if (inPolygon) {
				return inPolygon;
			}
		}

		// 頂点を含むか
		if (!inPolygon) {
			inPolygon = Polygon.inPoint(polygon, circle);
		}

		return inPolygon;
	}
}
