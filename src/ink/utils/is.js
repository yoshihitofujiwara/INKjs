/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

/**
 * @class Is
 */

let toString = Object.prototype.toString

/// see: http://diveintohtml5.info/everything.html


/**
 * <h4>ユーザーエージェント</h4>
 * @static
 * @property UA
 * @type {String}
 */
export const UA = navigator.userAgent;


/**
 * <h4>ユーザーエージェント toLowerCase</h4>
 * @static
 * @property ua
 * @type {String}
 */
export const ua = UA.toLowerCase();


/* isType
-----------------------------------------------------------------*/
/**
 * <h4>配列型判定</h4>
 * @static
 * @method isArray
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export const isArray = Array.isArray || function(obj){
  return toString.call(obj) === "[object Array]";
};


/**
 * <h4>真偽型判定</h4>
 * @static
 * @method isBoolean
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isBoolean(obj){
  return toString.call(obj) === "[object Boolean]";
};


/**
 * <h4>関数型判定</h4>
 * @static
 * @method isFunction
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isFunction(obj){
  return toString.call(obj) === "[object Function]";
};


/**
 * <h4>数値型判定</h4>
 * @static
 * @method isNumber
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isNumber(obj){
  return toString.call(obj) === "[object Number]";
};


/**
 * <h4>オブジェクト型判定</h4>
 * @static
 * @method isObject
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isObject(obj){
  return !!obj && toString.call(obj) === "[object Object]";
};


/**
 * <h4>プレーンオブジェクト判定</h4>
 * @static
 * @method isPlainObject
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isPlainObject(obj){
  return isObject(obj) && Object.keys(obj).length === 0;
};


/**
 * <h4>文字列型判定</h4>
 * @static
 * @method isString
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isString(obj){
  return toString.call(obj) === "[object String]";
};


/**
 * <h4>正規表現判定</h4>
 * @static
 * @method isRegexp
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isRegexp(obj) {
  return toString.call(obj) === "[object RegExp]";
};


/**
 * <h4>undefined判定</h4>
 * @static
 * @method isUndefined
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isUndefined(obj){
  return obj === void 0;
};


/**
 * <h4>null判定</h4>
 * @static
 * @method isNull
 * @param {Object} obj 判定するオブジェクト
 * @return {Boolean}
 */
export function isNull(obj){
  return obj === null || toString.call(obj) === "[object Null]";
};


/**
 * <h4>マルチバイト文字列判定</h4>
 * @static
 * @method isMultibyte
 * @param  {String}  chara 一文字
 * @return {Boolean}
 */
export function isMultibyte(chara){
  return ('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.indexOf(chara) < 0);
};


/**
 * <h4>isEmail Email判定</h4>
 * @param  {String}  email メールアドレス
 * @return {Boolean}
 */
export function isEmail(email){
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
export function isOS(os, ver){
  let _os = os.toLowerCase();

  switch (_os){
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
export function isWindows(ver){
  if(ver){
    // NT Ver. プロダクト名
    // NT 6.1  Windows 7/Windows Server 2008 R2
    // NT 6.2  Windows 8/Windows Server 2012
    // NT 6.3  Windows 8.1/Windows Server 2012 R2
    // NT 10.0 Windows 10

    let _ver = ua.split(" windows nt ")[1].split(";")[0];
    ver += ""; // cast String

    if(ver === "7"){
      return _ver === "6.1";
    } else if(ver === "8"){
      return _ver === "6.2";
    } else if(ver === "8.1"){
      return _ver === "6.3";
    } else if(ver === "10"){
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
export function isMac(ver){
  if(ver){
    let serial = ("" + ver).replace(/\./g, "_");
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
export function isIos(ver){
  if(ver){
    let serial = ("" + ver).replace(/\./g, "_");
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
export function isAndroid (ver){
  if(ver){
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
export function isDevice(device){
  let _device = device.toLowerCase();

  if(_device === "pc"){
    return isPC();
  } else if (_device === "sd" || _device === "smartdevice"){
    return isSmartDevice();
  } else if (_device === "sp" || _device === "smartphone"){
    return isSmartPhone();
  } else if (_device === "tb" || _device === "tablet"){
    return isTablet();
  } else if(_device === "iphone"){
    return isIPhone();
  } else if(_device === "ipad"){
    return isIPad();
  } else if(_device === "ipod"){
    return isIPod();
  } else if(_device === "android"){
    return isAndroidPhone();
  } else if(_device === "androidtablet"){
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
export function isPC(){
  return isWindows() || isMac();
};


/**
 * <h4>スマートデバイス判定</h4>
 * @static
 * @method isSmartDevice
 * @return {Boolean}
 */
export function isSmartDevice(){
  return isIos() || isAndroid();
};


/**
 * <h4>SmartPhone判定</h4>
 * @static
 * @method isSmartPhone
 * @return {Boolean}
 */
export function isSmartPhone(){
  return ua.indexOf("iphone") > -1 || isAndroid() && ua.indexOf("mobile") > -1;
};


/**
 * <h4>タブレット判定</h4>
 * @static
 * @method isTablet
 * @return {Boolean}
 */
export function isTablet(){
  return ua.indexOf("ipad") > -1 || isAndroid() && ua.indexOf("mobile") < 0;
};


/**
 * <h4>iPhone判定</h4>
 * @static
 * @method isIPhone
 * @return {Boolean}
 */
export function isIPhone(){
  return ua.indexOf("iphone") > -1;
};


/**
 * <h4>iPad判定</h4>
 * @static
 * @method isIPad
 * @return {Boolean}
 */
export function isIPad(){
  return ua.indexOf("ipad") > -1;
};


/**
 * <h4>iPod判定</h4>
 * @static
 * @method isIPod
 * @return {Boolean}
 */
export function isIPod(){
  return ua.indexOf("ipod") > -1;
};


/**
 * <h4>AndroidPhone判定</h4>
 * @static
 * @method isAndroidPhone
 * @return {Boolean}
 */
export function isAndroidPhone(){
  return isAndroid() && ua.indexOf("mobile") > -1;
};


/**
 * <h4>AndroidTablet判定</h4>
 * @static
 * @method isAndroidTablet
 * @return {Boolean}
 */
export function isAndroidTablet(){
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
export function isBrowser(browser, ver){
  let _browser = browser.toLowerCase();

  if(_browser === "ie"){
    return isIE(ver);
  } else if(_browser === "edge"){
    return isEdge(ver);
  } else if(_browser === "chrome"){
    return isChrome(ver);
  } else if(_browser === "firefox"){
    return isFirefox(ver);
  } else if(_browser === "safari"){
    return isSafari(ver);
  } else if(_browser === "mobilesafari"){
    return isMobileSafari(ver);
  } else if(_browser === "android"){
    return isAndroidBrowser(ver);
  } else if(_browser === "mobilechrome"){
    return isMobileChrome(ver);
  } else if(_browser === "androidchrome"){
    return isAndroidChrome(ver);
  } else if(_browser === "isochrome"){
    return isIosChrome(ver);
  } else if(_browser === "webkit"){
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
export function isIE(ver){
  if(ver){
    return ua.indexOf("msie " + ver) > -1 || (ua.indexOf("trident") > -1 && ua.indexOf("rv:" + ver) > -1);
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
export function isEdge(ver){
  ver = ver || "";
  return ua.indexOf("edge/" + ver) > -1;
};


/**
 * <h4>PC版 Chrome判定</h4>
 * @static
 * @method isChrome
 * @return {Boolean}
 */
export function isChrome(ver){
  if(ver){
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
export function isFirefox(ver){
  if(ver){
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
export function isSafari(ver){
  if(ver){
    return ua.indexOf("safari") > -1 && ua.indexOf("mobile") < 0 && !isChrome() && ua.indexOf("version/" + ver) > - 1;
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
export function isMobileSafari(ver){
  if(ver){
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
export function isAndroidBrowser(ver){
  if(ver){
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
export function isMobileChrome(ver){
  return isIosChrome(ver) || isAndroidChrome(ver);
};


/**
 * <h4>ios Chrome判定</h4>
 * @static
 * @method isIosChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {Boolean}
 */
export function isIosChrome(ver){
  if(ver){
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
export function isAndroidChrome(ver){
  if(ver) {
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
export function isWebkit(){
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
export function isFileAPI(){
  return !!(window.File && window.FileReader && window.FileList && window.Blob);
};


/**
 * <h4>RequestFileSystemの有無</h4>
 * @static
 * @method isRequestFileSystem
 * @return {Boolean}
 */
export function isRequestFileSystem(){
  return !!(window.requestFileSystem || window.webkitRequestFileSystem);
};


/**
 * <h4>Storage機能が使えるか判定</h4>
 * @static
 * @method isStorage
 * @return {Boolean}
 */
export function isStorage(){
  let isStorage = "sessionStorage" in window && "localStorage" in window;

  if(isStorage){
    try {
      localStorage.setItem("_INKJS_", 1);
    } catch (err) {
      isStorage = false;
    }
    if(isStorage){
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
export const isTouchScreen = (() => {
  let isTouchScreen,
  div = document.createElement("div");

  div.setAttribute("ontouchstart", "return");
  isTouchScreen = (typeof div.ontouchstart === "function");

  return function(){
    return isTouchScreen;
  };
})();
