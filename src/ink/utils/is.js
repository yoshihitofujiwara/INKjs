/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara


/**
 * @class Is
 * see: http://diveintohtml5.info/everything.html
 */


let toString = Object.prototype.toString


/**
 * ユーザーエージェント
 * @static
 * @property UA
 * @type {string}
 */
export const UA = navigator.userAgent;


/**
 * ユーザーエージェント toLowerCase
 * @static
 * @property ua
 * @type {string}
 */
export const ua = UA.toLowerCase();


/* isType
-----------------------------------------------------------------*/
/**
 * 配列型判定
 * @static
 * @method isArray
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export const isArray = Array.isArray || function (obj) {
	return toString.call(obj) === "[object Array]";
};


/**
 * 真偽型判定
 * @static
 * @method isBoolean
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isBoolean(obj) {
	return toString.call(obj) === "[object Boolean]";
};


/**
 * 関数型判定
 * @static
 * @method isFunction
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isFunction(obj) {
	return toString.call(obj) === "[object Function]";
};


/**
 * 数値型判定
 * @static
 * @method isNumber
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isNumber(obj) {
	return toString.call(obj) === "[object Number]";
};


/**
 * オブジェクト型判定
 * @static
 * @method isObject
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isObject(obj) {
	return !!obj && toString.call(obj) === "[object Object]";
};


/**
 * プレーンオブジェクト判定
 * @static
 * @method isPlainObject
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isPlainObject(obj) {
	return isObject(obj) && Object.keys(obj).length === 0;
};


/**
 * 文字列型判定
 * @static
 * @method isString
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isString(obj) {
	return toString.call(obj) === "[object String]";
};


/**
 * 正規表現判定
 * @static
 * @method isRegexp
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isRegexp(obj) {
	return toString.call(obj) === "[object RegExp]";
};


/**
 * undefined判定
 * @static
 * @method isUndefined
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isUndefined(obj) {
	return obj === void 0;
};


/**
 * null判定
 * @static
 * @method isNull
 * @param {object} obj 判定するオブジェクト
 * @return {boolean}
 */
export function isNull(obj) {
	return obj === null || toString.call(obj) === "[object Null]";
};


/**
 * マルチバイト文字列判定
 * @static
 * @method isMultibyte
 * @param  {string}  chara 一文字
 * @return {boolean}
 */
export function isMultibyte(chara) {
	return ('!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.indexOf(chara) < 0);
};


/**
 * isEmail Email判定
 * @param  {string}  email メールアドレス
 * @return {boolean}
 */
export function isEmail(email) {
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
export function isOS(os, ver) {
	let _os = os.toLowerCase();

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
export function isWindows(ver) {
	if (ver) {
		// NT Ver. プロダクト名
		// NT 6.1  Windows 7/Windows Server 2008 R2
		// NT 6.2  Windows 8/Windows Server 2012
		// NT 6.3  Windows 8.1/Windows Server 2012 R2
		// NT 10.0 Windows 10

		let _ver = ua.split(" windows nt ")[1].split(";")[0];
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
export function isMac(ver) {
	if (ver) {
		let serial = ("" + ver).replace(/\./g, "_");
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
export function isIos(ver) {
	if (ver) {
		let serial = ("" + ver).replace(/\./g, "_");
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
export function isAndroid(ver) {
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
export function isDevice(device) {
	let _device = device.toLowerCase();

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
export function isPC() {
	return isWindows() || isMac();
};


/**
 * スマートデバイス判定
 * @static
 * @method isSmartDevice
 * @return {boolean}
 */
export function isSmartDevice() {
	return isIos() || isAndroid();
};


/**
 * SmartPhone判定
 * @static
 * @method isSmartPhone
 * @return {boolean}
 */
export function isSmartPhone() {
	return ua.indexOf("iphone") > -1 || isAndroid() && ua.indexOf("mobile") > -1;
};


/**
 * タブレット判定
 * @static
 * @method isTablet
 * @return {boolean}
 */
export function isTablet() {
	return ua.indexOf("ipad") > -1 || isAndroid() && ua.indexOf("mobile") < 0;
};


/**
 * iPhone判定
 * @static
 * @method isIPhone
 * @return {boolean}
 */
export function isIPhone() {
	return ua.indexOf("iphone") > -1;
};


/**
 * iPad判定
 * @static
 * @method isIPad
 * @return {boolean}
 */
export function isIPad() {
	return ua.indexOf("ipad") > -1;
};


/**
 * iPod判定
 * @static
 * @method isIPod
 * @return {boolean}
 */
export function isIPod() {
	return ua.indexOf("ipod") > -1;
};


/**
 * AndroidPhone判定
 * @static
 * @method isAndroidPhone
 * @return {boolean}
 */
export function isAndroidPhone() {
	return isAndroid() && ua.indexOf("mobile") > -1;
};


/**
 * AndroidTablet判定
 * @static
 * @method isAndroidTablet
 * @return {boolean}
 */
export function isAndroidTablet() {
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
export function isBrowser(browser, ver) {
	let _browser = browser.toLowerCase();

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
export function isIE(ver) {
	if (ver) {
		return ua.indexOf("msie " + ver) > -1 || (ua.indexOf("trident") > -1 && ua.indexOf("rv:" + ver) > -1);
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
export function isEdge(ver) {
	ver = ver || "";
	return ua.indexOf("edge/" + ver) > -1;
};


/**
 * PC版 Chrome判定
 * @static
 * @method isChrome
 * @return {boolean}
 */
export function isChrome(ver) {
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
export function isFirefox(ver) {
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
export function isSafari(ver) {
	if (ver) {
		return ua.indexOf("safari") > -1 && ua.indexOf("mobile") < 0 && !isChrome() && ua.indexOf("version/" + ver) > - 1;
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
export function isMobileSafari(ver) {
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
export function isAndroidBrowser(ver) {
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
export function isMobileChrome(ver) {
	return isIosChrome(ver) || isAndroidChrome(ver);
};


/**
 * ios Chrome判定
 * @static
 * @method isIosChrome
 * @param {Number|String} ver バージョンナンバー 省略可
 * @return {boolean}
 */
export function isIosChrome(ver) {
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
export function isAndroidChrome(ver) {
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
export function isWebkit() {
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
export function isFileAPI() {
	return !!(window.File && window.FileReader && window.FileList && window.Blob);
};


/**
 * RequestFileSystemの有無
 * @static
 * @method isRequestFileSystem
 * @return {boolean}
 */
export function isRequestFileSystem() {
	return !!(window.requestFileSystem || window.webkitRequestFileSystem);
};


/**
 * Storage機能が使えるか判定
 * @static
 * @method isStorage
 * @return {boolean}
 */
export function isStorage() {
	let isStorage = "sessionStorage" in window && "localStorage" in window;

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
export const isTouchScreen = (() => {
	let isTouchScreen,
		div = document.createElement("div");

	div.setAttribute("ontouchstart", "return");
	isTouchScreen = (typeof div.ontouchstart === "function");

	return function () {
		return isTouchScreen;
	};
})();
