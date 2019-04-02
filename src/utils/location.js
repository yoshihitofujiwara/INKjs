/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

/**
 * @class Location
 */
let url = window.location;


/*----------------------------------------------------------------------
  @method
----------------------------------------------------------------------*/
/**
 * hashを配列にして返す
 * @static
 * @method getHash
 * @return {array} hashの配列
 */
export function getHash() {
	let ary = url.hash.split("#").slice(1);
	if (ary.length) {
		let i = 0,
			l = ary.length;
		for (; i < l; i += 1) {
			ary[i] = "#" + ary[i];
		}
	}
	return ary;
};


/**
 * getQuery
 *
 * @export location
 * @param {string} query 取得したいクエリ名
 * @returns {string} クエリの値を返す。値がない場合はundefined
 */
export function getQuery(query) {
	let querys = queryHashMap();
	return querys[query];
};


/**
 * リクエストパラメータ値を連想配列として取得
 * @static
 * @method queryHashMap
 * @param {string} query urlもしくは、パラメーター。省略時は現在のURL
 * @return {object} リクエストパラメータ値を連想配列にして返す
 */
export function queryHashMap(query) {
	let map = {},
		array = [],
		params;

	if (query) {
		if (query.indexOf("?") > -1) {
			params = query.split("?")[1].split("&");
		} else {
			params = query.split("&");
		}
	} else {
		params = url.search.slice(1).split("&");
	}

	if (params[0] !== "") {
		let i = 0,
			l = params.length;

		for (; i < l; i += 1) {
			array = params[i].split("=");
			map[array[0]] = decodeURI(array[1] || array[0]);
		}
	}

	return map;
};
