let x;
let p;
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"blue")
  
}

function draw() {
  background(102,255,255);
  p.display();
}
