function Key(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //This is a boolean that determines if the player
  //has the key
  this.have = false;
  //this is a boolean that we will use to toggle
  //the visibility on and off
  this.show = false;
  this.img = loadImage("object/key.png")
  
  this.display = function(){
    image(this.img, this.x, this.y);
  }//end display
  
}//end Key
