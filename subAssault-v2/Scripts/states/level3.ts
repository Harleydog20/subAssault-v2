/*
    File name: level3.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 12, 2014 
    File decsription: creates the level3 state
 */

/// <reference path="../objects/button.ts" />
/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/objective.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    var music;
    export function level3State() {
        sub.update_bossLevel();
        boss.update();
        bill.update();        
        
        if (fired) {            
            ted.update();
            collision2.update_level3_TED();
        } 
        collision.update_level3_BILL();

        scoreboard.update_bossLevel();

        if(scoreboard.bossHealth <= 0) {
            music.stop();
            FinalScore += scoreboard.score;
            Lives = constants.SUB_LIVES;
            stage.removeChild(game);
            sub.destroy();
            ted.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.WINSCREEN_STATE;
            changeState(currentState);
        }

        if (scoreboard.lives <= 0) {
            music.stop();
            FinalScore = 0;
            Lives = constants.SUB_LIVES;
            stage.removeChild(game);
            sub.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play3(): void {
        // Declare new Game Container
        game = new createjs.Container();

        //Add background music
        music = createjs.Sound.play('bossMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        //Backgorund
        this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level3"));
        game.addChild(this.image);

        // Instantiate Game Objects        
        sub = new objects.Sub(stage, game);   

        // Create the boss
        boss = new objects.Boss(stage, game);

        bill = new objects.torpedo_boss(stage, game);
        // Show Cursor
        //stage.cursor = "none";

        // Instantiate Collision Manager
        collision = new managers.Collision(sub, null, null, null, scoreboard, null, boss, bill);

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        stage.addEventListener("mousedown", function (event) {
            if (fired == false) {
                ted = new objects.torpedo(stage, game);
                fired = true;
                // Instantiate Collision Manager
                collision2 = new managers.Collision(sub, null, null, null, scoreboard, ted, boss, null);
            }
        })    

        stage.addChild(game);
    }
}  