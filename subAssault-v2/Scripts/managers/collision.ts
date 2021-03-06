﻿/*
    File name: collision.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Dec. 12, 2014 
    File decsription: calculates collisions between all the objects
 */

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
        private mrFish: objects.MrFish;
        private ted: objects.torpedo;
        private bill: objects.torpedo_boss;
        private boss: objects.Boss;
        private scoreboard: objects.Scoreboard;

        constructor(sub: objects.Sub, objective: objects.Objective, whales, mrFish: objects.MrFish, scoreboard: objects.Scoreboard, ted: objects.torpedo, boss: objects.Boss, bill: objects.torpedo_boss) {
            this.sub = sub;
            this.objective = objective;
            this.whales = whales;
            this.mrFish = mrFish;
            this.ted = ted;
            this.boss = boss;
            this.bill = bill;
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
            p2.x = this.objective.image.x;
            p2.y = this.objective.image.y;
            if (this.distance(p1, p2) < ((this.sub.height / 2) + (this.objective.height / 2))) {
                createjs.Sound.play("coinSound");
                this.scoreboard.objective ++;
                this.objective.reset();
            }
        }

        private tedAndBoss() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.ted.image.x;
            p1.y = this.ted.image.y;
            p2.x = this.boss.image.x;
            p2.y = this.boss.image.y;
            if (this.distance(p1, p2) < ((this.ted.height / 2) + (this.boss.height / 2))) {
                createjs.Sound.play("explosionSound");
                this.scoreboard.bossHealth -= constants.TORPEDO_DAMAGE;
                this.ted.destroy();
            }
        }

        private billAndSub() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.bill.image.x;
            p1.y = this.bill.image.y;
            p2.x = this.sub.image.x;
            p2.y = this.sub.image.y;
            if (this.distance(p1, p2) < ((this.bill.height / 2) + (this.sub.height / 2))) {
                createjs.Sound.play("explosionSound");   
                scoreboard.lives -= 1;             
                this.bill.reset();
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
        update_level3_TED() {
            this.tedAndBoss();
        }
        update_level3_BILL() {
            this.billAndSub();
        }
    }
} 