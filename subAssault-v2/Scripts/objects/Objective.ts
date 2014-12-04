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
            if(level == 1) {
                this.image = new createjs.Sprite(managers.Assets.atlas, "fuel");
            } else if(level == 2) {
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