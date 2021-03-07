class Bob{
    constructor(x,y){
        var options ={
            isStatic:false,
            'restitution':0.3,        
            'friction':0.5,
            'desnsity':1.2
        }
        this.body=Matter.Bodies.circle(x,y,50,options);
        this.width=100;
        this.height=100;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("black");
        translate(pos.x,pos.y);
        ellipseMode(CENTER)
        circle(0,0,this.wdith,this.height);
        pop();
    }


}