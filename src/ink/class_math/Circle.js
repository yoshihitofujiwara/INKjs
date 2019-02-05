/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";
import Vector2 from "./Vector2";


// FIXME: class_graphicsに移動
// FIXME: PIXIに合わす
// see: https://github.com/pixijs/pixi.js/blob/dev/packages/graphics/src/utils/buildCircle.js
/**
 * Circle
 * @class Circle
 * @param  {number} x      x座標
 * @param  {number} y      y座標
 * @param  {number} radius 半径
 */
export default class Circle {
  /**
   * constructor
   */
  constructor(x, y, radius) {
    /**
     * 座標
     * @property position
     * @type {Vector2}
     */
    this.position = new Vector2(x, y);

    /**
     * 半径
     * @property radius
     * @type {number}
     */
    this.radius = radius;
  }


  /**
   * クローンを生成
   * @method clone
   * @return {Circle}
   */
  clone(){
    return new Circle(this.position.x, this.position.y, this.radius);
  }


  /**
   * 衝突判定
   * @static
   * @method isCollision
   * @param  {Circle}  circle1 Circle1
   * @param  {Circle}  circle2 Circle2
   * @return {Boolean}
   */
  static isCollision(circle1, circle2){
    // let diff = Vector2.sub(circle2.position, circle1.position);
		let diff = circle1.position.clone().sub(circle2.position);
    return diff.mag() <= circle1.radius + circle2.radius;
  }


  /**
   * 座標を含んでいるか
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
   * ラジアンと半径から円弧を求める
   * @static
   * @method radToArc
   * @param {number} rad ラジアン
   * @param {number} radius 半径
   * @return {number} 円弧
   */
  static radToArc(rad, radius){
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
  static betweenArc(radius, startAngle, endAngle, tick){
    let angle = (endAngle - startAngle) * tick;
    return new Vector2({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    });
  }


  /**
   * 円周を分割して座標を配列格納して返します
   * @static
   * @method circumference
   * @param  {number}   radius   半径
   * @param  {number}   split    分割数
   * @param  {number}   angle    スタートアングル
   * @param  {Boolean}   isCCW   反時計回り
   * @param  {function} callback コールバック関数
   * @return {array}
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
