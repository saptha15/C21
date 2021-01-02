var fixedRect, movingRect;

var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(100,200,40,20);
  car.shapeColor="yellow";
  car.velocityX=5;

  wall=createSprite(1000,100,20,500);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(car,wall)){
 car.shapeColor="blue";
 }
 else{
   car.shapeColor="yellow";
 }

collide(car,wall);
 

  drawSprites();
}

