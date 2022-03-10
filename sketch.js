//variable declarations
let x;
let p;
let w = [];
let rooms = [];
let k;
let gateOneClosed = true;
let row, column;
let e;

function setup() {
  createCanvas(400, 400);
  fillRooms();
  p = new Player(200, 200, 10, 10, "blue");
   k = new Key(100, 300, 10, 10, keyRoom);
  e = new Enemy(200,200,20,20);
  //set row and column to the starting point in
  //array, of your game
  row = 1;
  column = 1;
  rooms[row][column].call();
}
function draw() {
  background("#db712a");
    
  for (var i = 0; i < w.length; i++) {
    w[i].display();
  }
  p.display();
  p.update();
  k.display();
  k.keyCollision();
  e.display();
  //this is calling the function to draw a romm
  //from the array 'rooms'

  checkForRoomChange();
  rooms[row][column].call();
  checkForCollission();
}
