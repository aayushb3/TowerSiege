const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform, projectile;
var slingshot,ball;
var stand,ground;

function setup(){

      createCanvas(800, 800);
      rectMode(CENTER);
    
      engine = Engine.create();
      world = engine.world;
      Engine.run(engine);
    ball = new Ball(100,100);
    box1 = new Box(400,400);
    box2 = new Box(350 ,400);
    box3 = new Box(300,400);
    box4 = new Box(250,400);
    box5 = new Box(450,400);
    box6 = new Box(500,400);
    box7 = new Box(550,400);
    box8 = new Box(300,350);
    box9 = new Box(350,350);
    box10 = new Box(400,350);
    box11= new Box(450,350);
    box12 = new Box(500,350);
    box13 = new Box(450,300);
    box14 = new Box(400,300);
    box15 = new Box(350,300);
    box16 = new Box(400,250);
    // box17 = new Box(500,360,20,30);
    // box19 = new BlueBox(500,360,20,30);
    // box20 = new BlueBox(500,360,20,30);
    // box21 = new BlueBox(500,360,20,30);
    // box21 = new BlueBox(500,360,20,30);
    // box22 = new BlueBox(500,360,20,30);
    // box23 = new BlueBox(500,360,20,30);
    // box24 = new BlueBox(500,360,20,30);
    // box25 = new BlueBox(500,360,20,30);
    // box26 = new BlueBox(500,360,20,30);
    // box27 = new BlueBox(500,360,20,30);
    // box28 = new BlueBox(500,360,20,30);
    // box29 = new BlueBox(500,360,20,30);
    // box30 = new BlueBox(500,360,20,30);
    // box31 = new BlueBox(500,360,20,30);
    // box32 = new BlueBox(500,360,20,30);
    // box33 = new BlueBox(500,360,20,30);
    // box34 = new BlueBox(500,360,20,30);
    // box35 = new BlueBox(500,360,20,30);
    // box36 = new BlueBox(500,360,20,30);
    // box37 = new BlueBox(500,360,20,30);
    // box38 = new BlueBox(500,360,20,30);
    // box39 = new BlueBox(500,360,20,30);

    //ball = new Ball(0,0,50);
    slingshot = new SlingShot(ball.body,{x:200,y:80});
//    ground = new Platform(400,390,800,20);
//     ground = new Platform(1400,1390,1800,120);

    //groundHovering = new Platform(550,160,200,20);
 
}
function draw(){
    background("black");
    Engine.update(engine);
    debug:true;
    ball.display();
    box1.display("blue");
    box2.display("blue");
    box3.display("blue");
    box4.display("blue");
    box5.display("blue");
    box6.display("blue");
    box7.display("blue");
    box8.display("red");
    box9.display("red");
    box10.display("red");
    box11.display("red");
    box12.display("red");
    box13.display("green");
    box14.display("green");
    box15.display("green");
    box16.display("yellow");
    // box17.display();
    // box18.display();
    // box19.display();
    // box20.display();
    // box21.display();
    // box22.display();
    // box23.display();
    // box24.display();
    // box25.display();
    // box26.display();
    // box27.display();
    // box28.display();
    // box29.display();
    // box30.display();
    // box31.display();
    // box32.display();
    // box33.display();
    // box34.display();
    // box35.display();
    // box36.display();
    // box37.display();
    // box38.display();
    // box39.display();
    //platform.display();

    slingshot.display();
    //ground.display();
    //groundHovering.display();
    //slingshot = new SlingShot(ball.body,{x:200,y:50}) 
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}

