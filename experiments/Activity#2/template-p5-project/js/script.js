"use strict";

/**************************************************
Activity #2 - Drawing an Alien
Sam Reinstein Wright

I guess i gotta draw an alien or smthn, not too sure 
what kind of alien or even if it matters
(I havent watched the video with the details)

ok so i just watched the start of the video and there 
doesnt seem to be that much instruction on what kind
of alien. so im just gonna wing it.
**************************************************/

// setup()
//
// Draws an alien on a canvas
function setup() {
    // first off, im gonna create a canvas and background
    createCanvas(500,500);
    background(200,200,200);
    // now i should probably think about this in order of layers
    // lets go body -> head -> mouth -> eyes
    // for the body i kinda want a semi ellipse kinda like a mii from wii
    // first i dont like how the borders look
    noStroke();
    // i guess, due to the way this works i gotta choose a colour before drawing the shape
    fill(119, 235, 52);
    // now for the body
    ellipse(250,500,150,350)
    // now for the head im gonna make it a lighter shade of green so its different from the body
    fill(137, 255, 74);
    // ok so the head is gonna be a bunch of circles that get smaller to give the effect of a large cranium with a small chin
    ellipse(250,250,200,200);
    ellipse(250,270,180,180);
    ellipse(250,290,150,150);
    ellipse(250,315,110,110);
    ellipse(250,345,60,60);
    ellipse(250,350,40,40);
    ellipse(250,365,30,30);
    // now time for the eyes, im gonna make em black
    fill(0,0,0);
    // im gonna try and position them at the lower center of the head
    ellipse(200,285,80,50);
    ellipse(300,285,80,50);
    // just for some fun, lets add some gloss to the eyes
    fill(255,255,255);
    ellipse(195,275,50,20);
    ellipse(295,275,50,20);
    // now for the mouth
    // this'll be the colour of the line
    stroke(0,0,0);
    // this the width
    strokeWeight(5);
    // and now the mouth
    line(230,350,250,360);
    line(250,360,270,350);













}

// draw()
//
// Description of draw() goes here.
function draw() {

}