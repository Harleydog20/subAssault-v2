/*
    File name: text.ts
    Author: Robert Thomas
    Last Modified by: Robert Thomas
    Date last Modified: Nov. 12, 2014 
    File decsription: has a smaller font for displaying text
 */

/// <reference path="../constants.ts" />
module objects {
    export class text extends createjs.Text {
        constructor(x: number, y: number, labelText: string) {
            super(labelText, constants.TEXT_FONT, constants.TEXT_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
}  