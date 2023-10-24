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
        y: 3665,
        w: 10,
        h: 30,
        type: "left"
      },
    {
        x: 200,
        y: 3650,
        w: 40,
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

  