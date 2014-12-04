module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/ocean.png" },//Level 1 Background
        { id: "ocean2", src: "assets/images/ocean2.png" },//Level 2 Background
        { id: "startMusic", src: "assets/sounds/startScreen.wav" },//Start Screen soundtrack
        { id: "playMusic", src: "assets/sounds/playScreen.wav" },//Play Screen soundtrack
        { id: "gameOverMusic", src: "assets/sounds/gameOverScreen.wav" },//Gameover Screen soundtrack
        { id: "bossMusic", src: "assets/sounds/bossScreen.wav" },//Not used in this version
        { id: "coinSound", src: "assets/sounds/coin.wav" },//coin pickup sound
        { id: "explosionSound", src: "assets/sounds/Explosion.wav" }//enemy hit sound
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [           
            [2, 2, 29, 14],
            [33, 2, 29, 14],
            [64, 2, 29, 14],
            [95, 2, 12, 24],
            [109, 2, 35, 40],
            [146, 2, 93, 41],
            [241, 2, 93, 41],
            [336, 2, 93, 41],
            [431, 2, 109, 48],
            [542, 2, 109, 48],
            [653, 2, 109, 48],
            [764, 2, 109, 48],
            [875, 2, 200, 60],
            [1077, 2, 200, 60],
            [2, 64, 200, 60],
            [204, 64, 200, 60],
            [406, 64, 141, 75],
            [549, 64, 141, 75],
            [692, 64, 141, 75],
            [835, 64, 141, 75],
            [978, 64, 141, 75],
            [1121, 64, 141, 75],
            [2, 141, 141, 75],
            [145, 141, 141, 75],
            [288, 141, 141, 75],
            [431, 141, 216, 90],
            [649, 141, 218, 90],
            [869, 141, 216, 90],
            [1087, 141, 214, 90]
        ],
        "animations": {
            "Submarine": {//user's avatar
                frames: [8,11,10,9],
                speed: 0.4
            },
            //Button images
            "instructionButton": [14],
            "playButton": [13],
            "tryAgainButton": [15],
            "backButton": [12],
            "whale": {//enemy to avoid
                frames: [6, 7, 6, 5],
                speed: 0.2
            },
            "mrFish": {//enemy to avoid
                frames: [18,19,17,20,21,16,22,24,23],
                speed: 0.2
            },
            "boss": {//Boss
                frames: [28,25,26, 25],
                speed: 0.05
            },
            "bossDead": [27],
            "fuel": [4],
            "ammo": [3]
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