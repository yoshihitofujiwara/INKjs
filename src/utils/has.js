/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as is from "./is";

/**
 * @class Has
 */
let url = window.location;

/**
 * LocationHashの有無
 * @static
 * @method hasHash
 * @param {string} key ハッシュ名 省略可
 * @return {boolean}
 */
export function hasHash(key) {
	let flag = false;

	if (url.href.indexOf("#") > -1) {
		if (key) {
			let k = " " + key.replace(/^#/, "") + " ",
				vals = url.hash.split("#"),
				i = 0,
				l = vals.length;

			for (; i < l; i += 1) {
				if (k.indexOf(" " + vals[i] + " ") !== -1) {
					flag = true;
					break;
				}
			}

		} else {
			flag = true;
		}
	}

	return flag;
};


/**
 * 文字列を検索し、指定の文字列があるか判定
 * @static
 * @method hasString
 * @param {string} str 対象の文字列
 * @param {string} haStr 検索文字
 * @return {boolean}
 */
export function hasString(str, hasStr) {
	return is.isString(str) && str.indexOf(hasStr) > -1;
};


/**
 * ユーザーエージェントに指定の文字列があるか判定します
 * @static
 * @method hasUA
 * @param {string} str 指定の文字列
 * @return {boolean}
 */
export function hasUA(str) {
	return is.ua.indexOf(str) > -1;
};
