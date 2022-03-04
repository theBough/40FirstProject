/*If you have already started designing your rooms, 
be sure to just copy the drawRoom() function.
The function calls in the "rooms" array, need to match the 
names of your draw room function names.
*/
function drawRoom() {
  rooms = [
    [blankRoom, dragonRoom, blankRoom],
    [keyRoom, startRoom, swordRoom],
    [blankRoom, bossRoom, blankRoom],
  ];
} //end function

var startRoom = function () {
  w = [];
  w.push(new Wall(0, 0, 150, 20, "#b3b300"));
  w.push(new Wall(width - 150, 0, 150, 20, "#b3b300"));
  w.push(new Wall(0, 0, 20, 150, "#b3b300"));
  w.push(new Wall(0, height - 150, 20, 150, "#b3b300"));
  w.push(new Wall(0, height - 20, 150, 20, "#b3b300"));
  w.push(new Wall(width - 150, height - 20, 150, 20, "#b3b300"));
  w.push(new Wall(width - 20, 0, 20, 150, "#b3b300"));
  w.push(new Wall(width - 20, height - 150, 20, 150, "#b3b300"));
};
var bossRoom = function () {
  w = [];
  w.push(new Wall(0, 0, 150, 20, "#b3b300"));
  w.push(new Wall(width - 150, 0, 150, 20, "#b3b300"));
  w.push(new Wall(0, 0, 20, height, "#b3b300"));
  w.push(new Wall(0, height - 20, width, 20, "#b3b300"));
  w.push(new Wall(width - 20, 0, 20, height, "#b3b300"));

};
var swordRoom = function () {
  w = [];
  w.push(new Wall(0, 0, width, 20, "#b3b300"));
  w.push(new Wall(0, 0, 20, 150, "#b3b300"));
  w.push(new Wall(0, height - 150, 20, 150, "#b3b300"));
  w.push(new Wall(0, height - 20, width, 20, "#b3b300"));
  w.push(new Wall(width - 20, 0, 20, height, "#b3b300"));
};
var keyRoom = function () {
  w = [];
  w.push(new Wall(0, 0, width, 20, "#b3b300"));
  w.push(new Wall(0, 0, 20, height, "#b3b300"));
  w.push(new Wall(0, height - 20, width, 20, "#b3b300"));
  w.push(new Wall(width - 20, 0, 20, 150, "#b3b300"));
  w.push(new Wall(width - 20, height - 150, 20, 150, "#b3b300"));
};
var dragonRoom = function () {
  w = [];
  w.push(new Wall(0, 0, width, 20, "#b3b300"));
  w.push(new Wall(0, 0, 20, height, "#b3b300"));
  w.push(new Wall(0, height - 20, 150, 20, "#b3b300"));
  w.push(new Wall(width - 150, height - 20, 150, 20, "#b3b300"));
  w.push(new Wall(width - 20, 0, 20, height, "#b3b300"));
};
var blankRoom = function () {
  w = [];
  w.push(new Wall(75, 75, 200, 200, "pink"));
}; //end blankRoom
