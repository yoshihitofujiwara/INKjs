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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function ($) {
	/*======================================================================
   フリックイベント
 ======================================================================*/
	/**
  * <h4>jQueryイベント拡張</h4>
  * <p>jQueryイベントオブジェクトを拡張し、Flickイベントを追加</p>
  * @class jQuery.Flick
  */

	/*--------------------------------------------------------------------------
 	@config
 --------------------------------------------------------------------------*/
	/**
  * <h4>Flickイベントオブジェクト</h4>
  * @type {Object}
  */
	var Flick = {};

	/**
  * <h4>タッチイベントが有効か</h4>
  * @static
  * @property isTouch
  * @type {Boolean}
  */
	Flick.isTouch = function () {
		var div = document.createElement('div');
		div.setAttribute('ontouchstart', 'return');
		return typeof div.ontouchstart === 'function';
	}();

	// イベントの種類
	Flick.EVENTS = {
		flick: 'flick',
		flickX: 'flickX',
		flickY: 'flickY',
		flickmove: 'flickmove',
		flickmoveX: 'flickmoveX',
		flickmoveY: 'flickmoveY',
		flickcancel: 'flickcancel',
		flickcancelX: 'flickcancelX',
		flickcancelY: 'flickcancelY'
	};

	/**
  * <h4>オプション値</h4>
  * @static
  * @property OPTIONS
  * @type {Object}
  */
	/**
  * <h4>ヒット判定最小値</h4>
  * @static
  * @property OPTIONS.hit
  * @type {Number}
  */
	/**
  * <h4>フリック判定最小値</h4>
  * @static
  * @property OPTIONS.area
  * @type {Number}
  */
	Flick.OPTIONS = {
		hit: 50,
		area: 10
	};

	/*--------------------------------------------------------------------------
 	@method
 --------------------------------------------------------------------------*/
	/**
  * <h4>イベントステートデータ生成</h4>
  * @static
  * @method createEventData
  * @param  {Object} event イベントオブジェクト
  * @return {Object} イベントステートデータ
  */
	Flick.createEventData = function (event) {
		return {
			flickEvent: null,
			isMoveX: false,
			isMoveY: false,
			moveX: 0,
			moveY: 0,
			startX: Flick.isTouch ? event.originalEvent.changedTouches[0].pageX : event.pageX,
			startY: Flick.isTouch ? event.originalEvent.changedTouches[0].pageY : event.pageY,
			startTime: $.now(),
			endTime: null
		};
	};

	/**
  * <h4>イベントフラグの生成</h4>
  * @static
  * @method getFlickHasMap
  * @param {String} type イベントタイプ
  * @return {Object} イベントフラグオブジェクト
  */
	Flick.getFlickHasMap = function (type) {
		return {
			isSide: type === Flick.EVENTS.flick || type === Flick.EVENTS.flickX || type === Flick.EVENTS.flickmove || type === Flick.EVENTS.flickmoveX || type === Flick.EVENTS.flickcancel || type === Flick.EVENTS.flickcancelX,
			isUpdown: type === Flick.EVENTS.flick || type === Flick.EVENTS.flickY || type === Flick.EVENTS.flickmove || type === Flick.EVENTS.flickmoveX || type === Flick.EVENTS.flickcancel || type === Flick.EVENTS.flickcancelY
		};
	};

	/**
  * <h4>move実行中の値のセット</h4>
  * @static
  * @method getFlickHasMap
  * @param {String} event イベントオブジェクト
  * @param {String} data イベントステートオブジェクト
  * @param {String} param イベント設定値
  * @return {Void}
  */
	Flick.setMoveData = function (event, data, param) {
		data.flickEvent = $.extend({}, data, event);

		if (Flick.isTouch) {
			data.moveX = event.originalEvent.changedTouches[0].pageX - data.startX;
			data.moveY = data.startY - event.originalEvent.changedTouches[0].pageY;
		} else {
			data.moveX = event.pageX - data.startX;
			data.moveY = data.startY - event.pageY;
		}

		if (param.area < Math.abs(data.moveY)) {
			data.isMoveY = true;
		}
		if (param.area < Math.abs(data.moveX)) {
			data.isMoveX = true;
		}
	};

	/**
  * <h4>イベント登録関数の生成</h4>
  * @static
  * @method getSetup
  * @param {String} type イベント名
  * @return {Function} イベント登録関数
  */
	Flick.getSetup = function (type) {
		var attr = '._' + type.toUpperCase();

		return function (data) {
			var $this = $(this);
			$this.on('mousedown' + attr + ' touchstart' + attr, function (event) {
				var param = $.extend({}, Flick.OPTIONS, data);
				Flick[type].handler($this, event, param);
			});
		};
	};

	/**
  * <h4>イベント削除関数の生成</h4>
  * @static
  * @method getTeardown
  * @param {String} type イベント名
  * @return {Function} イベント削除関数
  */
	Flick.getTeardown = function (type) {
		var attr = '._' + type.toUpperCase();
		return function () {
			$(this).off('mousedown' + attr + ' touchstart' + attr, Flick[type].handler);
		};
	};

	/**
  * <h4>フリックイベントハンドラ</h4>
  * @static
  * @method getFlickHandler
  * @param {String} type イベント名
  * @return {Function} フリックイベントハンドラ
  */
	Flick.getFlickHandler = function (type) {
		var attr = '._' + type.toUpperCase(),
		    eventType = Flick.getFlickHasMap(type);

		return function ($target, startEvent, param) {
			var data = Flick.createEventData(startEvent);

			if (!Flick.isTouch) {
				startEvent.preventDefault();
			}

			// move
			$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr).on('mousemove' + attr + ' touchmove' + attr, function (moveEvent) {
				if (!Flick.isTouch) {
					moveEvent.preventDefault();
				}

				Flick.setMoveData(moveEvent, data, param);

				// イベントタイプが有効か判定して無効の場合削除
				if (type === 'flickX' && data.isMoveY && !data.isMoveX || type === 'flickY' && data.isMoveX && !data.isMoveY) {
					$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
				}
			}).on('click' + attr, function (clickEvent) {
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				    isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if (eventType.isSide && isX || eventType.isUpdown && isY) {
					clickEvent.preventDefault();
				}
			});

			// find > a
			$target.find('a').off('click' + attr).on('click' + attr, function (clickEvent) {
				if (eventType.isSide && data.isMoveX || eventType.isUpdown && data.isMoveY) {
					return false;
				}
			});

			// up
			$('html').off('mouseup' + attr + ' touchend' + attr).one('mouseup' + attr + ' touchend' + attr, function () {
				$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);

				if (data && data.flickEvent) {
					data.flickEvent.type = type;
					data.flickEvent.moveX = data.moveX;
					data.flickEvent.moveY = data.moveY;
					data.flickEvent.endTime = $.now();

					var isX = data.isMoveX && param.hit < Math.abs(data.moveX) && eventType.isSide,
					    isY = data.isMoveY && param.hit < Math.abs(data.moveY) && eventType.isUpdown;

					if (eventType.isSide && isX || eventType.isUpdown && isY) {
						$target.trigger(data.flickEvent);
					}
				}

				// delete data
				setTimeout(function () {
					data = null;
				}, 20);
			});
		};
	};

	/**
  * <h4>フリックムーブイベントハンドラ</h4>
  * @static
  * @method getMoveHandler
  * @param {String} type イベント名
  * @return {Function} フリックムーブイベントハンドラ
  */
	Flick.getMoveHandler = function (type) {
		var attr = '._' + type.toUpperCase(),
		    eventType = Flick.getFlickHasMap(type);

		return function ($target, startEvent, param) {
			var data = Flick.createEventData(startEvent);

			if (!Flick.isTouch) {
				startEvent.preventDefault();
			}

			// move
			$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr).on('mousemove' + attr + ' touchmove' + attr, function (moveEvent) {

				Flick.setMoveData(moveEvent, data, param);
				if (!Flick.isTouch) {
					moveEvent.preventDefault();
				}
				// イベントタイプ振り分け
				if (type === 'flickmove') {
					if (data.isMoveX || data.isMoveY) {
						moveEvent.preventDefault();
						data.flickEvent.type = type;
						data.flickEvent.moveX = data.moveX;
						data.flickEvent.moveY = data.moveY;
						data.flickEvent.endTime = $.now();
						$target.trigger(data.flickEvent);
					}
				} else if (type === 'flickmoveX') {
					if (data.isMoveY && !data.isMoveX) {
						$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
					} else if (data.isMoveX) {
						moveEvent.preventDefault();
						data.flickEvent.type = type;
						data.flickEvent.moveX = data.moveX;
						data.flickEvent.moveY = data.moveY;
						data.flickEvent.endTime = $.now();
						$target.trigger(data.flickEvent);
					}
				} else if (type === 'flickmoveY') {
					if (data.isMoveX && !data.isMoveY) {
						$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
					} else if (data.isMoveY) {
						moveEvent.preventDefault();
						data.flickEvent.type = type;
						data.flickEvent.moveX = data.moveX;
						data.flickEvent.moveY = data.moveY;
						data.flickEvent.endTime = $.now();
						$target.trigger(data.flickEvent);
					}
				}

				// エリア最小値を超えればイベントキャンセル
				// if((data.isMoveX && eventType.isSide) || (data.isMoveY && eventType.isUpdown)){
				// moveEvent.preventDefault();
				// }
			}).on('click' + attr, function (clickEvent) {
				if (eventType.isSide && data.isMoveX && param.area < Math.abs(data.moveX)) {
					clickEvent.preventDefault();
				}
			});

			// find > a
			$target.find('a').off('click' + attr).on('click' + attr, function (clickEvent) {
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				    isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if (eventType.isSide && isX || eventType.isUpdown && isY) {
					return false;
				}
			});

			// off
			$('html').off('mouseup' + attr + ' touchend' + attr).on('mouseup' + attr + ' touchend' + attr, function () {
				$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);

				// delete data
				setTimeout(function () {
					data = null;
				}, 20);
			});
		};
	};

	/**
  * <h4>フリックキャンセルイベントハンドラ</h4>
  * <p>フリック判定最小値を一回超えないと発生しません</p>
  * @static
  * @method getCancelHandler
  * @param {String} type イベント名
  * @return {Function} フリックキャンセルイベントハンドラ
  */
	Flick.getCancelHandler = function (type) {
		var attr = '._' + type.toUpperCase(),
		    eventType = Flick.getFlickHasMap(type);

		return function ($target, startEvent, param) {
			var data = Flick.createEventData(startEvent);

			if (!Flick.isTouch) {
				startEvent.preventDefault();
			}

			// move
			$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr).on('mousemove' + attr + ' touchmove' + attr, function (moveEvent) {
				if (!Flick.isTouch) {
					moveEvent.preventDefault();
				}

				Flick.setMoveData(moveEvent, data, param);

				// イベントタイプが有効か判定して無効の場合削除
				if (type === 'flickcancelX' && data.isMoveY && !data.isMoveX || type === 'flickcancelY' && data.isMoveX && !data.isMoveY) {
					$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
				}
			}).on('click' + attr, function (clickEvent) {
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				    isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if (eventType.isSide && isX || eventType.isUpdown && isY) {
					clickEvent.preventDefault();
				}
			});

			// find > a
			$target.find('a').off('click' + attr).on('click' + attr, function (clickEvent) {
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				    isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if (eventType.isSide && data.isMoveX || eventType.isUpdown && data.isMoveY) {
					return false;
				}
			});

			// up
			$('html').off('mouseup' + attr + ' touchend' + attr).one('mouseup' + attr + ' touchend' + attr, function () {
				$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);

				if (data && data.flickEvent) {
					var isX = param.hit > Math.abs(data.moveX) && eventType.isSide,
					    isY = param.hit > Math.abs(data.moveY) && eventType.isUpdown;

					data.flickEvent.type = type;
					data.flickEvent.moveX = data.moveX;
					data.flickEvent.moveY = data.moveY;
					data.flickEvent.endTime = $.now();

					if (eventType.isSide && data.isMoveX || eventType.isUpdown && data.isMoveY) {
						if (type === Flick.EVENTS.flickcancel && isX && isY) {
							$target.trigger(data.flickEvent);
						} else if (type === Flick.EVENTS.flickcancelX && data.isMoveX && isX) {
							$target.trigger(data.flickEvent);
						} else if (type === Flick.EVENTS.flickcancelY && data.isMoveY && isY) {
							$target.trigger(data.flickEvent);
						}
					}
				}

				// delete data
				setTimeout(function () {
					data = null;
				}, 20);
			});
		};
	};

	/* flick
 -----------------------------------------------------------------*/
	/**
  * <h4>フリックイベントオブジェクト</h4>
  * @static
  * @property flick
  * @type {Object}
  */
	Flick.flick = {
		setup: Flick.getSetup(Flick.EVENTS.flick),
		teardown: Flick.getTeardown(Flick.EVENTS.flick),
		handler: Flick.getFlickHandler(Flick.EVENTS.flick)
	};
	/**
  * <h4>フリックイベントオブジェクトX軸</h4>
  * @static
  * @property flickX
  * @type {Object}
  */
	Flick.flickX = {
		setup: Flick.getSetup(Flick.EVENTS.flickX),
		teardown: Flick.getTeardown(Flick.EVENTS.flickX),
		handler: Flick.getFlickHandler(Flick.EVENTS.flickX)
	};
	/**
  * <h4>フリックイベントオブジェクトY軸</h4>
  * @static
  * @property flickY
  * @type {Object}
  */
	Flick.flickY = {
		setup: Flick.getSetup(Flick.EVENTS.flickY),
		teardown: Flick.getTeardown(Flick.EVENTS.flickY),
		handler: Flick.getFlickHandler(Flick.EVENTS.flickY)
	};

	/* flickmove
 -----------------------------------------------------------------*/
	/**
  * <h4>フリックムーブイベントオブジェクト</h4>
  * @static
  * @property flickmove
  * @type {Object}
  */
	Flick.flickmove = {
		setup: Flick.getSetup(Flick.EVENTS.flickmove),
		teardown: Flick.getTeardown(Flick.EVENTS.flickmove),
		handler: Flick.getMoveHandler(Flick.EVENTS.flickmove)
	};
	/**
  * <h4>フリックムーブイベントオブジェクトX軸</h4>
  * @static
  * @property flickmoveX
  * @type {Object}
  */
	Flick.flickmoveX = {
		setup: Flick.getSetup(Flick.EVENTS.flickmoveX),
		teardown: Flick.getTeardown(Flick.EVENTS.flickmoveX),
		handler: Flick.getMoveHandler(Flick.EVENTS.flickmoveX)
	};
	/**
  * <h4>フリックムーブイベントオブジェクトY軸</h4>
  * @static
  * @property flickmoveY
  * @type {Object}
  */
	Flick.flickmoveY = {
		setup: Flick.getSetup(Flick.EVENTS.flickmoveY),
		teardown: Flick.getTeardown(Flick.EVENTS.flickmoveY),
		handler: Flick.getMoveHandler(Flick.EVENTS.flickmoveY)
	};

	/* flickcancel
 -----------------------------------------------------------------*/
	/**
  * <h4>フリックキャンセルイベントオブジェクト</h4>
  * @static
  * @property flickcancel
  * @type {Object}
  */
	Flick.flickcancel = {
		setup: Flick.getSetup(Flick.EVENTS.flickcancel),
		teardown: Flick.getTeardown(Flick.EVENTS.flickcancel),
		handler: Flick.getCancelHandler(Flick.EVENTS.flickcancel)
	};
	/**
  * <h4>フリックキャンセルイベントオブジェクトX軸</h4>
  * @static
  * @property flickcancelX
  * @type {Object}
  */
	Flick.flickcancelX = {
		setup: Flick.getSetup(Flick.EVENTS.flickcancelX),
		teardown: Flick.getTeardown(Flick.EVENTS.flickcancelX),
		handler: Flick.getCancelHandler(Flick.EVENTS.flickcancelX)
	};
	/**
  * <h4>フリックキャンセルイベントオブジェクトY軸</h4>
  * @static
  * @property flickcancelY
  * @type {Object}
  */
	Flick.flickcancelY = {
		setup: Flick.getSetup(Flick.EVENTS.flickcancelY),
		teardown: Flick.getTeardown(Flick.EVENTS.flickcancelY),
		handler: Flick.getCancelHandler(Flick.EVENTS.flickcancelY)
	};

	/*--------------------------------------------------------------------------
 	export
 --------------------------------------------------------------------------*/
	/**
  * <h4>Flickイベントをエクスポート</h4>
  * @property jQuery.Flick
  * @type {Object}
  */
	$.Flick = Flick;

	/**
  * <h4>フリックイベント</h4>
  * <p>X軸、Y軸4方向のフリックイベント</p>
  * @event flick
  * @example
  * $(elm).on('flick', callback);
  * $(elm).flick(callback);
  */
	/**
  * <h4>フリックXイベント</h4>
  * <p>X軸2方向のフリックイベント</p>
  * @event flickX
  * @example
  * $(elm).on('flickX', callback);
  * $(elm).flickX(callback);
  */
	/**
  * <h4>フリックYイベント</h4>
  * <p>Y軸2方向のフリックイベント</p>
  * @event flickY
  * @example
  * $(elm).on('flickY', callback);
  * $(elm).flickY(callback);
  */
	/**
  * <h4>フリックキャンセルイベント</h4>
  * <p>X軸、Y軸4方向のフリックキャンセルイベント</p>
  * @event flickcancel
  * @example
  * $(elm).on('flickcancel', callback);
  * $(elm).flickcancel(callback);
  */
	/**
  * <h4>フリックXキャンセルイベント</h4>
  * <p>X軸2方向のフリックキャンセルイベント</p>
  * @event flickcancelX
  * @example
  * $(elm).on('flickcancelX', callback);
  * $(elm).flickcancelX(callback);
  */
	/**
  * <h4>フリックYキャンセルイベント</h4>
  * <p>Y軸2方向のフリックキャンセルイベント</p>
  * @event flickcancelY
  * @example
  * $(elm).on('flickcancelY', callback);
  * $(elm).flickcancelY(callback);
  */
	/**
  * <h4>フリックムーブイベント</h4>
  * <p>X軸、Y軸4方向のフリックムーブイベント</p>
  * @event flickmove
  * @example
  * $(elm).on('flickmove', callback);
  * $(elm).flickmove(callback);
  */
	/**
  * <h4>フリックXムーブイベント</h4>
  * <p>X軸2方向のフリックムーブイベント</p>
  * @event flickmoveX
  * @example
  * $(elm).on('flickmoveX', callback);
  * $(elm).flickmoveX(callback);
  */
	/**
  * <h4>フリックYムーブイベント</h4>
  * <p>Y軸2方向のフリックムーブイベント</p>
  * @event flickmoveY
  * @example
  * $(elm).on('flickmoveY', callback);
  * $(elm).flickmoveY(callback);
  */
	$.each(Flick.EVENTS, function (index, key) {
		// add Event
		$.event.special[key] = Flick[key];

		// add shorthand
		$.fn[key] = function (data, fn) {
			return arguments.length > 0 ? this.on(key, null, data, fn) : this.trigger(key);
		};
	});
})(jQuery);

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function ($) {
	/*======================================================================
   スリップイベント
 ======================================================================*/
	/**
  * <h4>jQuery拡張</h4>
  * <p>jQueryイベントオブジェクトを拡張し、Slipイベントを追加</p>
  *
  * @class jQuery.Slip
  */

	/*--------------------------------------------------------------------------
 	@slip
 --------------------------------------------------------------------------*/
	/**
  * <h4>マウスインした時の方向を取得するイベント</h4>
  * <p>イベントオブジェクトに取得したオブジェクトを返します<br>
  * <em>インライン要素は対象外です</em></p>
  *
  * @event slipin
  * @example
  * $(elm).on('slipin', callback);
  * $(elm).slipin(callback);
  */
	/**
  * <h4>マウスアウトした時の方向を取得するイベント</h4>
  * <p>イベントオブジェクトに取得したオブジェクトを返します<br>
  * <em>インライン要素は対象外です</em></p>
  *
  * @event slipout
  * @example
  * $(elm).on('slipout', callback);
  * $(elm).slipout(callback);
  */
	$.each({
		mouseenter: 'slipin',
		mouseleave: 'slipout'
	}, function (orig, fix) {

		$.event.special[fix] = {

			// on
			setup: function setup() {
				$(this).on(orig, $.event.special[fix].handler);
			},

			// off
			teardown: function teardown() {
				$(this).off(orig, $.event.special[fix].handler);
			},

			// handler
			handler: function handler(event) {
				var obj = {},
				    $this = $(this),
				    offset = $this.offset(),
				    w = $this.width(),
				    h = $this.height(),
				    x = (event.pageX - offset.left - w / 2) * (w > h ? h / w : 1),
				    y = (event.pageY - offset.top - h / 2) * (h > w ? w / h : 1),
				    direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;

				obj.originalEvent = event;
				obj.x = x;
				obj.y = y;
				obj.type = fix;
				// obj.direction = direction;

				switch (direction) {
					case 0:
						obj.direction = 'top';
						break;

					case 1:
						obj.direction = 'right';
						break;

					case 2:
						obj.direction = 'bottom';
						break;

					case 3:
						obj.direction = 'left';
						break;
				}

				$this.trigger(obj);
			}
		};

		// add shorthand
		$.fn[fix] = function (data, fn) {
			return arguments.length > 0 ? this.on(fix, null, data, fn) : this.trigger(fix);
		};
	});

	/**
  * <h4>slipin, slipout ショートハンド</h4>
  * <p><em>インライン要素は対象外です</em></p>
  *
  * @event slip
  * @param {Function} fnIn  slipinコールバック関数
  * @param {Function} fnOut slipoutコールバック関数
  * @example
  * $(elm).slip(inCallback, outCallback);
  */
	$.fn.slip = function (fnIn, fnOut) {
		return this.slipin(fnIn).slipout(fnOut || fnIn);
	};
})(jQuery);

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function ($) {
	/*======================================================================
   ストップイベント
 ======================================================================*/
	/**
  * <h4>jQueryイベント拡張</h4>
  * <p>jQueryイベントオブジェクトを拡張し、resizestop, scrollstopイベントを追加</p>
  *
  * @class jQuery.Stop
  */

	/**
  * <h4>リサイズイベントを間引き、リサイズ完了後発火します</h4>
  *
  * @event resizestop
  * @param {Object} 間引く時間を指定 default {timer: 50}
  * @example
  * $(window).on('resizestop', callback);
  * $(window).on('resizestop', {timer: 1000}, callback);
  */
	/**
  * <h4>スクロールイベントを間引き、スクロール完了後発火します</h4>
  *
  * @event scrollstop
  * @param {Object} 間引く時間を指定 default {timer: 50}
  * @example
  * $(window).on('scrollstop', {timer: 1000}, callback);
  * $(window).on('scrollstop', callback);
  * $(window).scrollstop(callback);
  */
	$.each({
		resize: 'resizestop',
		scroll: 'scrollstop'
	}, function (orig, fix) {

		$.event.special[fix] = {
			// data
			data: {
				eventType: fix,
				timer: 50,
				timerId: null
			},

			// on
			setup: function setup(obj) {
				var data = $.extend({}, $.event.special[fix].data, obj);
				$(this).on(orig, function () {
					$.event.special[fix].handler(data);
				});
			},

			// off
			teardown: function teardown() {
				$(this).off(orig);
			},

			// handler
			handler: function handler(data) {
				clearTimeout(data.timerId);
				data.timerId = setTimeout(function () {
					$(this).trigger(data.eventType);
				}, data.timer);
			}
		};

		// add shorthand
		$.fn[fix] = function (data, fn) {
			return arguments.length > 0 ? this.on(fix, null, data, fn) : this.trigger(fix);
		};
	});
})(jQuery);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function ($) {
	/*======================================================================
   jQuery拡張
 ======================================================================*/
	/**
  * <h4>jQuery拡張</h4>
  * <p>jQueryオブジェクトを拡張し機能追加します<br>
  *
  * @class jQuery.Extend
  */

	/*----------------------------------------------------------------------
   config
 ----------------------------------------------------------------------*/
	var slice = Array.prototype.slice;

	/*--------------------------------------------------------------------------
 	@sequence
 --------------------------------------------------------------------------*/
	/**
  * <h4>縦列・並列処理の管理</h4>
  * <p>Deferred resolve通知を受けたら次の関数へ移ります<p>
  *
  * @static
  * @method sequence
  * @param {Function|Array} arguments 可変長引数で関数を渡すか、関数を格納した配列を渡す
  * @return {jQuery.Deferred}
  */
	$.sequence = function () {
		/*jslint loopfunc: true */
		var $def = new $.Deferred(),
		    $Def = new $.Deferred(),
		    callbacks,
		    piped;

		if ($.isArray(arguments[0])) {
			callbacks = arguments[0];
		} else {
			callbacks = [].slice.apply(arguments);
		}

		callbacks[callbacks.length] = $def.resolve;

		var i = 0,
		    l = callbacks.length;

		for (; i < l; i += 1) {
			if ($.isFunction(callbacks[i])) {
				piped = (piped ? piped : $Def).pipe($.proxy(function () {
					return this();
				}, callbacks[i])).fail($def.reject);
			}
		}

		$Def.resolve();

		return $def.promise();
	};

	/**
  * <h4>縦列・並列処理の管理</h4>
  * <p>実行した関数の戻り値は、次の関数の引数とproglessに渡します</p>
  *
  * @static
  * @method stream
  * @param {Function|Array} arguments 可変長引数で関数を渡すか、関数を格納した配列を渡す
  * @return {jQuery.Deferred}
  */
	$.stream = function () {
		var $defer = new $.Deferred(),
		    count = 0,
		    callbacks = $.isArray(arguments[0]) ? callbacks : slice.call(arguments);

		callbacks.push($defer.resolve);
		_stream();

		// callbacksを再帰的に縦列処理する
		function _stream() {
			$.when.call(null, callbacks[count].apply(null, arguments)).fail($defer.reject).done(function () {
				$defer.notify.call(null, arguments);
				count += 1;
				if (count < callbacks.length) {
					_stream.apply(null, arguments);
				}
			});
		}

		return $defer.promise();
	};

	/**
  * <h4>タイマー</h4>
  * <p>Deferredでタイマー管理しています。<br>
  * progressメソッドでタイマー進捗、doneでタイマー完了なども取ることが可能です。<br>
  * タイマー処理をキャンセルしたい場合は、rejectメソッドを呼び出すとで、キャンセルされfailメソッドが呼び出されます。</p>
  *
  * @static
  * @method timer
  * @param  {Number} time msタイム
  * @param  {Function} callback コールバック関数
  * @return {$.Deferred}
  */
	$.timer = function (time, callback) {
		var $def = $.Deferred(),
		    start = performance.now(),
		    flag = false;

		callback = callback ? callback : $.noop;

		function update() {
			var diff = performance.now() - start;

			if (flag && time < diff) {
				$def.resolve(1);
				callback();
			} else {
				if (time < diff) {
					diff = time;
					flag = true;
				}

				$def.notify(diff / time, diff);
				requestAnimationFrame(update);
			}
		}

		update();

		var $promise = $def.promise();

		// export
		$.each($def, function (key, val) {
			if (!$promise[key]) {
				$promise[key] = val;
			}
		});

		return $promise;
	};
})(jQuery);

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function ($) {
	/*======================================================================
   jQueryプロトタイプ拡張
 ======================================================================*/
	/**
  * <h4>jQueryプロトタイプ拡張</h4>
  * <p>jQueryプロトタイプを拡張し機能追加します</p>
  *
  * @class jQuery.FnExtend
  */

	/**
  * <h4>アニメーションキュー処理の追加</h4>
  *
  * @method addQ
  * @param {String|Function} attr メソッド名
  * @param {String|Object|Function} prop プロパティ名
  * @param {String} val  値
  */
	$.fn.addQ = function (method, prop, val) {
		var self = this,
		    args = [].slice.call(arguments, 1);

		if ($.isFunction(method)) {
			return this.queue(function () {
				method.apply(self, args);
				return self.dequeue();
			});
		} else {
			return this.queue(function () {
				return self[method].apply(self, args).dequeue();
			});
		}
	};

	/**
  * <h4>属性値のreplace処理</h4>
  *
  * @method replaceAttr
  * @param {String} attr 属性名
  * @param {String} del 削除する文字列
  * @param {String} add 追加する文字列 省略可
  * @return {jQuery}
  */
	$.fn.replaceAttr = function (attr, del, add) {
		var val = this.attr(attr);

		if (val) {
			add = add ? add : '';
			return this.attr(attr, val.replace(del, add));
		} else {
			return this;
		}
	};

	/**
  * <h4>ファイルの拡張子を取得</h4>
  *
  * @method getExt
  * @param {String} attr 取得属性名
  * @param {Boolean} isQuery query,hashを含むか 初期値: false
  * @return {String} 拡張子を返す
  */
	$.fn.getExt = function (attr, isQuery) {
		var str = this.attr(attr),
		    val;

		if (str.indexOf('.') > -1) {
			val = str.substring(str.lastIndexOf('.'));

			if (!isQuery) {
				val = val.split('?')[0].split('#')[0];
			}
		}

		return val;
	};
})(jQuery);

/***/ })

/******/ });