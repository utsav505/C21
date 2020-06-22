var thickness,wall;
var bullet,speed,weight;
var count;
var divide;
var damage;
var bulletEdge;
var wallEdge;

function setup() {
  createCanvas(1600,400);
 
  speed = random(223,321);
  weight = random(30,52); 
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 50);

  count = 0.5*weight*speed*speed;
  divide = thickness*thickness*thickness;

  bullet.velocityX = (speed);

  wall =  createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);

  damage = count/divide;

  console.log(damage);
}

function draw() {
  background(255,255,255);  
  
  if (hasCollided(bullet,wall)) {
  
    bullet.velocityX = 0;
    
      if (damage >10 ) {
        wall.shapeColor = rgb (255,0,0);     
      }
    
      if  (damage<10) {
        wall.shapeColor=rgb(0,255,0);
      } 
      
    
  }
  drawSprites();
}

function hasCollided(a,b) {
  bulletEdge = a.x + a.width;
  wallEdge = wall.x;

  if (bulletEdge>=wallEdge) {
    return true;
  }
  return false;

  }



