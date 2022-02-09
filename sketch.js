let x;
let p;
let w = [];
function setup() {
  createCanvas(400, 400);
  p = new Player(200,200,10,10,"blue")
  createWalls();
  
}
function draw() {
  background(102,255,255);
  for(var i =0 ; i < w.length ; i++){
    w[i].display()
  }
  
  p.display();
  p.update();
  checkForRoomChange();
  checkForCollission();
}
function checkForRoomChange(){
  //this is going to check if the player hits
  //the edge of the canvas.
  if(p.y < 0){
    //The player has gone off the top of the canvas
    p.y = height;
  }//end if
}//end checkForRoomChange
function createWalls(){
  w.push(new Wall(100,100,300,20,"pink"))
  w.push(new Wall(100,300,300,20,"white"))
}

function checkForCollission() {
  for (var i = 0; i < w.length; i++) {

    //check if we hit the left of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x <= w[i].x + w[i].w && p.x >= w[i].x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x + p.w >= w[i].x && p.x <= w[i].x + w[i].w) {
      p.x -= 5
    }


    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y <= w[i].y + w[i].h && p.y >= w[i].y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y + p.h >= w[i].y && p.y <= w[i].y + w[i].h) {
      p.y -= 5;
    }

  }
}

