let x;
let p;
let w = [];
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"blue")
  createWalls();
  checkForCollission();
}

function draw() {
  background(102,255,255);
  for(var i =0 ; i < w.length ; i++){
    w[i].display()
  }
  
  p.display();
  p.update();
}
function createWalls(){
  w.push(new Wall(100,100,300,20,"pink"))
  w.push(new Wall(100,300,300,20,"white"))
}

function checkForCollission() {
  for (var i = 0; i < walls.length; i++) {

    //check if we hit the left of any wall
    if (p.y <= walls[i].y + walls[i].h && p.y + p.h >= walls[i].y && p.x <= walls[i].x + walls[i].w && p.x >= walls[i].x) {
      p.x += 5
    }//end if

    //check if we hit the right of any wall
    if (p.y <= walls[i].y + walls[i].h && p.y + p.h >= walls[i].y && p.x + p.w >= walls[i].x && p.x <= walls[i].x + walls[i].w) {
      p.x -= 5
    }//end if


    if (p.x <= walls[i].x + walls[i].w && p.x + p.w >= walls[i].x && p.y <= walls[i].y + walls[i].h && p.y >= walls[i].y) {
      p.y += 5;
    }//end if

    //check if we hit the top of any wall
    if (p.x <= walls[i].x + walls[i].w && p.x + p.w >= walls[i].x && p.y + p.h >= walls[i].y && p.y <= walls[i].y + walls[i].h) {
      p.y -= 5;
    }//end if

  }//end for loop
}//end function checkForCollission

