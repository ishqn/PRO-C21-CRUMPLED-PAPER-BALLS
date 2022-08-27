
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}
ball=Bodies.circle(100,200,20,ball_options)
	World.add(world,ball)
	ground=new Ground(width/2,670,width,20)
	ground2=new Ground(1100,600,20,120)
	ground3=new Ground(1300,600,20,120)
	Engine.run(engine);
	
  
}


function draw(){
  background("teal");
  ground.show()
ground2.show()
ground3.show
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}



