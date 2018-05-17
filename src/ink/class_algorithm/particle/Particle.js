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
   * <h4>Particle</h4>
   *
   * @constructor
   * @class AMP.Particle
   * @extends AMP.ParticleInterface
   * @param {Number|AMP.Vector2} x x座標 もしくは座標オブジェクト
   * @param {Number} y y座標
   * @param {Object} option値
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
   * <h4>バージョン情報</h4>
   *
   * @static
   * @property VERSION
   * @type {String}
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
