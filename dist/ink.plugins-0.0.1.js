/**
 * INK.js
 * Version: 0.0.1
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return __WEBPACK_IMPORTED_MODULE_0__array__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_1__config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return __WEBPACK_IMPORTED_MODULE_2__date__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extend__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3__extend__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return __WEBPACK_IMPORTED_MODULE_3__extend__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__has__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_4__has__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_4__has__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_4__has__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__is__ = __webpack_require__(0);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["x"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["y"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["z"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["A"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["B"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["C"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["D"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["E"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["F"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["G"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["H"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["I"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["J"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["K"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["L"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["M"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["N"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["O"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["P"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["Q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["R"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return __WEBPACK_IMPORTED_MODULE_5__is__["S"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_6__location__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return __WEBPACK_IMPORTED_MODULE_6__location__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["r"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["s"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["t"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["u"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["v"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["w"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return __WEBPACK_IMPORTED_MODULE_7__math__["x"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__string__ = __webpack_require__(12);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return __WEBPACK_IMPORTED_MODULE_8__string__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utility__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__utility__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_9__utility__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_9__utility__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return __WEBPACK_IMPORTED_MODULE_9__utility__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return __WEBPACK_IMPORTED_MODULE_9__utility__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return __WEBPACK_IMPORTED_MODULE_9__utility__["f"]; });
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara











// export * from "./webgl";

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return argsToArray; });
/* harmony export (immutable) */ __webpack_exports__["b"] = each;
/* harmony export (immutable) */ __webpack_exports__["c"] = findMax;
/* harmony export (immutable) */ __webpack_exports__["d"] = findMin;
/* harmony export (immutable) */ __webpack_exports__["e"] = shuffle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(0);
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
      isContinue = callback.call(obj[i], i, obj[i]);
      if (isContinue === false) {
        break;
      }
    }
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["D" /* isObject */](obj) || __WEBPACK_IMPORTED_MODULE_0__is__["p" /* isFunction */](obj)) {
    for (i in obj) {
      isContinue = callback.call(obj[i], i, obj[i]);
      if (isContinue === false) {
        break;
      }
    }
  } else if (__WEBPACK_IMPORTED_MODULE_0__is__["B" /* isNumber */](obj)) {
    i = 0;
    for (; i < obj; i += 1) {
      isContinue = callback.call(null, i, obj);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
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

      if (is.isFunction(listener)) {
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

      listener = __WEBPACK_IMPORTED_MODULE_0__utils__["w" /* getFunctionName */](listener);

      __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](events, function (event) {
        var eventObj = _this3._getEventNameMap(event);

        if (eventObj && eventObj.attr && _this3._listeners[eventObj.type]) {
          // イベント属性指定がある場合
          listeners = _this3._listeners[eventObj.type];

          __WEBPACK_IMPORTED_MODULE_0__utils__["s" /* each */](listeners, function (item) {
            if (item.attr !== eventObj.attr) {
              if (listener) {
                if (listener !== __WEBPACK_IMPORTED_MODULE_0__utils__["w" /* getFunctionName */](item.listener)) {
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
              if (listener !== __WEBPACK_IMPORTED_MODULE_0__utils__["w" /* getFunctionName */](item.listener)) {
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
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = base64FileSize;
/* harmony export (immutable) */ __webpack_exports__["b"] = getFunctionName;
/* harmony export (immutable) */ __webpack_exports__["f"] = typeOf;
/* harmony export (immutable) */ __webpack_exports__["e"] = preload;
/* harmony export (immutable) */ __webpack_exports__["d"] = noop;
/* harmony export (immutable) */ __webpack_exports__["c"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(2);
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
/* 6 */
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
/* 7 */
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
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mixin;
/* harmony export (immutable) */ __webpack_exports__["a"] = inherits;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara



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
 * <h4>クラスの継承</h4>
 * <p>拡張した、サブクラスを返します</p>
 * @static
 * @method inherits
 * @param {Function} subClass サブクラス
 * @param {Function} superClass スーパークラス
 * @return {Function} 拡張した、サブクラスを返します
 */
function inherits(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = superClass;
  return subClass;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasHash;
/* harmony export (immutable) */ __webpack_exports__["b"] = hasString;
/* harmony export (immutable) */ __webpack_exports__["c"] = hasUA;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(0);
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
          vals = url.hash.split("#");

      __WEBPACK_IMPORTED_MODULE_0__array__["b" /* each */](vals, function (i, v) {
        if (k.indexOf(" " + v + " ") !== -1) {
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
function hasString(str, hasStr) {
  return __WEBPACK_IMPORTED_MODULE_1__is__["M" /* isString */](str) && str.indexOf(hasStr) > -1;
};

/**
 * <h4>ユーザーエージェントに指定の文字列があるか判定します</h4>
 * @static
 * @method hasUA
 * @param {String} str 指定の文字列
 * @return {Boolean}
 */
function hasUA(str) {
  return __WEBPACK_IMPORTED_MODULE_1__is__["S" /* ua */].indexOf(str) > -1;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHash;
/* harmony export (immutable) */ __webpack_exports__["b"] = queryHashMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(2);
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
    __WEBPACK_IMPORTED_MODULE_0__array__["b" /* each */](ary, function (i, item) {
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TWO_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HARF_PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RAD_TO_DEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEG_TO_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return sqrt2; });
/* harmony export (immutable) */ __webpack_exports__["t"] = radToCoord;
/* harmony export (immutable) */ __webpack_exports__["j"] = degToCoord;
/* harmony export (immutable) */ __webpack_exports__["i"] = coordToRad;
/* harmony export (immutable) */ __webpack_exports__["h"] = coordToDeg;
/* harmony export (immutable) */ __webpack_exports__["u"] = radToDeg;
/* harmony export (immutable) */ __webpack_exports__["k"] = degToRad;
/* harmony export (immutable) */ __webpack_exports__["l"] = diagonal;
/* harmony export (immutable) */ __webpack_exports__["m"] = diagonalToSideLength;
/* harmony export (immutable) */ __webpack_exports__["f"] = compare;
/* harmony export (immutable) */ __webpack_exports__["g"] = constrain;
/* harmony export (immutable) */ __webpack_exports__["n"] = factorial;
/* harmony export (immutable) */ __webpack_exports__["o"] = inRange;
/* harmony export (immutable) */ __webpack_exports__["p"] = isIntersect;
/* harmony export (immutable) */ __webpack_exports__["q"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["s"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["r"] = map;
/* harmony export (immutable) */ __webpack_exports__["v"] = random;
/* harmony export (immutable) */ __webpack_exports__["w"] = roundToDigit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is__ = __webpack_require__(0);
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
 * <h4>対角線の長さから辺の長さを求める（なす角45°）</h4>
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
 * <h4>数値の有効範囲を適用します</h4>
 * <p>有効範囲の数値化チェックし、有効範囲の数値に最適化して返す</p>
 * @static
 * @method constrain
 * @param {Number} num 数値
 * @param {Number} min 最小値
 * @param {Number} max 最大値
 * @return {Number} 有効範囲を適用した数値
 */
function constrain(num, min, max) {
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
 *
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
/* 12 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(0);
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Loader__ = __webpack_require__(38);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Rollover__ = __webpack_require__(39);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rollover", function() { return __WEBPACK_IMPORTED_MODULE_1__Rollover__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Scroll__ = __webpack_require__(40);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Slip__ = __webpack_require__(41);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SmothScroll__ = __webpack_require__(42);
/* empty harmony namespace reexport */
/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara







window.INK = window.INK || {};
window.INK.plugins = exports;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


// import is from "../ink/utils/is";

/**
 * <h4>Loader</h4>
 * <p>imagesLoadedに依存</p>
 * @class Loader
 * @extends Events
 * @constructor
 * @param {jQuery} elm 対象のエリア要素 省略可 初期値： "body"
 * @param {Object} options imagesLoadedオプション値
 */

var Loader = function (_Events) {
  _inherits(Loader, _Events);

  /**
   * constructor
   */
  function Loader(elm, options) {
    _classCallCheck(this, Loader);

    /**
     * <h4>読み込み対象wrap要素</h4>
     * @property elm
     * @type {DOM}
     */
    var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this));

    _this.elm = elm || "body";

    /**
     * <h4>読み込み対象wrap要素</h4>
     * @property elm
     * @type {DOM}
     */
    _this.options = Object.assign({
      isSmooth: true // 画像読み込みカウントアップをスムースにするか
    }, options);

    /**
     * <h4>imagesloadedオブジェクト</h4>
     * @property imagesLoaded
     * @type {imagesloaded}
     */
    _this.imagesLoaded = null;

    /**
     * <h4>画像読み状況をカウントアップ(0から1まで)</h4>
     * @property updateCount
     * @type {Number}
     */
    _this.loadCount = 0;

    /**
     * <h4>読み込み完了画像点数</h4>
     * @property loadedLength
     * @type {Number}
     */
    _this.loadedLength = 0;

    /**
     * <h4>Loaderイベントタイプ</h4>
     * @private
     * @property _EVENT_TYPE
     * @type {Object}
     */
    /**
     * <h4>カウントアップ毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.COUNT
     * @default "update"
     * @type {String}
     */
    /**
     * <h4>画像処理完了（成功・失敗）毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.PROGRESS
     * @default "progress"
     * @type {String}
     */
    /**
     * <h4>画像読込み失敗毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.FAIL
     * @default "fail"
     * @type {String}
     */
    /**
     * <h4>画像読込み成功毎呼び出すイベント名</h4>
     * @private
     * @property EVENTS.DONE
     * @default "done"
     * @type {String}
     */
    /**
     * <h4>画像全て読込み処理完了時、呼び出すイベント名</h4>
     * @private
     * @property EVENTS.ALWAYS
     * @default "always"
     * @type {String}
     */
    /**
     * <h4>画像読込みカウント終了時、呼び出すイベント名</h4>
     * @private
     * @property EVENTS.COUNT_COMPLEAT
     * @default "compleat"
     * @type {String}
     */
    _this._EVENT_TYPE = {
      PROGRESS: "progress",
      FAIL: "fail",
      DONE: "done",
      ALWAYS: "always",
      COUNT: "count",
      COUNT_COMPLEAT: "countCompleat"
    };
    return _this;
  }

  /**
   * <h4>load開始</h4>
   * @method load
   * @return {jQuery.Deferred} jQuery.Deferred.promiseを返す
   */


  _createClass(Loader, [{
    key: "load",
    value: function load() {
      var _this2 = this,
          _arguments = arguments;

      if (!is.isNull(this.imagesLoaded)) {
        return this;
      }

      this.imagesLoaded = imagesLoaded(this.elm, this.options);

      // progress: 画像処理完了毎（成功・失敗）にインクリメントする
      this.imagesLoaded.on("progress", function (a, b) {
        _this2.loadedLength += 1;
        _this2.trigger(Loader.EVENTS.PROGRESS, a, b);
      });

      // fail: 読込み失敗毎
      this.imagesLoaded.on("fail", function () {
        _this2.trigger(Loader.EVENTS.FAIL, _arguments);
      });

      // done: 読込み成功毎
      this.imagesLoaded.on("done", function () {
        _this2.trigger(Loader.EVENTS.DONE, _arguments);
      });

      // always: 全ての読込み処理完了時
      this.imagesLoaded.on("always", function () {
        _this2.trigger(Loader.EVENTS.ALWAYS, _arguments);
      });

      // カウントを更新する
      this._update();

      return this;
    }

    /**
     * <h4>カウントアップデート</h4>
     * @private
     * @method _update
     * @return {Void}
     */

  }, {
    key: "_update",
    value: function _update() {
      var _this3 = this;

      var current = this.loadedLength / this.imagesLoaded.images.length;

      // カウンターのインクリメント
      if (this.loadCount < current) {
        if (this.options.isSmooth) {
          this.loadCount += 0.01;
        } else {
          this.loadCount += 1 / this.imagesLoaded.images.length;
        }
      }

      // update: カウントアップ毎
      this.trigger(Loader.EVENTS.COUNT, this.loadCount);

      if (1 <= this.loadCount) {
        // compleat: カウント終了時
        this.trigger(Loader.EVENTS.COUNT_COMPLEAT, this.loadCount);
      } else {
        window.requestAnimationFrame(function () {
          _this3._update();
        });
      }
    }
  }]);

  return Loader;
}(__WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Loader);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rollover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ink_utils_utility__ = __webpack_require__(5);
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
 * <h4>ロールオーバー</h4>
 * @class Rollover
 * @extends Events
 * @constructor
 */

var Rollover = function (_Events) {
  _inherits(Rollover, _Events);

  /**
   * constructor
   */
  function Rollover() {
    _classCallCheck(this, Rollover);

    /**
     * <h4>オプションのデフォルト値</h4>
     * @property options
     * @type {Object}
     */
    /**
     * <h4>グループクラス名</h4>
     * @property options.groupClass
     * @default group_rover
     * @type {String}
     */
    /**
     * <h4>アクティブクラス名</h4>
     * @property options.activeClass
     * @default active
     * @type {String}
     */
    /**
     * <h4>ノーロールオーバークラス名</h4>
     * @property options.noOverClass
     * @default no_rover
     * @type {String}
     */
    /**
     * <h4>ロールオーバー時に付与するファイル名</h4>
     * @property options.postfix
     * @default _on
     * @type {String}
     */
    /**
     * <h4>ロールオーバークラス名初期値</h4>
     * @property images
     * @type {String}
     */
    var _this = _possibleConstructorReturn(this, (Rollover.__proto__ || Object.getPrototypeOf(Rollover)).call(this));

    _this.options = {
      groupClass: "group_rover",
      activeClass: "active",
      noOverClass: "no_rover",
      postfix: "_on",
      images: "img.rover, input.rover, .all_rover img"
    };
    return _this;
  }

  /**
   * <h4>ロールオーバーイベント追加</h4>
   * @method bind
   * @param {jQuery} $images 対象の画像要素
   * @param {Object} options オプション値
   * @return {Rollover}
   */


  _createClass(Rollover, [{
    key: "bind",
    value: function bind($images, options) {
      var _this2 = this;

      // $image指定がない場合、初期値を設定
      if (!$images || !($images instanceof jQuery)) {
        options = $images;
        $images = $(this.options.images);
      }

      var params = $.extend(true, {}, this.options, options);

      $images.each(function (i) {
        var data = _this2._createRolloverData($images.eq(i), params);

        // on画像の場合
        if (!data.isOffImg) {
          data.image.src = data.offSrc;
        }

        // rollover
        data.$trigger.on("mouseenter." + _this2.id, function () {
          if (!data.$image.hasClass(params.noOverClass)) {
            data.image.src = data.onSrc;
          }
        }).on("mouseleave." + _this2.id, function () {
          if (!data.$image.hasClass(params.noOverClass)) {
            data.image.src = data.offSrc;
          }
        });
      });

      return this;
    }

    /**
     * <h4>ロールオーバーイベント削除</h4>
     * @method unbind
     * @param {jQuery} $images 対象の画像要素
     * @param {Object} options オプション値
     * @return {Rollover}
     */

  }, {
    key: "unbind",
    value: function unbind($images, options) {
      var _this3 = this;

      // $image指定がない場合、初期値を設定
      if (!$images || !($images instanceof jQuery)) {
        options = $images;
        $images = $(this.options.images);
      }

      var props = $.extend(true, {}, this.options, options);

      $images.each(function (i) {
        var $group = $images.eq(i).closest("." + props.groupClass),
            $trigger = $group[0] ? $group : $images.eq(i);
        $trigger.off("." + _this3.id);
      });

      return this;
    }

    /**
     * <h4>画像のアクティブ化</h4>
     * @method active
     * @param {jQuery} $images 対象の画像要素
     * @param {Object} options オプション値
     * @return {Rollover}
     */

  }, {
    key: "active",
    value: function active($images, options) {
      var _this4 = this;

      // $image指定がない場合、初期値を設定
      if (!$images || !($images instanceof jQuery)) {
        options = $images;
        $images = $(this.options.images);
      }

      var props = $.extend(true, {}, this.options, options);

      $images.addClass(props.activeClass).each(function (i) {
        var data = _this4._createRolloverData($images.eq(i), props);

        // イベント削除
        data.$trigger.addClass(props.activeClass).off("." + _this4.id);

        // off画像の場合
        if (data.isOffImg) {
          data.image.src = data.onSrc;
        }
      });

      return this;
    }

    /**
     * <h4>画像を待機状態にする</h4>
     * @method passive
     * @param {jQuery} $images 対象の画像要素
     * @param {Object} options オプション値
     * @return {Rollover}
     */

  }, {
    key: "passive",
    value: function passive($images, options) {
      var _this5 = this;

      // $image指定がない場合、初期値を設定
      if (!$images || !($images instanceof jQuery)) {
        options = $images;
        $images = $(this.options.images);
      }

      var props = $.extend(true, {}, this.options, options);

      $images.removeClass(props.activeClass).each(function (i) {
        var data = _this5._createRolloverData($images.eq(i), props);

        // イベント削除
        data.$trigger.removeClass(props.activeClass).off("." + _this5.id);

        // on画像の場合
        if (!data.isOffImg) {
          data.image.src = data.offSrc;
        }
      });

      return this;
    }

    /**
     * <h4>ロールオーバーデータの生成</h4>
     * @method _createRolloverData
     * @private
     * @param {jQuery} $images 対象の画像要素
     * @param {Object} options オプション値
     * @return {Rollover}
     */

  }, {
    key: "_createRolloverData",
    value: function _createRolloverData($image, options) {
      var image = $image[0],
          src = image.src,
          ext = src.substring(src.lastIndexOf("."), src.length),
          $group = $image.closest("." + options.groupClass).addClass(options.activeClass),
          onSrc = void 0,
          offSrc = void 0;

      // 現在on画像の場合
      if (src.lastIndexOf(options.postfix + ext) > -1) {
        onSrc = src;
        offSrc = src.replace(options.postfix + ext, ext);
        Object(__WEBPACK_IMPORTED_MODULE_1__ink_utils_utility__["e" /* preload */])(offSrc);

        // 現在off画像の場合
      } else {
        offSrc = src;
        onSrc = src.replace(ext, options.postfix + ext);
        Object(__WEBPACK_IMPORTED_MODULE_1__ink_utils_utility__["e" /* preload */])(onSrc);
      }

      // RolloverData
      return {
        $image: $image,
        image: image,
        $trigger: $group[0] ? $group : $image,
        onSrc: onSrc,
        offSrc: offSrc,
        isOffImg: src === offSrc
      };
    }
  }]);

  return Rollover;
}(__WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__["a" /* default */]);

/**
 * rollover
 * @type {Rollover}
 */


/* unused harmony default export */ var _unused_webpack_default_export = (Rollover);
var rollover = new Rollover();

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


// import is from "../ink/utils/is";

/**
 * <h4>ページ内リンクのスクロール</h4>
 * @class Scroll
 * @extends Events
 * @constructor
 * @param {jQuery} $trigger トリガーとなるa要素
 * @param {Object} options オプション値
 */

var Scroll = function (_Events) {
  _inherits(Scroll, _Events);

  /**
   * constructor
   */
  function Scroll($trigger, options) {
    _classCallCheck(this, Scroll);

    // $trigger指定がない場合、初期値を設定
    var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this));

    if (!$trigger || !($trigger instanceof jQuery)) {
      options = $trigger;
      $trigger = $('a[href^="#"]');
    }

    /**
     * <h4>プロパティオブジェクト</h4>
     * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてpropsオブジェクトに格納</p>
     * @property props
     * @type {Object}
     */
    /**
     * <h4>トリガーとなるa要素</h4>
     * @property props.$trigger
     * @type {jQuery}
     */
    /**
     * <h4>ページ要素</h4>
     * @property props.$scroll
     * @default $('html, body')
     * @type {jQuery}
     */
    /**
     * <h4>停止位置調整値</h4>
     * @property props.adjust
     * @default 0
     * @type {Number|Function}
     */
    /**
     * <h4>スクロールしないトリガークラス名</h4>
     * @property props.noScrollClass
     * @default no_scroll
     * @type {String}
     */
    /**
     * <h4>tween</h4>
     * <p><a href="http://api.jquery.com/animate/#animate-properties-options" target="_blank">$.animate</a></p>
     * @property props.tween
     * @type {Object}
     */
    _this.props = $.extend(true, {
      $trigger: $trigger,
      $window: $(window),
      $scroll: $("html, body"),
      adjust: 0,
      noScrollClass: "no_scroll",
      tween: {
        duration: 800,
        easing: "easeOutQuint"
      }
    }, options);
    return _this;
  }

  /**
   * <h4>イベント登録</h4>
   * @method bind
   * @return {Scroll}
   */


  _createClass(Scroll, [{
    key: "bind",
    value: function bind() {
      var self = this;

      // スクロールイベントの重複回避
      this.unbind();

      this.props.$trigger.on("click." + this.id, function (event) {
        if (!$(this).hasClass(self.props.noScrollClass)) {
          event.preventDefault();
          self.tween($($(this).attr("href")));
        }
      });

      return this;
    }

    /**
     * <h4>イベント削除</h4>
     * @method unbind
     * @return {Scroll}
     */

  }, {
    key: "unbind",
    value: function unbind() {
      this.props.$trigger.off("." + this.id);
      return this;
    }

    /**
     * <h4>スクロールアニメーション</h4>
     * @method tween
     * @param {jQuery} $target トリガー要素のインデックス
     * @return {jQuery} tween要素
     */

  }, {
    key: "tween",
    value: function tween($target) {
      var adjust = void 0,
          scrollTop = void 0;

      if ($target[0]) {
        adjust = is.isFunction(this.props.adjust) ? this.props.adjust($target) : this.props.adjust;
        adjust = is.isNumber(adjust) ? adjust : 0;
        scrollTop = $target.offset().top - adjust;

        if (this.$window.scrollTop() !== scrollTop) {
          return this.props.$scroll.stop().animate({ scrollTop: scrollTop }, this.props.tween);
        }
      } else {
        return this.props.$scroll;
      }
    }
  }]);

  return Scroll;
}(__WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Scroll);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


// import is from "../ink/utils/is";

/**
 * <h4>ホバースライドアニメーション</h4>
 * <p>INKjs jquery.plugins(jQuery.Slip)に依存します</p>
 * @class Slip
 * @extends Events
 * @constructor
 * @param {jQuery} $target 対象の要素
 * @param {Object} options オプション値
 */

var Slip = function (_Events) {
  _inherits(Slip, _Events);

  /**
   * constructor
   */
  function Slip($target, options) {
    _classCallCheck(this, Slip);

    // $target指定がない場合、初期値を設定
    var _this = _possibleConstructorReturn(this, (Slip.__proto__ || Object.getPrototypeOf(Slip)).call(this));

    if (!$target || !($target instanceof jQuery)) {
      options = $target;
      $target = $(".slip");
    }

    /**
     * <h4>プロパティオブジェクト</h4>
     * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてpropsオブジェクトに格納</p>
     * @property props
     * @type {Object}
     */
    /**
     * <h4>target要素</h4>
     * @propaty props.$target
     * @type {jQuery}
     */
    /**
     * <h4>マウスイン時のアニメーション方向</h4>
     * <p>以下7タイプ (allはデフォルト4方向)<br>
     * all, horizontal, vertical, up, down, left, right</p>
     * @property props.inDirection
     * @default all
     * @type {String}
     */
    /**
     * <h4>マウスアウト時のアニメーション方向</h4>
     * <p>以下7タイプ (allはデフォルト4方向)<br>
     * all, horizontal, vertical, up, down, left, right</p>
     * @property props.outDirection
     * @default all
     * @type {String}
     */
    /**
     * <h4>アニメーション要素クラス名</h4>
     * @property props.tweenClass
     * @default slip_tween
     * @type {String}
     */
    /**
     * <h4>アクティブ時に付与するクラス名</h4>
     * @property props.activeClass
     * @default .activeClass
     * @type {String}
     */
    /**
     * <h4>アニメーションしない要素に付与するクラス名</h4>
     * @property props.noTweenClass
     * @default .no_slip
     * @type {String}
     */
    /**
     * <h4>Tween option</h4>
     * <p><a href="http://api.jquery.com/animate/#animate-properties-options" target="_blank">$.animate</a></p>
     * @property props.tween
     * @default .no_slip
     * @type {Object}
     */
    _this.props = $.extend(true, {
      $target: $target,
      inDirection: "all",
      outDirection: "all",
      tweenClass: "slip_tween",
      activeClass: "active",
      noTweenClass: "no_slip",
      tween: {
        duration: 400,
        easing: "easeOutExpo"
      }
    }, options);
    return _this;
  }

  /**
   * <h4>イベント登録</h4>
   * @method bind
   * @return {Slip}
   */


  _createClass(Slip, [{
    key: "bind",
    value: function bind() {
      var _this2 = this;

      // 二重登録回避
      this.unbind();

      this.props.$target.on("slipin." + this.id, function (inEvent) {
        _this2._tween(_this2.props.$target.index(_this2), inEvent);
      }).on("slipout." + this.id, function (outEvent) {
        _this2._tween(_this2.props.$target.index(_this2), outEvent);
      }).each(function (i) {
        var $this = _this2.props.$target.eq(i);
        if ($this.hasClass(_this2.props.noTweenClass)) {
          _this2.passive(i);
        } else if ($this.hasClass(_this2.props.activeClass)) {
          _this2.active(i);
        }
      });

      return this;
    }

    /**
     * <h4>イベント削除</h4>
     * @method unbind
     * @return {Slip}
     */

  }, {
    key: "unbind",
    value: function unbind() {
      this.props.$target.off("." + this.id);
      return this;
    }

    /**
     * <h4>アクティブ</h4>
     * @method active
     * @param {Number} num 要素のインデックス
     * @return {Slip}
     */

  }, {
    key: "active",
    value: function active(num) {
      var $target = is.isNumber(num) ? this.props.$target.eq(num) : this.props.$target;

      $target.addClass(this.props.activeClass).find("." + this.props.tweenClass).stop(true, false).css({ top: 0, left: 0 });

      return this;
    }

    /**
     * <h4>待機状態のスタイル</h4>
     * @method passive
     * @param {Number} num 要素のインデックス
     * @return {Slip}
     */

  }, {
    key: "passive",
    value: function passive(num) {
      var $target = is.isNumber(num) ? this.props.$target.eq(num) : this.props.$target;

      $target.removeClass(this.props.activeClass).find("." + this.props.tweenClass).stop(true, false).css({ top: "-100%" });

      return this;
    }

    /**
     * <h4>アニメーション</h4>
     * @private
     * @method _tween
     * @param {Number} num   要素のインデックス
     * @param {Object} event イベントオブジェクト
     * @return {Void}
     */

  }, {
    key: "_tween",
    value: function _tween(num, event) {
      var style = this._createTweenStyle(event),
          $target = this.props.$target.eq(num);

      if (!$target.hasClass(this.props.activeClass) && !$target.hasClass(this.props.noTweenClass)) {
        $target.find("." + this.props.tweenClass).stop(true, false).css(style.start).animate(style.end, this.props.tween);
      }
    }

    /**
     * <h4>Tweenスタイルの生成</h4>
     * @private
     * @method _createTweenStyle
     * @param {Object} event イベントオブジェクト
     * @return {Object}
     */

  }, {
    key: "_createTweenStyle",
    value: function _createTweenStyle(event) {
      var isSlipin = event.type === "slipin",
          direction = isSlipin ? this.props.inDirection : this.props.outDirection,
          style01 = { left: 0, top: 0 },
          style02 = $.extend({}, style01),
          style = isSlipin ? style01 : style02;

      if (direction === "horizontal") {
        style.left = event.x < 0 ? "-100%" : "100%";
      } else if (direction === "vertical") {
        style.top = event.y < 0 ? "-100%" : "100%";
      } else if (direction === "up") {
        style.top = "-100%";
      } else if (direction === "down") {
        style.top = "100%";
      } else if (direction === "left") {
        style.left = "-100%";
      } else if (direction === "right") {
        style.left = "100%";
      } else {
        // direction All
        if (event.direction === "top") {
          style.top = "-100%";
        } else if (event.direction === "bottom") {
          style.top = "100%";
        } else if (event.direction === "left") {
          style.left = "-100%";
        } else {
          style.left = "100%";
        }
      }

      return {
        start: style01,
        end: style02
      };
    }
  }]);

  return Slip;
}(__WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (Slip);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


// import is from "../ink/utils/is";

/**
 * <h4>スムーススクロール（慣性スクロール）</h4>
 * <p>WindowsPCのみマウスホイールスクロールを慣性スクロール実装します。(Macはデフォルトの慣性スクロール)</p>
 *
 * @class SmoothScroll
 * @extends Events
 */

var SmoothScroll = function (_Events) {
  _inherits(SmoothScroll, _Events);

  /**
   * constructor
   */
  function SmoothScroll(options) {
    _classCallCheck(this, SmoothScroll);

    /**
     * <h4>プロパティオブジェクト</h4>
     * <p>コンストラクタが呼び出し時に、引数とoptionsをmixinしてpropsオブジェクトに格納</p>
     * @property props
     * @type {Object}
     */
    /**
     * <h4>mousewheelイベント名</h4>
     * @property props.mousewheel
     * @type {String}
     */
    /**
     * <h4>スムーススクロールエリア</h4>
     * @property props.$scroll
     * @default $("html, body")
     * @type {jQuery}
     */
    /**
     * <h4>スクロール量</h4>
     * @property props.amount
     * @default 500
     * @type {Number}
     */
    /**
     * <h4>tween</h4>
     * <p><a href="http://api.jquery.com/animate/#animate-properties-options" target="_blank">$.animate</a></p>
     * @property props.tween
     * @type {Object}
     */
    var _this = _possibleConstructorReturn(this, (SmoothScroll.__proto__ || Object.getPrototypeOf(SmoothScroll)).call(this));

    _this.props = $.extend(true, {
      mousewheel: "onwheel" in document ? "wheel." : "onmousewheel" in document ? "mousewheel." : "DOMMouseScroll.",
      $scroll: $("html, body"),
      amount: 500,
      tween: {
        duration: 600,
        easing: "easeOutCubic",
        start: null,
        progress: null,
        complete: null
      }
    }, options);
    return _this;
  }

  /**
   * <h4>初期化</h4>
   * @method bind
   * @return {SmoothScroll}
   */


  _createClass(SmoothScroll, [{
    key: "bind",
    value: function bind() {
      var _this2 = this;

      // WindowsPCのみ有効
      if (is.isWindows()) {
        this.unbind();
        this.props.$scroll.on(this.props.mousewheel + this.id, function (e) {
          e.preventDefault();
          var move = e.originalEvent.deltaY ? 1 : -1;
          _this2.tween(move);
          // return false;
        });
      }
      return this;
    }

    /**
     * <h4>イベント削除</h4>
     * @method unbind
     * @return {SmoothScroll}
     */

  }, {
    key: "unbind",
    value: function unbind() {
      this.props.$scroll.off("." + this.id);
      return this;
    }

    /**
     * <h4>スクロールアニメーション</h4>
     * @method tween
     * @param {Number} move スクロール上下値(1 || -1)
     * @return {jQuery} tween要素
     */

  }, {
    key: "tween",
    value: function tween(move) {
      var y = is.isWebkit() ? this.props.$scroll.eq(1).scrollTop() : this.props.$scroll.eq(0).scrollTop(),
          options = $.extend(true, {}, this.props.tween),
          scrollTop = move > 0 ? y - this.props.amount : y + this.props.amount;

      return this.props.$scroll.stop().animate({ scrollTop: scrollTop }, options);
    }
  }]);

  return SmoothScroll;
}(__WEBPACK_IMPORTED_MODULE_0__ink_class_events_Events__["a" /* default */]);

/* unused harmony default export */ var _unused_webpack_default_export = (SmoothScroll);

/***/ })
/******/ ]);