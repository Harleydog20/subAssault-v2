/*
    File name: instructions.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 12, 2014 
    File decsription: creates the instructions state
 */

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
    export function instructionBackButtonClicked(event: MouseEvent) {
        music.stop();
        stage.removeChild(game);        
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    export function instructionState() {
        //ocean.update();        
    }

    export function instructions() {
        var nameLabel: objects.Label;
        var instructionLabel: objects.text;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects

        //Background Image
        this.image = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
        game.addChild(this.image);

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
        instructionLabel = new objects.text(stage.canvas.width / 2, 150, "the different level objectives to move on. ");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 200, "Once you reach the final boss, left click to");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 250, "fire you’re torpedo and take him out. Be sure to be ");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 300, "as fast as you can, the faster you beat a level,");
        game.addChild(instructionLabel);
        instructionLabel = new objects.text(stage.canvas.width / 2, 350, "the better your score will be.");
        game.addChild(instructionLabel);

        // Display back Button
        backButton = new objects.Button(stage.canvas.width / 2, 400, "backButton");
        game.addChild(backButton);
        backButton.addEventListener("click", instructionBackButtonClicked);

        stage.addChild(game);
    }
} 