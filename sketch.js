let x;
let p;
let w = [];
let room = 1;
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"blue")
  drawRoomOne();
}
function draw() {
  background(102,255,255);
  for(var i =0 ; i < w.length ; i++){
    w[i].display()
  }
  
  p.display();
  p.update();
  checkForRoomChange();
  checkForCollission();
}
function whereTo(direction){
  w = [];
  switch(room){
    case 1:
      //player was in room 1
      //check to see what direction they went.
      switch(direction){
        case "up":
          //The player is now in Room 2
          room  = 2;
          drawRoomTwo();
          break;
        case "down":
          
          break;
        case "left":
          
          break;
        case "right":
          
          break;
      }//end switch for the direction
      
      break;
    case 2:
      //the player is in room 2
      //use a switch statement to determine
      //which room to draw.
      switch(direction){
        case "down":
          //draw the walls for room 1
          drawRoomOne();
        break;
      }//end switch for switch
      
      break;
  }//end Switch
  
}//end whereTo
function checkForRoomChange(){
  //this is going to check if the player hits
  //the edge of the canvas.
  if(p.y < 0){
    //The player has gone off the top of the canvas
    p.y = height;
    whereTo("up");
  }//end if
  
  if(p.y > height){
    //The player has gone passt the bottom of the canvas
    p.y = 0;
    whereTo("down");
  }//end if
}//end checkForRoomChange
function checkForCollission() {
  for (var i = 0; i < w.length; i++) {

    //check if we hit the left of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x <= w[i].x + w[i].w && p.x >= w[i].x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x + p.w >= w[i].x && p.x <= w[i].x + w[i].w) {
      p.x -= 5
    }


    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y <= w[i].y + w[i].h && p.y >= w[i].y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y + p.h >= w[i].y && p.y <= w[i].y + w[i].h) {
      p.y -= 5;
    }

  }
}

