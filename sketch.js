//i did only what the instructions said, was i
//supposed to add things that werent included in the
//instructions as well?

var monkey;
var monkeyRunning;
var bananaImage;
var obstacleImage;
var obstacleGroup;
var bg;
var backImage;
var score;
var ground;
var foodGroup;

function preload() {
  backImage = loadImage("jungle.jpg");
  monkeyRunning = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  textSize(20);
  
  bg = createSprite(200,200,400,400);
  bg = addImage(backImage);
  
  monkey.createSprite(50,180,20,50);
  monkey.addAnimation(monkeyRunning);
  monkey.scale = 0.2;
  
  ground = createSprite(200,180,400,20);
  ground.visible = false;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(0);
  
  if (bg.x < 0){
      bg.x = ground.width/2;
    }
  
  if(foodGroup.isTouching(monkey)){
    score = score + 2;
    foodGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
  }
  
  switch(score) {
    case 10: monkey.scale = 0.12
      break;
    case 20: monkey.scale = 0.14
      break;
    case 30: monkey.scale = 0.16
      break;
    case 40: monkey.scale = 0.18
      break;
    default: break;
      
  }
  
  drawSprites();
  
  fill("white");
  text("score", score, 500,50)
}