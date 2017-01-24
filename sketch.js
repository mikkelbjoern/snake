let height = 400;
let width = 400;

function setup() {
  createCanvas(width,height);
}

function draw() {
  background(51);
  s.update();
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    s.changeDir(0,-1);
  }
  else if(keyCode === DOWN_ARROW){
    s.changeDir(0,1);
  }
  else if(keyCode === RIGHT_ARROW){
    s.changeDir(1,0);
  }
  else if(keyCode === LEFT_ARROW){
    s.changeDir(-1,0);
  }
}


snake = function () {
  this.x = 0;
  this.y = 0;

  this.xSpeed = 1;
  this.ySpeed = 1;


  this.show = function (){
    rect(this.x,this.y,20,20);
  }

  this.changeDir = function(x,y){
    this.xSpeed = x;
    this.ySpeed = y;
  }

  this.update = function(){
    this.x = constrain(this.x + this.xSpeed,0,width-20);
    this.y = constrain(this.y + this.ySpeed,0, height-20);
    this.show()
  }
}

let s = new snake();
