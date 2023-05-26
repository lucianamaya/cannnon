
class Tower {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true
//set the static body(challenge 2)
      
      };
      this.image=loadImage("assets/tower.png");
this.width = width;
    this.height = height;
    this.body=Bodies.rectangle(x,y,this.width,this.height, options);
    World.add(world,this.body);
    }
display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
//display the rect function (challenge 3)
  pop();
  }
}
