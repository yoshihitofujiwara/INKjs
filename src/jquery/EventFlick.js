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
	 * jQueryイベント拡張
	 * <p>jQueryイベントオブジェクトを拡張し、Flickイベントを追加</p>
	 * @class jQuery.Flick
	 */


	/*--------------------------------------------------------------------------
		@config
	--------------------------------------------------------------------------*/
	/**
	 * Flickイベントオブジェクト
	 * @type {Object}
	 */
	var Flick = {};

	/**
	 * タッチイベントが有効か
	 * @static
	 * @property isTouch
	 * @type {Boolean}
	 */
	Flick.isTouch = (function(){
    var div = document.createElement('div');
    div.setAttribute('ontouchstart', 'return');
    return typeof div.ontouchstart === 'function';
  }());


	// イベントの種類
	Flick.EVENTS = {
    flick       : 'flick',
    flickX      : 'flickX',
    flickY      : 'flickY',
    flickmove   : 'flickmove',
    flickmoveX  : 'flickmoveX',
    flickmoveY  : 'flickmoveY',
    flickcancel : 'flickcancel',
    flickcancelX: 'flickcancelX',
    flickcancelY: 'flickcancelY'
	};


	/**
	 * オプション値
	 * @static
	 * @property OPTIONS
	 * @type {Object}
	 */
	/**
	 * ヒット判定最小値
	 * @static
	 * @property OPTIONS.hit
	 * @type {Number}
	 */
	/**
	 * フリック判定最小値
	 * @static
	 * @property OPTIONS.area
	 * @type {Number}
	 */
	Flick.OPTIONS = {
    hit : 50,
    area: 10
  };


	/*--------------------------------------------------------------------------
		@method
	--------------------------------------------------------------------------*/
	/**
	 * イベントステートデータ生成
	 * @static
	 * @method createEventData
	 * @param  {Object} event イベントオブジェクト
	 * @return {Object} イベントステートデータ
	 */
	Flick.createEventData = function(event){
		return {
			flickEvent: null,
			isMoveX   : false,
			isMoveY   : false,
			moveX     : 0,
			moveY     : 0,
			startX    : Flick.isTouch ? event.originalEvent.changedTouches[0].pageX : event.pageX,
			startY    : Flick.isTouch ? event.originalEvent.changedTouches[0].pageY : event.pageY,
			startTime : $.now(),
			endTime   : null
		};
	};


	/**
	 * イベントフラグの生成
	 * @static
	 * @method getFlickHasMap
	 * @param {String} type イベントタイプ
	 * @return {Object} イベントフラグオブジェクト
	 */
	Flick.getFlickHasMap = function(type){
		return {
			isSide: (
				type === Flick.EVENTS.flick ||
				type === Flick.EVENTS.flickX ||
				type === Flick.EVENTS.flickmove ||
				type === Flick.EVENTS.flickmoveX ||
				type === Flick.EVENTS.flickcancel ||
				type === Flick.EVENTS.flickcancelX),
			isUpdown: (
				type === Flick.EVENTS.flick ||
				type === Flick.EVENTS.flickY ||
				type === Flick.EVENTS.flickmove ||
				type === Flick.EVENTS.flickmoveX ||
				type === Flick.EVENTS.flickcancel ||
				type === Flick.EVENTS.flickcancelY)
		};
	};


	/**
	 * move実行中の値のセット
	 * @static
	 * @method getFlickHasMap
	 * @param {String} event イベントオブジェクト
	 * @param {String} data イベントステートオブジェクト
	 * @param {String} param イベント設定値
	 * @return {Void}
	 */
	Flick.setMoveData = function(event, data, param){
		data.flickEvent = $.extend({}, data, event);

		if(Flick.isTouch){
			data.moveX = event.originalEvent.changedTouches[0].pageX - data.startX;
			data.moveY = data.startY - event.originalEvent.changedTouches[0].pageY;
		} else {
			data.moveX = event.pageX - data.startX;
			data.moveY = data.startY - event.pageY;
		}

		if(param.area < Math.abs(data.moveY)){
			data.isMoveY = true;
		}
		if(param.area < Math.abs(data.moveX)){
			data.isMoveX = true;
		}
	};


	/**
	 * イベント登録関数の生成
	 * @static
	 * @method getSetup
	 * @param {String} type イベント名
	 * @return {Function} イベント登録関数
	 */
	Flick.getSetup = function(type){
		var attr = '._' + type.toUpperCase();

		return function(data){
			var $this = $(this);
			$this.on('mousedown' + attr + ' touchstart' + attr, function(event){
				var param = $.extend({}, Flick.OPTIONS, data);
				Flick[type].handler($this, event, param);
			});
		};
	};


	/**
	 * イベント削除関数の生成
	 * @static
	 * @method getTeardown
	 * @param {String} type イベント名
	 * @return {Function} イベント削除関数
	 */
	Flick.getTeardown = function(type){
		var attr = '._' + type.toUpperCase();
		return function(){
			$(this).off('mousedown' + attr + ' touchstart' + attr, Flick[type].handler);
		};
	};


	/**
	 * フリックイベントハンドラ
	 * @static
	 * @method getFlickHandler
	 * @param {String} type イベント名
	 * @return {Function} フリックイベントハンドラ
	 */
	Flick.getFlickHandler = function(type){
		var attr = '._' + type.toUpperCase(),
		eventType = Flick.getFlickHasMap(type);

		return function($target, startEvent, param){
			var data = Flick.createEventData(startEvent);

			if(!Flick.isTouch){
				startEvent.preventDefault();
			}

			// move
			$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr)
			.on('mousemove' + attr + ' touchmove' + attr, function(moveEvent){
				if(!Flick.isTouch){
					moveEvent.preventDefault();
				}

				Flick.setMoveData(moveEvent, data, param);

				// イベントタイプが有効か判定して無効の場合削除
				if((type === 'flickX' && data.isMoveY && !data.isMoveX) ||
					(type === 'flickY' && data.isMoveX && !data.isMoveY)) {
					$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
				}
			})
			.on('click' + attr, function(clickEvent){
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if((eventType.isSide && isX) || (eventType.isUpdown && isY)){
					clickEvent.preventDefault();
				}
			});

			// find > a
			$target.find('a').off('click' + attr)
			.on('click' + attr, function(clickEvent){
				if((eventType.isSide && data.isMoveX) || (eventType.isUpdown && data.isMoveY)){
					return false;
				}
			});

			// up
			$('html').off('mouseup' + attr + ' touchend' + attr)
			.one('mouseup' + attr + ' touchend' + attr, function(){
				$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);

				if(data && data.flickEvent){
					data.flickEvent.type  = type;
					data.flickEvent.moveX = data.moveX;
					data.flickEvent.moveY = data.moveY;
					data.flickEvent.endTime = $.now();

					var isX = data.isMoveX && param.hit < Math.abs(data.moveX) && eventType.isSide,
					isY = data.isMoveY && param.hit < Math.abs(data.moveY) && eventType.isUpdown;

					if((eventType.isSide && isX) || (eventType.isUpdown && isY)){
						$target.trigger(data.flickEvent);
					}
				}

				// delete data
				setTimeout(function(){
					data = null;
				}, 20);
			});
		};
	};


	/**
	 * フリックムーブイベントハンドラ
	 * @static
	 * @method getMoveHandler
	 * @param {String} type イベント名
	 * @return {Function} フリックムーブイベントハンドラ
	 */
	Flick.getMoveHandler = function(type){
		var attr = '._' + type.toUpperCase(),
		eventType = Flick.getFlickHasMap(type);

		return function($target, startEvent, param){
			var data = Flick.createEventData(startEvent);

			if(!Flick.isTouch){
				startEvent.preventDefault();
			}

			// move
			$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr)
			.on('mousemove' + attr + ' touchmove' + attr, function(moveEvent){

				Flick.setMoveData(moveEvent, data, param);
				if(!Flick.isTouch){
					moveEvent.preventDefault();
				}
				// イベントタイプ振り分け
				if(type === 'flickmove'){
					if(data.isMoveX || data.isMoveY){
	          moveEvent.preventDefault();
						data.flickEvent.type = type;
						data.flickEvent.moveX = data.moveX;
						data.flickEvent.moveY = data.moveY;
						data.flickEvent.endTime = $.now();
						$target.trigger(data.flickEvent);
					}

				} else if(type === 'flickmoveX'){
					if(data.isMoveY && !data.isMoveX){
						$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
					} else if(data.isMoveX){
	          moveEvent.preventDefault();
						data.flickEvent.type = type;
						data.flickEvent.moveX = data.moveX;
						data.flickEvent.moveY = data.moveY;
						data.flickEvent.endTime = $.now();
						$target.trigger(data.flickEvent);
					}

				} else if(type === 'flickmoveY'){
					if(data.isMoveX && !data.isMoveY){
						$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
					} else if(data.isMoveY){
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
			})
			.on('click' + attr, function(clickEvent){
				if(eventType.isSide && data.isMoveX && param.area < Math.abs(data.moveX)){
					clickEvent.preventDefault();
				}
			});

			// find > a
			$target.find('a').off('click' + attr)
			.on('click' + attr, function(clickEvent){
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if((eventType.isSide && isX) || (eventType.isUpdown && isY)){
					return false;
				}
			});

			// off
			$('html').off('mouseup' + attr + ' touchend' + attr)
			.on('mouseup' + attr + ' touchend' + attr, function(){
				$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);

				// delete data
				setTimeout(function(){
					data = null;
				}, 20);
			});
		};
	};


	/**
	 * フリックキャンセルイベントハンドラ
	 * <p>フリック判定最小値を一回超えないと発生しません</p>
	 * @static
	 * @method getCancelHandler
	 * @param {String} type イベント名
	 * @return {Function} フリックキャンセルイベントハンドラ
	 */
	Flick.getCancelHandler = function(type){
		var attr = '._' + type.toUpperCase(),
		eventType = Flick.getFlickHasMap(type);

		return function($target, startEvent, param){
			var data = Flick.createEventData(startEvent);

			if(!Flick.isTouch){
				startEvent.preventDefault();
			}

			// move
			$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr)
			.on('mousemove' + attr + ' touchmove' + attr, function(moveEvent){
				if(!Flick.isTouch){
					moveEvent.preventDefault();
				}

				Flick.setMoveData(moveEvent, data, param);

				// イベントタイプが有効か判定して無効の場合削除
				if((type === 'flickcancelX' && data.isMoveY && !data.isMoveX) ||
					(type === 'flickcancelY' && data.isMoveX && !data.isMoveY))
				{
					$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);
				}
			})
			.on('click' + attr, function(clickEvent){
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if((eventType.isSide && isX) || (eventType.isUpdown && isY)){
					clickEvent.preventDefault();
				}
			});

			// find > a
			$target.find('a').off('click' + attr)
			.on('click' + attr, function(clickEvent){
				var isX = data.isMoveX && param.area < Math.abs(data.moveX) && eventType.isSide,
				isY = data.isMoveY && param.area < Math.abs(data.moveY) && eventType.isUpdown;

				if((eventType.isSide && data.isMoveX) || (eventType.isUpdown && data.isMoveY)){
					return false;
				}
			});

			// up
			$('html').off('mouseup' + attr + ' touchend' + attr)
			.one('mouseup' + attr + ' touchend' + attr, function(){
				$target.off('mousemove' + attr + ' touchmove' + attr + ' click' + attr);

				if(data && data.flickEvent){
					var isX = param.hit > Math.abs(data.moveX) && eventType.isSide,
					isY = param.hit > Math.abs(data.moveY) && eventType.isUpdown;

					data.flickEvent.type  = type;
					data.flickEvent.moveX = data.moveX;
					data.flickEvent.moveY = data.moveY;
					data.flickEvent.endTime = $.now();

					if((eventType.isSide && data.isMoveX) || (eventType.isUpdown && data.isMoveY)){
						if(type === Flick.EVENTS.flickcancel && isX && isY){
							$target.trigger(data.flickEvent);
						} else if(type === Flick.EVENTS.flickcancelX && data.isMoveX && isX){
							$target.trigger(data.flickEvent);
						} else if(type === Flick.EVENTS.flickcancelY && data.isMoveY && isY){
							$target.trigger(data.flickEvent);
						}
					}
				}

				// delete data
				setTimeout(function(){
					data = null;
				}, 20);
			});
		};
	};


	/* flick
	-----------------------------------------------------------------*/
	/**
	 * フリックイベントオブジェクト
	 * @static
	 * @property flick
	 * @type {Object}
	 */
	Flick.flick = {
		setup   : Flick.getSetup(Flick.EVENTS.flick),
		teardown: Flick.getTeardown(Flick.EVENTS.flick),
		handler : Flick.getFlickHandler(Flick.EVENTS.flick)
	};
	/**
	 * フリックイベントオブジェクトX軸
	 * @static
	 * @property flickX
	 * @type {Object}
	 */
	Flick.flickX = {
		setup   : Flick.getSetup(Flick.EVENTS.flickX),
		teardown: Flick.getTeardown(Flick.EVENTS.flickX),
		handler : Flick.getFlickHandler(Flick.EVENTS.flickX)
	};
	/**
	 * フリックイベントオブジェクトY軸
	 * @static
	 * @property flickY
	 * @type {Object}
	 */
	Flick.flickY = {
		setup   : Flick.getSetup(Flick.EVENTS.flickY),
		teardown: Flick.getTeardown(Flick.EVENTS.flickY),
		handler : Flick.getFlickHandler(Flick.EVENTS.flickY)
	};


	/* flickmove
	-----------------------------------------------------------------*/
	/**
	 * フリックムーブイベントオブジェクト
	 * @static
	 * @property flickmove
	 * @type {Object}
	 */
	Flick.flickmove = {
		setup   : Flick.getSetup(Flick.EVENTS.flickmove),
		teardown: Flick.getTeardown(Flick.EVENTS.flickmove),
		handler : Flick.getMoveHandler(Flick.EVENTS.flickmove)
	};
	/**
	 * フリックムーブイベントオブジェクトX軸
	 * @static
	 * @property flickmoveX
	 * @type {Object}
	 */
	Flick.flickmoveX = {
		setup   : Flick.getSetup(Flick.EVENTS.flickmoveX),
		teardown: Flick.getTeardown(Flick.EVENTS.flickmoveX),
		handler : Flick.getMoveHandler(Flick.EVENTS.flickmoveX)
	};
	/**
	 * フリックムーブイベントオブジェクトY軸
	 * @static
	 * @property flickmoveY
	 * @type {Object}
	 */
	Flick.flickmoveY = {
    setup   : Flick.getSetup(Flick.EVENTS.flickmoveY),
    teardown: Flick.getTeardown(Flick.EVENTS.flickmoveY),
    handler : Flick.getMoveHandler(Flick.EVENTS.flickmoveY)
	};


	/* flickcancel
	-----------------------------------------------------------------*/
	/**
	 * フリックキャンセルイベントオブジェクト
	 * @static
	 * @property flickcancel
	 * @type {Object}
	 */
	Flick.flickcancel = {
    setup   : Flick.getSetup(Flick.EVENTS.flickcancel),
    teardown: Flick.getTeardown(Flick.EVENTS.flickcancel),
    handler : Flick.getCancelHandler(Flick.EVENTS.flickcancel)
	};
	/**
	 * フリックキャンセルイベントオブジェクトX軸
	 * @static
	 * @property flickcancelX
	 * @type {Object}
	 */
	Flick.flickcancelX = {
    setup   : Flick.getSetup(Flick.EVENTS.flickcancelX),
    teardown: Flick.getTeardown(Flick.EVENTS.flickcancelX),
    handler : Flick.getCancelHandler(Flick.EVENTS.flickcancelX)
	};
	/**
	 * フリックキャンセルイベントオブジェクトY軸
	 * @static
	 * @property flickcancelY
	 * @type {Object}
	 */
	Flick.flickcancelY = {
    setup   : Flick.getSetup(Flick.EVENTS.flickcancelY),
    teardown: Flick.getTeardown(Flick.EVENTS.flickcancelY),
    handler : Flick.getCancelHandler(Flick.EVENTS.flickcancelY)
	};


	/*--------------------------------------------------------------------------
		export
	--------------------------------------------------------------------------*/
	/**
	 * Flickイベントをエクスポート
	 * @property jQuery.Flick
	 * @type {Object}
	 */
	$.Flick = Flick;

	/**
	 * フリックイベント
	 * <p>X軸、Y軸4方向のフリックイベント</p>
	 * @event flick
	 * @example
	 * $(elm).on('flick', callback);
	 * $(elm).flick(callback);
	 */
	/**
	 * フリックXイベント
	 * <p>X軸2方向のフリックイベント</p>
	 * @event flickX
	 * @example
	 * $(elm).on('flickX', callback);
	 * $(elm).flickX(callback);
	 */
	/**
	 * フリックYイベント
	 * <p>Y軸2方向のフリックイベント</p>
	 * @event flickY
	 * @example
	 * $(elm).on('flickY', callback);
	 * $(elm).flickY(callback);
	 */
	/**
	 * フリックキャンセルイベント
	 * <p>X軸、Y軸4方向のフリックキャンセルイベント</p>
	 * @event flickcancel
	 * @example
	 * $(elm).on('flickcancel', callback);
	 * $(elm).flickcancel(callback);
	 */
	/**
	 * フリックXキャンセルイベント
	 * <p>X軸2方向のフリックキャンセルイベント</p>
	 * @event flickcancelX
	 * @example
	 * $(elm).on('flickcancelX', callback);
	 * $(elm).flickcancelX(callback);
	 */
	/**
	 * フリックYキャンセルイベント
	 * <p>Y軸2方向のフリックキャンセルイベント</p>
	 * @event flickcancelY
	 * @example
	 * $(elm).on('flickcancelY', callback);
	 * $(elm).flickcancelY(callback);
	 */
	/**
	 * フリックムーブイベント
	 * <p>X軸、Y軸4方向のフリックムーブイベント</p>
	 * @event flickmove
	 * @example
	 * $(elm).on('flickmove', callback);
	 * $(elm).flickmove(callback);
	 */
	/**
	 * フリックXムーブイベント
	 * <p>X軸2方向のフリックムーブイベント</p>
	 * @event flickmoveX
	 * @example
	 * $(elm).on('flickmoveX', callback);
	 * $(elm).flickmoveX(callback);
	 */
	/**
	 * フリックYムーブイベント
	 * <p>Y軸2方向のフリックムーブイベント</p>
	 * @event flickmoveY
	 * @example
	 * $(elm).on('flickmoveY', callback);
	 * $(elm).flickmoveY(callback);
	 */
	$.each(Flick.EVENTS, function(index, key){
		// add Event
		$.event.special[key] = Flick[key];

		// add shorthand
		$.fn[key] = function(data, fn){
			return arguments.length > 0 ? this.on(key, null, data, fn) : this.trigger(key);
		};
	});

}(jQuery));
