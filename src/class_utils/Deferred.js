/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2021 Yoshihito Fujiwara

import {argsToArray} from "../utils/array";

/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * @class Deferred
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
   * @param {any} params
   */
  resolve(params){
    this._resolve(params);
  }

  /**
   * reject
   * @param {any} params
   */
  reject(params){
    this._reject(params);
  }

  /**
   * serial
   * @param  {promise|deferred} tasks
   */
  static serial(...tasks){
    let def = new Deferred();
    let pipe = Promise.resolve();
    let i = 0, l = tasks.length;
    for(; i < l; i+=1){
			pipe = pipe.then(tasks[i]).catch(def.reject.bind(def));
		}
		pipe.then(def.resolve.bind(def));
    return def.promise;
	}

  /**
   * parallel
   * @param  {promise|deferred} tasks
   */
  static parallel(...tasks){
		return Promise.all(argsToArray(tasks).map(t => t()));
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
