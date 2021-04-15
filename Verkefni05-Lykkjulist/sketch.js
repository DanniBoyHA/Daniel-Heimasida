var i;
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function setup() {
  createCanvas(500,500);
  background(10);
  frameRate(4);
}

function draw() {
  background(255,165,0);
  for(var x = 0; x < width; x = x+10){
    for(var y = 0; y < height; y = y+10){
      fill(random(50,150),random(50,150),50);
      rect(x,y, 10,10);
      fill(random(0,50),random(0,50),0);
      i= alphabet[Math.floor(Math.random() * alphabet.length)];
      text("" + i,x,y+10);
    }
  }
}
