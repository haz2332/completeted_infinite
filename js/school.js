class School{
    constructor(x,y,width,height,schoolPos){
        var options = {
            isStatic: true
          };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/building.png")
        this.schoolPosition = schoolPos
    
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
    move(){
        
        Matter.Body.setVelocity(this.body, { x: -1, y: 0});
        
        
    }
    }
    
    