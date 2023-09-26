/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
let Playing = 0
let clicked = false
let img;
let img2;
function preload() {
  img = loadImage('assets/images/school1.gif');
  img2 = loadImage('assets/images/School2.gif')
}
let distance
let mousePosX 
let mousePosY
let Flipped = {
    x: false,
    y: false

}
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: {
    x: 1,
    y: 1
  },
  fill: 255 // NEW: A default fill for the circle
}

function setup() {
  createCanvas(500,500);
}

function draw() {
    distance = dist(circle.x,circle.y,mouseX,mouseY); // distance from enemy to cursor
    circle.fill = map(distance,0,255,0,distance); // colour of circle (not applicable rn)
    background(backgroundShade);
    backgroundShade = 0; 
    mousePosX = constrain(mouseX,0,width); // constraining mouse pos so circle.x and shit cant get too far
    mousePosY = constrain(mouseY,0,height);
  
    
    if (backgroundShade === 255) {
      
      backgroundShade = 0;
    }
    // this section makes the flipped variable so something
    if (Flipped.x === false) {
        circle.speed.x = 1
    }
    else {
        circle.speed.x = -1
    }
    if (Flipped.y === false) {
        circle.speed.y = 1
    }
    else {
        circle.speed.y = -1
    }
    //^^^^
    //this is movement
    circle.x = circle.x + circle.speed.x;
    circle.y = circle.y + circle.speed.y;
    //^^^^
    //this makes circle bounce off of walls
    if (circle.x > width) {
      
      Flipped.x = true;
      
    }
  
    
    if (circle.x < 0) {
        Flipped.x = false; 
            

    }
    
    if (circle.y > height) {
        Flipped.y = true;
    }
    if (circle.y < 0) {
        Flipped.y = false;
       
    }
    //^^^^
    //this makes circle bounce towards cursor
    if (circle.x > mousePosX) {
        if (mousePosX < width - 50) { 
            Flipped.x = true;
        }
    }
    else if (circle.x < mousePosX) {
        if (mousePosX > 50) {
        Flipped.x = false;
        }
    }
    if (circle.x > width) {
    
      Flipped.x = true;
      
    }
  
    
    if (circle.x < 0) {
        Flipped.x = false; 
            

    }
    
    if (circle.y > height) {
        Flipped.y = true;
    }
    if (circle.y < 0) {
        Flipped.y = false;
       
    }
    if (circle.x > mousePosX) {
        if (mousePosX < width - 50) { 
            Flipped.x = true;
        }
    }
    else if (circle.x < mousePosX) {
        if (mousePosX > 50) {
        Flipped.x = false;
        }
    }
    if (circle.x > width) {

      Flipped.x = true;
      
    }
  
    
    if (circle.x < 0) {
        Flipped.x = false; 
            

    }
    
    if (circle.y > height) {
        Flipped.y = true;
    }
    if (circle.y < 0) {
        Flipped.y = false;
       
    }
    if (circle.x > mousePosX) {
        if (mousePosX < width - 50) { 
            Flipped.x = true;
        }
    }
    else if (circle.x < mousePosX) {
        if (mousePosX > 50) {
        Flipped.x = false;
        }
    }
    if (circle.y > mousePosY) {
        if (mousePosY < height - 50) { 
            Flipped.y = true;
        }
    }
    else if (circle.y < mousePosY) {
        if (mousePosY > 50) {
        Flipped.y = false;
        }
    }
    // ^^^^ i think i doubled the code? not sure
    // this speeds up enemy
    if (Playing === 0){
        circle.speed.x += 0.1;
        circle.speed.y += 0.1;
        Playing += 60;
    }
    if (Playing > 0){
        Playing -=1;
    }
    if (circle.speed.x >= 5){
        circle.speed.x = 1;
        circle.speed.y = 1;
    }
    //^^^^


    

    
    
    // NEW: Use the circle's default fill
    fill(255,circle.fill,circle.fill);
  

  
    //this displays the assets
    imageMode(CENTER)
    if (Flipped.x === false){
        image(img,circle.x,circle.y)
    }
    else {
        image(img2,circle.x,circle.y)
    }
    
  }