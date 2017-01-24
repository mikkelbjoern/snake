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
