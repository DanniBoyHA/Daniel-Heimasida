
function setup() {
  createCanvas(500,500);
  background(255,215,000);
  colorMode(HSB);
  frameRate(3);
}

function draw() {
  for(var i = 400; i > 0; i = i - 20){
    fill(random(0,360),75,100);
    ellipse(250,250,i,i);
  }
}
