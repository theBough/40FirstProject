function Player(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.speed =3;
  
  this.display = function(){
    fill(this.col)
    rect(this.x, this.y, this.w, this.h);
  }//end display
  this.update = function(){
    //this function will check to see if one of the
    //arrows keys have been pressed.
    
    if(keyIsDown(39)){
      //this is the right arrow key
      this.x += this.speed;
      
    }//end if
    if(keyIsDown(37)){
      //this is the left arrow key
      this.x -= this.speed;
      
    }//end if
     if(keyIsDown(38)){
      //this is the up arrow key
      this.y -= this.speed;
      
    }//end if
    if(keyIsDown(40)){
      //this is the down arrow key
      this.y += this.speed;
      
    }//end if
  }//end update
}//end Player
