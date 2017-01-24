apple = function(){
  this.x = Math.floor(Math.random()*width/20)*20;
  this.y = Math.floor(Math.random()*height/20)*20;


  this.eaten = function(){
    if (dist(this.x,this.y,s.x,s.y)<2) {
      return true;
    } else {
      return false;
    }
  }

  this.respawn = function(){
    this.x = Math.floor(Math.random()*width/20)*20;
    this.y = Math.floor(Math.random()*height/20)*20;
  }

  this.show = function(){
    fill('#e50404');
    rect(this.x,this.y,20,20);
  }
}
