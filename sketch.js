var PLAY=1;   
var END=0;    
var gameState=Play
var monkey , monkey_running
var bananaGroup ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,invisibleGround
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 200);
  
  monkey=createSprite(50,160,20,50)
monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  bananaGroup=createGroup();

  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true;
}


function draw() {
background(255);
  
   if(gameState === PLAY){      
     
     // gdoihjdjhijdzhffhfh   
     
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
  
  
  if (frameCount % 120 === 0){
   var obstacle = createSprite(600,165,10,40);      
    obstacle.addImage("obstacle",obstaceImage)   
    obstacle.scale=0.1                                    
     var rand = Math.round(random(1,6));
    obstacle.velocityX = -4;
  }
  
     
     bananaGroup();
     
     
  
   }
  
   else if (gameState === END) {
  
  
  
   }
   drawSprites();

  
}


function spwanbanana() {                   

  var banana=createrSprite(600,50,40,10);
banana.y=Math.round(random(50,80));
banana.addImage( bananaImage);
banana.scale=0.7;
banana.velocityX=-3;
banana.lifetime=200

 //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    

bananaGroup.add(banana);

}




