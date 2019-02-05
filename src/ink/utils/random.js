/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


/**
 * @class Random
 * see: https://ics.media/entry/11292
 */


/**
 * 乱数の生成
 * @static
 * @param {number} min 最小値 ※省略可
 * @param {number} max 最大値 ※省略可
 * @return {number} 乱数を返します
 */
export function random(min = 0, max = 1) {
	let random = Math.random();

	if (min > max) {
		let num = min;
		min = max;
		max = num;
	}
	return random * (max - min) + min;
};


/**
 * int型の乱数の生成
 * @static
 * @param {number} min 最小値 ※省略可
 * @param {number} max 最大値 ※省略可
 * @return {number} 乱数を返します
 */
export function randomInt(min, max) {
	return Math.round(random(min, max));
}


/**
 * randomLow
 * 0.0付近の出現率が高い乱数の生成
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
export function randomLow() {
	return Math.random() * Math.random();
};


/**
 * randomLow2
 * 0.0付近の出現率が高い乱数の生成（randomLowより高い）
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
export function randomLow2() {
	let r = Math.random();
	return r * r;
};



/**
 * randomHight
 * 1.0付近の出現率が高い乱数の生成
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
export function randomHight() {
	return 1.0 - Math.random() * Math.random();
};


/**
 * randomHight2
 * 1.0付近の出現率が高い乱数の生成（randomHightより高い）
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
export function randomHight2() {
	let r = Math.random();
	return 1.0 - r * r;
};


/**
 * randomNormalize
 * 中央値(0.5)付近の値を多く出す
 *
 * @export
 * @returns
 */
export function randomNormalize() {
	let r1 = Math.random();
	let r2 = Math.random();
	let value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
	// 値を0以上1未満になるよう正規化する
	return (value + 3) / 6;
};


/**
 * randomLinerLow
 * 直線的に0.0付近の出現率を高くする
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
export function randomLinerLow() {
	return 1.0 - Math.sqrt(Math.random());
};


/**
 * randomLinerHight
 * 直線的に1.0付近の出現率を高くする
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
export function randomLinerHight() {
	return Math.sqrt(Math.random());
};


/**
 * randomLinerCenter
 * 中央値(0.5)付近の値を多く出す
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
export function randomLinerCenter() {
	return (Math.random() + Math.random()) * 0.5;
};
