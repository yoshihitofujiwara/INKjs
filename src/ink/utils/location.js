/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as array from "./array";

/**
 * @class Location
 */
let url = window.location;


/*----------------------------------------------------------------------
  @method
----------------------------------------------------------------------*/
/**
 * <h4>hashを配列にして返す</h4>
 * @static
 * @method getHash
 * @return {Array} hashの配列
 */
export function getHash(){
  let ary = url.hash.split("#").slice(1);
  if(ary.length){
    array.each(ary, (i, item) => {
      ary[i] = "#" + item;
    });
  }
  return ary;
};


/**
 * <h4>リクエストパラメータ値を連想配列として取得</h4>
 * @static
 * @method queryHashMap
 * @param {String} query urlもしくは、パラメーター。省略時は現在のURL
 * @return {Object} リクエストパラメータ値を連想配列にして返す
 */
export function queryHashMap(query){
  let map = {},
  array = [],
  params;

  if(query){
    if(query.indexOf("?") > -1){
      params = query.split("?")[1].split("&");
    } else {
      params = query.split("&");
    }
  } else {
    params = url.search.slice(1).split("&");
  }

  if(params[0] !== ""){
    let i = 0,
    l = params.length;

    for(; i < l; i += 1){
      array = params[i].split("=");
      map[array[0]] = decodeURI(array[1] || array[0]);
    }
  }

  return map;
};
