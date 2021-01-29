/// INKjs Javascript Library
/// The MIT License (MIT)
/// Source https://github.com/yoshihitofujiwara/INKjs
/// Author Yoshihito Fujiwara
/// Copyright (c) 2012-2021 Yoshihito Fujiwara


/*----------------------------------------------------------------------
  @constructor
----------------------------------------------------------------------*/
/**
 * @class Gamepad
 * @constructor
 */
export default class Gamepad {
  /**
   * constructor
   */
  constructor(gamepad) {
		console.log(gamepad);
		this.gamepad = gamepad;
		this._buttons = Gamepad.getButton(gamepad);
	}

	// update(gamepad){
	// 	console.log(gamepad, this._buttons);
	// }

	toKeyNames(gamepad){
		let keyNames = {};

		for(let i = 1; i < gamepad.buttons.length; i++){
			keyNames[this._buttons[i]] = gamepad.buttons[i];
		}

		keyNames.LEFT_JOG = {
			x: gamepad.axes[0],
			y: gamepad.axes[1],
		}

		keyNames.RIGHT_JOG = {
			x: gamepad.axes[2],
			y: gamepad.axes[3],
		}
	};



  /*--------------------------------------------------------------------------
    @methods
	--------------------------------------------------------------------------*/

	static toKeyValues(gamepad){
		let keyNames = {
			isAnyPressed: gamepad.buttons.some(a => a.pressed),
			isAnyTouched: gamepad.buttons.some(a => a.touched),
			isAnyAxes: gamepad.axes.some(a => a != 0)
		};

		keyNames.isAction = (
			keyNames.isAnyPressed ||
			keyNames.isAnyTouched ||
			keyNames.isAnyAxes
		);

		for(let i = 1; i < gamepad.buttons.length; i++){
			keyNames[STANDARD_BUTTONS[i]] = gamepad.buttons[i];
		}

		keyNames.LEFT_JOG = {
			x: gamepad.axes[0],
			y: gamepad.axes[1],
		}

		keyNames.RIGHT_JOG = {
			x: gamepad.axes[2],
			y: gamepad.axes[3],
		}

		return keyNames;
	}


	static getButton(gamepad){
		// if(gamepad.mapping)
		return STANDARD_BUTTONS.concat();
	}
}

/*============================================================
	Button Type
============================================================*/


const STANDARD_BUTTONS = [
	"B",
	"A",
	"Y",
	"X",
	"L",
	"R",
	"ZL",
	"ZR",
	"-",
	"+",
	"R_STICK",
	"L_STICK",
	"UP",
	"DOWN",
	"LEFT",
	"RIGHT",
	"HOME",
	"CAPTURE",
];


/*------------------------------------------------------------
	以下未検証
------------------------------------------------------------*/
/*
const PS_BUTTON = [
];

const XBOX_BUTTON = [
  "A",
  "B",
  "X",
  "Y",
  "LB",
  "RB",
  "LT",
  "RT",
  "START",
  "BACK",
  "L_STICK",
  "R_STICK",
  "UP",
  "DOWN",
  "LEFT",
  "RIGHT"
]
*/

/*
		// switch pro con
		const BUTTON_A_INDEX = 0; // B
		const BUTTON_B_INDEX = 1; // A
		const BUTTON_X_INDEX = 2; // Y
		const BUTTON_Y_INDEX = 3; // X
		const BUTTON_LB_INDEX = 4; // L
		const BUTTON_RB_INDEX = 5; // R
		const BUTTON_LT_INDEX = 6; // ZL
		const BUTTON_RT_INDEX = 7; // ZR

		const BUTTON_BACK_INDEX = 8; // -
		const BUTTON_START_INDEX = 9; // +
		const BUTTON_L3_INDEX = 10; // LEFT STICK
		const BUTTON_R3_INDEX = 11; // RIGHT STICK

		const BUTTON_UP_INDEX = 12; // up
		const BUTTON_DOWN_INDEX = 13; // down
		const BUTTON_LEFT_INDEX = 14; // left
		const BUTTON_RIGHT_INDEX = 15; // right
		const BUTTON_HOME_INDEX = 16; // HOME
		const BUTTON_SCREEN_INDEX = 17; // SCREEN SHOT
*/
