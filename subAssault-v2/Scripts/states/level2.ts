﻿/*
    File name: level2.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 12, 2014 
    File decsription: creates the levle2 state
 */

/// <reference path="../objects/button.ts" />
/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/objective.ts" />
/// <reference path="../objects/mrfish.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    var music;
    export function level2State() {
        ocean.update();
        objective.update();
        sub.update();
        mrFish.update();

        collision.update_level2();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            music.stop();
            FinalScore = 0;
            Lives = constants.SUB_LIVES;
            stage.removeChild(game);
            sub.destroy();
            mrFish.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }

        if (scoreboard.objective >= constants.LEVEL_PASSED) {
            music.stop();
            FinalScore += scoreboard.score;
            Lives = scoreboard.lives;
            stage.removeChild(game);
            sub.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL3_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play2(): void {
        // Declare new Game Container
        game = new createjs.Container();

        //Add background music
        music = createjs.Sound.play('playMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game, constants.LEVEL2_STATE);
        objective = new objects.Objective(stage, game, constants.LEVEL2_STATE);
        sub = new objects.Sub(stage, game);

        // Show Cursor
        //stage.cursor = "none";
        
        mrFish = new objects.MrFish(stage, game);
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(sub, objective, null, mrFish, scoreboard, null, null, null);

        stage.addChild(game);
    }
} 