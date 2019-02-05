/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from '../utils';

/// FIXME: 処理再考余地あり
/// 参考
/// http://qiita.com/pppp403/items/1df6563bb91565aa950b
/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * LFO
 *
 * @class LFO
 * @constructor
 */
export default class LFO {
  /**
   * constructor
   */
  constructor() {
    /**
     * 経過位置
     *
     * @property x
     * @type {number}
     */
  	this.x = 0;

    /**
     * 値
     *
     * @property y
     * @type {number}
     */
  	this.y = 0;

    /**
     * 1秒間の周期
     * 1秒間60FSで計算
     *
     * @property frequency
     * @type {number}
     */
    this.frequency = 1; // phase = 6 (1sec)
    // this.frequency = 1/6; // phase = 1 (6sec)

    /**
     * 可変量(振り幅)
     *
     * @property volume
     * @type {number}
     */
    this.volume = 1;

    /**
     * 位相(ラジアン角)
     *
     * @property phase
     * @type {number}
     */
    this.phase = 0;

    /**
     * 波形タイプ
     * @example [sin, saw, square, pulse, triangle]
     *
     * @property waveType
     * @type {string}
     */
    this.waveType = 'sin'; //波形タイプ(sin,saw,squ,tri,custom)

    /**
     * パスス幅(pulse wave)
     *
     * @property pulseWidth
     * @type {number}
     */
    this.pulseWidth = utils.PI / 2;


    // init call
    this.setWaveType(this.waveType);
  }


  /**
   * 値の初期化
   *
   * @method identity
   * @return {LFO}
   */
  identity(){
    this.x = 0;
    this.y = 0;
    return this;
  }


  /**
   * LFO waveタイプの設定
   *
   * @method setWaveType
   * @param {string} waveType LFO waveタイプ
   * @return {LFO}
   */
  setWaveType(waveType){
    if(LFO[waveType]){
      this.waveType = waveType;
      this._update = LFO[waveType];

    } else if(this[waveType]){
      this.waveType = waveType;
      this._update = this[waveType];

    } else {
      this._update = LFO[this.waveType];
    }

    return this;
  }


  /**
   * アップデート
   *
   * @method update
   * @return {LFO}
   */
  update(){
  	this.phase = this.x * utils.DEG_TO_RAD % utils.TWO_PI;

    // console.log(phase % utils.TWO_PI);
    // if(this.phase > utils.TWO_PI){
    //   console.log(this.phase - utils.TWO_PI);
    //   this.phase = this.phase - utils.TWO_PI;
    // }
    // // console.log(this.phase, utils.TWO_PI);

    let y = this._update(this.phase);

    this.y = y * this.volume;
  	this.x += 6 * this.frequency; // (360deg / 60fps) * this.frequency
    return this;
  }



  /**
   * 波形関数をエクスポートします
   *
   * @interface
   * @private
   * @method _update
   * @param {number} phase 位相(ラジアン)
   * @return {number}
   */
  _update (){}


  /* Wave Functions
  --------------------------------------------------------------------------*/
  // https://soulwire.co.uk/math-for-motion/
  /**
   * サイン波
   *
   * @static
   * @mathod sin
   * @param {number} phase 位相(ラジアン)
   * @return {number}
   */
  static sin (phase){
    return Math.sin(phase);
  }

  /**
   * 矩形波
   *
   * @static
   * @method square
   * @param {number} phase 位相(ラジアン)
   * @return {number}
   */
  static square (phase){
    return phase < utils.PI ? -1 : 1;
  }

  /**
   * パルス波
   *
   * @static
   * @method pulse
   * @param {number} phase 位相(ラジアン)
   * @return {number}
   */
  static pulse (phase){
    return phase < this.pulseWidth ? -1 : 1;
  }

  /**
   * ノコギリ波
   *
   * @static
   * @method saw
   * @param {number} phase 位相(ラジアン)
   * @return {number}
   */
  static saw (phase){
    return phase / utils.PI - 1;
  }

  /**
   * 三角波
   *
   * @static
   * @method triangle
   * @param {number} phase 位相(ラジアン)
   * @return {number}
   */
  static triangle (phase){
    return phase < utils.PI ? -2 / utils.PI * phase + 1 : 2 / utils.PI * phase - 3;
  }
}
