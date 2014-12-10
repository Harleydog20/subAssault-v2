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
    export function gameOverState() {
        //ocean.update();
    }

    // Restart Game when Try Again Button is clicked
    export function tryAgainClicked(event: MouseEvent) {
        music.stop();
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    //Go Back to the Main Menu
    export function gameOverBackButtonClicked(event: MouseEvent) {
        music.stop();
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    // Game Over Scene
    export function gameOver() {
        var gameOverLabel: objects.Label;
        var finalScoreLabel: objects.Label;
        var finalScore: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        //Add background music
        music = createjs.Sound.play('gameOverMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Instantiate Game Objects
        
        //Background Image
        this.image = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
        game.addChild(this.image);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, scoreboard.finalScore.toString());
        game.addChild(finalScore);

        // Display Try Again Button
        tryAgain = new objects.Button(200, 400, "tryAgainButton");
        game.addChild(tryAgain);
        tryAgain.addEventListener("click", tryAgainClicked);

        // Display back Button
        backButton = new objects.Button(stage.canvas.width - 200, 400, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", gameOverBackButtonClicked);

        stage.addChild(game);

    }
}