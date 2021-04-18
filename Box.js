class Box  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.04
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
  var angle = this.body.angle;
  /*
 "push", whenever a new value is assigned to an object it pops out 
  he previous value and pushes in the new value.
  */
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("yellow")
  rect( 0, 0, this.width, this.height);
  pop();
}
};
