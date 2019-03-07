/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";
import Vector2 from "./Vector2";
import Point2 from "./Point2";


/**
 * Rectangle
 *
 * @export
 * @class Rectangle
 * @extends {Point2}
 */
export default class Rectangle extends Point2 {
	/**
	 *Creates an instance of Rectangle.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} [width=0]
	 * @param {number} [height=0]
	 * @memberof Rectangle
	 */
	constructor(x, y, width = 0, height = 0) {
		super(x, y);

		this.width = width;
		this.height = height;
	}


	/*--------------------------------------------------------------------------
		@method
	--------------------------------------------------------------------------*/
	/**
	 * clone
	 *
	 * @returns {rectangle}
	 * @memberof Rectangle
	 */
	clone() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}


	/* static
	--------------------------------------------------------------------------*/
  /**
   * 衝突判定
   * @static
   * @method isCollision
   * @param  {rectangle}  rect1 矩形1
   * @param  {rectangle}  rect2 矩形2
   * @return {boolean}
   */
	static isCollision(rect1, rect2) {
		let hasX = utils.isIntersect(rect1.x, rect1.x + rect1.width, rect2.x, rect2.x + rect2.width),
			hasY = utils.isIntersect(rect1.y, rect1.y + rect1.height, rect2.y, rect2.y + rect2.height);
		return hasX && hasY;
	}


  /**
   * 座標を含んでいるか
   * @method inPoint
   * @param  {rectangle}  rect 矩形
   * @param  {vector2} vec2 Vector2
   * @return {boolean}
   */
	static inPoint(rect, point) {
		let hasX = utils.isIntersect(rect.x, rect.x + rect.width, point.x, point.x),
			hasY = utils.isIntersect(rect.y, rect.y + rect.height, point.y, point.y);
		return hasX && hasY;
	}
}
