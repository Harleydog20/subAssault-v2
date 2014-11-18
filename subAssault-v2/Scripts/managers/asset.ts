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
            [419, 63, 109, 48],
            [530, 63, 109, 48],
            [641, 63, 109, 48],
            [752, 63, 109, 48],
            [2, 2, 209, 80],
            [926, 2, 30, 32],
            [958, 2, 30, 32],
            [863, 45, 30, 32],
            [863, 79, 30, 32],
            [895, 45, 30, 32],
            [895, 79, 30, 32],
            [927, 36, 30, 32],
            [927, 70, 30, 32],
            [959, 36, 17, 32],
            [978, 36, 17, 32],
            [959, 70, 17, 32],
            [213, 2, 204, 60],
            [419, 2, 204, 59],
            [625, 2, 204, 59],
            [831, 2, 93, 41],
            [213, 64, 93, 41],
            [308, 64, 93, 41]
        ],
        "animations": {
            "Submarine": {//user's avatar
                frames: [0,1,2,3],
                speed: 0.4
            },
            "coin": {//Score +100 when picked up
                frames: [5,6,7,8,9,10,11,12],
                speed: 0.4
            },
            "crystal": {//Not used in this version
                frames: [13,14,15],
                speed: 0.1
            },
            //Button images
            "instructionButton": [16],
            "playButton": [17],
            "tryAgainButton": [18],
            "backButton": [4],
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