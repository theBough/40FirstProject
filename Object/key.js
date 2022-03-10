function Key(x, y, wid, h, r) {
  this.x = x;
  this.y = y;
  this.w = wid;
  this.h = h;
  //r will be the room you want the key in.
  this.r = r;
  //This is a boolean that determines if the player
  //has the key
  this.have = false;
  this.show = true
  //this is a boolean that we will use to toggle
  //the visibility on and off
  this.img = loadImage("object/key.png");
  
  this.display = function () {
    //console.log(rooms[row][column])
    //console.log(this.r)
    if (this.show &&( this.have || this.r === rooms[row][column])) {
      this.img.resize(this.w, this.h);
      image(this.img, this.x, this.y);
    } //end if
  }; //end display
  this.keyCollision = function () {
    //check if we hit the left of any wall
    if (
      p.y <= this.y + this.h &&
      p.y + p.h >= this.y &&
      p.x <= this.x + this.w &&
      p.x >= this.x &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }

    //check if we hit the right of any wall
    if (
      p.y <= this.y + this.h &&
      p.y + p.h >= this.y &&
      p.x + p.w >= this.x &&
      p.x <= this.x + this.w &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }

    if (
      p.x <= this.x + this.w &&
      p.x + p.w >= this.x &&
      p.y <= this.y + this.h &&
      p.y >= this.y &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }

    //check if we hit the top of any wall
    if (
      p.x <= this.x + this.w &&
      p.x + p.w >= this.x &&
      p.y + p.h >= this.y &&
      p.y <= this.y + this.h &&
      this.r === rooms[row][column]
    ) {
      this.have = true;
    }
     //Check if the key hits a gate.
   if (
     w[0].y <= this.y + this.h &&
      w[0].y + w[0].h >= this.y &&
      w[0].x + w[0].w >= this.x &&
      w[0].x <= this.x + this.w
    ) {
      gateOneClosed = false;
     //k.show = false;
      //if it hits the gate, redraw Room 1
      
    }
    
  };
  
} //end Key
