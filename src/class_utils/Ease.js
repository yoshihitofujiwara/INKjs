/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";

/**
 * Ease
 * @class Ease
 * @constructor
 **/
export default function Ease() { }

/**
 * PowIn
 * @static
 * @method createPowIn
 * @param {number} pow
 * @return {function}
 **/
Ease.createPowIn = (pow) => {
	return (t) => {
		return Math.pow(t, pow);
	};
};

/**
 * PowOut
 * @static
 * @method createPowOut
 * @param {number} pow
 * @return {function}
 **/
Ease.createPowOut = (pow) => {
	return (t) => {
		return 1 - Math.pow(1 - t, pow);
	};
};

/**
 * PowInOut
 * @static
 * @method createPowInOut
 * @param {number} pow
 * @return {function}
 **/
Ease.createPowInOut = (pow) => {
	return (t) => {
		if ((t *= 2) < 1) {
			return 0.5 * Math.pow(t, pow);
		} else {
			return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
		}
	};
};

/**
 * BackIn
 * @static
 * @method createBackIn
 * @param {number} amount
 * @return {function}
 **/
Ease.createBackIn = (amount) => {
	return (t) => {
		return t * t * ((amount + 1) * t - amount);
	};
};

/**
 * BackOut
 * @static
 * @method createBackOut
 * @param {number} amount
 * @return {function}
 **/
Ease.createBackOut = (amount) => {
	return (t) => {
		return (--t * t * ((amount + 1) * t + amount) + 1);
	};
};

/**
 * BackInOut
 * @static
 * @method createBackInOut
 * @param {number} amount
 * @return {function}
 **/
Ease.createBackInOut = (amount) => {
	amount *= 1.525;
	return (t) => {
		if ((t *= 2) < 1) {
			return 0.5 * (t * t * ((amount + 1) * t - amount));
		} else {
			return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
		}
	};
};

/**
 * ElasticIn
 * @static
 * @method createElasticIn
 * @param {number} amplitude
 * @param {number} period
 * @return {function}
 **/
Ease.createElasticIn = (amplitude, period) => {
	return (t) => {
		if (t === 0 || t === 1) {
			return t;
		} else {
			let s = period / utils.TWO_PI * Math.asin(1 / amplitude);
			return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * utils.TWO_PI / period));
		}
	};
};

/**
 * ElasticOut
 * @static
 * @method createElasticOut
 * @param {number} amplitude
 * @param {number} period
 * @return {function}
 **/
Ease.createElasticOut = (amplitude, period) => {
	return (t) => {
		if (t === 0 || t === 1) {
			return t;
		} else {
			let s = period / utils.TWO_PI * Math.asin(1 / amplitude);
			return (amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * utils.TWO_PI / period) + 1);
		}
	};
};

/**
 * ElasticInOut
 * @static
 * @method createElasticInOut
 * @param {number} amplitude
 * @param {number} period
 * @return {function}
 **/
Ease.createElasticInOut = (amplitude, period) => {
	return function (t) {
		let s = period / utils.TWO_PI * Math.asin(1 / amplitude);
		if ((t *= 2) < 1) {
			return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * utils.TWO_PI / period));
		} else {
			return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * utils.TWO_PI / period) * 0.5 + 1;
		}
	};
};

/* Default Easings
--------------------------------------------------------------------------*/
/**
 * @static
 * @method linear
 * @param {number} t
 * @return {number}
 **/
Ease.linear = (t) => {
	return t;
};

/**
 * @static
 * @method sineIn, easeInSine
 * @param {number} t
 * @return {number}
 **/
Ease.sineIn = Ease.easeInSine = (t) => {
	return 1 - Math.cos(t * Math.PI / 2);
};


/**
 * @static
 * @method sineOut
 * @param {number} t
 * @return {number}
 **/
Ease.sineOut = Ease.easeOutSine = (t) => {
	return Math.sin(t * Math.PI / 2);
};

/**
 * @static
 * @method sineInOut
 * @param {number} t
 * @return {number}
 **/
Ease.sineInOut = Ease.easeInOutSine = (t) => {
	return -0.5 * (Math.cos(Math.PI * t) - 1);
};


/**
 * @static
 * @method quadIn
 * @param {number} t
 * @return {number}
 **/
Ease.quadIn = Ease.easeInQuad = Ease.createPowIn(2);

/**
 * @static
 * @method quadOut
 * @param {number} t
 * @return {number}
 **/
Ease.quadOut = Ease.easeOutQuad = Ease.createPowOut(2);

/**
 * @static
 * @method quadInOut
 * @param {number} t
 * @return {number}
 **/
Ease.quadInOut = Ease.easeInOutQuad = Ease.createPowInOut(2);

/**
 * @static
 * @method cubicIn
 * @param {number} t
 * @return {number}
 **/
Ease.cubicIn = Ease.easeInCubic = Ease.createPowIn(3);

/**
 * @static
 * @method cubicOut
 * @param {number} t
 * @return {number}
 **/
Ease.cubicOut = Ease.easeOutCubic = Ease.createPowOut(3);

/**
 * @static
 * @method cubicInOut
 * @param {number} t
 * @return {number}
 **/
Ease.cubicInOut = Ease.easeInOutCubic = Ease.createPowInOut(3);

/**
 * @static
 * @method quartIn
 * @param {number} t
 * @return {number}
 **/
Ease.quartIn = Ease.easeInQuart = Ease.createPowIn(4);

/**
 * @static
 * @method quartOut
 * @param {number} t
 * @return {number}
 **/
Ease.quartOut = Ease.easeOutQuart = Ease.createPowOut(4);

/**
 * @static
 * @method quartInOut
 * @param {number} t
 * @return {number}
 **/
Ease.quartInOut = Ease.easeInOutQuart = Ease.createPowInOut(4);

/**
 * @static
 * @method quintIn
 * @param {number} t
 * @return {number}
 **/
Ease.quintIn = Ease.easeInQuint = Ease.createPowIn(5);

/**
 * @static
 * @method quintOut
 * @param {number} t
 * @return {number}
 **/
Ease.quintOut = Ease.easeOutQuint = Ease.createPowOut(5);

/**
 * @static
 * @method quintInOut
 * @param {number} t
 * @return {number}
 **/
Ease.quintInOut = Ease.easeInOutQuint = Ease.createPowInOut(5);

/**
 * @static
 * @method expoIn
 * @param {number} t
 * @return {number}
 **/
Ease.expoIn = Ease.easeInExpo = Ease.createPowIn(6);

/**
 * @static
 * @method expoOut
 * @param {number} t
 * @return {number}
 **/
Ease.expoOut = Ease.easeOutExpo = Ease.createPowOut(6);

/**
 * @static
 * @method expoInOut
 * @param {number} t
 * @return {number}
 **/
Ease.expoInOut = Ease.easeInOutExpo = Ease.createPowInOut(6);

/**
 * @static
 * @method circIn
 * @param {number} t
 * @return {number}
 **/
Ease.circIn = Ease.easeInCirc = (t) => {
	return -(Math.sqrt(1 - t * t) - 1);
};

/**
 * @static
 * @method circOut
 * @param {number} t
 * @return {number}
 **/
Ease.circOut = Ease.easeOutCirc = (t) => {
	return Math.sqrt(1 - (--t) * t);
};

/**
 * @static
 * @method circInOut
 * @param {number} t
 * @return {number}
 **/
Ease.circInOut = Ease.easeInOutCirc = (t) => {
	if ((t *= 2) < 1) {
		return -0.5 * (Math.sqrt(1 - t * t) - 1);
	} else {
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	}
};

/**
 * @static
 * @method backIn
 * @param {number} t
 * @return {number}
 **/
Ease.backIn = Ease.easeInBack = Ease.createBackIn(1.7);

/**
 * @static
 * @method backOut
 * @param {number} t
 * @return {number}
 **/
Ease.backOut = Ease.easeOutBack = Ease.createBackOut(1.7);

/**
 * @static
 * @method backInOut
 * @param {number} t
 * @return {number}
 **/
Ease.backInOut = Ease.easeInOutBack = Ease.createBackInOut(1.7);

/**
 * @static
 * @method elasticIn
 * @param {number} t
 * @return {number}
 **/
Ease.elasticIn = Ease.easeInElastic = Ease.createElasticIn(1, 0.3);

/**
 * @static
 * @method elasticOut
 * @param {number} t
 * @return {number}
 **/
Ease.elasticOut = Ease.easeOutElastic = Ease.createElasticOut(1, 0.3);

/**
 * @static
 * @method elasticInOut
 * @param {number} t
 * @return {number}
 **/
Ease.elasticInOut = Ease.easeInOutElastic = Ease.createElasticInOut(1, 0.3 * 1.5);

/**
 * @method bounceIn
 * @param {number} t
 * @static
 * @return {number}
 **/
Ease.bounceIn = Ease.easeInBounce = (t) => {
	return 1 - Ease.bounceOut(1 - t);
};

/**
 * @static
 * @method bounceOut
 * @param {number} t
 * @return {number}
 **/
Ease.bounceOut = Ease.easeOutBounce = (t) => {
	if (t < 1 / 2.75) {
		return (7.5625 * t * t);
	} else if (t < 2 / 2.75) {
		return (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
	} else if (t < 2.5 / 2.75) {
		return (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
	} else {
		return (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
	}
};

/**
 * @static
 * @method bounceInOut
 * @param {number} t
 * @return {number}
 **/
Ease.bounceInOut = Ease.easeInOutBounce = (t) => {
	if (t < 0.5) {
		return Ease.bounceIn(t * 2) * 0.5;
	} else {
		return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
	}
};
