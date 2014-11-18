/// <reference path="../managers/asset.ts" />
module objects {
    // Sub Class
    export class Sub {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        //Make the sub
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "Submarine");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
        }


        update() {
            //Make the sub follow the mouse cursor
            this.image.x = this.stage.mouseX;
            if (this.stage.mouseY <= this.stage.canvas.height - constants.OCEAN_FLOOR) {
                this.image.y = this.stage.mouseY;
            } else {
                this.image.y = this.stage.canvas.height - constants.OCEAN_FLOOR;
            }            
        }
        destroy() {
            //remove sub from the screen
            game.removeChild(this.image);
        }
    }
} 