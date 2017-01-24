let height = 400;
let width = 400;

let s = new snake();
let a = new apple();

function setup() {
  createCanvas(width,height);
  frameRate(5);
}

function draw() {
  background(55);
  s.update();
  a.show()
  if (a.eaten()){a.respawn()}
}
