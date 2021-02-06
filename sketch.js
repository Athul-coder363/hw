
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbin;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(400,350,2)
	dustbin = new Dustbin(600,500,200,20)
    ground = new Ground(200,480,1200,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 // paper1.collide(ground);
   paper1.display();
   ground.display();
   dustbin.display();
   console.log(paper1.body);
  
  drawSprites();
 
}
function keypressed(){
	if(keyCode === UP_ARROW){
  //  Matter.body.applyForce(paper1.body,paper1.body.position,{x:85 y: -85})
	}
}



