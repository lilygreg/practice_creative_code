console.log("this message in from sketch.js")

function setup(){
    createCanvas(400,400);
    background(100,100,20);
}

function draw(){
    fill(130,90,20)
    rect(mouseX, mouseY,20,20); 
}