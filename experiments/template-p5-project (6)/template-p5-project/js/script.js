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
let player = {
  x: 250,
  y: 3999,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  size: 100
};
let lilBox = {
  x:100,
  y:100,
  size: {
    x:100,
    y:10

  }

}
let Bigbox = {
  //top
  x: 400,
  y: 3750,
  w: 250,
  h: 10,
  //leftside
  x1: 280,
  y1: 3790,
  w1: 10,
  h1: 70,
  //bottom
  x2: 405,
  y2: 3820,
  w2: 250,
  h2: 10,
  //rightSide
  x3: 100,
  y3: 100,
  w3: 100,
  h3: 100
}
let Bigbox1 = {
  //top
  x: 475,
  y: 3500,
  w: 50,
  h: 10,
  //leftside
  x1: 450,
  y1: 3516,
  w1: 13,
  h1: 39,
  //bottom
  x2: 480,
  y2: 3530,
  w2: 46,
  h2: 10
}
let Bigbox2 = {
  //top
  x: 250,
  y: 3300,
  w: 150,
  h: 10,
  //leftside
  x1: 180,
  y1: 3332,
  w1: 10,
  h1: 65,
  //bottom
  x2: 250,
  y2: 3360,
  w2: 150,
  h2: 10,
  //rightSide
  x3: 325,
  y3: 3332,
  w3: 10,
  h3: 65
}
let Bigbox3 = {
  //btop
  x: 400,
  y: 3000,
  w: 50,
  h: 10,
  //bleftside
  x1: 375,
  y1: 3080,
  w1: 10,
  h1: 150,
  //bbottom
  x2: 400,
  y2: 3160,
  w2: 50,
  h2: 10,
  //brightSide
  x3: 425,
  y3: 3080,
  w3: 10,
  h3: 150
}
let Hitbox = {
  x: 100,
  y: 100,
  w: 100,
  h: 100

}
let jumped = false;
let charge = 1;
let gravity = 0.1;
let grounded = false;
 
  let titleString = "'Annoying Jump Game'\n use W to jump";
  let heading = "good goddamn luck";
  let endingString = "I\'m proud of you.\n It can be hard to push through.\n You got this.";
  
  let state = `title`;
  
  function setup() {
    createCanvas(500, 4000);
  
    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
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
    if (player.y === 0) {
      state = `ending`;
    }
    if (keyIsDown(87)) {
      if (charge <= 100) {
        charge += 1;
      }
    }
    else {
        charge = 0
      }
    if (player.x === width){
      player.vx = -player.vx;
    }
    if (player.x === 0){
      player.vx = -player.vx;
    }
    //top1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox.x + Bigbox.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox.x - Bigbox.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox.y + Bigbox.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox.y - Bigbox.h / 2 &&
        jumped === false) {
          grounded = true;
          player.y = Bigbox.y - 55;
        }
    else {
      grounded = false;
    }
    //leftSide1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox.x1 + Bigbox.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox.x1 - Bigbox.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox.y1 + Bigbox.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox.y1 - Bigbox.h1 / 2) {
          player.vx = -player.vx;
        }
    //bottom1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox.x2 + Bigbox.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox.x2 - Bigbox.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox.y2 + Bigbox.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox.y2 - Bigbox.h2 / 2) {
          player.vy = -player.vy;
        }
    //top2
    if (Hitbox.x - Hitbox.w / 2 < Bigbox1.x + Bigbox1.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox1.x - Bigbox1.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox1.y + Bigbox1.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox1.y - Bigbox1.h / 2 &&
        jumped === false) {
          grounded = true;
          player.y = Bigbox1.y - 55;
        }
    //leftSide2
    if (Hitbox.x - Hitbox.w / 2 < Bigbox1.x1 + Bigbox1.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox1.x1 - Bigbox1.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox1.y1 + Bigbox1.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox1.y1 - Bigbox1.h1 / 2) {
          player.vx = -player.vx;
        }
    //bottom2
    if (Hitbox.x - Hitbox.w / 2 < Bigbox1.x2 + Bigbox1.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox1.x2 - Bigbox1.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox1.y2 + Bigbox1.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox1.y2 - Bigbox1.h2 / 2) {
          player.vy = -player.vy;
        }
    //top3
    if (Hitbox.x - Hitbox.w / 2 < Bigbox2.x + Bigbox2.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox2.x - Bigbox2.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox2.y + Bigbox2.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox2.y - Bigbox2.h / 2 &&
        jumped === false) {
          grounded = true;
          player.y = Bigbox2.y - 55;
        }
    //leftSide3
    if (Hitbox.x - Hitbox.w / 2 < Bigbox2.x1 + Bigbox2.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox2.x1 - Bigbox2.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox2.y1 + Bigbox2.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox2.y1 - Bigbox2.h1 / 2) {
          player.vx = -player.vx;
        }
    //bottom3
    if (Hitbox.x - Hitbox.w / 2 < Bigbox2.x2 + Bigbox2.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox2.x2 - Bigbox2.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox2.y2 + Bigbox2.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox2.y2 - Bigbox2.h2 / 2) {
          player.vy = -player.vy;
        }
    //rightSide3
    if (Hitbox.x - Hitbox.w / 2 < Bigbox2.x3 + Bigbox2.w3 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox2.x3 - Bigbox2.w3 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox2.y3 + Bigbox2.h3 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox2.y3 - Bigbox2.h3 / 2) {
          player.vx = -player.vx;
        }
    //btop1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox3.x + Bigbox3.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox3.x - Bigbox3.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox3.y + Bigbox3.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox3.y - Bigbox3.h / 2 ) {
          player.vy = -player.vy;
        }
    //bleftSide1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox3.x1 + Bigbox3.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox3.x1 - Bigbox3.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox3.y1 + Bigbox3.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox3.y1 - Bigbox3.h1 / 2) {
          player.vx = -player.vx;
        }
    //bbottom1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox3.x2 + Bigbox3.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox3.x2 - Bigbox3.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox3.y2 + Bigbox3.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox3.y2 - Bigbox3.h2 / 2) {
          player.vy = -player.vy;
        }
    //brightSide1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox3.x3 + Bigbox3.w3 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox3.x3 - Bigbox3.w3 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox3.y3 + Bigbox3.h3 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox3.y3 - Bigbox3.h3 / 2) {
          player.vx = -player.vx;
        }









    //inAir
    if (!(Hitbox.x - Hitbox.w / 2 < Bigbox.x + Bigbox.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox.x - Bigbox.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox.y + Bigbox.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox.y - Bigbox.h / 2 )) {
          jumped = false;
        }
    if (grounded === true) {
      
      player.vx = 0;
      player.vy = 0;
      player.ay = 0;
      
    }
    if (grounded === false){
      

    
    player.ay += gravity;
      
    player.vx += player.ax;
    player.vy += player.ay;

    player.x += player.vx;
    player.y += player.vy;
      
    }

    if (player.y >= height) {
        player.vy = 0;
        player.vx = 0;
        player.ay = 0;
        player.y = height;
    }
    player.x = constrain(player.x, 0,width);
    player.y = constrain(player.y,0,height);
    
    rect(player.x, player.y - 75, charge, lilBox.size.y)

    ellipse(player.x, player.y, player.size);
    
    noStroke()
    Hitbox.x = player.x
    Hitbox.y = player.y
    fill(0,255,0)
    rect(Hitbox.x,Hitbox.y,Hitbox.w,Hitbox.h)
    
    
    
    
    //PLATFORM --- 1
    //bottom
    fill(255,255,0)
    rect(Bigbox.x2,Bigbox.y2,Bigbox.w2,Bigbox.h2)
    //top
    fill(255,0,0)
    rect(Bigbox.x,Bigbox.y,Bigbox.w,Bigbox.h)
    //leftSide
    fill(0,255,255)
    rect(Bigbox.x1,Bigbox.y1,Bigbox.w1,Bigbox.h1)
    //PLATFORM --- 2
    //top
    fill(255,0,0)
    rect(Bigbox1.x,Bigbox1.y,Bigbox1.w,Bigbox1.h)
    //leftSide
    fill(0,255,255)
    rect(Bigbox1.x1,Bigbox1.y1,Bigbox1.w1,Bigbox1.h1)
    //bottom
    fill(255,255,0)
    rect(Bigbox1.x2,Bigbox1.y2,Bigbox1.w2,Bigbox1.h2)
    //PLATFORM --- 3
    //top
    fill(255,0,0)
    rect(Bigbox2.x,Bigbox2.y,Bigbox2.w,Bigbox2.h)
    //leftSide
    fill(0,255,255)
    rect(Bigbox2.x1,Bigbox2.y1,Bigbox2.w1,Bigbox2.h1)
    //bottom
    fill(255,255,0)
    rect(Bigbox2.x2,Bigbox2.y2,Bigbox2.w2,Bigbox2.h2)
    //rightSide
    fill(0,255,255)
    rect(Bigbox2.x3,Bigbox2.y3,Bigbox2.w3,Bigbox2.h3)
    //BOUNCY PLATFORM --- 1 
    //top
    fill(255,255,0)
    rect(Bigbox3.x,Bigbox3.y,Bigbox3.w,Bigbox3.h)
    //leftSide
    fill(0,255,255)
    rect(Bigbox3.x1,Bigbox3.y1,Bigbox3.w1,Bigbox3.h1)
    //bbottom
    fill(255,255,0)
    rect(Bigbox3.x2,Bigbox3.y2,Bigbox3.w2,Bigbox3.h2)
    //brightSide
    fill(0,255,255)
    rect(Bigbox3.x3,Bigbox3.y3,Bigbox3.w3,Bigbox3.h3)
}

function keyReleased() {
  jumped = true;
    let dx = mouseX - player.x;
    let dy = mouseY - player.y;
    dy = constrain(dy, -500, 500)
    player.vx = map(dx, -width, width, -15, 15)*(charge/50);
    player.vy = map(dy, -width, width, -15, 15)*(charge/50);
    
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
    
    if (state === 'ending') {
        state = 'title';
    }
  
      

    

  }


