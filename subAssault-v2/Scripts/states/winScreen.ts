/*
    File name: winScreen.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 12, 2014 
    File decsription: creates the winScreen state
 */

/// <reference path="../game.ts" />
/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    var music;
    image: createjs.Bitmap;
    boss: createjs.Bitmap;
    export function winScreenState() {
        sub.idle();
    }

    //Go Back to the Main Menu
    export function winScreenBackButtonClicked(event: MouseEvent) {
        music.stop();
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        ted.destroy();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    // Game Over Scene
    export function winScreen() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        //Add background music
        music = createjs.Sound.play('winMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Instantiate Game Objects

        //Background Image
        this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level3"));
        game.addChild(this.image);

        sub = new objects.Sub(stage, game);
        sub.image.y = stage.canvas.height / 2;
        sub.image.x = 150;

        this.boss = new createjs.Sprite(managers.Assets.atlas, "bossDead");
        this.boss.width = this.image.getBounds().width;
        this.boss.height = this.image.getBounds().height;
        this.boss.regX = this.width / 2;
        this.boss.regY = this.height / 2;
        this.boss.y = stage.canvas.height / 2;
        this.boss.x = stage.canvas.width - (this.width / 4);
        game.addChild(this.boss);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "You Win!");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 100, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 140, FinalScore.toString());
        game.addChild(finalScore);

        
        // Display back Button
        backButton = new objects.Button(stage.canvas.width /2, 400, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", winScreenBackButtonClicked);

        stage.addChild(game);

    }
} 