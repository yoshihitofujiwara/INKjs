/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";
import Vector2 from "./Vector2";


/**
 * <h4>Size</h4>
 * @class Size
 * @param {Number|Object|Array} width  幅
 * @param {Number} height 高さ
 */
export default class Size {
  /**
   * constructor
   */
  constructor(width, height) {
	  /**
	   * <h4>width</h4>
	   * @property width
	   * @type {Number}
	   */
		this.width = width;

	  /**
	   * <h4>height</h4>
	   * @property height
	   * @type {Number}
	   */
		this.height = height;
	}


	/**
	 * <h4>argumentsからオブジェクトを生成</h4>
	 * @static
	 * @method toJson
	 * @param {Number|Object|Array} width  幅
	 * @param {Number} height 高さ
	 * @return {Object} width,heightを格納したオブジェクト
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
	 * <h4>２つのサイズの最小サイズをマージしてSizeインスタンスを生成</h4>
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
	 * <h4>２つのサイズの最大サイズをマージしてSizeインスタンスを生成</h4>
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
	 * <h4>ランダムなSizeインスタンスを生成</h4>
	 * @static
	 * @method max
	 * @param {Number} min 最小サイズ
	 * @param {Number} max 最大サイズ
	 * @return {Size}
	 */
	static random(min, max){
		min = utils.isNumber(min) ? min : 0;
		max = utils.isNumber(max) ? max : 1;
		return new Size(utils.random(min, max), utils.random(min, max));
	}


	/**
	 * <h4>初期値にセット</h4>
	 * @method identity
	 * @return {Size}
	 */
	identity(){
	  this.width = 0;
	  this.height = 0;
	  return this;
	}


	/**
	 * <h4>Sizeのクローン</h4>
	 * @method clone
	 * @return {Size}
	 */
	clone(){
		return new Size(this.width, this.height);
	}


	/**
	 * <h4>0サイズ判定</h4>
	 * @method isZero
	 * @return {Boolean}
	 */
	isZero(){
		return this.width === 0 && this.height === 0;
	}


	/**
	 * <h4>サイズが等しいか判定</h4>
	 * <p>可変長引数で複数のオブジェクト判定可能</p>
	 * @method equals
	 * @param {Size} size sizeインスタンス
	 * @return {Boolean}
	 */
	equals(size){
		return (this.width === size.width && this.height === size.height);
	}

	/**
	 * <h4>中心の取得</h4>
	 * @method getCenter
	 * @return {Vector2}
	 */
	getCenter(){
		return new Vector2(this.width / 2, this.height / 2);
	}


	/**
	 * <h4>対角線の長さの取得</h4>
	 * @method diagonal
	 * @return {Number}
	 */
	diagonal(){
		return utils.diagonal(this.width, this.height);
	}


	/**
	 * <h4>Sizeのセット</h4>
	 * @method set
	 * @param {Number|Object|Array} width  幅
	 * @param {Number} height 高さ
	 * @return {Size}
	 */
	set(width, height){
		this.setWidth(width);
		this.setHeight(height);
		return this;
	}


	/**
	 * <h4>幅のセット</h4>
	 * @method setWidth
	 * @param {Number} width  幅
	 * @return {Size}
	 */
	setWidth(width){
		this.width = width;
		return this;
	}


	/**
	 * <h4>高さのセット</h4>
	 * @method setWidth
	 * @param {Number} height 高さ
	 * @return {Size}
	 */
	setHeight(height){
		this.height = height;
		return this;
	}


	/**
	 * <h4>加算</h4>
	 * @method add
	 * @param {Number|Object|Array} width  幅
	 * @param {Number} height 高さ
	 * @return {Size}
	 */
	add(addWidth, addHeight){
		this.width += addWidth;
		this.height += addHeight;
		return this;
	}


	/**
	 * <h4>減算</h4>
	 * @method sub
	 * @param {Number} subWidth  幅
	 * @param {Number} subHeight 高さ
	 * @return {Size}
	 */
	sub(subWidth, subHeight){
		this.width -= subWidth;
		this.height -= subHeight;
		return this;
	}


	/**
	 * <h4>積算</h4>
	 * @method mult
	 * @param {Number} multWidth  幅
	 * @param {Number} multHeight 高さ
	 * @return {Size}
	 */
	mult(multWidth, multHeight){
		this.width *= multWidth;
		this.height *= multHeight;
		return this;
	}


	/**
	 * <h4>割算</h4>
	 *
	 * @method sub
	 * @param {Number} divWidth  幅を割る数
	 * @param {Number} divHeight 高さを割る数
	 * @return {Size}
	 */
	div(divWidth, divHeight){
		this.width /= divWidth;
		this.height /= divHeight;
		return this;
	}


	/**
	 * <h4>サイズの加算</h4>
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
	 * <h4>サイズの減算</h4>
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
	 * <h4>サイズの積算</h4>
	 * @method multSize
	 * @param {Number} num 積数
	 * @return {Size}
	 */
	multSize(num){
		this.width *= num;
		this.height *= num;
		return this;
	}


	/**
	 * <h4>サイズの割算</h4>
	 * @method divSize
	 * @param {Number} num 割算
	 * @return {Size}
	 */
	divSize(num){
		this.width /= num;
		this.height /= num;
		return this;
	}


	/**
	 * <h4>サイズの面積</h4>
	 * @method area
	 * @return {Number}
	 */
	area(){
		return this.width * this.height;
	}
}
