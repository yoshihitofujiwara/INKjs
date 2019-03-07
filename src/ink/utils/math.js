/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


/**
 * @class Math
 */

/**
 * π (半円)
 * @static
 * @property PI
 * @type {number}
 */
export const PI = Math.PI;


/**
 * π * 2 (円)
 * @static
 * @property TWO_PI
 * @type {number}
 */
export const TWO_PI = PI * 2;


/**
 * π * 2 (1/4円)
 * @static
 * @property HARF_PI
 * @type {number}
 */
export const HARF_PI = PI / 2;


/**
 * ラジアンからに角度変換する積数
 * @static
 * @property RAD_TO_DEG
 * @type {number}
 */
export const RAD_TO_DEG = 180 / PI;


/**
 * 角度からラジアンに変換する積数
 * @static
 * @property DEG_TO_RAD
 * @type {number}
 */
export const DEG_TO_RAD = PI / 180;


/**
 * √2
 * @static
 * @property sqrt2
 * @type {number}
 */
export const sqrt2 = Math.sqrt(2);


/* Convert
-----------------------------------------------------------------*/
/**
 * ラジアンと半径から座標生成
 * @method radToCoord
 * @param  {number} rad ラジアン
 * @param  {number} radius 半径
 * @return {object} x, y座標を格納したオブジェクト
 */
export function radToCoord(rad, radius = 1) {
	return {
		x: Math.cos(rad) * radius,
		y: Math.sin(rad) * radius
	};
};


/**
 * 角度と半径から座標を生成
 * @method degToCoord
 * @param  {number} deg ラジアン
 * @param  {number} radius 半径
 * @return {object} x, y座標を格納したオブジェクト
 */
export function degToCoord(deg, radius = 1) {
	return radToCoord(degToRad(deg), radius);
};


/**
 * 座標からRadianを取得
 * @static
 * @method coordToRad
 * @param  {number} x x座標値
 * @param  {number} y y座標値
 * @return {number} Radian
 */
export function coordToRad(x, y) {
	return Math.atan2(y, x);
};


/**
 * 座標からDegreesを取得
 * @static
 * @method coordToDeg
 * @param  {number} x x座標値
 * @param  {number} y y座標値
 * @return {number} Degrees
 */
export function coordToDeg(x, y) {
	return Math.atan2(y, x) * RAD_TO_DEG;
};


/**
 * ラジアンから角度を求める
 * @static
 * @method radToDeg
 * @param {number} rad ラジアン
 * @return {number} degree
 */
export function radToDeg(rad) {
	return rad * RAD_TO_DEG;
};


/**
 * 角度をラジアンに変換して返す
 * @static
 * @method degToRad
 * @param {number} deg 角度
 * @return {number} radian
 */
export function degToRad(deg) {
	return deg * DEG_TO_RAD;
};


/**
 * 対角線の長さ
 * @static
 * @method diagonal
 * @param  {number} x 横
 * @param  {number} y 縦
 * @return {number}
 */
export function diagonal(x, y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};


/**
 * 対角線の長さから正方形の辺の長さを求める（なす角45°）
 * @static
 * @method diagonalToSideLength
 * @param  {number} diagonal 対角線の長さ
 * @return {number}
 */
export function diagonalToSideLength(diagonal) {
	return diagonal / utils.sqrt2;
}


/* Utilitys
-----------------------------------------------------------------*/
/**
 * 順序付けのために2つの引数を比較
 * 引数が等しい場合は0、2番目より小さい場合は負の整数、最初の引数が2番目の引数より大きい場合は正の整数を返す
 * @static
 * @method compare
 * @param  {number} num1 指定数値
 * @param  {number} num2 比較数値
 * @return {number} -1, 0, 1のいずれかの値
 */
export function compare(num1, num2) {
	if (num1 === num2) {
		return 0;
	} else if (num1 < num2) {
		return -1;
	} else {
		return 1;
	}
};


/**
 * 値の符号化
 * numが正なら+1.0、0.0なら0.0、負なら-1.0を返す
 * @static
 * @method sign
 * @param  {number} num
 * @return {number} -1, 0, 1のいずれかの値
 */
export function sign(num) {
	if (0 < num) {
		return 1;
	} else if (0 > num) {
		return -1;
	} else {
		return 0;
	}
};


/**
 * 小数点を取り出す
 * @static
 * @method fract
 * @param  {number} num
 * @return {number}
 */
export function fract(num) {
	return num - Math.floor(num);
};


/**
 * 値の有効範囲を適用して返す
 * @static
 * @method clamp
 * @param {number} num 数値
 * @param {number} min 最小値
 * @param {number} max 最大値
 * @return {number} 有効範囲を適用した数値
 */
export function clamp(num, min, max) {
	return Math.max(Math.min(num, max), min);
};


/**
 * 階乗の計算
 * @static
 * @method factorial
 * @param {number} num 階乗数
 * @return {number}
 */
export function factorial(num) {
	var total = 1;
	while (num) {
		total = total * num;
		num -= 1;
	}
	return total;
};


/**
 * 範囲内に値があるか
 * @static
 * @method inRange
 * @param  {number} val 数値
 * @param  {number} min 最小値
 * @param  {number} max 最大値
 * @return {boolean}
 */
export function inRange(val, min, max) {
	return val >= Math.min(min, max) && val <= Math.max(min, max);
};


/**
 * 値の範囲が交差するか
 * @static
 * @method isIntersect
 * @param  {number} rangeMin1 範囲1の最小値
 * @param  {number} rangeMax1 範囲1の最大値
 * @param  {number} rangeMin2 範囲2の最小値
 * @param  {number} rangeMax2 範囲2の最大値
 * @return {boolean}
 */
export function isIntersect(rangeMin1, rangeMax1, rangeMin2, rangeMax2) {
	return Math.max(rangeMin1, rangeMax1) >= Math.min(rangeMin2, rangeMax2) &&
		Math.min(rangeMin1, rangeMax1) <= Math.max(rangeMin2, rangeMax2);
};


/**
 * 線形補間
 * @static
 * @method lerp
 * @param  {number} val 線形補間する指定の値
 * @param  {number} min   最小値
 * @param  {number} max   最大値
 * @return {number}       線形補間した値
 */
export function lerp(val, min, max) {
	return (max - min) * val + min;
};


/**
 * エルミート補完
 * @static
 * @method smoothstep
 * @param  {number} val 線形補間する指定の値
 * @param  {number} min   最小値
 * @param  {number} max   最大値
 * @return {number}       線形補間した値
 */
export function smoothstep(val, min, max) {
	// return clamp((val - min) / (max - min), 0, 1);
	let t = clamp((val - min) / (max - min), 0, 1);
	return t * t * (3 - 2 * t);
};


/**
 * 正規化(0.0-1.0)
 * @static
 * @method normalize
 * @param  {number} val 正規化する値
 * @param  {number} min   最小値
 * @param  {number} max   最大値
 * @return {number}       正規化した値
 */
export function normalize(val, min, max) {
	return (val - min) / (max - min);
};


/**
 * 値の有効範囲の最適化（マッピング）
 * valueを範囲scorpeA1 - scorpeA2から範囲scorpeB1 - scorpeB2へ変換
 * @static
 * @method map
 * @param  {number} val   最適化する値
 * @param  {number} fromMin 現在基準の最小値
 * @param  {number} fromMax 現在基準の最大値
 * @param  {number} toMin 最適化基準の最小値
 * @param  {number} toMax 最適化基準の最大値
 * @return {number}         最適化した値
 */
export function map(val, fromMin, fromMax, toMin, toMax) {
	return lerp(normalize(val, fromMin, fromMax), toMin, toMax);
};
