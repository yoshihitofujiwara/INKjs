/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as is from "./is";
import * as array from "./array";

/**
 * @class Utility
 */


/**
 * <h4>base64画像のファイルサイズ取得(bytes)</h4>
 * <p>厳密なファイルサイズではありません。
 * デバッグ時におおよそのファイルサイズを見るために使用しますので多少誤差があります</p>
 * @static
 * @method base64FileSize
 * @param  {Base64} base64 base64画像
 * @return {Number} bytes
 */
export function base64FileSize(base64){
  let len = base64.indexOf(";base64,") + 8,
  bytes = (base64.length - len) * 3 / 4;
  return bytes;
};


/**
 * <h4>オブジェクトの拡張</h4>
 * @static
 * @method mixin
 * @param {Boolean} isDeep ディープコピーするか 初期値: false 省略可
 * @param {Object} arguments 拡張するオブジェクト
 * @return {Object} 拡張したオブジェクトを返します
 */
export function mixin(isDeep, objA, objB) {
	let options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	if (typeof target === "boolean") {
		deep = target;
		target = arguments[i] || {};
		i++;
	}

	if (typeof target !== "object" && !is.isFunction(target)) {
		target = {};
	}

	if (i === length) {
		target = this;
		i--;
	}

	for (; i < length; i++) {
		if ((options = arguments[i]) != null) {
			for (name in options) {
				src = target[name];
				copy = options[name];

				if (target === copy) {
					continue;
				}

				if (deep && copy && (is.isPlainObject(copy) ||
					(copyIsArray = Array.isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];
					} else {
						clone = src && is.isPlainObject(src) ? src : {};
					}
					target[name] = mixin(deep, clone, copy);
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}

	return target;
};


/**
 * <h4>匿名関数名を返す</h4>
 * <p>無名関数はundefinedを返します</p>
 * @static
 * @method getFunctionName
 * @param {Function} fn 名前を取得したい関数
 * @return {String} 関数名
 */
export function getFunctionName(fn){
  if(is.isFunction(fn)){
    if(fn.prototype.constructor && fn.prototype.constructor.name){
      return fn.prototype.constructor.name;
    } else {
      return ("" + fn).replace(/^\s*function\s*([^\(]*)[\S\s]+$/im, "$1");
    }
  }
};


/**
 * <h4>型名取得</h4>
 * @static
 * @method typeOf
 * @param {Object} 判定するオブジェクト
 * @return {String} 型名を返す
 */
export function typeOf(obj){
  if(is.isArray(obj)){
    return "array";
  } else if(is.isBoolean(obj)){
    return "boolean";
  } else if(is.isFunction(obj)){
    return "function";
  } else if(is.isNumber(obj)){
    return "number";
  } else if(is.isObject(obj)){
    return "object";
  } else if(is.isString(obj)){
    return "string";
  } else if(is.isRegexp(obj)){
    return "regexp";
  } else if(is.isNull(obj)){
    return "null";
  } else if(is.isUndefined(obj)){
    return "undefined";
  } else if(obj.toString && obj.toString()){
    return obj.toString().toLowerCase();
  }
};


/**
 * <h4>画像のプリロード</h4>
 * @static
 * @method preload
 * @param {String} src 画像パス
 * @return {Image} 生成した、イメージ要素
 */
export function preload(src){
  let img = new Image();
  img.src = src;
  return img;
};


/**
 * <h4>空の関数</h4>
 * @static
 * @method noop
 * @return {Function}
 */
export function noop(){};


/**
 * <h4>コンソールログの出力</h4>
 * @static
 * @method log
 * @return {Function}
 */
export function log(){
  if(!INK || INK.isDevelop){
    console.log.apply(console, array.argsToArray(arguments));
  }
};
