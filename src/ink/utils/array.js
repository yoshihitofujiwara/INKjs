/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as is from "./is";

/**
 * @class Array
 */

/**
 * argumentsを配列に変換して返す
 * スライス位置を指定して切り取り可能
 * @static
 * @method argsToArray
 * @param {arguments} args arguments
 * @param {Number} index スライスする切り取り開始位置
 * @param {Number} lastIndex スライスする切り取り終了位置
 * @type {Array} argumentsを配列に変換して返す
 */
export const argsToArray = (() => {
  let slice = Array.prototype.slice;

  return (args, index, lastIndex) => {
    index = index || 0;
    lastIndex = lastIndex || args.length;
    return slice.call(args, index, lastIndex);
  };
})();


// FIXME: ES6 forEachに合わせる
/**
 * each
 * @static
 * @method each
 * @param {Array|Object|Number} obj eachを行うオブジェクト、または回数
 * @param {Function} callback イテレーション毎のコールバック関数
 * @return {Object} 第一引数に渡されたオブジェクト
 */
export function each(obj, callback){
  let isContinue, i;

  if(is.isArray(obj)){
    let l = obj.length;
    i = 0;
    for(; i < l; i += 1){
			isContinue = callback.call(obj[i], obj[i], i, obj);
      if(isContinue === false){
        break;
      }
    }

  } else if(is.isObject(obj) || is.isFunction(obj)){
    for(i in obj){
			isContinue = callback.call(obj[i], obj[i], i, obj);
      if(isContinue === false){
        break;
      }
    }

  } else if(is.isNumber(obj)){
    i = 0;
    for(; i < obj; i += 1){
			isContinue = callback.call(null, i, i, obj);
      if(isContinue === false){
        break;
      }
    }
  }

  return obj;
};


/**
 * 配列から最大値を探す
 * @static
 * @method findMax
 * @param  {Array} nums 数値を格納した配列
 * @return {Number}
 */
export function findMax(nums){
  return Math.max.apply(null, nums);
};


/**
 * 配列から最小値を探す
 * @static
 * @method findMin
 * @param  {Array} nums 数値を格納した配列
 * @return {Number}
 */
export function findMin(nums){
  return Math.min.apply(null, nums);
};


/**
 * 配列をシャッフルして返す
 * @static
 * @method shuffle
 * @param {Array} ary シャッフルする配列
 * @return {Array} 配列をシャッフルして返す
 */
export function shuffle(ary){
  return ary.sort(() => {
    return Math.random() - 0.5;
  });
};
