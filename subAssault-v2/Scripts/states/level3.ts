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

        collision.update_level3();
        scoreboard.update_bossLevel();

        if (fired) {            
            ted.update();
            
        } 

        if (scoreboard.lives <= 0) {
            music.stop();
            finalScore = 0;
            lives = constants.SUB_LIVES;
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
        
        stage.addEventListener("click", function (event) {
            if (fired == false) {
                ted = new objects.torpedo(stage, game);
                fired = true;
            }            
        })     

        // Show Cursor
        //stage.cursor = "none";

        // Create the boss
        boss = new objects.boss(stage, game);

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(sub, null, null, null, scoreboard);

        stage.addChild(game);
    }
}  