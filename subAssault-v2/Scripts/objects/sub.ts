/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    // Sub Class
    export class Sub {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        up: boolean;
        centerY: number;
        //Make the sub
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "Submarine");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.up = true;
            this.centerY = stage.canvas.height / 2;

            game.addChild(this.image);
        }

        update() {
            //Make the sub follow the mouse cursor

            if (this.image.y < (this.stage.mouseY - constants.SUB_MOVE_SPEED) && this.image.y <= (this.stage.canvas.height - constants.OCEAN_FLOOR)) {
                this.image.y += constants.SUB_MOVE_SPEED;
            } else if (this.image.y > (this.stage.mouseY + constants.SUB_MOVE_SPEED)) {
                this.image.y -= constants.SUB_MOVE_SPEED;
            }
            if (this.image.x < (this.stage.mouseX - constants.SUB_MOVE_SPEED)) {
                this.image.x += constants.SUB_MOVE_SPEED;
            } else if (this.image.x > (this.stage.mouseX + constants.SUB_MOVE_SPEED)) {
                this.image.x -= constants.SUB_MOVE_SPEED;
            }
        }

        update_bossLevel() {
            //Make the sub follow the mouse cursor

            if (this.image.y < (this.stage.mouseY - constants.SUB_MOVE_SPEED)) {
                this.image.y += constants.SUB_MOVE_SPEED;
            } else if (this.image.y > (this.stage.mouseY + constants.SUB_MOVE_SPEED)) {
                this.image.y -= constants.SUB_MOVE_SPEED;
            }
            if (this.image.x < (this.stage.mouseX - constants.SUB_MOVE_SPEED)) {
                this.image.x += constants.SUB_MOVE_SPEED;
            } else if (this.image.x > (this.stage.mouseX + constants.SUB_MOVE_SPEED)) {
                this.image.x -= constants.SUB_MOVE_SPEED;
            }
        }

        idle() {

                if (this.up) {
                    if (this.image.y <= (this.centerY + 12)) {
                        this.image.y += 0.6;
                    } else if (this.image.y < (this.centerY + 20)) {
                        this.image.y += 0.3;
                    } else if (this.image.y >= (this.centerY + 20)) {
                        this.up = false;
                    }
                } else {
                    if (this.image.y >= (this.centerY - 12)) {
                        this.image.y -= 0.6;
                    } else if (this.image.y > (this.centerY - 20)) {
                        this.image.y -= 0.3;
                    } else if (this.image.y <= (this.centerY - 20)) {
                        this.up = true;
                    }
                }
                   
        }

        destroy() {
            //remove sub from the screen
            game.removeChild(this.image);
        }
    }
} 