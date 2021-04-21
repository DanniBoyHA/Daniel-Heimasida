var R = 255;
var G = 200;
var B = 0;

function setup() {
  createCanvas(600,600);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(R,G,B);
  fill(236,36,94);
  if(mouseX < 300 && mouseY < 300){
    //VINSTRI uppi
    fill(45, 150, 33);
    rect(150,150,300,300);

    if(!mouseIsPressed){
      fill(222, 250, 228);
      ellipse(mouseX + 15, mouseY, 40, 35);
      ellipse(mouseX - 15, mouseY, 40, 35);
      ellipse(mouseX, mouseY + 15, 35, 40);
      ellipse(mouseX, mouseY - 15, 35, 40);
    }
  	fill(245, 149, 66);
    ellipse(mouseX, mouseY, 25, 25);
  }
  else if(mouseX < 300 && mouseY > 300){
    //VINSTRI niðri
    fill(209, 91, 0);
    rect(150,450,300,300);

    if(mouseIsPressed){
      fill(54, 53, 52);
      ellipse(mouseX + 15, mouseY, 40, 35);
      ellipse(mouseX - 15, mouseY, 40, 35);
      ellipse(mouseX, mouseY + 15, 35, 40);
      ellipse(mouseX, mouseY - 15, 35, 40);
    }
  	fill(230, 223, 200);
    ellipse(mouseX, mouseY, 25, 25);
  }
  else if(mouseX > 300 && mouseY < 300){
    //HÆGRI uppi
    fill(209, 91, 0);
    rect(450,150,300,300);

    if(mouseIsPressed){
      fill(54, 53, 52);
      ellipse(mouseX + 15, mouseY, 40, 35);
      ellipse(mouseX - 15, mouseY, 40, 35);
      ellipse(mouseX, mouseY + 15, 35, 40);
      ellipse(mouseX, mouseY - 15, 35, 40);
    }
  	fill(230, 223, 200);
    ellipse(mouseX, mouseY, 25, 25);
  }
  else if(mouseX > 300 && mouseY > 300){
    //HÆGRI niðri
    fill(45, 150, 33);
    rect(450,450,300,300);

    if(!mouseIsPressed){
      fill(222, 250, 228);
      ellipse(mouseX + 15, mouseY, 40, 35);
      ellipse(mouseX - 15, mouseY, 40, 35);
      ellipse(mouseX, mouseY + 15, 35, 40);
      ellipse(mouseX, mouseY - 15, 35, 40);
    }
  	fill(245, 149, 66);
    ellipse(mouseX, mouseY, 25, 25);
  }
}

function keyPressed() {
  if(keyCode == 32){
    R = random(0,255);
    G = random(0,255);
    B = random(0,255);
  }
}
