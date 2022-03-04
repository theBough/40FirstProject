/*If you have already started designing your rooms, 
be sure to just copy the fillRoom() function.
The function calls in the "rooms" array, need to match the 
names of your draw room function names.
*/
function fillRooms() {
  /*This will fill an array
  with function calls of our rooms
  */

  rooms = [
    [drawRoomTwo, keyRoom, drawRoomThree],
    [drawRoomTwo, startRoom, drawRoomThree],
  ];
    
} //end fillsrooms

var startRoom = function () {
  w = [];

  if (gateOneClosed) {
    w.push(new Wall(50, 50, 30, 30, "white"));
  }

  //roof left
  w.push(new Wall(0, 0, 150, 10, "#262cc9"));
  //roof right
  w.push(new Wall(170, 0, 300, 10, "#262cc9"));
  //left wall
  //w.push(new Wall(0,0,10,400,"#262cc9"))
  //right Wall
  w.push(new Wall(width - 10, 0, 10, 150, "#262cc9"));
  //right Wall
  w.push(new Wall(width - 10, 300, 10, 150, "#262cc9"));
  //right Wall
  w.push(new Wall(width - 150, 150, 150, 10, "#262cc9"));
  w.push(new Wall(width - 150, 300, 150, 10, "#262cc9"));
  w.push(new Wall(width - 150, 150, 10, 150, "#262cc9"));
  //floor
  w.push(new Wall(0, height - 10, width, 10, "#262cc9"));
}; //end drawRoomOne
var drawRoomTwo = function () {

  w = [];
  w.push(new Wall(100, 100, 300, 20, "red"));
}; //end drawRoomTwo
var drawRoomThree = function () {
  
}; //end drawRoomTwo
var keyRoom = function () {
  w = [];
  w.push(new Wall(0, height - 10, 150, 10, "#262cc9"));
  //roof right
  w.push(new Wall(170, height - 10, 300, 10, "#262cc9"));
  w.push(new Wall(0, 0, width, 10, "#262cc9"));
  w.push(new Wall(0, 0, 10, height, "#262cc9"));
  w.push(new Wall(width - 10, 0, 10, height, "#262cc9"));
}; //end drawRoomOne
function checkForRoomChange() {
  //this is going to check if the player hits
  //the edge of the canvas.
  if (p.y + p.h < 0) {
    //The player has gone off the top of the canvas
    p.y = height;
    row -= 1;
  } //end if
  if (p.y > height) {
    //The player has gone passt the bottom of the canvas
    p.y = 0;
    row += 1;
  } //end if
  if (p.x > width) {
    //The player has gone passt the right of the canvas
    p.x = 0;
    column += 1;
  } //end if
  if (p.x + p.w < 0) {
    //The player has gone passt the left of the canvas
    p.x = width;
    column -= 1;
  } //end if
} //end checkForRoomChange
