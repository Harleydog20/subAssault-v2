module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "ocean", src: "assets/images/ocean.png" },//Background
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
            [2, 2, 109, 48],
            [113, 2, 109, 48],
            [224, 2, 109, 48],
            [335, 2, 109, 48],
            [446, 2, 200, 60],
            [648, 2, 200, 60],
            [850, 2, 30, 32],
            [882, 2, 30, 32],
            [914, 2, 30, 32],
            [946, 2, 30, 32],
            [978, 2, 30, 32],
            [1010, 2, 30, 32],
            [1042, 2, 30, 32],
            [1074, 2, 30, 32],
            [1106, 2, 17, 32],
            [1125, 2, 17, 32],
            [1144, 2, 17, 32],
            [1163, 2, 200, 60],
            [1365, 2, 200, 60],
            [1567, 2, 93, 41],
            [1662, 2, 93, 41],
            [1757, 2, 93, 41]
        ],
        "animations": {
            "Submarine": {//user's avatar
                frames: [0,1,2,3],
                speed: 0.4
            },
            "coin": {//Score +100 when picked up
                frames: [6,7,8,9,10,11,12, 13],
                speed: 0.4
            },
            "crystal": {//Not used in this version
                frames: [14,15,16],
                speed: 0.1
            },
            //Button images
            "instructionButton": [18],
            "playButton": [17],
            "tryAgainButton": [4],
            "backButton": [5],
            "whale": {//enemy to avoid
                frames: [20, 21, 20, 19],
                speed: 0.2
            }
                      
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