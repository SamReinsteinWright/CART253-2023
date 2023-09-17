/**
 * I Like To Move It
 * Sam Reinstein Wright
 * 
 * Using map() and contraint() plus variables to make things happen!
 */

"use strict";

/**
 * No clue yet but i bet its
 *  for preloading images and things so 
 * they come in fully downloaded
*/

let rectSize;

let absoluteCenterX;

let absoluteCenterY;

let mouseDistance;



function preload() {

}


/**
 * Canvas creation station!
*/
function setup() {
createCanvas(windowWidth,windowHeight);
rectSize = 100;
absoluteCenterX = (width/2);
absoluteCenterY = (height/2);




}


/**
 * makin shit!
*/
function draw() {
    mouseDistance = (sqrt(sq(absoluteCenterX-mouseX)+sq(absoluteCenterY-mouseY)));
    background(mouseDistance,0,0);
    rectMode(CENTER);
    rect(mouseX,mouseY,100,100);
    ellipse(absoluteCenterX,absoluteCenterY,200,200);
    ellipse(absoluteCenterX+30,absoluteCenterY-20, 50, mouseDistance);
    ellipse(absoluteCenterX-30,absoluteCenterY-20, 50,mouseDistance);
    ellipse(absoluteCenterX,absoluteCenterY+50, 50,mouseDistance);
    strokeWeight(5);
    line(absoluteCenterX+50,(absoluteCenterX-mouseDistance)+(absoluteCenterX/50)-75,absoluteCenterX+20,(absoluteCenterX-mouseDistance/2)+(absoluteCenterX/25)-75);
    line(absoluteCenterX-50,(absoluteCenterX-mouseDistance)+(absoluteCenterX/50)-75,absoluteCenterX-20,(absoluteCenterX-mouseDistance/2)+(absoluteCenterX/25)-75);



}