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
 * NOTE: β.ver
 * base64画像のファイルサイズ取得(bytes)
 * 厳密なファイルサイズではありません。
 * デバッグ時におおよそのファイルサイズを見るために使用しますので多少誤差があります
 * @static
 * @method base64FileSize
 * @param  {Base64} base64 base64画像
 * @return {number} bytes
 */
export function base64FileSize(base64) {
	let len = base64.indexOf(";base64,") + 8,
		bytes = (base64.length - len) * 3 / 4;
	return bytes;
};


/**
 * オブジェクトの拡張
 * @static
 * @method mixin
 * @param {boolean} isDeep ディープコピーするか 初期値: false 省略可
 * @param {object} arguments 拡張するオブジェクト
 * @return {object} 拡張したオブジェクトを返します
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
 * 匿名関数名を返す
 * 無名関数はundefinedを返します
 * @static
 * @method getFunctionName
 * @param {function} fn 名前を取得したい関数
 * @return {string} 関数名
 */
export function getFunctionName(fn) {
	if (is.isFunction(fn)) {
		if (fn.prototype.constructor && fn.prototype.constructor.name) {
			return fn.prototype.constructor.name;
		} else {
			return ("" + fn).replace(/^\s*function\s*([^\(]*)[\S\s]+$/im, "$1");
		}
	}
};


/**
 * NOTE: α.ver
 * spec - CPU性能を返す（だいたい）
 *
 * @export
 * @returns
 */
export function spec() {
	const SPEED_CONSTANT = 8.9997e-9;
	//if speed=(c*a)/t, then constant=(s*t)/a and time=(a*c)/s

	const START_TIME = performance.now();
	const AMOUNT = 150000000;
	for (let i = AMOUNT; i > 0; i--) { }
	const END_TIME = performance.now();
	let sub = (END_TIME - START_TIME) / 1000;
	let speed = ((SPEED_CONSTANT * AMOUNT) / sub);

	return {
		core: navigator.hardwareConcurrency || "Chrome Only",
		time: Math.round(sub * 1000) / 1000, // sec
		clock: Math.round(speed * 1000) / 1000 // GHZ
	}
}


/**
 * 型名取得
 * @static
 * @method typeOf
 * @param {object} 判定するオブジェクト
 * @return {string} 型名を返す
 */
export function typeOf(obj) {
	if (is.isArray(obj)) {
		return "array";
	} else if (is.isBoolean(obj)) {
		return "boolean";
	} else if (is.isFunction(obj)) {
		return "function";
	} else if (is.isNumber(obj)) {
		return "number";
	} else if (is.isObject(obj)) {
		return "object";
	} else if (is.isString(obj)) {
		return "string";
	} else if (is.isRegexp(obj)) {
		return "regexp";
	} else if (is.isNull(obj)) {
		return "null";
	} else if (is.isUndefined(obj)) {
		return "undefined";
	} else if (obj.toString && obj.toString()) {
		return obj.toString().toLowerCase();
	}
};


/**
 * 画像のプリロード
 * @static
 * @method preload
 * @param {string} src 画像パス
 * @return {Image} 生成した、イメージ要素
 */
export function preload(src) {
	let img = new Image();
	img.src = src;
	return img;
};


/**
 * 空の関数
 * @static
 * @method noop
 * @return {function}
 */
export function noop() { };


/**
 * コンソールログの出力
 * @static
 * @method log
 * @return {function}
 */
export function log() {
	if (!INK || INK.isDevelop) {
		console.log.apply(console, array.argsToArray(arguments));
	}
};
