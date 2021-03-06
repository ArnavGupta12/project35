var balloon, balloonImage, bgImage


function preload(){
  balloonImage = loadImage("images/balloon.png")
  bgImage = loadImage("images/bg.png")
}


function setup() {
  createCanvas(displayWidth, displayHeight);
 balloon = createSprite(400, 200, 50, 50);
 balloon.addImage("balloon", balloonImage)
}

function draw() {
  background(bgImage);  

  if (keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }

  
  if (keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  }
  
  
  if (keyDown(UP_ARROW)){
    balloon.y = balloon.y-10
  }
  
  
  if (keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
  }
  

    
  drawSprites();

}