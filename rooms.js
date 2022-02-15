function drawRoomOne(){
  room = 1;
   w.push(new Wall(100,100,300,20,"red"))
  w.push(new Wall(100,300,300,20,"white"))
}//end drawRoomOne

function drawRoomTwo(){
  room = 2; 
  w.push(new Wall(100,100,300,20,"red"))
}//end drawRoomTwo
function drawRoomThree(){
  
}//end drawRoomTwo
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
