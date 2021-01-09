
var monkey , monkey_running;
var banana ,bananaImage,bananaGroup;
var obstacle, obstacleImage,obstacleGroup;
var score;
var ground;
var monkey;
var survivaltime;

function preload(){
  
monkey_running=
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  monkey=createSprite(200,400)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,500,800,20);
  ground.velocityX=-2;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  survivaltime=0;
}


function draw() {
background("black")
  
  if(ground.x<300){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  obstacles();
  
  survivaltime=Math.ceil(frameCount/frameRate())
 
  stroke("white");
  textSize(20);
  fill("white");
  text("survivaltime:"+ survivaltime,450,50);
  
  drawSprites();
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(600,500,40,10);
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.lifetime=150;
    banana.scale=0.1;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
   if(frameCount%300===0){
     var obstacle=createSprite(600,480,10,30);
     obstacle.lifetime=150;
    obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.velocityX=-4;
   }
}






