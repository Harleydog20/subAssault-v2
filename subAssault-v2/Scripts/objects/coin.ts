/// <reference path="../managers/asset.ts" />
/// <reference path="../constants.ts" />

module objects {
    // coin Class
    export class Coin {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "coin");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            //set the coin movment speed
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
            //remove coin from the screen
            game.removeChild(this.image);
        }
    }

}