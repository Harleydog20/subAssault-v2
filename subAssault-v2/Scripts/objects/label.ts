﻿/*
    File name: label.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Nov. 13, 2014 
    File decsription: create the label object and adds the logic to it
 */

/// <reference path="../constants.ts" />
module objects {
    export class Label extends createjs.Text {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
} 