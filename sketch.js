
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var invisibleGround;
var survivalTime=0;
var fruitsGroup;
var ObstaclesGroup;





function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  
  
}



function setup() {
  
  createCanvas(700,500);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("123",monkey_running );
  monkey.scale= 0.13
  
  ground=createSprite(400,350,1200,10);
  ground.velocityX=-5;
  ground.x = ground.width /3;
  
  
  invisibleGround=createSprite(80,350,100,10);
  invisibleGround.visible = true;
  
  
 
  
  
  
}


function draw() {
  
  background("skyblue");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
                      
  monkey.collide(invisibleGround);
  
  
  
  
  if(keyDown("space")) {
    monkey.velocityY=-13
    
  }
  

  fruitsGroup=new Group();
  ObstaclesGroup=new Group();
   
     
     monkey.velocityY = monkey.velocityY + 0.4
  
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+ survivalTime,100,190);
  
  
  
  
  

  
  
  
  
  
  
  
  fruits();
  obstacles();
  
  drawSprites();
  
  
}
















function fruits() {
  
  if (frameCount % 100 === 0) {
    fruit = createSprite(600,50,20,10);
    fruit.addImage("123",bananaImage);
    fruit.scale = 0.12;
    fruit.velocityX = -3;
    
     
    fruit.lifetime = 200;
    
   
    
    
   
    
    
    
   
    }
}


function obstacles(){
 if (frameCount % 100 === 0){
   var obstacle
   obstacle = createSprite(600,325,1,1);
   obstacle.scale=0.25;
   obstacle.addImage("123",obstaceImage);
   obstacle.scale=0.15;
   obstacle.velocityX = -10;
  
   
   
  obstacle.lifetime = 300;  
   
  
   
   
    
   }
}





  
  









