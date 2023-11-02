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
    x: 100,
    y: 100,
    size: {
        x: 100,
        y: 10

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
        fill: [255, 255, 0]
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
    if (platform.type === "top") {
        fill('red')
    }
    else if (platform.type === "left") {
        fill('blue')
    }
    else if (platform.type === "right") {
        fill('blue')
    }
    else if (platform.type === "bottom") {
        fill('yellow')
    }
    else if (platform.type === "slideTop") {
        fill('cyan')
    }
    else if (platform.type === "slowGrav") {
        fill(255, 0, 255, 50)
    }
    else if (platform.type === "slipperyTop") {
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
    if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "top") {
        if (player.vy >= 0) {
            player.y = platform.y - 24
            grounded = true
        }
    }
    //left and right stops the player's x momentum and makes sure they dont go any further
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "left" &&
        grounded === false) {
        if (player.vx > 0) {
            player.x = platform.x - 15
            player.vx = 0
            if (player.vy < 0) {
                player.vy += 2
            }
        }
    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "right" &&
        grounded === false) {
        if (player.vx <= 0) {
            player.x = platform.x + 15
            player.vx = 0
            if (player.vy < 0) {
                player.vy += 2
            }
        }
    }
    //bottom: stops y momentum
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bottom") {
        if (player.vy <= 0) {
            player.vy = 0
        }
    }
    //makes sure if touched, they will teleport to the center and slide through
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "slideTop") {
        if (player.vy >= 0) {
            player.vx = 0
            player.vy = 0
            player.x = platform.x
        }
    }
    //applies low gravity 
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "slowGrav") {

        lowgrav = true
    }
    //makes the player slip and slide if velocity is higher than 0.1    
    if (player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        platform.type === "slipperyTop") {
        if (player.vy >= 0) {
            if (player.vx > 0) {
                player.vx = player.vx - 0.075;
                player.vy = 0;
                player.ay = 0;
                if (player.vx < 0.1) {
                    grounded = true;
                }
            }


            if (player.vx < 0) {
                player.vx = player.vx + 0.075;
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
    if (lowgrav === false) {
        jumped = true
        grounded = false
        let dx = mouseX - player.x;
        let dy = mouseY - player.y;
        dy = constrain(dy, -400, 400)
        dx = constrain(dx, -400, 400)
        player.vx = map(dx, -1000, 1000, -15, 15) * (charge / 50);
        player.vy = map(dy, -500, 500, -10, 10) * (charge / 50);
    }
    if (lowgrav === true && grounded === true) {
        jumped = true
        grounded = false
        let dx = mouseX - player.x;
        let dy = mouseY - player.y;
        dy = constrain(dy, -400, 400)
        dx = constrain(dx, -400, 400)
        player.vx = map(dx, -1000, 1000, -15, 15) * (charge / 50);
        player.vy = map(dy, -500, 500, -10, 10) * (charge / 50);
    }
}
//checks if the player is grounded and dictates player velocity and momentum
function checkGrounded() {
    if (grounded === true) {

        player.vx = 0;
        player.vy = 0;
        player.ay = 0;

    }
    if (grounded === false) {
        if (player.vx > 0 &&
            player.vy > 0) {
            player.vx -= gravity
        }
        if (player.vx < 0 &&
            player.vy > 0) {
            player.vx += gravity
        }
        player.ay += gravity;
        player.vx += player.ax;
        player.vy += player.ay;
        player.x += player.vx;
        player.y += player.vy;
        player.vx = constrain(player.vx, -17, 17)
        player.vy = constrain(player.vy, -17, 17)

    }
}
//checks if player is on the side of the canvas and bounces them
function checkSides() {
    player.x = constrain(player.x, 0, width);
    player.y = constrain(player.y, 0, height);
    if (player.x === width) {
        player.vx = -player.vx;
    }
    if (player.x === 0) {
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
function checkCharging() {
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
function checkGrav() {
    if (lowgrav === true) {
        gravity = 0.01
    }
    else {
        gravity = 0.1
    }
    lowgrav = false
}
//dev tool so i can test jumps
function mousePressed() {
    player.x = mouseX
    player.y = mouseY
}
//this makes it so there's an indicator where ur mouse is
function indication() {
    let dx = mouseX - player.x;
    let dy = mouseY - player.y;
    dy = constrain(dy, -400, 400)
    dx = constrain(dx, -400, 400)
    let vx = map(dx, -1000, 1000, -15, 15) * (charge / 50);
    let vy = map(dy, -500, 500, -10, 10) * (charge / 50);
    let ay = 0
    let x = player.x
    let y = player.y
    let path = []
    let counter = 0
    do {
        if (vx > 0 && vy > 0) {
            vx -= gravity
        }
        if (vx < 0 && vy > 0) {
            vx += gravity
        }
        ay += gravity
        vy += ay
        x += vx;
        y += vy;


        path.push({
            x: x,
            y: y

        });
        counter++
    } while (counter < 12)
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

