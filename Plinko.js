class Plinko{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,10,option);
        this.r=10;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill(255);
        ellipse(pos.x,pos.y,this.r);
    }
}