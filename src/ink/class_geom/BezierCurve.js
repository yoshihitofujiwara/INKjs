/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


import * as utils from "../utils";
import Vector2 from "./Vector2";


/**
 * <h4>ベジェ曲線</h4>
 * @class BezierCurve
 * @param {Array} vertices パスポイントリスト
 * @param {Number} placing ベジェ曲線状の位置(0-1)
 */
export default class BezierCurve {
  /**
   * constructor
   */
  constructor(vertices, placing) {
    /**
     * <h4>パス座標リスト</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = vertices;

    /**
     * <h4>ベジェ曲線上の位置（正規化された値）</h4>
     * @properth placing
     * @type {Number}
     */
    this.placing = placing || 0;

    /**
     * position 現在のポジション
     * @type {Vector2}
     */
    this.position = new Vector2(vertices[0].x, vertices[0].y);

    /**
     * <h4>始点からのラジアン角</h4>
     * @property rad
     * @type {Number}
     */
    this.rad = null;

    // コンストラクタ呼び出し時、スタート座標をセット
    this.update(this.placing);
  }


  /**
   * <h4>2次ベジエ曲線</h4>
   * @static
   * @method quadratic
   * @param  {Vector2} startPoint 開始位置
   * @param  {Vector2} pathPoint  パスポイント
   * @param  {Vector2} endPoint   終了位置
   * @param  {Number} placing パスポイント（軌道）位置 (0 < 1)
   * @return {BezierCurve}
   */
  static quadratic(startPoint, pathPoint, endPoint, placing){
    return new BezierCurve([startPoint, pathPoint, endPoint], placing);
  }


  /**
   * <h4>3次ベジエ曲線</h4>
   * @static
   * @method cubicz
   * @param  {Vector2} startPoint 開始位置
   * @param  {Vector2} pathPoint1 パスポイント1
   * @param  {Vector2} pathPoint2 パスポイント2
   * @param  {Vector2} endPoint   終了位置
   * @param  {Number} placing パスポイント（軌道）位置 (0 < 1)
   * @return {BezierCurve}
   */
  static cubic(startPoint, pathPoint1, pathPoint2, endPoint, placing){
    return new BezierCurve([startPoint, pathPoint1, pathPoint2, endPoint], placing);
  }


  /**
   * <h4>インスタンスのcloneを生成</h4>
   * @method clone
   * @return {BezierCurve}
   */
  clone(){
    return new BezierCurve(this.vertices, this.placing);
  }


  /**
   * <h4>パスポイントのイテレーション処理</h4>
   * @method each
   * @param {Function} callback コールバック関数
   * @return {BezierCurve}
   */
  each (callback){
    utils.each(this.vertices, callback);
    return this;
  }


  /**
   * <h4>現在地を更新</h4>
   *
   * @method update
   * @param {Number} placing パスポイント（軌道）位置 (0 < 1)
   * @return {BezierCurve}
   */
  update(placing){
    // 正規化された値の範囲に収める
    this.placing = utils.constrain(placing, 0, 1);

    let
    vertices = this.vertices.concat(),
    position = this.position.clone(),
    max = vertices.length - 1,
    factNum = utils.factorial(max),
    p = 1 - this.placing,
    vec = new Vector2(),
    a, b, c, m;

    this.each((i, v) => {
      if(i === 0 || i === max){
        a = 1;
      } else {
        a = factNum / (utils.factorial(max-i) * utils.factorial(i));
      }
      b = Math.pow(p, (max - i));
      c = Math.pow((1-p), i);
      m = (a * b * c);
      vec.add({
        x: m * v.x,
        y: m * v.y
      });
    });

    // update position
    this.position.set(vec.x, vec.y);

    vec.sub(position);
    this.rad = Math.acos(vec.x / vec.mag()) || 0;

    return this;
  }
}
