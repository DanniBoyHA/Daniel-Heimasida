
function setup() {
  createCanvas(500,500);
  background(255,215,000);
  colorMode(HSB);
  frameRate(5);
}

function draw() {
  for(var x = 0; x < width; x = x+10){
    fill(random(0,360),75,100);
    for(var y = 0; y < height; y = y+10){
      ellipse(10+x*2,10+y*2, 15,15);
    }
  }
}
