/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara

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
        copy = options[name];

        if (name === "__proto__" || target === copy) {
          continue;
        }

        if (deep && copy && (is.isPlainObject(copy) ||
          (copyIsArray = Array.isArray(copy)))) {
          src = target[name];

          if (copyIsArray && !Array.isArray(src)) {
            clone = [];
          } else if (!copyIsArray && !is.isPlainObject(src)) {
            clone = {};
          } else {
            clone = src;
          }
          copyIsArray = false;

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
 * 現在の日時情報を格納したオブジェクトを返す
 * @static
 * @method nowDate
 * @return {object}
 */
export function nowDate() {
  let date = new Date();

  return {
    date: date,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDay(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
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
