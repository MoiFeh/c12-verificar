var trex, trex_running, edges;
var groundImage;
var cloudImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loudImage("cloudImage,jpn");
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50

ground = createSprite(200,180,400,20);
ground.addImage(groundImage);
ground.x = ground.width/2
ground.velocityX = -2;

invisibleGround = createSprite(200,185,400,10);
invisibleGround.visible = false;

var rand = Math.round(random(1,100))
console.log(rand);
}


function draw(){
  //definir a cor do plano de fundo 
  background("black");
  //registrando a posição y do trex
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -10;


  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
 spawnClouds();

  trex.collide(invisibleGround)
  drawSprites();

}
function spawnClouds(){
if (frameCount % 60 === 0){







  cloud = createSprite (600,100,40,10);
  //cloud.y = Math.round(random(1,100));
  cloud.velocityX = -3;
  cloud.addImage(cloudImage);
  cloud.scale =0.4;
}

}