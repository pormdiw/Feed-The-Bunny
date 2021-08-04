var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var orangeImg;
var redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
 
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){

    if(select_sprites == 1){
      spawnApples();
    }
    else{
      spawnLeaves();
    }
  }
   
  drawSprites();
}

function spawnApples(){
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
  apple.scale = 0.06;
  apple.velocityY = 3;
  apple.lifetime = 150;
}
function spawnOrangeLeaves(){
  orangeLeaves = createSprite(random(50,350),40,10,10)
  orangeLeaves.addImage(orangeImg);
  orangeLeaves.scale = 0.06;
  orangeLeaves.velocityY = 3;
  orangeLeaves.lifetime = 150;
}
function spawnRedLeaves(){
  redLeaves = createSprite(random(50,350),40,10,10)
  redLeaves.addImage(redImg);
  redLeaves.scale = 0.06;
  redLeaves.velocityY = 3;
  redLeaves.lifetime = 150;
}
function spawnLeaves(){
  redLeaves = createSprite(random(50,350),40,10,10)
  redLeaves.addImage(leafImg);
  redLeaves.scale = 0.06;
  redLeaves.velocityY = 3;
  redLeaves.lifetime = 150;  
}


