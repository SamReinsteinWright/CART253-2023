/**
 * I Like To Move It
 * Sam Reinstein Wright
 * 
 * Using map() and contraint() plus variables to make things happen! 
 * (primarily i made a dude who gets mad when you take away his shit)
 */

"use strict";

/**
 * No clue yet but i bet its
 *  for preloading images and things so 
 * they come in fully downloaded
*/

let rectSize; //this one doesn't matter

let absoluteCenterX; //this is my shorthand to always get the center of the screen on the x axis

let absoluteCenterY; //same as the other one but for the y axis

let mouseDistance; //this is so that i can get the distance away from the center

let anger = {
    amount: 255 //this is the range that the values can change based on the distance away from the center
}

let rectpos = { //this is so i can add constraints so you dont take away the square off screen
    x: 255,
    y: 255
}

function preload() {

}


/**
 * Canvas creation station!
*/
function setup() {
createCanvas(windowWidth,windowHeight); // canvas... duh
rectSize = 100;// again useless
absoluteCenterX = (width/2); //this is where i define the center of the window
absoluteCenterY = (height/2); //^^^^^




}


/**
 * makin shit!
*/
function draw() {
    mouseDistance = (sqrt(sq(absoluteCenterX-mouseX)+sq(absoluteCenterY-mouseY)));
    //this is to calculate the distance the mouse is from the center
    rectpos.x = mouseX
    rectpos.y = mouseY
    rectpos.x = constrain(rectpos.x,50,width-50);
    rectpos.y = constrain(rectpos.y,50,height-50);
    //these are to constrain the box
    anger.amount = map(mouseDistance,0,width,0,255);
    // defining the range of motion
    background(anger.amount,0,0);
    rectMode(CENTER);
    rect(rectpos.x,rectpos.y,100,100); // this is the box
    // all this below is the position of the facial features
    ellipse(absoluteCenterX,absoluteCenterY,200,200); // head
    ellipse(absoluteCenterX+30,absoluteCenterY-20, 50, anger.amount); //eye
    ellipse(absoluteCenterX-30,absoluteCenterY-20, 50,anger.amount); //eye
    ellipse(absoluteCenterX,absoluteCenterY+50, 50,anger.amount); //mouth
    strokeWeight(5);
    line(absoluteCenterX+20,(absoluteCenterY-anger.amount/2)-30,absoluteCenterX+40,(absoluteCenterY-anger.amount)-30); //eyebrow
    line(absoluteCenterX-20,(absoluteCenterY-anger.amount/2)-30,absoluteCenterX-40,(absoluteCenterY-anger.amount)-30); // eyebrow



}