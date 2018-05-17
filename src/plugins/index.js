/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

export * from "./Loader";
export * from "./Rollover";
export * from "./Scroll";
export * from "./Slip";
export * from "./SmothScroll";

window.INK = window.INK || {};
window.INK.plugins = exports;
