class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.baseImage = loadImage("assets/cannon_base.png")
    this.cannonImage = loadImage("assets/CANON.png")
  }
  display() {
    console.log(this.angle)
    if(keyIsDown(RIGHT_ARROW)&&this.angle<0.75){
      this.angle += 0.02
    }
    if(keyIsDown(LEFT_ARROW)&&this.angle>-1.5){
      this.angle -= 0.02
    }
    // change the angle in the upward direction when the left arrow key was pressed
   //  changed the angle in the downward direction when the right arrow key was pressed
    fill("#676e6a");
    
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER)
    image(this.cannonImage,0, 0, this.width, this.height);
    pop();
    push()
    imageMode(CENTER)
    //arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    image(this.baseImage,this.x -20, this.y +10, 200, 200)
    noFill();
    pop()
    
  }
}
