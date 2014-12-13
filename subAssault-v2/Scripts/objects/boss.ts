/*
    File name: boss.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 12, 2014 
    File decsription: create the boss object and adds the logic to it
 */

/// <reference path="../managers/asset.ts" />
/// <reference path="../constants.ts" />

module objects {
    // boss class
    export class Boss {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;

        //create boss
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "boss");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;

            this.image.x = this.stage.canvas.width - (this.width / 4);
            this.image.y = this.stage.canvas.height / 2;

            game.addChild(this.image);
        }

        update() {
            if (this.image.y > (sub.image.y + constants.BOSS_MOVE_SPEED)) {
                this.image.y -= constants.BOSS_MOVE_SPEED;
            } else if (this.image.y < (sub.image.y - constants.BOSS_MOVE_SPEED)) {
                this.image.y += constants.BOSS_MOVE_SPEED;
            }
        }

        destroy() {
            //remove boss from the screen
            game.removeChild(this.image);
        }
    }

}  