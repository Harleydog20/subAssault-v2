/*
    File name: torpedo_boss.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 9, 2014 
    File decsription: create the torpedo_boss object and adds the logic to it
 */

/// <reference path="../managers/asset.ts" />
/// <reference path="../objects/boss.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../constants.ts" />

module objects {
    // torpedo_boss class
    export class torpedo_boss {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;

        //create boss torpedo
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "torpedo_boss");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }

        update() {
            //move the torpedo
            this.image.x -= constants.TORPEDO_BOSS_MOVE_SPEED;
            if (this.image.y > (sub.image.y + constants.TORPEDO_BOSS_MOVE_SPEED/4)) {
                this.image.y -= constants.TORPEDO_BOSS_MOVE_SPEED/4;
            } else if (this.image.y < (sub.image.y - constants.TORPEDO_BOSS_MOVE_SPEED/4)) {
                this.image.y += constants.TORPEDO_BOSS_MOVE_SPEED/4;
            }

            if (this.image.x < 0) {
                bill.reset();
            }
        }

        reset() {
            //reset the image
            this.image.y = boss.image.y;            
            this.image.x = boss.image.x;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}   