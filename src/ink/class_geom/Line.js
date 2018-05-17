/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


// import * as utils from "../utils";
import Vector2 from "./Vector2";


/**
 * <h4>Line</h4>
 * @class Line
 * @param {Vector2} vec1 開始座標オブジェクト
 * @param {Vector2} vec2 終了座標オブジェクト
 */
export default class Line {
  /**
   * constructor
   */
  constructor(vec1, vec2) {
    /**
     * <h4>頂点リスト</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = [vec1, vec2];
  }


 /**
   * <h4>二つの直線(延長線含む)の交差点を返します</h4>
   * <p>交差点がない場合、nullを返します</p>
   * @static
   * @method intersection
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @return {Vector2} 交差点座標オブジェクト
   */
  static intersection(line1, line2){
    let p1 = line1.vertices[0],
    p2 = line1.vertices[1],
    p3 = line2.vertices[0],
    p4 = line2.vertices[1];

    let ax = p2.x - p1.x,
    ay = p2.y - p1.y,
    bx = p4.x - p3.x,
    by = p4.y - p3.y,
    cx = p3.x - p1.x,
    cy = p3.y - p1.y;

    let cross1 = bx * cy - by * cx,
    cross2 = bx * ay - by * ax;

    if(!cross2){
      return null;
    }

    let t = cross1 / cross2,
    x = p1.x + ax * t,
    y = p1.y + ay * t;

    return new Vector2(x, y);
  }


  /**
   * <h4>直線の交点を返します</h4>
   * @static
   * @method cross
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @return {Vector2} 交差点座標オブジェクト
   */
  static cross(line1, line2){
    if(Line.isIntersection(line1, line2)){
      return Line.intersection(line1, line2);
    } else {
      return null;
    }
  }


  /**
   * <h4>二つの直線が交わるかチェックします(延長線は含まない)</h4>
   * @static
   * @method intersection
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @return {Boolean}
   */
  static isIntersection(line1, line2){
    let p = Line.intersection(line1, line2);

    if(p === null){
      return false;
    }

    let p1 = line1.vertices[0],
    p2 = line1.vertices[1],
    p3 = line2.vertices[0],
    p4 = line2.vertices[1],
    a = (p.x - p1.x) * (p.x - p2.x) + (p.y - p1.y) * (p.y - p2.y) <= 0,
    b = (p.x - p3.x) * (p.x - p4.x) + (p.y - p3.y) * (p.y - p4.y) <= 0;

    return a && b;
  }


  /**
   * <h4>二つの直線が等しいかチェックします</h4>
   * @static
   * @method equals
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @param {Boolean} isBoth もしくはstart、endが逆方向でマッチした場合も判定するか
   * @return {Boolean}
   */
  static equals(line1, line2, isBoth){
    let flag = (Vector2.equals(line1.vertices[0], line2.vertices[0]) &&
                Vector2.equals(line1.vertices[1], line2.vertices[1]));

    if(isBoth && !flag){
      flag = (Vector2.equals(line1.vertices[1], line2.vertices[0]) &&
              Vector2.equals(line1.vertices[0], line2.vertices[1]));
    }

    return flag;
  }


  /**
   * <h4>反時計回り(Counter ClockWise)か調べ数値を返す</h4>
   * <p>反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す</p>
   * @static
   * @method ccw
   * @param {Vector2} v1 Vector2
   * @param {Vector2} v2 Vector2
   * @param {Vector2} v3 Vector2
   * @return {Number} 反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す
   */
  static ccw(v1, v2, v3){
    let vector = new Vector2(v2.x - v1.x, v2.y - v1.y);
    return vector.cross(v3.x - v2.x, v3.y - v2.y);
  }


  /**
   * <h4>Lineのクローンを生成します</h4>
   * @method clone
   * @return {Line}
   */
  clone(){
    return new Line(this.vertices[0], this.vertices[1]);
  }


  /**
   * <h4>Lineの始点・終点をセットします</h4>
   * @method setVertices
   * @param {Vector2} v1 開始座標オブジェクト
   * @param {Vector2} v2 終了座標オブジェクト
   */
  setVertices(v1, v2){
    this.vertices[0] = v1 || this.vertices[0];
    this.vertices[1] = v2 || this.vertices[1];
    return this;
  }


  /**
   * <h4>スタートからエンドポイントの距離(大きさ)</h4>
   * @method mag
   * @return {Number}
   */
  mag(){
    return this.vertices[0].clone().sub(this.vertices[1]).mag();
  }


  /**
   * <h4>Lineのアングル(ラジアン角)を返します</h4>
   * @method angle
   * @return {Number}
   */
  angle(){
    let v = new Vector2(this.vertices[0].x, this.vertices[0].y);
    v.add({
      x: this.vertices[1].x - this.vertices[0].x,
      y: this.vertices[1].y - this.vertices[0].y
    });
    return v.angle();
  }
}
