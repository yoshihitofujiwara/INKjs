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
   * Particle
   *
   * @constructor
   * @class AMP.Particle
   * @extends AMP.ParticleInterface
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {number} y y座標
   * @param {object} option値
   */
  function Particle(x, y, options){
    // super class call
    AMP.ParticleInterface.call(this, x, y, options);
  }

  // 基底クラスを継承
  AMP.inherits(Particle, AMP.ParticleInterface);

  // prototype
  var p = Particle.prototype;



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
  Particle.VERSION = AMP.ParticleInterface.VERSION;



  /*--------------------------------------------------------------------------
    @method
  --------------------------------------------------------------------------*/



  /*--------------------------------------------------------------------------
    exports
  --------------------------------------------------------------------------*/

  AMP.Particle = Particle;



}(window, AMP));
