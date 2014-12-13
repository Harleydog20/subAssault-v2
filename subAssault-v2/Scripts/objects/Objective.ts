/*
    File name: objective.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 11, 2014 
    File decsription: create the objective object and adds the logic to it
 */

/// <reference path="../managers/asset.ts" />
/// <reference path="../constants.ts" />


module objects {
    // objective Class
    export class Objective {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container, level: number) {
            this.stage = stage;
            this.game = game;
            if (level == constants.PLAY_STATE) {
                this.image = new createjs.Sprite(managers.Assets.atlas, "fuel");
            } else if (level == constants.LEVEL2_STATE) {
                this.image = new createjs.Sprite(managers.Assets.atlas, "ammo");
            }            
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            //set the objective movment speed
            this.dx = 5;

            game.addChild(this.image);
        }

        update() {
            //move the image
            this.image.x -= this.dx;
            if (this.image.x < 0 - this.width) {
                this.reset();
            }
        }

        reset() {
            //reset the image
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - constants.OCEAN_FLOOR));
            this.image.x = this.stage.canvas.width + this.width;
        }

        destroy() {
            //remove objective from the screen
            game.removeChild(this.image);
        }
    }

}