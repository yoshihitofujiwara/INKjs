/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";
import Vector2 from "../class_geom/Vector2";
import Line from "../class_geom/Line";


/**
 * <h4>Circle</h4>
 * @class Circle
 * @param  {Number} x      x座標
 * @param  {Number} y      y座標
 * @param  {Number} radius 半径
 */
export default class Circle {
  /**
   * constructor
   */
  constructor(x, y, radius) {
    /**
     * <h4>座標</h4>
     * @property position
     * @type {Vector2}
     */
    this.position = new Vector2(x, y);

    /**
     * <h4>半径</h4>
     * @property radius
     * @type {Number}
     */
    this.radius = radius;
  }


  /**
   * <h4>クローンを生成</h4>
   * @method clone
   * @return {Circle}
   */
  clone(){
    return new Circle(this.position.x, this.position.y, this.radius);
  }


  /**
   * <h4>衝突判定</h4>
   * @static
   * @method isCollision
   * @param  {Circle}  circle1 Circle1
   * @param  {Circle}  circle2 Circle2
   * @return {Boolean}
   */
  static isCollision(circle1, circle2){
    let diff = Vector2.sub(circle2.position, circle1.position);
    return diff.mag() <= circle1.radius + circle2.radius;
  }


  /**
   * <h4>座標を含んでいるか</h4>
   * @static
   * @method inside
   * @param  {Circle}  circle Circle
   * @param  {Vector2} position Vector2
   * @return {Boolean}
   */
  static inside(circle, position){
    let diff = Vector2.sub(circle.position, position);
    return diff.mag() < circle.radius;
  }


  /**
   * <h4>ラジアンと半径から円弧を求める</h4>
   * @static
   * @method radToArc
   * @param {Number} rad ラジアン
   * @param {Number} radius 半径
   * @return {Number} 円弧
   */
  static radToArc(rad, radius){
    return (utils.TWO_PI * radius) * (rad / utils.TWO_PI);
  }


  /**
   * <h4>円周の現在の位置を返す</h4>
   * @static
   * @method betweenArc
   * @param  {Number} radius        半径
   * @param  {Number} startAngle    開始アングル
   * @param  {Number} endAngle      終了アングル
   * @param  {Number} tick          座標ポイント比 0-1の値
   * @return {Vector}
   */
  static betweenArc(radius, startAngle, endAngle, tick){
    let angle = (endAngle - startAngle) * tick;
    return new Vector2({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    });
  }


  /**
   * <h4>円周を分割して座標を配列格納して返します</h4>
   * @static
   * @method circumference
   * @param  {Number}   radius   半径
   * @param  {Number}   split    分割数
   * @param  {Number}   angle    スタートアングル
   * @param  {Boolean}   isCCW   反時計回り
   * @param  {Function} callback コールバック関数
   * @return {Array}
   */
  static circumference(split, radius, angle, isCCW, callback){
    callback = callback || function(){};

    let vertices = [],
    rad = utils.TWO_PI / split,
    flag = false,
    _angle = 0;

    angle = utils.isNumber(angle) ? angle : 0;

    if(isCCW){
      rad *= -1;
    }

    utils.each(split, (i) => {
      _angle = i * rad + angle;
      vertices[i] = new Vector2({
        x: Math.cos(_angle) * radius,
        y: Math.sin(_angle) * radius
      });

      if(!flag){
        flag = callback(i, vertices[i]);
      }
      if(flag){
        return false;
      }
    });

    return vertices;
  }
}
