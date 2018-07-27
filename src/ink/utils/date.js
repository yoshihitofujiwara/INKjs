/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

/**
 * @class Date
 */

/**
 * <h4>現在の日時情報を格納したオブジェクトを返す</h4>
 * @static
 * @method nowDate
 * @return {Object}
 */
export function nowDate() {
  let date = new Date();

  return {
		date  : date,
    year  : date.getFullYear(),
    month : date.getMonth() + 1,
    day   : date.getDate(),
    hour  : date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};
