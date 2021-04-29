var faceScale = 1.0;
var faceX = 100;
var faceY = 100;
var hradiX = 3;
var hradiY = 3;

var bakLitur = 150;
var augnLitur = 0;

function setup() {
  createCanvas(750,550);
  rectMode(CENTER);
}
function draw() {
  background(bakLitur);
  noStroke();
  //Látum andlitið hreyfast
  faceX = faceX + hradiX;
  faceY = faceY + hradiY;
  if (abs(faceX - width/2)> width/2){
      hradiX = -1*hradiX;
      faceScale = random (0.5,2.0);
      augnLitur = random (0,255);
      bakLitur = random (100,200);
    }
    if (abs(faceY - height/2)> height/2){
      hradiY = -1*hradiY;
      faceScale = random (0.5,2.0);
      augnLitur = random (0,255);
      bakLitur = random (100,200);
    }

  //teiknum ömmu
  amma(faceX,faceY,faceScale,augnLitur);
}

function mousePressed() {
	faceScale = random (0.5,2.0);
}

function amma(ammaX,ammaY,ammaScale,ammaAugnLitur) {
  //teiknum Andlit
  fill(240,184,160);
  ellipse(ammaX, ammaY, 180 * ammaScale, 210 * ammaScale);
  rect(ammaX, ammaY + 100 * ammaScale, 70 * ammaScale, 30 * ammaScale);
  ellipse(ammaX, ammaY + 115 * ammaScale, 70 * ammaScale, 10 * ammaScale);

  //teiknum hár
  fill(255,224,225);
  ellipse(ammaX, ammaY - 110 * ammaScale, 60 * ammaScale, 40 * ammaScale);
  ellipse(ammaX - 30 * ammaScale, ammaY - 90 * ammaScale, 65 * ammaScale, 50 * ammaScale);
  ellipse(ammaX + 30 * ammaScale, ammaY - 90 * ammaScale, 65 * ammaScale, 50 * ammaScale);
  ellipse(ammaX - 40 * ammaScale, ammaY - 70 * ammaScale, 90 * ammaScale, 60 * ammaScale);
  ellipse(ammaX + 40 * ammaScale, ammaY - 70 * ammaScale, 90 * ammaScale, 60 * ammaScale);

  //teiknum varir
  fill(200,0,0);
  ellipse(ammaX - 10 * ammaScale, ammaY + 60 * ammaScale, 40 * ammaScale, 12 * ammaScale);
  ellipse(ammaX + 10 * ammaScale, ammaY + 60 * ammaScale, 40 * ammaScale, 12 * ammaScale);
  //ellipse(ammaX, ammaY + 55 * ammaScale, 20 * ammaScale, 5 * ammaScale);

  //teiknum augu
  fill(230);
  ellipse(ammaX + 40 * ammaScale, ammaY - 5 * ammaScale, 25 * ammaScale, 15 * ammaScale);
  ellipse(ammaX - 40 * ammaScale, ammaY - 5 * ammaScale, 25 * ammaScale, 15 * ammaScale);
  //teiknum augnsteina
  fill(ammaAugnLitur, 0, 0);
  ellipse(ammaX + 40 * ammaScale, ammaY - 5 * ammaScale, 10 * ammaScale, 10 * ammaScale);
  ellipse(ammaX - 40 * ammaScale, ammaY - 5 * ammaScale, 10 * ammaScale, 10 * ammaScale);

  //teiknum nefop
  fill(207, 156, 134);
  ellipse(ammaX + 8 * ammaScale, ammaY + 20 * ammaScale, 5 * ammaScale, 5 * ammaScale);
  ellipse(ammaX - 8 * ammaScale, ammaY + 20 * ammaScale, 5 * ammaScale, 5 * ammaScale);
}
