function Player(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  
  this.display = function(){
    fill(this.col)
    rect(this.x, this.y, this.w, this.h);
  }
}//end Player
