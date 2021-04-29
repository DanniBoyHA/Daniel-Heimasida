var boltiX = 200;
var boltiY = 100;
var hradiX = 0;
var hradiY = 0;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
var spadiX = 200;

var stig2 = 0;
var spadiBreidd2 = 150;
var spadiThykkt2 = 25;
var spadiY2;
var spadiX2 = 200;

var gameStart = false;
var gameEnd = false;

function setup() {
	createCanvas(400,500);
	spadiY = height - 45;
    spadiY2 = 45;
	rectMode(CENTER);
    textAlign(CENTER, CENTER)
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(0, 255, 0);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
  	// Athuga hvort boltinn snertir þakið
//  if ((boltiY < boltiStaerd)) {
//    hradiY = hradiY * -1;
//  }
    // Athuga hvort boltinn snertir vegginn vinstra megin:
  if ((boltiX < 0+boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }

  // Athuga hvort boltinn er útaf
  if(boltiY>height+20){
    gameEnd = true;
  } else if(boltiY<-20){
    gameEnd = true;
  }

    // Athuga hvort boltinn snertir spaðann
  if ((boltiX > spadiX - (spadiBreidd/2) && boltiX < spadiX + (spadiBreidd/2)) && (boltiY + (boltiStaerd/2) > spadiY - (spadiThykkt/2) && boltiY + (boltiStaerd/2) < spadiY + (spadiThykkt/2))) {
    hradiY = hradiY * -1;
    stig2++;
  }

      // Athuga hvort boltinn snertir spaða 2
  if ((boltiX > spadiX2 - (spadiBreidd2/2) && boltiX < spadiX2 + (spadiBreidd2/2)) && (boltiY + (boltiStaerd/2) > spadiY2 - (spadiThykkt2/2) && boltiY - (boltiStaerd/2) < spadiY2 + (spadiThykkt2/2))) {
    hradiY = hradiY * -1;
    stig++;
  }

	// Teikna boltann
  fill(255,0,255);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(0, 0, 255);
  rect(spadiX,spadiY ,spadiBreidd,spadiThykkt);
  fill(0);
  ellipse(spadiX, spadiY, 10,10);
  	// Teikna spaða 2
  fill(255, 0, 0);
  rect(spadiX2,spadiY2 ,spadiBreidd2,spadiThykkt2);
  fill (0);
  ellipse(spadiX2, spadiY2, 10,10);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,50,20);
    // Teikna stigin
  fill(0);
  text("Stig: " + stig2,50,height-20);

    // Teikna upphafsskjá
  if(gameStart == false){
    fill(0,0,0,100);
    rect(width/2,height/2,width,height);
    fill(0);
    text("A og D stýra rauða spaðanum", width/2, height/2 - 40);
    text("← og → stýra bláa spaðanum", width/2, height/2 - 20);
    text("Ýttu á SPACE til að hefja leik!", width/2, height/2);
  }
    // Teikna tapskjá
/*  if(gameEnd == true){
    fill(0);
    rect(width/2,height/2,width,height);
    textSize(50);
    fill(255);
    text("TAP", width/2,height/2);
  } */
  // Færa bolta aftur á leiksvæði
  if(gameEnd == true){
    if(boltiY>height){
      stig = stig + 3;
    } else if(boltiY<-20){
      stig2 = stig2 + 3;
    }
    boltiX = 100;
    boltiY = 200;
    hradiY = hradiY * -1;
    gameEnd = false;
  }
}

function keyPressed() {
  if(keyCode == 32){
    hradiX = 3;
    hradiY = 4;
    gameStart = true;
  }
  if(keyCode == RIGHT_ARROW){
    spadiX = spadiX + 20;
  }
  if(keyCode == LEFT_ARROW){
    spadiX = spadiX - 20;
  }
  if(keyCode == 65){
    spadiX2 = spadiX2 - 20;
  }
  if(keyCode == 68){
    spadiX2 = spadiX2 + 20;
  }
}
