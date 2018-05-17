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
   * <h4>Mat2 v4実装予定</h4>
   *
   * @constructor
   * @class Mat2
   * @param {Number} a  水平方向の縮尺
   * @param {Number} b  垂直方向の傾斜率
   * @param {Number} c  水平方向の傾斜率
   * @param {Number} d  垂直方向の縮尺
   * @param {Number} tx 水平方向の移動距離
   * @param {Number} ty 垂直方向の移動距離
   */
	function Mat2(a, b, c, d, tx, ty){
    // super class call
    AMP.BaseClass.call(this);

		/**
		 * <h4>Mat2データ</h4>
		 *
		 * @private
		 * @property _m2
		 * @type {Array}
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  Mat2.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>Mat2インスタンスの生成</h4>
   *
   * @static
   * @method get
   * @param {Number} a  水平方向の縮尺
   * @param {Number} b  垂直方向の傾斜率
   * @param {Number} c  水平方向の傾斜率
   * @param {Number} d  垂直方向の縮尺
   * @param {Number} tx 水平方向の移動距離
   * @param {Number} ty 垂直方向の移動距離
   */
	Mat2.get = function(a, b, c, d, tx, ty){
		return new Mat2(a, b, c, d, tx, ty);
	};


  /**
   * <h4>インスタンスのクローンを生成します</h4>
   *
   * @method clone
   * @return {Mat2}
   */
	p.clone = function(){
		return new Mat2(this._m2);
	};


	/**
	 * <h4>Matrixデータをセットします</h4>
	 *
	 * @method set
   * @param {Number} a  水平方向の縮尺
   * @param {Number} b  垂直方向の傾斜率
   * @param {Number} c  水平方向の傾斜率
   * @param {Number} d  垂直方向の縮尺
   * @param {Number} tx 水平方向の移動距離
   * @param {Number} ty 垂直方向の移動距離
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
	 * <h4>Matrixデータを初期値にします</h4>
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
	 * <h4>水平・垂直方向の移動</h4>
	 *
	 * @method translate
   * @param {Number} x 水平方向の移動距離
   * @param {Number} y 垂直方向の移動距離
   * @return {Mat2}
	 */
	p.translate = function(x, y){
		this.translateX(x);
		this.translateY(y);
		return this;
	};


	/**
	 * <h4>水平方向の移動</h4>
	 *
	 * @method translateX
   * @param {Number} x 水平方向の移動距離
   * @return {Mat2}
	 */
	p.translateX = function(x){
		this._m2[2] = this._m2[0] * x + this._m2[1] * this._m2[5];
		return this;
	};


	/**
	 * <h4>垂直方向の移動</h4>
	 *
	 * @method translateY
   * @param {Number} y 垂直方向の移動距離
   * @return {Mat2}
	 */
	p.translateY = function(y){
		this._m2[5] = this._m2[3] * this._m2[2] + this._m2[4] * y;
		return this;
	};


	/**
	 * <h4>横・縦の拡大</h4>
	 *
	 * @method scale
	 * @param  {Number} scaleX 横の拡大倍率
	 * @param  {Number} scaleY 縦の拡大倍率
	 * @return {Mat2}
	 */
	p.scale = function(scaleX, scaleY){
		this.scaleX(scaleX);
		this.scaleY(scaleY);
		return this;
	};


	/**
	 * <h4>横の拡大</h4>
	 *
	 * @method scaleX
	 * @param  {Number} scaleX 横の拡大倍率
	 * @return {Mat2}
	 */
	p.scaleX = function(scaleX){
		this._m2[0] *= scaleX;
		this._m2[3] *= scaleX;
		return this;
	};


	/**
	 * <h4>縦の拡大</h4>
	 *
	 * @method scaleY
	 * @param  {Number} scaleY 縦の拡大倍率
	 * @return {Mat2}
	 */
	p.scaleY = function(scaleY){
		this._m2[1] *= scaleY;
		this._m2[4] *= scaleY;
		return this;
	};


	/**
	 * <h4>回転</h4>
	 *
	 * @method rotate
	 * @param  {Number}  angle    角度(Degrees)
	 * @param  {Boolean} isRadian 第1引数をラジアン指定するか
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
	 * <h4>水平・垂直の傾斜変形</h4>
	 *
	 * @method skew
	 * @param  {Number} skewX degrees
	 * @param  {Number} skewY degrees
	 * @return {Mat2}
	 */
	p.skew = function(skewX, skewY){
		skewX = AMP.isNumber(skewX) ? skewX * AMP.DEG_TO_RAD : 0;
		skewY = AMP.isNumber(skewY) ? skewY * AMP.DEG_TO_RAD : 0;

		this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);

		return this;
	};


	/**
	 * <h4>水平の傾斜変形</h4>
	 *
	 * @method skewX
	 * @param  {Number} skewX degrees
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
	 * <h4>垂直の傾斜変形</h4>
	 *
	 * @method skewY
	 * @param  {Number} skewY degrees
	 * @return {Mat2}
	 */
	p.skewY = function(skewY){
		var skewX = Math.atan2(-this._m2[1], this._m2[4]) * AMP.DEG_TO_RAD;
		skewY *= AMP.DEG_TO_RAD;

		this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);

		return this;
	};


	/**
	 * <h4>指定プロパティの追加</h4>
	 *
	 * @method append
   * @param {Number} a  水平方向の縮尺
   * @param {Number} b  垂直方向の傾斜率
   * @param {Number} c  水平方向の傾斜率
   * @param {Number} d  垂直方向の縮尺
   * @param {Number} tx 水平方向の移動距離
   * @param {Number} ty 垂直方向の移動距離
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
	 * <h4>Mat2データを配列で返す</h4>
	 *
	 * @method toArray
	 * @return {Array}
	 */
	p.toArray = function(){
		return this._m2.concat();
	};


	/**
	 * <h4>Matrixデータをオブジェクト型にしてデータを返す</h4>
	 *
	 * @method toJson
	 * @return {Object}
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
	 * <h4>反転</h4>
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
	 * <h4>Mat2インスタンスにして返す</h4>
	 *
	 * @static
	 * @method toMatrix
	 * @param  {Number} x      translateX
	 * @param  {Number} y      translateY
	 * @param  {Number} scaleX scaleX
	 * @param  {Number} scaleY scaleY
	 * @param  {Number} skewX  skewX
	 * @param  {Number} skewY  skewY
	 * @param  {Number} rotate rotate(degrees)
	 * @return {Mat2}
	 */
	// Mat2.toMatrix = function(x, y, scaleX, scaleY, skewX, skewY, rotate){};



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Mat2 = Mat2;


}(window, AMP));
