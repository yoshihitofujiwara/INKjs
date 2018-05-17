/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as is from "./is";

/**
 * @class Extend
 */

/**
 * <h4>オブジェクトの拡張</h4>
 * @static
 * @method mixin
 * @param {Boolean} isDeep ディープコピーするか 初期値: false 省略可
 * @param {Object} arguments 拡張するオブジェクト
 * @return {Object} 拡張したオブジェクトを返します
 */
export function mixin(isDeep, objA, objB){
  let options, name, src, copy, copyIsArray, clone,
  target = arguments[ 0 ] || {},
  i = 1,
  length = arguments.length,
  deep = false;

  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[ i ] || {};
    i++;
  }

  if ( typeof target !== "object" && !is.isFunction( target ) ) {
    target = {};
  }

  if ( i === length ) {
    target = this;
    i--;
  }

  for ( ; i < length; i++ ) {
    if ( ( options = arguments[ i ] ) != null ) {
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        if ( target === copy ) {
          continue;
        }

        if ( deep && copy && ( is.isPlainObject( copy ) ||
          ( copyIsArray = Array.isArray( copy ) ) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && Array.isArray( src ) ? src : [];
          } else {
            clone = src && is.isPlainObject( src ) ? src : {};
          }
          target[ name ] = mixin( deep, clone, copy );
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  return target;
};


/**
 * <h4>クラスの継承</h4>
 * <p>拡張した、サブクラスを返します</p>
 * @static
 * @method inherits
 * @param {Function} subClass サブクラス
 * @param {Function} superClass スーパークラス
 * @return {Function} 拡張した、サブクラスを返します
 */
export function inherits(subClass, superClass){
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = superClass;
  return subClass;
};
