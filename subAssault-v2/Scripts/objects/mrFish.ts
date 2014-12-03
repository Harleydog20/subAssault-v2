/// <reference path="../managers/asset.ts" />
/// <reference path="sub.ts" />
/// <reference path="../constants.ts" />

module objects {
    // mrFish class
    export class mrFish {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;

        lag: number;
        //create mrFish
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "mrFish");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.lag = 5;

            game.addChild(this.image);
        }

        update() {
            //move mrFish
            if (this.image.y > (sub.image.y + constants.MRFISH_MOVE_SPEED)) {
                this.image.y -= constants.MRFISH_MOVE_SPEED;
            } else if (this.image.y < (sub.image.y - constants.MRFISH_MOVE_SPEED)) {
                this.image.y += constants.MRFISH_MOVE_SPEED;
            }

            if (this.image.x > (sub.image.x + constants.MRFISH_MOVE_SPEED)) {
                this.image.x -= constants.MRFISH_MOVE_SPEED;
            } else if(this.image.x < (sub.image.x - constants.MRFISH_MOVE_SPEED)) {
                this.image.x += constants.MRFISH_MOVE_SPEED;
            }    
        }

        calculateLag(currentSpeed: number) {
            if (currentSpeed >= -5) {
                this.lag 
            } 
        }

        reset() {
            //reset the whale image
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - constants.OCEAN_FLOOR));
            this.image.x = 500;
            //this.image.x = this.stage.canvas.width + this.width;
        }

        destroy() {
            //remove the whale from the screen
            game.removeChild(this.image);
        }
    }

} 