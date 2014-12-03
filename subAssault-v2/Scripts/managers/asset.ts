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
            [2, 2, 17, 32],
            [21, 2, 17, 32],
            [40, 2, 17, 32],
            [59, 2, 29, 14],
            [90, 2, 29, 14],
            [121, 2, 29, 14],
            [152, 2, 30, 32],
            [184, 2, 30, 32],
            [216, 2, 30, 32],
            [248, 2, 30, 32],
            [280, 2, 30, 32],
            [312, 2, 30, 32],
            [344, 2, 30, 32],
            [376, 2, 30, 32],
            [408, 2, 93, 41],
            [503, 2, 93, 41],
            [598, 2, 93, 41],
            [693, 2, 109, 48],
            [804, 2, 109, 48],
            [915, 2, 109, 48],
            [1026, 2, 109, 48],
            [1137, 2, 141, 75],
            [1280, 2, 141, 75],
            [2, 79, 141, 75],
            [145, 79, 141, 75],
            [288, 79, 141, 75],
            [431, 79, 141, 75],
            [574, 79, 141, 75],
            [717, 79, 141, 75],
            [860, 79, 141, 75],
            [1003, 79, 200, 60],
            [1205, 79, 200, 60],
            [2, 156, 200, 60],
            [204, 156, 200, 60],
            [406, 156, 214, 90],
            [622, 156, 216, 90],
            [840, 156, 216, 90],
            [1058, 156, 218, 90]
        ],
        "animations": {
            "Submarine": {//user's avatar
                frames: [17,18,19,20],
                speed: 0.4
            },
            "ted": {//Score +100 when picked up
                frames: [12,9,6,8,7,11,13],
                speed: 0.4
            },
            "crystal": {//Not used in this version
                frames: [0,1,2],
                speed: 0.5
            },
            //Button images
            "instructionButton": [32],
            "playButton": [33],
            "tryAgainButton": [30],
            "backButton": [31],
            "whale": {//enemy to avoid
                frames: [15, 16, 15, 14],
                speed: 0.2
            },
            "mrFish": {//enemy to avoid
                frames: [26,28,29,27,24,25,21,22,23],
                speed: 0.2
            },
            "boss": {//Boss
                frames: [34,36,37, 36],
                speed: 0.05
            },
            "bossDead": [35],
            "coin": {//torpedo
                frames: [4,3,5],
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