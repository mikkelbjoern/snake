let height = 400;
let width = 400;

function setup() {
  createCanvas(width,height);
  frameRate(5);
}

function draw() {
  background(55);
  s.update();
}

let s = new snake();
