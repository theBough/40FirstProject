let x;
let p;
let w = [];
let room = 1;
let k;

function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"blue");
  k = new Key(300,250, 20,20);
  drawRoomOne();
}
function draw() {
  background("#db712a");
  for(var i =0 ; i < w.length ; i++){
    w[i].display()
  }
  p.display();
  p.update();
  k.display();
  checkForRoomChange();
  checkForCollission();
}




