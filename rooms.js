function drawRoomOne(){
  room = 1;
  
 
  //roof left
  w.push(new Wall(0,0,150,10,"#262cc9"))
  //roof right
  w.push(new Wall(170,0,300,10,"#262cc9"))
  //left wall
  w.push(new Wall(0,0,10,400,"#262cc9"))
  //right Wall
  w.push(new Wall(width-10,0,10,150,"#262cc9"))
  //right Wall
  w.push(new Wall(width-10,300,10,150,"#262cc9"))
  //right Wall
  w.push(new Wall(width-150,150,150,10,"#262cc9"))
  w.push(new Wall(width-150,300,150,10,"#262cc9"))
  w.push(new Wall(width-150,150,10,150,"#262cc9"))
  //floor
  w.push(new Wall(0,height-10,width, 10,"#262cc9"))
   
}//end drawRoomOne
function drawRoomTwo(){
  room = 2; 
  w.push(new Wall(100,100,300,20,"red"))
}//end drawRoomTwo
function drawRoomThree(){
  room =3;
}//end drawRoomTwo
function drawRoomFive(){
  room = 5;
   w.push(new Wall(100,100,300,20,"cyan"))
  w.push(new Wall(100,300,300,20,"cyan"))
}//end drawRoomOne
function checkForRoomChange(){
  //this is going to check if the player hits
  //the edge of the canvas.
  if(p.y + p.h < 0){
    //The player has gone off the top of the canvas
    p.y = height;
    whereTo("up");
  }//end if
  if(p.y > height){
    //The player has gone passt the bottom of the canvas
    p.y = 0;
    whereTo("down");
  }//end if
  if(p.x > width){
    //The player has gone passt the right of the canvas
    p.x = 0;
    whereTo("right");
  }//end if
  if(p.x + p.w < 0){
    //The player has gone passt the left of the canvas
    p.x = width;
    whereTo("left");
  }//end if
}//end checkForRoomChange

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
  //you will also have to create 
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
