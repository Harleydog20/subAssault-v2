/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/objective.ts" />
/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    var music;
    export function backButtonClicked(event: MouseEvent) {
        music.stop();
        stage.removeChild(game);        
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instructionState() {
        ocean.update();        
    }

    export function instructions() {
        var nameLabel: objects.Label;
        var instructionLabel: objects.text;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game, 1);

        //Add background music
        music = createjs.Sound.play('startMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        // Show Cursor
        stage.cursor = "default";

        // Display Title
        nameLabel = new objects.Label(stage.canvas.width / 2, 40, "Instructions");
        game.addChild(nameLabel);

        // Display Instructions
        instructionLabel = new objects.text(stage.canvas.width / 2, 100, "Use the mouse to move the submarine and collect");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 150, "as many coins as you can, but be careful of the");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 200, "killer whales that guard the coins. If you hit a");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 250, "killer whale you will lose a life, lose all three");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 300, "lives and the game is over.");
        game.addChild(instructionLabel);

        // Display back Button
        backButton = new objects.Button(stage.canvas.width / 2, 375, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", backButtonClicked);

        stage.addChild(game);
    }
} 