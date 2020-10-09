var survivaltime = 0;
  var monkey ,monkey_running;
  var banana ,bananaImage, bananas, obstacle, obstacleImage, obstacles;
  var score;

  function preload(){


  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  }



  function setup() {
  createCanvas(400,400);  
  ground = createSprite(200,360,800,1);

  monkey = createSprite(30,330,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;

  

  
    
  bananas = new Group();  
  obstacles = new Group();  
    
  }


  function draw() {
  background(220);
  survivaltime = Math.ceil(frameCount/getFrameRate());



  

  if(ground.x <= 0){
  ground.x = ground.width/2;  
  }   

  if(keyDown("space") && monkey.y >= 325){
  monkey.velocityY = -16;

  } 
  monkey.velocityY = monkey.velocityY+0.8;

  monkey.collide(ground);

  if(monkey.isTouching(obstacles)){

  }
  rocks();   

  fruits();
    
  drawSprites();
  text("survival time:"+survivaltime,200,100);
  }

  function rocks(){
  if(frameCount%300 === 0){
  obstacle = createSprite(400,340,10,10);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5;  
  obstacles.add(obstacle);
  obstacles.setLifetimeEach(100);

  }  



  }

function fruits(){
if(frameCount % 220 === 0){
banana = createSprite(400,random(280,200),10,10);
banana.addImage("banana",bananaImage);  
banana.scale = 0.1;
banana.velocityX = -5;
bananas.setLifetimeEach(100);
bananas.add(banana);

if(monkey.isTouching(bananas)){
bananas.destroyEach();
score = score + 1;  
}    
}  
}
  



