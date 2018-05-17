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
	$.fn.addQ = function(method, prop, val){
		var self = this,
		args = [].slice.call(arguments, 1);

		if($.isFunction(method)){
			return this.queue(function(){
				method.apply(self, args);
				return self.dequeue();
			});
		} else {
			return this.queue(function(){
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
	$.fn.replaceAttr = function(attr, del, add){
		var	val = this.attr(attr);

		if(val){
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
  $.fn.getExt = function(attr, isQuery){
    var str = this.attr(attr),
    val;

    if(str.indexOf('.') > -1){
      val = str.substring(str.lastIndexOf('.'));

			if(!isQuery){
				val = val.split('?')[0].split('#')[0];
			}
    }

    return val;
  };

}(jQuery));
