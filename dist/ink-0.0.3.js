/**
 * INK.js
 * Version: 0.0.3
 * Source : https://github.com/yoshihitofujiwara/INKjs
 * Author : Yoshihito Fujiwara
 * Copyright (c) 2012 Yoshihito Fujiwara
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_1__config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_2__date__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__has__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_3__has__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_3__has__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_3__has__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__is__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["B"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["C"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["D"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["E"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["F"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["G"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["H"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["I"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["J"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["K"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["L"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["M"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["N"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["O"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["P"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["Q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["R"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return __WEBPACK_IMPORTED_MODULE_4__is__["S"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_5__location__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return __WEBPACK_IMPORTED_MODULE_5__location__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return __WEBPACK_IMPORTED_MODULE_6__math__["B"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return __WEBPACK_IMPORTED_MODULE_7__string__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utility__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return __WEBPACK_IMPORTED_MODULE_8__utility__["g"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara











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
/// Copyright (c) 2012 Yoshihito Fujiwara



/**
 * <h4>2Dベクトル・座標を管理します</h4>
 * @class Vector2
 * @param {Number} x x座標値
 * @param {Number} y y座標値
 * @param {Boolean} isDegrees アングルモードをDegreesにするか
 */

var Vector2 = function () {
  /**
   * constructor
   */

  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    /**
     * <h4>X座標</h4>
     * @property x
     * @type {Number}
     */
    this.x = x;

    /**
     * <h4>Y座標</h4>
     * @property y
     * @type {Number}
     */
    this.y = y;
  }

  /**
   * <h4>ラジアン角から2Dベクトルを作成</h4>
   * @static
   * @method radToVector2
   * @param {Number} rad radian
   * @param {Number} mag ベクトルの大きさ
   * @return {Vector2}
   */


  _createClass(Vector2, [{
    key: "clone",


    /**
     * <h4>Vector2のcloneを生成します</h4>
     * @method clone
     * @return {Vector2}
     */
    value: function clone() {
      return new Vector2(this.x, this.y);
    }

    /**
     * <h4>初期値にセット</h4>
     * @method identity
     * @return {Vector2}
     */

  }, {
    key: "identity",
    value: function identity() {
      this.x = 0;
      this.y = 0;
      return this;
    }

    /**
     * <h4>ベクトル座標のセット</h4>
     * @method set
     * @param {Number} x x座標値
     * @param {Number} y y座標値
     * @return {Vector2}
     */

  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }

    /**
     * <h4>ベクトル座標の加算</h4>
     * @method add
     * @param {Vector2} vec2 Vector2
     * @return {Vector2}
     */

  }, {
    key: "add",
    value: function add(vec2) {
      this.x += vec2.x;
      this.y += vec2.y;
      return this;
    }

    /**
     * <h4>ベクトル座標の減算</h4>
     * @method sub
     * @param {Vector2} vec2 Vector2
     * @return {Vector2}
     */

  }, {
    key: "sub",
    value: function sub(vec2) {
      this.x -= vec2.x;
      this.y -= vec2.y;
      return this;
    }

    /**
     * <h4>ベクトル座標の乗算</h4>
     * @method mult
     * @param {Number} num 乗数
     * @return {Vector2}
     */

  }, {
    key: "mult",
    value: function mult(num) {
      this.x *= num;
      this.y *= num;
      return this;
    }

    /**
     * <h4>ベクトル座標の除算</h4>
     * @method div
     * @param {Number} num 除数
     * @return {Vector2}
     */

  }, {
    key: "div",
    value: function div(num) {
      this.x /= num;
      this.y /= num;
      return this;
    }

    /**
     * <h4>ベクトルの大きさを設定</h4>
     * @method setMag
     * @param {Number} mag ベクトルの大きさ
     * @return {Vector2}
     */

  }, {
    key: "setMag",
    value: function setMag(mag) {
      var vec2 = Vector2.radToVector2(this.angle(), mag);
      this.set(vec2.x, vec2.y);
      return this;
    }

    /**
     * <h4>ベクトル2乗を返す</h4>
     * @method magSq
     * @return {Number} ベクトルの大きさ(長さ)の2乗を返す
     */

  }, {
    key: "magSq",
    value: function magSq() {
      return this.x * this.x + this.y * this.y;
    }

    /**
     * <h4>ベクトルの大きさ(長さ)を返す</h4>
     * @method mag
     * @return {Number} ベクトルの大きさ(長さ)を返す
     */

  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(this.magSq(this.x, this.y));
    }

    /**
     * <h4>ベクトルのアングル(angle mode指定)取得</h4>
     * @method angle
     * @return {Number} アングルを返す
     */

  }, {
    key: "angle",
    value: function angle() {
      return Math.atan2(this.y, this.x);
    }

    /**
     * <h4>ベクトルのアングル(angle mode指定)をセットする</h4>
     * @method setAngle
     * @param {Number} angle radianかdegrees値(angle mode指定)
     * @return {Vector2}
     */

  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      var vec2 = Vector2.radToVector2(angle, this.mag());
      this.set(vec2.x, vec2, y);
      return this;
    }

    /**
     * <h4>ベクトルのアングル(ラジアン角)を加算</h4>
     * @method addAngle
     * @param {Number} angle 加算するangle量
     * @return {Vector2}
     */

  }, {
    key: "addAngle",
    value: function addAngle(angle) {
      this.setAngle(this.angle() + angle);
      return this;
    }

    /**
     * <h4>ベクトルのアングル(ラジアン角)を減算</h4>
     * @method subAngle
     * @param {Number} angle 減算するangle量
     * @return {Vector2}
     */

  }, {
    key: "subAngle",
    value: function subAngle(angle) {
      this.setAngle(this.angle() - angle);
      return this;
    }

    /**
     * <h4>ベクトルのアングル(ラジアン角)の乗算</h4>
     * @method multAngle
     * @param {Number} num 乗数
     * @return {Vector2}
     */

  }, {
    key: "multAngle",
    value: function multAngle(num) {
      this.setAngle(this.angle() * num);
      return this;
    }

    /**
     * <h4>ベクトルのアングル(ラジアン角)の除算</h4>
     * @method divAngle
     * @param {Number} num 除数
     * @return {Vector2}
     */

  }, {
    key: "divAngle",
    value: function divAngle(num) {
      this.setAngle(this.angle() / num);
      return this;
    }

    /**
     * <h4>正規化</h4>
     * @method normalize
     * @return {Vector2}
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
     * <h4>最大値の制限</h4>
     * @method limit
     * @param {Number} max 最大値
     * @return {Vector2}
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
     * <h4>線形補間</h4>
     * @method lerp
     * @param {Vector2} vec2 Vector2
     * @param {Number} amount amount量
     * @return {Vector2}
     */

  }, {
    key: "lerp",
    value: function lerp(vec2, amount) {
      this.x += (vec2.x - this.x) * (amount || 0);
      this.y += (vec2.y - this.y) * (amount || 0);
      return this;
    }

    /**
     * <h4>内積</h4>
     * @method dot
     * @param {Vector2} vec2 Vector2
     * @return {Number} ベクトルの内積
     */

  }, {
    key: "dot",
    value: function dot(vec2) {
      return Vector2.dot(this, vec2);
    }

    /**
     * <h4>外積</h4>
     * @method dot
     * @param {Vector2} vec2 Vector2
     * @return {Number} ベクトルの外積
     */

  }, {
    key: "cross",
    value: function cross(vec2) {
      return Vector2.cross(this, vec2);
    }

    ///==========================================================================
    /// Not Recommended
    ///==========================================================================
    /**
     * <h4>ベクトル差分を返す</h4>
     * @method diff
     * @param {Vector2} vec2 Vector2
     * @return {Vector2}
     */

  }, {
    key: "diff",
    value: function diff(vec2) {
      return new Vector2(Math.abs(this.x - vec2.x), Math.abs(this.y - vec2.y));
    }

    /**
     * <h4>ベクトルの大きさ(長さ)の差分を返す</h4>
     * @method diffMag
     * @param {Vector2} vec2 Vector2
     * @return {Number}
     */

  }, {
    key: "diffMag",
    value: function diffMag(vec2) {
      return vec2.diff(this).mag();
    }

    /**
     * <h4>ベクトルのラジアン差分を返す</h4>
     * @method diffRad
     * @param {Vector2} vec2 Vector2
     * @return {Number}
     */

  }, {
    key: "diffRad",
    value: function diffRad(vec2) {
      var rad1 = Math.atan2(this.y, this.x),
          rad2 = Math.atan2(vec2.y, vec2.x);

      return Math.abs(rad2 - rad1);
    }

    /**
     * <h4>ベクトルの角度差分を返す</h4>
     * @method diffDeg
     * @param {Vector2} vec2 Vector2
     * @param {Number} y y座標値
     * @return {Number}
     */

  }, {
    key: "diffDeg",
    value: function diffDeg(vec2) {
      return this.diffRad(vec2) * __WEBPACK_IMPORTED_MODULE_0__utils__["d" /* RAD_TO_DEG */];
    }

    /**
     * <h4>2つのベクトルの大きさの中間値を返す</h4>
     * @method betweenMag
     * @param {Vector2} vec2 Vector2
     * @param {Number} ratio 中間ポイント 0 < 1 初期値: 0.5
     * @return {Number}
     */

  }, {
    key: "betweenMag",
    value: function betweenMag(vec2, ratio) {
      var mag1 = this.mag(),
          mag2 = vec2.mag();

      ratio = __WEBPACK_IMPORTED_MODULE_0__utils__["_5" /* isNumber */](ratio) ? ratio : 0.5;

      return mag1 + (mag2 - mag1) * ratio;
    }

    /**
     * <h4>2つのベクトルの大きさの中間ラジアン値を返す</h4>
     * @method betweenRad
     * @param {Vector2} vec2 Vector2
     * @param {Number} ratio 中間ポイント 0 < 1 初期値: 0.5
     * @return {Number}
     */

  }, {
    key: "betweenRad",
    value: function betweenRad(vec2, ratio) {
      var rad1 = Math.atan2(this.y, this.x),
          rad2 = Math.atan2(vec2.y, vec2.x);

      ratio = __WEBPACK_IMPORTED_MODULE_0__utils__["_5" /* isNumber */](ratio) ? ratio : 0.5;
      return rad1 + (rad2 - rad1) * ratio;
    }

    /**
     * <h4>2つのベクトルの大きさの中間角を返す</h4>
     * @method betweenDeg
     * @param {Vector2} vec2 Vector2
     * @param {Number} ratio 中間ポイント 0 < 1 初期値: 0.5
     * @return {Number}
     */

  }, {
    key: "betweenDeg",
    value: function betweenDeg(vec2, ratio) {
      return this.betweenRad(vec2, ratio) * __WEBPACK_IMPORTED_MODULE_0__utils__["d" /* RAD_TO_DEG */];
    }

    /**
     * <h4>角度から2Dベクトルを作成</h4>
     * @static
     * @method degTo2d
     * @param {Number} deg degrees
     * @param {Number} mag ベクトルの大きさ
     * @return {Vector2}
     */

  }], [{
    key: "radToVector2",
    value: function radToVector2(rad, mag) {
      return new Vector2(Math.cos(rad) * mag, Math.sin(rad) * mag);
    }

    /**
     * <h4>角度から2Dベクトルを作成</h4>
     * @static
     * @method degToVector2
     * @param {Number} deg degrees
     * @param {Number} mag ベクトルの大きさ
     * @return {Vector2}
     */

  }, {
    key: "degToVector2",
    value: function degToVector2(deg, mag) {
      return Vector2.radToVector2(deg * __WEBPACK_IMPORTED_MODULE_0__utils__["a" /* DEG_TO_RAD */], mag);
    }

    /**
     * <h4>ランダムな2Dベクトルを作成</h4>
     * @static
     * @method random
     * @param {Number} mag ベクトルの大きさ
     * @return {Vector2}
     */

  }, {
    key: "random",
    value: function random(mag) {
      return Vector2.radToVector2(__WEBPACK_IMPORTED_MODULE_0__utils__["_34" /* random */](__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */]), mag);
    }

    /**
     * <h4>座標の同値判定</h4>
     * @static
     * @method equals
     * @param {Vector2} v1 Vector2
     * @param {Vector2} v2 Vector2
     * @return {Boolean}
     */

  }, {
    key: "equals",
    value: function equals(v1, v2) {
      return v1.x === v2.x && v1.y === v2.y;
    }

    /**
     * <h4>2つのベクトル座標間のユーグリッド距離</h4>
     * @static
     * @method distance
     * @param {Vector2} v1 Vector2
     * @param {Vector2} v2 Vector2
     * @return {Number} 2つのベクトル間のユーグリッド距離
     */

  }, {
    key: "distance",
    value: function distance(v1, v2) {
      return v1.clone().sub(v2).mag();
    }
  }, {
    key: "degToVector2",
    value: function degToVector2(deg, mag) {
      var vector = Vector2.radToVector2(__WEBPACK_IMPORTED_MODULE_0__utils__["o" /* degToRad */](deg), mag);
      vector.setAngleMode(true);
      return vector;
    }

    /**
     * <h4>ベクトルの角度を取得する</h4>
     * @static
     * @method angle
     * @param {Vector2} vec2 Vector2
     * @return {Number} アングルを返す
     */

  }, {
    key: "angle",
    value: function angle(vec2) {
      return Math.atan2(vec2.y, vec2.x);
    }

    /**
     * <h4>ベクトルの内積</h4>
     *
     * @static
     * @method dot
     * @param {Vector2} v1 Vector2
     * @param {Vector2} v2 Vector2
     * @return {Number} ベクトルの内積
     */

  }, {
    key: "dot",
    value: function dot(v1, v2) {
      return v1.x * v2.x + v1.y * v2.y;
    }

    /**
     * <h4>ベクトルの外積</h4>
     * @static
     * @method cross
     * @param {Vector2} v1 Vector2
     * @param {Vector2} v2 Vector2
     * @return {Number} ベクトルの外積
     */

  }, {
    key: "cross",
    value: function cross(v1, v2) {
      return v1.x * v2.y - v1.y * v2.x;
    }

    /**
     * <h4>ベクトル間の角度</h4>
     * @static
     * @method angleBetween
     * @param {Vector2} v1 Vector2
     * @param {Vector2} v2 Vector2
     * @return {Number} ラジアン角
     */

  }, {
    key: "angleBetween",
    value: function angleBetween(v1, v2) {
      return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()));
    }

    /**
     * <h4>別のベクトルに対する線形補間</h4>
     * @static
     * @method lerp
     * @param {Vector2} v1 Vector2
     * @param {Vector2} v2 Vector2
     * @param {Number} amount amount量
     * @return {Vector2}
     */

  }, {
    key: "lerp",
    value: function lerp(v1, v2, amount) {
      var v = v1.clone();
      v.leap(v2, amount);
      return v;
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
/// Copyright (c) 2012 Yoshihito Fujiwara

/**
 * @class Is
 */

var toString = Object.prototype.toString;

/// see: http://diveintohtml5.info/everything.html


/**
 * <h4>ユーザーエージェント</h4>
 * @static
 * @property UA
 * @type {String}
 */
var UA = navigator.userAgent;

/**
 * <h4>ユーザーエージェント toLowerCase</h4>
 * @static
 * @property ua
 * @type {String}
 */
var ua = UA.toLowerCase();

/* isType
-----------------------------------------------------------------*/
/**
 * <h4>配列型判定</h4>
 * @static
 * @method isArray
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
var isArray = Array.isArray || function (obj) {
  return toString.call(obj) === "[object Array]";
};

/**
 * <h4>真偽型判定</h4>
 * @static
 * @method isBoolean
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isBoolean(obj) {
  return toString.call(obj) === "[object Boolean]";
};

/**
 * <h4>関数型判定</h4>
 * @static
 * @method isFunction
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isFunction(obj) {
  return toString.call(obj) === "[object Function]";
};

/**
 * <h4>数値型判定</h4>
 * @static
 * @method isNumber
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isNumber(obj) {
  return toString.call(obj) === "[object Number]";
};

/**
 * <h4>オブジェクト型判定</h4>
 * @static
 * @method isObject
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isObject(obj) {
  return !!obj && toString.call(obj) === "[object Object]";
};

/**
 * <h4>プレーンオブジェクト判定</h4>
 * @static
 * @method isPlainObject
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isPlainObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0;
};

/**
 * <h4>文字列型判定</h4>
 * @static
 * @method isString
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isString(obj) {
  return toString.call(obj) === "[object String]";
};

/**
 * <h4>正規表現判定</h4>
 * @static
 * @method isRegexp
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isRegexp(obj) {
  return toString.call(obj) === "[object RegExp]";
};

/**
 * <h4>undefined判定</h4>
 * @static
 * @method isUndefined
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isUndefined(obj) {
  return obj === void 0;
};

/**
 * <h4>null判定</h4>
 * @static
 * @method isNull
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === null || toString.call(obj) === "[object Null]";
};

/**
 * <h4>マルチバイト文字列判定</h4>
 * @static
 * @method isMultibyte
 * @param  {String}  chara 一文字
 * @return {Boolean}
 */
function isMultibyte(chara) {
  return '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.indexOf(chara) < 0;
};

/**
 * <h4>isEmail Email判定</h4>
 * @param  {String}  email メールアドレス
 * @return {Boolean}
 */
function isEmail(email) {
  return email.match(/.+@.+\..+/) !== null;
};

/* OS
-----------------------------------------------------------------*/
/**
 * <h4>OS判定<h4>
 * @static
 * @method isOS
 * @param {String} os OS名 [windows, mac, ios, android]
 * @param {String|Number} ver バージョンナンバー Android ios のみ有効
 * @return {Boolean}
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
 * <h4>Windows判定</h4>
 * @static
 * @method isWindows
 * @param {Number|String} バージョン名[7, 8, 8.1, 10] 省略可
 * @return {Boolean}
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
 * <h4>Mac判定</h4>
 * <p>isoは、含みません</p>
 * @static
 * @method isMac
 * @param {Number|String} バージョンナンバー 省略可
 * @return {Boolean}
 */
function isMac(ver) {
  if (ver) {
    var serial = ("" + ver).replace(/\./g, "_");
    return ua.indexOf("intel mac os x " + serial) > -1;
  } else {
    return ua.indexOf("intel mac os x ") > -1 && ua.indexOf("mobile") < 0;
  }
};

/**
 * <h4>ios判定</h4>
 * @static
 * @method isIos
 * @param {Number|String} バージョンナンバー 省略可
 * @return {Boolean}
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
 * <h4>Android判定</h4>
 * @static
 * @method isAndroid
 * @param {Number|String} バージョンナンバー 省略可
 * @return {Boolean}
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
 * <h4>デバイス判定</h4>
 *
 * @static
 * @method isDevice
 * @param {String} device デバイス名<br>
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
 * @return {Boolean}
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
 * <h4>PC判定</h4>
 * @static
 * @method isPC
 * @return {Boolean}
 */
function isPC() {
  return isWindows() || isMac();
};

/**
 * <h4>スマートデバイス判定</h4>
 * @static
 * @method isSmartDevice
 * @return {Boolean}
 */
function isSmartDevice() {
  return isIos() || isAndroid();
};

/**
 * <h4>SmartPhone判定</h4>
 * @static
 * @method isSmartPhone
 * @return {Boolean}
 */
function isSmartPhone() {
  return ua.indexOf("iphone") > -1 || isAndroid() && ua.indexOf("mobile") > -1;
};

/**
 * <h4>タブレット判定</h4>
 * @static
 * @method isTablet
 * @return {Boolean}
 */
function isTablet() {
  return ua.indexOf("ipad") > -1 || isAndroid() && ua.indexOf("mobile") < 0;
};

/**
 * <h4>iPhone判定</h4>
 * @static
 * @method isIPhone
 * @return {Boolean}
 */
function isIPhone() {
  return ua.indexOf("iphone") > -1;
};

/**
 * <h4>iPad判定</h4>
 * @static
 * @method isIPad
 * @return {Boolean}
 */
function isIPad() {
  return ua.indexOf("ipad") > -1;
};

/**
 * <h4>iPod判定</h4>
 * @static
 * @method isIPod
 * @return {Boolean}
 */
function isIPod() {
  return ua.indexOf("ipod") > -1;
};

/**
 * <h4>AndroidPhone判定</h4>
 * @static
 * @method isAndroidPhone
 * @return {Boolean}
 */
function isAndroidPhone() {
  return isAndroid() && ua.indexOf("mobile") > -1;
};

/**
 * <h4>AndroidTablet判定</h4>
 * @static
 * @method isAndroidTablet
 * @return {Boolean}
 */
function isAndroidTablet() {
  return isAndroid() && ua.indexOf("mobile") < 0;
};

/* Browser
-----------------------------------------------------------------*/
/**
 * <h4>ブラウザ判定</h4>
 * @static
 * @method isBrowser
 * @param {String} key ブラウザ名<br>
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
 * @return {Boolean}
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
 * <h4>IE判定</h4>
 * @static
 * @method isIE
 * @param {Number}  ver バージョンナンバー 省略可
 * @return {Boolean}
 */
function isIE(ver) {
  if (ver) {
    return ua.indexOf("msie " + ver) > -1 || ua.indexOf("trident") > -1 && ua.indexOf("rv:" + ver) > -1;
  } else {
    return ua.indexOf("msie") > -1 || ua.indexOf("trident") > -1;
  }
};

/**
 * <h4>Microsoft Edge判定</h4>
 * @static
 * @method isEdge
 * @param {Number|String}  ver バージョン名
 * @return {Boolean}
 */
function isEdge(ver) {
  ver = ver || "";
  return ua.indexOf("edge/" + ver) > -1;
};

/**
 * <h4>PC版 Chrome判定</h4>
 * @static
 * @method isChrome
 * @return {Boolean}
 */
function isChrome(ver) {
  if (ver) {
    return ua.indexOf("chrome/" + ver) > -1 && ua.indexOf("mobile") < 0;
  } else {
    return ua.indexOf("chrome") > -1 && ua.indexOf("mobile") < 0;
  }
};

/**
 * <h4>PC版 Firefox判定</h4>
 * @static
 * @method isFirefox
 * @return {Boolean}
 */
function isFirefox(ver) {
  if (ver) {
    return ua.indexOf("firefox/" + ver) > -1 && ua.indexOf("mobile") < 0;
  } else {
    return ua.indexOf("firefox") > -1 && ua.indexOf("mobile") < 0;
  }
};

/**
 * <h4>PC版 Safari判定</h4>
 * @static
 * @method isSafari
 * @return {Boolean}
 */
function isSafari(ver) {
  if (ver) {
    return ua.indexOf("safari") > -1 && ua.indexOf("mobile") < 0 && !isChrome() && ua.indexOf("version/" + ver) > -1;
  } else {
    return ua.indexOf("safari") > -1 && ua.indexOf("mobile") < 0 && !isChrome();
  }
};

/**
 * <h4>MobileSafari判定</h4>
 * @static
 * @method isMobileSafari
 * @param {Number|String} ver バージョンナンバー  省略可
 * @return {Boolean}
 */
function isMobileSafari(ver) {
  if (ver) {
    return isIos(ver) && ua.indexOf("safari") > -1;
  } else {
    return isIos() && ua.indexOf("safari") > -1;
  }
};

/**
 * <h4>Android標準Browser判定</h4>
 * @static
 * @method isAndroidBrowser
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {Boolean}
 */
function isAndroidBrowser(ver) {
  if (ver) {
    return isAndroid(ver) && ua.indexOf("safari") > -1;
  } else {
    return isAndroid() && ua.indexOf("safari") > -1;
  }
};

/**
 * <h4>Mobile Chrome判定</h4>
 * @static
 * @method isMobileChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {Boolean}
 */
function isMobileChrome(ver) {
  return isIosChrome(ver) || isAndroidChrome(ver);
};

/**
 * <h4>ios Chrome判定</h4>
 * @static
 * @method isIosChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {Boolean}
 */
function isIosChrome(ver) {
  if (ver) {
    return isIos() && ua.indexOf("crios/" + ver) > -1;
  } else {
    return isIos() && ua.indexOf("crios/") > -1;
  }
};

/**
 * <h4>Android Chrome判定</h4>
 * @static
 * @method isAndroidChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {Boolean}
 */
function isAndroidChrome(ver) {
  if (ver) {
    return isAndroid() && ua.indexOf("chrome/" + ver) > -1;
  } else {
    return isAndroid() && ua.indexOf("chrome/") > -1;
  }
};

/**
 * <h4>webkit ブラウザ判定</h4>
 * @static
 * @method isWebkit
 * @return {Boolean}
 */
function isWebkit() {
  return ua.indexOf("webkit") > -1;
};

/* Utility
-----------------------------------------------------------------*/
/**
 * <h4>File APIの有無</h4>
 * @static
 * @method isFileAPI
 * @return {Boolean}
 */
function isFileAPI() {
  return !!(window.File && window.FileReader && window.FileList && window.Blob);
};

/**
 * <h4>RequestFileSystemの有無</h4>
 * @static
 * @method isRequestFileSystem
 * @return {Boolean}
 */
function isRequestFileSystem() {
  return !!(window.requestFileSystem || window.webkitRequestFileSystem);
};

/**
 * <h4>Storage機能が使えるか判定</h4>
 * @static
 * @method isStorage
 * @return {Boolean}
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
 * <h4>TouchScreen判定</h4>
 * @static
 * @method isTouchScreen
 * @return {Boolean}
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara



/**
 * <h4>イベント</h4>
 * <p>イベントクラスの継承して使用出来ます｡メディエーターとしても使用すことも可能</p>
 *
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
     * <h4>id</h4>
     * @private
     * @property _id
     * @type {String}
     */
    this._id = __WEBPACK_IMPORTED_MODULE_0__utils__["m" /* createId */]();

    /**
     * <h4>イベントリスナーを連想配列で格納します</h4>
     * @private
     * @property _listeners
     * @type {Object}
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
   * <h4>イベント登録</h4>
   * <p>イベント名に属性名を付与するも可能</p>
   * @method on
   * @param {String} type イベントタイプ
   * @param {Function} listener イベントリスナー
   * @param {Object} context コンテキスト
   * @return {Events}
   */


  _createClass(Events, [{
    key: 'on',
    value: function on(type, listener, context) {
      this._addEvent(type, listener, context);
      return this;
    }

    /**
     * <h4>1度だけ実行するイベント登録</h4>
     * @method onece
     * @param {String} type イベントタイプ
     * @param {Function} listener イベントリスナー
     * @param {Object} context コンテキスト
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
     * <h4>イベント削除</h4>
     * <p>type省略時は、全てのイベントを削除<br>
     * listener省略時は、指定イベントタイプ全て削除</p>
     *
     * @method off
     * @param {String} type イベントタイプ 省略可
     * @param {Function} listener イベントリスナー 省略可
     * @return {Events}
     */

  }, {
    key: 'off',
    value: function off(type, listener) {
      this._removeEvent(type, listener);
      return this;
    }

    /**
     * <h4>イベント追加</h4>
     * @private
     * @method _addEvent
     * @param {String} type イベントタイプ
     * @param {Function} listener コールバック関数
     * @param {Object} context コンテキスト
     * @return {Void}
     */

  }, {
    key: '_addEvent',
    value: function _addEvent(type, listener, context) {
      var _this2 = this;

      var events = type.split(' ');
      if (__WEBPACK_IMPORTED_MODULE_0__utils__["S" /* isFunction */](listener)) {
        __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](events, function (item) {
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
     * <h4>イベント削除</h4>
     * @private
     * @method _removeEvent
     * @param {String} type イベントタイプ
     * @param {Function} listener コールバック関数
     * @return {Void}
     */

  }, {
    key: '_removeEvent',
    value: function _removeEvent(type, listener) {
      var _this3 = this;

      var events = type ? type.split(' ') : [],
          ary = null,
          listeners = void 0;

      listener = __WEBPACK_IMPORTED_MODULE_0__utils__["x" /* getFunctionName */](listener);

      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](events, function (event) {
        var eventObj = _this3._getEventNameMap(event);

        if (eventObj && eventObj.attr && _this3._listeners[eventObj.type]) {
          // イベント属性指定がある場合
          listeners = _this3._listeners[eventObj.type];

          __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](listeners, function (item) {
            if (item.attr !== eventObj.attr) {
              if (listener) {
                if (listener !== __WEBPACK_IMPORTED_MODULE_0__utils__["x" /* getFunctionName */](item.listener)) {
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

            __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](listeners, function (item) {
              if (listener !== __WEBPACK_IMPORTED_MODULE_0__utils__["x" /* getFunctionName */](item.listener)) {
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
     * <h4>イベント名、イベント属性を連想配列にして返す</h4>
     * @private
     * @method _getEventNameMap
     * @param {String} type イベントタイプ
     * @return {Object}
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
     * <h4>登録イベントがあるか判定します</h4>
     * @method hasEvent
     * @param {String} type イベントタイプ
     * @return {Boolean}
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
          __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](listeners, function (item) {
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
     * <h4>イベント発行</h4>
     * <p>第二引数以降に値を渡すとcallbackに引数として渡します</p>
     * @method trigger
     * @param {String} type イベントタイプ
     * @return {Events}
     */

  }, {
    key: 'trigger',
    value: function trigger(type) {
      var events = this._getEventNameMap(type),
          listeners = this._listeners[events.type],
          args = __WEBPACK_IMPORTED_MODULE_0__utils__["g" /* argsToArray */](arguments, 1);

      if (listeners) {
        __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](listeners, function (item) {
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
/* 4 */
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
/// Copyright (c) 2012 Yoshihito Fujiwara



/**
 * @class Array
 */

/**
 * <h4>argumentsを配列に変換して返す</h4>
 * <p>スライス位置を指定して切り取り可能</p>
 * @static
 * @method argsToArray
 * @param {arguments} args arguments
 * @param {Number} index スライスする切り取り開始位置
 * @param {Number} lastIndex スライスする切り取り終了位置
 * @type {Array} argumentsを配列に変換して返す
 */
var argsToArray = function () {
  var slice = Array.prototype.slice;

  return function (args, index, lastIndex) {
    index = index || 0;
    lastIndex = lastIndex || args.length;
    return slice.call(args, index, lastIndex);
  };
}();

/**
 * <h4>each</h4>
 * @static
 * @method each
 * @param {Array|Object|Number} obj eachを行うオブジェクト、または回数
 * @param {Function} callback イテレーション毎のコールバック関数
 * @return {Object} 第一引数に渡されたオブジェクト
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
 * <h4>配列から最大値を探す</h4>
 * @static
 * @method findMax
 * @param  {Array} nums 数値を格納した配列
 * @return {Number}
 */
function findMax(nums) {
  return Math.max.apply(null, nums);
};

/**
 * <h4>配列から最小値を探す</h4>
 * @static
 * @method findMin
 * @param  {Array} nums 数値を格納した配列
 * @return {Number}
 */
function findMin(nums) {
  return Math.min.apply(null, nums);
};

/**
 * <h4>配列をシャッフルして返す</h4>
 * @static
 * @method shuffle
 * @param {Array} ary シャッフルする配列
 * @return {Array} 配列をシャッフルして返す
 */
function shuffle(ary) {
  return ary.sort(function () {
    return Math.random() - 0.5;
  });
};

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
/// Copyright (c) 2012 Yoshihito Fujiwara



/**
 * <h4>Size</h4>
 * @class Size
 * @param {Number|Object|Array} width  幅
 * @param {Number} height 高さ
 */

var Size = function () {
	/**
  * constructor
  */
	function Size(width, height) {
		_classCallCheck(this, Size);

		/**
   * <h4>width</h4>
   * @property width
   * @type {Number}
   */
		this.width = width;

		/**
   * <h4>height</h4>
   * @property height
   * @type {Number}
   */
		this.height = height;
	}

	/**
  * <h4>argumentsからオブジェクトを生成</h4>
  * @static
  * @method toJson
  * @param {Number|Object|Array} width  幅
  * @param {Number} height 高さ
  * @return {Object} width,heightを格納したオブジェクト
  */


	_createClass(Size, [{
		key: "identity",


		/**
   * <h4>初期値にセット</h4>
   * @method identity
   * @return {Size}
   */
		value: function identity() {
			this.width = 0;
			this.height = 0;
			return this;
		}

		/**
   * <h4>Sizeのクローン</h4>
   * @method clone
   * @return {Size}
   */

	}, {
		key: "clone",
		value: function clone() {
			return new Size(this.width, this.height);
		}

		/**
   * <h4>0サイズ判定</h4>
   * @method isZero
   * @return {Boolean}
   */

	}, {
		key: "isZero",
		value: function isZero() {
			return this.width === 0 && this.height === 0;
		}

		/**
   * <h4>サイズが等しいか判定</h4>
   * <p>可変長引数で複数のオブジェクト判定可能</p>
   * @method equals
   * @param {Size} size sizeインスタンス
   * @return {Boolean}
   */

	}, {
		key: "equals",
		value: function equals(size) {
			return this.width === size.width && this.height === size.height;
		}

		/**
   * <h4>中心の取得</h4>
   * @method getCenter
   * @return {Object} x, y
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
   * <h4>対角線の長さの取得</h4>
   * @method diagonal
   * @return {Number}
   */

	}, {
		key: "diagonal",
		value: function diagonal() {
			return __WEBPACK_IMPORTED_MODULE_0__utils__["p" /* diagonal */](this.width, this.height);
		}

		/**
   * <h4>Sizeのセット</h4>
   * @method set
   * @param {Number|Object|Array} width  幅
   * @param {Number} height 高さ
   * @return {Size}
   */

	}, {
		key: "set",
		value: function set(width, height) {
			this.setWidth(width);
			this.setHeight(height);
			return this;
		}

		/**
   * <h4>幅のセット</h4>
   * @method setWidth
   * @param {Number} width  幅
   * @return {Size}
   */

	}, {
		key: "setWidth",
		value: function setWidth(width) {
			this.width = width;
			return this;
		}

		/**
   * <h4>高さのセット</h4>
   * @method setWidth
   * @param {Number} height 高さ
   * @return {Size}
   */

	}, {
		key: "setHeight",
		value: function setHeight(height) {
			this.height = height;
			return this;
		}

		/**
   * <h4>加算</h4>
   * @method add
   * @param {Number|Object|Array} width  幅
   * @param {Number} height 高さ
   * @return {Size}
   */

	}, {
		key: "add",
		value: function add(addWidth, addHeight) {
			this.width += addWidth;
			this.height += addHeight;
			return this;
		}

		/**
   * <h4>減算</h4>
   * @method sub
   * @param {Number} subWidth  幅
   * @param {Number} subHeight 高さ
   * @return {Size}
   */

	}, {
		key: "sub",
		value: function sub(subWidth, subHeight) {
			this.width -= subWidth;
			this.height -= subHeight;
			return this;
		}

		/**
   * <h4>積算</h4>
   * @method mult
   * @param {Number} multWidth  幅
   * @param {Number} multHeight 高さ
   * @return {Size}
   */

	}, {
		key: "mult",
		value: function mult(multWidth, multHeight) {
			this.width *= multWidth;
			this.height *= multHeight;
			return this;
		}

		/**
   * <h4>割算</h4>
   *
   * @method sub
   * @param {Number} divWidth  幅を割る数
   * @param {Number} divHeight 高さを割る数
   * @return {Size}
   */

	}, {
		key: "div",
		value: function div(divWidth, divHeight) {
			this.width /= divWidth;
			this.height /= divHeight;
			return this;
		}

		/**
   * <h4>サイズの加算</h4>
   * @method addSize
   * @param {Size} size 加算するSize
   * @return {Size}
   */

	}, {
		key: "addSize",
		value: function addSize(size) {
			this.width += size.width;
			this.height += size.height;
			return this;
		}

		/**
   * <h4>サイズの減算</h4>
   * @method addSize
   * @param {Size} size 減算するSize
   * @return {Size}
   */

	}, {
		key: "subSize",
		value: function subSize(size) {
			this.width -= size.width;
			this.height -= size.height;
			return this;
		}

		/**
   * <h4>サイズの積算</h4>
   * @method multSize
   * @param {Number} num 積数
   * @return {Size}
   */

	}, {
		key: "multSize",
		value: function multSize(num) {
			this.width *= num;
			this.height *= num;
			return this;
		}

		/**
   * <h4>サイズの割算</h4>
   * @method divSize
   * @param {Number} num 割算
   * @return {Size}
   */

	}, {
		key: "divSize",
		value: function divSize(num) {
			this.width /= num;
			this.height /= num;
			return this;
		}

		/**
   * <h4>サイズの面積</h4>
   * @method area
   * @return {Number}
   */

	}, {
		key: "area",
		value: function area() {
			return this.width * this.height;
		}
	}], [{
		key: "toJson",
		value: function toJson(width, height) {
			if (__WEBPACK_IMPORTED_MODULE_0__utils__["_7" /* isObject */](width)) {
				return {
					width: width.width,
					height: width.height
				};
			} else if (__WEBPACK_IMPORTED_MODULE_0__utils__["I" /* isArray */](width)) {
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
   * <h4>２つのサイズの最小サイズをマージしてSizeインスタンスを生成</h4>
   * @static
   * @method createMin
   * @param {Size} size1 sizeインスタンス
   * @param {Size} size2 sizeインスタンス
   * @return {Size}
   */

	}, {
		key: "createMin",
		value: function createMin(size1, size2) {
			return new Size(Math.min(size1.width, size2.width), Math.min(size1.height, size2.height));
		}

		/**
   * <h4>２つのサイズの最大サイズをマージしてSizeインスタンスを生成</h4>
   * @static
   * @method createMax
   * @param {Size} size1 sizeインスタンス
   * @param {Size} size2 sizeインスタンス
   * @return {Size}
   */

	}, {
		key: "createMax",
		value: function createMax(size1, size2) {
			return new Size(Math.max(size1.width, size2.width), Math.max(size1.height, size2.height));
		}

		/**
   * <h4>ランダムなSizeインスタンスを生成</h4>
   * @static
   * @method max
   * @param {Number} min 最小サイズ
   * @param {Number} max 最大サイズ
   * @return {Size}
   */

	}, {
		key: "random",
		value: function random(min, max) {
			min = __WEBPACK_IMPORTED_MODULE_0__utils__["_5" /* isNumber */](min) ? min : 0;
			max = __WEBPACK_IMPORTED_MODULE_0__utils__["_5" /* isNumber */](max) ? max : 1;
			return new Size(__WEBPACK_IMPORTED_MODULE_0__utils__["_34" /* random */](min, max), __WEBPACK_IMPORTED_MODULE_0__utils__["_34" /* random */](min, max));
		}
	}]);

	return Size;
}();

/* harmony default export */ __webpack_exports__["a"] = (Size);

/***/ }),
/* 6 */
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
/// Copyright (c) 2012 Yoshihito Fujiwara




/**
 * <h4>Circle</h4>
 * @class Circle
 * @param  {Number} x      x座標
 * @param  {Number} y      y座標
 * @param  {Number} radius 半径
 */

var Circle = function () {
  /**
   * constructor
   */
  function Circle(x, y, radius) {
    _classCallCheck(this, Circle);

    /**
     * <h4>座標</h4>
     * @property position
     * @type {Vector2}
     */
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](x, y);

    /**
     * <h4>半径</h4>
     * @property radius
     * @type {Number}
     */
    this.radius = radius;
  }

  /**
   * <h4>クローンを生成</h4>
   * @method clone
   * @return {Circle}
   */


  _createClass(Circle, [{
    key: "clone",
    value: function clone() {
      return new Circle(this.position.x, this.position.y, this.radius);
    }

    /**
     * <h4>衝突判定</h4>
     * @static
     * @method isCollision
     * @param  {Circle}  circle1 Circle1
     * @param  {Circle}  circle2 Circle2
     * @return {Boolean}
     */

  }], [{
    key: "isCollision",
    value: function isCollision(circle1, circle2) {
      // let diff = Vector2.sub(circle2.position, circle1.position);
      var diff = circle1.position.clone().sub(circle2.position);
      return diff.mag() <= circle1.radius + circle2.radius;
    }

    /**
     * <h4>座標を含んでいるか</h4>
     * @static
     * @method inside
     * @param  {Circle}  circle Circle
     * @param  {Vector2} position Vector2
     * @return {Boolean}
     */

  }, {
    key: "inside",
    value: function inside(circle, position) {
      var diff = __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].sub(circle.position, position);
      return diff.mag() < circle.radius;
    }

    /**
     * <h4>ラジアンと半径から円弧を求める</h4>
     * @static
     * @method radToArc
     * @param {Number} rad ラジアン
     * @param {Number} radius 半径
     * @return {Number} 円弧
     */

  }, {
    key: "radToArc",
    value: function radToArc(rad, radius) {
      return __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] * radius * (rad / __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */]);
    }

    /**
     * <h4>円周の現在の位置を返す</h4>
     * @static
     * @method betweenArc
     * @param  {Number} radius        半径
     * @param  {Number} startAngle    開始アングル
     * @param  {Number} endAngle      終了アングル
     * @param  {Number} tick          座標ポイント比 0-1の値
     * @return {Vector}
     */

  }, {
    key: "betweenArc",
    value: function betweenArc(radius, startAngle, endAngle, tick) {
      var angle = (endAngle - startAngle) * tick;
      return new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */]({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      });
    }

    /**
     * <h4>円周を分割して座標を配列格納して返します</h4>
     * @static
     * @method circumference
     * @param  {Number}   radius   半径
     * @param  {Number}   split    分割数
     * @param  {Number}   angle    スタートアングル
     * @param  {Boolean}   isCCW   反時計回り
     * @param  {Function} callback コールバック関数
     * @return {Array}
     */

  }, {
    key: "circumference",
    value: function circumference(split, radius, angle, isCCW, callback) {
      callback = callback || function () {};

      var vertices = [],
          rad = __WEBPACK_IMPORTED_MODULE_0__utils__["e" /* TWO_PI */] / split,
          flag = false,
          _angle = 0;

      angle = __WEBPACK_IMPORTED_MODULE_0__utils__["_5" /* isNumber */](angle) ? angle : 0;

      if (isCCW) {
        rad *= -1;
      }

      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](split, function (i) {
        _angle = i * rad + angle;
        vertices[i] = new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */]({
          x: Math.cos(_angle) * radius,
          y: Math.sin(_angle) * radius
        });

        if (!flag) {
          flag = callback(i, vertices[i]);
        }
        if (flag) {
          return false;
        }
      });

      return vertices;
    }
  }]);

  return Circle;
}();

/* harmony default export */ __webpack_exports__["a"] = (Circle);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Circle__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara






/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * <h4>Triangle</h4>
 *
 * @class Triangle
 * @constructor
 * @param {Vector2} vertexA 頂点A
 * @param {Vector2} vertexB 頂点B
 * @param {Vector2} vertexC 頂点C
 */

var Triangle = function () {
  /**
   * constructor
   */
  function Triangle(vertexA, vertexB, vertexC) {
    _classCallCheck(this, Triangle);

    /**
     * <h4>頂点データ</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = [vertexA, vertexB, vertexC];
  }

  /**
   * <h4>クローンを生成</h4>
   *
   * @method clone
   * @return {Triangle}
   */


  _createClass(Triangle, [{
    key: 'clone',
    value: function clone() {
      return new Triangle(this.vertices[0], this.vertices[1], this.vertices[2]);
    }

    /**
     * <h4>3点の座標から外接円を求めます</h4>
     *
     * @static
     * @method outerCircle
     * @param {Vector2} vertexA 頂点A
     * @param {Vector2} vertexB 頂点B
     * @param {Vector2} vertexC 頂点C
     * @return {Circle} 中心座標、半径の円データ
     */

  }], [{
    key: 'outerCircle',
    value: function outerCircle(vertexA, vertexB, vertexC) {
      var aX = vertexA.x,
          bX = vertexB.x,
          cX = vertexC.x,
          aY = vertexA.y,
          bY = vertexB.y,
          cY = vertexC.y,
          aX2 = aX * aX,
          bX2 = bX * bX,
          cX2 = cX * cX,
          aY2 = aY * aY,
          bY2 = bY * bY,
          cY2 = cY * cY,
          p = ((bX - aX) * (cY - aY) - (bY - aY) * (cX - aX)) * 2,
          x = ((cY - aY) * (bX2 - aX2 + bY2 - aY2) + (aY - bY) * (cX2 - aX2 + cY2 - aY2)) / p,
          y = ((aX - cX) * (bX2 - aX2 + bY2 - aY2) + (bX - aX) * (cX2 - aX2 + cY2 - aY2)) / p,
          vector = { x: x, y: y },
          radius = __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].dist({ x: x, y: y }, vertexA);

      return new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](x, y, radius);
    }

    /**
     * <h4>3点の座標から内接円を求めます</h4>
     *
     * @static
     * @method innerCircle
     * @param {Vector2} vertexA 頂点A
     * @param {Vector2} vertexB 頂点B
     * @param {Vector2} vertexC 頂点C
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
        x: (sA * a.x + sB * b.x + sC * c.x) / (sA + sB + sC),
        y: (sA * a.y + sB * b.y + sC * c.y) / (sA + sB + sC)
      },
          radius = Math.sqrt(area * (area - sA) * (area - sB) * (area - sC)) / area;

      return new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vector.x, vector.y, radius);
    }

    /**
     * <h4>3点の座標から傍接円を求めます</h4>
     *
     * @static
     * @method excenter
     * @param {Vector2} vertexA 頂点A
     * @param {Vector2} vertexB 頂点B
     * @param {Vector2} vertexC 頂点C
     * @return {Array} 傍接円a,b,cの座標、半径の円データ
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
        x: (-sA * a.x + sB * b.x + sC * c.x) / (-sA + sB + sC),
        y: (-sA * a.y + sB * b.y + sC * c.y) / (-sA + sB + sC)
      },
          rA = s2 / (-sA + sB + sC),
          cA = new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vA.x, vA.y, rA);

      var vB = {
        x: (sA * a.x + -sB * b.x + sC * c.x) / (sA - b + sC),
        y: (sA * a.y + -sB * b.y + sC * c.y) / (sA - b + sC)
      },
          rB = s2 / (sA - sB + sC),
          cB = new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vB.x, vB.y, rB);

      var vC = {
        x: (sA * a.x + sB * b.x + -sC * c.x) / (sA + sB - c),
        y: (sA * a.y + sB * b.y + -sC * c.y) / (sA + sB - c)
      },
          rC = s2 / (sA + sB - sC),
          cC = new __WEBPACK_IMPORTED_MODULE_2__Circle__["a" /* default */](vC.x, vC.y, rC);

      return [cA, cB, cC];
    }

    /**
     * <h4>3点の座標から垂心座標を求めます</h4>
     *
     * @static
     * @method orthocenter
     * @param {Vector2} vertexA 頂点A
     * @param {Vector2} vertexB 頂点B
     * @param {Vector2} vertexC 頂点C
     * @return {Vector2} 垂心座標
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
        x: (a.x * tanA + b.x * tanB + c.x * tanC) / (tanA + tanB + tanC),
        y: (a.y * tanA + b.y * tanB + c.y * tanC) / (tanA + tanB + tanC)
      });
    }

    /**
     * <h4>3点の座標から重心座標を求めます</h4>
     * @static
     * @method centerGravity
     * @param {Vector2} vertexA 頂点A
     * @param {Vector2} vertexB 頂点B
     * @param {Vector2} vertexC 頂点C
     * @return {Vector2} 重心座標
     */

  }, {
    key: 'centerGravity',
    value: function centerGravity(vertexA, vertexB, vertexC) {
      return new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */]({
        x: (vertexA.x + vertexB.x + vertexC.x) / 3,
        y: (vertexA.y + vertexB.y + vertexC.y) / 3
      });
    }

    /**
     * <h4>三点の座標から辺の長さを返す</h4>
     * @static
     * @method offsetsToSides
     * @param {Vector2} vertexA 頂点A
     * @param {Vector2} vertexB 頂点B
     * @param {Vector2} vertexC 頂点C
     * @return {Array} a, b, cの辺の長さ
     */

  }, {
    key: 'verticesToSides',
    value: function verticesToSides(vertexA, vertexB, vertexC) {
      return [__WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].dist(vertexB, vertexC), __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].dist(vertexC, vertexA), __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].dist(vertexA, vertexB)];
    }

    /**
     * <h4>頂点から角度を求める</h4>
     * @static
     * @method verticesToAngles
     * @param {Vector2} vertexA 頂点A
     * @param {Vector2} vertexB 頂点B
     * @param {Vector2} vertexC 頂点C
     * @return {Array} a, b, c各辺の角度
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
     * <h4>三角形内に座標を含んでいるか</h4>
     * @static
     * @method inside
     * @param  {Triangle} triangle triangle
     * @param  {Vector2} vec2 Vector2
     * @return {Boolean}
     */

  }, {
    key: 'inside',
    value: function inside(triangle, vec2) {
      var flag = true;

      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](triangle.vertices, function (v, i) {
        var n = (i + 1) % 3;
        if (Triangle.ccw(vec2, v, triangle.vertices[n]) < 0) {
          flag = false;
          return false;
        }
      });

      return flag;
    }

    /**
     * <h4>反時計回り(Counter ClockWise)か調べ数値を返す</h4>
     * <p>反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す</p>
     *
     * @static
     * @method ccw
     * @param {Vec2} v1 Vec2
     * @param {Vec2} v2 Vec2
     * @param {Vec2} v3 Vec2
     * @return {Number} 反時計回りの場合は正の値、時計回りの場合は負の値、一直線上の場合は0を返す
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(10);

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara



global.INK = __WEBPACK_IMPORTED_MODULE_0__index__;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "argsToArray", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findMax", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findMin", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_39"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDevelop", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "nowDate", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_28"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasHash", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasString", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasUA", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UA", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ua", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_45"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_9"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_16"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRegexp", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_19"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMultibyte", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isOS", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWindows", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_21"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMac", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIos", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDevice", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_8"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSmartDevice", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_13"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSmartPhone", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_14"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTablet", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_17"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIPhone", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIPad", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIPod", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidPhone", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidTablet", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEdge", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isChrome", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFirefox", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSafari", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_12"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMobileSafari", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidBrowser", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMobileChrome", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIosChrome", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isAndroidChrome", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWebkit", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_20"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFileAPI", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRequestFileSystem", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_11"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isStorage", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_15"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTouchScreen", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_18"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getHash", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryHashMap", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_31"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PI", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TWO_PI", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "HARF_PI", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RAD_TO_DEG", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DEG_TO_RAD", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sqrt2", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_42"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radToCoord", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_32"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "degToCoord", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "coordToRad", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "coordToDeg", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "radToDeg", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_33"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "degToRad", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "diagonal", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "diagonalToSideLength", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_40"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fract", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "factorial", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "inRange", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isIntersect", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_22"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "smoothstep", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_41"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_27"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_24"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "random", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_34"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_35"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "roundToDigit", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_38"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zeroPadding", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_47"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createId", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "objectToQuery", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_29"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeSpace", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_36"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_37"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toHarfNumber", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_43"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_46"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "base64FileSize", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_25"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_44"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_30"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_26"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "log", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["_23"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_events__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return __WEBPACK_IMPORTED_MODULE_1__class_events__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ticker", function() { return __WEBPACK_IMPORTED_MODULE_1__class_events__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Mediaquery", function() { return __WEBPACK_IMPORTED_MODULE_1__class_events__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_utils__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Debug", function() { return __WEBPACK_IMPORTED_MODULE_2__class_utils__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return __WEBPACK_IMPORTED_MODULE_2__class_utils__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "WebCamera", function() { return __WEBPACK_IMPORTED_MODULE_2__class_utils__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_math__ = __webpack_require__(26);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BezierCurve", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Delaunay", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return __WEBPACK_IMPORTED_MODULE_3__class_math__["g"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara





// export * from "./class_algorithm"; 未実装

var VERSION = "0.0.3";



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDevelop; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

/**
 * @class Config
 */

/**
 * isDevelop 開発モードフラグ
 * @type {boolean}
 */
var isDevelop = true;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nowDate;
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
function nowDate() {
  var date = new Date();

  return {
    date: date,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};

/***/ }),
/* 13 */
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
/// Copyright (c) 2012 Yoshihito Fujiwara



/**
 * @class Has
 */
var url = window.location;

/**
 * <h4>LocationHashの有無</h4>
 * @static
 * @method hasHash
 * @param {String} key ハッシュ名 省略可
 * @return {Boolean}
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
 * <h4>文字列を検索し、指定の文字列があるか判定</h4>
 * @static
 * @method hasString
 * @param {String} str 対象の文字列
 * @param {String} haStr 検索文字
 * @return {Boolean}
 */
function hasString(str, hasStr) {
  return __WEBPACK_IMPORTED_MODULE_0__is__["M" /* isString */](str) && str.indexOf(hasStr) > -1;
};

/**
 * <h4>ユーザーエージェントに指定の文字列があるか判定します</h4>
 * @static
 * @method hasUA
 * @param {String} str 指定の文字列
 * @return {Boolean}
 */
function hasUA(str) {
  return __WEBPACK_IMPORTED_MODULE_0__is__["S" /* ua */].indexOf(str) > -1;
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHash;
/* harmony export (immutable) */ __webpack_exports__["b"] = queryHashMap;
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

/**
 * @class Location
 */
var url = window.location;

/*----------------------------------------------------------------------
  @method
----------------------------------------------------------------------*/
/**
 * <h4>hashを配列にして返す</h4>
 * @static
 * @method getHash
 * @return {Array} hashの配列
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
 * <h4>リクエストパラメータ値を連想配列として取得</h4>
 * @static
 * @method queryHashMap
 * @param {String} query urlもしくは、パラメーター。省略時は現在のURL
 * @return {Object} リクエストパラメータ値を連想配列にして返す
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TWO_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HARF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RAD_TO_DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEG_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return sqrt2; });
/* harmony export (immutable) */ __webpack_exports__["u"] = radToCoord;
/* harmony export (immutable) */ __webpack_exports__["j"] = degToCoord;
/* harmony export (immutable) */ __webpack_exports__["i"] = coordToRad;
/* harmony export (immutable) */ __webpack_exports__["h"] = coordToDeg;
/* harmony export (immutable) */ __webpack_exports__["v"] = radToDeg;
/* harmony export (immutable) */ __webpack_exports__["k"] = degToRad;
/* harmony export (immutable) */ __webpack_exports__["l"] = diagonal;
/* harmony export (immutable) */ __webpack_exports__["m"] = diagonalToSideLength;
/* harmony export (immutable) */ __webpack_exports__["g"] = compare;
/* harmony export (immutable) */ __webpack_exports__["z"] = sign;
/* harmony export (immutable) */ __webpack_exports__["o"] = fract;
/* harmony export (immutable) */ __webpack_exports__["f"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["n"] = factorial;
/* harmony export (immutable) */ __webpack_exports__["p"] = inRange;
/* harmony export (immutable) */ __webpack_exports__["q"] = isIntersect;
/* harmony export (immutable) */ __webpack_exports__["r"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["A"] = smoothstep;
/* harmony export (immutable) */ __webpack_exports__["t"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["s"] = map;
/* harmony export (immutable) */ __webpack_exports__["w"] = random;
/* harmony export (immutable) */ __webpack_exports__["x"] = randomInt;
/* harmony export (immutable) */ __webpack_exports__["y"] = roundToDigit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(2);
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara



/**
 * @class Math
 */

/**
 * <h4>π (半円)</h4>
 * @static
 * @property PI
 * @type {Number}
 */
var PI = Math.PI;

/**
 * <h4>π * 2 (円)</h4>
 * @static
 * @property TWO_PI
 * @type {Number}
 */
var TWO_PI = PI * 2;

/**
 * <h4>π * 2 (1/4円)</h4>
 * @static
 * @property HARF_PI
 * @type {Number}
 */
var HARF_PI = PI / 2;

/**
 * <h4>ラジアンからに角度変換する積数</h4>
 * @static
 * @property RAD_TO_DEG
 * @type {Number}
 */
var RAD_TO_DEG = 180 / PI;

/**
 * <h4>角度からラジアンに変換する積数</h4>
 * @static
 * @property DEG_TO_RAD
 * @type {Number}
 */
var DEG_TO_RAD = PI / 180;

/**
 * <h4>√2</h4>
 * @static
 * @property sqrt2
 * @type {Number}
 */
var sqrt2 = Math.sqrt(2);

/* Convert
-----------------------------------------------------------------*/
/**
 * <h4>ラジアンと半径から座標生成</h4>
 * @method radToCoord
 * @param  {Number} rad ラジアン
 * @param  {Number} radius 半径
 * @return {Object} x, y座標を格納したオブジェクト
 */
function radToCoord(rad, radius) {
  return {
    x: Math.cos(rad) * (radius || 1),
    y: Math.sin(rad) * (radius || 1)
  };
};

/**
 * <h4>角度と半径から座標を生成</h4>
 * @method degToCoord
 * @param  {Number} deg ラジアン
 * @param  {Number} radius 半径
 * @return {Object} x, y座標を格納したオブジェクト
 */
function degToCoord(deg, radius) {
  return radToCoord(degToRad(deg), radius || 1);
};

/**
 * <h4>座標からRadianを取得</h4>
 * @static
 * @method coordToRad
 * @param  {Number} x x座標値
 * @param  {Number} y y座標値
 * @return {Number} Radian
 */
function coordToRad(x, y) {
  return Math.atan2(y, x);
};

/**
 * <h4>座標からDegreesを取得</h4>
 * @static
 * @method coordToDeg
 * @param  {Number} x x座標値
 * @param  {Number} y y座標値
 * @return {Number} Degrees
 */
function coordToDeg(x, y) {
  return Math.atan2(y, x) * RAD_TO_DEG;
};

/**
 * <h4>ラジアンから角度を求める</h4>
 * @static
 * @method radToDeg
 * @param {Number} rad ラジアン
 * @return {Number} degree
 */
function radToDeg(rad) {
  return rad * RAD_TO_DEG;
};

/**
 * <h4>角度をラジアンに変換して返す</h4>
 * @static
 * @method degToRad
 * @param {Number} deg 角度
 * @return {Number} radian
 */
function degToRad(deg) {
  return deg * DEG_TO_RAD;
};

/**
 * <h4>対角線の長さ</h4>
 * @static
 * @method diagonal
 * @param  {Number} x 横
 * @param  {Number} y 縦
 * @return {Number}
 */
function diagonal(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

/**
 * <h4>対角線の長さから正方形の辺の長さを求める（なす角45°）</h4>
 * @static
 * @method diagonalToSideLength
 * @param  {Number} diagonal 対角線の長さ
 * @return {Rect}
 */
function diagonalToSideLength(diagonal) {
  return diagonal / utils.sqrt2;
}

/* Utilitys
-----------------------------------------------------------------*/
/**
 * <h4>順序付けのために2つの引数を比較</h4>
 * <p>引数が等しい場合は0、2番目より小さい場合は負の整数、<br>
 * 最初の引数が2番目の引数より大きい場合は正の整数を返す</p>
 * @static
 * @method compare
 * @param  {Number} num1 指定数値
 * @param  {Number} num2 比較数値
 * @return {Number} -1, 0, 1のいずれかの値
 */
function compare(num1, num2) {
  if (num1 === num2) {
    return 0;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 1;
  }
};

/**
 * <h4>値の符号化</h4>
 * <p>numが正なら+1.0、0.0なら0.0、負なら-1.0を返す</p>
 * @static
 * @method sign
 * @param  {Number} num
 * @return {Number} -1, 0, 1のいずれかの値
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
 * <h4>小数点を取り出す</h4>
 * @static
 * @method fract
 * @param  {Number} num
 * @return {Number}
 */
function fract(num) {
  return num - Math.floor(num);
};

/**
 * <h4>数値の有効範囲を適用して返す</h4>
 * @static
 * @method clamp
 * @param {Number} num 数値
 * @param {Number} min 最小値
 * @param {Number} max 最大値
 * @return {Number} 有効範囲を適用した数値
 */
function clamp(num, min, max) {
  return Math.max(Math.min(num, max), min);
};

/**
 * <h4>階乗の計算</h4>
 * @static
 * @method factorial
 * @param {Number} num 階乗数
 * @return {Number}
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
 * <h4>範囲内に値があるか</h4>
 * @static
 * @method inRange
 * @param  {Number} val 数値
 * @param  {Number} min 最小値
 * @param  {Number} max 最大値
 * @return {Boolean}
 */
function inRange(val, min, max) {
  return val >= Math.min(min, max) && val <= Math.max(min, max);
};

/**
 * <h4>範囲が交差するか</h4>
 * @static
 * @method isIntersect
 * @param  {Number} rangeMin1 範囲1の最小値
 * @param  {Number} rangeMax1 範囲1の最大値
 * @param  {Number} rangeMin2 範囲2の最小値
 * @param  {Number} rangeMax2 範囲2の最大値
 * @return {Boolean}
 */
function isIntersect(rangeMin1, rangeMax1, rangeMin2, rangeMax2) {
  return Math.max(rangeMin1, rangeMax1) >= Math.min(rangeMin2, rangeMax2) && Math.min(rangeMin1, rangeMax1) <= Math.max(rangeMin2, rangeMax2);
};

/**
 * <h4>指定の値を線形補間した値を返します</h4>
 * @static
 * @method lerp
 * @param  {Number} val 線形補間する指定の値
 * @param  {Number} min   最小値
 * @param  {Number} max   最大値
 * @return {Number}       線形補間した値
 */
function lerp(val, min, max) {
  return (max - min) * val + min;
};

/**
 * <h4>エルミート補完</h4>
 * <p>valを、minからmaxの範囲で正規化する</p>
 * @static
 * @method smoothstep
 * @param  {Number} val 線形補間する指定の値
 * @param  {Number} min   最小値
 * @param  {Number} max   最大値
 * @return {Number}       線形補間した値
 */
function smoothstep(val, min, max) {
  // return clamp((val - min) / (max - min), 0, 1);
  var t = clamp((val - min) / (max - min), 0, 1);
  return t * t * (3 - 2 * t);
};

/**
 * <h4>値を正規化します</h4>
 * @static
 * @method normalize
 * @param  {Number} val 正規化する値
 * @param  {Number} min   最小値
 * @param  {Number} max   最大値
 * @return {Number}       正規化した値
 */
function normalize(val, min, max) {
  return (val - min) / (max - min);
};

/**
 * <h4>値を最適化します</h4>
 * <p>valueを範囲scorpeA1 - scorpeA2から範囲scorpeB1 - scorpeB2へ変換</p>
 * @static
 * @method map
 * @param  {Number} val   最適化する値
 * @param  {Number} fromMin 現在基準の最小値
 * @param  {Number} fromMax 現在基準の最大値
 * @param  {Number} toMin 最適化基準の最小値
 * @param  {Number} toMax 最適化基準の最大値
 * @return {Number}         最適化した値
 */
function map(val, fromMin, fromMax, toMin, toMax) {
  return lerp(normalize(val, fromMin, fromMax), toMin, toMax);
};

/**
 * <h4>乱数の生成</h4>
 * @static
 * @param {Number} min 最小値 ※省略可
 * @param {Number} max 最大値 ※省略可
 * @param {Boolean} isInt 整数値を返すか ※省略可
 * @return {Number} 乱数を返します
 */
function random(min, max, isInt) {
  var random = Math.random(),
      value = void 0;

  if (arguments.length === 0 || __WEBPACK_IMPORTED_MODULE_0__is__["h" /* isBoolean */](min)) {
    isInt = min;
    value = random;
  } else if (arguments.length === 1 || __WEBPACK_IMPORTED_MODULE_0__is__["h" /* isBoolean */](max)) {
    isInt = max;
    value = random * min;
  } else {
    if (min > max) {
      var num = min;
      min = max;
      max = num;
    }
    value = random * (max - min) + min;
  }

  if (isInt) {
    return Math.round(value);
  } else {
    return value;
  }
};

/**
 * <h4>int型の乱数の生成</h4>
 * @static
 * @param {Number} min 最小値 ※省略可
 * @param {Number} max 最大値 ※省略可
 * @return {Number} 乱数を返します
 */
function randomInt(min, max) {
  return random(min, max, true);
}

/**
 * <h4>数を固定小数点に変換します</h4>
 * @static
 * @method roundToDigit
 * @param  {Number} value 値
 * @param  {Number} digit 固定小数点数
 * @return {Number}       固定小数点の数値
 */
function roundToDigit(val, digit) {
  var mult = Math.pow(10, digit);
  return Math.round(val * mult) / mult;
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["h"] = zeroPadding;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createId; });
/* harmony export (immutable) */ __webpack_exports__["b"] = digit;
/* harmony export (immutable) */ __webpack_exports__["c"] = objectToQuery;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeSpace;
/* harmony export (immutable) */ __webpack_exports__["e"] = replaceAll;
/* harmony export (immutable) */ __webpack_exports__["f"] = toHarfNumber;
/* harmony export (immutable) */ __webpack_exports__["g"] = uuid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(2);
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara




/**
 * @class String
 */

/// FIXME: 挙動確認
/**
 * zeroPadding 数値桁数を揃える
 * @param  {Number} value 値
 * @param  {Number} digit 桁数 (1桁=1, 2桁=2)
 * @param  {Boolean} isBeyondValue 指定したvalueが、揃える桁数を超えている場合桁数を揃えるか
 * @return {String}
 */
function zeroPadding(value, digit, isBeyondValue) {
  var _value = "" + value,
      zero = ("" + Math.pow(10, digit)).slice(1);

  if (digit * 10 > value || isBeyondValue) {
    return (zero + _value).slice(-digit);
  } else {
    return _value;
  }
};

/**
 * <h4>id生成します</h4>
 * <p>文字列にナンバーを追加して返します</p>
 *
 * @static
 * @method createId
 * @param {String} str id名 初期値: 'id_' 省略可
 * @return {String} 生成したid
 */
var createId = function () {
  var _count = 0;

  return function (str) {
    str = str ? str : "id_";
    return str + (_count += 1);
  };
}();

/**
 * <h4>ランダムな4桁のコードを返す</h4>
 * @static
 * @method digit
 * @return {String} ランダムな4桁のコード
 */
function digit() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
};

/**
 * <h4>objectToQuery オブジェクトをクエリ文字列に変換 (ネスト構造に再起処理はしません)</h4>
 * @static
 * @method objectToQuery
 * @param  {Object} obj 対象のオブジェクト
 * @param  {Boolean} isQuestion 先頭に?加えるか ※初期false
 * @return {String}
 */
function objectToQuery(obj, isQuestion) {
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
 * <h4>空白文字の削除</h4>
 * @static
 * @method removeSpace
 * @param {String} str 対象の文字列
 * @return {String} 空白文字を削除した文字列
 */
function removeSpace(str) {
  return str.replace(/\s+/g, "");
};

/**
 * <h4>文字列の全置換</h4>
 * <p>対象の文字列と、削除文字列がマッチしたものを全置換します</p>
 * @static
 * @method replaceAll
 * @param {String} str 置換対象の文字列
 * @param {String} del 削除する文字列
 * @param {String} add 追加する文字列
 * @return {String} 置換した文字列
 */
function replaceAll(str, del, add) {
  add = add ? add : "";
  return str.split(del).join(add);
};

/**
 * toHarfNumber 全角数値を半角数値へ変換
 * @param  {String} str 数値文字列
 * @return {String}
 */
function toHarfNumber(str) {
  str = str.replace(/-/g, "");
  return str.replace(/[０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
};

/**
 * <h4>UUIDの生成して返す</h4>
 * @static
 * @method uuid
 * @return {String} UUID
 */
function uuid() {
  return digit() + digit() + "-" + digit() + "-" + digit() + "-" + digit() + "-" + digit() + digit() + digit();
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = base64FileSize;
/* harmony export (immutable) */ __webpack_exports__["d"] = mixin;
/* harmony export (immutable) */ __webpack_exports__["b"] = getFunctionName;
/* harmony export (immutable) */ __webpack_exports__["g"] = typeOf;
/* harmony export (immutable) */ __webpack_exports__["f"] = preload;
/* harmony export (immutable) */ __webpack_exports__["e"] = noop;
/* harmony export (immutable) */ __webpack_exports__["c"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara




/**
 * @class Utility
 */

/**
 * <h4>base64画像のファイルサイズ取得(bytes)</h4>
 * <p>厳密なファイルサイズではありません。
 * デバッグ時におおよそのファイルサイズを見るために使用しますので多少誤差があります</p>
 * @static
 * @method base64FileSize
 * @param  {Base64} base64 base64画像
 * @return {Number} bytes
 */
function base64FileSize(base64) {
  var len = base64.indexOf(";base64,") + 8,
      bytes = (base64.length - len) * 3 / 4;
  return bytes;
};

/**
 * <h4>オブジェクトの拡張</h4>
 * @static
 * @method mixin
 * @param {Boolean} isDeep ディープコピーするか 初期値: false 省略可
 * @param {Object} arguments 拡張するオブジェクト
 * @return {Object} 拡張したオブジェクトを返します
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
        src = target[name];
        copy = options[name];

        if (target === copy) {
          continue;
        }

        if (deep && copy && (__WEBPACK_IMPORTED_MODULE_0__is__["F" /* isPlainObject */](copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && __WEBPACK_IMPORTED_MODULE_0__is__["F" /* isPlainObject */](src) ? src : {};
          }
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
 * <h4>匿名関数名を返す</h4>
 * <p>無名関数はundefinedを返します</p>
 * @static
 * @method getFunctionName
 * @param {Function} fn 名前を取得したい関数
 * @return {String} 関数名
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
 * <h4>型名取得</h4>
 * @static
 * @method typeOf
 * @param {Object} 判定するオブジェクト
 * @return {String} 型名を返す
 */
function typeOf(obj) {
  if (__WEBPACK_IMPORTED_MODULE_0__is__["g" /* isArray */](obj)) {
    return "array";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["h" /* isBoolean */](obj)) {
    return "boolean";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["p" /* isFunction */](obj)) {
    return "function";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["B" /* isNumber */](obj)) {
    return "number";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["D" /* isObject */](obj)) {
    return "object";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["M" /* isString */](obj)) {
    return "string";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["G" /* isRegexp */](obj)) {
    return "regexp";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["A" /* isNull */](obj)) {
    return "null";
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["P" /* isUndefined */](obj)) {
    return "undefined";
  } else if (obj.toString && obj.toString()) {
    return obj.toString().toLowerCase();
  }
};

/**
 * <h4>画像のプリロード</h4>
 * @static
 * @method preload
 * @param {String} src 画像パス
 * @return {Image} 生成した、イメージ要素
 */
function preload(src) {
  var img = new Image();
  img.src = src;
  return img;
};

/**
 * <h4>空の関数</h4>
 * @static
 * @method noop
 * @return {Function}
 */
function noop() {};

/**
 * <h4>コンソールログの出力</h4>
 * @static
 * @method log
 * @return {Function}
 */
function log() {
  if (!INK || INK.isDevelop) {
    console.log.apply(console, __WEBPACK_IMPORTED_MODULE_1__array__["a" /* argsToArray */](arguments));
  }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Events__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ticker__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Ticker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mediaquery__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Mediaquery__["a"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara





/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara




// MAX_FPS {Number} FPSのMAX値
var MAX_FPS = 60;

/**
 * <h4>Ticker</h4>
 * <p>fpsの設定値は、FPSの実行を保証するものではありません。実際の処理ではFPS値が前後する場合があります</p>
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
     * <h4>イベントリスト</h4>
     * @private
     * @property _EVENTS
     * @type {Object}
     */
    var _this = _possibleConstructorReturn(this, (Ticker.__proto__ || Object.getPrototypeOf(Ticker)).call(this));

    _this._EVENTS = {
      TICK: "tick"
    };

    /**
     * <h4>フレームレート</h4>
     * @property fps
     * @type {Number}
     */
    _this.fps = MAX_FPS;

    /**
     * <h4>tickイベント毎にカウントされます</h4>
     * @property tickCount
     * @type {Number}
     */
    _this.tickCount = 1;

    /**
     * <h4>requestAnimationFrame毎にカウントされます</h4>
     * @property fpsCount
     * @type {Number}
     */
    _this.fpsCount = 1;

    /**
     * <h4>初回tickイベントが呼び出された時間</h4>
     * @property startTime
     * @type {Number}
     */
    _this.startTime = 0;

    /**
     * <h4>最後にtickイベントが呼び出された時間</h4>
     * @property lastTime
     * @type {Number}
     */
    _this.lastTime = 0;

    /**
     * <h4>tickイベントの再起処理呼び出されているか</h4>
     * @private
     * @property _isTick
     * @type {Boolean}
     */
    _this._isTick = false;

    /**
     * <h4>tickイベントタイマーid</h4>
     * @private
     * @property _tickerId
     * @type {String}
     */
    _this._tickerId = null;
    return _this;
  }

  /**
   * <h4>FPSの設定(1-60内の値)</h4>
   * @method setFPS
   * @param {Number} fps 1-60fps
   * @return {Ticker}
   */


  _createClass(Ticker, [{
    key: "setFPS",
    value: function setFPS(fps) {
      this.fps = __WEBPACK_IMPORTED_MODULE_1__utils__["i" /* clamp */](fps, 1, MAX_FPS);
      return this;
    }

    /**
     * <h4>値のリセット</h4>
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
     * <h4>イベント登録</h4>
     * <p>イベント名に属性名を付与するも可能</p>
     * @overide
     * @method on
     * @param {String} type イベントタイプ
     * @param {Function} listener イベントリスナー
     * @param {Object} context コンテキスト
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
     * <h4>イベント削除</h4>
     * <p>type省略時は、全てのイベントを削除<br>
     * listener省略時は、指定イベントタイプ全て削除</p>
     * @overide
     * @method off
     * @param {String} type イベントタイプ 省略可
     * @param {Function} listener イベントリスナー 省略可
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
     * <h4>requestAnimationFrameの再起処理</h4>
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Author Yoshihito Fujiwara
/// Source https://bitbucket.org/yoshihitofujiwara/ampjs
/// Copyright (c) 2012 Yoshihito Fujiwara




/// NOTE: アップデート予定なし
/**
 * <h4>Mediaqueryのブレイクポイントイベント</h4>
 * <p>!!!: 対象の要素(head)にcssでフォントファミリーを指定してください<br>
 * ブレイクポイントで変更した、フォントファミリーをイベントオブジェクトに渡します<br>
 * シングルトン: コンストラクタを呼び出しで使用しません｡</p>
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
     * <h4>イベントリスト</h4>
     * @private
     * @property _EVENTS
     * @type {Object}
     */
    var _this = _possibleConstructorReturn(this, (Mediaquery.__proto__ || Object.getPrototypeOf(Mediaquery)).call(this));

    _this._EVENTS = {
      CHANGE: "change"
    };

    /**
     * <h4>スタイルを監視する要素</h4>
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
     * <h4>要素を監視しているか</h4>
     * @property isObserver
     * @default false
     * @type {Boolean}
     */
    _this.isObserver = false;

    /**
     * <h4>監視するスタイル名</h4>
     * @property observeStyle
     * @default "font-family"
     * @type {String}
     */
    _this.observeStyle = "font-family";

    /**
     * <h4>要素の現在のスタイルを保管します</h4>
     * @property mediaStyle
     * @type {String}
     */
    _this.mediaStyle = null;
    return _this;
  }

  /**
   * <h4>イベントコントローラー</h4>
   * <p>状態を監視し、フォトサイズに変更があればイベントを発行します</p>
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
     * <h4>イベント登録</h4>
     * @method on
     * @param {String} type イベントタイプ
     * @param {Function} listener イベントリスナー
     * @param {Object} context コンテキスト
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
     * <h4>イベント発行</h4>
     * <p>第二引数以降に値を渡すとcallbackに引数として渡します</p>
     * @method trigger
     * @param {String} type イベントタイプ
     * @return {Events}
     */
    value: function trigger(type) {
      var events = this._getEventNameMap(type),
          listeners = this._listeners[events.type],
          args = __WEBPACK_IMPORTED_MODULE_1__utils__["g" /* argsToArray */](arguments, 1);

      args.unshift({ mediaStyle: this.mediaStyle, eventType: type });

      if (listeners) {
        __WEBPACK_IMPORTED_MODULE_1__utils__["s" /* each */](listeners, function (item) {
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Debug__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Debug__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ease__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Ease__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WebCamera__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__WebCamera__["a"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

// export { default as Color } from './Color'; 実装予定


// export { default as LFO } from './LFO'; 実装予定


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara



var DOC = document;

// view要素を格納オブジェクト
var _views = null;

// viewの表示状態
var _isShow = true;

// ログ出力の有効・無効
var _isChangeLog = true;

// NOTE: アップデート予定なし
/**
 * <h4>デバッグ機能を提供します</h4>
 * <p>!!!: コンストラクタを呼び出しで、使用しません</p>
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
   * <h4>view要素を生成</h4>
   * @private
   * @static
   * @method _createView
   * @return {Void}
   */


  _createClass(Debug, null, [{
    key: '_createView',
    value: function _createView() {
      // view要素生成
      var childNode = '<div style="min-width:250px;font-size:12px;background:#41454e;">\n<div style="padding:5px;line-height:12px;font-weight:bold;color:#f9f9f9!important;text-align:center;background:#272a32;">DEBUG</div>\n<textarea id="INKJS_DEBUG_TEXT" style="box-sizing:border-box;width:100%;min-height:150px;padding:10px;font-family:consolas;color:#272a32!important;font-size:14px;line-height:1.5;border:5px solid #41454e;"></textarea>\n</div>';

      // view要素の追加
      var el = DOC.createElement("div");

      el.id = "INKJS_DEBUG";
      el.setAttribute("style", "position:fixed;z-index:9999999;left:10px;bottom:10px;");
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
     * <h4>viewイベント設定</h4>
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
      _views.wrap.addEventListener("mousedown", function () {
        isDrag = true;
      });

      // move
      DOC.addEventListener("mousemove", function () {
        if (isDrag) {
          var _x = event.clientX,
              _y = event.clientY;

          if (AMP.isNumber(x)) {
            var diffX = _x - x,
                diffY = _y - y;

            x = _x;
            y = _y;

            var position = "position:fixed;";
            position += "top:" + (_views.wrap.offsetTop + diffY) + "px;";
            position += "left:" + (_views.wrap.offsetLeft + diffX) + "px;";
            _views.wrap.setAttribute("style", position);
            return false;
          } else {
            x = _x;
            y = _y;
          }
        }
      });

      // up
      DOC.addEventListener("mouseup", function () {
        isDrag = false;
        x = null;
        y = null;
      });

      // cancel
      _views.text.addEventListener("mousemove", function () {
        isDrag = false;
      });
    }

    /**
     * <h4>ログを出力します</h4>
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
        __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* argsToArray */](arguments), function (data) {
          // データタイプに合わせてログを出力
          if (__WEBPACK_IMPORTED_MODULE_0__utils__["I" /* isArray */](data)) {
            _views.text.value += JSON.stringify(data) + "\n";
          } else if (__WEBPACK_IMPORTED_MODULE_0__utils__["_7" /* isObject */](data)) {
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
     * <h4>ログのクリア</h4>
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
     * <h4>ログ出力を開始します</h4>
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
     * <h4>ログ出力を停止します</h4>
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
     * <h4>ログviewを非表示にします</h4>
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
     * <h4>ログviewを表示します</h4>
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
     * <h4>ログの表示状態</h4>
     * @static
     * @method isShow
     * @return {Boolean}
     */

  }, {
    key: 'isShow',
    value: function isShow() {
      return _isShow;
    }

    /**
     * <h4>ログの表示状態</h4>
     * @static
     * @method position
    * @param {Number} x
    * @param {Number} y
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Ease;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara



/**
 * <h4>Ease</h4>
 * @class Ease
 * @constructor
 **/
function Ease() {}

/**
 * <h4>PowIn</h4>
 * @static
 * @method createPowIn
 * @param {Number} pow
 * @return {Function}
 **/
Ease.createPowIn = function (pow) {
  return function (t) {
    return Math.pow(t, pow);
  };
};

/**
 * <h4>PowOut</h4>
 * @static
 * @method createPowOut
 * @param {Number} pow
 * @return {Function}
 **/
Ease.createPowOut = function (pow) {
  return function (t) {
    return 1 - Math.pow(1 - t, pow);
  };
};

/**
 * <h4>PowInOut</h4>
 * @static
 * @method createPowInOut
 * @param {Number} pow
 * @return {Function}
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
 * <h4>BackIn</h4>
 * @static
 * @method createBackIn
 * @param {Number} amount
 * @return {Function}
 **/
Ease.createBackIn = function (amount) {
  return function (t) {
    return t * t * ((amount + 1) * t - amount);
  };
};

/**
 * <h4>BackOut</h4>
 * @static
 * @method createBackOut
 * @param {Number} amount
 * @return {Function}
 **/
Ease.createBackOut = function (amount) {
  return function (t) {
    return --t * t * ((amount + 1) * t + amount) + 1;
  };
};

/**
 * <h4>BackInOut</h4>
 * @static
 * @method createBackInOut
 * @param {Number} amount
 * @return {Function}
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
 * <h4>ElasticIn</h4>
 * @static
 * @method createElasticIn
 * @param {Number} amplitude
 * @param {Number} period
 * @return {Function}
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
 * <h4>ElasticOut</h4>
 * @static
 * @method createElasticOut
 * @param {Number} amplitude
 * @param {Number} period
 * @return {Function}
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
 * <h4>ElasticInOut</h4>
 * @static
 * @method createElasticInOut
 * @param {Number} amplitude
 * @param {Number} period
 * @return {Function}
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
 * @param {Number} t
 * @return {Number}
 **/
Ease.linear = function (t) {
  return t;
};

/**
 * @static
 * @method sineIn, easeInSine
 * @param {Number} t
 * @return {Number}
 **/
Ease.sineIn = Ease.easeInSine = function (t) {
  return 1 - Math.cos(t * Math.PI / 2);
};

/**
 * @static
 * @method sineOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.sineOut = Ease.easeOutSine = function (t) {
  return Math.sin(t * Math.PI / 2);
};

/**
 * @static
 * @method sineInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.sineInOut = Ease.easeInOutSine = function (t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
};

/**
 * @static
 * @method quadIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.quadIn = Ease.easeInQuad = Ease.createPowIn(2);

/**
 * @static
 * @method quadOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quadOut = Ease.easeOutQuad = Ease.createPowOut(2);

/**
 * @static
 * @method quadInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quadInOut = Ease.easeInOutQuad = Ease.createPowInOut(2);

/**
 * @static
 * @method cubicIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.cubicIn = Ease.easeInCubic = Ease.createPowIn(3);

/**
 * @static
 * @method cubicOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.cubicOut = Ease.easeOutCubic = Ease.createPowOut(3);

/**
 * @static
 * @method cubicInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.cubicInOut = Ease.easeInOutCubic = Ease.createPowInOut(3);

/**
 * @static
 * @method quartIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.quartIn = Ease.easeInQuart = Ease.createPowIn(4);

/**
 * @static
 * @method quartOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quartOut = Ease.easeOutQuart = Ease.createPowOut(4);

/**
 * @static
 * @method quartInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quartInOut = Ease.easeInOutQuart = Ease.createPowInOut(4);

/**
 * @static
 * @method quintIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.quintIn = Ease.easeInQuint = Ease.createPowIn(5);

/**
 * @static
 * @method quintOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quintOut = Ease.easeOutQuint = Ease.createPowOut(5);

/**
 * @static
 * @method quintInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quintInOut = Ease.easeInOutQuint = Ease.createPowInOut(5);

/**
 * @static
 * @method expoIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.expoIn = Ease.easeInExpo = Ease.createPowIn(6);

/**
 * @static
 * @method expoOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.expoOut = Ease.easeOutExpo = Ease.createPowOut(6);

/**
 * @static
 * @method expoInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.expoInOut = Ease.easeInOutExpo = Ease.createPowInOut(6);

/**
 * @static
 * @method circIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.circIn = Ease.easeInCirc = function (t) {
  return -(Math.sqrt(1 - t * t) - 1);
};

/**
 * @static
 * @method circOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.circOut = Ease.easeOutCirc = function (t) {
  return Math.sqrt(1 - --t * t);
};

/**
 * @static
 * @method circInOut
 * @param {Number} t
 * @return {Number}
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
 * @param {Number} t
 * @return {Number}
 **/
Ease.backIn = Ease.easeInBack = Ease.createBackIn(1.7);

/**
 * @static
 * @method backOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.backOut = Ease.easeOutBack = Ease.createBackOut(1.7);

/**
 * @static
 * @method backInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.backInOut = Ease.easeInOutBack = Ease.createBackInOut(1.7);

/**
 * @static
 * @method elasticIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.elasticIn = Ease.easeInElastic = Ease.createElasticIn(1, 0.3);

/**
 * @static
 * @method elasticOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.elasticOut = Ease.easeOutElastic = Ease.createElasticOut(1, 0.3);

/**
 * @static
 * @method elasticInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.elasticInOut = Ease.easeInOutElastic = Ease.createElasticInOut(1, 0.3 * 1.5);

/**
 * @method bounceIn
 * @param {Number} t
 * @static
 * @return {Number}
 **/
Ease.bounceIn = Ease.easeInBounce = function (t) {
  return 1 - Ease.bounceOut(1 - t);
};

/**
 * @static
 * @method bounceOut
 * @param {Number} t
 * @return {Number}
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
 * @param {Number} t
 * @return {Number}
 **/
Ease.bounceInOut = Ease.easeInOutBounce = function (t) {
  if (t < 0.5) {
    return Ease.bounceIn(t * 2) * 0.5;
  } else {
    return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
  }
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_events_Events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_get_user_media_promise__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_get_user_media_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_get_user_media_promise__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara





/**
 * <h4>WebCamera</h4>
 * @class WebCamera
 * @constructor
 */

var WebCamera = function (_Events) {
  _inherits(WebCamera, _Events);

  /**
   * constructor
   */
  function WebCamera(video, options) {
    _classCallCheck(this, WebCamera);

    /**
     * <h4>イベントリスト</h4>
     * @private
     * @property _EVENTS
     * @type {Object}
     */
    var _this = _possibleConstructorReturn(this, (WebCamera.__proto__ || Object.getPrototypeOf(WebCamera)).call(this));

    _this._EVENTS = {
      // FAIL        : 'fail',
      DONE: "done",
      ERROR: "error",
      LOAD: "load"
    };

    /// FIXME: offscreenレンダリング可能か？
    /**
     * <h4>表示用video</h4>
     * @property video
     * @type {DOM}
     */
    _this.video = video;

    /**
     * options
     * @type {Object}
     */
    _this.options = __WEBPACK_IMPORTED_MODULE_1__utils__["_25" /* mixin */](true, {
      constraints: {
        video: true,
        audio: false
      }
    }, options);
    return _this;
  }

  /**
   * setup
   * @return {WebCamera}
   */


  _createClass(WebCamera, [{
    key: "setup",
    value: function setup() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_2_get_user_media_promise___default()(this.options.constraints).then(function (stream) {
        _this2.trigger(_this2._EVENTS.DONE, stream);
        _this2.video.src = window.URL.createObjectURL(stream);
        _this2.video.onloadedmetadata = function (evt) {
          _this2.trigger(_this2._EVENTS.LOAD, evt);
        };
      }).catch(function (err) {
        _this2.trigger(_this2._EVENTS.ERROR, err);
        __WEBPACK_IMPORTED_MODULE_1__utils__["_23" /* log */](err.name + ": " + err.message);
      });

      return this;
    }

    /**
     * play
     * @return {WebCamera}
     */

  }, {
    key: "play",
    value: function play() {
      this.video.play();
      return this;
    }

    /**
     * pause
     * @return {WebCamera}
     */

  }, {
    key: "pause",
    value: function pause() {
      this.video.pause();
      return this;
    }

    // /**
    //  * @static
    //  * @method getUserMedia
    //  * @return {getUserMedia}
    //  */
    // static getUserMedia

  }]);

  return WebCamera;
}(__WEBPACK_IMPORTED_MODULE_0__class_events_Events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (WebCamera);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// loosely based on example code at https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
(function (root) {
  'use strict';

  /**
   * Error thrown when any required feature is missing (Promises, navigator, getUserMedia)
   * @constructor
   */
  function NotSupportedError() {
    this.name = 'NotSupportedError';
    this.message = 'getUserMedia is not implemented in this browser';
  }
  NotSupportedError.prototype = Error.prototype;

  /**
   * Fake Promise instance that behaves like a Promise except that it always rejects with a NotSupportedError.
   * Used for situations where there is no global Promise constructor.
   *
   * The message will report that the getUserMedia API is not available.
   * This is technically true because every browser that supports getUserMedia also supports promises.
   **
   * @see http://caniuse.com/#feat=stream
   * @see http://caniuse.com/#feat=promises
   * @constructor
   */
  function FakePromise() {
    // make it chainable like a real promise
    this.then = function() {
      return this;
    };

    // but always reject with an error
    var err = new NotSupportedError();
    this.catch = function(cb) {
      setTimeout(function () {
        cb(err);
      });
    }
  }

  var isPromiseSupported = typeof Promise !== 'undefined';

  // checks for root.navigator to enable server-side rendering of things that depend on this
  // (will need to be updated on client, but at least doesn't throw this way)
  var navigatorExists = typeof navigator !== "undefined";
  // gump = mondern promise-based interface
  // gum = old callback-based interface
  var gump = navigatorExists && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  var gum = navigatorExists && (navigator.getUserMedia || navigator.webkitGetUserMedia ||  navigator.mozGetUserMedia || navigator.msGetUserMedia);

  /**
   * Wrapper for navigator.mediaDevices.getUserMedia.
   * Always returns a Promise or Promise-like object, even in environments without a global Promise constructor
   *
   * @stream https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
   *
   * @param {Object} constraints - must include one or both of audio/video along with optional details for video
   * @param {Boolean} [constraints.audio] - include audio data in the stream
   * @param {Boolean|Object} [constraints.video] - include video data in the stream. May be a boolean or an object with additional constraints, see
   * @returns {Promise<MediaStream>} a promise that resolves to a MediaStream object
     */
  function getUserMedia(constraints) {
    // ensure that Promises are supported and we have a navigator object
    if (!isPromiseSupported) {
      return new FakePromise();
    }

    // Try the more modern, promise-based MediaDevices API first
    //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    if(gump) {
      return navigator.mediaDevices.getUserMedia(constraints);
    }

    // fall back to the older method second, wrap it in a promise.
    return new Promise(function(resolve, reject) {
      // if navigator doesn't exist, then we can't use the getUserMedia API. (And probably aren't even in a browser.)
      // assuming it does, try getUserMedia and then all of the prefixed versions

      if (!gum) {
        return reject(new NotSupportedError());
      }
      gum.call(navigator, constraints, resolve, reject);
    });
  }

  getUserMedia.NotSupportedError = NotSupportedError;

  // eslint-disable-next-line no-implicit-coercion
  getUserMedia.isSupported = !!(isPromiseSupported && (gump || gum));

  // UMD, loosely based on https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return getUserMedia;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = getUserMedia;
  } else {
    // Browser globals
    // polyfill the MediaDevices API if it does not exist.
    root.navigator || (root.navigator = {});
    root.navigator.mediaDevices || (root.navigator.mediaDevices = {});
    root.navigator.mediaDevices.getUserMedia || (root.navigator.mediaDevices.getUserMedia = getUserMedia);
  }
}(this));


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BezierCurve__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__BezierCurve__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Line__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__Line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Size__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__Size__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Vector2__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__Vector2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Circle__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__Circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Delaunay__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__Delaunay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Rect__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__Rect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Triangle__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_7__Triangle__["a"]; });



// export { default as Matrix2 } from './Matrix2'; 実装予定




// export { default as Polygon } from './Polygon'; // 実装予定



/***/ }),
/* 27 */
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
/// Copyright (c) 2012 Yoshihito Fujiwara





/**
 * <h4>ベジェ曲線</h4>
 * @class BezierCurve
 * @param {Array} vertices パスポイントリスト
 * @param {Number} placing ベジェ曲線状の位置(0-1)
 */

var BezierCurve = function () {
  /**
   * constructor
   */
  function BezierCurve(vertices, placing) {
    _classCallCheck(this, BezierCurve);

    /**
     * <h4>パス座標リスト</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = vertices;

    /**
     * <h4>ベジェ曲線上の位置（正規化された値）</h4>
     * @properth placing
     * @type {Number}
     */
    this.placing = placing || 0;

    /**
     * position 現在のポジション
     * @type {Vector2}
     */
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](vertices[0].x, vertices[0].y);

    /**
     * <h4>始点からのラジアン角</h4>
     * @property rad
     * @type {Number}
     */
    this.rad = null;

    // コンストラクタ呼び出し時、スタート座標をセット
    this.update(this.placing);
  }

  /**
   * <h4>2次ベジエ曲線</h4>
   * @static
   * @method quadratic
   * @param  {Vector2} startPoint 開始位置
   * @param  {Vector2} pathPoint  パスポイント
   * @param  {Vector2} endPoint   終了位置
   * @param  {Number} placing パスポイント（軌道）位置 (0 < 1)
   * @return {BezierCurve}
   */


  _createClass(BezierCurve, [{
    key: "clone",


    /**
     * <h4>インスタンスのcloneを生成</h4>
     * @method clone
     * @return {BezierCurve}
     */
    value: function clone() {
      return new BezierCurve(this.vertices, this.placing);
    }

    /**
     * <h4>パスポイントのイテレーション処理</h4>
     * @method each
     * @param {Function} callback コールバック関数
     * @return {BezierCurve}
     */

  }, {
    key: "each",
    value: function each(callback) {
      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](this.vertices, callback);
      return this;
    }

    /**
     * <h4>現在地を更新</h4>
     *
     * @method update
     * @param {Number} placing パスポイント（軌道）位置 (0 < 1)
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
          factNum = __WEBPACK_IMPORTED_MODULE_0__utils__["t" /* factorial */](max),
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
          a = factNum / (__WEBPACK_IMPORTED_MODULE_0__utils__["t" /* factorial */](max - i) * __WEBPACK_IMPORTED_MODULE_0__utils__["t" /* factorial */](i));
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
  }], [{
    key: "quadratic",
    value: function quadratic(startPoint, pathPoint, endPoint, placing) {
      return new BezierCurve([startPoint, pathPoint, endPoint], placing);
    }

    /**
     * <h4>3次ベジエ曲線</h4>
     * @static
     * @method cubicz
     * @param  {Vector2} startPoint 開始位置
     * @param  {Vector2} pathPoint1 パスポイント1
     * @param  {Vector2} pathPoint2 パスポイント2
     * @param  {Vector2} endPoint   終了位置
     * @param  {Number} placing パスポイント（軌道）位置 (0 < 1)
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector2__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara




/**
 * <h4>Line</h4>
 * @class Line
 * @param {Vector2} vec1 開始座標オブジェクト
 * @param {Vector2} vec2 終了座標オブジェクト
 */

var Line = function () {
  /**
   * constructor
   */
  function Line(vec1, vec2) {
    _classCallCheck(this, Line);

    /**
     * <h4>頂点リスト</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = [vec1, vec2];
  }

  /**
    * <h4>二つの直線(延長線含む)の交差点を返します</h4>
    * <p>交差点がない場合、nullを返します</p>
    * @static
    * @method intersection
    * @param {Line} line1 Lineインスタンス1
    * @param {Line} line2 Lineインスタンス2
    * @return {Vector2} 交差点座標オブジェクト
    */


  _createClass(Line, [{
    key: "clone",


    /**
     * <h4>Lineのクローンを生成します</h4>
     * @method clone
     * @return {Line}
     */
    value: function clone() {
      return new Line(this.vertices[0], this.vertices[1]);
    }

    /**
     * <h4>Lineの始点・終点をセットします</h4>
     * @method setVertices
     * @param {Vector2} v1 開始座標オブジェクト
     * @param {Vector2} v2 終了座標オブジェクト
     */

  }, {
    key: "setVertices",
    value: function setVertices(v1, v2) {
      this.vertices[0] = v1 || this.vertices[0];
      this.vertices[1] = v2 || this.vertices[1];
      return this;
    }

    /**
     * <h4>スタートからエンドポイントの距離(大きさ)</h4>
     * @method mag
     * @return {Number}
     */

  }, {
    key: "mag",
    value: function mag() {
      return this.vertices[0].clone().sub(this.vertices[1]).mag();
    }

    /**
     * <h4>Lineのアングル(ラジアン角)を返します</h4>
     * @method angle
     * @return {Number}
     */

  }, {
    key: "angle",
    value: function angle() {
      var v = new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */](this.vertices[0].x, this.vertices[0].y);
      v.add({
        x: this.vertices[1].x - this.vertices[0].x,
        y: this.vertices[1].y - this.vertices[0].y
      });
      return v.angle();
    }
  }], [{
    key: "intersection",
    value: function intersection(line1, line2) {
      var p1 = line1.vertices[0],
          p2 = line1.vertices[1],
          p3 = line2.vertices[0],
          p4 = line2.vertices[1];

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
     * <h4>直線の交点を返します</h4>
     * @static
     * @method cross
     * @param {Line} line1 Lineインスタンス1
     * @param {Line} line2 Lineインスタンス2
     * @return {Vector2} 交差点座標オブジェクト
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
     * <h4>二つの直線が交わるかチェックします(延長線は含まない)</h4>
     * @static
     * @method intersection
     * @param {Line} line1 Lineインスタンス1
     * @param {Line} line2 Lineインスタンス2
     * @return {Boolean}
     */

  }, {
    key: "isIntersection",
    value: function isIntersection(line1, line2) {
      var p = Line.intersection(line1, line2);

      if (p === null) {
        return false;
      }

      var p1 = line1.vertices[0],
          p2 = line1.vertices[1],
          p3 = line2.vertices[0],
          p4 = line2.vertices[1],
          a = (p.x - p1.x) * (p.x - p2.x) + (p.y - p1.y) * (p.y - p2.y) <= 0,
          b = (p.x - p3.x) * (p.x - p4.x) + (p.y - p3.y) * (p.y - p4.y) <= 0;

      return a && b;
    }

    /**
     * <h4>二つの直線が等しいかチェックします</h4>
     * @static
     * @method equals
     * @param {Line} line1 Lineインスタンス1
     * @param {Line} line2 Lineインスタンス2
     * @param {Boolean} isBoth もしくはstart、endが逆方向でマッチした場合も判定するか
     * @return {Boolean}
     */

  }, {
    key: "equals",
    value: function equals(line1, line2, isBoth) {
      var flag = __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.vertices[0], line2.vertices[0]) && __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.vertices[1], line2.vertices[1]);

      if (isBoth && !flag) {
        flag = __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.vertices[1], line2.vertices[0]) && __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* default */].equals(line1.vertices[0], line2.vertices[1]);
      }

      return flag;
    }
  }]);

  return Line;
}();

/* harmony default export */ __webpack_exports__["a"] = (Line);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Triangle__ = __webpack_require__(7);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara






/**
 * <h4>Delaunay</h4>
 * @class Delaunay
 * @param {Number} width Delaunay領域の幅
 * @param {Number} height Delaunay領域の高さ
 * @param {Array} vertices 頂点リスト
 */

var Delaunay = function () {
  /**
   * constructor
   */
  function Delaunay(width, height, vertices) {
    _classCallCheck(this, Delaunay);

    /**
     * <h4>Delaunay領域の幅</h4>
     * @property width
     * @type {Number}
     */
    this.width = width || 0;

    /**
     * <h4>Delaunay領域の高さ</h4>
     * @property width
     * @type {Number}
     */
    this.height = height || 0;

    /**
     * <h4>頂点リスト</h4>
     * @property vertices
     * @type {Array}
     */
    this.vertices = vertices || [];

    /**
     * <h4>生成したDelaunay</h4>
     * @property delaunays
     * @type {Array}
     */
    this.delaunays = [];

    /**
     * <h4>ランダムポイント生成時の再起処理の制限最大回数</h4>
     * @property maxAttempts
     * @type {Number}
     */
    this.maxAttempts = 1000;
  }

  /**
   * <h4>初期値にセット</h4>
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
     * <h4>Delaunay領域の設定</h4>
     * @method setSize
     * @param {Number} width Delaunay領域の幅
     * @param {Number} height Delaunay領域の高さ
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
     * <h4>頂点リストの設定</h4>
     * <p>設定されている頂点リストを削除して設定しなおします</p>
     * @method setVertices
     * @param {Array} vertices 頂点リスト
     * @return {Delaunay}
     */

  }, {
    key: "setVertices",
    value: function setVertices(vertices) {
      this.vertices = vertices;
      return this;
    }

    /**
     * <h4>頂点削除</h4>
     * @method removeVertex
     * @param {Number} 削除するインデックス ※引数がない場合、全て削除
     * @param {Number} 削除数
     * @return {Delaunay}
     */

  }, {
    key: "removeVertex",
    value: function removeVertex(index, len) {
      if (__WEBPACK_IMPORTED_MODULE_0__utils__["_5" /* isNumber */](index)) {
        this.vertices.splice(index, len || 1);
      } else {
        this.vertices = [];
      }
      return this;
    }

    /**
     * <h4>Delaunay削除</h4>
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
     * <h4>ランダムな頂点を生成</h4>
     * <p>生成後自動的に、setVerticesで頂点リストを設定します</p>
     * @method randomVertices
     * @param {Number} interval 頂点同士の間隔
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
          x: __WEBPACK_IMPORTED_MODULE_0__utils__["_34" /* random */](1, this.width - 1, true),
          y: __WEBPACK_IMPORTED_MODULE_0__utils__["_34" /* random */](1, this.height - 1, true)
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
     * <h4>Delaunay領域の辺に、指定した間隔の頂点を生成して返す</h4>
     * @method getOuterVertices
     * @param {Number} interval 間隔
     * @param {Boolean} isRandom 間隔のランダム性を有効にするか
     * @return {Array} Delaunay領域の辺に、指定した間隔の頂点を生成して返す
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
            vertex += interval + __WEBPACK_IMPORTED_MODULE_0__utils__["_34" /* random */](0, max, true);
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
     * <h4>ドロネー生成</h4>
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
      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](this.vertices, function (vertex) {
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
     * <h4>全ての三角形の外接円にvertexが含まれるか判定し、オブジェクトに振り分けて返す</h4>
     * @private
     * @method _checkTriangles
     * @param {Array} delaunays delaunayリスト
     * @param {Object} vertex 頂点
     * @return {Object} 三角外円にvertexが含まれるか判定したオブジェクト {ok:[], ng:[]}
     */

  }, {
    key: "_checkTriangles",
    value: function _checkTriangles(delaunays, vertex) {
      var circle = void 0,
          ng = [],
          // 新しいポイントを追加する三角
      ok = []; // 既存のままの三角

      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](delaunays, function (triangle) {
        circle = __WEBPACK_IMPORTED_MODULE_2__Triangle__["a" /* default */].outerCircle.apply(null, triangle);

        if (circle.radius >= __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */].distance(vertex, circle.position)) {
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
     * <h4>各三角形を辺に分割して、重なる辺を取り除いた2点の頂点リストを返す</h4>
     * @private
     * @method _mergeSides
     * @param {Array} trianglesEdge 三角形頂点リスト
     * @return {Array} 重なる辺を取り除いた2点の頂点リストを返す
     */

  }, {
    key: "_mergeSides",
    value: function _mergeSides(trianglesEdge) {
      var poins = [],
          sides = this._edgesToSides(trianglesEdge),
          total = sides.length;

      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](sides, function (s1, i) {
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
     * <h4>三角形の集合から辺の集合へ</h4>
     * @private
     * @method _edgesToSides
     * @param {Array} triangles 三角形集合の頂点を格納した配列
     * @return {Array} 辺の集合配列
     */

  }, {
    key: "_edgesToSides",
    value: function _edgesToSides(triangles) {
      var sides = [];
      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](triangles, function (edges) {
        sides.push([edges[0], edges[1]], [edges[1], edges[2]], [edges[2], edges[0]]);
      });
      return sides;
    }

    /**
     * <h4>各頂点と点vertexを結んで三角形に分割する</h4>
     * @private
     * @method _createTriangle
     * @param {Array} points 2点の座標を格納したリスト
     * @param {Object} vertex 追加する頂点
     * @return {Array} 生成した三角形リスト
     */

  }, {
    key: "_createTriangle",
    value: function _createTriangle(points, vertex) {
      var triangles = [];
      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](points, function (triangle) {
        triangles.push([triangle[0], triangle[1], vertex]);
      });
      return triangles;
    }

    /**
     * <h4>ラップする三角形の頂点を含む三角形を削除して返す</h4>
     * @private
     * @method _removeWrapTriangl
     * @param {Array} triangle ラップしている大三角形
     * @param {Array} delaunays ドロネー
     * @return {Array} ラップする三角形の頂点を含む三角形を削除して返す
     */

  }, {
    key: "_removeWrapTriangl",
    value: function _removeWrapTriangl(triangle, delaunays) {
      var placeholder = [];

      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](delaunays, function (vertices) {
        if (triangle[0] != vertices[0] && triangle[0] != vertices[1] && triangle[0] != vertices[2] && triangle[1] != vertices[0] && triangle[1] != vertices[1] && triangle[1] != vertices[2] && triangle[2] != vertices[0] && triangle[2] != vertices[1] && triangle[2] != vertices[2]) {
          placeholder.push(vertices);
        }
      });

      return placeholder;
    }

    /**
     * <h4>Delaunay領域をラップする三角形を生成</h4>
     * @private
     * @method _createWrapTriangle
     * @param {Number} width  Delaunay領域の幅 ※省略可
     * @param {Number} height Delaunay領域の高さ ※省略可
     * @return {Array} Delaunay領域をラップする三角形の座標を格納した配列
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector2__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Size__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara





/**
 * <h4>Rect</h4>
 * @class Rect
 * @param {Number} x x座標
 * @param {Number} y y座標
 * @param {Number} width 幅
 * @param {Number} height 高さ
 */

var Rect = function () {
  /**
   * constructor
   */
  function Rect(x, y, width, height) {
    _classCallCheck(this, Rect);

    /**
     * <h4>座標</h4>
     * @property position
     * @type {Vector2}
     */
    this.position = new __WEBPACK_IMPORTED_MODULE_1__Vector2__["a" /* default */](x, y);

    /**
     * <h4>サイズ</h4>
     * @property size
     * @type {Size}
     */
    this.size = new __WEBPACK_IMPORTED_MODULE_2__Size__["a" /* default */](width, height);
  }

  /**
   * <h4>衝突判定</h4>
   * @static
   * @method isCollision
   * @param  {Rect}  rect1 矩形1
   * @param  {Rect}  rect2 矩形2
   * @return {Boolean}
   */


  _createClass(Rect, null, [{
    key: "isCollision",
    value: function isCollision(rect1, rect2) {
      var p1 = rect1.position,
          s1 = rect1.size,
          p2 = rect2.position,
          s2 = rect2.size,
          hasX = __WEBPACK_IMPORTED_MODULE_0__utils__["X" /* isIntersect */](p1.x, p1.x + s1.width, p2.x, p2.x + s2.width),
          hasY = __WEBPACK_IMPORTED_MODULE_0__utils__["X" /* isIntersect */](p1.y, p1.y + s1.height, p2.y, p2.y + s2.height);

      return hasX && hasY;
    }

    /**
     * <h4>座標を含んでいるか</h4>
     * @method inside
     * @param  {Rect}  rect 矩形
     * @param  {Vector2} vec2 Vector2
     * @return {Boolean}
     */

  }, {
    key: "inside",
    value: function inside(rect, vec2) {
      var p = rect.position,
          s = rect.size,
          hasX = __WEBPACK_IMPORTED_MODULE_0__utils__["X" /* isIntersect */](p.x, p.x + s.width, vec2.x, vec2.x),
          hasY = __WEBPACK_IMPORTED_MODULE_0__utils__["X" /* isIntersect */](p.y, p.y + s.height, vec2.y, vec2.y);

      return hasX && hasY;
    }
  }]);

  return Rect;
}();

/* harmony default export */ __webpack_exports__["a"] = (Rect);

/***/ })
/******/ ]);