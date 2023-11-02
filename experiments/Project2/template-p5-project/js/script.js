/**
 * JumpThing 2: the JumpThingening
 * Sam Reinstein Wright
 * 
 * This is a faudian game, meaning it's one level with no checkpoints and the controls are pretty callous. Intended to be 
 * something of a "rage game"
 */

"use strict";
//this is to charge the jump's power
let charge = 1;
//this dictates how fast the main character falls
let gravity = 0.1;
//makes sure that grav gets turned off when this thing is true
let grounded = false;
//extra variable if i need to check jumps
let jumped = false;
//low gravity setting
let lowgrav = false;
//this is the inner workings of the charge meter 
let lilBox = {
    x:100,
    y:100,
    size: {
      x:100,
      y:10
  
    }
}
//the player character's guts
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
  //all of my platforms
  let platformData = [
    //P1
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
    //p2
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
    //p3
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
    //p4
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
    //p5
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
    //p6
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
        y: 3380,
        w: 25,
        h: 25,
        type: "top"
    },
    //p7
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
        y: 3400,
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
    //p8
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
    //p9
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
    //p10
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
    //p11
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
    //p12
    {
        x: 10,
        y: 3180,
        w: 20,
        h: 25,
        type: "top"
    },
    //p13
    {
        x: 10,
        y: 3030,
        w: 20,
        h: 25,
        type: "top"
    },
    //p14
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p15
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p16
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p17
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p18
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p19
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p20
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p21
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
        y: 2895,
        w: 50,
        h: 25,
        type: "top"
    },
    //p22
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
        y: 2995,
        w: 50,
        h: 25,
        type: "top"
    },
    //p23
    {
        x: 1225,
        y: 3820,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1315,
        y: 3820,
        w: 10,
        h: 30,
        type: "right"
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
        y: 3795,
        w: 100,
        h: 25,
        type: "top"
    },
    //p24(area)
    {
        x: 2550,
        y: 3600,
        w: 2000,
        h: 500,
        type: "slowGrav"
    },
    //p25
    {
        x: 1625,
        y: 3815,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1715,
        y: 3815,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1670,
        y: 3835,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 1670,
        y: 3795,
        w: 100,
        h: 25,
        type: "top"
    },
    //p26
    {
        x: 1545,
        y: 3850,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 1455,
        y: 3850,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 1500,
        y: 3870,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 1500,
        y: 3825,
        w: 100,
        h: 25,
        type: "top"
    },
    //p27
    {
        x: 1967.5,
        y: 3720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2032.5,
        y: 3720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2000,
        y: 3740,
        w: 75,
        h: 15,
        type: "bottom"
    },
    {
        x: 2000,
        y: 3700,
        w: 75,
        h: 25,
        type: "top"
    },
    //p28
    {
        x: 2455,
        y: 3760,
        w: 10,
        h: 500,
        type: "left"
    },
    {
        x: 2545,
        y: 3760,
        w: 10,
        h: 500,
        type: "right"
    },
    {
        x: 2500,
        y: 3500,
        w: 100,
        h: 25,
        type: "top"
    },
    //p29(area)
    {
        x: 3000,
        y: 3950,
        w: 1100,
        h: 200,
        type: "slowGrav"
    },
    //p30(area)
    {
        x: 3775,
        y: 3300,
        w: 450,
        h: 450,
        type: "slowGrav"
    },
    //p31
    {
        x: 2780,
        y: 3320,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 2820,
        y: 3320,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 2800,
        y: 3330,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 2800,
        y: 3300,
        w: 50,
        h: 25,
        type: "top"
    },
    //p32
    {
        x: 3055,
        y: 3720,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3145,
        y: 3720,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3100,
        y: 3740,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 3100,
        y: 3700,
        w: 100,
        h: 25,
        type: "top"
    },
    //p33
    {
        x: 3750,
        y: 3420,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3840,
        y: 3420,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3795,
        y: 3440,
        w: 100,
        h: 15,
        type: "bottom"
    },
    {
        x: 3795,
        y: 3400,
        w: 100,
        h: 25,
        type: "top"
    },
    //p34
    {
        x: 3870,
        y: 3020,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3830,
        y: 3020,
        w: 10,
        h: 30,
        type: "left"
    },
    {
        x: 3850,
        y: 3040,
        w: 50,
        h: 15,
        type: "bottom"
    },
    {
        x: 3850,
        y: 3000,
        w: 50,
        h: 25,
        type: "top"
    },
    //p35
    {
        x: 3675,
        y: 2900,
        w: 100,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3720,
        y: 2915,
        w: 10,
        h: 30,
        type: "right"
    },
    {
        x: 3620,
        y: 2840,
        w: 10,
        h: 100,
        type: "right"
    },
    {
        x: 3600,
        y: 2780,
        w: 50,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3580,
        y: 2860,
        w: 10,
        h: 140,
        type: "left"
    },
    {
        x: 3650,
        y: 2935,
        w: 150,
        h: 15,
        type: "bottom"
    },
    //p36
    {
        x: 3850,
        y: 2700,
        w: 200,
        h: 25,
        type: "slipperyTop"
    },
    {
        x: 3755,
        y: 2720,
        w: 10,
        h: 30,
        type: "left"
    },
   
   
  ];
  //my platform array
  let platforms = [];
  
  function setup() {
    //creates my canvas
    createCanvas(4000, 4000);
    //sets all rectangle to be drawn from the center
    rectMode(CENTER);  
    //creates all platforms in array
    for (let data of platformData) {
      let platform = createPlatform(data.x, data.y, data.w, data.h, data.type);
      platforms.push(platform);
    }
  }
  //the function that gets the data and sends to be created
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
  //the function that happens every tick
  function draw() {
    //sets background colour after each tick
    background(0);
    //colour of player
    fill(255)
    //drawing player
    rect(player.x, player.y, player.w, player.h);
    //checks for interaction between the player and any given platform
    for (let platform of platforms) {
      checkInteraction(player, platform);  
      //movePlatform(platform);
      //calling function to display platform
      displayPlatform(platform);
    }
    //calls the functions that check for the base interaction of the game
    checkCharging()
    checkGrounded()
    checkSides()
    checkGrav()
  }
  //the function that decides the colour of each rectangle and that actually draws it
  function displayPlatform(platform) {
    push();
    noStroke()
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
    else if(platform.type === "slowGrav"){
        fill(255,0,255,50)
    }
    else if(platform.type === "slipperyTop"){
        fill('turquoise')
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
  //checks if the player is intersecting with any other box
  function checkInteraction(player, platform) {
    //top: makes sure player stays on the top of the platform
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
    //left and right stops the player's x momentum and makes sure they dont go any further
    else if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "left" &&
        grounded === false) {
      if (player.vx > 0){
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
    //bottom: stops y momentum
    else if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "bottom") {
      if (player.vy <= 0){
        player.vy = 0
      }
    }
    //makes sure if touched, they will teleport to the center and slide through
    else if (player.x + player.w/2 > platform.x - platform.w/2 &&
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
    //applies low gravity 
    else if (player.x + player.w/2 > platform.x - platform.w/2 &&
        player.x - player.w/2 < platform.x + platform.w/2 &&
        player.y + player.h/2 > platform.y - platform.h/2 &&
        player.y - player.h/2 < platform.y + platform.h/2 &&
        platform.type === "slowGrav") {
    
        lowgrav = true
    }
    //makes the player slip and slide if velocity is higher than 0.1    
    if (player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        platform.type === "slipperyTop") {
        if (player.vy >= 0){
            if (player.vx > 0){
                player.vx = player.vx -0.05;
                player.vy = 0;
                player.ay = 0;
            if (player.vx < 0.1) {
                grounded = true;
            }
          }
        
          
            if (player.vx < 0){
                player.vx = player.vx +0.05;
                player.vy = 0;
                player.ay = 0;
            if (player.vx > -0.1) {
                grounded = true;
            }
          }
            if (player.vx === 0) {
                grounded = true;
          }
        
          
            player.y = platform.y - 24;
            }
        }
    
  }
  //the jump
  function keyReleased() {
    if (lowgrav === false){
    jumped = true
    grounded = false
    let dx = mouseX - player.x;
    let dy = mouseY - player.y;
    dy = constrain(dy, -400,400)
    dx = constrain(dx, -400, 400)
    player.vx = map(dx, -1000, 1000, -15, 15)*(charge/50);
    player.vy = map(dy, -500, 500, -10, 10)*(charge/50);
    }
    if (lowgrav === true && grounded === true){
        jumped = true
        grounded = false
        let dx = mouseX - player.x;
        let dy = mouseY - player.y;
        dy = constrain(dy, -400,400)
        dx = constrain(dx, -400, 400)
        player.vx = map(dx, -1000, 1000, -15, 15)*(charge/50);
        player.vy = map(dy, -500, 500, -10, 10)*(charge/50);
        }
}
//checks if the player is grounded and dictates player velocity and momentum
function checkGrounded(){
    if (grounded === true) {
      
        player.vx = 0;
        player.vy = 0;
        player.ay = 0;
        
      }
      if (grounded === false){
        if (player.vx > 0 &&
            player.vy > 0){
            player.vx -= gravity
        }
        if (player.vx < 0 &&
            player.vy > 0){
            player.vx += gravity
        }
        player.ay += gravity;
        player.vx += player.ax;
        player.vy += player.ay;
        player.x += player.vx;
        player.y += player.vy;
        player.vx = constrain(player.vx,-17,17)
        player.vy = constrain(player.vy, -17,17)
        
      }
}
//checks if player is on the side of the canvas and bounces them
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
//the function that allows charge to build if holding the w key
function checkCharging(){
    if (keyIsDown(87)) {
        if (charge < 100) {
          charge += 1;
          indication()
        }
        if (charge === 100) {
            indication()
          }
      }
      else {
          charge = 0
        }
    rect(player.x, player.y - 25, charge, lilBox.size.y)
}
//checks of lowgrav is true, if yes then it makes gravity lower lol
function checkGrav(){
    if (lowgrav === true){
        gravity = 0.01
    }
    else{
        gravity = 0.1
    }
    lowgrav = false
}
//dev tool so i can test jumps
function mousePressed(){
    player.x = mouseX
    player.y = mouseY
}

function indication(){
        let dx = mouseX - player.x;
        let dy = mouseY - player.y;
        dy = constrain(dy, -400,400)
        dx = constrain(dx, -400, 400)
        let vx = map(dx, -1000, 1000, -15, 15)*(charge/50);
        let vy = map(dy, -500, 500, -10, 10)*(charge/50);
        let ay = 0
        let x = player.x
        let y = player.y
        let path = []
        let keepDrawing = true
        let counter = 0
        do{
            if (vx > 0 && vy > 0){
                vx -= 0.1
            }
            if (vx < 0 && vy > 0){
                vx += 0.1
            }
            ay += gravity
            vy += ay
            x += vx;
            y += vy;
            vx = constrain(player.vx,-17,17)
            vy = constrain(player.vy, -17,17)

            path.push({
                x: x,
                y: y

            });
            counter++
        } while (counter < 100)
         // Draw the path
  for (let i = 0; i < path.length; i++) {
    let point = path[i];
    push();
    rectMode(CENTER);
    noStroke();
    let alpha = map(i, 0, path.length, 255, 0);
    fill(255, alpha);
    rect(point.x, point.y, 2, 2);
    pop();
  }




}

  