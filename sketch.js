let x;
let p;
let w;
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"blue")
  w = new Wall(100,100,300,20,"pink")
}

function draw() {
  background(102,255,255);
  w.display()
  p.display();
  p.update();
}
