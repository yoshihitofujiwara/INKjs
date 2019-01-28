/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";
import Vector2 from "./Vector2";
import Size from "./Size";


/**
 * <h4>Rect</h4>
 * @class Rect
 * @param {Number} x x座標
 * @param {Number} y y座標
 * @param {Number} width 幅
 * @param {Number} height 高さ
 */
export default class Rect {
  /**
   * constructor
   */
  constructor(x, y, width, height){
    /**
     * <h4>座標</h4>
     * @property position
     * @type {Vector2}
     */
    this.position = new Vector2(x, y);

    /**
     * <h4>サイズ</h4>
     * @property size
     * @type {Size}
     */
    this.size = new Size(width, height);
  }


  /**
   * <h4>衝突判定</h4>
   * @static
   * @method isCollision
   * @param  {Rect}  rect1 矩形1
   * @param  {Rect}  rect2 矩形2
   * @return {Boolean}
   */
  static isCollision(rect1, rect2){
    let p1 = rect1.position,
    s1 = rect1.size,
    p2 = rect2.position,
    s2 = rect2.size,
    hasX = utils.isIntersect(p1.x, p1.x + s1.width, p2.x, p2.x + s2.width),
    hasY = utils.isIntersect(p1.y, p1.y + s1.height, p2.y, p2.y + s2.height);

    return hasX && hasY;
  }


  /**
   * <h4>座標を含んでいるか</h4>
   * @method inside
   * @param  {Rect}  rect 矩形
   * @param  {Vector2} vec2 Vector2
   * @return {Boolean}
   */
  static inside(rect, vec2){
    let p = rect.position,
    s = rect.size,
    hasX = utils.isIntersect(p.x, p.x + s.width, vec2.x, vec2.x),
    hasY = utils.isIntersect(p.y, p.y + s.height, vec2.y, vec2.y);

    return hasX && hasY;
  }
}
