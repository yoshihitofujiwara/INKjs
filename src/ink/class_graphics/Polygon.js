/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";
import Vector2 from "./Vector2";
import Point2 from "./Point2";


/**
 * Polygon
 *
 * @export
 * @class Polygon
 * @extends {Point2}
 */
export default class Polygon {
	/**
	 *Creates an instance of Polygon.
	 * @param {*} [points=[]]
	 * @memberof Polygon
	 */
	constructor(points) {
		this.points = points;
	}


	/*--------------------------------------------------------------------------
		@method
	--------------------------------------------------------------------------*/
	/**
	 * clone
	 *
	 * @returns {rectangle}
	 * @memberof Polygon
	 */
	clone() {
		return new Polygon(this.points);
	}


	// 座標を含むか
	// contains(x, y){}


	/* static
	--------------------------------------------------------------------------*/

	/**
	 * NOTE: 線分の工作判定はいるのか？
	 *
	 * @static
	 * @param {*} polygonA
	 * @param {*} polygonB
	 * @returns
	 * @memberof Polygon
	 */
	static isCollision(polygonA, polygonB){
		let isCollision = false;

		// polygonA
		for (let i = 0; i < polygonA.points.length; i += 1) {
			let point = new Point2(polygonA.points[i].x, polygonA.points[i].y);
			isCollision = Polygon.inPoint(polygonB, point);

			if (isCollision) {
				return isCollision;
			}
		}

		// polygonB
		for (let j = 0; j < polygonB.points.length; j += 1) {
			let point = new Point2(polygonB.points[j].x,	polygonB.points[j].y);
			isCollision = Polygon.inPoint(polygonA, point);

			if (isCollision) {
				return isCollision;
			}
		}

		return isCollision;
	}


	/**
	 *
	 *
	 * @static
	 * @param {*} polygon
	 * @param {*} point
	 * @returns
	 * @memberof Polygon
	 */
	static inPoint(polygon, point){
		let deg = 0;
		let points = polygon.points;
		let l = points.length;

		for (let i = 0; i < l; i++) {
			let p2x = points[i % l].x;
			let p2y = points[i % l].y;
			let p3x = points[(i + 1) % l].x;
			let p3y = points[(i + 1) % l].y;
			let ax = p2x - point.x;
			let ay = p2y - point.y;
			let bx = p3x - point.x;
			let by = p3y - point.y;
			let cos = (ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by));
			deg += Math.acos(cos) * RAD_TO_DEG;
		}

		if (Math.round(deg) == 360) {
			return true;
		} else {
			return false;
		}
	}
}
