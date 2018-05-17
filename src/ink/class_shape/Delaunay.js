/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


import * as utils from "../utils";
import Vector2 from "../class_geom/Vector2";
import Triangle from "./Triangle";


/**
 * <h4>Delaunay</h4>
 * @class Delaunay
 * @param {Number} width Delaunay領域の幅
 * @param {Number} height Delaunay領域の高さ
 * @param {Array} vertices 頂点リスト
 */
export default class Delaunay {
  /**
   * constructor
   */
  constructor(width, height, vertices) {
    /**
     * <h4>Delaunay領域の幅</h4>
     * @property width
     * @type {Number}
     */
    this.width = width || 0;

    /**
     * <h4>Delaunay領域の高さ</h4>
     * @property width
     * @type {Number}
     */
    this.height = height || 0;

    /**
     * <h4>頂点リスト</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = vertices || [];

    /**
     * <h4>生成したDelaunay</h4>
     * @property delaunays
     * @type {Array}
     */
    this.delaunays = [];

    /**
     * <h4>ランダムポイント生成時の再起処理の制限最大回数</h4>
     * @property maxAttempts
     * @type {Number}
     */
    this.maxAttempts = 1000;
  }


  /**
   * <h4>初期値にセット</h4>
   * @method identity
   * @return {Delaunay}
   */
  identity(){
    this.width = 0;
    this.height = 0;
    this.vertices = [];
    this.delaunays = [];
    return this;
  }


  /**
   * <h4>Delaunay領域の設定</h4>
   * @method setSize
   * @param {Number} width Delaunay領域の幅
   * @param {Number} height Delaunay領域の高さ
   * @return {Delaunay}
   */
  setSize(width, height){
    this.width = width || this.width;
    this.height = height || this.height;
    return this;
  }


  /**
   * <h4>頂点リストの設定</h4>
   * <p>設定されている頂点リストを削除して設定しなおします</p>
   * @method setVertices
   * @param {Array} vertices 頂点リスト
   * @return {Delaunay}
   */
  setVertices(vertices){
    this.vertices = vertices;
    return this;
  }


  /**
   * <h4>頂点削除</h4>
   * @method removeVertex
   * @param {Number} 削除するインデックス ※引数がない場合、全て削除
   * @param {Number} 削除数
   * @return {Delaunay}
   */
  removeVertex(index, len){
    if(utils.isNumber(index)){
      this.vertices.splice(index, (len || 1));
    } else {
      this.vertices = [];
    }
    return this;
  }


  /**
   * <h4>Delaunay削除</h4>
   * @method removeDelaunay
   * @return {Delaunay}
   */
  removeDelaunay(){
    this.delaunays = [];
    return this;
  }


  /**
   * <h4>ランダムな頂点を生成</h4>
   * <p>生成後自動的に、setVerticesで頂点リストを設定します</p>
   * @method randomVertices
   * @param {Number} interval 頂点同士の間隔
   * @return {Delaunay}
   */
  randomVertices(interval){
    let vertex, vertices, l,
    i = 0,
    j = 0;

    if(this.vertices.length){
      vertices = this.vertices.concat();
    } else {
      vertices = this.getOuterVertices(interval, true);
    }

    for(; i <= this.maxAttempts; i += 1){
      vertex = {
        x: utils.random(1, this.width - 1, true),
        y: utils.random(1, this.height - 1, true)
      };
      l = vertices.length;

      for(j = 0; j < l; j += 1){
        if(Vector2.distance(vertices[j], vertex) < interval){
          break;
        }
        if(j === l - 1){
          // i = 0;
          i = ~~(i / 2);
          vertices.push(new Vector2(vertex.x, vertex.y));
        }
      }
    }

    this.setVertices(vertices);

    return this;
  }


  /**
   * <h4>Delaunay領域の辺に、指定した間隔の頂点を生成して返す</h4>
   * @method getOuterVertices
   * @param {Number} interval 間隔
   * @param {Boolean} isRandom 間隔のランダム性を有効にするか
   * @return {Array} Delaunay領域の辺に、指定した間隔の頂点を生成して返す
   */
  getOuterVertices(interval, isRandom){
    let range,
    width  = this.width,
    height = this.height,
    max = interval < 5 ? 1 : 5,
    i = 0,
    vertex = 0,
    vertices = [
      new Vector2(0, 0),
      new Vector2(width, 0),
      new Vector2(width, height),
      new Vector2(0, height)
    ];

    for(;i < 2; i += 1){
      range = i === 0 ? width * 2 : height * 2;

      while(vertex < range){
        if(isRandom){
          vertex += interval + utils.random(0, max, true);
        } else {
          vertex += interval;
        }
        if(range < vertex){
          break;
        }

        if(i){ // y
          vertices.push(new Vector2({
            x: vertex < height ? 0 : width,
            y: vertex < height ? vertex : vertex - height
          }));

        } else { // x
          vertices.push(new Vector2({
            x: vertex < width ? vertex : vertex - width,
            y: vertex < width ? 0 : height
          }));
        }
      }

      vertex = 0;
    }

    return vertices;
  }


  /**
   * <h4>ドロネー生成</h4>
   * @method createDelaunay
   * @return {Delaunay}
   */
  createDelaunay(){
    // delaunays delaunayを適時追加: 初期[verticesをラップする三角形の追加]
    let wrapTriangle = this._createWrapTriangle(),
    delaunays = [wrapTriangle],
    triangles, points;

    // vertices
    utils.each(this.vertices, (vertex) => {
      triangles = this._checkTriangles(delaunays, vertex);
      points    = this._mergeSides(triangles.ng);
      delaunays = triangles.ok.concat(this._createTriangle(points, vertex));
    });

    // ラップした三角頂点を含む、三角削除
    delaunays = this._removeWrapTriangl(wrapTriangle, delaunays);
    this.delaunays = delaunays;
    return this;
  }


  /* Private
  -----------------------------------------------------------------*/
  /**
   * <h4>全ての三角形の外接円にvertexが含まれるか判定し、オブジェクトに振り分けて返す</h4>
   * @private
   * @method _checkTriangles
   * @param {Array} delaunays delaunayリスト
   * @param {Object} vertex 頂点
   * @return {Object} 三角外円にvertexが含まれるか判定したオブジェクト {ok:[], ng:[]}
   */
  _checkTriangles(delaunays, vertex){
    let circle,
    ng = [], // 新しいポイントを追加する三角
    ok = []; // 既存のままの三角

    utils.each(delaunays, (triangle) => {
      circle = Triangle.outerCircle.apply(null, triangle);

      if(circle.radius >= Vector2.distance(vertex, circle.position)){
        ng.push(triangle);
      } else {
        ok.push(triangle);
      }
    });

    return {
      ng: ng,
      ok: ok
    };
  }


  /**
   * <h4>各三角形を辺に分割して、重なる辺を取り除いた2点の頂点リストを返す</h4>
   * @private
   * @method _mergeSides
   * @param {Array} trianglesEdge 三角形頂点リスト
   * @return {Array} 重なる辺を取り除いた2点の頂点リストを返す
   */
  _mergeSides(trianglesEdge){
    let poins = [],
    sides = this._edgesToSides(trianglesEdge),
    total = sides.length;

    utils.each(sides, (s1, i) => {
      if(s1.skip || i === total-1){
        return true;

      } else {
        let found = false,
        j = i + 1;

        for(; j < total; j += 1){
          let s2 = sides[j];

          if(
            (s1[0].x == s2[0].x && s1[0].y == s2[0].y && s1[1].x == s2[1].x && s1[1].y == s2[1].y) ||
            (s1[0].x == s2[1].x && s1[0].y == s2[1].y && s1[1].x == s2[0].x && s1[1].y == s2[0].y)
          ) {
            // 重なる辺はスッキップしループを抜ける
            sides[j].skip = true;
            found = true;
            break;
          }
        }

        if(!found){
          poins.push([s1[0], s1[1]]);
        }
      }
    });

    // 最後の三角が評価されていないので追加
    if(!sides[total-1].skip){
      poins.push([sides[total-1][0], sides[total-1][1]]);
    }

    return poins;
  }


  /**
   * <h4>三角形の集合から辺の集合へ</h4>
   * @private
   * @method _edgesToSides
   * @param {Array} triangles 三角形集合の頂点を格納した配列
   * @return {Array} 辺の集合配列
   */
  _edgesToSides(triangles){
    let sides = [];
    utils.each(triangles, (edges) => {
      sides.push(
        [edges[0], edges[1]],
        [edges[1], edges[2]],
        [edges[2], edges[0]]
      );
    });
    return sides;
  }


  /**
   * <h4>各頂点と点vertexを結んで三角形に分割する</h4>
   * @private
   * @method _createTriangle
   * @param {Array} points 2点の座標を格納したリスト
   * @param {Object} vertex 追加する頂点
   * @return {Array} 生成した三角形リスト
   */
  _createTriangle(points, vertex) {
    let triangles = [];
    utils.each(points, (triangle) => {
      triangles.push([triangle[0], triangle[1], vertex]);
    });
    return triangles;
  }


  /**
   * <h4>ラップする三角形の頂点を含む三角形を削除して返す</h4>
   * @private
   * @method _removeWrapTriangl
   * @param {Array} triangle ラップしている大三角形
   * @param {Array} delaunays ドロネー
   * @return {Array} ラップする三角形の頂点を含む三角形を削除して返す
   */
  _removeWrapTriangl(triangle, delaunays){
    let placeholder = [];

    utils.each(delaunays, (vertices) => {
      if(triangle[0] != vertices[0] && triangle[0] != vertices[1] && triangle[0] != vertices[2] &&
         triangle[1] != vertices[0] && triangle[1] != vertices[1] && triangle[1] != vertices[2] &&
         triangle[2] != vertices[0] && triangle[2] != vertices[1] && triangle[2] != vertices[2])
      {
        placeholder.push(vertices);
      }
    });

    return placeholder;
  }


  /**
   * <h4>Delaunay領域をラップする三角形を生成</h4>
   * @private
   * @method _createWrapTriangle
   * @param {Number} width  Delaunay領域の幅 ※省略可
   * @param {Number} height Delaunay領域の高さ ※省略可
   * @return {Array} Delaunay領域をラップする三角形の座標を格納した配列
   */
  _createWrapTriangle(width, height){
    this.setSize(width, height);

    let margin = 10, // margin 10px
    w = this.width,
    hw = this.width / 2,
    h = this.height;

    return [
      new Vector2(w / 2, h * -1 - margin),
      new Vector2(w + hw + margin, h + margin),
      new Vector2(hw * -1 - margin, h + margin)
    ];
  }
}
