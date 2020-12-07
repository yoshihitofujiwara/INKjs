/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2020 Yoshihito Fujiwara


/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * @class Deferred
 * @constructor
 */
export default class Deferred {
  /**
   * constructor
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }


  /*--------------------------------------------------------------------------
    @methods
  --------------------------------------------------------------------------*/
  /**
   * resolve
   * @param {*} params
   */
  resolve(params){
    this._resolve(params);
  }


  /**
   * reject
   * @param {*} params
   */
  reject(params){
    this._reject(params);
  }


  /**
   * serial
   * @param  {promise|deferred} callbacks
   */
  static serial(...callbacks){
    let def = new Deferred();
    let pipe = Promise.resolve();
    let i = 0, l = callbacks.length;
    for(; i < l; i+=1){
			pipe = pipe.then(callbacks[i]);
    }
		pipe.then(def.resolve.bind(def)).catch(e => console.error(e));
    return def.promise;
  }


  /**
   * parallel
   * @param  {promise|deferred} callbacks
   */
  static parallel(...callbacks){
    let def = new Deferred();
    let ary = [],
    i = 0, l = callbacks.length;
    for(; i < l; i+=1){
      ary.push(callbacks[i]());
    }
    Promise.all(ary).then(def.resolve.bind(def)).catch(e => console.error(e));
    return def.promise;
  }


  /**
   * delay
   * @param {number} ms
   */
  static delay(ms){
    let def = new Deferred();
    setTimeout(def.resolve.bind(def), ms);
    return def.promise;
	}
}
