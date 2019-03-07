/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


import * as utils from "../utils";
import Vector2 from "./Vector2";
import Triangle from "./Triangle";


/**
 * Delaunay
 * @class Delaunay
 * @param {number} width Delaunay領域の幅
 * @param {number} height Delaunay領域の高さ
 * @param {array} vertices 頂点リスト
 */
export default class Delaunay {
  /**
   * constructor
   */
	constructor(width, height, vertices) {
    /**
     * Delaunay領域の幅
     * @property width
     * @type {number}
     */
		this.width = width || 0;

    /**
     * Delaunay領域の高さ
     * @property width
     * @type {number}
     */
		this.height = height || 0;

    /**
     * 頂点リスト
     * @property vertices
     * @type {array}
     */
		this.vertices = vertices || [];

    /**
     * 生成したDelaunay
     * @property delaunays
     * @type {array}
     */
		this.delaunays = [];

    /**
     * ランダムポイント生成時の再起処理の制限最大回数
     * @property maxAttempts
     * @type {number}
     */
		this.maxAttempts = 1000;
	}


  /**
   * 初期値にセット
   * @method identity
   * @return {Delaunay}
   */
	identity() {
		this.width = 0;
		this.height = 0;
		this.vertices = [];
		this.delaunays = [];
		return this;
	}


  /**
   * Delaunay領域の設定
   * @method setSize
   * @param {number} width Delaunay領域の幅
   * @param {number} height Delaunay領域の高さ
   * @return {Delaunay}
   */
	setSize(width, height) {
		this.width = width || this.width;
		this.height = height || this.height;
		return this;
	}


  /**
   * 頂点リストの設定
   * 設定されている頂点リストを削除して設定しなおします
   * @method setVertices
   * @param {array} vertices 頂点リスト
   * @return {Delaunay}
   */
	setVertices(vertices) {
		this.vertices = vertices;
		return this;
	}


  /**
   * 頂点削除
   * @method removeVertex
   * @param {number} 削除するインデックス ※引数がない場合、全て削除
   * @param {number} 削除数
   * @return {Delaunay}
   */
	removeVertex(index, len) {
		if (utils.isNumber(index)) {
			this.vertices.splice(index, (len || 1));
		} else {
			this.vertices = [];
		}
		return this;
	}


  /**
   * Delaunay削除
   * @method removeDelaunay
   * @return {Delaunay}
   */
	removeDelaunay() {
		this.delaunays = [];
		return this;
	}


  /**
   * ランダムな頂点を生成
   * 生成後自動的に、setVerticesで頂点リストを設定します
   * @method randomVertices
   * @param {number} interval 頂点同士の間隔
   * @return {Delaunay}
   */
	randomVertices(interval) {
		let vertex, vertices, l,
			i = 0,
			j = 0;

		if (this.vertices.length) {
			vertices = this.vertices.concat();
		} else {
			vertices = this.getOuterVertices(interval, true);
		}

		for (; i <= this.maxAttempts; i += 1) {
			vertex = {
				x: utils.randomInt(1, this.width - 1),
				y: utils.randomInt(1, this.height - 1)
			};
			l = vertices.length;

			for (j = 0; j < l; j += 1) {
				if (Vector2.distance(vertices[j], vertex) < interval) {
					break;
				}
				if (j === l - 1) {
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
   * Delaunay領域の辺に、指定した間隔の頂点を生成して返す
   * @method getOuterVertices
   * @param {number} interval 間隔
   * @param {boolean} isRandom 間隔のランダム性を有効にするか
   * @return {array} Delaunay領域の辺に、指定した間隔の頂点を生成して返す
   */
	getOuterVertices(interval, isRandom) {
		let range,
			width = this.width,
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

		for (; i < 2; i += 1) {
			range = i === 0 ? width * 2 : height * 2;

			while (vertex < range) {
				if (isRandom) {
					vertex += interval + utils.randomInt(0, max);
				} else {
					vertex += interval;
				}
				if (range < vertex) {
					break;
				}

				if (i) { // y
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
   * ドロネー生成
   * @method createDelaunay
   * @return {Delaunay}
   */
	createDelaunay() {
		// delaunays delaunayを適時追加: 初期[verticesをラップする三角形の追加]
		let wrapTriangle = this._createWrapTriangle(),
			delaunays = [wrapTriangle],
			triangles, points;

		// vertices
		utils.each(this.vertices, (vertex) => {
			triangles = this._checkTriangles(delaunays, vertex);
			points = this._mergeSides(triangles.ng);
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
   * 全ての三角形の外接円にvertexが含まれるか判定し、オブジェクトに振り分けて返す
   * @private
   * @method _checkTriangles
   * @param {array} delaunays delaunayリスト
   * @param {object} vertex 頂点
   * @return {object} 三角外円にvertexが含まれるか判定したオブジェクト {ok:[], ng:[]}
   */
	_checkTriangles(delaunays, vertex) {
		let circle,
			ng = [], // 新しいポイントを追加する三角
			ok = []; // 既存のままの三角

		utils.each(delaunays, (triangle) => {
			circle = Triangle.outerCircle.apply(null, triangle);

			if (circle.radius >= Vector2.distance(vertex, circle)) {
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
   * 各三角形を辺に分割して、重なる辺を取り除いた2点の頂点リストを返す
   * @private
   * @method _mergeSides
   * @param {array} trianglesEdge 三角形頂点リスト
   * @return {array} 重なる辺を取り除いた2点の頂点リストを返す
   */
	_mergeSides(trianglesEdge) {
		let poins = [],
			sides = this._edgesToSides(trianglesEdge),
			total = sides.length;

		utils.each(sides, (s1, i) => {
			if (s1.skip || i === total - 1) {
				return true;

			} else {
				let found = false,
					j = i + 1;

				for (; j < total; j += 1) {
					let s2 = sides[j];

					if (
						(s1[0].x == s2[0].x && s1[0].y == s2[0].y && s1[1].x == s2[1].x && s1[1].y == s2[1].y) ||
						(s1[0].x == s2[1].x && s1[0].y == s2[1].y && s1[1].x == s2[0].x && s1[1].y == s2[0].y)
					) {
						// 重なる辺はスッキップしループを抜ける
						sides[j].skip = true;
						found = true;
						break;
					}
				}

				if (!found) {
					poins.push([s1[0], s1[1]]);
				}
			}
		});

		// 最後の三角が評価されていないので追加
		if (!sides[total - 1].skip) {
			poins.push([sides[total - 1][0], sides[total - 1][1]]);
		}

		return poins;
	}


  /**
   * 三角形の集合から辺の集合へ
   * @private
   * @method _edgesToSides
   * @param {array} triangles 三角形集合の頂点を格納した配列
   * @return {array} 辺の集合配列
   */
	_edgesToSides(triangles) {
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
   * 各頂点と点vertexを結んで三角形に分割する
   * @private
   * @method _createTriangle
   * @param {array} points 2点の座標を格納したリスト
   * @param {object} vertex 追加する頂点
   * @return {array} 生成した三角形リスト
   */
	_createTriangle(points, vertex) {
		let triangles = [];
		utils.each(points, (triangle) => {
			triangles.push([triangle[0], triangle[1], vertex]);
		});
		return triangles;
	}


  /**
   * ラップする三角形の頂点を含む三角形を削除して返す
   * @private
   * @method _removeWrapTriangl
   * @param {array} triangle ラップしている大三角形
   * @param {array} delaunays ドロネー
   * @return {array} ラップする三角形の頂点を含む三角形を削除して返す
   */
	_removeWrapTriangl(triangle, delaunays) {
		let placeholder = [];

		utils.each(delaunays, (vertices) => {
			if (triangle[0] != vertices[0] && triangle[0] != vertices[1] && triangle[0] != vertices[2] &&
				triangle[1] != vertices[0] && triangle[1] != vertices[1] && triangle[1] != vertices[2] &&
				triangle[2] != vertices[0] && triangle[2] != vertices[1] && triangle[2] != vertices[2]) {
				placeholder.push(vertices);
			}
		});

		return placeholder;
	}


  /**
   * Delaunay領域をラップする三角形を生成
   * @private
   * @method _createWrapTriangle
   * @param {number} width  Delaunay領域の幅 ※省略可
   * @param {number} height Delaunay領域の高さ ※省略可
   * @return {array} Delaunay領域をラップする三角形の座標を格納した配列
   */
	_createWrapTriangle(width, height) {
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
