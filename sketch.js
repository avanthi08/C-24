const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig,log1,box3,box4,pig2,log3,log4,log5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig = new Pig(810,350);
    pig2 = new Pig(810,220);
    ground = new Ground(600,height,1200,20);
    angleMode(DEGREES);
    log1= new Log(810,260,300,90);
    log3= new Log(810,180,300,90);
    angleMode(RADIANS);
    log4= new Log(760,120,150,PI/7);
    log5= new Log(870,120,150,-PI/7);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig.display();
    pig2.display();
    log1.display();
    log3.display();
    log4.display();
    log5.display();
}