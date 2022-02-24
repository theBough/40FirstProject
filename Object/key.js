function Key(x, y, w, h,r) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  //r will be the room you want the key in.
  this.r = r;
  //This is a boolean that determines if the player
  //has the key
  this.have = false;
  //this is a boolean that we will use to toggle
  //the visibility on and off
  this.img = loadImage("object/key.png");
  this.display = function () {
    if (room == this.r) {
      this.img.resize(this.w, this.h)
      image(this.img, this.x, this.y);
     }//end if
  }; //end display
  this.keyCollision = function() {
  

    //check if we hit the left of any wall
    if (p.y <= this.y + this.h && p.y + p.h >= this.y && p.x <= this.x + this.w && p.x >= this.x) {
      this.have = true;
    }

    //check if we hit the right of any wall
    if (p.y <= this.y + this.h && p.y + p.h >= this.y && p.x + p.w >= this.x && p.x <= this.x + this.w) {
     this.have = true;
    }


    if (p.x <= this.x + this.w && p.x + p.w >= this.x && p.y <= this.y + this.h && p.y >= this.y) {
      this.have = true;
    }

    //check if we hit the top of any wall
    if (p.x <= this.x + this.w && p.x + p.w >= this.x && p.y + p.h >= this.y && p.y <= this.y + this.h) {
     this.have = true;
    }

  }

  
} //end Key


