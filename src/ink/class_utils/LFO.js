/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from '../utils';

/// 参考
/// http://qiita.com/pppp403/items/1df6563bb91565aa950b
/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * <h4>LFO</h4>
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
     * <h4>経過位置</h4>
     *
     * @property x
     * @type {Number}
     */
  	this.x = 0;

    /**
     * <h4>値</h4>
     *
     * @property y
     * @type {Number}
     */
  	this.y = 0;

    /**
     * <h4>1秒間の周期</h4>
     * <p>1秒間60FSで計算</p>
     *
     * @property frequency
     * @type {Number}
     */
    this.frequency = 1; // phase = 6 (1sec)
    // this.frequency = 1/6; // phase = 1 (6sec)

    /**
     * <h4>可変量(振り幅)</h4>
     *
     * @property volume
     * @type {Number}
     */
    this.volume = 1;

    /**
     * <h4>位相(ラジアン角)</h4>
     *
     * @property phase
     * @type {Number}
     */
    this.phase = 0;

    /**
     * <h4>波形タイプ</h4>
     * @example [sin, saw, square, pulse, triangle]
     *
     * @property waveType
     * @type {String}
     */
    this.waveType = 'sin'; //波形タイプ(sin,saw,squ,tri,custom)

    /**
     * <h4>パスス幅(pulse wave)</h4>
     *
     * @property pulseWidth
     * @type {Number}
     */
    this.pulseWidth = utils.PI / 2;


    // init call
    this.setWaveType(this.waveType);
  }


  /**
   * <h4>値の初期化</h4>
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
   * <h4>LFO waveタイプの設定</h4>
   *
   * @method setWaveType
   * @param {String} waveType LFO waveタイプ
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
   * <h4>アップデート</h4>
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
   * <h4>波形関数をエクスポートします</h4>
   *
   * @interface
   * @private
   * @method _update
   * @param {Number} phase 位相(ラジアン)
   * @return {Number}
   */
  _update (){}


  /* Wave Functions
  --------------------------------------------------------------------------*/
  // https://soulwire.co.uk/math-for-motion/
  /**
   * <h4>サイン波</h4>
   *
   * @static
   * @mathod sin
   * @param {Number} phase 位相(ラジアン)
   * @return {Number}
   */
  static sin (phase){
    return Math.sin(phase);
  }

  /**
   * <h4>矩形波</h4>
   *
   * @static
   * @method square
   * @param {Number} phase 位相(ラジアン)
   * @return {Number}
   */
  static square (phase){
    return phase < utils.PI ? -1 : 1;
  }

  /**
   * <h4>パルス波</h4>
   *
   * @static
   * @method pulse
   * @param {Number} phase 位相(ラジアン)
   * @return {Number}
   */
  static pulse (phase){
    return phase < this.pulseWidth ? -1 : 1;
  }

  /**
   * <h4>ノコギリ波</h4>
   *
   * @static
   * @method saw
   * @param {Number} phase 位相(ラジアン)
   * @return {Number}
   */
  static saw (phase){
    return phase / utils.PI - 1;
  }

  /**
   * <h4>三角波</h4>
   *
   * @static
   * @method triangle
   * @param {Number} phase 位相(ラジアン)
   * @return {Number}
   */
  static triangle (phase){
    return phase < utils.PI ? -2 / utils.PI * phase + 1 : 2 / utils.PI * phase - 3;
  }
}
