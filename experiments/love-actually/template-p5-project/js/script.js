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
function preload() {

}


/**function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(0);
    text(`Hello, World!`,250,250);
  
    parallels(width/2,height/2,4,1,10,10); // Call the function
  }
  
  // Defining the function
  function parallels(x,y,numLines,lineThickness,lineHeight,lineSpacing) {
    
    // For loop counts from 0 to 20 in i
    for (let i = 0; i < numLines; i++) {
      // Drawing style
      noStroke();
      fill(255);
      rectMode(CENTER);
      // Draw a 2x50 rectangle at the current position
      rect(x, y, lineThickness, lineHeight);
      // Increase x so the next rectangle is to the right
      x = x + lineSpacing;
    }
  }
  */
  /**function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(127);
  
    textAlign(CENTER, CENTER);
    // Make the font size respond to the mouse
    let size = map(mouseX, 0, width, 12, 128);
    textSize(size);
    textStyle(BOLD);
  
    // Make the fill respond to the mouse
    let red = map(mouseX, 0, width, 100, 200);
    let green = map(mouseY, 0, height, 100, 200);
    let blue = map(mouseX + mouseY, 0, width + height, 100, 200);
    fill(red, green, blue);
  
    // Make the stroke color respond to the mouse
    let strokeShade = map(mouseX, 0, width, 0, 255);
    stroke(strokeShade);
  
    // Make the stroke weight respond to the mouse
    let weight = map(mouseY, 0, height, 0, 40);
    strokeWeight(weight);
  
    text(`Hello, World!`, 250, 250);
  }
  */
  let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,
  }
  let circle2 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,
  }
  let gravity_vel = 0;
  let titleString = "'Making Progress'";
  let heading = "use W A S D to move";
  let endingString = "I\'m proud of you.\n It can be hard to push through.\n You got this.";
  
  let state = `title`;
  
  function setup() {
    createCanvas(500, 500);
    circle.vx = 0;
  
    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);
  }
  
  function draw() {
    background(0);
  
    if (state === `title`) {
      title();
    }
    else if (state === `Heading`) {
        Heading();
    }

    else if (state === `animation`) {
      animation();
    }
    else if (state === `ending`) {
      ending();
    }
  }
  
  function title() {
    fill(255);
    textSize(32);
    text(titleString, width / 2, height / 2);
  }
  function Heading(){
    fill(255);
    textSize(20);
    text(heading, (width / 2), (height/2));

  }
  
  function animation() {
    if (keyIsPressed === true) {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
    }
    if (circle.y < height) gravity_vel++;
    else gravity_vel = 0;
    circle.y += gravity_vel;
    toxicity()
    fill(255);


    ellipse(circle2.x,circle2.y,circle2.size);
  
    ellipse(circle.x, circle.y, circle.size);
  
    if (circle.x === width) {
      state = `ending`;
    }
  }
  
  function ending() {
    fill(255, 0, 0);
    textSize(32);
    text(endingString, width / 2, height / 2)
    circle.x = 0;
    circle.y = 250;
  }
  
  function keyPressed() {
    if (state === `title`) {
      state = `Heading`;
    }
    else if (state === `Heading`){
        state = `animation`;
    }
    if (key === `a`) {
        circle.vx = -1;
        circle.vy = 0;
      }
    if (key === `w`) {
        
        circle.vy = -10;
        circle.vx = 0; 
      }
    if (key === `d`) {
        for (let i = 0; i < 2; i++) {
        i = constrain(i,0,1);
        circle.vx +=  i/2 ;
        }
        circle.vy = 0;
        
      }
    if (key === `s`) {
        circle.vy = 1;
        circle.vx = 0;
      }
    if (state === 'ending') {
        state = 'title';
    }
  }
  function toxicity() {
    let distance = dist(circle2.x,circle2.y,circle.x,circle.y)
    for (let i = 0; i < distance/75; i++)
    circle.x -= i/10; 
    circle.x = constrain(circle.x, 0, width);
    circle.y = constrain(circle.y,0,height);
    circle2.size = distance;
  }