var faceScale = 1.0;
var lipColour = 5;

function setup() {
  createCanvas(750,550);
  rectMode(CENTER);
}
function draw() {
  background(150,150,150);
  noStroke();
  //teiknum Andlit
  fill(240,184,160);
  ellipse(mouseX, mouseY, 180 * faceScale, 210 * faceScale);
  rect(mouseX, mouseY + 100 * faceScale, 70 * faceScale, 30 * faceScale);
  ellipse(mouseX, mouseY + 115 * faceScale, 70 * faceScale, 10 * faceScale);

  //teiknum hár
  fill(255,224,225);
  ellipse(mouseX, mouseY - 110 * faceScale, 60 * faceScale, 40 * faceScale);
  ellipse(mouseX - 30 * faceScale, mouseY - 90 * faceScale, 65 * faceScale, 50 * faceScale);
  ellipse(mouseX + 30 * faceScale, mouseY - 90 * faceScale, 65 * faceScale, 50 * faceScale);
  ellipse(mouseX - 40 * faceScale, mouseY - 70 * faceScale, 90 * faceScale, 60 * faceScale);
  ellipse(mouseX + 40 * faceScale, mouseY - 70 * faceScale, 90 * faceScale, 60 * faceScale);

  //teiknum varir
  fill(200,0,0);
  ellipse(mouseX - 10 * faceScale, mouseY + 60 * faceScale, 40 * faceScale, 12 * faceScale);
  ellipse(mouseX + 10 * faceScale, mouseY + 60 * faceScale, 40 * faceScale, 12 * faceScale);
  //ellipse(mouseX, mouseY + 45 * faceScale, 40 * faceScale, 10 * faceScale);
}

function mousePressed() {
	faceScale = random (0.5,2.0);
  lipColour = random (1,10);
}
