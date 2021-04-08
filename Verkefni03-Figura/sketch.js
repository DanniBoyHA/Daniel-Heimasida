var bukur = 150;
var liturR = 255;
var liturG = 20;
var liturB = 25;
var munnur = 2;
var hattur = 60;

function setup() {
  createCanvas(350,550);
  rectMode(CENTER);
}
function draw() {
  background(150,150,150);
  // Teiknum fæturna
  line (mouseX - 20, mouseY + bukur/2 - 15, mouseX - 20, mouseY + bukur/2 + 50);
  line (mouseX + 20, mouseY + bukur/2 - 15, mouseX + 20, mouseY + bukur/2 + 50);
  // Teiknum hendurnar
  line (mouseX - 60, mouseY + bukur/2 - 20, mouseX - 35, mouseY - 25);
  line (mouseX + 60, mouseY + bukur/2 - 20, mouseX + 35, mouseY - 25);
  // Teiknum búkinn
  fill(liturR,liturG,liturB);
  ellipse(mouseX,mouseY,80,bukur);
  // Teiknum hausinn
  fill(194,177,157);
  ellipse(mouseX,mouseY - bukur/2, 80,80);
  // Teiknum munn
  fill(1);
  ellipse(mouseX,mouseY - bukur/2 + 25, 15 + munnur,5 + munnur);
  // Teiknum augun
  fill(200);
  ellipse (mouseX - 23,mouseY - bukur/2, 30,20);
  ellipse (mouseX + 23,mouseY - bukur/2, 30,20);
  // Teiknum augnsteina
  fill(1);
  ellipse (mouseX - 23,mouseY - bukur/2, 5,5);
  ellipse (mouseX + 23,mouseY - bukur/2, 5,5);
  // Teiknum hattinn
  fill(1);
  rect(mouseX,mouseY - bukur/2 - 30, 80,10);
  rect(mouseX,mouseY - bukur/2 - 60 - hattur+60, 40,hattur);
}

function mousePressed() {
	bukur = random (100,200);
  liturR = random (0,255);
  liturG = random (0,255);
  liturB = random (0,255);
  munnur = random (0, 15)
  hattur = random (50,70)
}
