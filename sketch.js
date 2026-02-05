let balloons = []
function setup() {
  createCanvas(400, 400);
  for (let i=0; i<22; i++){
    balloons.push(new balloon());
  }
  
}

function draw() {
  background(220);
  for (let b of balloons){
    b.draw();
  }
}

function balloon() {
this.x = random(0, width);
  this.y = 0;
  colorMode(HSB)
  this.hue = random(0,255)
  this.color ="red";
  this.speed = random (0,5,4);
  this.draw = function (){
    fill(this.hue,255,255);
    circle(this.x, this.y, 50);
    if (this.y < height) { this.y = this.y + this.speed;
      this.speed+=0.25;
     
    }
  }




}