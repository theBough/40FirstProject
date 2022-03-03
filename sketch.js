let x;
let p;
let w = [];
let rooms=[];
let k;
let gateOneClosed = true;
let row, column;

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"blue");
  //k = new Key(300,250, 10,10,2);
  
  k = new Key(300,250, 10,10,2);
  //set row and column to the starting point in 
  //array, of your game
  row = 0;
  column =1;
  fillRooms();
}
function draw() {
  background("#db712a");
  for(var i =0 ; i < w.length ; i++){
    w[i].display()
  }
  p.display();
  p.update();
  k.display();
  k.keyCollision();
  //this is calling the function to draw a romm 
  //from the array 'rooms'
  
  checkForRoomChange();
  rooms[row][column].call();
  checkForCollission();
}




