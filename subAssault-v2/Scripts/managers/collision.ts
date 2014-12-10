/// <reference path="../objects/whale.ts" />
/// <reference path="../objects/objective.ts" />
/// <reference path="../objects/sub.ts" />
/// <reference path="asset.ts" />
/// <reference path="../objects/mrfish.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private sub: objects.Sub;
        private objective: objects.Objective;
        private whales = [];
        private mrFish: objects.mrFish
        private scoreboard: objects.Scoreboard;

        constructor(sub: objects.Sub, objective: objects.Objective, whales, mrFish: objects.mrFish, scoreboard: objects.Scoreboard) {
            this.sub = sub;
            this.objective = objective;
            this.whales = whales;
            this.mrFish = mrFish;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between sub and any whale object
        private subAndWhale(whale: objects.Whale) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.sub.image.x;
            p1.y = this.sub.image.y;
            p2.x = whale.image.x;
            p2.y = whale.image.y;
            if (this.distance(p1, p2) < ((this.sub.height / 2) + (whale.height / 2))) {
                createjs.Sound.play("explosionSound");
                this.scoreboard.lives -= 1;
                whale.reset();
            }
        }

        // check collision between sub and mrFish object
        private subAndmrFish() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.sub.image.x;
            p1.y = this.sub.image.y;
            p2.x = mrFish.image.x;
            p2.y = mrFish.image.y;
            if (this.distance(p1, p2) < ((this.sub.height / 2) + (this.mrFish.height / 2))) {
                createjs.Sound.play("explosionSound");
                this.scoreboard.lives -= 1;
                mrFish.reset();
            }
        }

        // check collision between sub and coin
        private subAndObjective() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.sub.image.x;
            p1.y = this.sub.image.y;
            p1.y = this.sub.image.y;
            p2.x = this.objective.image.x;
            p2.y = this.objective.image.y;
            if (this.distance(p1, p2) < ((this.sub.height / 2) + (this.objective.height / 2))) {
                createjs.Sound.play("coinSound");
                this.scoreboard.objective ++;
                this.objective.reset();
            }
        }

        // Utility Function to Check Collisions
        update_level1() {
            for (var count = 0; count < constants.WHALE_NUM; count++) {
                this.subAndWhale(this.whales[count]);
            }
            this.subAndObjective();        
        }
        update_level2() {
            this.subAndmrFish();
            this.subAndObjective();
        }
        update_level3() {

        }
    }
} 