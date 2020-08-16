
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1150,530 );


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new dround(575,500,1200,20);
	ground2 = new dround(575,300,200,20);
	ground3 = new dround(1000,200,200,20);
	gr = new dround(100,100,20,20);




	balll=new  Box(0,0,20,20);
	
	box=new Box1(575,200,30,30);
	box2=new Box1(540,200,30,30);
	box3=new Box1(505,200,30,30);
	box4=new Box1(610,200,30,30);
	box5=new Box1(645,200,30,30);
	box6=new Box1(520,100,30,30);
	box7=new Box1(560,100,30,30);
	box8=new Box1(590,100,30,30);
	box9=new Box1(620,100,30,30);
	box10=new Box1(535,50,30,30);
	box11=new Box1(565,50,30,30);
	box12=new Box1(595,50,30,30);
	box13=new Box1(550,30,30,30);
	box14=new Box1(580,30,30,30);
	box15=new Box1(565,10,30,30);

	box16=new Box1(1000,100,30,30);
	box17=new Box1(965,100,30,30);
	box18=new Box1(1035,100,30,30);
	box19=new Box1(1070,100,30,30);
	box20=new Box1(980,50,30,30);
	box21=new Box1(1010,50,30,30);
	box22=new Box1(1040,50,30,30);
	box23=new Box1(995,30,30,30);
	box24=new Box1(1025,30,30,30);
	box25=new Box1(1010,10,30,30);

	Engine.run(engine);
	
	chain = new Chain(balll.body,gr.body);
 
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  balll.display();

  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();


  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  ground.display();
  ground2.display();
  ground3.display();
  gr.display();

  chain.display();
  
 

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(balll.body, {x: mouseX , y : mouseY});
}


function mouseReleased(){
	chain.fly;
}


