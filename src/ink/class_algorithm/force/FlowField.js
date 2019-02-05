/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

(function(global, AMP){

  // 'use strict';


  /*----------------------------------------------------------------------
    @constructor
  ----------------------------------------------------------------------*/
  /**
   * 流れ場
   *
   * @constructor
   * @class AMP.FlowField
   * @extends AMP.BaseClass
   * @param {Number|AMP.Size} width 幅
   * @param {number} height 高さ
   * @param {number} region 1マスの領域
   */
  function FlowField(width, height, region){
    // super class call
    AMP.ForceInterface.call(this);

    /**
     * サイズ
     *
     * @property size
     * @type {AMP.Size}
     */
    this.size = new AMP.Size(width, height);

    /**
     * 領域
     *
     * @property region
     * @type {number}
     */
    this.region = region || 1;

    /**
     * 行
     *
     * @property cols
     * @type {number}
     */
    this.cols = Math.round(this.size.width / this.region);

    /**
     * 列
     *
     * @property rows
     * @type {number}
     */
    this.rows = Math.round(this.size.height / this.region);

    /**
     * field
     *
     * @property field description
     * @type {Array[Vector]}
     */
    this.field = [[]];
  }

  // 基底クラスを継承
  AMP.inherits(FlowField, AMP.ForceInterface);

  // prototype
  var p = FlowField.prototype;



  /*--------------------------------------------------------------------------
    @property
  --------------------------------------------------------------------------*/
  /**
   * バージョン情報
   *
   * @static
   * @property VERSION
   * @type {string}
   */
  FlowField.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * FlowFieldインスタンスの生成
   *
   * @static
   * @param {Number|AMP.Size} width 幅
   * @param {number} height 高さ
   * @param {number} region 1マスの領域
   * @return {AMP.FlowField}
   */
  FlowField.get = function(width, height, region){
    return new FlowField(x, y, options);
  };


  /**
   * fieldの生成
   *
   * @method createField
   * @param  {function} callback field領域ごとのcallbackが呼び出されます
   * @return {AMP.FlowField}
   */
  p.createField = function(callback){
    // 配列の初期化
    this.field = [];
    this.cols = Math.round(this.size.width / this.region);
    this.rows = Math.round(this.size.height / this.region);

    var i = 0, j;

    for(; i < this.cols; i += 1){
      this.field[i] = this.field[i] || [];
      j = 0;
      for(; j < this.rows; j += 1){
        this.field[i][j] = callback(i, j);
      }
    }

    return this;
  };


  /**
   * 範囲の検索
   *
   * @method lookup
   * @param  {Number|AMP.Vector2} x x座標
   * @param  {number} y y座標
   * @return {AMP.Vector2}
   */
  p.lookup = function(x, y){
    var v = new AMP.Vector2(x, y),
    col = Math.round(AMP.clamp(v.x / this.region, 0, this.cols - 1)),
    row = Math.round(AMP.clamp(v.y / this.region, 0, this.rows - 1));
    return this.field[col][row];
  };


  /**
   * fieldのeach
   *
   * @method each
   * @param  {function} callback eachコールバック
   * @return {FlowField}
   */
  p.each = function(callback){
    var isBreak;

    AMP.each(this.field, function(rows, i){
      if(isBreak === false){
        return false;
      }

      AMP.each(rows, function(cell, j){
        isBreak = callback(cell, i, j);
        if(isBreak === false){
          return false;
        }
      });
    });

    return this;
  };


  /**
   * [draw description]
   * @param  {[type]} ctx [description]
   * @return {[type]}     [description]
   */
  // p.draw = function(ctx){};


  /*
  p.addField = function(callback){
    var isBreak,
    cols = Math.ceil(this.size.width / this.region),
    rows = Math.ceil(this.size.height / this.region);

    // 追加シェイブがあれば
    if(this.cols < cols || this.rows < rows){
      // 行列を更新
      if(this.cols < cols) this.cols = cols;
      if(this.rows < rows) this.rows = rows;

      for(var i = 0; i < cols; i += 1){
        if(isBreak === false){
          break;
        }

        this.field[i] = this.field[i] || [];

        for(var j = 0; j < rows; j += 1){
          if(!this.field[i][j]){
            field[i][j] = null;
            isBreak = callback(field[i][j], i, j);
            if(isBreak === false){
              break;
            }
          }
        }
      }
    }

    return this;
  };
  */



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.FlowField = FlowField;



}(window, AMP));
