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
   * <h4>流れ場</h4>
   *
   * @constructor
   * @class AMP.FlowField
   * @extends AMP.BaseClass
   * @param {Number|AMP.Size} width 幅
   * @param {Number} height 高さ
   * @param {Number} region 1マスの領域
   */
  function FlowField(width, height, region){
    // super class call
    AMP.ForceInterface.call(this);

    /**
     * <h4>サイズ</h4>
     *
     * @property size
     * @type {AMP.Size}
     */
    this.size = new AMP.Size(width, height);

    /**
     * <h4>領域</h4>
     *
     * @property region
     * @type {Number}
     */
    this.region = region || 1;

    /**
     * <h4>行</h4>
     *
     * @property cols
     * @type {Number}
     */
    this.cols = Math.round(this.size.width / this.region);

    /**
     * <h4>列</h4>
     *
     * @property rows
     * @type {Number}
     */
    this.rows = Math.round(this.size.height / this.region);

    /**
     * <h4>field</h4>
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
   */
  FlowField.VERSION = '1.0.0';



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/
  /**
   * <h4>FlowFieldインスタンスの生成</h4>
   *
   * @static
   * @param {Number|AMP.Size} width 幅
   * @param {Number} height 高さ
   * @param {Number} region 1マスの領域
   * @return {AMP.FlowField}
   */
  FlowField.get = function(width, height, region){
    return new FlowField(x, y, options);
  };


  /**
   * <h4>fieldの生成</h4>
   *
   * @method createField
   * @param  {Function} callback field領域ごとのcallbackが呼び出されます
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
   * <h4>範囲の検索</h4>
   *
   * @method lookup
   * @param  {Number|AMP.Vector2} x x座標
   * @param  {Number} y y座標
   * @return {AMP.Vector2}
   */
  p.lookup = function(x, y){
    var v = new AMP.Vector2(x, y),
    col = Math.round(AMP.constrain(v.x / this.region, 0, this.cols - 1)),
    row = Math.round(AMP.constrain(v.y / this.region, 0, this.rows - 1));
    return this.field[col][row];
  };


  /**
   * <h4>fieldのeach</h4>
   *
   * @method each
   * @param  {Function} callback eachコールバック
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
