"use strict";

let school = [];
let schoolSize = 25;
let state = "simulation"
let max_distance;
let pressed = false;
let aValue = 0
let timer = 10
let winCon = 10
let newvalue = 7

function setup() {
    createCanvas(windowWidth, windowHeight);
    max_distance = dist(0, 0, width, height);
  
    for (let i = 0; i < schoolSize; i++) {
      // Create a fish
      let fish = createFish(random(0, width), random(0, height));
      // Add the fish to our array
      school.push(fish);
    }
    for (let i = 0; i < school.length; i++) {
        let fish = school[0];
        fish.attached = true
    }
    for (let i = 0; i < school.length; i++) {
        let fish = school[4];
        let fish1 = school[5];
        let fish2 = school[6];
        fish.mean = true
        fish1.mean = true
        fish2.mean = true
    }
  }
// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    speed: 2,
    caught: false,
    attached: false,
    mean: false
  };
  return fish;
}

function draw() {
    background(0);
    if (state === "simulation"){
        simulate()
    }
    if (state === "lose"){
        lose()
    }
    if (state === "win"){
        win()
    }
  
    
  }
function lose(){
    text("GAME OVER", width/2, height*0.7);

}
function win(){
    text("YOU WIN", width/2, height/2);

}
function simulate(){
    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
      }
    fill(255,255,255)
    textAlign(CENTER, CENTER);
    textSize(100);
    text(timer, width/2, height/2);
    text(aValue, width/1.30,height/5)
    text("/", width/1.20,height/5)
    text(winCon, width/1.10,height/5)
      
  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }
  
  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right
  
    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
    }
    if (timer === 0) {
        state = "lose"
    }
    if (aValue > winCon){
        state = "win"
    }
  

    
}
// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
// Is thing true for ALL fish?

// now thingIsTrueForAllFish will be true only if they all passed the test
    
  // Choose whether to change direction
  if (dist(fish.x,fish.y,mouseX,mouseY) < 100) {
    let gx = mouseX - fish.x;
    let gy = mouseY - fish.y;
    fish.ax = -map(gx, -width, width, -20, 20);
    fish.ay = -map(gy, -width, width, -20, 20);
    
    
  }

  
  // Loop through all the fish to check each one
    for (let i = 0; i < school.length; i++) {
    let fish = school[i]; // Get the first fish
    // Now loop through all the fish AGAIN to check this fish against the other fish
        for (let j = 0; j < school.length; j++) {
      let otherFish = school[j];
      // DON'T check for an interaction if we're looking at the same fish
      // e.g. a fish doesn't interact with itself
        if (otherFish === fish) {
            
         continue; // This tells the loop to just keep going without doing the rest
      }
      if (dist(fish.x,fish.y,otherFish.x,otherFish.y) < 100){
        let dx = otherFish.x - fish.x;
        let dy = otherFish.y - fish.y;
        fish.ax = map(dx, -1000, 1000, -5, 5);
        fish.ay = map(dy, -1000, 1000, -5, 5);
        }
        if (pressed === true){
            if (dist(fish.x,fish.y,mouseX,mouseY) < 25){
                if (fish.caught === false){
                    fish.caught = true
                    aValue += 1
                    console.log(aValue)
                if (fish.attached === true){
                    aValue += 4
                    fish.attached = false
                    newvalue +=1
                    for (let i = 0; i < school.length; i++) {
                        let fish = school[newvalue];
                        fish.attached = true
                    }
                }
                if (fish.mean === true){
                        if (aValue > 0){
                            aValue -=1
                        }
                    }

                }
            }
        }


    }
    
}
  // Move the fish
  
  // Right edge
let px = width - fish.x;
if (px < 300) { // Check  if they're close enough to have an effect
  let influence = map(px, 0, width, -0.1, -1); // Acceleration
  fish.vx += influence;
}
if (px > width - 300) { // Check  if they're close enough to have an effect
  let influence = map(px, 0, width, 0.1, 1); // Acceleration
  fish.vx += influence;
}
let hx = height - fish.y;
if (hx < 300) { // Check  if they're close enough to have an effect
  let influence = map(hx, 0, width, -0.1, -1); // Acceleration
  fish.vy += influence;
}
if (hx > height - 300) { // Check  if they're close enough to have an effect
  let influence = map(hx, 0, width, 0.01, 0.1); // Acceleration
  fish.vy += influence;
}

  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy ;
  fish.vx = fish.vx + fish.ax;
  fish.vy = fish.vy + fish.ay;
  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
  fish.vx = constrain(fish.vx, -10, 10);
  fish.vy = constrain(fish.vy, -10, 10);``
  if (fish.x === 0){
    fish.vx = -fish.vx
    fish.ax = -fish.ax/2
  }
  else if (fish.x === width){
    fish.vx = -fish.vx
    fish.ax = -fish.ax/2
  }
  if (fish.y === 0){
    fish.vy = -fish.vy
    fish.ay = -fish.ay/2
  }
  else if (fish.y === height){
    fish.vy = -fish.vy
    fish.ay = -fish.ay/2
  }
  
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  if (fish.caught === true){
    fill(255,0,0)
  }
  if (fish.attached === true){
    fill('yellow')
  }
  if (fish.mean === true){
    fill('purple')
  }
  
  ellipse(fish.x, fish.y, fish.size);
  pop();
}
function keyPressed() {
    pressed = true
    if (state === "win"){
        winCon += 5
        timer +=6
        state = "simulation"
        aValue = 0
        schoolSize += 3
        for (let i = 0; i < school.length; i++) {
            let fish = school[i];
            fish.caught = false
        }
        for (let i = 0; i < school.length; i++) {
            let fish = school[4];
            fish.attached = true
        }
        for (let i = 0; i < 5; i++) {
            // Create a fish
            let fish = createFish(random(0, width), random(0, height));
            // Add the fish to our array
            school.push(fish);
          }
    }
   // let fish = createFish(mouseX,mouseY); // Create a fish at the mouse position
    //school.push(fish); // Add the fish to our array
    // Now the school array has our new fish and it will be moved and drawn
    // with all the others in the for loop!
  }
function keyReleased(){
    pressed = false
}