/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012 Yoshihito Fujiwara

import * as utils from "../utils";


/**
 * <h4>Ease</h4>
 * @class Ease
 * @constructor
 **/
export default function Ease(){}

/**
 * <h4>PowIn</h4>
 * @static
 * @method createPowIn
 * @param {Number} pow
 * @return {Function}
 **/
Ease.createPowIn = (pow) => {
	return (t) => {
		return Math.pow(t, pow);
	};
};

/**
 * <h4>PowOut</h4>
 * @static
 * @method createPowOut
 * @param {Number} pow
 * @return {Function}
 **/
Ease.createPowOut = (pow) => {
	return (t) => {
		return 1 - Math.pow(1 - t, pow);
	};
};

/**
 * <h4>PowInOut</h4>
 * @static
 * @method createPowInOut
 * @param {Number} pow
 * @return {Function}
 **/
Ease.createPowInOut = (pow) => {
	return (t) => {
		if((t *= 2) < 1){
			return 0.5 * Math.pow(t, pow);
		} else {
			return 1 - 0.5 * Math.abs(Math.pow(2 - t , pow));
		}
	};
};

/**
 * <h4>BackIn</h4>
 * @static
 * @method createBackIn
 * @param {Number} amount
 * @return {Function}
 **/
Ease.createBackIn = (amount) => {
	return (t) => {
		return t * t * ((amount + 1) * t - amount);
	};
};

/**
 * <h4>BackOut</h4>
 * @static
 * @method createBackOut
 * @param {Number} amount
 * @return {Function}
 **/
Ease.createBackOut = (amount) => {
	return (t) => {
		return (--t * t * ((amount + 1) * t + amount) + 1);
	};
};

/**
 * <h4>BackInOut</h4>
 * @static
 * @method createBackInOut
 * @param {Number} amount
 * @return {Function}
 **/
Ease.createBackInOut = (amount) => {
	amount *= 1.525;
	return (t) => {
		if ((t *= 2) < 1){
			return 0.5 * (t * t * ((amount + 1) * t - amount));
		} else {
			return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
		}
	};
};

/**
 * <h4>ElasticIn</h4>
 * @static
 * @method createElasticIn
 * @param {Number} amplitude
 * @param {Number} period
 * @return {Function}
 **/
Ease.createElasticIn = (amplitude, period) => {
	return (t) => {
		if(t === 0 || t === 1){
			return t;
		} else {
			let s = period / utils.TWO_PI * Math.asin(1 / amplitude);
			return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * utils.TWO_PI / period));
		}
	};
};

/**
 * <h4>ElasticOut</h4>
 * @static
 * @method createElasticOut
 * @param {Number} amplitude
 * @param {Number} period
 * @return {Function}
 **/
Ease.createElasticOut = (amplitude, period) => {
	return (t) => {
		if(t === 0 || t === 1){
			return t;
		} else {
			let s = period / utils.TWO_PI * Math.asin(1 / amplitude);
			return (amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * utils.TWO_PI / period) + 1);
		}
	};
};

/**
 * <h4>ElasticInOut</h4>
 * @static
 * @method createElasticInOut
 * @param {Number} amplitude
 * @param {Number} period
 * @return {Function}
 **/
Ease.createElasticInOut = (amplitude, period) => {
	return function(t){
		let s = period / utils.TWO_PI * Math.asin(1 / amplitude);
		if((t *= 2) < 1){
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
 * @param {Number} t
 * @return {Number}
 **/
Ease.linear = (t) => {
	return t;
};

/**
 * @static
 * @method sineIn, easeInSine
 * @param {Number} t
 * @return {Number}
 **/
Ease.sineIn = Ease.easeInSine = (t) => {
	return 1 - Math.cos(t * Math.PI / 2);
};


/**
 * @static
 * @method sineOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.sineOut = Ease.easeOutSine = (t) => {
	return Math.sin(t * Math.PI / 2);
};

/**
 * @static
 * @method sineInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.sineInOut = Ease.easeInOutSine = (t) => {
	return -0.5 * (Math.cos(Math.PI * t) - 1);
};


/**
 * @static
 * @method quadIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.quadIn = Ease.easeInQuad = Ease.createPowIn(2);

/**
 * @static
 * @method quadOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quadOut = Ease.easeOutQuad = Ease.createPowOut(2);

/**
 * @static
 * @method quadInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quadInOut = Ease.easeInOutQuad = Ease.createPowInOut(2);

/**
 * @static
 * @method cubicIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.cubicIn = Ease.easeInCubic = Ease.createPowIn(3);

/**
 * @static
 * @method cubicOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.cubicOut = Ease.easeOutCubic = Ease.createPowOut(3);

/**
 * @static
 * @method cubicInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.cubicInOut = Ease.easeInOutCubic = Ease.createPowInOut(3);

/**
 * @static
 * @method quartIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.quartIn = Ease.easeInQuart = Ease.createPowIn(4);

/**
 * @static
 * @method quartOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quartOut = Ease.easeOutQuart = Ease.createPowOut(4);

/**
 * @static
 * @method quartInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quartInOut = Ease.easeInOutQuart = Ease.createPowInOut(4);

/**
 * @static
 * @method quintIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.quintIn = Ease.easeInQuint = Ease.createPowIn(5);

/**
 * @static
 * @method quintOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quintOut = Ease.easeOutQuint = Ease.createPowOut(5);

/**
 * @static
 * @method quintInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.quintInOut = Ease.easeInOutQuint = Ease.createPowInOut(5);

/**
 * @static
 * @method expoIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.expoIn = Ease.easeInExpo = Ease.createPowIn(6);

/**
 * @static
 * @method expoOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.expoOut = Ease.easeOutExpo = Ease.createPowOut(6);

/**
 * @static
 * @method expoInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.expoInOut = Ease.easeInOutExpo = Ease.createPowInOut(6);

/**
 * @static
 * @method circIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.circIn = Ease.easeInCirc = (t) => {
	return -(Math.sqrt(1 - t * t) - 1);
};

/**
 * @static
 * @method circOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.circOut = Ease.easeOutCirc = (t) => {
	return Math.sqrt(1 - (--t) * t);
};

/**
 * @static
 * @method circInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.circInOut = Ease.easeInOutCirc = (t) => {
	if ((t *= 2) < 1){
		return -0.5 * (Math.sqrt(1 - t * t) - 1);
	} else {
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t ) + 1);
	}
};

/**
 * @static
 * @method backIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.backIn = Ease.easeInBack = Ease.createBackIn(1.7);

/**
 * @static
 * @method backOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.backOut = Ease.easeOutBack = Ease.createBackOut(1.7);

/**
 * @static
 * @method backInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.backInOut = Ease.easeInOutBack = Ease.createBackInOut(1.7);

/**
 * @static
 * @method elasticIn
 * @param {Number} t
 * @return {Number}
 **/
Ease.elasticIn = Ease.easeInElastic = Ease.createElasticIn(1, 0.3);

/**
 * @static
 * @method elasticOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.elasticOut = Ease.easeOutElastic = Ease.createElasticOut(1, 0.3);

/**
 * @static
 * @method elasticInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.elasticInOut = Ease.easeInOutElastic = Ease.createElasticInOut(1, 0.3 * 1.5);

/**
 * @method bounceIn
 * @param {Number} t
 * @static
 * @return {Number}
 **/
Ease.bounceIn = Ease.easeInBounce = (t) => {
	return 1 - Ease.bounceOut(1 - t);
};

/**
 * @static
 * @method bounceOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.bounceOut = Ease.easeOutBounce = (t) => {
	if (t < 1 / 2.75) {
		return (7.5625 * t * t);
	} else if (t < 2 / 2.75) {
		return (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
	} else if (t < 2.5 / 2.75) {
		return (7.5625 *(t -= 2.25 / 2.75) * t + 0.9375);
	} else {
		return (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
	}
};

/**
 * @static
 * @method bounceInOut
 * @param {Number} t
 * @return {Number}
 **/
Ease.bounceInOut = Ease.easeInOutBounce = (t) => {
	if (t < 0.5) {
		return Ease.bounceIn (t * 2) * 0.5;
	} else {
		return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
	}
};
