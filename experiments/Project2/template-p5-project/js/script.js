/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let charge = 1;
let gravity = 0.1;
let grounded = false;
let jumped = false;

let lilBox = {
    x:100,
    y:100,
    size: {
      x:100,
      y:10
  
    }
}
let player = {
    x: 500,
    y: 3999,
    w: 20,
    h: 25,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0
  };
  
  let platformData = [
    {
      x: 110,
      y: 3890,
      w: 10,
      h: 60,
      type: "left"
    },
    {
        x: 190,
        y: 3890,
        w: 10,
        h: 60,
        type: "right"
    },
    {
        x: 150,
        y: 3925,
        w: 90,
        h: 10,
        type: "bottom"
    },
    {
      x: 150,
      y: 3865,
      w: 90,
      h: 25,
      type: "top"
    },
    {
        x: 68,
        y: 3735,
        w: 10,
        h: 60,
        type: "right"
    },
    {
        x: 35,
        y: 3760,
        w: 75,
        h: 10,
        type: "bottom"
    },
    {
        x: 35,
        y: 3700,
        w: 75,
        h: 25,
        type: "top"
    },
    {
        x: 184,
        y: 3670,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 215,
        y: 3670,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 200,
        y: 3685,
        w: 40,
        h: 10,
        type: "bottom"
    },
    {
        x: 200,
        y: 3650,
        w: 40,
        h: 25,
        type: "top"
    },
    {
        x: 384,
        y: 3670,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 415,
        y: 3670,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 400,
        y: 3685,
        w: 40,
        h: 10,
        type: "bottom"
    },
    {
        x: 400,
        y: 3650,
        w: 40,
        h: 25,
        type: "top"
    },
    {
        x: 500,
        y: 3650,
        w: 10,
        h: 220,
        type: "left"
    },
    {
        x: 531,
        y: 3605,
        w: 10,
        h: 140,
        type: "right"
    },
    {
        x: 516,
        y: 3540,
        w: 40,
        h: 25,
        type: "slideTop"
    },
    {
        x: 670,
        y: 3745,
        w: 10,
        h: 25,
        type: "right"
    },
    {
        x: 585,
        y: 3755,
        w: 180,
        h: 10,
        type: "bottom"
    },
    {
        x: 531,
        y: 3675,
        w: 10,
        h: 10,
        type: "bottom"
    },
    {
        x: 601,
        y: 3730,
        w: 150,
        h: 25,
        type: "top"
    },
    {
        x: 679,
        y: 3600,
        w: 10,
        h: 40,
        type: "left"
    },
    {
        x: 730,
        y: 3650,
        w: 10,
        h: 50,
        type: "left"
    },
    {
        x: 730,
        y: 3480,
        w: 10,
        h: 180,
        type: "left"
    },
    {
        x: 748,
        y: 3532,
        w: 10,
        h: 285,
        type: "right"
    },
    {
        x: 705,
        y: 3620,
        w: 60,
        h: 10,
        type: "bottom"
    },
    {
        x: 739,
        y: 3675,
        w: 28,
        h: 10,
        type: "bottom"
    },
    {
        x: 700,
        y: 3580,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 739,
        y: 3385,
        w: 25,
        h: 25,
        type: "top"
    },
    {
        x: 659,
        y: 3425,
        w: 10,
        h: 40,
        type: "right"
    },
    {
        x: 641,
        y: 3425,
        w: 10,
        h: 40,
        type: "left"
    },
    {
        x: 650,
        y: 3410,
        w: 25,
        h: 25,
        type: "top"
    },
    {
        x: 650,
        y: 3450,
        w: 25,
        h: 20,
        type: "bottom"
    },
    {
        x: 655,
        y: 3265,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 585,
        y: 3265,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 620,
        y: 3280,
        w: 80,
        h: 15,
        type: "bottom"
    },
    {
        x: 620,
        y: 3250,
        w: 80,
        h: 25,
        type: "top"
    },
    {
        x: 375,
        y: 3320,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 305,
        y: 3320,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 340,
        y: 3340,
        w: 80,
        h: 15,
        type: "bottom"
    },
    {
        x: 340,
        y: 3300,
        w: 80,
        h: 25,
        type: "top"
    },
    {
        x: 235,
        y: 3475,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 165,
        y: 3475,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 200,
        y: 3490,
        w: 80,
        h: 15,
        type: "bottom"
    },
    {
        x: 200,
        y: 3450,
        w: 80,
        h: 25,
        type: "top"
    },
    {
        x: 35,
        y: 3370,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 20,
        y: 3385,
        w: 40,
        h: 15,
        type: "bottom"
    },
    {
        x: 20,
        y: 3350,
        w: 40,
        h: 25,
        type: "top"
    },
    {
        x: 10,
        y: 3180,
        w: 20,
        h: 25,
        type: "top"
    },
    {
        x: 10,
        y: 3030,
        w: 20,
        h: 25,
        type: "top"
    },
    {
        x: 110,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 150,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 130,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 130,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 230,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 190,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 210,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 210,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 290,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 330,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 310,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 310,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 370,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 410,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 390,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 390,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 560,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 520,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 540,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 540,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 600,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 640,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 620,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 620,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 840,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 800,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 820,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 820,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 880,
        y: 2920,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 920,
        y: 2920,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 900,
        y: 2935,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 900,
        y: 2900,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 1220,
        y: 3020,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1180,
        y: 3020,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1200,
        y: 3035,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 1200,
        y: 3000,
        w: 50,
        h: 25,
        type: "top"
    },
    {
        x: 1225,
        y: 3820,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1270,
        y: 3835,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 1270,
        y: 3800,
        w: 100,
        h: 25,
        type: "top"
    },
   
   
  ];
  
  let platforms = [];
  
  function setup() {
    createCanvas(4000, 4000);
    rectMode(CENTER);  
    for (let data of platformData) {
      let platform = createPlatform(data.x, data.y, data.w, data.h, data.type);
      platforms.push(platform);
    }
  }
  
  function createPlatform(x, y, w, h, type) {
    return {
      x: x,
      y: y,
      w: w,
      h: h,
      type: type,
      fill: [255,255,0]
    }
  }
  
  function draw() {
    background(0);


    fill(255)
    rect(player.x, player.y, player.w, player.h);
    
    for (let platform of platforms) {
      checkInteraction(player, platform);  
      //movePlatform(platform);
      displayPlatform(platform);
    }
    checkCharging()
    checkGrounded()
    checkSides()
  }
  
  function displayPlatform(platform) {
    push();
    if (platform.type === "top"){
        fill('red')
    }
    else if (platform.type === "left"){
        fill('blue')
    }
    else if (platform.type === "right"){
        fill('blue')
    }
    else if(platform.type === "bottom"){
        fill('yellow')
    }
    else if(platform.type === "slideTop"){
        fill('cyan')
    }

    rect(platform.x, platform.y, platform.w, platform.h);
    pop();
  }
  
  /*function movePlatform(platform) {
    platform.x += 1;
    
    if (platform.x > width) {
      platform.x = 0;
    }
    else if (platform.x < 0) {
      platform.x = width;
    }
  }*/
  
  function checkInteraction(player, platform) {
    if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "top") {
      if (player.vy >= 0){
        player.y = platform.y - 24
        grounded = true
      }
    }
    else if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "left" &&
        grounded === false) {
      if (player.vx >= 0){
        player.x = platform.x-15
        player.vx = 0
        if (player.vy < 0){
            player.vy += 2
        }
      }
    }
    else if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "right" &&
        grounded === false) {
            if (player.vx <= 0){
                player.x = platform.x + 15
                player.vx = 0
                if (player.vy < 0){
                    player.vy += 2
                }
              }
    }
    else if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "bottom") {
      if (player.vy <= 0){
        player.vy = 0
      }
    }
    if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "slideTop") {
      if (player.vy >= 0){
        player.vx = 0
        player.vy = 0
        player.x = platform.x
      }
    }
  }
  function keyReleased() {
    jumped = true
    grounded = false
    let dx = mouseX - player.x;
    let dy = mouseY - player.y;
    dy = constrain(dy, -400,400)
    dx = constrain(dx, -400, 400)
    player.vx = map(dx, -1000, 1000, -15, 15)*(charge/50);
    player.vy = map(dy, -500, 500, -10, 10)*(charge/50);
}
function checkGrounded(){
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
        player.vx = constrain(player.vx,-17,17)
        player.vy = constrain(player.vy, -17,17)
        
      }
}
function checkSides(){
    player.x = constrain(player.x, 0,width);
    player.y = constrain(player.y,0,height);
    if (player.x === width){
        player.vx = -player.vx;
      }
      if (player.x === 0){
        player.vx = -player.vx;
      }
      if (player.y >= height) {
        player.vy = 0;
        player.vx = 0;
        player.ay = 0;
        player.y = height;
      }
}
function checkCharging(){
    if (keyIsDown(87)) {
        if (charge <= 100) {
          charge += 1;
        }
      }
      else {
          charge = 0
        }
    rect(player.x, player.y - 25, charge, lilBox.size.y)
}
function mousePressed(){
    player.x = mouseX
    player.y = mouseY
}

  