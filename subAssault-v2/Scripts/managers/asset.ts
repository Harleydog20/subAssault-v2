/*
    File name: asset.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 12, 2014 
    File decsription: Picks out the images from the sprite sheet and create the sprite animations
 */
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/ocean.png" },//Level 1 Background
        { id: "ocean2", src: "assets/images/ocean2.png" },//Level 2 Background
        { id: "background", src: "assets/images/Background.jpg" },//Background
        { id: "level3", src: "assets/images/Final_boss.jpg" },//Final Boss Background
        { id: "startMusic", src: "assets/sounds/startScreen.wav" },//Start Screen soundtrack
        { id: "playMusic", src: "assets/sounds/playScreen.wav" },//Play Screen soundtrack
        { id: "gameOverMusic", src: "assets/sounds/gameOverScreen.wav" },//Gameover Screen soundtrack
        { id: "bossMusic", src: "assets/sounds/bossScreen.wav" },//Not used in this version
        { id: "coinSound", src: "assets/sounds/coin.wav" },//coin pickup sound
        { id: "explosionSound", src: "assets/sounds/Explosion.wav" },//enemy hit sound
        { id: "winMusic", src: "assets/sounds/winScreen.mp3" },//Win screen music
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [           
            [2, 2, 80, 23],
            [84, 2, 80, 24],
            [166, 2, 35, 40],
            [203, 2, 93, 41],
            [298, 2, 93, 41],
            [393, 2, 93, 41],
            [488, 2, 109, 48],
            [599, 2, 109, 48],
            [710, 2, 109, 48],
            [821, 2, 109, 48],
            [932, 2, 14, 50],
            [948, 2, 200, 60],
            [1150, 2, 200, 60],
            [2, 64, 200, 60],
            [204, 64, 200, 60],
            [406, 64, 200, 73],
            [608, 64, 141, 75],
            [751, 64, 141, 75],
            [894, 64, 141, 75],
            [1037, 64, 141, 75],
            [1180, 64, 141, 75],
            [2, 141, 141, 75],
            [145, 141, 141, 75],
            [288, 141, 141, 75],
            [431, 141, 141, 75],
            [574, 141, 216, 90],
            [792, 141, 218, 90],
            [1012, 141, 216, 90],
            [1230, 141, 214, 90]
        ],
        "animations": {
            "Submarine": {//user's avatar
                frames: [6,7,8,9],
                speed: 0.4
            },
            //Button images
            "instructionButton": [11],
            "playButton": [13],
            "tryAgainButton": [14],
            "backButton": [12],
            "whale": {//enemy to avoid
                frames: [4, 5, 4, 3],
                speed: 0.2
            },
            "mrFish": {//enemy to avoid
                frames: [18,21,19,20,23,24,22,17,16],
                speed: 0.2
            },
            "boss": {//Boss
                frames: [28,25,26,25],
                speed: 0.05
            },
            "bossDead": [27],
            "title": [15],
            "fuel": [2],
            "ammo": [10],
            "torpedo": [0],
            "torpedo_boss": [1]
        }
       
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 