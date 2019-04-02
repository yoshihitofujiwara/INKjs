/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";


/**
 * @class Point2 - 2Dベクトル・座標を管理します
 * @param {number|Object} x x座標値 default 0
 * @param {number} y y座標値 default 0
 */
export default class Point2 {
  /**
   * constructor
   */
	constructor(x = 0, y = 0) {
		if (utils.isObject(x)) {
			x = x.x || 0;
			y = x.y || 0;
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
   * Point2のcloneを生成します
   * @method clone
   * @return {vector2}
   */
	clone() {
		return new Point2(this.x, this.y);
	}


	/**
	 *
	 *
	 * @param {*} x
	 * @param {*} y
	 * @memberof Point2
	 */
	set(x, y) {
		this.x = x;
		this.y = y;
	}


	/**
	 *
	 *
	 * @param {*} point
	 * @returns
	 * @memberof Point2
	 */
	equals(point) {
		return this.x === point.x && this.y === point.y;
	}
}
