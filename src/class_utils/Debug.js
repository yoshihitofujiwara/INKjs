/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from '../utils';


const DOC = document;

// view要素を格納オブジェクト
let _views = null;

// viewの表示状態
let _isShow = true;

// ログ出力の有効・無効
let _isChangeLog = true;


// NOTE: アップデート予定なし
/**
 * デバッグ機能を提供します
 * !!!: コンストラクタを呼び出しで、使用しません
 *
 * @class Debug
 * @constructor
 */
export default class Debug {
  /**
   * constructor
   */
  constructor() {
    throw new Error("Can not generate a Debug instance");
  }


  /**
   * view要素を生成
   * @private
   * @static
   * @method _createView
   * @return {Void}
   */
  static _createView(){
    // view要素生成
    let childNode = '<div style="min-width:250px;font-size:12px;background:#41454e;">\n<div style="padding:5px;line-height:12px;font-weight:bold;color:#f9f9f9!important;text-align:center;background:#272a32;">DEBUG</div>\n<textarea id="INKJS_DEBUG_TEXT" style="box-sizing:border-box;width:100%;min-height:150px;padding:10px;font-family:consolas;color:#272a32!important;font-size:14px;line-height:1.5;border:5px solid #41454e;"></textarea>\n</div>';

    // view要素の追加
    let el = DOC.createElement("div");

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
   * viewイベント設定
   * @private
   * @static
   * @method _addEvent
   * @return {Void}
   */
  static _addEvent(){
    let isDrag = false,
    x = null,
    y = null;

    // down
    _views.wrap.addEventListener("mousedown", () => {
      isDrag = true;
    });

    // move
    DOC.addEventListener("mousemove", () => {
      if(isDrag){
        let _x = event.clientX,
        _y = event.clientY;

				if (utils.isNumber(x)){
          let diffX = _x - x,
          diffY = _y - y;

          x = _x;
          y = _y;

          let position = "position:fixed;";
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
    DOC.addEventListener("mouseup", () => {
      isDrag = false;
      x = null;
      y = null;
    });

    // cancel
    _views.text.addEventListener("mousemove", () => {
      isDrag = false;
    });
  }


  /**
   * ログを出力します
   * @static
   * @method log
   * @param {Any} args 出力するオブジェクト ※可変長引数可能
   * @return {Debug}
   */
  static log(){
    if(!_views){
      Debug._createView();
    }

    if(_isChangeLog){
      utils.each(utils.argsToArray(arguments), (data) => {
        // データタイプに合わせてログを出力
        if(utils.isArray(data)){
          _views.text.value += JSON.stringify(data) + "\n";
        } else if(utils.isObject(data)){
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
  static clear(){
    if(_views){
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
  static start(){
    _isChangeLog = true;
    return Debug;
  }


  /**
   * ログ出力を停止します
   * @static
   * @method stop
   * @return {Debug}
   */
  static stop(){
    _isChangeLog = false;
    return Debug;
  }


  /**
   * ログviewを非表示にします
   * @static
   * @method hide
   * @return {Debug}
   */
  static hide(){
    if(_views && _isShow){
      _isShow = false;
      _views.wrap.setAttribute("style", (_views.wrap.getAttribute("style") + "display:none;"));
    }
    return Debug;
  }


  /**
   * ログviewを表示します
   * @static
   * @method show
   * @return {Debug}
   */
  static show(){
    if(_views && !_isShow){
      _isShow = true;
      _views.wrap.setAttribute("style", (_views.wrap.getAttribute("style") + "display:block;"));
    }
    return Debug;
  }


  /**
   * ログの表示状態
   * @static
   * @method isShow
   * @return {boolean}
   */
  static isShow(){
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
	static position(x, y) {
		let position = "position:fixed;";
		position += "top:" + (x || 0) + "px;";
		position += "left:" + (y || 0) + "px;";
		_views.wrap.setAttribute("style", position);
    return Debug;
	}
}
