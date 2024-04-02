const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower;

var r=[1,3,5]
console.log(r)
console.log(r[1])

r.push(10)
console.log(r)

r.pop();
console.log(r)

var balls=[];



function preload() {

 backgroundImage=loadImage("./assets/background.gif")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angle=-PI/4

  tower= new Tower (100,200,160,310)

  cannon=new Cannon (180,110,100,50,angle)

  cannonBall=new CannonBall(cannon.x,cannon.y)

  boat= new Boat(width,height-100,200,200,-100)
 
  
  
 
}

function draw() {
  background(189);
 image (backgroundImage,0,0,width,height);
  Engine.update(engine);
  Matter.Body.setVelocity(boat.body,{
    x:-0.9,
    y:0
  });

  tower.display();
  cannon.display();
  //cannonBall.display();
  boat.display();

  for(var i=0;i<balls.length;i++){
    showCannonBalls(balls[i],i)
  }

  
   
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot()
  }
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    var cannonBall=new CannonBall (cannon.x,cannon.y)
    balls.push(cannonBall)
  }
}

function showCannonBalls(ball,index){
  ball.display();
  if(ball.body.position.x>width || ball.body.position.y>=height-50){
    Matter.World.remove(world,ball.body);
    balls.splice(index,1)
  }

}

