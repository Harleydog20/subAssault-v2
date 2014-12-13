/*
    File name: scoreboard.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 10, 2014 
    File decsription: create the scoreboard object and adds the logic to it
 */

module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        timer: number;
        objective: number;
        bossHealth: number;
        finalScore: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.lives = Lives;
            this.score = 1000;
            this.timer = 0;
            this.objective = 0;
            this.finalScore = FinalScore;
            this.bossHealth = 100;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }

        update_bossLevel() {
            this.timer++;
            if (this.timer == 60) {
                this.timer = 0;
                if (!(this.score <= 0)) {
                    this.score -= 25;
                }
            }
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString() + " Boss Health: " + this.bossHealth.toString();
            this.label.text = this.labelText;
        }

        update() {
            this.timer++;
            if (this.timer == 60) {
                this.timer = 0;
                if (!(this.score <= 0)) {
                    this.score -= 25;
                }
            }
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + this.score.toString() + " Objective: " + this.objective.toString();
            this.label.text = this.labelText;
        }

        destroy() {
            game.removeChild(this.label);
        }
    }
} 