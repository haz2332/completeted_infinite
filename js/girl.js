class Girl{
    constructor(x,y,width,height){
        var options = {
            isStatic: false
          };
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height= height;
        this.image = loadImage("./assets/girl2.png");

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var index = Math.round(random(0,1,2,3));
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }

    jump(){
        Matter.Body.applyForce(this.body,{x:0,y:0},{x:0.5,y:-0.5}) 
       
    }


}
    
    
