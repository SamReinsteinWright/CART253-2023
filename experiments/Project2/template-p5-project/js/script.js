/**
 * JumpThang
 * Sam Reinstein Wright
 * 
 * This is a faudian game, meaning it's one level with no checkpoints and the controls are pretty callous. Intended to be 
 * something of a "rage game"
 */
//preload once
//same image
//one variablw with image
//display image muliple times
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
//SOUND EXERCISE (PART 1) --- OPEN
/* I am making an adaptive soundtrack 
using many different songs being played
at the same time at differing volumes 
to make the sound dynamically change
as one progresses through the game. 
-------------------------------------
These are the variables I use to 
keep track of the individual song 
versions' different parameters
such as: the song itself, the volume,
and where to begin a transition.
*/
//the songs
let normalSoundtrack;
let lowGravSoundtrack;
let icySoundtrack;
let bounceSoundtrack;
//the volume 
let normalVolume = 1
let lowGravVolume = 0
let icyVolume = 0
let bounceVolume = 0
//the area
let bounce
let normal
let icy
let lowGravity
//SOUND EXERCISE (PART 1) --- CLOSE

//my platform array
let platforms = [];

function preload() {
    //SOUND EXERCISE (PART 2) --- OPEN
    // Here is where I load the music
    icySoundtrack = loadSound('assets/sounds/jumpIce.wav')
    lowGravSoundtrack = loadSound('assets/sounds/jumpLowGrav.wav')
    normalSoundtrack = loadSound('assets/sounds/jump.wav')
    bounceSoundtrack = loadSound('assets/sounds/jumpBounce.wav')
    //SOUND EXERCISE (PART 2) --- CLOSE
}


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
    //SOUND EXERCISE (PART 3) --- OPEN
    //here I call the function that plays the songs
    backgroundMusic()
    //SOUND EXERCISE (PART 3) --- CLOSE
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

    //SOUND EXERCISE (PART 4) --- OPEN 
    //here i call the function that checks where the character is and controls the sound
    checkSoundtrack()
    //SOUND EXERCISE (PART 4) --- CLOSE
}
//the function that decides the colour of each rectangle and that actually draws it
function displayPlatform(platform) {
    push();
    noStroke()
    if (platform.type === "top") {
        fill('red')
    }
    else if (platform.type === "left") {
        fill('brown')
    }
    else if (platform.type === "right") {
        fill('brown')
    }
    else if (platform.type === "bottom") {
        fill(225, 173, 1)
    }
    else if (platform.type === "slideTop") {
        fill('blue')
    }
    else if (platform.type === "slowGrav") {
        fill(255, 0, 255, 50)
    }
    else if (platform.type === "slipperyTop") {
        fill('cyan')
    }
    else if (platform.type === "normal") {
        fill(255, 0, 0, 30)
    }
    else if (platform.type === "lowGravity") {
        fill(255, 0, 255, 30)
    }
    else if (platform.type === "icy") {
        fill(0, 255, 255, 30)
    }
    else if (platform.type === "bouncyTop") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncyRight") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncyLeft") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncyBottom") {
        fill(251, 72, 196)
    }
    else if (platform.type === "bouncy") {
        fill(251, 72, 196, 30)
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
                player.vx = player.vx - 0.06;
                player.vy = 0;
                player.ay = 0;
                if (player.vx < 0.1) {
                    grounded = true;
                }
            }


            if (player.vx < 0) {
                player.vx = player.vx + 0.06;
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
    //SOUND EXERCISE (PART 5) --- OPEN
    /*These are the collision detection codes 
    for the different sound zones. they check 
    whether or not the player is in said zone
    and changes the zone type in order to 
    indicate which music to swap to.
    */
    //this is for the normal zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "normal") {

        normal = true
        lowGravity = false
        icy = false
        bounce = false
    }
    //this is for the low grav zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "lowGravity") {

        normal = false
        lowGravity = true
        icy = false
        bounce = false
    }
    //this is for the icy zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "icy") {

        normal = false
        lowGravity = false
        icy = true
        bounce = false
    }
    //this is for the bouncy zone
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncy") {
        bounce = true
        normal = false
        icy = false
        lowGravity = false
    }
    //SOUND EXERCISE (PART 5) --- CLOSE
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyTop") {
        if (player.vy >= 0) {

            player.ay = 0
            player.vy = -player.vy
        }


    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyRight" &&
        grounded === false) {
        if (player.vx <= 0) {
            player.vx = - player.vx
            player.ay = 0
        }
    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyLeft" &&
        grounded === false) {
        if (player.vx >= 0) {
            player.vx = - player.vx
            player.ay = 0
        }
    }
    else if (player.x + player.w / 2 > platform.x - platform.w / 2 &&
        player.x - player.w / 2 < platform.x + platform.w / 2 &&
        player.y + player.h / 2 > platform.y - platform.h / 2 &&
        player.y - player.h / 2 < platform.y + platform.h / 2 &&
        platform.type === "bouncyBottom") {
        if (player.vy <= 0) {
            player.vy = -player.vy
            player.ay = 0
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
        if (icy) {
            if (player.vx >= 0) {
                player.vx -= 0.065
            }
            if (player.vx <= 0) {
                player.vx += 0.065
            }
        }
        player.ay += gravity;
        player.vx += player.ax;
        player.vy += player.ay;
        player.x += player.vx;
        player.y += player.vy;
        if (!bounce) {
            player.vx = constrain(player.vx, -17, 17)
            player.vy = constrain(player.vy, -17, 17)
        }
        if (bounce) {
            player.vx = constrain(player.vx, -30, 30)
            player.vy = constrain(player.vy, -30, 30)
        }

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
function keyIsDown() {
    if (!normalSoundtrack.isPlaying()) {
        normalSoundtrack.play()
    }
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

//SOUND EXERCISE (PART 6) --- OPEN
/*This is for any dev to use in order 
to teleport the player to the mouse 
location on click to check specific 
jumps or to hear the sound shift without 
playing the whole game. 
----------------------------------------
If you click and the player character was
not on a red platform then the character 
will begin to fall. SO if the character is 
falling, click such that they will land on 
a red platform. To get out of this immobile0
state, just press w. 
*/
function mousePressed() {
    player.x = mouseX
    player.y = mouseY
}
//SOUND EXERCISE (PART 6) --- CLOSE

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
        ay += gravity
        vy += ay
        x += vx;
        y += vy;


        path.push({
            x: x,
            y: y

        });
        counter++
    } while (counter < 15)
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
//SOUND EXERCISE (PART 7) --- OPEN
/*These two functions are used to 
set and check the songs. 
*/
//This one begins playing the music at the volume indicated by the variable
function backgroundMusic() {
    normalSoundtrack.play()
    normalSoundtrack.loop()
    normalSoundtrack.setVolume(normalVolume)
    icySoundtrack.play()
    icySoundtrack.loop()
    icySoundtrack.setVolume(icyVolume)
    lowGravSoundtrack.play()
    lowGravSoundtrack.loop()
    lowGravSoundtrack.setVolume(lowGravVolume)
    bounceSoundtrack.play()
    bounceSoundtrack.loop()
    bounceSoundtrack.setVolume(bounceVolume)
    userStartAudio()
}
//this function checks what area the player is in and slowly fades out all other music of other areas while fading in that areas music
function checkSoundtrack() {
    //this checks the area
    if (normal) {
        //this checks which area's music is playing and slowly reduces the volume
        //icy
        if (icyVolume > 0) {
            icyVolume -= 0.001
        }
        //low grav
        if (lowGravVolume > 0) {
            lowGravVolume -= 0.001
        }
        //this increases the normal areas volume
        if (normalVolume < 1) {
            normalVolume += 0.001
        }
        //bouncy
        if (bounceVolume > 0) {
            bounceVolume -= 0.001
        }
    }
    //the rest are th eexact same as the one above exept they check different areas
    if (lowGravity) {
        if (icyVolume > 0) {
            icyVolume -= 0.001
        }
        if (lowGravVolume < 1) {
            lowGravVolume += 0.001
        }
        if (normalVolume > 0) {
            normalVolume -= 0.001
        }
        if (bounceVolume > 0) {
            bounceVolume -= 0.001
        }
    }
    if (icy) {
        if (icyVolume < 1) {
            icyVolume += 0.001
        }
        if (lowGravVolume > 0) {
            lowGravVolume -= 0.001
        }
        if (normalVolume > 0) {
            normalVolume -= 0.001
        }
        if (bounceVolume > 0) {
            bounceVolume -= 0.001
        }
    }
    if (bounce) {
        if (bounceVolume < 1) {
            bounceVolume += 0.001
        }
        if (lowGravVolume > 0) {
            lowGravVolume -= 0.001
        }
        if (normalVolume > 0) {
            normalVolume -= 0.001
        }
        if (icyVolume > 0) {
            icyVolume -= 0.001
        }
    }
    //this constantly updates the volume of each song
    normalSoundtrack.setVolume(normalVolume)
    icySoundtrack.setVolume(icyVolume)
    lowGravSoundtrack.setVolume(lowGravVolume)
    bounceSoundtrack.setVolume(bounceVolume)
}
//SOUND EXERCISE (PART 7) --- CLOSE
