/**
 * INK.js
 * Version: 0.0.7
 * Source : https://github.com/yoshihitofujiwara/INKjs
 * Author : Yoshihito Fujiwara
 * Copyright (c) 2012-2021 Yoshihito Fujiwara
 *
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_1__config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__has__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_2__has__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_2__has__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_2__has__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__is__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["B"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["C"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["D"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["E"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["F"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["G"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["H"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["I"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["J"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["K"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["L"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["M"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["N"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["O"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["P"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["Q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["R"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return __WEBPACK_IMPORTED_MODULE_3__is__["S"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_4__location__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_4__location__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_4__location__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calc__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return __WEBPACK_IMPORTED_MODULE_5__calc__["x"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__random__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return __WEBPACK_IMPORTED_MODULE_6__random__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_51", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utility__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["g"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara












/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * @class Vector2 - 2Dベクトル・座標を管理します
 * @param {number|Vector2} x x座標値 default 0
 * @param {number} y y座標値 default 0
 */

var Vector2 = function () {
  /**
   * constructor
   */
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    if (__WEBPACK_IMPORTED_MODULE_0__utils__["_6" /* isObject */](x)) {
      y = x.y || 0;
      x = x.x || 0;
    }

    /**
     * X座標
     * @property x
     * @type {number}
     */
    this.x = x;

    /**
     * Y座標
     * @property y
     * @type {number}
     */
    this.y = y;
  }

  /*--------------------------------------------------------------------------
  	@method
  --------------------------------------------------------------------------*/
  /**
   * Vector2のcloneを生成します
   * @method clone
   * @return {vector2}
   */


  _createClass(Vector2, [{
    key: "clone",
    value: function clone() {
      return new Vector2(this.x, this.y);
    }

    /**
     * 初期値にセット
     * @method identity
     * @return {vector2}
     */

  }, {
    key: "identity",
    value: function identity() {
      this.x = 0;
      this.y = 0;
      return this;
    }

    /**
     * ベクトル座標のセット
     * @method set
     * @param {number} x x座標値
     * @param {number} y y座標値
     * @return {vector2}
     */

  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }

    /**
     * ベクトル座標の加算
     * @method add
     * @param {vector2} vec2 Vector2
     * @return {vector2}
     */

  }, {
    key: "add",
    value: function add(vec2) {
      this.x += vec2.x;
      this.y += vec2.y;
      return this;
    }

    /**
     * ベクトル座標の減算
     * @method sub
     * @param {vector2} vec2 Vector2
     * @return {vector2}
     */

  }, {
    key: "sub",
    value: function sub(vec2) {
      this.x -= vec2.x;
      this.y -= vec2.y;
      return this;
    }

    /**
     * ベクトル座標の乗算
     * @method mult
     * @param {number} num 乗数
     * @return {vector2}
     */

  }, {
    key: "mult",
    value: function mult(num) {
      this.x *= num;
      this.y *= num;
      return this;
    }

    /**
     * ベクトル座標の除算
     * @method div
     * @param {number} num 除数
     * @return {vector2}
     */

  }, {
    key: "div",
    value: function div(num) {
      this.x /= num;
      this.y /= num;
      return this;
    }

    /**
     * ベクトルの大きさを設定
     * @method setMag
     * @param {number} mag ベクトルの大きさ
     * @return {vector2}
     */

  }, {
    key: "setMag",
    value: function setMag(mag) {
      var vec2 = Vector2.radToVector2(this.angle(), mag);
      this.set(vec2.x, vec2.y);
      return this;
    }

    /**
     * ベクトル2乗を返す
     * @method magSq
     * @return {number} ベクトルの大きさ(長さ)の2乗を返す
     */

  }, {
    key: "magSq",
    value: function magSq() {
      return this.x * this.x + this.y * this.y;
    }

    /**
     * ベクトルの大きさ(長さ)を返す
     * @method mag
     * @return {number} ベクトルの大きさ(長さ)を返す
     */

  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(this.magSq(this.x, this.y));
    }

    /**
     * ベクトルのアングル(angle mode指定)取得
     * @method angle
     * @return {number} アングルを返す
     */

  }, {
    key: "angle",
    value: function angle() {
      return Math.atan2(this.y, this.x);
    }

    /**
     * ベクトルのアングル(angle mode指定)をセットする
     * @method setAngle
     * @param {number} angle radianかdegrees値(angle mode指定)
     * @return {vector2}
     */

  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      var vec2 = Vector2.radToVector2(angle, this.mag());
      this.set(vec2.x, vec2.y);
      return this;
    }

    /**
     * ベクトルのアングル(ラジアン角)を加算
     * @method addAngle
     * @param {number} angle 加算するangle量
     * @return {vector2}
     */

  }, {
    key: "addAngle",
    value: function addAngle(angle) {
      this.setAngle(this.angle() + angle);
      return this;
    }

    /**
     * ベクトルのアングル(ラジアン角)を減算
     * @method subAngle
     * @param {number} angle 減算するangle量
     * @return {vector2}
     */

  }, {
    key: "subAngle",
    value: function subAngle(angle) {
      this.setAngle(this.angle() - angle);
      return this;
    }

    /**
     * ベクトルのアングル(ラジアン角)の乗算
     * @method multAngle
     * @param {number} num 乗数
     * @return {vector2}
     */

  }, {
    key: "multAngle",
    value: function multAngle(num) {
      this.setAngle(this.angle() * num);
      return this;
    }

    /**
     * ベクトルのアングル(ラジアン角)の除算
     * @method divAngle
     * @param {number} num 除数
     * @return {vector2}
     */

  }, {
    key: "divAngle",
    value: function divAngle(num) {
      this.setAngle(this.angle() / num);
      return this;
    }

    /**
     * 正規化
     * @method normalize
     * @return {vector2}
     */

  }, {
    key: "normalize",
    value: function normalize() {
      var mag = this.mag();
      if (mag !== 0) {
        this.div(mag);
      }
      return this;
    }

    /**
     * 最大値の制限
     * @method limit
     * @param {number} max 最大値
     * @return {vector2}
     */

  }, {
    key: "limit",
    value: function limit(max) {
      if (max * max < this.magSq()) {
        this.normalize().mult(max);
      }
      return this;
    }

    /**
     * 線形補間
     * @method lerp
     * @param {vector2} vec2 Vector2
     * @param {number} amount amount量
     * @return {vector2}
     */

  }, {
    key: "lerp",
    value: function lerp(vec2, amount) {
      this.x += (vec2.x - this.x) * (amount || 0);
      this.y += (vec2.y - this.y) * (amount || 0);
      return this;
    }

    /**
     * 内積
     * @method dot
     * @param {vector2} vec2 Vector2
     * @return {number} ベクトルの内積
     */

  }, {
    key: "dot",
    value: function dot(vec2) {
      return Vector2.dot(this, vec2);
    }

    /**
     * 外積
     * @method dot
     * @param {vector2} vec2 Vector2
     * @return {number} ベクトルの外積
     */

  }, {
    key: "cross",
    value: function cross(vec2) {
      return Vector2.cross(this, vec2);
    }

    /* static
    --------------------------------------------------------------------------*/
    /**
     * ラジアン角から2Dベクトルを作成
     * @static
     * @method radToVector2
     * @param {number} rad radian
     * @param {number} mag ベクトルの大きさ
     * @return {vector2}
     */

  }, {
    key: "diffRad",


    ///==========================================================================
    /// Not Recommended
    ///==========================================================================
    /**
     * ベクトルのラジアン差分を返す
     * @method diffRad
     * @param {vector2} vec2 Vector2
     * @return {number}
     */
    value: function diffRad(vec2) {
      var rad1 = Math.atan2(this.y, this.x),
          rad2 = Math.atan2(vec2.y, vec2.x);
      return Math.abs(rad2 - rad1);
    }

    /**
     * ベクトルの角度差分を返す
     * @method diffDeg
     * @param {vector2} vec2 Vector2
     * @param {number} y y座標値
     * @return {number}
     */

  }, {
    key: "diffDeg",
    value: function diffDeg(vec2) {
      return this.diffRad(vec2) * __WEBPACK_IMPORTED_MODULE_0__utils__["d" /* RAD_TO_DEG */];
    }

    /**
     * 2つのベクトルの大きさの中間値を返す
     * @method betweenMag
     * @param {vector2} vec2 Vector2
     * @param {number} ratio 中間ポイント 0 < 1 初期値: 0.5
     * @return {number}
     */

  }, {
    key: "betweenMag",
    value: function betweenMag(vec2, ratio) {
      var mag1 = this.mag(),
          mag2 = vec2.mag();

      ratio = __WEBPACK_IMPORTED_MODULE_0__utils__["_4" /* isNumber */](ratio) ? ratio : 0.5;
      return mag1 + (mag2 - mag1) * ratio;
    }

    /**
     * 2つのベクトルの大きさの中間ラジアン値を返す
     * @method betweenRad
     * @param {vector2} vec2 Vector2
     * @param {number} ratio 中間ポイント 0 < 1 初期値: 0.5
     * @return {number}
     */

  }, {
    key: "betweenRad",
    value: function betweenRad(vec2, ratio) {
      var rad1 = Math.atan2(this.y, this.x),
          rad2 = Math.atan2(vec2.y, vec2.x);

      ratio = __WEBPACK_IMPORTED_MODULE_0__utils__["_4" /* isNumber */](ratio) ? ratio : 0.5;
      return rad1 + (rad2 - rad1) * ratio;
    }

    /**
     * 2つのベクトルの大きさの中間角を返す
     * @method betweenDeg
     * @param {vector2} vec2 Vector2
     * @param {number} ratio 中間ポイント 0 < 1 初期値: 0.5
     * @return {number}
     */

  }, {
    key: "betweenDeg",
    value: function betweenDeg(vec2, ratio) {
      return this.betweenRad(vec2, ratio) * __WEBPACK_IMPORTED_MODULE_0__utils__["d" /* RAD_TO_DEG */];
    }

    /**
     * 角度から2Dベクトルを作成
     * @static
     * @method degTo2d
     * @param {number} deg degrees
     * @param {number} mag ベクトルの大きさ
     * @return {vector2}
     */

  }], [{
    key: "radToVector2",
    value: function radToVector2(rad, mag) {
      return new Vector2(Math.cos(rad) * mag, Math.sin(rad) * mag);
    }

    /**
     * 角度から2Dベクトルを作成
     * @static
     * @method degToVector2
     * @param {number} deg degrees
     * @param {number} mag ベクトルの大きさ
     * @return {vector2}
     */

  }, {
    key: "degToVector2",
    value: function degToVector2(deg, mag) {
      return Vector2.radToVector2(deg * __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* DEG_TO_RAD */], mag);
    }

    /**
     * ランダムな2Dベクトルを作成
     * @static
     * @method random
     * @param {number} mag ベクトルの大きさ
     * @return {vector2}
     */

  }, {
    key: "random",
    value: function random(mag) {
      return Vector2.radToVector2(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] * Math.random(), mag);
    }

    /**
     * 座標の同値判定
     * @static
     * @method equals
     * @param {vector2} v1 Vector2
     * @param {vector2} v2 Vector2
     * @return {boolean}
     */

  }, {
    key: "equals",
    value: function equals(v1, v2) {
      return v1.x === v2.x && v1.y === v2.y;
    }

    /**
     * 2つのベクトル座標間のユーグリッド距離
     * @static
     * @method distance
     * @param {vector2} v1 Vector2
     * @param {vector2} v2 Vector2
     * @return {number} 2つのベクトル間のユーグリッド距離
     */

  }, {
    key: "distance",
    value: function distance(v1, v2) {
      var vec = new Vector2(v1.x, v1.y);
      return vec.sub(v2).mag();
    }

    /**
     * ベクトルの内積
     * @static
     * @method dot
     * @param {vector2} v1 Vector2
     * @param {vector2} v2 Vector2
     * @return {number} ベクトルの内積
     */

  }, {
    key: "dot",
    value: function dot(v1, v2) {
      return v1.x * v2.x + v1.y * v2.y;
    }

    /**
     * ベクトルの外積
     * @static
     * @method cross
     * @param {vector2} v1 Vector2
     * @param {vector2} v2 Vector2
     * @return {number} ベクトルの外積
     */

  }, {
    key: "cross",
    value: function cross(v1, v2) {
      return v1.x * v2.y - v1.y * v2.x;
    }

    /**
     * 別のベクトルに対する線形補間
     * @static
     * @method lerp
     * @param {vector2} v1 Vector2
     * @param {vector2} v2 Vector2
     * @param {number} amount amount量
     * @return {vector2}
     */

  }, {
    key: "lerp",
    value: function lerp(v1, v2, amount) {
      var v = v1.clone();
      v.leap(v2, amount);
      return v;
    }

    /**
     * 加算
     * @static
     * @param {vector2} v1
     * @param {vector2} v2
     * @returns
     * @memberof Vector2
     */

  }, {
    key: "add",
    value: function add(v1, v2) {
      var vec = new Vector2(v1.x, v1.y);
      return vec.add(v2);
    }

    /**
     * 減算
     * @static
     * @param {vector2} v1
     * @param {vector2} v2
     * @returns
     * @memberof Vector2
     */

  }, {
    key: "sub",
    value: function sub(v1, v2) {
      var vec = new Vector2(v1.x, v1.y);
      return vec.sub(v2);
    }

    /**
     * 乗算
     * @static
     * @param {vector2} vec2
     * @param {number} num
     * @returns
     * @memberof Vector2
     */

  }, {
    key: "mult",
    value: function mult(vec2, num) {
      var vec = new Vector2(vec2.x, vec2.y);
      return vec.mult(num);
    }

    /**
     * 除算
     * @static
     * @param {vector2} vec2
     * @param {number} num
     * @returns
     * @memberof Vector2
     */

  }, {
    key: "div",
    value: function div(vec2, num) {
      var vec = new Vector2(vec2.x, vec2.y);
      return vec.div(num);
    }

    /**
     * ベクトル2乗を返す
     * @static
     * @param {vector2} vec2
     * @returns
     * @memberof Vector2
     */

  }, {
    key: "magSq",
    value: function magSq(vec2) {
      return vec2.x * vec2.x + vec2.y * vec2.y;
    }

    /**
     * ベクトルの大きさ(長さ)を返す
     * @static
     * @param {vector2} vec2
     * @returns
     * @memberof Vector2
     */

  }, {
    key: "mag",
    value: function mag(vec2) {
      var vec = new Vector2(vec2.x, vec2.y);
      return vec.mag();
    }
  }, {
    key: "degToVector2",
    value: function degToVector2(deg, mag) {
      var vector = Vector2.radToVector2(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* degToRad */](deg), mag);
      vector.setAngleMode(true);
      return vector;
    }

    /**
     * ベクトルの角度を取得する
     * @static
     * @method angle
     * @param {vector2} vec2 Vector2
     * @return {number} アングルを返す
     */

  }, {
    key: "angle",
    value: function angle(vec2) {
      return Math.atan2(vec2.y, vec2.x);
    }

    /**
     * ベクトル間の角度
     * @static
     * @method angleBetween
     * @param {vector2} v1 Vector2
     * @param {vector2} v2 Vector2
     * @return {number} ラジアン角
     */

  }, {
    key: "angleBetween",
    value: function angleBetween(v1, v2) {
      return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
    }
  }]);

  return Vector2;
}();

/* harmony default export */ __webpack_exports__["a"] = (Vector2);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return ua; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isArray; });
/* harmony export (immutable) */ __webpack_exports__["h"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["p"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["B"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["D"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["F"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["M"] = isString;
/* harmony export (immutable) */ __webpack_exports__["G"] = isRegexp;
/* harmony export (immutable) */ __webpack_exports__["P"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["A"] = isNull;
/* harmony export (immutable) */ __webpack_exports__["z"] = isMultibyte;
/* harmony export (immutable) */ __webpack_exports__["m"] = isEmail;
/* harmony export (immutable) */ __webpack_exports__["C"] = isOS;
/* harmony export (immutable) */ __webpack_exports__["R"] = isWindows;
/* harmony export (immutable) */ __webpack_exports__["w"] = isMac;
/* harmony export (immutable) */ __webpack_exports__["u"] = isIos;
/* harmony export (immutable) */ __webpack_exports__["b"] = isAndroid;
/* harmony export (immutable) */ __webpack_exports__["k"] = isDevice;
/* harmony export (immutable) */ __webpack_exports__["E"] = isPC;
/* harmony export (immutable) */ __webpack_exports__["J"] = isSmartDevice;
/* harmony export (immutable) */ __webpack_exports__["K"] = isSmartPhone;
/* harmony export (immutable) */ __webpack_exports__["N"] = isTablet;
/* harmony export (immutable) */ __webpack_exports__["s"] = isIPhone;
/* harmony export (immutable) */ __webpack_exports__["r"] = isIPad;
/* harmony export (immutable) */ __webpack_exports__["t"] = isIPod;
/* harmony export (immutable) */ __webpack_exports__["e"] = isAndroidPhone;
/* harmony export (immutable) */ __webpack_exports__["f"] = isAndroidTablet;
/* harmony export (immutable) */ __webpack_exports__["i"] = isBrowser;
/* harmony export (immutable) */ __webpack_exports__["q"] = isIE;
/* harmony export (immutable) */ __webpack_exports__["l"] = isEdge;
/* harmony export (immutable) */ __webpack_exports__["j"] = isChrome;
/* harmony export (immutable) */ __webpack_exports__["o"] = isFirefox;
/* harmony export (immutable) */ __webpack_exports__["I"] = isSafari;
/* harmony export (immutable) */ __webpack_exports__["y"] = isMobileSafari;
/* harmony export (immutable) */ __webpack_exports__["c"] = isAndroidBrowser;
/* harmony export (immutable) */ __webpack_exports__["x"] = isMobileChrome;
/* harmony export (immutable) */ __webpack_exports__["v"] = isIosChrome;
/* harmony export (immutable) */ __webpack_exports__["d"] = isAndroidChrome;
/* harmony export (immutable) */ __webpack_exports__["Q"] = isWebkit;
/* harmony export (immutable) */ __webpack_exports__["n"] = isFileAPI;
/* harmony export (immutable) */ __webpack_exports__["H"] = isRequestFileSystem;
/* harmony export (immutable) */ __webpack_exports__["L"] = isStorage;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return isTouchScreen; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara


/**
 * @class Is
 * see: http://diveintohtml5.info/everything.html
 */

var object = {};
var toString = Object.prototype.toString;
var getProto = Object.getPrototypeOf;
var hasOwn = object.hasOwnProperty;

/**
 * ユーザーエージェント
 * @static
 * @property UA
 * @type {string}
 */
var UA = navigator.userAgent;

/**
 * ユーザーエージェント toLowerCase
 * @static
 * @property ua
 * @type {string}
 */
var ua = UA.toLowerCase();

/* isType
-----------------------------------------------------------------*/
/**
 * 配列型判定
 * @static
 * @method isArray
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
var isArray = Array.isArray || function (obj) {
  return toString.call(obj) === "[object Array]";
};

/**
 * 真偽型判定
 * @static
 * @method isBoolean
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isBoolean(obj) {
  return toString.call(obj) === "[object Boolean]";
};

/**
 * 関数型判定
 * @static
 * @method isFunction
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isFunction(obj) {
  return toString.call(obj) === "[object Function]";
};

/**
 * 数値型判定
 * @static
 * @method isNumber
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isNumber(obj) {
  return toString.call(obj) === "[object Number]";
};

/**
 * オブジェクト型判定
 * @static
 * @method isObject
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isObject(obj) {
  return !!obj && toString.call(obj) === "[object Object]";
};

/**
 * プレーンオブジェクト判定
 * @static
 * @method isPlainObject
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isPlainObject(obj) {
  // return isObject(obj) && Object.keys(obj).length === 0;
  var proto = void 0,
      ctor = void 0;

  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }

  proto = getProto(obj);

  if (!proto) {
    return true;
  }

  ctor = hasOwn.call(proto, "constructor") && proto.constructor;

  return typeof ctor === "function" && hasOwn.toString.call(ctor) === hasOwn.toString.call(Object);
};

/**
 * 文字列型判定
 * @static
 * @method isString
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isString(obj) {
  return toString.call(obj) === "[object String]";
};

/**
 * 正規表現判定
 * @static
 * @method isRegexp
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isRegexp(obj) {
  return toString.call(obj) === "[object RegExp]";
};

/**
 * undefined判定
 * @static
 * @method isUndefined
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isUndefined(obj) {
  return obj === void 0;
};

/**
 * null判定
 * @static
 * @method isNull
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
function isNull(obj) {
  return obj === null || toString.call(obj) === "[object Null]";
};

/**
 * マルチバイト文字列判定
 * @static
 * @method isMultibyte
 * @param  {string}  chara 一文字
 * @return {boolean}
 */
function isMultibyte(chara) {
  return '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.indexOf(chara) < 0;
};

/**
 * isEmail Email判定
 * @param  {string}  email メールアドレス
 * @return {boolean}
 */
function isEmail(email) {
  return email.match(/.+@.+\..+/) !== null;
};

/* OS
-----------------------------------------------------------------*/
/**
 * OS判定
 * @static
 * @method isOS
 * @param {string} os OS名 [windows, mac, ios, android]
 * @param {String|Number} ver バージョンナンバー Android ios のみ有効
 * @return {boolean}
 */
function isOS(os, ver) {
  var _os = os.toLowerCase();

  switch (_os) {
    case "windows":
      return isWindows(ver);
    case "mac":
      return isMac(ver);
    case "android":
      return isAndroid(ver);
    case "ios":
      return isIos(ver);
    default:
      throw new Error(_os + " is Invalid argument");
  }
};

/**
 * Windows判定
 * @static
 * @method isWindows
 * @param {Number|String} バージョン名[7, 8, 8.1, 10] 省略可
 * @return {boolean}
 */
function isWindows(ver) {
  if (ver) {
    // NT Ver. プロダクト名
    // NT 6.1  Windows 7/Windows Server 2008 R2
    // NT 6.2  Windows 8/Windows Server 2012
    // NT 6.3  Windows 8.1/Windows Server 2012 R2
    // NT 10.0 Windows 10

    var _ver = ua.split(" windows nt ")[1].split(";")[0];
    ver += ""; // cast String

    if (ver === "7") {
      return _ver === "6.1";
    } else if (ver === "8") {
      return _ver === "6.2";
    } else if (ver === "8.1") {
      return _ver === "6.3";
    } else if (ver === "10") {
      return _ver === "10.0";
    } else {
      return false;
    }
  } else {
    return ua.indexOf("windows") > -1;
  }
};

/**
 * Mac判定 ※isoは、含みません
 * @static
 * @method isMac
 * @param {Number|String} バージョンナンバー 省略可
 * @return {boolean}
 */
function isMac(ver) {
  if (isTouchScreen()) {
    return false;
  }
  if (ver) {
    var serial = ("" + ver).replace(/\./g, "_");
    return ua.indexOf("intel mac os x " + serial) > -1;
  } else {
    return ua.indexOf("intel mac os x ") > -1 && ua.indexOf("mobile") < 0;
  }
};

/**
 * ios判定
 * @static
 * @method isIos
 * @param {Number|String} バージョンナンバー 省略可
 * @return {boolean}
 */
function isIos(ver) {
  if (ver) {
    var serial = ("" + ver).replace(/\./g, "_");
    return ua.indexOf("like mac os x") > -1 && ua.indexOf("mobile") > -1 && ua.indexOf("os " + serial) > -1;
  } else {
    return ua.indexOf("like mac os x") > -1 && ua.indexOf("mobile") > -1;
  }
};

/**
 * Android判定
 * @static
 * @method isAndroid
 * @param {Number|String} バージョンナンバー 省略可
 * @return {boolean}
 */
function isAndroid(ver) {
  if (ver) {
    return ua.indexOf("android " + ver) > -1;
  } else {
    return ua.indexOf("android") > -1;
  }
};

/* Device
-----------------------------------------------------------------*/
/**
 * デバイス判定
 *
 * @static
 * @method isDevice
 * @param {string} device デバイス名<br>
 * デバイス名 | 引数文字列 <br>
 * PC (for Desktop) | pc <br>
 * Smart Device | sd, smartdevice <br>
 * Smart Phone | sp, smartphone <br>
 * Tablet | tb, tablet <br>
 * iPhone | iphone <br>
 * iPad | ipad <br>
 * iPod | ipod <br>
 * Android Phone | androidPhone <br>
 * Android Tablet | androidTablet
 * @return {boolean}
 */
function isDevice(device) {
  var _device = device.toLowerCase();

  if (_device === "pc") {
    return isPC();
  } else if (_device === "sd" || _device === "smartdevice") {
    return isSmartDevice();
  } else if (_device === "sp" || _device === "smartphone") {
    return isSmartPhone();
  } else if (_device === "tb" || _device === "tablet") {
    return isTablet();
  } else if (_device === "iphone") {
    return isIPhone();
  } else if (_device === "ipad") {
    return isIPad();
  } else if (_device === "ipod") {
    return isIPod();
  } else if (_device === "android") {
    return isAndroidPhone();
  } else if (_device === "androidtablet") {
    return isAndroidTablet();
  } else {
    throw new Error(_device + " is Invalid argument");
  }
};

/**
 * PC判定
 * @static
 * @method isPC
 * @return {boolean}
 */
function isPC() {
  return isWindows() || isMac();
};

/**
 * スマートデバイス判定
 * @static
 * @method isSmartDevice
 * @return {boolean}
 */
function isSmartDevice() {
  return isIos() || isAndroid();
};

/**
 * SmartPhone判定
 * @static
 * @method isSmartPhone
 * @return {boolean}
 */
function isSmartPhone() {
  return ua.indexOf("iphone") > -1 || isAndroid() && ua.indexOf("mobile") > -1;
};

/**
 * タブレット判定
 * @static
 * @method isTablet
 * @return {boolean}
 */
function isTablet() {
  return isIPad() || isAndroidTablet();
};

/**
 * iPhone判定
 * @static
 * @method isIPhone
 * @return {boolean}
 */
function isIPhone() {
  return ua.indexOf("iphone") > -1;
};

/**
 * iPad判定
 * @static
 * @method isIPad
 * @return {boolean}
 */
function isIPad() {
  var _isIpad = ua.indexOf("ipad") > -1;
  if (!_isIpad) {
    // MacOsでタッチができる場合
    _isIpad = isMac() && isTouchScreen();
  }
  return _isIpad;
};

/**
 * iPod判定
 * @static
 * @method isIPod
 * @return {boolean}
 */
function isIPod() {
  return ua.indexOf("ipod") > -1;
};

/**
 * AndroidPhone判定
 * @static
 * @method isAndroidPhone
 * @return {boolean}
 */
function isAndroidPhone() {
  return isAndroid() && ua.indexOf("mobile") > -1;
};

/**
 * AndroidTablet判定
 * @static
 * @method isAndroidTablet
 * @return {boolean}
 */
function isAndroidTablet() {
  return isAndroid() && ua.indexOf("mobile") < 0;
};

/* Browser
-----------------------------------------------------------------*/
/**
 * ブラウザ判定
 * @static
 * @method isBrowser
 * @param {string} key ブラウザ名<br>
 * ブラウザ名 | 引数文字列 <br>
 * Microsoft Edge | edge <br>
 * Internet Explorer | ie <br>
 * Google Chrome for PC| chrome <br>
 * Firefox for PC| firefox <br>
 * Mac Safari (for Desktop) | safari <br>
 * Opera (for Desktop) | opera <br>
 * ios Safari | mobileSafari <br>
 * Android Browser | android <br>
 * Mobile Chrome | mobilechrome <br>
 * ios Chrome | ioschrome <br>
 * Android Chrome | androidchrome <br>
 * Webkit Browser | webkit
 * @param {String | Number} ver バージョン (ie, mobileSafari, android) 省略可
 * @return {boolean}
 */
function isBrowser(browser, ver) {
  var _browser = browser.toLowerCase();

  if (_browser === "ie") {
    return isIE(ver);
  } else if (_browser === "edge") {
    return isEdge(ver);
  } else if (_browser === "chrome") {
    return isChrome(ver);
  } else if (_browser === "firefox") {
    return isFirefox(ver);
  } else if (_browser === "safari") {
    return isSafari(ver);
  } else if (_browser === "mobilesafari") {
    return isMobileSafari(ver);
  } else if (_browser === "android") {
    return isAndroidBrowser(ver);
  } else if (_browser === "mobilechrome") {
    return isMobileChrome(ver);
  } else if (_browser === "androidchrome") {
    return isAndroidChrome(ver);
  } else if (_browser === "isochrome") {
    return isIosChrome(ver);
  } else if (_browser === "webkit") {
    return isWebkit();
  } else {
    throw new Error(_browser + " is Invalid argument");
  }
};

/**
 * IE判定
 * @static
 * @method isIE
 * @param {number}  ver バージョンナンバー 省略可
 * @return {boolean}
 */
function isIE(ver) {
  if (ver) {
    return ua.indexOf("msie " + ver) > -1 || ua.indexOf("trident") > -1 && ua.indexOf("rv:" + ver) > -1;
  } else {
    return ua.indexOf("msie") > -1 || ua.indexOf("trident") > -1;
  }
};

// NOTE: edgeがChromium採用予定なので判定処理をアップデート予定
/**
 * Microsoft Edge判定
 * @static
 * @method isEdge
 * @param {Number|String}  ver バージョン名
 * @return {boolean}
 */
function isEdge() {
  var ver = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (ua.indexOf("edg/") > -1) {
    // chrome edge
    return ua.indexOf("edg/" + ver) > -1;
  } else {
    // old edge
    return ua.indexOf("edge/" + ver) > -1;
  }
};

/**
 * PC版 Chrome判定
 * @static
 * @method isChrome
 * @return {boolean}
 */
function isChrome(ver) {
  if (ver) {
    return ua.indexOf("chrome/" + ver) > -1 && ua.indexOf("mobile") < 0;
  } else {
    return ua.indexOf("chrome") > -1 && ua.indexOf("mobile") < 0;
  }
};

/**
 * PC版 Firefox判定
 * @static
 * @method isFirefox
 * @return {boolean}
 */
function isFirefox(ver) {
  if (ver) {
    return ua.indexOf("firefox/" + ver) > -1 && ua.indexOf("mobile") < 0;
  } else {
    return ua.indexOf("firefox") > -1 && ua.indexOf("mobile") < 0;
  }
};

/**
 * PC版 Safari判定
 * @static
 * @method isSafari
 * @return {boolean}
 */
function isSafari(ver) {
  if (ver) {
    return ua.indexOf("safari") > -1 && ua.indexOf("mobile") < 0 && !isChrome() && ua.indexOf("version/" + ver) > -1;
  } else {
    return ua.indexOf("safari") > -1 && ua.indexOf("mobile") < 0 && !isChrome();
  }
};

/**
 * MobileSafari判定
 * @static
 * @method isMobileSafari
 * @param {Number|String} ver バージョンナンバー  省略可
 * @return {boolean}
 */
function isMobileSafari(ver) {
  if (ver) {
    return isIos(ver) && ua.indexOf("safari") > -1;
  } else {
    return isIos() && ua.indexOf("safari") > -1;
  }
};

/**
 * Android標準Browser判定
 * @static
 * @method isAndroidBrowser
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {boolean}
 */
function isAndroidBrowser(ver) {
  if (ver) {
    return isAndroid(ver) && ua.indexOf("safari") > -1;
  } else {
    return isAndroid() && ua.indexOf("safari") > -1;
  }
};

/**
 * Mobile Chrome判定
 * @static
 * @method isMobileChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {boolean}
 */
function isMobileChrome(ver) {
  return isIosChrome(ver) || isAndroidChrome(ver);
};

/**
 * ios Chrome判定
 * @static
 * @method isIosChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {boolean}
 */
function isIosChrome(ver) {
  if (ver) {
    return isIos() && ua.indexOf("crios/" + ver) > -1;
  } else {
    return isIos() && ua.indexOf("crios/") > -1;
  }
};

/**
 * Android Chrome判定
 * @static
 * @method isAndroidChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {boolean}
 */
function isAndroidChrome(ver) {
  if (ver) {
    return isAndroid() && ua.indexOf("chrome/" + ver) > -1;
  } else {
    return isAndroid() && ua.indexOf("chrome/") > -1;
  }
};

/**
 * webkit ブラウザ判定
 * @static
 * @method isWebkit
 * @return {boolean}
 */
function isWebkit() {
  return ua.indexOf("webkit") > -1;
};

/* Utility
-----------------------------------------------------------------*/
/**
 * File APIの有無
 * @static
 * @method isFileAPI
 * @return {boolean}
 */
function isFileAPI() {
  return !!(window.File && window.FileReader && window.FileList && window.Blob);
};

/**
 * RequestFileSystemの有無
 * @static
 * @method isRequestFileSystem
 * @return {boolean}
 */
function isRequestFileSystem() {
  return !!(window.requestFileSystem || window.webkitRequestFileSystem);
};

/**
 * Storage機能が使えるか判定
 * @static
 * @method isStorage
 * @return {boolean}
 */
function isStorage() {
  var isStorage = "sessionStorage" in window && "localStorage" in window;

  if (isStorage) {
    try {
      localStorage.setItem("_INKJS_", 1);
    } catch (err) {
      isStorage = false;
    }
    if (isStorage) {
      localStorage.removeItem("_INKJS_");
    }
  }
  return isStorage;
};

/**
 * TouchScreen判定
 * @static
 * @method isTouchScreen
 * @return {boolean}
 */
var isTouchScreen = function () {
  var isTouchScreen = void 0,
      div = document.createElement("div");

  div.setAttribute("ontouchstart", "return");
  isTouchScreen = typeof div.ontouchstart === "function";

  return function () {
    return isTouchScreen;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return argsToArray; });
/* harmony export (immutable) */ __webpack_exports__["b"] = each;
/* harmony export (immutable) */ __webpack_exports__["c"] = findMax;
/* harmony export (immutable) */ __webpack_exports__["d"] = findMin;
/* harmony export (immutable) */ __webpack_exports__["e"] = shuffle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(2);
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * @class Array
 */

/**
 * argumentsを配列に変換して返す
 * スライス位置を指定して切り取り可能
 * @static
 * @method argsToArray
 * @param {arguments} args arguments
 * @param {number} index スライスする切り取り開始位置
 * @param {number} lastIndex スライスする切り取り終了位置
 * @type {array} argumentsを配列に変換して返す
 */
var argsToArray = function () {
	var slice = Array.prototype.slice;

	return function (args) {
		var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var lastIndex = arguments[2];

		lastIndex = lastIndex || args.length;
		return slice.call(args, index, lastIndex);
	};
}();

/**
 * each
 * @static
 * @method each
 * @param {Array|Object|Number} obj eachを行うオブジェクト、または回数
 * @param {function} callback イテレーション毎のコールバック関数
 * @return {object} 第一引数に渡されたオブジェクト
 */
function each(obj, callback) {
	var isContinue = void 0,
	    i = void 0;

	if (__WEBPACK_IMPORTED_MODULE_0__is__["g" /* isArray */](obj)) {
		var l = obj.length;
		i = 0;
		for (; i < l; i += 1) {
			isContinue = callback.call(obj[i], obj[i], i, obj);
			if (isContinue === false) {
				break;
			}
		}
	} else if (__WEBPACK_IMPORTED_MODULE_0__is__["D" /* isObject */](obj) || __WEBPACK_IMPORTED_MODULE_0__is__["p" /* isFunction */](obj)) {
		for (i in obj) {
			isContinue = callback.call(obj[i], obj[i], i, obj);
			if (isContinue === false) {
				break;
			}
		}
	} else if (__WEBPACK_IMPORTED_MODULE_0__is__["B" /* isNumber */](obj)) {
		i = 0;
		for (; i < obj; i += 1) {
			isContinue = callback.call(null, i, i, obj);
			if (isContinue === false) {
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
 * @param  {array} nums 数値を格納した配列
 * @return {number}
 */
function findMax(nums) {
	return Math.max.apply(null, nums);
};

/**
 * 配列から最小値を探す
 * @static
 * @method findMin
 * @param  {array} nums 数値を格納した配列
 * @return {number}
 */
function findMin(nums) {
	return Math.min.apply(null, nums);
};

/**
 * 配列をシャッフルして返す
 * @static
 * @method shuffle
 * @param {array} ary シャッフルする配列
 * @return {array} 配列をシャッフルして返す
 */
function shuffle(ary) {
	return ary.sort(function () {
		return Math.random() - 0.5;
	});
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * @class Point2 - 2Dベクトル・座標を管理します
 * @param {number|Object} x x座標値 default 0
 * @param {number} y y座標値 default 0
 */

var Point2 = function () {
	/**
  * constructor
  */
	function Point2() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, Point2);

		if (__WEBPACK_IMPORTED_MODULE_0__utils__["_6" /* isObject */](x)) {
			x = x.x || 0;
			y = x.y || 0;
		}

		/**
   * X座標
   * @property x
   * @type {number}
   */
		this.x = x;

		/**
   * Y座標
   * @property y
   * @type {number}
   */
		this.y = y;
	}

	/*--------------------------------------------------------------------------
 	@method
 --------------------------------------------------------------------------*/
	/**
  * Point2のcloneを生成します
  * @method clone
  * @return {vector2}
  */


	_createClass(Point2, [{
		key: "clone",
		value: function clone() {
			return new Point2(this.x, this.y);
		}

		/**
   *
   *
   * @param {*} x
   * @param {*} y
   * @memberof Point2
   */

	}, {
		key: "set",
		value: function set(x, y) {
			this.x = x;
			this.y = y;
		}

		/**
   *
   *
   * @param {*} point
   * @returns
   * @memberof Point2
   */

	}, {
		key: "equals",
		value: function equals(point) {
			return this.x === point.x && this.y === point.y;
		}
	}]);

	return Point2;
}();

/* harmony default export */ __webpack_exports__["a"] = (Point2);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * @class Events
 * @constructor
 * @example
 *   var events = new Events();
 *
 *   // on<br>
 *   events.on('change', listener);<br>
 *   events.on('change.type', listener);<br>
 *
 *   // off<br>
 *   events.off('change');<br>
 *   events.off('change', listener);<br>
 *   events.off();<br>
 *
 *   // trigger<br>
 *   events.trigger('change');<br>
 *   events.trigger('change.type');
 */

var Events = function () {
	/**
  * constructor
  */
	function Events() {
		_classCallCheck(this, Events);

		/**
   * id
   * @private
   * @property _id
   * @type {string}
   */
		this._id = __WEBPACK_IMPORTED_MODULE_0__utils__["l" /* createId */]();

		/**
   * イベントリスナーを連想配列で格納します
   * @private
   * @property _listeners
   * @type {object}
   * @example
   *   _listeners[eventName] = [{
   *      attr    : eventObj.attr, <br>
   *      listener: listener, <br>
   *      context : context <br>
   *   }]
   */
		this._listeners = {};
	}

	/**
  * イベント登録
  * イベント名に属性名を付与するも可能
  * @method on
  * @param {string} type イベントタイプ
  * @param {function} listener イベントリスナー
  * @param {object} context コンテキスト
  * @return {Events}
  */


	_createClass(Events, [{
		key: 'on',
		value: function on(type, listener, context) {
			this._addEvent(type, listener, context);
			return this;
		}

		/**
   * 1度だけ実行するイベント登録
   * @method onece
   * @param {string} type イベントタイプ
   * @param {function} listener イベントリスナー
   * @param {object} context コンテキスト
   * @return {Events}
   */

	}, {
		key: 'onece',
		value: function onece(type, listener, context) {
			var _this = this,
			    _arguments = arguments;

			this.on(type, function () {
				_this.off(type);
				listener.apply(_this, _arguments);
			}, context);

			return this;
		}

		/**
   * イベント削除
   * type省略時は、全てのイベントを削除<br>
   * listener省略時は、指定イベントタイプ全て削除
   *
   * @method off
   * @param {string} type イベントタイプ 省略可
   * @param {function} listener イベントリスナー 省略可
   * @return {Events}
   */

	}, {
		key: 'off',
		value: function off(type, listener) {
			this._removeEvent(type, listener);
			return this;
		}

		/**
   * イベント追加
   * @private
   * @method _addEvent
   * @param {string} type イベントタイプ
   * @param {function} listener コールバック関数
   * @param {object} context コンテキスト
   * @return {Void}
   */

	}, {
		key: '_addEvent',
		value: function _addEvent(type, listener, context) {
			var _this2 = this;

			var events = type.split(' ');
			if (__WEBPACK_IMPORTED_MODULE_0__utils__["R" /* isFunction */](listener)) {
				__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](events, function (item) {
					var eventObj = _this2._getEventNameMap(item);
					_this2._listeners[eventObj.type] = _this2._listeners[eventObj.type] || [];
					_this2._listeners[eventObj.type].push({
						attr: eventObj.attr,
						listener: listener,
						context: context
					});
				});
			}
		}

		/**
   * イベント削除
   * @private
   * @method _removeEvent
   * @param {string} type イベントタイプ
   * @param {function} listener コールバック関数
   * @return {Void}
   */

	}, {
		key: '_removeEvent',
		value: function _removeEvent(type, listener) {
			var _this3 = this;

			var events = type ? type.split(' ') : [],
			    ary = null,
			    listeners = void 0;

			listener = __WEBPACK_IMPORTED_MODULE_0__utils__["v" /* getFunctionName */](listener);

			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](events, function (event) {
				var eventObj = _this3._getEventNameMap(event);

				if (eventObj && eventObj.attr && _this3._listeners[eventObj.type]) {
					// イベント属性指定がある場合
					listeners = _this3._listeners[eventObj.type];

					__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](listeners, function (item) {
						if (item.attr !== eventObj.attr) {
							if (listener) {
								if (listener !== __WEBPACK_IMPORTED_MODULE_0__utils__["v" /* getFunctionName */](item.listener)) {
									ary = ary || [];
									ary.push(item);
								}
							} else {
								ary = ary || [];
								ary.push(item);
							}
						}
					});

					_this3._listeners[eventObj.type] = ary;
				} else if (eventObj) {
					// イベントタイプ指定ある場合
					if (listener) {
						listeners = _this3._listeners[eventObj.type];

						__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](listeners, function (item) {
							if (listener !== __WEBPACK_IMPORTED_MODULE_0__utils__["v" /* getFunctionName */](item.listener)) {
								ary = ary || [];
								ary.push(item);
							}
						});
					}

					_this3._listeners[eventObj.type] = ary;
				} else {
					// イベント全て削除
					_this3._listeners = null;
					_this3._listeners = {};
				}
			});
		}

		/**
   * イベント名、イベント属性を連想配列にして返す
   * @private
   * @method _getEventNameMap
   * @param {string} type イベントタイプ
   * @return {object}
   */

	}, {
		key: '_getEventNameMap',
		value: function _getEventNameMap(type) {
			var events = type.split('.');
			return {
				type: events[0],
				attr: events[1]
			};
		}

		/**
   * 登録イベントがあるか判定します
   * @method hasEvent
   * @param {string} type イベントタイプ
   * @return {boolean}
   */

	}, {
		key: 'hasEvent',
		value: function hasEvent(type) {
			var flag = false,
			    events = this._getEventNameMap(type),
			    listeners = this._listeners[events.type];

			// イベントリスナーの有無
			if (listeners) {
				// 属性指定がある場合
				if (events.attr) {
					__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](listeners, function (item) {
						if (item.attr === events.attr) {
							flag = true;
							return false;
						}
					});
				} else {
					flag = true;
				}
			}
			return flag;
		}

		/**
   * イベント発行
   * 第二引数以降に値を渡すとcallbackに引数として渡します
   * @method trigger
   * @param {string} type イベントタイプ
   * @return {Events}
   */

	}, {
		key: 'trigger',
		value: function trigger(type) {
			var events = this._getEventNameMap(type),
			    listeners = this._listeners[events.type],
			    args = __WEBPACK_IMPORTED_MODULE_0__utils__["g" /* argsToArray */](arguments, 1);

			if (listeners) {
				__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](listeners, function (item) {
					if (!events.attr || item.attr === events.attr) {
						item.listener.apply(item.context, args);
					}
				});
			}
			return this;
		}
	}]);

	return Events;
}();

/* harmony default export */ __webpack_exports__["a"] = (Events);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Line__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Point2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Polygon__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Vector2__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara







/**
 * @class Circle
 * @param  {number} x      x座標
 * @param  {number} y      y座標
 * @param  {number} radius 半径
 */

var Circle = function (_Point) {
	_inherits(Circle, _Point);

	/**
  * constructor
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @memberof Circle
 */
	function Circle(x, y, radius) {
		_classCallCheck(this, Circle);

		/**
   * 半径
   * @property radius
   * @type {number}
   */
		var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, x, y));
		/**
   * x
   * @property x
   * @type {number}
   */
		/**
   * y
   * @property x
   * @type {number}
   */


		_this.radius = radius;
		return _this;
	}

	/*--------------------------------------------------------------------------
 	@method
 --------------------------------------------------------------------------*/
	/**
  * クローンを生成
  * @method clone
  * @return {Circle}
  */


	_createClass(Circle, [{
		key: "clone",
		value: function clone() {
			return new Circle(this.x, this.y, this.radius);
		}

		/* static
  --------------------------------------------------------------------------*/
		/**
   * ラジアンと半径から円弧を求める
   * @static
   * @method radToArc
   * @param {number} rad ラジアン
   * @param {number} radius 半径
   * @return {number} 円弧
   */

	}], [{
		key: "radToArc",
		value: function radToArc(rad, radius) {
			return __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] * radius * (rad / __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */]);
		}

		/**
   * 円周の現在の位置を返す
   * @static
   * @method betweenArc
   * @param  {number} radius        半径
   * @param  {number} startAngle    開始アングル
   * @param  {number} endAngle      終了アングル
   * @param  {number} tick          座標ポイント比 0-1の値
   * @return {Vector}
   */

	}, {
		key: "betweenArc",
		value: function betweenArc(radius, startAngle, endAngle, tick) {
			var angle = (endAngle - startAngle) * tick;
			return new __WEBPACK_IMPORTED_MODULE_2__Point2__["a" /* default */](Math.cos(angle) * radius, Math.sin(angle) * radius);
		}

		/**
   * 円周を分割して座標を配列格納して返します
   * @static
   * @method circumference
   * @param  {number}   radius   半径
   * @param  {number}   split    分割数
   * @param  {number}   angle    スタートアングル
   * @param  {boolean}   isCCW   反時計回り
   * @param  {function} callback コールバック関数
   * @return {array}
   */

	}, {
		key: "circumference",
		value: function circumference(split, radius, angle, isCCW, callback) {
			callback = callback || function () {};

			var points = [],
			    rad = __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] / split,
			    flag = false,
			    _angle = 0;

			angle = __WEBPACK_IMPORTED_MODULE_0__utils__["_4" /* isNumber */](angle) ? angle : 0;

			if (isCCW) {
				rad *= -1;
			}

			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](split, function (i) {
				_angle = i * rad + angle;
				points[i] = new __WEBPACK_IMPORTED_MODULE_2__Point2__["a" /* default */](Math.cos(_angle) * radius, Math.sin(_angle) * radius);

				if (!flag) {
					flag = callback(i, points[i]);
				}
				if (flag) {
					return false;
				}
			});

			return points;
		}

		/**
   * 衝突判定
   * @static
   * @method isCollision
   * @param  {Circle}  circle1 Circle1
   * @param  {Circle}  circle2 Circle2
   * @return {boolean}
   */

	}, {
		key: "isCollision",
		value: function isCollision(circle1, circle2) {
			var vec = new __WEBPACK_IMPORTED_MODULE_4__Vector2__["a" /* default */](circle1.x, circle1.y);
			var diff = vec.sub(circle2);
			return diff.mag() <= circle1.radius + circle2.radius;
		}

		/**
   * 座標を含んでいるか
   * @static
   * @method inPoint
   * @param  {Circle}  circle Circle
   * @param  {vector2} position Vector2
   * @return {boolean}
   */

	}, {
		key: "inPoint",
		value: function inPoint(circle, point) {
			var diff = __WEBPACK_IMPORTED_MODULE_4__Vector2__["a" /* default */].sub(circle, point);
			return diff.mag() < circle.radius;
		}

		/**
   * inLine
   * 円と線が交錯しているか
   *
   * @static
   * @param {*} circle
   * @param {*} line
   * @returns
   * @memberof Circle
   */

	}, {
		key: "inLine",
		value: function inLine(circle, line) {
			var inLine = false;
			var a = new __WEBPACK_IMPORTED_MODULE_4__Vector2__["a" /* default */](line.points[0].x, line.points[0].y);
			var b = new __WEBPACK_IMPORTED_MODULE_4__Vector2__["a" /* default */](line.points[1].x, line.points[1].y);
			var p = new __WEBPACK_IMPORTED_MODULE_4__Vector2__["a" /* default */](circle.x, circle.y);

			// ベクトル生成
			var ab = b.clone().sub(a);
			var abDist = ab.mag();
			var ap = p.clone().sub(a);
			var apDist = ap.mag();
			var bp = p.clone().sub(b);
			var bpDist = bp.mag();
			var abNorm = ab.normalize();
			var lenAX = abNorm.dot(ap);

			//線分APとPの最短距離
			var shortestDistance = void 0;

			if (lenAX < 0) {
				//AXが負なら APが円の中心までの最短距離
				shortestDistance = apDist;
			} else if (lenAX > abDist) {
				//AXがAPよりも長い場合は、BPが円の中心までの最短距離
				shortestDistance = bpDist;
			} else {
				//PがAB上にあるので、PXが最短距離
				//単位ベクトルABとベクトルAPの外積で求める
				shortestDistance = Math.abs(abNorm.cross(ap));
			}

			if (shortestDistance < circle.radius) {
				// let v2 = new Vector2(a.x + (abNorm.x * lenAX), a.y + (abNorm.y * lenAX));
				//最短距離が円の半径よりも小さい場合は、当たり
				inLine = true;
			}

			return inLine;
		}

		/**
   *
   *
   * @static
   * @param {*} circle
   * @param {*} rect
   * @returns
   * @memberof Circle
   */

	}, {
		key: "inRectangle",
		value: function inRectangle(circle, rect) {
			var hasX = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect.x - circle.radius, rect.x + rect.width + circle.radius, circle.x, circle.x);
			var hasY = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect.y - circle.radius, rect.y + rect.height + circle.radius, circle.y, circle.y);

			// 1 大雑把な領域で判定
			// ・rを足した領域がポイントに含まれるか
			// ・含まれなければfalseで抜ける
			// 2. 入っていれば厳密に判定する
			if (hasX && hasY) {
				var a = new Circle(rect.x, rect.y, circle.radius);
				var b = new Circle(rect.x, rect.y + rect.height, circle.radius);
				var c = new Circle(rect.x + rect.width, rect.y, circle.radius);
				var d = new Circle(rect.x + rect.width, rect.y + rect.height, circle.radius);
				var _hasX = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect.x, rect.x + rect.width, circle.x, circle.x);
				var _hasY = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect.y, rect.y + rect.height, circle.y, circle.y);

				// a, b, c, d
				if (_hasX || _hasY || Circle.inPoint(a, circle) || Circle.inPoint(b, circle) || Circle.inPoint(c, circle) || Circle.inPoint(d, circle)) {
					return true;
				}
			}

			return false;
		}

		/**
   *
   *
   * @static
   * @param {*} circle
   * @param {*} polygon
   * @returns
   * @memberof Circle
   */

	}, {
		key: "inPolygon",
		value: function inPolygon(circle, polygon) {
			var inPolygon = false;
			var point = new __WEBPACK_IMPORTED_MODULE_2__Point2__["a" /* default */]();
			var line = new __WEBPACK_IMPORTED_MODULE_1__Line__["a" /* default */](point.clone(), point.clone());
			var l = polygon.points.length;

			for (var i = 0; i < l; i += 1) {
				var _line = line.clone().setPoint({
					x: polygon.points[i % l].x,
					y: polygon.points[i % l].y
				}, {
					x: polygon.points[(i + 1) % l].x,
					y: polygon.points[(i + 1) % l].y
				});

				inPolygon = inLine(circle, _line);

				if (inPolygon) {
					return inPolygon;
				}
			}

			// 頂点を含むか
			if (!inPolygon) {
				inPolygon = __WEBPACK_IMPORTED_MODULE_3__Polygon__["a" /* default */].inPoint(polygon, circle);
			}

			return inPolygon;
		}
	}]);

	return Circle;
}(__WEBPACK_IMPORTED_MODULE_2__Point2__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Circle);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector2__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara




/**
 * @class Line
 * @param {vector2} vec1 開始座標オブジェクト
 * @param {vector2} vec2 終了座標オブジェクト
 */

var Line = function () {
	/**
  * constructor
  */
	function Line(point1, point2) {
		_classCallCheck(this, Line);

		/**
   * 頂点リスト
   * @property vertices
   * @type {array}
   */
		this.points = [point1, point2];
	}

	/*--------------------------------------------------------------------------
 	@method
 --------------------------------------------------------------------------*/
	/**
  * Lineのクローンを生成します
  * @method clone
  * @return {Line}
  */


	_createClass(Line, [{
		key: "clone",
		value: function clone() {
			return new Line(this.points[0], this.points[1]);
		}

		/**
   * Lineの始点・終点をセットします
   * @method setPoint
   * @param {vector2} v1 開始座標オブジェクト
   * @param {vector2} v2 終了座標オブジェクト
   */

	}, {
		key: "setPoint",
		value: function setPoint(point1, point2) {
			this.points[0] = point1 || this.points[0];
			this.points[1] = point2 || this.points[1];
			return this;
		}

		/**
   * スタートからエンドポイントの距離(大きさ)
   * @method mag
   * @return {number}
   */

	}, {
		key: "mag",
		value: function mag() {
			var vec = new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */](this.points[0].x, this.points[0].y);
			return vec.sub(this.points[1]).mag();
		}

		/**
   * Lineのアングル(ラジアン角)を返します
   * @method angle
   * @return {number}
   */

	}, {
		key: "angle",
		value: function angle() {
			var vec = new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */](this.points[0].x, this.points[0].y);
			vec.add({
				x: this.points[1].x - this.points[0].x,
				y: this.points[1].y - this.points[0].y
			});
			return vec.angle();
		}

		/* static
  --------------------------------------------------------------------------*/
		/**
  	* 二つの直線(延長線含む)の交差点を返します
  	* 交差点がない場合、nullを返します
  	* @static
  	* @method intersection
  	* @param {Line} line1 Lineインスタンス1
  	* @param {Line} line2 Lineインスタンス2
  	* @return {vector2} 交差点座標オブジェクト
  	*/

	}], [{
		key: "intersection",
		value: function intersection(line1, line2) {
			var p1 = line1.points[0],
			    p2 = line1.points[1],
			    p3 = line2.points[0],
			    p4 = line2.points[1];

			var ax = p2.x - p1.x,
			    ay = p2.y - p1.y,
			    bx = p4.x - p3.x,
			    by = p4.y - p3.y,
			    cx = p3.x - p1.x,
			    cy = p3.y - p1.y;

			var cross1 = bx * cy - by * cx,
			    cross2 = bx * ay - by * ax;

			if (!cross2) {
				return null;
			}

			var t = cross1 / cross2,
			    x = p1.x + ax * t,
			    y = p1.y + ay * t;

			return new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */](x, y);
		}

		/**
   * 直線の交点を返します
   * @static
   * @method cross
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @return {vector2} 交差点座標オブジェクト
   */

	}, {
		key: "cross",
		value: function cross(line1, line2) {
			if (Line.isIntersection(line1, line2)) {
				return Line.intersection(line1, line2);
			} else {
				return null;
			}
		}

		/**
   * 二つの直線が交わるかチェックします(延長線は含まない)
   * @static
   * @method intersection
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @return {boolean}
   */

	}, {
		key: "isIntersection",
		value: function isIntersection(line1, line2) {
			var p = Line.intersection(line1, line2);

			if (p === null) {
				return false;
			}

			var p1 = line1.points[0],
			    p2 = line1.points[1],
			    p3 = line2.points[0],
			    p4 = line2.points[1],
			    a = (p.x - p1.x) * (p.x - p2.x) + (p.y - p1.y) * (p.y - p2.y) <= 0,
			    b = (p.x - p3.x) * (p.x - p4.x) + (p.y - p3.y) * (p.y - p4.y) <= 0;

			return a && b;
		}

		/**
   * 二つの直線が等しいかチェックします
   * @static
   * @method equals
   * @param {Line} line1 Lineインスタンス1
   * @param {Line} line2 Lineインスタンス2
   * @param {boolean} isBoth もしくはstart、endが逆方向でマッチした場合も判定するか
   * @return {boolean}
   */

	}, {
		key: "equals",
		value: function equals(line1, line2, isBoth) {
			var flag = __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.points[0], line2.points[0]) && __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.points[1], line2.points[1]);

			if (isBoth && !flag) {
				flag = __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.points[1], line2.points[0]) && __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.points[0], line2.points[1]);
			}

			return flag;
		}
	}]);

	return Line;
}();

/* harmony default export */ __webpack_exports__["a"] = (Line);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point2__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * @class Polygon
 */

var Polygon = function () {
	/**
  * constructor
  * @param {array} points Pointリスト
  */
	function Polygon(points) {
		_classCallCheck(this, Polygon);

		this.points = points;
	}

	/*--------------------------------------------------------------------------
 	@method
 --------------------------------------------------------------------------*/
	/**
  * clone
  *
  * @returns {rectangle}
  * @memberof Polygon
  */


	_createClass(Polygon, [{
		key: "clone",
		value: function clone() {
			return new Polygon(this.points);
		}

		/* static
  --------------------------------------------------------------------------*/
		/**
   * NOTE: 線分の工作判定はいるのか？
   *
   * @static
   * @param {*} polygonA
   * @param {*} polygonB
   * @returns
   * @memberof Polygon
   */

	}], [{
		key: "isCollision",
		value: function isCollision(polygonA, polygonB) {
			var isCollision = false;

			// polygonA
			for (var i = 0; i < polygonA.points.length; i += 1) {
				var point = new __WEBPACK_IMPORTED_MODULE_0__Point2__["a" /* default */](polygonA.points[i].x, polygonA.points[i].y);
				isCollision = Polygon.inPoint(polygonB, point);

				if (isCollision) {
					return isCollision;
				}
			}

			// polygonB
			for (var j = 0; j < polygonB.points.length; j += 1) {
				var _point = new __WEBPACK_IMPORTED_MODULE_0__Point2__["a" /* default */](polygonB.points[j].x, polygonB.points[j].y);
				isCollision = Polygon.inPoint(polygonA, _point);

				if (isCollision) {
					return isCollision;
				}
			}

			return isCollision;
		}

		/**
   *
   *
   * @static
   * @param {*} polygon
   * @param {*} point
   * @returns
   * @memberof Polygon
   */

	}, {
		key: "inPoint",
		value: function inPoint(polygon, point) {
			var deg = 0;
			var points = polygon.points;
			var l = points.length;

			for (var i = 0; i < l; i++) {
				var p2x = points[i % l].x;
				var p2y = points[i % l].y;
				var p3x = points[(i + 1) % l].x;
				var p3y = points[(i + 1) % l].y;
				var ax = p2x - point.x;
				var ay = p2y - point.y;
				var bx = p3x - point.x;
				var by = p3y - point.y;
				var cos = (ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by));
				deg += Math.acos(cos) * RAD_TO_DEG;
			}

			if (Math.round(deg) == 360) {
				return true;
			} else {
				return false;
			}
		}
	}]);

	return Polygon;
}();

/* harmony default export */ __webpack_exports__["a"] = (Polygon);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara






/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * Triangle
 *
 * @class Triangle
 * @constructor
 * @param {vector2} vertexA 頂点A
 * @param {vector2} vertexB 頂点B
 * @param {vector2} vertexC 頂点C
 */

var Triangle = function () {
  /**
   * constructor
   */
  function Triangle(pointA, pointB, pointC) {
    _classCallCheck(this, Triangle);

    /**
     * 頂点データ
     * @property points
     * @type {array}
     */
    this.points = [pointA, pointB, pointC];
  }

  /*--------------------------------------------------------------------------
  	@method
  --------------------------------------------------------------------------*/
  /**
   * クローンを生成
   *
   * @method clone
   * @return {Triangle}
   */


  _createClass(Triangle, [{
    key: 'clone',
    value: function clone() {
      return new Triangle(this.points[0], this.points[1], this.points[2]);
    }

    /* static
    --------------------------------------------------------------------------*/
    /**
     * 3点の座標から外接円を求めます
     *
     * @static
     * @method outerCircle
     * @param {vector2} vertexA 頂点A
     * @param {vector2} vertexB 頂点B
     * @param {vector2} vertexC 頂点C
     * @return {Circle} 中心座標、半径の円データ
     */

  }], [{
    key: 'outerCircle',
    value: function outerCircle(vertexA, vertexB, vertexC) {
      var aX = sA.x,
          bX = sB.x,
          cX = sC.x,
          aY = sA.y,
          bY = sB.y,
          cY = sC.y,
          aX2 = aX * aX,
          bX2 = bX * bX,
          cX2 = cX * cX,
          aY2 = aY * aY,
          bY2 = bY * bY,
          cY2 = cY * cY,
          p = ((bX - aX) * (cY - aY) - (bY - aY) * (cX - aX)) * 2,
          x = ((cY - aY) * (bX2 - aX2 + bY2 - aY2) + (aY - bY) * (cX2 - aX2 + cY2 - aY2)) / p,
          y = ((aX - cX) * (bX2 - aX2 + bY2 - aY2) + (bX - aX) * (cX2 - aX2 + cY2 - aY2)) / p,

      // vector = {x: x, y: y},
      radius = __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].dist({ x: x, y: y }, vertexA);

      return new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](x, y, radius);
    }

    /**
     * 3点の座標から内接円を求めます
     *
     * @static
     * @method innerCircle
     * @param {vector2} vertexA 頂点A
     * @param {vector2} vertexB 頂点B
     * @param {vector2} vertexC 頂点C
     * @return {Circle} 中心座標、半径の円データ
     */

  }, {
    key: 'innerCircle',
    value: function innerCircle(vertexA, vertexB, vertexC) {
      var sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
          sA = sides[0],
          sB = sides[1],
          sC = sides[2],
          area = (sA + sB + sC) / 2,
          vector = {
        x: (sA * sA.x + sB * sB.x + sC * sC.x) / (sA + sB + sC),
        y: (sA * sA.y + sB * sB.y + sC * sC.y) / (sA + sB + sC)
      },
          radius = Math.sqrt(area * (area - sA) * (area - sB) * (area - sC)) / area;

      return new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vector.x, vector.y, radius);
    }

    /**
     * 3点の座標から傍接円を求めます
     *
     * @static
     * @method excenter
     * @param {vector2} vertexA 頂点A
     * @param {vector2} vertexB 頂点B
     * @param {vector2} vertexC 頂点C
     * @return {array} 傍接円a,b,cの座標、半径の円データ
     */

  }, {
    key: 'excenter',
    value: function excenter(vertexA, vertexB, vertexC) {
      var sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
          sA = sides[0],
          sB = sides[1],
          sC = sides[2],
          area = (sA + sB + sC) / 2,
          s2 = Math.sqrt(area * (area - sA) * (area - sB) * (area - sC)) * 2;

      var vA = {
        x: (-sA * sA.x + sB * sB.x + sC * sC.x) / (-sA + sB + sC),
        y: (-sA * sA.y + sB * sB.y + sC * sC.y) / (-sA + sB + sC)
      },
          rA = s2 / (-sA + sB + sC),
          cA = new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vA.x, vA.y, rA);

      var vB = {
        x: (sA * sA.x + -sB * sB.x + sC * sC.x) / (sA - b + sC),
        y: (sA * sA.y + -sB * sB.y + sC * sC.y) / (sA - b + sC)
      },
          rB = s2 / (sA - sB + sC),
          cB = new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vB.x, vB.y, rB);

      var vC = {
        x: (sA * sA.x + sB * sB.x + -sC * sC.x) / (sA + sB - c),
        y: (sA * sA.y + sB * sB.y + -sC * sC.y) / (sA + sB - c)
      },
          rC = s2 / (sA + sB - sC),
          cC = new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vC.x, vC.y, rC);

      return [cA, cB, cC];
    }

    /**
     * 3点の座標から垂心座標を求めます
     *
     * @static
     * @method orthocenter
     * @param {vector2} vertexA 頂点A
     * @param {vector2} vertexB 頂点B
     * @param {vector2} vertexC 頂点C
     * @return {vector2} 垂心座標
     */

  }, {
    key: 'orthocenter',
    value: function orthocenter(vertexA, vertexB, vertexC) {
      var sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
          sA = sides[0],
          sB = sides[1],
          sC = sides[2];

      // SohToaCah
      var cosA = (-sA * sA + sB * sB + sC * sC) / (2 * sB * sC),
          cosB = (sA * sA - sB * sB + sC * sC) / (2 * sA * sC),
          cosC = (sA * sA + sB * sB - sC * sC) / (2 * sA * b),
          sinA = Math.sqrt(1 - cosA * cosA),
          sinB = Math.sqrt(1 - cosB * cosB),
          sinC = Math.sqrt(1 - cosC * cosC),
          tanA = sinA / cosA || 0,
          tanB = sinB / cosB || 0,
          tanC = sinC / cosC || 0;

      return new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */]({
        x: (sA.x * tanA + sB.x * tanB + sC.x * tanC) / (tanA + tanB + tanC),
        y: (sA.y * tanA + sB.y * tanB + sC.y * tanC) / (tanA + tanB + tanC)
      });
    }

    /**
     * 3点の座標から重心座標を求めます
     * @static
     * @method centerGravity
     * @param {vector2} vertexA 頂点A
     * @param {vector2} vertexB 頂点B
     * @param {vector2} vertexC 頂点C
     * @return {vector2} 重心座標
     */

  }, {
    key: 'centerGravity',
    value: function centerGravity(vertexA, vertexB, vertexC) {
      return new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */]({
        x: (sA.x + sB.x + sC.x) / 3,
        y: (sA.y + sB.y + sC.y) / 3
      });
    }

    /**
     * 三点の座標から辺の長さを返す
     * @static
     * @method offsetsToSides
     * @param {vector2} vertexA 頂点A
     * @param {vector2} vertexB 頂点B
     * @param {vector2} vertexC 頂点C
     * @return {array} a, b, cの辺の長さ
     */

  }, {
    key: 'verticesToSides',
    value: function verticesToSides(vertexA, vertexB, vertexC) {
      return [__WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].distance(vertexB, vertexC), __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].distance(vertexC, vertexA), __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].distance(vertexA, vertexB)];
    }

    /**
     * 頂点から角度を求める
     * @static
     * @method verticesToAngles
     * @param {vector2} vertexA 頂点A
     * @param {vector2} vertexB 頂点B
     * @param {vector2} vertexC 頂点C
     * @return {array} a, b, c各辺の角度
     */

  }, {
    key: 'verticesToAngles',
    value: function verticesToAngles(vertexA, vertexB, vertexC) {
      var sides = Triangle.verticesToSides(vertexA, vertexB, vertexC),
          a = sides[0],
          b = sides[1],
          c = sides[2],
          cosA = (a * a + c * c - b * b) / (2 * a * c),
          cosB = (b * b + a * a - c * c) / (2 * b * a),
          cosC = (c * c + b * b - a * a) / (2 * c * b);

      // Radian: [a, b, c]
      return [Math.acos(cosA), Math.acos(cosB), Math.acos(cosC)];
    }

    /**
     * 三角形内に座標を含んでいるか
     * @static
     * @method inPoint
     * @param  {Triangle} triangle triangle
     * @param  {vector2} vec2 Vector2
     * @return {boolean}
     */

  }, {
    key: 'inPoint',
    value: function inPoint(triangle, point) {
      var flag = true;

      __WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](triangle.vertices, function (v, i) {
        var n = (i + 1) % 3;
        if (Triangle.ccw(point, v, triangle.vertices[n]) < 0) {
          flag = false;
          return false;
        }
      });

      return flag;
    }

    /**
     * 反時計回り(Counter ClockWise)か調べ数値を返す
     * 反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す
     *
     * @static
     * @method ccw
     * @param {Vec2} v1 Vec2
     * @param {Vec2} v2 Vec2
     * @param {Vec2} v3 Vec2
     * @return {number} 反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す
     */

  }, {
    key: 'ccw',
    value: function ccw(v1, v2, v3) {
      var vector = new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](v2.x - v1.x, v2.y - v1.y);
      return vector.cross(v3.x - v2.x, v3.y - v2.y);
    }
  }]);

  return Triangle;
}();

/* harmony default export */ __webpack_exports__["a"] = (Triangle);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(12);

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2021 Yoshihito Fujiwara




global.INK = __WEBPACK_IMPORTED_MODULE_0__index__;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_events__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return __WEBPACK_IMPORTED_MODULE_0__class_events__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return __WEBPACK_IMPORTED_MODULE_0__class_events__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Mediaquery", function() { return __WEBPACK_IMPORTED_MODULE_0__class_events__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_geometry__ = __webpack_require__(23);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BezierCurve", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Delaunay", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Point2", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return __WEBPACK_IMPORTED_MODULE_1__class_geometry__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_utils__ = __webpack_require__(28);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return __WEBPACK_IMPORTED_MODULE_2__class_utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return __WEBPACK_IMPORTED_MODULE_2__class_utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return __WEBPACK_IMPORTED_MODULE_2__class_utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Gamepad", function() { return __WEBPACK_IMPORTED_MODULE_2__class_utils__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "argsToArray", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findMax", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findMin", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_44"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDevelop", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasHash", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasString", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasUA", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UA", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ua", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_50"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_8"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_15"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRegexp", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_9"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_18"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMultibyte", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isOS", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_20"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIos", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDevice", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSmartDevice", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_12"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSmartPhone", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_13"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTablet", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_16"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIPhone", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIPad", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIPod", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidPhone", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidTablet", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_11"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMobileSafari", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidBrowser", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMobileChrome", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIosChrome", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidChrome", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWebkit", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_19"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFileAPI", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRequestFileSystem", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isStorage", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_14"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTouchScreen", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_17"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getHash", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryHashMap", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_29"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PI", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TWO_PI", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HARF_PI", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RAD_TO_DEG", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DEG_TO_RAD", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sqrt2", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_48"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radToCoord", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_30"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "degToCoord", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "coordToRad", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "coordToDeg", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radToDeg", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_31"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "degToRad", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "diagonal", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "diagonalToSideLength", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_45"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fract", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "factorial", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "inRange", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIntersect", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_21"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "smoothstep", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_46"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_26"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_23"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "random", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_32"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_35"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomLow", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_39"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomLow2", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_40"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomHight", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_33"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomHight2", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_34"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomNormalize", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_41"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomLinerLow", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_38"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomLinerHight", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_37"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomLinerCenter", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_36"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zeroPadding", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_51"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createId", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "objectToQuery", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_28"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeSpace", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_42"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_43"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toHarfNumber", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_49"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "base64FileSize", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_24"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "nowDate", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_27"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_47"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_25"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "log", function() { return __WEBPACK_IMPORTED_MODULE_3__utils__["_22"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2021 Yoshihito Fujiwara






var VERSION = "0.0.7";



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Events__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ticker__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Ticker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mediaquery__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Mediaquery__["a"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara





/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDevelop; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara

/**
 * @class Config
 */

/**
 * isDevelop 開発モードフラグ
 * @type {boolean}
 */
var isDevelop = true;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasHash;
/* harmony export (immutable) */ __webpack_exports__["b"] = hasString;
/* harmony export (immutable) */ __webpack_exports__["c"] = hasUA;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(2);
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * @class Has
 */
var url = window.location;

/**
 * LocationHashの有無
 * @static
 * @method hasHash
 * @param {string} key ハッシュ名 省略可
 * @return {boolean}
 */
function hasHash(key) {
  var flag = false;

  if (url.href.indexOf("#") > -1) {
    if (key) {
      var k = " " + key.replace(/^#/, "") + " ",
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
function hasString(str, hasStr) {
  return __WEBPACK_IMPORTED_MODULE_0__is__["M" /* isString */](str) && str.indexOf(hasStr) > -1;
};

/**
 * ユーザーエージェントに指定の文字列があるか判定します
 * @static
 * @method hasUA
 * @param {string} str 指定の文字列
 * @return {boolean}
 */
function hasUA(str) {
  return __WEBPACK_IMPORTED_MODULE_0__is__["S" /* ua */].indexOf(str) > -1;
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHash;
/* harmony export (immutable) */ __webpack_exports__["b"] = getQuery;
/* harmony export (immutable) */ __webpack_exports__["c"] = queryHashMap;
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara

/**
 * @class Location
 */
var url = window.location;

/*----------------------------------------------------------------------
  @method
----------------------------------------------------------------------*/
/**
 * hashを配列にして返す
 * @static
 * @method getHash
 * @return {array} hashの配列
 */
function getHash() {
	var ary = url.hash.split("#").slice(1);
	if (ary.length) {
		var i = 0,
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
function getQuery(query) {
	var querys = queryHashMap();
	return querys[query];
};

/**
 * リクエストパラメータ値を連想配列として取得
 * @static
 * @method queryHashMap
 * @param {string} query urlもしくは、パラメーター。省略時は現在のURL
 * @return {object} リクエストパラメータ値を連想配列にして返す
 */
function queryHashMap(query) {
	var map = {},
	    array = [],
	    params = void 0;

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
		var i = 0,
		    l = params.length;

		for (; i < l; i += 1) {
			array = params[i].split("=");
			map[array[0]] = decodeURI(array[1] || array[0]);
		}
	}

	return map;
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TWO_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HARF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RAD_TO_DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEG_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return sqrt2; });
/* harmony export (immutable) */ __webpack_exports__["t"] = radToCoord;
/* harmony export (immutable) */ __webpack_exports__["i"] = degToCoord;
/* harmony export (immutable) */ __webpack_exports__["h"] = coordToRad;
/* harmony export (immutable) */ __webpack_exports__["g"] = coordToDeg;
/* harmony export (immutable) */ __webpack_exports__["u"] = radToDeg;
/* harmony export (immutable) */ __webpack_exports__["j"] = degToRad;
/* harmony export (immutable) */ __webpack_exports__["k"] = diagonal;
/* harmony export (immutable) */ __webpack_exports__["l"] = diagonalToSideLength;
/* harmony export (immutable) */ __webpack_exports__["v"] = sign;
/* harmony export (immutable) */ __webpack_exports__["n"] = fract;
/* harmony export (immutable) */ __webpack_exports__["f"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["m"] = factorial;
/* harmony export (immutable) */ __webpack_exports__["o"] = inRange;
/* harmony export (immutable) */ __webpack_exports__["p"] = isIntersect;
/* harmony export (immutable) */ __webpack_exports__["q"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["w"] = smoothstep;
/* harmony export (immutable) */ __webpack_exports__["s"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["r"] = map;
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara


/**
 * @class Math
 */

/**
 * π (半円)
 * @static
 * @property PI
 * @type {number}
 */
var PI = Math.PI;

/**
 * π * 2 (円)
 * @static
 * @property TWO_PI
 * @type {number}
 */
var TWO_PI = PI * 2;

/**
 * π * 2 (1/4円)
 * @static
 * @property HARF_PI
 * @type {number}
 */
var HARF_PI = PI / 2;

/**
 * ラジアンからに角度変換する積数
 * @static
 * @property RAD_TO_DEG
 * @type {number}
 */
var RAD_TO_DEG = 180 / PI;

/**
 * 角度からラジアンに変換する積数
 * @static
 * @property DEG_TO_RAD
 * @type {number}
 */
var DEG_TO_RAD = PI / 180;

/**
 * √2
 * @static
 * @property sqrt2
 * @type {number}
 */
var sqrt2 = Math.sqrt(2);

/* Convert
-----------------------------------------------------------------*/
/**
 * ラジアンと半径から座標生成
 * @method radToCoord
 * @param  {number} rad ラジアン
 * @param  {number} radius 半径
 * @return {object} x, y座標を格納したオブジェクト
 */
function radToCoord(rad) {
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

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
function degToCoord(deg) {
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

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
function coordToRad(x, y) {
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
function coordToDeg(x, y) {
  return Math.atan2(y, x) * RAD_TO_DEG;
};

/**
 * ラジアンから角度を求める
 * @static
 * @method radToDeg
 * @param {number} rad ラジアン
 * @return {number} degree
 */
function radToDeg(rad) {
  return rad * RAD_TO_DEG;
};

/**
 * 角度をラジアンに変換して返す
 * @static
 * @method degToRad
 * @param {number} deg 角度
 * @return {number} radian
 */
function degToRad(deg) {
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
function diagonal(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

/**
 * 対角線の長さから正方形の辺の長さを求める（なす角45°）
 * @static
 * @method diagonalToSideLength
 * @param  {number} diagonal 対角線の長さ
 * @return {number}
 */
function diagonalToSideLength(diagonal) {
  return diagonal / utils.sqrt2;
}

/* Utilitys
-----------------------------------------------------------------*/
/**
 * 値の符号化
 * numが正なら+1.0、0.0なら0.0、負なら-1.0を返す
 * @static
 * @method sign
 * @param  {number} num
 * @return {number} -1, 0, 1のいずれかの値
 */
function sign(num) {
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
function fract(num) {
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
function clamp(num, min, max) {
  return Math.max(Math.min(num, max), min);
};

/**
 * 階乗の計算
 * @static
 * @method factorial
 * @param {number} num 階乗数
 * @return {number}
 */
function factorial(num) {
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
function inRange(val, min, max) {
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
function isIntersect(rangeMin1, rangeMax1, rangeMin2, rangeMax2) {
  return Math.max(rangeMin1, rangeMax1) >= Math.min(rangeMin2, rangeMax2) && Math.min(rangeMin1, rangeMax1) <= Math.max(rangeMin2, rangeMax2);
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
function lerp(val, min, max) {
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
function smoothstep(val, min, max) {
  // return clamp((val - min) / (max - min), 0, 1);
  var t = clamp((val - min) / (max - min), 0, 1);
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
function normalize(val, min, max) {
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
function map(val, fromMin, fromMax, toMin, toMax) {
  return lerp(normalize(val, fromMin, fromMax), toMin, toMax);
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = random;
/* harmony export (immutable) */ __webpack_exports__["d"] = randomInt;
/* harmony export (immutable) */ __webpack_exports__["h"] = randomLow;
/* harmony export (immutable) */ __webpack_exports__["i"] = randomLow2;
/* harmony export (immutable) */ __webpack_exports__["b"] = randomHight;
/* harmony export (immutable) */ __webpack_exports__["c"] = randomHight2;
/* harmony export (immutable) */ __webpack_exports__["j"] = randomNormalize;
/* harmony export (immutable) */ __webpack_exports__["g"] = randomLinerLow;
/* harmony export (immutable) */ __webpack_exports__["f"] = randomLinerHight;
/* harmony export (immutable) */ __webpack_exports__["e"] = randomLinerCenter;
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara


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
function random() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var random = Math.random();

  if (min > max) {
    var num = min;
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
function randomInt(min, max) {
  return Math.round(random(min, max));
}

/**
 * randomLow
 * 0.0付近の出現率が高い乱数の生成
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
function randomLow() {
  return Math.random() * Math.random();
};

/**
 * randomLow2
 * 0.0付近の出現率が高い乱数の生成（randomLowより高い）
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
function randomLow2() {
  var r = Math.random();
  return r * r;
};

/**
 * randomHight
 * 1.0付近の出現率が高い乱数の生成
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
function randomHight() {
  return 1.0 - Math.random() * Math.random();
};

/**
 * randomHight2
 * 1.0付近の出現率が高い乱数の生成（randomHightより高い）
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
function randomHight2() {
  var r = Math.random();
  return 1.0 - r * r;
};

/**
 * randomNormalize
 * 中央値(0.5)付近の値を多く出す
 *
 * @export
 * @returns
 */
function randomNormalize() {
  var r1 = Math.random();
  var r2 = Math.random();
  var value = Math.sqrt(-2.0 * Math.log(r1)) * Math.sin(2.0 * Math.PI * r2);
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
function randomLinerLow() {
  return 1.0 - Math.sqrt(Math.random());
};

/**
 * randomLinerHight
 * 直線的に1.0付近の出現率を高くする
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
function randomLinerHight() {
  return Math.sqrt(Math.random());
};

/**
 * randomLinerCenter
 * 中央値(0.5)付近の値を多く出す
 *
 * @export
 * @returns {number} 0.0 - 1.0までの値を返す
 */
function randomLinerCenter() {
  return (Math.random() + Math.random()) * 0.5;
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = zeroPadding;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createId; });
/* harmony export (immutable) */ __webpack_exports__["b"] = objectToQuery;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeSpace;
/* harmony export (immutable) */ __webpack_exports__["d"] = replaceAll;
/* harmony export (immutable) */ __webpack_exports__["e"] = toHarfNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(2);
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara





/**
 * @class String
 */

/**
 * zeroPadding 数値桁数を揃える
 * @param  {number} value 値
 * @param  {number} digit 桁数 (1桁=1, 2桁=2)
 * @return {string}
 */
function zeroPadding(value, digit, isBeyondValue) {
  var _value = "" + value,
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
 * @param {string} str id名 初期値: 'id_' 省略可
 * @return {string} 生成したid
 */
var createId = function () {
  var _count = 0;

  return function () {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "id_";

    return str + (_count += 1);
  };
}();

/**
 * objectToQuery オブジェクトをクエリ文字列に変換 (ネスト構造に再起処理はしません)
 * @static
 * @method objectToQuery
 * @param  {Object} obj 対象のオブジェクト
 * @param  {boolean} isQuestion 先頭に?加えるか ※初期false
 * @return {string}
 */
function objectToQuery(obj) {
  var isQuestion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var query = "";
  __WEBPACK_IMPORTED_MODULE_0__array__["b" /* each */](obj, function (key, val) {
    if (query) {
      query += "&";
    }

    if (__WEBPACK_IMPORTED_MODULE_1__is__["D" /* isObject */](val)) {
      query += key + "=" + val.keys().length;
    } else if (__WEBPACK_IMPORTED_MODULE_1__is__["g" /* isArray */](val)) {
      query += key + "=" + val.length;
    } else {
      query += key + "=" + val;
    }
  });

  if (isQuestion) {
    query = +query;
  }

  return query;
};

/**
 * 空白文字の削除
 * @static
 * @method removeSpace
 * @param {string} str 対象の文字列
 * @return {string} 空白文字を削除した文字列
 */
function removeSpace(str) {
  return str.replace(/\s+/g, "");
};

/**
 * 文字列の全置換
 * 対象の文字列と、削除文字列がマッチしたものを全置換します
 * @static
 * @method replaceAll
 * @param {string} str 置換対象の文字列
 * @param {string} del 削除する文字列
 * @param {string} add 追加する文字列
 * @return {string} 置換した文字列
 */
function replaceAll(str, del, add) {
  add = add ? add : "";
  return str.split(del).join(add);
};

/**
 * toHarfNumber 全角数値を半角数値へ変換
 * @param  {string} str 数値文字列
 * @return {string}
 */
function toHarfNumber(str) {
  str = str.replace(/-/g, "");
  return str.replace(/[０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = base64FileSize;
/* harmony export (immutable) */ __webpack_exports__["b"] = getFunctionName;
/* harmony export (immutable) */ __webpack_exports__["d"] = mixin;
/* harmony export (immutable) */ __webpack_exports__["f"] = nowDate;
/* harmony export (immutable) */ __webpack_exports__["g"] = spec;
/* harmony export (immutable) */ __webpack_exports__["e"] = noop;
/* harmony export (immutable) */ __webpack_exports__["c"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(3);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara




/**
 * @class Utility
 */

/**
 * NOTE: β.ver
 * base64画像のファイルサイズ取得(bytes)
 * 厳密なファイルサイズではありません。
 * デバッグ時におおよそのファイルサイズを見るために使用しますので多少誤差があります
 * @static
 * @method base64FileSize
 * @param  {Base64} base64 base64画像
 * @return {number} bytes
 */
function base64FileSize(base64) {
  var len = base64.indexOf(";base64,") + 8,
      bytes = (base64.length - len) * 3 / 4;
  return bytes;
};

/**
 * 匿名関数名を返す
 * 無名関数はundefinedを返します
 * @static
 * @method getFunctionName
 * @param {function} fn 名前を取得したい関数
 * @return {string} 関数名
 */
function getFunctionName(fn) {
  if (__WEBPACK_IMPORTED_MODULE_0__is__["p" /* isFunction */](fn)) {
    if (fn.prototype.constructor && fn.prototype.constructor.name) {
      return fn.prototype.constructor.name;
    } else {
      return ("" + fn).replace(/^\s*function\s*([^\(]*)[\S\s]+$/im, "$1");
    }
  }
};

/**
 * オブジェクトの拡張
 * @static
 * @method mixin
 * @param {boolean} isDeep ディープコピーするか 初期値: false 省略可
 * @param {object} arguments 拡張するオブジェクト
 * @return {object} 拡張したオブジェクトを返します
 */
function mixin(isDeep, objA, objB) {
  var options = void 0,
      name = void 0,
      src = void 0,
      copy = void 0,
      copyIsArray = void 0,
      clone = void 0,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

  if (typeof target === "boolean") {
    deep = target;
    target = arguments[i] || {};
    i++;
  }

  if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !__WEBPACK_IMPORTED_MODULE_0__is__["p" /* isFunction */](target)) {
    target = {};
  }

  if (i === length) {
    target = this;
    i--;
  }

  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {

      for (name in options) {
        copy = options[name];

        if (name === "__proto__" || target === copy) {
          continue;
        }

        if (deep && copy && (__WEBPACK_IMPORTED_MODULE_0__is__["F" /* isPlainObject */](copy) || (copyIsArray = Array.isArray(copy)))) {
          src = target[name];

          if (copyIsArray && !Array.isArray(src)) {
            clone = [];
          } else if (!copyIsArray && !__WEBPACK_IMPORTED_MODULE_0__is__["F" /* isPlainObject */](src)) {
            clone = {};
          } else {
            clone = src;
          }
          copyIsArray = false;

          target[name] = mixin(deep, clone, copy);
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  return target;
};

/**
 * 現在の日時情報を格納したオブジェクトを返す
 * @static
 * @method nowDate
 * @return {object}
 */
function nowDate() {
  var _ref;

  var date = new Date();

  return _ref = {
    date: date,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDay()
  }, _defineProperty(_ref, "date", date.getDate()), _defineProperty(_ref, "hour", date.getHours()), _defineProperty(_ref, "minute", date.getMinutes()), _defineProperty(_ref, "second", date.getSeconds()), _ref;
};

/**
 * NOTE: α.ver
 * spec - CPU性能を返す（だいたい）
 *
 * @export
 * @returns
 */
function spec() {
  var SPEED_CONSTANT = 8.9997e-9;
  //if speed=(c*a)/t, then constant=(s*t)/a and time=(a*c)/s

  var START_TIME = performance.now();
  var AMOUNT = 150000000;
  for (var i = AMOUNT; i > 0; i--) {}
  var END_TIME = performance.now();
  var sub = (END_TIME - START_TIME) / 1000;
  var speed = SPEED_CONSTANT * AMOUNT / sub;

  return {
    core: navigator.hardwareConcurrency || "Chrome Only",
    time: Math.round(sub * 1000) / 1000, // sec
    clock: Math.round(speed * 1000) / 1000 // GHZ
  };
}

/**
 * 空の関数
 * @static
 * @method noop
 * @return {function}
 */
function noop() {};

/**
 * コンソールログの出力
 * @static
 * @method log
 * @return {function}
 */
function log() {
  if (!INK || INK.isDevelop) {
    console.log.apply(console, __WEBPACK_IMPORTED_MODULE_1__array__["a" /* argsToArray */](arguments));
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara




// MAX_FPS {number} FPSのMAX値
var MAX_FPS = 60;

/**
 * Ticker
 * fpsの設定値は、FPSの実行を保証するものではありません。実際の処理ではFPS値が前後する場合があります
 * @class Ticker
 * @extends Events
 * @constructor
 */

var Ticker = function (_Events) {
  _inherits(Ticker, _Events);

  /**
   * constructor
   */
  function Ticker() {
    _classCallCheck(this, Ticker);

    /**
     * イベントリスト
     * @private
     * @property _EVENTS
     * @type {object}
     */
    var _this = _possibleConstructorReturn(this, (Ticker.__proto__ || Object.getPrototypeOf(Ticker)).call(this));

    _this._EVENTS = {
      TICK: "tick"
    };

    /**
     * フレームレート
     * @property fps
     * @type {number}
     */
    _this.fps = MAX_FPS;

    /**
     * tickイベント毎にカウントされます
     * @property tickCount
     * @type {number}
     */
    _this.tickCount = 1;

    /**
     * requestAnimationFrame毎にカウントされます
     * @property fpsCount
     * @type {number}
     */
    _this.fpsCount = 1;

    /**
     * 初回tickイベントが呼び出された時間
     * @property startTime
     * @type {number}
     */
    _this.startTime = 0;

    /**
     * 最後にtickイベントが呼び出された時間
     * @property lastTime
     * @type {number}
     */
    _this.lastTime = 0;

    /**
     * tickイベントの再起処理呼び出されているか
     * @private
     * @property _isTick
     * @type {boolean}
     */
    _this._isTick = false;

    /**
     * tickイベントタイマーid
     * @private
     * @property _tickerId
     * @type {string}
     */
    _this._tickerId = null;
    return _this;
  }

  /*----------------------------------------------------------------------
  	@method
  ----------------------------------------------------------------------*/
  /**
   * FPSの設定(1-60内の値)
   * @method setFPS
   * @param {number} fps 1-60fps
   * @return {Ticker}
   */


  _createClass(Ticker, [{
    key: "setFPS",
    value: function setFPS(fps) {
      this.fps = __WEBPACK_IMPORTED_MODULE_1__utils__["i" /* clamp */](fps, 1, MAX_FPS);
      return this;
    }

    /**
     * 値のリセット
     * @method reset
     * @return {Ticker}
     */

  }, {
    key: "reset",
    value: function reset() {
      this.tickCount = 1;
      this.fpsCount = 1;
      this.startTime = performance.now();
      this.lastTime = 0;
      return this;
    }

    /**
     * イベント登録
     * イベント名に属性名を付与するも可能
     * @overide
     * @method on
     * @param {string} type イベントタイプ
     * @param {function} listener イベントリスナー
     * @param {object} context コンテキスト
     * @return {Events}
     */

  }, {
    key: "on",
    value: function on(type, listener, context) {
      if (!this.hasEvent(this._EVENTS.TICK)) {
        this._isTick = true;
        this.reset();
        this._tick();
      }
      this._addEvent(type, listener, context);
      return this;
    }

    /**
     * イベント削除
     * type省略時は、全てのイベントを削除<br>
     * listener省略時は、指定イベントタイプ全て削除
     * @overide
     * @method off
     * @param {string} type イベントタイプ 省略可
     * @param {function} listener イベントリスナー 省略可
     * @return {Events}
     */

  }, {
    key: "off",
    value: function off(type, listener) {
      this._removeEvent(type, listener);
      if (!this.hasEvent(this._EVENTS.TICK)) {
        this._isTick = false;
        cancelAnimationFrame(this._tickerId);
      }
      return this;
    }

    /**
     * requestAnimationFrameの再起処理
     * @private
     * @method _tick
     * @return {Void}
     */

  }, {
    key: "_tick",
    value: function _tick() {
      this._tickerId = requestAnimationFrame(this._tick.bind(this));
      this.lastTime = performance.now() - this.startTime;
      this.fpsCount = MAX_FPS < this.fpsCount + 1 ? 1 : this.fpsCount + 1;

      if (~~(this.fpsCount % (MAX_FPS / (MAX_FPS - this.fps)))) {
        this.tickCount = this.fps < this.tickCount + 1 ? 1 : this.tickCount + 1;
        this.trigger(this._EVENTS.TICK, this);
      }
    }
  }]);

  return Ticker;
}(__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Ticker);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Author Yoshihito Fujiwara
/// Source https://bitbucket.org/yoshihitofujiwara/ampjs
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara




/// NOTE: アップデート予定なし
/**
 * Mediaqueryのブレイクポイントイベント
 * !!!: 対象の要素(head)にcssでフォントファミリーを指定してください<br>
 * ブレイクポイントで変更した、フォントファミリーをイベントオブジェクトに渡します<br>
 * シングルトン: コンストラクタを呼び出しで使用しません｡
 *
 * @class Mediaquery
 * @extends Events
 * @constructor
 * @param {DOM} elm 監視対象要素
 */

var Mediaquery = function (_Events) {
  _inherits(Mediaquery, _Events);

  /**
   * constructor
   */
  function Mediaquery(elm) {
    _classCallCheck(this, Mediaquery);

    /**
     * イベントリスト
     * @private
     * @property _EVENTS
     * @type {object}
     */
    var _this = _possibleConstructorReturn(this, (Mediaquery.__proto__ || Object.getPrototypeOf(Mediaquery)).call(this));

    _this._EVENTS = {
      CHANGE: "change"
    };

    /**
     * スタイルを監視する要素
     * @property elm
     * @default head
     * @type {DOM}
     */
    if (elm && elm.nodeType === 1) {
      _this.elm = elm;
    } else {
      _this.elm = document.getElementsByTagName("head")[0];
    }

    /**
     * 要素を監視しているか
     * @property isObserver
     * @default false
     * @type {boolean}
     */
    _this.isObserver = false;

    /**
     * 監視するスタイル名
     * @property observeStyle
     * @default "font-family"
     * @type {string}
     */
    _this.observeStyle = "font-family";

    /**
     * 要素の現在のスタイルを保管します
     * @property mediaStyle
     * @type {string}
     */
    _this.mediaStyle = null;
    return _this;
  }

  /**
   * イベントコントローラー
   * 状態を監視し、フォトサイズに変更があればイベントを発行します
   * @private
   * @method _controller
   * @return {Void}
   */


  _createClass(Mediaquery, [{
    key: "_controller",
    value: function _controller() {
      var _this2 = this;

      // set property
      this.isObserver = true;
      this.mediaStyle = window.getComputedStyle(this.elm).getPropertyValue(this.observeStyle);

      // event
      window.addEventListener("resize", function () {
        var style = window.getComputedStyle(_this2.elm).getPropertyValue(_this2.observeStyle);
        if (_this2.mediaStyle !== style) {
          _this2.mediaStyle = style;
          _this2.trigger(_this2._EVENTS.CHANGE);
        }
      });
    }

    /**
     * イベント登録
     * @method on
     * @param {string} type イベントタイプ
     * @param {function} listener イベントリスナー
     * @param {object} context コンテキスト
     * @return {Events}
     */

  }, {
    key: "on",
    value: function on(type, listener, context) {
      if (!this.isObserver) {
        this._controller();
      }
      this._addEvent(type, listener, context);
      return this;
    }
  }, {
    key: "trigger",


    /**
     * イベント発行
     * 第二引数以降に値を渡すとcallbackに引数として渡します
     * @method trigger
     * @param {string} type イベントタイプ
     * @return {Events}
     */
    value: function trigger(type) {
      var events = this._getEventNameMap(type),
          listeners = this._listeners[events.type],
          args = __WEBPACK_IMPORTED_MODULE_1__utils__["g" /* argsToArray */](arguments, 1);

      args.unshift({ mediaStyle: this.mediaStyle, eventType: type });

      if (listeners) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["q" /* each */](listeners, function (item) {
          if (!events.attr || item.attr === events.attr) {
            item.listener.apply(item.context, args);
          }
        });
      }
      return this;
    }
  }]);

  return Mediaquery;
}(__WEBPACK_IMPORTED_MODULE_0__Events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Mediaquery);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BezierCurve__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BezierCurve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Circle__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Delaunay__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Delaunay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Line__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__Line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Point2__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__Point2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Polygon__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__Polygon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Rectangle__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__Rectangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Size__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__Size__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Triangle__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__Triangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Vector2__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__Vector2__["a"]; });








 // 非推奨（削除予定）



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector2__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara





/**
 * @class BezierCurve
 * @param {array} vertices パスポイントリスト
 * @param {number} placing ベジェ曲線状の位置(0-1)
 */

var BezierCurve = function () {
  /**
   * constructor
   * @param {array} vertices パス座標リスト
   * @param {number} placing ベジェ曲線上の位置（正規化された値）
   */
  function BezierCurve(vertices, placing) {
    _classCallCheck(this, BezierCurve);

    /**
     * パス座標リスト
     * @property vertices
     * @type {array}
     */
    this.vertices = vertices;

    /**
     * ベジェ曲線上の位置（正規化された値）
     * @property placing
     * @type {number}
     */
    this.placing = placing || 0;

    /**
     * 現在のポジション
     * @property position
     * @type {vector2}
     */
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](vertices[0].x, vertices[0].y);

    /**
     * 始点からのラジアン角
     * @property rad
     * @type {number}
     */
    this.rad = null;

    // コンストラクタ呼び出し時、スタート座標をセット
    this.update(this.placing);
  }

  /*--------------------------------------------------------------------------
  	@method
  --------------------------------------------------------------------------*/
  /**
   * インスタンスのcloneを生成
   * @method clone
   * @return {BezierCurve}
   */


  _createClass(BezierCurve, [{
    key: "clone",
    value: function clone() {
      return new BezierCurve(this.vertices, this.placing);
    }

    /**
     * パスポイントのイテレーション処理
     * @method each
     * @param {function} callback コールバック関数
     * @return {BezierCurve}
     */

  }, {
    key: "each",
    value: function each(callback) {
      __WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](this.vertices, callback);
      return this;
    }

    /**
     * 現在地を更新
     *
     * @method update
     * @param {number} placing パスポイント（軌道）位置 (0 < 1)
     * @return {BezierCurve}
     */

  }, {
    key: "update",
    value: function update(placing) {
      // 正規化された値の範囲に収める
      this.placing = __WEBPACK_IMPORTED_MODULE_0__utils__["i" /* clamp */](placing, 0, 1);

      var vertices = this.vertices.concat(),
          position = this.position.clone(),
          max = vertices.length - 1,
          factNum = __WEBPACK_IMPORTED_MODULE_0__utils__["r" /* factorial */](max),
          p = 1 - this.placing,
          vec = new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](),
          a = void 0,
          b = void 0,
          c = void 0,
          m = void 0;

      this.each(function (i, v) {
        if (i === 0 || i === max) {
          a = 1;
        } else {
          a = factNum / (__WEBPACK_IMPORTED_MODULE_0__utils__["r" /* factorial */](max - i) * __WEBPACK_IMPORTED_MODULE_0__utils__["r" /* factorial */](i));
        }
        b = Math.pow(p, max - i);
        c = Math.pow(1 - p, i);
        m = a * b * c;
        vec.add({
          x: m * v.x,
          y: m * v.y
        });
      });

      // update position
      this.position.set(vec.x, vec.y);

      vec.sub(position);
      this.rad = Math.acos(vec.x / vec.mag()) || 0;

      return this;
    }

    /* static
    --------------------------------------------------------------------------*/
    /**
     * 2次ベジエ曲線
     * @static
     * @method quadratic
     * @param  {vector2} startPoint 開始位置
     * @param  {vector2} pathPoint  パスポイント
     * @param  {vector2} endPoint   終了位置
     * @param  {number} placing パスポイント（軌道）位置 (0 < 1)
     * @return {BezierCurve}
     */

  }], [{
    key: "quadratic",
    value: function quadratic(startPoint, pathPoint, endPoint, placing) {
      return new BezierCurve([startPoint, pathPoint, endPoint], placing);
    }

    /**
     * 3次ベジエ曲線
     * @static
     * @method cubicz
     * @param  {vector2} startPoint 開始位置
     * @param  {vector2} pathPoint1 パスポイント1
     * @param  {vector2} pathPoint2 パスポイント2
     * @param  {vector2} endPoint   終了位置
     * @param  {number} placing パスポイント（軌道）位置 (0 < 1)
     * @return {BezierCurve}
     */

  }, {
    key: "cubic",
    value: function cubic(startPoint, pathPoint1, pathPoint2, endPoint, placing) {
      return new BezierCurve([startPoint, pathPoint1, pathPoint2, endPoint], placing);
    }
  }]);

  return BezierCurve;
}();

/* harmony default export */ __webpack_exports__["a"] = (BezierCurve);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Triangle__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara






/**
 * @class Delaunay
 * @param {number} width Delaunay領域の幅
 * @param {number} height Delaunay領域の高さ
 * @param {array} vertices 頂点リスト
 */

var Delaunay = function () {
	/**
  * constructor
  */
	function Delaunay(width, height, vertices) {
		_classCallCheck(this, Delaunay);

		/**
   * Delaunay領域の幅
   * @property width
   * @type {number}
   */
		this.width = width || 0;

		/**
   * Delaunay領域の高さ
   * @property width
   * @type {number}
   */
		this.height = height || 0;

		/**
   * 頂点リスト
   * @property vertices
   * @type {array}
   */
		this.vertices = vertices || [];

		/**
   * 生成したDelaunay
   * @property delaunays
   * @type {array}
   */
		this.delaunays = [];

		/**
   * ランダムポイント生成時の再起処理の制限最大回数
   * @property maxAttempts
   * @type {number}
   */
		this.maxAttempts = 1000;
	}

	/**
  * 初期値にセット
  * @method identity
  * @return {Delaunay}
  */


	_createClass(Delaunay, [{
		key: "identity",
		value: function identity() {
			this.width = 0;
			this.height = 0;
			this.vertices = [];
			this.delaunays = [];
			return this;
		}

		/**
   * Delaunay領域の設定
   * @method setSize
   * @param {number} width Delaunay領域の幅
   * @param {number} height Delaunay領域の高さ
   * @return {Delaunay}
   */

	}, {
		key: "setSize",
		value: function setSize(width, height) {
			this.width = width || this.width;
			this.height = height || this.height;
			return this;
		}

		/**
   * 頂点リストの設定
   * 設定されている頂点リストを削除して設定しなおします
   * @method setVertices
   * @param {array} vertices 頂点リスト
   * @return {Delaunay}
   */

	}, {
		key: "setVertices",
		value: function setVertices(vertices) {
			this.vertices = vertices;
			return this;
		}

		/**
   * 頂点削除
   * @method removeVertex
   * @param {number} 削除するインデックス ※引数がない場合、全て削除
   * @param {number} 削除数
   * @return {Delaunay}
   */

	}, {
		key: "removeVertex",
		value: function removeVertex(index, len) {
			if (__WEBPACK_IMPORTED_MODULE_0__utils__["_4" /* isNumber */](index)) {
				this.vertices.splice(index, len || 1);
			} else {
				this.vertices = [];
			}
			return this;
		}

		/**
   * Delaunay削除
   * @method removeDelaunay
   * @return {Delaunay}
   */

	}, {
		key: "removeDelaunay",
		value: function removeDelaunay() {
			this.delaunays = [];
			return this;
		}

		/**
   * ランダムな頂点を生成
   * 生成後自動的に、setVerticesで頂点リストを設定します
   * @method randomVertices
   * @param {number} interval 頂点同士の間隔
   * @return {Delaunay}
   */

	}, {
		key: "randomVertices",
		value: function randomVertices(interval) {
			var vertex = void 0,
			    vertices = void 0,
			    l = void 0,
			    i = 0,
			    j = 0;

			if (this.vertices.length) {
				vertices = this.vertices.concat();
			} else {
				vertices = this.getOuterVertices(interval, true);
			}

			for (; i <= this.maxAttempts; i += 1) {
				vertex = {
					x: __WEBPACK_IMPORTED_MODULE_0__utils__["_35" /* randomInt */](1, this.width - 1),
					y: __WEBPACK_IMPORTED_MODULE_0__utils__["_35" /* randomInt */](1, this.height - 1)
				};
				l = vertices.length;

				for (j = 0; j < l; j += 1) {
					if (__WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].distance(vertices[j], vertex) < interval) {
						break;
					}
					if (j === l - 1) {
						// i = 0;
						i = ~~(i / 2);
						vertices.push(new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](vertex.x, vertex.y));
					}
				}
			}

			this.setVertices(vertices);

			return this;
		}

		/**
   * Delaunay領域の辺に、指定した間隔の頂点を生成して返す
   * @method getOuterVertices
   * @param {number} interval 間隔
   * @param {boolean} isRandom 間隔のランダム性を有効にするか
   * @return {array} Delaunay領域の辺に、指定した間隔の頂点を生成して返す
   */

	}, {
		key: "getOuterVertices",
		value: function getOuterVertices(interval, isRandom) {
			var range = void 0,
			    width = this.width,
			    height = this.height,
			    max = interval < 5 ? 1 : 5,
			    i = 0,
			    vertex = 0,
			    vertices = [new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](0, 0), new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](width, 0), new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](width, height), new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](0, height)];

			for (; i < 2; i += 1) {
				range = i === 0 ? width * 2 : height * 2;

				while (vertex < range) {
					if (isRandom) {
						vertex += interval + __WEBPACK_IMPORTED_MODULE_0__utils__["_35" /* randomInt */](0, max);
					} else {
						vertex += interval;
					}
					if (range < vertex) {
						break;
					}

					if (i) {
						// y
						vertices.push(new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */]({
							x: vertex < height ? 0 : width,
							y: vertex < height ? vertex : vertex - height
						}));
					} else {
						// x
						vertices.push(new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */]({
							x: vertex < width ? vertex : vertex - width,
							y: vertex < width ? 0 : height
						}));
					}
				}

				vertex = 0;
			}

			return vertices;
		}

		/**
   * ドロネー生成
   * @method createDelaunay
   * @return {Delaunay}
   */

	}, {
		key: "createDelaunay",
		value: function createDelaunay() {
			var _this = this;

			// delaunays delaunayを適時追加: 初期[verticesをラップする三角形の追加]
			var wrapTriangle = this._createWrapTriangle(),
			    delaunays = [wrapTriangle],
			    triangles = void 0,
			    points = void 0;

			// vertices
			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](this.vertices, function (vertex) {
				triangles = _this._checkTriangles(delaunays, vertex);
				points = _this._mergeSides(triangles.ng);
				delaunays = triangles.ok.concat(_this._createTriangle(points, vertex));
			});

			// ラップした三角頂点を含む、三角削除
			delaunays = this._removeWrapTriangl(wrapTriangle, delaunays);
			this.delaunays = delaunays;
			return this;
		}

		/* Private
  -----------------------------------------------------------------*/
		/**
   * 全ての三角形の外接円にvertexが含まれるか判定し、オブジェクトに振り分けて返す
   * @private
   * @method _checkTriangles
   * @param {array} delaunays delaunayリスト
   * @param {object} vertex 頂点
   * @return {object} 三角外円にvertexが含まれるか判定したオブジェクト {ok:[], ng:[]}
   */

	}, {
		key: "_checkTriangles",
		value: function _checkTriangles(delaunays, vertex) {
			var circle = void 0,
			    ng = [],
			    // 新しいポイントを追加する三角
			ok = []; // 既存のままの三角

			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](delaunays, function (triangle) {
				circle = __WEBPACK_IMPORTED_MODULE_2__Triangle__["a" /* default */].outerCircle.apply(null, triangle);

				if (circle.radius >= __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].distance(vertex, circle)) {
					ng.push(triangle);
				} else {
					ok.push(triangle);
				}
			});

			return {
				ng: ng,
				ok: ok
			};
		}

		/**
   * 各三角形を辺に分割して、重なる辺を取り除いた2点の頂点リストを返す
   * @private
   * @method _mergeSides
   * @param {array} trianglesEdge 三角形頂点リスト
   * @return {array} 重なる辺を取り除いた2点の頂点リストを返す
   */

	}, {
		key: "_mergeSides",
		value: function _mergeSides(trianglesEdge) {
			var poins = [],
			    sides = this._edgesToSides(trianglesEdge),
			    total = sides.length;

			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](sides, function (s1, i) {
				if (s1.skip || i === total - 1) {
					return true;
				} else {
					var found = false,
					    j = i + 1;

					for (; j < total; j += 1) {
						var s2 = sides[j];

						if (s1[0].x == s2[0].x && s1[0].y == s2[0].y && s1[1].x == s2[1].x && s1[1].y == s2[1].y || s1[0].x == s2[1].x && s1[0].y == s2[1].y && s1[1].x == s2[0].x && s1[1].y == s2[0].y) {
							// 重なる辺はスッキップしループを抜ける
							sides[j].skip = true;
							found = true;
							break;
						}
					}

					if (!found) {
						poins.push([s1[0], s1[1]]);
					}
				}
			});

			// 最後の三角が評価されていないので追加
			if (!sides[total - 1].skip) {
				poins.push([sides[total - 1][0], sides[total - 1][1]]);
			}

			return poins;
		}

		/**
   * 三角形の集合から辺の集合へ
   * @private
   * @method _edgesToSides
   * @param {array} triangles 三角形集合の頂点を格納した配列
   * @return {array} 辺の集合配列
   */

	}, {
		key: "_edgesToSides",
		value: function _edgesToSides(triangles) {
			var sides = [];
			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](triangles, function (edges) {
				sides.push([edges[0], edges[1]], [edges[1], edges[2]], [edges[2], edges[0]]);
			});
			return sides;
		}

		/**
   * 各頂点と点vertexを結んで三角形に分割する
   * @private
   * @method _createTriangle
   * @param {array} points 2点の座標を格納したリスト
   * @param {object} vertex 追加する頂点
   * @return {array} 生成した三角形リスト
   */

	}, {
		key: "_createTriangle",
		value: function _createTriangle(points, vertex) {
			var triangles = [];
			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](points, function (triangle) {
				triangles.push([triangle[0], triangle[1], vertex]);
			});
			return triangles;
		}

		/**
   * ラップする三角形の頂点を含む三角形を削除して返す
   * @private
   * @method _removeWrapTriangl
   * @param {array} triangle ラップしている大三角形
   * @param {array} delaunays ドロネー
   * @return {array} ラップする三角形の頂点を含む三角形を削除して返す
   */

	}, {
		key: "_removeWrapTriangl",
		value: function _removeWrapTriangl(triangle, delaunays) {
			var placeholder = [];

			__WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](delaunays, function (vertices) {
				if (triangle[0] != vertices[0] && triangle[0] != vertices[1] && triangle[0] != vertices[2] && triangle[1] != vertices[0] && triangle[1] != vertices[1] && triangle[1] != vertices[2] && triangle[2] != vertices[0] && triangle[2] != vertices[1] && triangle[2] != vertices[2]) {
					placeholder.push(vertices);
				}
			});

			return placeholder;
		}

		/**
   * Delaunay領域をラップする三角形を生成
   * @private
   * @method _createWrapTriangle
   * @param {number} width  Delaunay領域の幅 ※省略可
   * @param {number} height Delaunay領域の高さ ※省略可
   * @return {array} Delaunay領域をラップする三角形の座標を格納した配列
   */

	}, {
		key: "_createWrapTriangle",
		value: function _createWrapTriangle(width, height) {
			this.setSize(width, height);

			var margin = 10,
			    // margin 10px
			w = this.width,
			    hw = this.width / 2,
			    h = this.height;

			return [new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](w / 2, h * -1 - margin), new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](w + hw + margin, h + margin), new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](hw * -1 - margin, h + margin)];
		}
	}]);

	return Delaunay;
}();

/* harmony default export */ __webpack_exports__["a"] = (Delaunay);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Point2__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara




/**
 * Rectangle
 *
 * @export
 * @class Rectangle
 * @extends {Point2}
 */

var Rectangle = function (_Point) {
	_inherits(Rectangle, _Point);

	/**
   * constructor
  * @param {number} x
  * @param {number} y
  * @param {number} [width=0]
  * @param {number} [height=0]
  * @memberof Rectangle
  */
	function Rectangle(x, y) {
		var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
		var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

		_classCallCheck(this, Rectangle);

		var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, x, y));

		_this.width = width;
		_this.height = height;
		return _this;
	}

	/*--------------------------------------------------------------------------
 	@method
 --------------------------------------------------------------------------*/
	/**
  * clone
  *
  * @returns {rectangle}
  * @memberof Rectangle
  */


	_createClass(Rectangle, [{
		key: "clone",
		value: function clone() {
			return new Rectangle(this.x, this.y, this.width, this.height);
		}

		/* static
  --------------------------------------------------------------------------*/
		/**
   * 衝突判定
   * @static
   * @method isCollision
   * @param  {rectangle}  rect1 矩形1
   * @param  {rectangle}  rect2 矩形2
   * @return {boolean}
   */

	}], [{
		key: "isCollision",
		value: function isCollision(rect1, rect2) {
			var hasX = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect1.x, rect1.x + rect1.width, rect2.x, rect2.x + rect2.width),
			    hasY = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect1.y, rect1.y + rect1.height, rect2.y, rect2.y + rect2.height);
			return hasX && hasY;
		}

		/**
   * 座標を含んでいるか
   * @method inPoint
   * @param  {rectangle}  rect 矩形
   * @param  {vector2} vec2 Vector2
   * @return {boolean}
   */

	}, {
		key: "inPoint",
		value: function inPoint(rect, point) {
			var hasX = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect.x, rect.x + rect.width, point.x, point.x),
			    hasY = __WEBPACK_IMPORTED_MODULE_0__utils__["W" /* isIntersect */](rect.y, rect.y + rect.height, point.y, point.y);
			return hasX && hasY;
		}
	}]);

	return Rectangle;
}(__WEBPACK_IMPORTED_MODULE_1__Point2__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Rectangle);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * Size
 * @class Size
 * @param {Number|Object|Array} width  幅
 * @param {number} height 高さ
 */

var Size = function () {
	/**
  * constructor
  */
	function Size(width, height) {
		_classCallCheck(this, Size);

		/**
   * @property width
   * @type {number}
   */
		this.width = width;

		/**
   * @property height
   * @type {number}
   */
		this.height = height;
	}

	/**
  * argumentsからオブジェクトを生成
  * @static
  * @method toJson
  * @param {Number|Object|Array} width  幅
  * @param {number} height 高さ
  * @return {object} width,heightを格納したオブジェクト
  */


	_createClass(Size, [{
		key: "identity",


		/**
   * 初期値にセット
   * @method identity
   * @return {size}
   */
		value: function identity() {
			this.width = 0;
			this.height = 0;
			return this;
		}

		/**
   * Sizeのクローン
   * @method clone
   * @return {size}
   */

	}, {
		key: "clone",
		value: function clone() {
			return new Size(this.width, this.height);
		}

		/**
   * 0サイズ判定
   * @method isZero
   * @return {boolean}
   */

	}, {
		key: "isZero",
		value: function isZero() {
			return this.width === 0 && this.height === 0;
		}

		/**
   * サイズが等しいか判定
   * 可変長引数で複数のオブジェクト判定可能
   * @method equals
   * @param {size} size sizeインスタンス
   * @return {boolean}
   */

	}, {
		key: "equals",
		value: function equals(size) {
			return this.width === size.width && this.height === size.height;
		}

		/**
   * 中心の取得
   * @method getCenter
   * @return {object} x, y
   */

	}, {
		key: "getCenter",
		value: function getCenter() {
			return {
				x: this.width / 2,
				y: this.height / 2
			};
		}

		/**
   * 対角線の長さの取得
   * @method diagonal
   * @return {number}
   */

	}, {
		key: "diagonal",
		value: function diagonal() {
			return __WEBPACK_IMPORTED_MODULE_0__utils__["o" /* diagonal */](this.width, this.height);
		}

		/**
   * Sizeのセット
   * @method set
   * @param {Number|Object|Array} width  幅
   * @param {number} height 高さ
   * @return {size}
   */

	}, {
		key: "set",
		value: function set(width, height) {
			this.setWidth(width);
			this.setHeight(height);
			return this;
		}

		/**
   * 幅のセット
   * @method setWidth
   * @param {number} width  幅
   * @return {size}
   */

	}, {
		key: "setWidth",
		value: function setWidth(width) {
			this.width = width;
			return this;
		}

		/**
   * 高さのセット
   * @method setWidth
   * @param {number} height 高さ
   * @return {size}
   */

	}, {
		key: "setHeight",
		value: function setHeight(height) {
			this.height = height;
			return this;
		}

		/**
   * 加算
   * @method add
   * @param {Number|Object|Array} width  幅
   * @param {number} height 高さ
   * @return {size}
   */

	}, {
		key: "add",
		value: function add(addWidth, addHeight) {
			this.width += addWidth;
			this.height += addHeight;
			return this;
		}

		/**
   * 減算
   * @method sub
   * @param {number} subWidth  幅
   * @param {number} subHeight 高さ
   * @return {size}
   */

	}, {
		key: "sub",
		value: function sub(subWidth, subHeight) {
			this.width -= subWidth;
			this.height -= subHeight;
			return this;
		}

		/**
   * 積算
   * @method mult
   * @param {number} multWidth  幅
   * @param {number} multHeight 高さ
   * @return {size}
   */

	}, {
		key: "mult",
		value: function mult(multWidth, multHeight) {
			this.width *= multWidth;
			this.height *= multHeight;
			return this;
		}

		/**
   * 割算
   *
   * @method sub
   * @param {number} divWidth  幅を割る数
   * @param {number} divHeight 高さを割る数
   * @return {size}
   */

	}, {
		key: "div",
		value: function div(divWidth, divHeight) {
			this.width /= divWidth;
			this.height /= divHeight;
			return this;
		}

		/**
   * サイズの加算
   * @method addSize
   * @param {size} size 加算するSize
   * @return {size}
   */

	}, {
		key: "addSize",
		value: function addSize(size) {
			this.width += size.width;
			this.height += size.height;
			return this;
		}

		/**
   * サイズの減算
   * @method addSize
   * @param {size} size 減算するSize
   * @return {size}
   */

	}, {
		key: "subSize",
		value: function subSize(size) {
			this.width -= size.width;
			this.height -= size.height;
			return this;
		}

		/**
   * サイズの積算
   * @method multSize
   * @param {number} num 積数
   * @return {size}
   */

	}, {
		key: "multSize",
		value: function multSize(num) {
			this.width *= num;
			this.height *= num;
			return this;
		}

		/**
   * サイズの割算
   * @method divSize
   * @param {number} num 割算
   * @return {size}
   */

	}, {
		key: "divSize",
		value: function divSize(num) {
			this.width /= num;
			this.height /= num;
			return this;
		}

		/**
   * サイズの面積
   * @method area
   * @return {number}
   */

	}, {
		key: "area",
		value: function area() {
			return this.width * this.height;
		}
	}], [{
		key: "toJson",
		value: function toJson(width, height) {
			if (__WEBPACK_IMPORTED_MODULE_0__utils__["_6" /* isObject */](width)) {
				return {
					width: width.width,
					height: width.height
				};
			} else if (__WEBPACK_IMPORTED_MODULE_0__utils__["H" /* isArray */](width)) {
				return {
					width: width[0],
					height: width[1]
				};
			} else {
				return {
					width: width,
					height: height
				};
			}
		}

		/**
   * ２つのサイズの最小サイズをマージしてSizeインスタンスを生成
   * @static
   * @method createMin
   * @param {size} size1 sizeインスタンス
   * @param {size} size2 sizeインスタンス
   * @return {size}
   */

	}, {
		key: "createMin",
		value: function createMin(size1, size2) {
			return new Size(Math.min(size1.width, size2.width), Math.min(size1.height, size2.height));
		}

		/**
   * ２つのサイズの最大サイズをマージしてSizeインスタンスを生成
   * @static
   * @method createMax
   * @param {size} size1 sizeインスタンス
   * @param {size} size2 sizeインスタンス
   * @return {size}
   */

	}, {
		key: "createMax",
		value: function createMax(size1, size2) {
			return new Size(Math.max(size1.width, size2.width), Math.max(size1.height, size2.height));
		}

		/**
   * ランダムなSizeインスタンスを生成
   * @static
   * @method max
   * @param {number} min 最小サイズ
   * @param {number} max 最大サイズ
   * @return {size}
   */

	}, {
		key: "random",
		value: function random(min, max) {
			min = __WEBPACK_IMPORTED_MODULE_0__utils__["_4" /* isNumber */](min) ? min : 0;
			max = __WEBPACK_IMPORTED_MODULE_0__utils__["_4" /* isNumber */](max) ? max : 1;
			return new Size(__WEBPACK_IMPORTED_MODULE_0__utils__["_32" /* random */](min, max), __WEBPACK_IMPORTED_MODULE_0__utils__["_32" /* random */](min, max));
		}
	}]);

	return Size;
}();

/* harmony default export */ __webpack_exports__["a"] = (Size);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Deferred__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Deferred__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Debug__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Debug__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ease__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Ease__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Gamepad__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__Gamepad__["a"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara





// export { default as LFO } from './LFO'; 実装予定
// export { default as WebCamera } from "./WebCamera"; 実装予定

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_array__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2021 Yoshihito Fujiwara



/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * @class Deferred
 */

var Deferred = function () {
  /**
   * constructor
   */
  function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    this.promise = new Promise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });
  }

  /*--------------------------------------------------------------------------
    @methods
  --------------------------------------------------------------------------*/
  /**
   * resolve
   * @param {any} params
   */


  _createClass(Deferred, [{
    key: "resolve",
    value: function resolve(params) {
      this._resolve(params);
    }

    /**
     * reject
     * @param {any} params
     */

  }, {
    key: "reject",
    value: function reject(params) {
      this._reject(params);
    }

    /**
     * serial
     * @param  {promise|deferred} tasks
     */

  }], [{
    key: "serial",
    value: function serial() {
      var def = new Deferred();
      var pipe = Promise.resolve();
      var i = 0,
          l = arguments.length;
      for (; i < l; i += 1) {
        pipe = pipe.then(arguments.length <= i ? undefined : arguments[i]).catch(def.reject.bind(def));
      }
      pipe.then(def.resolve.bind(def));
      return def.promise;
    }

    /**
     * parallel
     * @param  {promise|deferred} tasks
     */

  }, {
    key: "parallel",
    value: function parallel() {
      for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
        tasks[_key] = arguments[_key];
      }

      return Promise.all(Object(__WEBPACK_IMPORTED_MODULE_0__utils_array__["a" /* argsToArray */])(tasks).map(function (t) {
        return t();
      }));
    }

    /**
     * delay
     * @param {number} ms
     */

  }, {
    key: "delay",
    value: function delay(ms) {
      var def = new Deferred();
      setTimeout(def.resolve.bind(def), ms);
      return def.promise;
    }
  }]);

  return Deferred;
}();

/* harmony default export */ __webpack_exports__["a"] = (Deferred);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(30)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31), __webpack_require__(6)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



var DOC = document;

// view要素を格納オブジェクト
var _views = null;

// viewの表示状態
var _isShow = true;

// ログ出力の有効・無効
var _isChangeLog = true;

// NOTE: アップデート予定なし
/**
 * デバッグ機能を提供します
 * !!!: コンストラクタを呼び出しで、使用しません
 *
 * @class Debug
 * @constructor
 */

var Debug = function () {
  /**
   * constructor
   */
  function Debug() {
    _classCallCheck(this, Debug);

    throw new Error("Can not generate a Debug instance");
  }

  /**
   * view要素を生成
   * @private
   * @static
   * @method _createView
   * @return {Void}
   */


  _createClass(Debug, null, [{
    key: '_createView',
    value: function _createView() {
      // view要素生成
      var childNode = '<div style="min-width:250px;font-size:12px;background:#41454e;">\n<div style="padding:5px;line-height:12px;font-weight:bold;color:#f9f9f9!important;text-align:center;background:#272a32;">DEBUG</div>\n<textarea id="INKJS_DEBUG_TEXT" style="box-sizing:border-box;width:100%;min-height:150px;padding:10px;font-family:consolas;color:#272a32!important;font-size:14px;line-height:1.5;border:5px solid #41454e;background:#fff;"></textarea>\n</div>';

      // view要素の追加
      var el = DOC.createElement("div");

      el.id = "INKJS_DEBUG";
      el.setAttribute("style", "position:fixed;z-index:2147483647;left:10px;bottom:10px;");
      el.innerHTML = childNode;
      DOC.body.appendChild(el);

      // controll elements
      _views = {
        wrap: DOC.getElementById("INKJS_DEBUG"),
        text: DOC.getElementById("INKJS_DEBUG_TEXT")
      };

      // viewイベント追加
      Debug._addEvent();
    }

    /**
     * viewイベント設定
     * @private
     * @static
     * @method _addEvent
     * @return {Void}
     */

  }, {
    key: '_addEvent',
    value: function _addEvent() {
      var isDrag = false,
          x = null,
          y = null;

      // down
      _views.wrap.addEventListener("mousedown", start);
      _views.wrap.addEventListener("touchstart", start);
      function start() {
        isDrag = true;
      }

      // move
      DOC.addEventListener("mousemove", function (event) {
        if (isDrag) {
          move(event.clientX, event.clientY);
        }
      });
      DOC.addEventListener("touchmove", function (event) {
        if (isDrag) {
          move(event.touches[0].clientX, event.touches[0].clientY);
        }
      });
      function move(x, y) {
        if (__WEBPACK_IMPORTED_MODULE_0__utils__["_4" /* isNumber */](x)) {
          var diffX = _x - x,
              diffY = _y - y;

          x = _x;
          y = _y;

          var position = "position:fixed;z-index:2147483647;";
          position += "top:" + (_views.wrap.offsetTop + diffY) + "px;";
          position += "left:" + (_views.wrap.offsetLeft + diffX) + "px;";
          _views.wrap.setAttribute("style", position);
          return false;
        } else {
          x = _x;
          y = _y;
        }
      }

      // up
      DOC.addEventListener("mouseup", stop);
      DOC.addEventListener("touchend", stop);
      function stop() {
        isDrag = false;
        x = null;
        y = null;
      }

      // cancel
      _views.text.addEventListener("mousemove", cancel);
      _views.text.addEventListener("touchmove", cancel);
      function cancel() {
        isDrag = false;
      }
    }

    /**
     * ログを出力します
     * @static
     * @method log
     * @param {Any} args 出力するオブジェクト ※可変長引数可能
     * @return {Debug}
     */

  }, {
    key: 'log',
    value: function log() {
      if (!_views) {
        Debug._createView();
      }

      if (_isChangeLog) {
        __WEBPACK_IMPORTED_MODULE_0__utils__["q" /* each */](__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* argsToArray */](arguments), function (data) {
          // データタイプに合わせてログを出力
          if (__WEBPACK_IMPORTED_MODULE_0__utils__["H" /* isArray */](data)) {
            _views.text.value += JSON.stringify(data) + "\n";
          } else if (__WEBPACK_IMPORTED_MODULE_0__utils__["_6" /* isObject */](data)) {
            _views.text.value += JSON.stringify(data, null, "\t") + "\n";
          } else {
            _views.text.value += data + "\n";
          }
        });

        _views.text.scrollTop = _views.text.scrollHeight;
      }

      return Debug;
    }

    /**
     * ログのクリア
     * @static
     * @method clear
     * @return {Debug}
     */

  }, {
    key: 'clear',
    value: function clear() {
      if (_views) {
        _views.text.value = "";
      }
      return Debug;
    }

    /**
     * ログ出力を開始します
     * @static
     * @method start
     * @return {Debug}
     */

  }, {
    key: 'start',
    value: function start() {
      _isChangeLog = true;
      return Debug;
    }

    /**
     * ログ出力を停止します
     * @static
     * @method stop
     * @return {Debug}
     */

  }, {
    key: 'stop',
    value: function stop() {
      _isChangeLog = false;
      return Debug;
    }

    /**
     * ログviewを非表示にします
     * @static
     * @method hide
     * @return {Debug}
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (_views && _isShow) {
        _isShow = false;
        _views.wrap.setAttribute("style", _views.wrap.getAttribute("style") + "display:none;");
      }
      return Debug;
    }

    /**
     * ログviewを表示します
     * @static
     * @method show
     * @return {Debug}
     */

  }, {
    key: 'show',
    value: function show() {
      if (_views && !_isShow) {
        _isShow = true;
        _views.wrap.setAttribute("style", _views.wrap.getAttribute("style") + "display:block;");
      }
      return Debug;
    }

    /**
     * ログの表示状態
     * @static
     * @method isShow
     * @return {boolean}
     */

  }, {
    key: 'isShow',
    value: function isShow() {
      return _isShow;
    }

    /**
     * ログの表示状態
     * @static
     * @method position
    * @param {number} x
    * @param {number} y
     * @return {Debug}
     */

  }, {
    key: 'position',
    value: function position(x, y) {
      var position = "position:fixed;";
      position += "top:" + (x || 0) + "px;";
      position += "left:" + (y || 0) + "px;";
      _views.wrap.setAttribute("style", position);
      return Debug;
    }
  }]);

  return Debug;
}();

/* harmony default export */ __webpack_exports__["a"] = (Debug);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Ease;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 - 2021 Yoshihito Fujiwara



/**
 * Ease
 * @class Ease
 * @constructor
 **/
function Ease() {}

/**
 * PowIn
 * @static
 * @method createPowIn
 * @param {number} pow
 * @return {function}
 **/
Ease.createPowIn = function (pow) {
  return function (t) {
    return Math.pow(t, pow);
  };
};

/**
 * PowOut
 * @static
 * @method createPowOut
 * @param {number} pow
 * @return {function}
 **/
Ease.createPowOut = function (pow) {
  return function (t) {
    return 1 - Math.pow(1 - t, pow);
  };
};

/**
 * PowInOut
 * @static
 * @method createPowInOut
 * @param {number} pow
 * @return {function}
 **/
Ease.createPowInOut = function (pow) {
  return function (t) {
    if ((t *= 2) < 1) {
      return 0.5 * Math.pow(t, pow);
    } else {
      return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
    }
  };
};

/**
 * BackIn
 * @static
 * @method createBackIn
 * @param {number} amount
 * @return {function}
 **/
Ease.createBackIn = function (amount) {
  return function (t) {
    return t * t * ((amount + 1) * t - amount);
  };
};

/**
 * BackOut
 * @static
 * @method createBackOut
 * @param {number} amount
 * @return {function}
 **/
Ease.createBackOut = function (amount) {
  return function (t) {
    return --t * t * ((amount + 1) * t + amount) + 1;
  };
};

/**
 * BackInOut
 * @static
 * @method createBackInOut
 * @param {number} amount
 * @return {function}
 **/
Ease.createBackInOut = function (amount) {
  amount *= 1.525;
  return function (t) {
    if ((t *= 2) < 1) {
      return 0.5 * (t * t * ((amount + 1) * t - amount));
    } else {
      return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
    }
  };
};

/**
 * ElasticIn
 * @static
 * @method createElasticIn
 * @param {number} amplitude
 * @param {number} period
 * @return {function}
 **/
Ease.createElasticIn = function (amplitude, period) {
  return function (t) {
    if (t === 0 || t === 1) {
      return t;
    } else {
      var s = period / __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] * Math.asin(1 / amplitude);
      return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] / period));
    }
  };
};

/**
 * ElasticOut
 * @static
 * @method createElasticOut
 * @param {number} amplitude
 * @param {number} period
 * @return {function}
 **/
Ease.createElasticOut = function (amplitude, period) {
  return function (t) {
    if (t === 0 || t === 1) {
      return t;
    } else {
      var s = period / __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] * Math.asin(1 / amplitude);
      return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] / period) + 1;
    }
  };
};

/**
 * ElasticInOut
 * @static
 * @method createElasticInOut
 * @param {number} amplitude
 * @param {number} period
 * @return {function}
 **/
Ease.createElasticInOut = function (amplitude, period) {
  return function (t) {
    var s = period / __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] * Math.asin(1 / amplitude);
    if ((t *= 2) < 1) {
      return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] / period));
    } else {
      return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] / period) * 0.5 + 1;
    }
  };
};

/* Default Easings
--------------------------------------------------------------------------*/
/**
 * @static
 * @method linear
 * @param {number} t
 * @return {number}
 **/
Ease.linear = function (t) {
  return t;
};

/**
 * @static
 * @method sineIn, easeInSine
 * @param {number} t
 * @return {number}
 **/
Ease.sineIn = Ease.easeInSine = function (t) {
  return 1 - Math.cos(t * Math.PI / 2);
};

/**
 * @static
 * @method sineOut
 * @param {number} t
 * @return {number}
 **/
Ease.sineOut = Ease.easeOutSine = function (t) {
  return Math.sin(t * Math.PI / 2);
};

/**
 * @static
 * @method sineInOut
 * @param {number} t
 * @return {number}
 **/
Ease.sineInOut = Ease.easeInOutSine = function (t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
};

/**
 * @static
 * @method quadIn
 * @param {number} t
 * @return {number}
 **/
Ease.quadIn = Ease.easeInQuad = Ease.createPowIn(2);

/**
 * @static
 * @method quadOut
 * @param {number} t
 * @return {number}
 **/
Ease.quadOut = Ease.easeOutQuad = Ease.createPowOut(2);

/**
 * @static
 * @method quadInOut
 * @param {number} t
 * @return {number}
 **/
Ease.quadInOut = Ease.easeInOutQuad = Ease.createPowInOut(2);

/**
 * @static
 * @method cubicIn
 * @param {number} t
 * @return {number}
 **/
Ease.cubicIn = Ease.easeInCubic = Ease.createPowIn(3);

/**
 * @static
 * @method cubicOut
 * @param {number} t
 * @return {number}
 **/
Ease.cubicOut = Ease.easeOutCubic = Ease.createPowOut(3);

/**
 * @static
 * @method cubicInOut
 * @param {number} t
 * @return {number}
 **/
Ease.cubicInOut = Ease.easeInOutCubic = Ease.createPowInOut(3);

/**
 * @static
 * @method quartIn
 * @param {number} t
 * @return {number}
 **/
Ease.quartIn = Ease.easeInQuart = Ease.createPowIn(4);

/**
 * @static
 * @method quartOut
 * @param {number} t
 * @return {number}
 **/
Ease.quartOut = Ease.easeOutQuart = Ease.createPowOut(4);

/**
 * @static
 * @method quartInOut
 * @param {number} t
 * @return {number}
 **/
Ease.quartInOut = Ease.easeInOutQuart = Ease.createPowInOut(4);

/**
 * @static
 * @method quintIn
 * @param {number} t
 * @return {number}
 **/
Ease.quintIn = Ease.easeInQuint = Ease.createPowIn(5);

/**
 * @static
 * @method quintOut
 * @param {number} t
 * @return {number}
 **/
Ease.quintOut = Ease.easeOutQuint = Ease.createPowOut(5);

/**
 * @static
 * @method quintInOut
 * @param {number} t
 * @return {number}
 **/
Ease.quintInOut = Ease.easeInOutQuint = Ease.createPowInOut(5);

/**
 * @static
 * @method expoIn
 * @param {number} t
 * @return {number}
 **/
Ease.expoIn = Ease.easeInExpo = Ease.createPowIn(6);

/**
 * @static
 * @method expoOut
 * @param {number} t
 * @return {number}
 **/
Ease.expoOut = Ease.easeOutExpo = Ease.createPowOut(6);

/**
 * @static
 * @method expoInOut
 * @param {number} t
 * @return {number}
 **/
Ease.expoInOut = Ease.easeInOutExpo = Ease.createPowInOut(6);

/**
 * @static
 * @method circIn
 * @param {number} t
 * @return {number}
 **/
Ease.circIn = Ease.easeInCirc = function (t) {
  return -(Math.sqrt(1 - t * t) - 1);
};

/**
 * @static
 * @method circOut
 * @param {number} t
 * @return {number}
 **/
Ease.circOut = Ease.easeOutCirc = function (t) {
  return Math.sqrt(1 - --t * t);
};

/**
 * @static
 * @method circInOut
 * @param {number} t
 * @return {number}
 **/
Ease.circInOut = Ease.easeInOutCirc = function (t) {
  if ((t *= 2) < 1) {
    return -0.5 * (Math.sqrt(1 - t * t) - 1);
  } else {
    return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  }
};

/**
 * @static
 * @method backIn
 * @param {number} t
 * @return {number}
 **/
Ease.backIn = Ease.easeInBack = Ease.createBackIn(1.7);

/**
 * @static
 * @method backOut
 * @param {number} t
 * @return {number}
 **/
Ease.backOut = Ease.easeOutBack = Ease.createBackOut(1.7);

/**
 * @static
 * @method backInOut
 * @param {number} t
 * @return {number}
 **/
Ease.backInOut = Ease.easeInOutBack = Ease.createBackInOut(1.7);

/**
 * @static
 * @method elasticIn
 * @param {number} t
 * @return {number}
 **/
Ease.elasticIn = Ease.easeInElastic = Ease.createElasticIn(1, 0.3);

/**
 * @static
 * @method elasticOut
 * @param {number} t
 * @return {number}
 **/
Ease.elasticOut = Ease.easeOutElastic = Ease.createElasticOut(1, 0.3);

/**
 * @static
 * @method elasticInOut
 * @param {number} t
 * @return {number}
 **/
Ease.elasticInOut = Ease.easeInOutElastic = Ease.createElasticInOut(1, 0.3 * 1.5);

/**
 * @method bounceIn
 * @param {number} t
 * @static
 * @return {number}
 **/
Ease.bounceIn = Ease.easeInBounce = function (t) {
  return 1 - Ease.bounceOut(1 - t);
};

/**
 * @static
 * @method bounceOut
 * @param {number} t
 * @return {number}
 **/
Ease.bounceOut = Ease.easeOutBounce = function (t) {
  if (t < 1 / 2.75) {
    return 7.5625 * t * t;
  } else if (t < 2 / 2.75) {
    return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  } else if (t < 2.5 / 2.75) {
    return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  } else {
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
  }
};

/**
 * @static
 * @method bounceInOut
 * @param {number} t
 * @return {number}
 **/
Ease.bounceInOut = Ease.easeInOutBounce = function (t) {
  if (t < 0.5) {
    return Ease.bounceIn(t * 2) * 0.5;
  } else {
    return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
  }
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2021 Yoshihito Fujiwara


/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * @class Gamepad
 * @constructor
 */
var Gamepad = function () {
	/**
  * constructor
  */
	function Gamepad(gamepad) {
		_classCallCheck(this, Gamepad);

		console.log(gamepad);
		this.gamepad = gamepad;
		this._buttons = Gamepad.getButton(gamepad);
	}

	// update(gamepad){
	// 	console.log(gamepad, this._buttons);
	// }

	_createClass(Gamepad, [{
		key: "toKeyNames",
		value: function toKeyNames(gamepad) {
			var keyNames = {};

			for (var i = 1; i < gamepad.buttons.length; i++) {
				keyNames[this._buttons[i]] = gamepad.buttons[i];
			}

			keyNames.LEFT_JOG = {
				x: gamepad.axes[0],
				y: gamepad.axes[1]
			};

			keyNames.RIGHT_JOG = {
				x: gamepad.axes[2],
				y: gamepad.axes[3]
			};
		}
	}], [{
		key: "toKeyValues",


		/*--------------------------------------------------------------------------
    @methods
  --------------------------------------------------------------------------*/

		value: function toKeyValues(gamepad) {
			var keyNames = {
				isAnyPressed: gamepad.buttons.some(function (a) {
					return a.pressed;
				}),
				isAnyTouched: gamepad.buttons.some(function (a) {
					return a.touched;
				}),
				isAnyAxes: gamepad.axes.some(function (a) {
					return a != 0;
				})
			};

			keyNames.isAction = keyNames.isAnyPressed || keyNames.isAnyTouched || keyNames.isAnyAxes;

			for (var i = 1; i < gamepad.buttons.length; i++) {
				keyNames[STANDARD_BUTTONS[i]] = gamepad.buttons[i];
			}

			keyNames.LEFT_JOG = {
				x: gamepad.axes[0],
				y: gamepad.axes[1]
			};

			keyNames.RIGHT_JOG = {
				x: gamepad.axes[2],
				y: gamepad.axes[3]
			};

			return keyNames;
		}
	}, {
		key: "getButton",
		value: function getButton(gamepad) {
			// if(gamepad.mapping)
			return STANDARD_BUTTONS.concat();
		}
	}]);

	return Gamepad;
}();

/*============================================================
	Button Type
============================================================*/

/* harmony default export */ __webpack_exports__["a"] = (Gamepad);
var STANDARD_BUTTONS = ["B", "A", "Y", "X", "L", "R", "ZL", "ZR", "-", "+", "R_STICK", "L_STICK", "UP", "DOWN", "LEFT", "RIGHT", "HOME", "CAPTURE"];

/*------------------------------------------------------------
	以下未検証
------------------------------------------------------------*/
/*
const PS_BUTTON = [
];

const XBOX_BUTTON = [
  "A",
  "B",
  "X",
  "Y",
  "LB",
  "RB",
  "LT",
  "RT",
  "START",
  "BACK",
  "L_STICK",
  "R_STICK",
  "UP",
  "DOWN",
  "LEFT",
  "RIGHT"
]
*/

/*
		// switch pro con
		const BUTTON_A_INDEX = 0; // B
		const BUTTON_B_INDEX = 1; // A
		const BUTTON_X_INDEX = 2; // Y
		const BUTTON_Y_INDEX = 3; // X
		const BUTTON_LB_INDEX = 4; // L
		const BUTTON_RB_INDEX = 5; // R
		const BUTTON_LT_INDEX = 6; // ZL
		const BUTTON_RT_INDEX = 7; // ZR

		const BUTTON_BACK_INDEX = 8; // -
		const BUTTON_START_INDEX = 9; // +
		const BUTTON_L3_INDEX = 10; // LEFT STICK
		const BUTTON_R3_INDEX = 11; // RIGHT STICK

		const BUTTON_UP_INDEX = 12; // up
		const BUTTON_DOWN_INDEX = 13; // down
		const BUTTON_LEFT_INDEX = 14; // left
		const BUTTON_RIGHT_INDEX = 15; // right
		const BUTTON_HOME_INDEX = 16; // HOME
		const BUTTON_SCREEN_INDEX = 17; // SCREEN SHOT
*/

/***/ })
/******/ ]);