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
	 * jQuery拡張
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
	 * 縦列・並列処理の管理
	 * <p>Deferred resolve通知を受けたら次の関数へ移ります<p>
	 *
	 * @static
	 * @method sequence
	 * @param {Function|Array} arguments 可変長引数で関数を渡すか、関数を格納した配列を渡す
	 * @return {jQuery.Deferred}
	 */
	$.sequence = function(){
		/*jslint loopfunc: true */
		var $def = new $.Deferred(),
		$Def = new $.Deferred(),
		callbacks,
		piped;

		if($.isArray(arguments[0])){
			callbacks = arguments[0];
		} else {
			callbacks = [].slice.apply(arguments);
		}

		callbacks[callbacks.length] = $def.resolve;

		var i = 0,
		l = callbacks.length;

		for(; i < l; i += 1){
			if($.isFunction(callbacks[i])){
				piped = (piped ? piped : $Def).pipe($.proxy(function(){
					return this();
				}, callbacks[i])).fail($def.reject);
			}
		}

		$Def.resolve();

		return $def.promise();
	};


  /**
   * 縦列・並列処理の管理
   * <p>実行した関数の戻り値は、次の関数の引数とproglessに渡します</p>
   *
   * @static
   * @method stream
   * @param {Function|Array} arguments 可変長引数で関数を渡すか、関数を格納した配列を渡す
   * @return {jQuery.Deferred}
   */
  $.stream = function(){
		var $defer = new $.Deferred(),
    count = 0,
    callbacks = $.isArray(arguments[0]) ? callbacks : slice.call(arguments);

    callbacks.push($defer.resolve);
    _stream();

    // callbacksを再帰的に縦列処理する
		function _stream(){
			$.when.call(null, callbacks[count].apply(null, arguments))
			.fail($defer.reject)
			.done(function(){
				$defer.notify.call(null, arguments);
				count += 1;
				if(count < callbacks.length){
					_stream.apply(null, arguments);
				}
			});
    }

    return $defer.promise();
  };


	/**
	 * タイマー
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
	$.timer = function(time, callback){
		var $def = $.Deferred(),
		start = performance.now(),
		flag = false;

		callback = callback ? callback : $.noop;

		function update(){
			var diff = performance.now() - start;

			if(flag && time < diff){
				$def.resolve(1);
				callback();

			} else {
				if(time < diff){
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
		$.each($def, function(key, val){
			if(!$promise[key]){
				$promise[key] = val;
			}
		});

		return $promise;
	};

}(jQuery));
