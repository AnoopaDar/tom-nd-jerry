var cat,mouse,garden;
var catImg1,mouseImg1,catImg2,mouseImg2,catImg3,mouseImg3;
function preload() {
    //load the images here
    garden = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}
    
    

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,700,20,30);
    cat.scale = 0.2;
    cat.addAnimation("sitting",catImg1,catImg2);
    cat.debug = false;
    
    mouse = createSprite(100,700,50,50);
    mouse.scale = 0.2;
    mouse.addAnimation("mouseStanding",mouseImg1,mouseImg2);
    mouse.debug = false;

    
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x - mouse.x < (cat.width - mouse.width) /2){
      mouse.addAnimation("mouseSeeing",mouseImg3);
      mouse.changeAnimation("mouseSeeing");
      cat.addAnimation("catSitting",catImg3);
      cat.changeAnimation("catSitting");
      cat.velocityX = 0;

   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if(keyCode === LEFT_ARROW){
      cat.addAnimation("catMoving",catImg2);
      cat.changeAnimation("catMoving");
      cat.frameDelay = 25;
      cat.velocityX = -5;
  }


}
