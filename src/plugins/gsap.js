/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2021 Yoshihito Fujiwara


import { gsap, TimelineMax } from "gsap";


/**
 * serial
 */
export function serial() {
	let tl = new TimelineMax(),
		i = 0,
		len = arguments.length;

	for (; i < len; i += 1) {
		tl.add(arguments[i]);
	}
	return tl;
}


/**
 * gsap
 * parallel
 */
export function parallel() {
	let args = Array.prototype.slice.call(arguments, 0);
	return new TimelineMax().add(args);
}
