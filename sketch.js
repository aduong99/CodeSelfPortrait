// Global
var gDebugMode = true;
var hair = (60,40,30);
var earrings = (200,200,200);
var lips = (200,80,80);
var eyebrows = (60,40,30);

// Setup code goes here
function setup() {
  createCanvas(1200, 600);

   frameRate(5);
  // extraCanvas = createGraphics(700, 700);
  // extraCanvas.clear();
  textSize(24);
  textAlign(LEFT);
 }


// Draw code goes here
function draw() {

  background(0,150,150);

  if(gDebugMode == true){
  	drawDebugInfo();
  }

  drawHair();
  drawFace();
  drawEyebrows();
  drawNose();
  drawBlush();
  drawEarrings();
  drawEyes();
  drawLips();

  drawText();
}

function drawDebugInfo(){
	fill(255);
	text("X: " + mouseX + "   Y: " + mouseY, 20, height - 20);
}

//  keyTyped gets triggered 
function keyTyped() {
	if (key === ' '){
		gDebugMode = !gDebugMode;
	}
}

function mousePressed(){
    let r = random(255);
    let g = random(255);
    let b = random(255);

    let c = random(250);
    let m = random(250);
    let k = random (250);

    let d = random(200);
    let e = random(200);
    let f = random(200);
    
    hair = color(r, g, b); 
    earrings = color(c, m, k);
    lips = color(d,e,f);
    eyebrows = color(c, m, k);
  
 }


function drawFace()
{

	// face
	noStroke();
	fill(247,221,212);
	ellipse(350, 220,200,200);

	// hair top
	noStroke();
	fill(hair);
	arc(350, 185, 220, 185, -PI, 0);

	// bangs
	noStroke();
	fill(hair);
	arc(390, 160, 130, 80, 0, PI + QUARTER_PI, CHORD);
	arc(300, 140, 180, 110, 0, 0.75 * Math.PI);

	// neck
	fill(247, 221, 212);
	rect(330, 300, 45, 75, 20);

}

function drawLips(){
	//lips
	fill(lips);
	beginShape();
	vertex(330, 300);
	bezierVertex(330, 300, 340, 290, 350, 300);
	bezierVertex(350, 300, 360, 290, 370, 300);
	bezierVertex(370, 300, 350, 325, 330, 300);
	endShape(close);
}

function drawEyes(){
	//eyeball
	fill(255);
	ellipse(300,230,40,20);
	ellipse(400,230,40,20);
	//pupil
	fill(100,80,80);
	ellipse(300,230,23,23);
	ellipse(400,230,23,23);


	//eyeball light
	fill(255);
	ellipse(300,228,10,10);
	ellipse(400,228,10,10);
	ellipse(295,225,5,5);
	ellipse(405,225,5,5);
}

function drawEarrings(){
	//earrings
	fill(255);
	strokeWeight(20);
	//left
	fill(earrings);
	triangle(245, 300, 265, 260, 285, 300);
	//right
	fill(earrings);
	triangle(415, 300, 435, 260, 455, 300);
}

function drawHair(){
	// hair
	fill(hair);
	noStroke();
	arc(350, 210, 241, 210, -PI, 0);

	  // hair wave
	beginShape();
	vertex(230, 200);
	bezierVertex(230, 200, 220, 230, 230, 260);
	bezierVertex(230, 260, 240, 290, 230, 320);
	bezierVertex(230, 320, 220, 350, 230, 380);
	bezierVertex(240, 380, 350, 400, 460, 380);
	bezierVertex(470, 380, 480, 350, 470, 320);
	bezierVertex(470, 320, 460, 290, 470, 260);
	bezierVertex(470, 260, 480, 230, 470, 200);
	endShape(close);

}

function drawEyebrows(){
	//eyebrows
	stroke(eyebrows);
	noFill();
	strokeWeight(7);
	arc(300,230,60,45,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
	arc(400,230,60,45,PI+QUARTER_PI,PI+HALF_PI+QUARTER_PI);
}

function drawNose(){
	//nose
	noStroke();
	fill(220,180,180);
	ellipse(350,270,25,20);
}

function drawBlush(){
	//blush
	noStroke();
	fill(220,150,150);
	ellipse(400,260,20,10);
	ellipse(300,260,20,10);
}

function drawText(){
	let s = 'Click to Change Color!';
	fill(255);
	text(s, 240, 20, 800, 80); 
}