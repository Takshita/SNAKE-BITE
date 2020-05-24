var snap;
var rez = 20;
var food;
var w;
var h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snap= new Snap();
  foodLocation();


function foodLocation() {
   x = floor(random(w));
   y = floor(random(h));
  food = createVector(x, y);

}

}
function draw() {
  scale(rez);
  background(220);
  if (snap.eat(food)) {
    foodLocation();
  }
  snap.update();
  snap.show();


  if (snap.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
function keyPressed(){
   // if(keyCode === 32){
        snap.velocityX = 0;
        snap.velocityY = -3;
   //}
}