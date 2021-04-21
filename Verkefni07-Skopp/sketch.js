var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;

function setup() {
	createCanvas(400,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(255,200,0);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
	// Teikna boltann
  fill(236,36,94);
  rect(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(3,123,227);
  rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 10,10);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,10,20);
}
