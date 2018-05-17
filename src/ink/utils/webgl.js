/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

/**
 * @class Webgl
 */

/**
 * <h4>シェダーソースからプログラムオブジェクトを生成</h4>
 * @static
 * @method webglShaderProgram
 * @param {Object} webgl          webglコンテキスト
 * @param {String} vertexSource   頂点シェダーソース
 * @param {String} fragmentSource フラグメントシェダーソース
 * @return {webgl.Program} プログラムオブジェクト
 */
export function webglShaderProgram(webgl, vertexSource, fragmentSource){
  let vertex = webgl.createShader(webgl.VERTEX_SHADER),
  fragment = webgl.createShader(webgl.FRAGMENT_SHADER),
  programs = webgl.createProgram();

  // Source Attach
  webgl.shaderSource(vertex, vertexSource);
  webgl.compileShader(vertex);
  shaderComplieCheck(webgl, vertex);
  webgl.shaderSource(fragment, fragmentSource);
  webgl.compileShader(fragment);
  shaderComplieCheck(webgl, fragment);

  // Program Attach
  webgl.attachShader(programs, vertex);
  webgl.attachShader(programs, fragment);
  webgl.linkProgram(programs);
  programLinkCheck(webgl, programs);
  webgl.useProgram(programs);

  return programs;
};


/**
 * <h4>シェダーのコンパイルチェック</h4>
 * <p>コンパイルエラー時は、エラー処理投げます</p>
 * @method shaderComplieCheck
 * @param {Object} webgl  webglコンテキスト
 * @param {webgl.Shader} shader シェダーオブジェクト
 * @return {Void}
 */
export function shaderComplieCheck(webgl, shader){
  if(!webgl.getShaderParameter(shader, webgl.COMPILE_STATUS)){
    throw new Error(webgl.getShaderInfoLog(shader));
  }
};


/**
 * <h4>programのリンクチェック</h4>
 * <p>リンクエラー時は、エラー処理投げます</p>
 * @method programLinkCheck
 * @param {Object} webgl  webglコンテキスト
 * @param {webgl.Program} program プログラムオブジェクト
 * @return {Void}
 */
export function programLinkCheck(webgl, program){
  if(!webgl.getProgramParameter(program, webgl.LINK_STATUS)){
    throw new Error(webgl.getProgramInfoLog(program));
  }
};


/**
 * <h4>シェダーソースの取得</h4>
 * @static
 * @method getShaderSource
 * @param {String} id エレメントid
 * @return {String} シェダーソース
 */
export function getShaderSource(id){
  return document.getElementById(id).textContent;
};
