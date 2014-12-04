module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTION_STATE: number = 3;
    export var LEVEL2_STATE: number = 4;
    export var LEVEL3_STATE: number = 5;

    // Game Constants
    export var WHALE_NUM: number = 5;//number of whales on the screen
    export var LABEL_FONT = "30px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var TEXT_FONT = "18px Consolas";
    export var TEXT_COLOUR = "#FFFF00";
    export var SUB_LIVES = 3;//number of lives
    export var OCEAN_FLOOR: number = 85;//height of the ocean floor, prevents the sub and whales from
    //going under the ocean floor
    export var LEVEL_PASSED: number = 1;
    export var MRFISH_MOVE_SPEED: number = 1;
    export var SUB_MOVE_SPEED: number = 6;
    
}