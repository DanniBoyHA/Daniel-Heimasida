// Hér kemur kóðinn þinn:

function setup(){
    createCanvas(800,600);
    background(130,255,255);
    noStroke();
    fill(0,50,0);
    rect(0,500,800,200);
    fill(1,1,1);
}

function draw() {
  setup();
  frameRate(3);
  fill(244,0,0);
  ellipse(random(350,450), random(100,500), 20,20);
}
