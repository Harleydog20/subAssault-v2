/*
    File name: whale.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Nov. 20, 2014 
    File decsription: creates the whale object and adds the logic
 */

/// <reference path="../managers/asset.ts" />
/// <reference path="../constants.ts" />

module objects {
    // Whale class
    export class Whale {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        dy: number;
        //create a whale
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "whale");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            //move the whale
            this.image.x -= this.dx;
            this.image.y += this.dy;
            if (this.image.x < 0 - this.width) {
                this.reset();
            }
            if (this.image.y >= this.stage.canvas.height - constants.OCEAN_FLOOR) {
                this.dy = 0;
            }
            if (this.image.y <= 0) {
                this.dy = 0;
            }
        }

        reset() {
            //reset the whale image
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - constants.OCEAN_FLOOR));
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = this.stage.canvas.width + this.width;
        }

        destroy() {
            //remove the whale from the screen
            game.removeChild(this.image);
        }
    }

}