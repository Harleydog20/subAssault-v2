/// <reference path="../constants.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="../objects/button.ts" />
module states {  
    var music;
    export function playButtonClicked(event: MouseEvent) {
        music.stop();
        stage.removeChild(game);  
        sub.destroy();            
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionButtonClicked(event: MouseEvent) {
        music.stop();
        stage.removeChild(game);
        sub.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    export function menuState() {
        sub.idle();
    }

    export function menu() {
        // Declare new Game Container
        game = new createjs.Container();

        //Add background music
        music = createjs.Sound.play('startMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);

        //Background Image
        this.background = new createjs.Bitmap(managers.Assets.loader.getResult("background"));
        game.addChild(this.background);

        // Instantiate Game Objects
        sub = new objects.Sub(stage, game);
        sub.image.x = stage.canvas.width / 2;
        sub.image.y = stage.canvas.height / 2;

        //Title Image
        this.title = new createjs.Bitmap(managers.Assets.loader.getResult("title"));
        this.width = this.title.getBounds().width;
        this.height = this.title.getBounds().height;
        this.title.regX = this.width / 2;
        this.title.regY = this.height / 2;
        this.title.x = (stage.canvas.width / 2);
        this.title.y = 75;
        game.addChild(this.title);

        // Show Cursor
        stage.cursor = "default";


        // Display Play Button
        playButton = new objects.Button(200, 400, "playButton");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Instruction Button
        instructionButton = new objects.Button(stage.canvas.width - 200, 400, "instructionButton");
        game.addChild(instructionButton);
        instructionButton.addEventListener("click", instructionButtonClicked);

        stage.addChild(game);
    }
} 