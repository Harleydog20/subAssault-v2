/// <reference path="../managers/asset.ts" />
/// <reference path="../constants.ts" />

module objects {
    // boss class
    export class boss {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        up: boolean;

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

            this.up = true;

            game.addChild(this.image);
        }

        update() {
            if (this.up) {

            } else {

            }
        }

        destroy() {
            //remove boss from the screen
            game.removeChild(this.image);
        }
    }

}  