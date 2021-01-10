class Particle{
    constructor(x,y){
    var option={
        friction:0.5,
        restitution:0.1
    }
    this.body=Bodies.circle(x,y,10,option);
    this.r=10;
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
}

display(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    ellipseMode(RADIUS);
    translate(pos.x,pos.y);
    rotate(angle);
    fill(this.color);
    ellipse(0,0,this.r);
    pop();
}
}