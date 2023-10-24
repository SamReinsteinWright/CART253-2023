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
  x: 410,
  y: 3750,
  w: 250,
  h: 10,
  //leftside
  x1: 280,
  y1: 3790,
  w1: 10,
  h1: 70,
  //bottom
  x2: 410,
  y2: 3830,
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
  x: 480,
  y: 3500,
  w: 50,
  h: 10,
  //leftside
  x1: 450,
  y1: 3525,
  w1: 10,
  h1: 40,
  //bottom
  x2: 480,
  y2: 3550,
  w2: 50,
  h2: 10
}
let Bigbox2 = {
  //top
  x: 250,
  y: 3300,
  w: 150,
  h: 10,
  //leftside
  x1: 170,
  y1: 3336,
  w1: 10,
  h1: 65,
  //bottom
  x2: 250,
  y2: 3373,
  w2: 150,
  h2: 10,
  //rightSide
  x3: 330,
  y3: 3336,
  w3: 10,
  h3: 65
}
let Bigbox3 = {
  //btop
  x: 400,
  y: 3000,
  w: 40,
  h: 10,
  //bleftside
  x1: 375,
  y1: 3080,
  w1: 10,
  h1: 150,
  //bbottom
  x2: 400,
  y2: 3160,
  w2: 40,
  h2: 10,
  //brightSide
  x3: 425,
  y3: 3080,
  w3: 10,
  h3: 150
}
let Bigbox4 = {
  //Lblocktop
  x: 100,
  y: 2900,
  w: 200,
  h: 10,
  //Lblockleftside
  x1: 205,
  y1: 2980,
  w1: 10,
  h1: 150,
  //Lblockbottom
  x2: 100,
  y2: 3060,
  w2: 200,
  h2: 10,
  //LblockrightSide
  x3: 425,
  y3: 3080,
  w3: 10,
  h3: 150,
}
let Bigbox5 = {
  //top
  x: 200,
  y: 2650,
  w: 20,
  h: 10,
  //leftside
  x1: 185,
  y1: 2665,
  w1: 10,
  h1: 20,
  //bottom
  x2: 200,
  y2: 2680,
  w2: 20,
  h2: 10,
  //rightSide
  x3: 215,
  y3: 2665,
  w3: 10,
  h3: 20
}
let Bigbox6 = {
  //top
  x: 350,
  y: 2400,
  w: 400,
  h: 300,
  //leftside
  x1: 185,
  y1: 2665,
  w1: 10,
  h1: 20,
  //bottom
  x2: 200,
  y2: 2680,
  w2: 20,
  h2: 10,
  //rightSide
  x3: 215,
  y3: 2665,
  w3: 10,
  h3: 20
}
let Bigbox7 = {
  //top
  x: 465,
  y: 2400,
  w: 70,
  h: 10,
  //leftside
  x1: 425,
  y1: 2415,
  w1: 10,
  h1: 20,
  //bottom
  x2: 465,
  y2: 2430,
  w2: 70,
  h2: 10,
  //rightSide
  x3: 215,
  y3: 2450,
  w3: 10,
  h3: 20
}
// lblock
let Bigbox8 = {
  //top
  x: 250,
  y: 2200,
  w: 70,
  h: 10,
  //leftside
  x1: 290,
  y1: 2145,
  w1: 10,
  h1: 100,
  //bottom
  x2: 260,
  y2: 2220,
  w2: 90,
  h2: 10,
  //rightSide
  x3: 310,
  y3: 2155,
  w3: 10,
  h3: 120,
  //leftSide1
  x4: 210,
  y4: 2210,
  w4: 10,
  h4: 10,
  //rightSide1
  x5: 100,
  y5: 100,
  w5: 10,
  h5: 100,
  //bouncyTop
  x6: 300,
  y6: 2090,
  w6: 10,
  h6: 10,
}
//slipperyblock
let Bigbox9 = {
  //top
  x: 110,
  y: 1900,
  w: 90,
  h: 10,
  //leftside
  x1: 60,
  y1: 1920,
  w1: 10,
  h1: 30,
  //bottom
  x2: 110,
  y2: 1940,
  w2: 90,
  h2: 10,
  //rightSide
  x3: 160,
  y3: 1920,
  w3: 10,
  h3: 30
}
let Bigbox10 = {
  //top
  x: 250,
  y: 1700,
  w: 500,
  h: 50,
}
let Hitbox = {
  x: 100,
  y: 100,
  w: 60,
  h: 75

}

let jumped = false;
let charge = 1;
let gravity = 0.1;
let grounded = false;
 
  let titleString = "'JumpThing'\n \n your character jumps \n towards the cursor \n \n The farther the cursor,\n the bigger the jump \n \n press any key \n to continue" ;
  let heading = "good goddamn luck \n \n scroll to the bottom \n then press 'w'";
  let endingString = "You did it.\n Struggle is essential to self worth.\n \n Or... \n \n More importantly... \n \n Overcoming such struggles \n is what graces us with self worth. \n \n YOU beat this game. \n \n YOU overcame frustrating \n level design. \n \n (and countless glitches I assume) \n \n So... \n \n Have some pride! Self love! \n \n If you could overcome this, \n what next can you conquer!";
  
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
    if (player.y === 1700) {
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
          player.y = Bigbox.y - 42.5;
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
          player.y = Bigbox1.y - 42.5;
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
          player.y = Bigbox2.y - 42.5;
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
          player.vy = -(player.vy)*1.1;
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
    //Lblocktop1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox4.x + Bigbox4.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox4.x - Bigbox4.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox4.y + Bigbox4.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox4.y - Bigbox4.h / 2 &&
        jumped === false) {
          grounded = true;
          player.y = Bigbox4.y - 42.5;
        }
    //LblockleftSide1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox4.x1 + Bigbox4.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox4.x1 - Bigbox4.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox4.y1 + Bigbox4.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox4.y1 - Bigbox4.h1 / 2) {
          player.vx = -player.vx;
        }
    //Lblockbottom1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox4.x2 + Bigbox4.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox4.x2 - Bigbox4.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox4.y2 + Bigbox4.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox4.y2 - Bigbox4.h2 / 2) {
          player.vy = -player.vy;
        }
    //top4
    if (Hitbox.x - Hitbox.w / 2 < Bigbox5.x + Bigbox5.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox5.x - Bigbox5.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox5.y + Bigbox5.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox5.y - Bigbox5.h / 2 &&
        jumped === false) {
          grounded = true;
          player.y = Bigbox5.y - 42;
          fill(255,0,0)
          text(`While in the red zone,\n your horizontal movement is slowed.`,300, 2550)
        }
    //leftSide4
    if (Hitbox.x - Hitbox.w / 2 < Bigbox5.x1 + Bigbox5.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox5.x1 - Bigbox5.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox5.y1 + Bigbox5.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox5.y1 - Bigbox5.h1 / 2) {
          player.vx = -player.vx;
        }
    //bottom4
    if (Hitbox.x - Hitbox.w / 2 < Bigbox5.x2 + Bigbox5.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox5.x2 - Bigbox5.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox5.y2 + Bigbox5.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox5.y2 - Bigbox5.h2 / 2) {
          player.vy = -player.vy;
        }
    //rightSide4
    if (Hitbox.x - Hitbox.w / 2 < Bigbox5.x3 + Bigbox5.w3 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox5.x3 - Bigbox5.w3 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox5.y3 + Bigbox5.h3 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox5.y3 - Bigbox5.h3 / 2) {
          player.vx = -player.vx;
        }
    //slowbox
    if (Hitbox.x - Hitbox.w / 2 < Bigbox6.x + Bigbox6.w / 2 &&
    Hitbox.x + Hitbox.w / 2 > Bigbox6.x - Bigbox6.w / 2 &&
    Hitbox.y - Hitbox.h / 2 < Bigbox6.y + Bigbox6.h / 2 &&
    Hitbox.y + Hitbox.h / 2 > Bigbox6.y - Bigbox6.h / 2) {
      if (player.vx > 1.5){
        player.vx = player.vx -0.5;
      }
      if (player.vx < -1.5){
        player.vx = player.vx +0.5;
      }
     
    }
    //top5
    if (Hitbox.x - Hitbox.w / 2 < Bigbox7.x + Bigbox7.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox7.x - Bigbox7.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox7.y + Bigbox7.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox7.y - Bigbox7.h / 2 &&
        jumped === false) {
          grounded = true;
          player.y = Bigbox7.y - 42.5;
        }
    //leftSide5
    if (Hitbox.x - Hitbox.w / 2 < Bigbox7.x1 + Bigbox7.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox7.x1 - Bigbox7.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox7.y1 + Bigbox7.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox7.y1 - Bigbox7.h1 / 2) {
          player.vx = -player.vx;
        }
    //bottom5
    if (Hitbox.x - Hitbox.w / 2 < Bigbox7.x2 + Bigbox7.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox7.x2 - Bigbox7.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox7.y2 + Bigbox7.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox7.y2 - Bigbox7.h2 / 2) {
          player.vy = -player.vy;
        }
    //lblocktop2
    if (Hitbox.x - Hitbox.w / 2 < Bigbox8.x + Bigbox8.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox8.x - Bigbox8.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox8.y + Bigbox8.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox8.y - Bigbox8.h / 2 &&
        jumped === false) {
          grounded = true;
          player.y = Bigbox8.y - 42;
          fill(255,0,0)
          text(`While in the magenta platform,\n you slide.`,300, 2000)
        }
    //lblockleft
    if (Hitbox.x - Hitbox.w / 2 < Bigbox8.x1 + Bigbox8.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox8.x1 - Bigbox8.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox8.y1 + Bigbox8.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox8.y1 - Bigbox8.h1 / 2) {
          player.vx = -player.vx;
        }
    //lblockbtop1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox8.x6 + Bigbox8.w6 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox8.x6 - Bigbox8.w6 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox8.y6 + Bigbox8.h6 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox8.y6 - Bigbox8.h6 / 2 ) {
          player.vy = -(player.vy)*1.1;
        }
    //lblockrightside
    if (Hitbox.x - Hitbox.w / 2 < Bigbox8.x3 + Bigbox8.w3 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox8.x3 - Bigbox8.w3 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox8.y3 + Bigbox8.h3 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox8.y3 - Bigbox8.h3 / 2) {
          player.vx = -player.vx;
        }
    //lblockbottom
    if (Hitbox.x - Hitbox.w / 2 < Bigbox8.x2 + Bigbox8.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox8.x2 - Bigbox8.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox8.y2 + Bigbox8.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox8.y2 - Bigbox8.h2 / 2) {
          player.vy = -player.vy;
        }
    //lblockleftSide1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox8.x4 + Bigbox8.w4 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox8.x4 - Bigbox8.w4 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox8.y4 + Bigbox8.h4 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox8.y4 - Bigbox8.h4 / 2) {
          player.vx = -player.vx;
        }
    //slipperytop
    if (Hitbox.x - Hitbox.w / 2 < Bigbox9.x + Bigbox9.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox9.x - Bigbox9.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox9.y + Bigbox9.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox9.y - Bigbox9.h / 2 &&
        jumped === false) {
          if (player.vx > 0){
            player.vx = player.vx -0.1;
            player.vy = 0;
            player.ay = 0;
            if (player.vx < 0.1) {
            grounded = true;
            }
          }
        
          
          if (player.vx < 0){
            player.vx = player.vx +0.1;
            player.vy = 0;
            player.ay = 0;
            if (player.vx > -0.1) {
              grounded = true;
            }
          }
          if (player.vx === 0) {
            grounded = true;
          }
        
          
          player.y = Bigbox9.y - 42.5;
        }
    //slipperyleftside
    if (Hitbox.x - Hitbox.w / 2 < Bigbox9.x1 + Bigbox9.w1 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox9.x1 - Bigbox9.w1 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox9.y1 + Bigbox9.h1 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox9.y1 - Bigbox9.h1 / 2) {
          if (player.vx > 0){
          player.vx = -player.vx;
          }
        }
    //slipperybottom
    if (Hitbox.x - Hitbox.w / 2 < Bigbox9.x2 + Bigbox9.w2 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox9.x2 - Bigbox9.w2 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox9.y2 + Bigbox9.h2 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox9.y2 - Bigbox9.h2 / 2) {
        
          player.vy = -player.vy;
        
        }
    //slipperyrightSide
    if (Hitbox.x - Hitbox.w / 2 < Bigbox9.x3 + Bigbox9.w3 / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox9.x3 - Bigbox9.w3 / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox9.y3 + Bigbox9.h3 / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox9.y3 - Bigbox9.h3 / 2) {
          player.vx = -player.vx;
        }
    //top1
    if (Hitbox.x - Hitbox.w / 2 < Bigbox10.x + Bigbox10.w / 2 &&
        Hitbox.x + Hitbox.w / 2 > Bigbox10.x - Bigbox10.w / 2 &&
        Hitbox.y - Hitbox.h / 2 < Bigbox10.y + Bigbox10.h / 2 &&
        Hitbox.y + Hitbox.h / 2 > Bigbox10.y - Bigbox10.h / 2 ) {
          state = `ending`
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
        fill(255)
        text(`Hold "w" to charge your jump. \n Then release to jump. \n You can land on the red. \n    You bounce horizontally off blue \n and vertically off yellow.`,140, 3830)
    }
    player.x = constrain(player.x, 0,width);
    player.y = constrain(player.y,0,height);
    fill(255,255,255)
    rect(player.x, player.y - 75, charge, lilBox.size.y)
    
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
    //LBLOCK PLATFORM --- 1
    //top
    fill(255,0,0)
    rect(Bigbox4.x,Bigbox4.y,Bigbox4.w,Bigbox4.h)
    //leftside
    fill(0,255,255)
    rect(Bigbox4.x1,Bigbox4.y1,Bigbox4.w1,Bigbox4.h1)
    //bottom
    fill(255,255,0)
    rect(Bigbox4.x2,Bigbox4.y2,Bigbox4.w2,Bigbox4.h2)
    //PLATFORM --- 4
    //top
    fill(255,0,0)
    rect(Bigbox5.x,Bigbox5.y,Bigbox5.w,Bigbox5.h)
    //leftside
    fill(0,255,255)
    rect(Bigbox5.x1,Bigbox5.y1,Bigbox5.w1,Bigbox5.h1)
    //bottom
    fill(255,255,0)
    rect(Bigbox5.x2,Bigbox5.y2,Bigbox5.w2,Bigbox5.h2)
    //rightSide
    fill(0,255,255)
    rect(Bigbox5.x3,Bigbox5.y3,Bigbox5.w3,Bigbox5.h3)
    //SLOWBOX --- 1
    fill(255,0,0,50)
    rect(Bigbox6.x,Bigbox6.y,Bigbox6.w,Bigbox6.h)
    //PLATFORM --- 5
    //top
    fill(255,0,0)
    rect(Bigbox7.x,Bigbox7.y,Bigbox7.w,Bigbox7.h)
    //leftside
    fill(0,255,255)
    rect(Bigbox7.x1,Bigbox7.y1,Bigbox7.w1,Bigbox7.h1)
    //bottom
    fill(255,255,0)
    rect(Bigbox7.x2,Bigbox7.y2,Bigbox7.w2,Bigbox7.h2)
    //LBLOCKPLATFORM --- 2
    //top
    fill(255,0,0)
    rect(Bigbox8.x,Bigbox8.y,Bigbox8.w,Bigbox8.h)
    //leftSide
    fill(0,255,255)
    rect(Bigbox8.x1,Bigbox8.y1,Bigbox8.w1,Bigbox8.h1)
    //lblockbtop
    fill(255,255,0)
    rect(Bigbox8.x6,Bigbox8.y6,Bigbox8.w6,Bigbox8.h6)
    //lblockrightside
    fill(0,255,255)
    rect(Bigbox8.x3,Bigbox8.y3,Bigbox8.w3,Bigbox8.h3)
    //lblockbottom
    fill(255,255,0)
    rect(Bigbox8.x2,Bigbox8.y2,Bigbox8.w2,Bigbox8.h2)
    //lblockleftSide1
    fill(0,255,255)
    rect(Bigbox8.x4,Bigbox8.y4,Bigbox8.w4,Bigbox8.h4)
    //SLIPPERYPLATFORM --- 1
    //top
    
    fill(255,0,255)
    rect(Bigbox9.x,Bigbox9.y,Bigbox9.w,Bigbox9.h)
    //leftside
    fill(0,255,255)
    rect(Bigbox9.x1,Bigbox9.y1,Bigbox9.w1,Bigbox9.h1)
    //bottom
    fill(255,255,0)
    rect(Bigbox9.x2,Bigbox9.y2,Bigbox9.w2,Bigbox9.h2)
    //rightSide
    fill(0,255,255)
    rect(Bigbox9.x3,Bigbox9.y3,Bigbox9.w3,Bigbox9.h3)
    //upblock
    fill(0,255,255,50)
    rect(Bigbox10.x,Bigbox10.y,Bigbox10.w,Bigbox10.h)
    text(`Goal!`, 250, 1700)




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
    text(endingString, width / 2, (height / 2)+ 120)
    player.x = 250;
    player.y = 3999;
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


