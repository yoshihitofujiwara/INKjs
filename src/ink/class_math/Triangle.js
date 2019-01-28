/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


import * as utils from '../utils';
import Vector2 from './Vector2';
import Circle from './Circle';


/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * <h4>Triangle</h4>
 *
 * @class Triangle
 * @constructor
 * @param {Vector2} vertexA 頂点A
 * @param {Vector2} vertexB 頂点B
 * @param {Vector2} vertexC 頂点C
 */
export default class Triangle {
  /**
   * constructor
   */
  constructor(vertexA, vertexB, vertexC) {
    /**
     * <h4>頂点データ</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = [vertexA, vertexB, vertexC];
  }


  /**
   * <h4>クローンを生成</h4>
   *
   * @method clone
   * @return {Triangle}
   */
  clone(){
    return new Triangle(this.vertices[0], this.vertices[1], this.vertices[2]);
  }


  /**
   * <h4>3点の座標から外接円を求めます</h4>
   *
   * @static
   * @method outerCircle
   * @param {Vector2} vertexA 頂点A
   * @param {Vector2} vertexB 頂点B
   * @param {Vector2} vertexC 頂点C
   * @return {Circle} 中心座標、半径の円データ
   */
  static outerCircle(vertexA, vertexB, vertexC){
    let
    aX = vertexA.x,
    bX = vertexB.x,
    cX = vertexC.x,
    aY = vertexA.y,
    bY = vertexB.y,
    cY = vertexC.y,
    aX2 = aX * aX,
    bX2 = bX * bX,
    cX2 = cX * cX,
    aY2 = aY * aY,
    bY2 = bY * bY,
    cY2 = cY * cY,
    p = ((bX - aX) * (cY - aY) - (bY - aY) * (cX - aX)) * 2,
    x = ((cY - aY) * (bX2 - aX2 + bY2 - aY2) + (aY - bY) * (cX2 - aX2 + cY2 - aY2)) / p,
    y = ((aX - cX) * (bX2 - aX2 + bY2 - aY2) + (bX - aX) * (cX2 - aX2 + cY2 - aY2)) / p,
    vector = {x: x, y: y},
    radius = Vector2.dist({x: x, y: y}, vertexA);

    return new Circle(x, y, radius);
  }


  /**
   * <h4>3点の座標から内接円を求めます</h4>
   *
   * @static
   * @method innerCircle
   * @param {Vector2} vertexA 頂点A
   * @param {Vector2} vertexB 頂点B
   * @param {Vector2} vertexC 頂点C
   * @return {Circle} 中心座標、半径の円データ
   */
  static innerCircle(vertexA, vertexB, vertexC){
    let sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
    sA = sides[0],
    sB = sides[1],
    sC = sides[2],
    area = (sA + sB + sC) / 2,
    vector = {
      x: (sA * a.x + sB * b.x + sC * c.x) / (sA + sB + sC),
      y: (sA * a.y + sB * b.y + sC * c.y) / (sA + sB + sC)
    },
    radius = Math.sqrt(area * (area - sA) * (area - sB) * (area - sC)) / area;

    return new Circle(vector.x, vector.y, radius);
  }


  /**
   * <h4>3点の座標から傍接円を求めます</h4>
   *
   * @static
   * @method excenter
   * @param {Vector2} vertexA 頂点A
   * @param {Vector2} vertexB 頂点B
   * @param {Vector2} vertexC 頂点C
   * @return {Array} 傍接円a,b,cの座標、半径の円データ
   */
  static excenter(vertexA, vertexB, vertexC){
    let sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
    sA = sides[0],
    sB = sides[1],
    sC = sides[2],
    area = (sA + sB + sC) / 2,
    s2 = Math.sqrt(area * (area - sA) * (area - sB) * (area - sC)) * 2;

    let vA = {
      x: (-sA * a.x + sB * b.x + sC * c.x) / (-sA + sB + sC),
      y: (-sA * a.y + sB * b.y + sC * c.y) / (-sA + sB + sC)
    },
    rA = s2 / (-sA + sB + sC),
    cA = new Circle(vA.x, vA.y, rA);

    let vB = {
      x: (sA * a.x + -sB * b.x + sC * c.x) / (sA- b + sC),
      y: (sA * a.y + -sB * b.y + sC * c.y) / (sA- b + sC)
    },
    rB = s2 / (sA - sB + sC),
    cB = new Circle(vB.x, vB.y, rB);

    let vC = {
      x: (sA * a.x + sB * b.x + -sC * c.x) / (sA + sB - c),
      y: (sA * a.y + sB * b.y + -sC * c.y) / (sA + sB - c)
    },
    rC = s2 / (sA + sB - sC),
    cC = new Circle(vC.x, vC.y, rC);

    return [cA, cB, cC];
  }


  /**
   * <h4>3点の座標から垂心座標を求めます</h4>
   *
   * @static
   * @method orthocenter
   * @param {Vector2} vertexA 頂点A
   * @param {Vector2} vertexB 頂点B
   * @param {Vector2} vertexC 頂点C
   * @return {Vector2} 垂心座標
   */
  static orthocenter(vertexA, vertexB, vertexC){
    let sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
    sA = sides[0],
    sB = sides[1],
    sC = sides[2];

    // SohToaCah
    let cosA = (-sA * sA + sB * sB + sC * sC) / (2 * sB * sC),
    cosB = (sA * sA - sB * sB + sC * sC) / (2 * sA * sC),
    cosC = (sA * sA + sB * sB - sC * sC) / (2 * sA * b),
    sinA = Math.sqrt((1 - cosA * cosA)),
    sinB = Math.sqrt((1 - cosB * cosB)),
    sinC = Math.sqrt((1 - cosC * cosC)),
    tanA = sinA / cosA || 0,
    tanB = sinB / cosB || 0,
    tanC = sinC / cosC || 0;

    return new Vector2({
      x: (a.x * tanA + b.x * tanB + c.x * tanC) / (tanA + tanB + tanC),
      y: (a.y * tanA + b.y * tanB + c.y * tanC) / (tanA + tanB + tanC)
    });
  }


  /**
   * <h4>3点の座標から重心座標を求めます</h4>
   * @static
   * @method centerGravity
   * @param {Vector2} vertexA 頂点A
   * @param {Vector2} vertexB 頂点B
   * @param {Vector2} vertexC 頂点C
   * @return {Vector2} 重心座標
   */
  static centerGravity(vertexA, vertexB, vertexC){
    return new Vector2({
      x: (vertexA.x + vertexB.x + vertexC.x) / 3,
      y: (vertexA.y + vertexB.y + vertexC.y) / 3
    });
  }


  /**
   * <h4>三点の座標から辺の長さを返す</h4>
   * @static
   * @method offsetsToSides
   * @param {Vector2} vertexA 頂点A
   * @param {Vector2} vertexB 頂点B
   * @param {Vector2} vertexC 頂点C
   * @return {Array} a, b, cの辺の長さ
   */
  static verticesToSides(vertexA, vertexB, vertexC){
    return [
      Vector2.dist(vertexB, vertexC),
      Vector2.dist(vertexC, vertexA),
      Vector2.dist(vertexA, vertexB)
    ];
  }


  /**
   * <h4>頂点から角度を求める</h4>
   * @static
   * @method verticesToAngles
   * @param {Vector2} vertexA 頂点A
   * @param {Vector2} vertexB 頂点B
   * @param {Vector2} vertexC 頂点C
   * @return {Array} a, b, c各辺の角度
   */
  static verticesToAngles (vertexA, vertexB, vertexC){
    let sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
    a = sides[0],
    b = sides[1],
    c = sides[2],
    cosA = (a * a + c * c - b * b) / (2 * a * c),
    cosB = (b * b + a * a - c * c) / (2 * b * a),
    cosC = (c * c + b * b - a * a) / (2 * c * b);

    // Radian: [a, b, c]
    return [Math.acos(cosA), Math.acos(cosB), Math.acos(cosC)];
  }


  /**
   * <h4>三角形内に座標を含んでいるか</h4>
   * @static
   * @method inside
   * @param  {Triangle} triangle triangle
   * @param  {Vector2} vec2 Vector2
   * @return {Boolean}
   */
  static inside(triangle, vec2){
    let flag = true;

    utils.each(triangle.vertices, (v, i) => {
      let n = (i + 1) % 3;
			if (Triangle.ccw(vec2, v, triangle.vertices[n]) < 0){
        flag = false;
        return false;
      }
    });

    return flag;
  }


  /**
   * <h4>反時計回り(Counter ClockWise)か調べ数値を返す</h4>
   * <p>反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す</p>
   *
   * @static
   * @method ccw
   * @param {Vec2} v1 Vec2
   * @param {Vec2} v2 Vec2
   * @param {Vec2} v3 Vec2
   * @return {Number} 反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す
   */
	static ccw(v1, v2, v3) {
		let vector = new Vector2(v2.x - v1.x, v2.y - v1.y);
		return vector.cross(v3.x - v2.x, v3.y - v2.y);
	}
}