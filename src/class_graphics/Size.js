/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";


/**
 * Size
 * @class Size
 * @param {Number|Object|Array} width  幅
 * @param {number} height 高さ
 */
export default class Size {
  /**
   * constructor
   */
  constructor(width, height) {
	  /**
	   * width
	   * @property width
	   * @type {number}
	   */
		this.width = width;

	  /**
	   * height
	   * @property height
	   * @type {number}
	   */
		this.height = height;
	}


	/**
	 * argumentsからオブジェクトを生成
	 * @static
	 * @method toJson
	 * @param {Number|Object|Array} width  幅
	 * @param {number} height 高さ
	 * @return {object} width,heightを格納したオブジェクト
	 */
	static toJson(width, height){
	  if(utils.isObject(width)){
	    return {
	      width : width.width,
	      height: width.height
	    };

	  } else if(utils.isArray(width)){
	    return {
	      width : width[0],
	      height: width[1]
	    };

	  } else {
	    return {
	      width : width,
	      height: height
	    };
	  }
	}


	/**
	 * ２つのサイズの最小サイズをマージしてSizeインスタンスを生成
	 * @static
	 * @method createMin
	 * @param {Size} size1 sizeインスタンス
	 * @param {Size} size2 sizeインスタンス
	 * @return {Size}
	 */
	static createMin(size1, size2){
		return new Size(Math.min(size1.width, size2.width), Math.min(size1.height, size2.height));
	}


	/**
	 * ２つのサイズの最大サイズをマージしてSizeインスタンスを生成
	 * @static
	 * @method createMax
	 * @param {Size} size1 sizeインスタンス
	 * @param {Size} size2 sizeインスタンス
	 * @return {Size}
	 */
	static createMax(size1, size2){
		return new Size(Math.max(size1.width, size2.width), Math.max(size1.height, size2.height));
	}


	/**
	 * ランダムなSizeインスタンスを生成
	 * @static
	 * @method max
	 * @param {number} min 最小サイズ
	 * @param {number} max 最大サイズ
	 * @return {Size}
	 */
	static random(min, max){
		min = utils.isNumber(min) ? min : 0;
		max = utils.isNumber(max) ? max : 1;
		return new Size(utils.random(min, max), utils.random(min, max));
	}


	/**
	 * 初期値にセット
	 * @method identity
	 * @return {Size}
	 */
	identity(){
	  this.width = 0;
	  this.height = 0;
	  return this;
	}


	/**
	 * Sizeのクローン
	 * @method clone
	 * @return {Size}
	 */
	clone(){
		return new Size(this.width, this.height);
	}


	/**
	 * 0サイズ判定
	 * @method isZero
	 * @return {boolean}
	 */
	isZero(){
		return this.width === 0 && this.height === 0;
	}


	/**
	 * サイズが等しいか判定
	 * 可変長引数で複数のオブジェクト判定可能
	 * @method equals
	 * @param {Size} size sizeインスタンス
	 * @return {boolean}
	 */
	equals(size){
		return (this.width === size.width && this.height === size.height);
	}

	/**
	 * 中心の取得
	 * @method getCenter
	 * @return {object} x, y
	 */
	getCenter(){
		return {
			x: this.width / 2,
			y: this.height / 2
		};
	}


	/**
	 * 対角線の長さの取得
	 * @method diagonal
	 * @return {number}
	 */
	diagonal(){
		return utils.diagonal(this.width, this.height);
	}


	/**
	 * Sizeのセット
	 * @method set
	 * @param {Number|Object|Array} width  幅
	 * @param {number} height 高さ
	 * @return {Size}
	 */
	set(width, height){
		this.setWidth(width);
		this.setHeight(height);
		return this;
	}


	/**
	 * 幅のセット
	 * @method setWidth
	 * @param {number} width  幅
	 * @return {Size}
	 */
	setWidth(width){
		this.width = width;
		return this;
	}


	/**
	 * 高さのセット
	 * @method setWidth
	 * @param {number} height 高さ
	 * @return {Size}
	 */
	setHeight(height){
		this.height = height;
		return this;
	}


	/**
	 * 加算
	 * @method add
	 * @param {Number|Object|Array} width  幅
	 * @param {number} height 高さ
	 * @return {Size}
	 */
	add(addWidth, addHeight){
		this.width += addWidth;
		this.height += addHeight;
		return this;
	}


	/**
	 * 減算
	 * @method sub
	 * @param {number} subWidth  幅
	 * @param {number} subHeight 高さ
	 * @return {Size}
	 */
	sub(subWidth, subHeight){
		this.width -= subWidth;
		this.height -= subHeight;
		return this;
	}


	/**
	 * 積算
	 * @method mult
	 * @param {number} multWidth  幅
	 * @param {number} multHeight 高さ
	 * @return {Size}
	 */
	mult(multWidth, multHeight){
		this.width *= multWidth;
		this.height *= multHeight;
		return this;
	}


	/**
	 * 割算
	 *
	 * @method sub
	 * @param {number} divWidth  幅を割る数
	 * @param {number} divHeight 高さを割る数
	 * @return {Size}
	 */
	div(divWidth, divHeight){
		this.width /= divWidth;
		this.height /= divHeight;
		return this;
	}


	/**
	 * サイズの加算
	 * @method addSize
	 * @param {Size} size 加算するSize
	 * @return {Size}
	 */
	addSize(size){
		this.width += size.width;
		this.height += size.height;
		return this;
	}


	/**
	 * サイズの減算
	 * @method addSize
	 * @param {Size} size 減算するSize
	 * @return {Size}
	 */
	subSize(size){
		this.width -= size.width;
		this.height -= size.height;
		return this;
	}


	/**
	 * サイズの積算
	 * @method multSize
	 * @param {number} num 積数
	 * @return {Size}
	 */
	multSize(num){
		this.width *= num;
		this.height *= num;
		return this;
	}


	/**
	 * サイズの割算
	 * @method divSize
	 * @param {number} num 割算
	 * @return {Size}
	 */
	divSize(num){
		this.width /= num;
		this.height /= num;
		return this;
	}


	/**
	 * サイズの面積
	 * @method area
	 * @return {number}
	 */
	area(){
		return this.width * this.height;
	}
}
