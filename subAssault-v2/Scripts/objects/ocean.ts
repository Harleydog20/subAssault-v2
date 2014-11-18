/// <reference path="../managers/asset.ts" />
module objects {
    // Ocean Class
    export class Ocean {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dy: number;
        //make the background
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("ocean"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();
            //set background speed
            this.dy = 5;

            game.addChild(this.image);
        }

        update() {
            //Move background, find when it gets to the end of the screen
            this.image.x -= this.dy;
            if (this.image.x <= -(this.width - this.stage.canvas.width)) {
                this.reset();
            }
        }

        reset() {
            //reset the image when it gets to the edge of the screen
            this.image.x = 0;
        }

        destroy() {
            //remove background from the screen
            game.removeChild(this.image);
        }
    }

}