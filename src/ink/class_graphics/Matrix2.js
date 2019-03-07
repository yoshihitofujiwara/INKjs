/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function(global, AMP){

  // 'use strict';


  /*----------------------------------------------------------------------
    @constructor
  ----------------------------------------------------------------------*/
  /**
   * Mat2 v4実装予定
   *
   * @constructor
   * @class Mat2
   * @param {number} a  水平方向の縮尺
   * @param {number} b  垂直方向の傾斜率
   * @param {number} c  水平方向の傾斜率
   * @param {number} d  垂直方向の縮尺
   * @param {number} tx 水平方向の移動距離
   * @param {number} ty 垂直方向の移動距離
   */
	function Mat2(a, b, c, d, tx, ty){
    // super class call
    AMP.BaseClass.call(this);

		/**
		 * Mat2データ
		 *
		 * @private
		 * @property _m2
		 * @type {array}
		 * this._m2 = [
		 *  a, c, tx,
		 *  b, d, ty,
		 *  0, 0, 1
		 * ];
		 */
		this._m2 = [
			1, 0, 0,
			0, 1, 0,
			0, 0, 1
		];

		this.set(a, b, c, d, tx, ty);
	}

  // 基底クラスを継承
  AMP.inherits(Mat2, AMP.BaseClass);

	// prototype
	var p = Mat2.prototype;



  /*--------------------------------------------------------------------------
    @property
  --------------------------------------------------------------------------*/
  /**
   * バージョン情報
   *
   * @static
   * @property VERSION
   * @type {string}
   */
  Mat2.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * Mat2インスタンスの生成
   *
   * @static
   * @method get
   * @param {number} a  水平方向の縮尺
   * @param {number} b  垂直方向の傾斜率
   * @param {number} c  水平方向の傾斜率
   * @param {number} d  垂直方向の縮尺
   * @param {number} tx 水平方向の移動距離
   * @param {number} ty 垂直方向の移動距離
   */
	Mat2.get = function(a, b, c, d, tx, ty){
		return new Mat2(a, b, c, d, tx, ty);
	};


  /**
   * インスタンスのクローンを生成します
   *
   * @method clone
   * @return {Mat2}
   */
	p.clone = function(){
		return new Mat2(this._m2);
	};


	/**
	 * Matrixデータをセットします
	 *
	 * @method set
   * @param {number} a  水平方向の縮尺
   * @param {number} b  垂直方向の傾斜率
   * @param {number} c  水平方向の傾斜率
   * @param {number} d  垂直方向の縮尺
   * @param {number} tx 水平方向の移動距離
   * @param {number} ty 垂直方向の移動距離
   * @return {Mat2}
	 */
	p.set = function(a, b, c, d, tx, ty){
		var mat = AMP.isArray(a) ? a : AMP.argsToArray(arguments);

		// a
		this._m2[0] = AMP.isNumber(mat[0]) ? mat[0] : this._m2[0];
		// c
		this._m2[1] = AMP.isNumber(mat[2]) ? mat[2] : this._m2[1];
		// tx
		this._m2[2] = AMP.isNumber(mat[4]) ? mat[4] : this._m2[2];
		// b
		this._m2[3] = AMP.isNumber(mat[1]) ? mat[1] : this._m2[3];
		// d
		this._m2[4] = AMP.isNumber(mat[3]) ? mat[3] : this._m2[4];
		// ty
		this._m2[5] = AMP.isNumber(mat[5]) ? mat[5] : this._m2[5];

		return this;
	};


	/**
	 * Matrixデータを初期値にします
	 *
	 * @method identity
   * @return {Mat2}
	 */
	p.identity = function(){
		this._m2 = [
			1, 0, 0,
			0, 1, 0,
			0, 0, 1
		];
		return this;
	};


	/**
	 * 水平・垂直方向の移動
	 *
	 * @method translate
   * @param {number} x 水平方向の移動距離
   * @param {number} y 垂直方向の移動距離
   * @return {Mat2}
	 */
	p.translate = function(x, y){
		this.translateX(x);
		this.translateY(y);
		return this;
	};


	/**
	 * 水平方向の移動
	 *
	 * @method translateX
   * @param {number} x 水平方向の移動距離
   * @return {Mat2}
	 */
	p.translateX = function(x){
		this._m2[2] = this._m2[0] * x + this._m2[1] * this._m2[5];
		return this;
	};


	/**
	 * 垂直方向の移動
	 *
	 * @method translateY
   * @param {number} y 垂直方向の移動距離
   * @return {Mat2}
	 */
	p.translateY = function(y){
		this._m2[5] = this._m2[3] * this._m2[2] + this._m2[4] * y;
		return this;
	};


	/**
	 * 横・縦の拡大
	 *
	 * @method scale
	 * @param  {number} scaleX 横の拡大倍率
	 * @param  {number} scaleY 縦の拡大倍率
	 * @return {Mat2}
	 */
	p.scale = function(scaleX, scaleY){
		this.scaleX(scaleX);
		this.scaleY(scaleY);
		return this;
	};


	/**
	 * 横の拡大
	 *
	 * @method scaleX
	 * @param  {number} scaleX 横の拡大倍率
	 * @return {Mat2}
	 */
	p.scaleX = function(scaleX){
		this._m2[0] *= scaleX;
		this._m2[3] *= scaleX;
		return this;
	};


	/**
	 * 縦の拡大
	 *
	 * @method scaleY
	 * @param  {number} scaleY 縦の拡大倍率
	 * @return {Mat2}
	 */
	p.scaleY = function(scaleY){
		this._m2[1] *= scaleY;
		this._m2[4] *= scaleY;
		return this;
	};


	/**
	 * 回転
	 *
	 * @method rotate
	 * @param  {number}  angle    角度(Degrees)
	 * @param  {boolean} isRadian 第1引数をラジアン指定するか
	 * @return {Mat2}
	 */
	p.rotate = function(angle, isRadian){
		if(!isRadian){
			angle = angle * AMP.DEG_TO_RAD;
		}

		var cos = Math.cos(angle),
		sin = Math.sin(angle),
		a = this._m2[0],
		b = this._m2[3],
		c = this._m2[1],
		d = this._m2[4];

		this._m2[0] = a * cos + c * sin;
		this._m2[3] = b * cos + d * sin;
		this._m2[1] = -a * sin + c * cos;
		this._m2[4] = -b * sin + d * cos;
		return this;
	};


	/**
	 * 水平・垂直の傾斜変形
	 *
	 * @method skew
	 * @param  {number} skewX degrees
	 * @param  {number} skewY degrees
	 * @return {Mat2}
	 */
	p.skew = function(skewX, skewY){
		skewX = AMP.isNumber(skewX) ? skewX * AMP.DEG_TO_RAD : 0;
		skewY = AMP.isNumber(skewY) ? skewY * AMP.DEG_TO_RAD : 0;

		this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);

		return this;
	};


	/**
	 * 水平の傾斜変形
	 *
	 * @method skewX
	 * @param  {number} skewX degrees
	 * @return {Mat2}
	 */
	p.skewX = function(skewX){
		var skewY = Math.atan2(this._m2[3], this._m2[0]) * AMP.DEG_TO_RAD;
		skewX *= AMP.DEG_TO_RAD;

		this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
		// this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), this._m2[2], this._m2[5]);
		return this;
	};


	/**
	 * 垂直の傾斜変形
	 *
	 * @method skewY
	 * @param  {number} skewY degrees
	 * @return {Mat2}
	 */
	p.skewY = function(skewY){
		var skewX = Math.atan2(-this._m2[1], this._m2[4]) * AMP.DEG_TO_RAD;
		skewY *= AMP.DEG_TO_RAD;

		this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);

		return this;
	};


	/**
	 * 指定プロパティの追加
	 *
	 * @method append
   * @param {number} a  水平方向の縮尺
   * @param {number} b  垂直方向の傾斜率
   * @param {number} c  水平方向の傾斜率
   * @param {number} d  垂直方向の縮尺
   * @param {number} tx 水平方向の移動距離
   * @param {number} ty 垂直方向の移動距離
	 * @return {Mat2}
	 */
	p.append = function(a, b, c, d, tx, ty) {
		var a1 = this._m2[0],
		b1 = this._m2[3],
		c1 = this._m2[1],
		d1 = this._m2[4];

		if(a !== 1 || b !== 0 || c !== 0 || d !== 1){
			this._m2[0] = a1 * a + c1 * b;
			this._m2[3] = b1 * a + d1 * b;
			this._m2[1] = a1 * c + c1 * d;
			this._m2[4] = b1 * c + d1 * d;
		}

		this._m2[2] = a1 * tx + c1 * ty + this._m2[2];
		this._m2[5] = b1 * tx + d1 * ty + this._m2[5];

		return this;
	};


	/**
	 * Mat2データを配列で返す
	 *
	 * @method toArray
	 * @return {array}
	 */
	p.toArray = function(){
		return this._m2.concat();
	};


	/**
	 * Matrixデータをオブジェクト型にしてデータを返す
	 *
	 * @method toJson
	 * @return {object}
	 */
	p.toJson = function(){
		var skewX = Math.atan2(-this._m2[1], this._m2[4]),
		skewY = Math.atan2(this._m2[3], this._m2[0]),
		delta = Math.abs(1 - skewX / skewY),
		rotate = 0;

		if(skewX === -0){
			skewX = 0;
		}

		if(delta < 0.00001){
			rotate = skewY / AMP.DEG_TO_RAD;

			if(this._m2[0] < 0 && this._m2[4] >= 0){
				rotate += (rotate <= 0) ? 180 : -180;
			}
		}

		return {
      x     : this._m2[2],
      y     : this._m2[5],
      scaleX: Math.sqrt(Math.pow(this._m2[0], 2) + Math.pow(this._m2[3], 2)),
      scaleY: Math.sqrt(Math.pow(this._m2[1], 2) + Math.pow(this._m2[4], 2)),
      skewX : skewX,
      skewY : skewY,
      rotate: rotate
		};
	};


	/**
	 * 反転
	 *
	 * @method invert
	 * @return {Mat2}
	 */
	p.invert = function(){
    var a = this._m2[0],
    b = this._m2[3],
    c = this._m2[1],
    d = this._m2[4],
    tx = this._m2[2],
    ty = this._m2[5],
    n = a * d - b * c;

    this._m2[0] = d / n;
    this._m2[1] = -c / n;
    this._m2[2] = (c * ty - d * tx) / n;
    this._m2[3] = -b / n;
    this._m2[4] = a / n;
    this._m2[5] = -(a * ty - b * tx) / n;

    return this;
	};


	/// 未実装
	/**
	 * Mat2インスタンスにして返す
	 *
	 * @static
	 * @method toMatrix
	 * @param  {number} x      translateX
	 * @param  {number} y      translateY
	 * @param  {number} scaleX scaleX
	 * @param  {number} scaleY scaleY
	 * @param  {number} skewX  skewX
	 * @param  {number} skewY  skewY
	 * @param  {number} rotate rotate(degrees)
	 * @return {Mat2}
	 */
	// Mat2.toMatrix = function(x, y, scaleX, scaleY, skewX, skewY, rotate){};



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Mat2 = Mat2;


}(window, AMP));
