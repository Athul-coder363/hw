class Paper{
    contructor(x,y,radius,options,angle){
        var options={
        isStatic: false,
        restitution: 0.3,
        density: 1.2,
        friction: 0.5
        }
       this.body=Bodies.circle(x,y,radius,options);
       World.add(world,this.body)
    }
    display(){
    // var angle = this.body.angle;
       push();
       fill("pink");
     //  translate(this.body.position.x,this.body.position.y);
      // rotate(angle)
       ellipse(56,46,55,55);
       pop();
    }
}