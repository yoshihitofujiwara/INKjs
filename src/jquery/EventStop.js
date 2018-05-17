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
	}, function(orig, fix){

		$.event.special[fix] = {
			// data
			data: {
				eventType: fix,
				timer    : 50,
				timerId  : null
			},

			// on
			setup: function(obj){
				var data = $.extend({}, $.event.special[fix].data, obj);
				$(this).on(orig, function(){
					$.event.special[fix].handler(data);
				});
			},

			// off
			teardown: function(){
				$(this).off(orig);
			},

			// handler
			handler: function(data){
				clearTimeout(data.timerId);
				data.timerId = setTimeout(function(){
					$(this).trigger(data.eventType);
				}, data.timer);
			}
		};

		// add shorthand
		$.fn[fix] = function(data, fn){
			return arguments.length > 0 ? this.on(fix, null, data, fn) : this.trigger(fix);
		};
	});

}(jQuery));
