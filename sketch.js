const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var city;
var hotel;
var school;
var shop;
var coins;
var girl;
var background1;
var schools=[]
var obstacle
var obstaclesgroup
var gameState = 0
var score=1

function preload(){
    backgroundImg = loadImage("./assets/city.png")
    schoolImg = loadImage("./assets/building.png")
    hotelImg = loadImage("./assets/hotel.png")
    coinsImg = loadImage ("./assets/goldCoin.png")
    girlImg = loadImage("./assets/girl2.png")
    shopImg = loadImage("./assets/School-building.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  background1.addImage(backgroundImg)
  background1.setVelocity(-0.5,0) 
  background1.scale= 3
engine = Engine.create();
  world = engine.world;


school1 = new School(windowWidth-150,windowHeight-15,400,800)
obstaclesgroup = new Group()
girl = createSprite(100,windowHeight-80,120,140)
girl.addImage(girlImg)
girl.scale=0.2

ground = createSprite(windowWidth/2,windowHeight-10,windowWidth,20)

}

function draw(){
    background(backgroundImg)
    drawSprites()
    textSize(20)
    text("Timer: "+score,80,80)

    if(background1.position.x<550){
      background1.position.x =windowWidth/2
    }
    
   
    if(keyDown("SPACE")&&(gameState===0)){
      girl.setVelocity(0,-6)
    }
    else{
      girl.setVelocity(0,2.5)
    }
    console.log(girl.position.y)
    Engine.update(engine);
    
    spawnobstacles()
    
    if(obstaclesgroup.overlap(girl)){
      swal({ title: `Game Over`, 
        text: "Oops you lost the game...!!!", 
        imageUrl: "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png", 
        imageSize: "100x100", 
        confirmButtonText: "Thanks For Playing" }); 
        girl.setVelocity(0,0)
        background1.setVelocity(0,0)
        obstaclesgroup.destroyEach()
        gameState=1
      }
        
        girl.collide(ground)
        if(gameState===0){
          score=Math.round(frameCount/100) 
        }
      }
      
    
   



    function spawnobstacles(){
    if(frameCount%300===0){
      obstacle= createSprite(windowWidth,windowHeight-70,20,50)
      obstacle.scale=0.5     
      obstacle.lifetime=320 
      rand=Math.round(random(1,6))
      obstaclesgroup.add(obstacle)
      obstacle.setVelocity(-2,0)
      switch(rand){
  
        case 1:
          obstacle.addImage(schoolImg)
          break;
  
        case 2:
        obstacle.addImage(schoolImg)
        break;
  
       case 3:
         obstacle.addImage(shopImg)
        break;
  
        case 4:
        obstacle.addImage(shopImg)
        break;
  
        case 5:
        obstacle.addImage(hotelImg)
        break; 
                  
        case 6:
        obstacle.addImage(hotelImg)
        break;
  
        default:
          break;
            
      }
      obstacle.depth=girl.depth
    }
  }

 