// Hér kemur kóðinn þinn:

function setup(){
    createCanvas(800,600);
    background(130,255,255);
    noStroke();
    fill(0,50,0);
    rect(0,500,800,200);
    //eldfjall 1
    fill(1,1,1);
    triangle(250,200,250,500,100,500);
    triangle(350,200,350,500,500,500);
    fill(50,50,50);
    rect(250,200,100,400);
    //eldfjall 2
    fill(1,1,1);
    triangle(550,300,550,500,400,500);
    triangle(600,300,600,500,750,500);
    fill(50,50,50);
    rect(550,300,50,300);
}

function draw() {
  //setup();
  frameRate(3);
  fill(140,0,0);
  //eldfall 1
  ellipse(random(250,350), random(180,600), 20,20);
  ellipse(random(250,350), random(200,600), 20,20);
  //eldfjall 2
  ellipse(random(550,600), random(280,600), 20,20);
}
