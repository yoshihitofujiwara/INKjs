/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


import * as array from "./array";
import * as is from "./is";


/**
 * @class String
 */


/**
 * zeroPadding 数値桁数を揃える
 * @param  {Number} value 値
 * @param  {Number} digit 桁数 (1桁=1, 2桁=2)
 * @return {String}
 */
export function zeroPadding(value, digit, isBeyondValue) {
	let _value = "" + value,
		zero = ("" + Math.pow(10, digit)).slice(1);

	if (digit * 10 > value) {
		return (zero + _value).slice(-digit);
	} else {
		return _value;
	}
};


/**
 * id生成します
 * 文字列にナンバーを追加して返します
 *
 * @static
 * @method createId
 * @param {String} str id名 初期値: 'id_' 省略可
 * @return {String} 生成したid
 */
export const createId = (() => {
	let _count = 0;

	return function (str = "id_") {
		return str + (_count += 1);
	};
})();


/**
 * ランダムな4桁のコードを返す
 * @static
 * @method digit
 * @return {String} ランダムな4桁のコード
 */
export function digit() {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};


/**
 * objectToQuery オブジェクトをクエリ文字列に変換 (ネスト構造に再起処理はしません)
 * @static
 * @method objectToQuery
 * @param  {Object} obj 対象のオブジェクト
 * @param  {boolean} isQuestion 先頭に?加えるか ※初期false
 * @return {String}
 */
export function objectToQuery(obj, isQuestion = false) {
	let query = "";
	array.each(obj, (key, val) => {
		if (query) {
			query += "&";
		}

		if (is.isObject(val)) {
			query += key + "=" + val.keys().length;
		} else if (is.isArray(val)) {
			query += key + "=" + val.length;
		} else {
			query += key + "=" + val;
		}
	});

	if (isQuestion) {
		query = + query;
	}

	return query;
};


/**
 * 空白文字の削除
 * @static
 * @method removeSpace
 * @param {String} str 対象の文字列
 * @return {String} 空白文字を削除した文字列
 */
export function removeSpace(str) {
	return str.replace(/\s+/g, "");
};


/**
 * 文字列の全置換
 * 対象の文字列と、削除文字列がマッチしたものを全置換します
 * @static
 * @method replaceAll
 * @param {String} str 置換対象の文字列
 * @param {String} del 削除する文字列
 * @param {String} add 追加する文字列
 * @return {String} 置換した文字列
 */
export function replaceAll(str, del, add) {
	add = add ? add : "";
	return str.split(del).join(add);
};


/**
 * toHarfNumber 全角数値を半角数値へ変換
 * @param  {String} str 数値文字列
 * @return {String}
 */
export function toHarfNumber(str) {
	str = str.replace(/-/g, "");
	return str.replace(/[０-９]/g, (s) => {
		return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	});
};


/**
 * UUIDの生成して返す
 * @static
 * @method uuid
 * @return {String} UUID
 */
export function uuid() {
	return (digit() + digit() + "-" + digit() + "-" + digit() + "-" + digit() + "-" + digit() + digit() + digit());
};
