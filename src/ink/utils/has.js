/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as array from "./array";
import * as is from "./is";

/**
 * @class Has
 */
let url = window.location;

/**
 * <h4>LocationHashの有無</h4>
 * @static
 * @method hasHash
 * @param {String} key ハッシュ名 省略可
 * @return {Boolean}
 */
export function hasHash(key){
  let flag = false;

  if(url.href.indexOf("#") > -1){
    if(key){
      let k = " " + key.replace(/^#/, "") + " ",
      vals = url.hash.split("#");

      array.each(vals, (i, v) => {
        if(k.indexOf(" " + v + " ") !== -1){
          flag = true;
          return false;
        }
      });
    } else {
      flag = true;
    }
  }

  return flag;
};


/**
 * <h4>文字列を検索し、指定の文字列があるか判定</h4>
 * @static
 * @method hasString
 * @param {String} str 対象の文字列
 * @param {String} haStr 検索文字
 * @return {Boolean}
 */
export function hasString(str, hasStr){
  return is.isString(str) && str.indexOf(hasStr) > -1;
};


/**
 * <h4>ユーザーエージェントに指定の文字列があるか判定します</h4>
 * @static
 * @method hasUA
 * @param {String} str 指定の文字列
 * @return {Boolean}
 */
export function hasUA(str){
  return is.ua.indexOf(str) > -1;
};
