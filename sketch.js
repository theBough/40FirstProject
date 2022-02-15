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
function leavingRoomOne(direction){
  //determine what room to draw after leaving room 1.
  switch(direction){
    case "up":
      //The player has travelled up, and is now in room 2
      drawRoomTwo();
      break;
    case "right":
      drawRoomThree();
      break;
    case "down":
      drawRoomFour();
      break;
    case "left":
      drawRoomFive();
      break;
  }//end switch
}
function leavingRoomTwo(direction){
  
}
function leavingRoomThree(direction){
  
}
function leavingRoomFour(direction){
  
}
function leavingRoomFive(direction){
  switch(direction){
      case "right":
        drawRoomOne();
      break;
  }//end switch
}//end leavingRoomFive.
function whereTo(direction){
  //each time you add a room to your game.
  //you will need to add a "case" to the switch.
  //you will also have to typ up 
  //a new "leavingRoom...." function
  w = [];
  switch(room){
    case 1:
      leavingRoomOne(direction);      
      break;
    case 2:
      leavingRoomTwo(direction)
      break;
    case 3:
      leavingRoomThree(direction);      
      break;
    case 4:
      leavingRoomFour(direction)
      break;
    case 5:
      leavingRoomFive(direction)
      break;
  }//end Switch
}//end whereTo

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

