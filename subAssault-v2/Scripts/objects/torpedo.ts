﻿/*
    File name: torpedo.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 9, 2014 
    File decsription: create the torpedo object and adds the logic to it
 */

/// <reference path="../managers/asset.ts" />
/// <reference path="sub.ts" />
/// <reference path="../constants.ts" />

module objects {
    // torpedo class
    export class torpedo {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;

        //create mrFish
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "torpedo");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            //move the torpedo
            if (this.image.x > this.stage.canvas.width) {
                this.destroy();
            } else {
                this.image.x += constants.TORPEDO_MOVE_SPEED;
            }
        }

        reset() {
            //reset the image
            this.image.y = sub.image.y;
            this.image.x = sub.image.x;
        }

        destroy() {
            fired = false;
            game.removeChild(this.image);
        }
    }

}  