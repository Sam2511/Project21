
var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400); 
  
  bullet = createSprite(10,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = 70;
  


  wall = createSprite(1200,200,  thickness = random(22,83) ,height/2);
  wall.shapeColor = "white";
  speed=random(223,331);       
  weight = random(30,52);
  


}

function draw() {
  background(100,25,200);  

  if(HasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight *speed*speed/(thickness * thickness * thickness);

    
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

    
    








  drawSprites();
}

function HasCollided(lbullet,lwall){
 var bulletRightEdge = lbullet.x + lbullet.width;
 var wallLeftEdge = lwall.x;
 if(bulletRightEdge>= wallLeftEdge){
   return true;
   }else
  return false;
}























