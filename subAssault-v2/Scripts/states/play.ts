/// <reference path="../objects/button.ts" />
/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/objective.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    var music;
    export function playState() {
        ocean.update();
        objective.update();
        sub.update();

        for (var count = 0; count < constants.WHALE_NUM; count++) {
            whales[count].update();
        }

        collision.update_level1();
        scoreboard.update();

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

        if (scoreboard.objective >= constants.LEVEL_PASSED) {
            music.stop();
            finalScore = scoreboard.score;
            lives = scoreboard.lives;
            stage.removeChild(game);
            sub.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.LEVEL2_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        //Add background music
        music = createjs.Sound.play('playMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game, constants.PLAY_STATE);
        objective = new objects.Objective(stage, game, constants.PLAY_STATE);
        sub = new objects.Sub(stage, game);

        // Show Cursor
        //stage.cursor = "none";

        // Create multiple whales
        for (var count = 0; count < constants.WHALE_NUM; count++) {
            whales[count] = new objects.Whale(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(sub, objective, whales, null, scoreboard);

        stage.addChild(game);
    }
}