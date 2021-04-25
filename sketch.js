const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,30)
    hammer = new Hammer(10,100);

    rubber1 = new Rubber(400,200,50,50);
    rubber2 = new Rubber(800,200,90,50);

    Cube1 = new Cube(500,400,80,80);

    Cube2 = new Cube(700,300,90,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    Cube1.display();
    Cube2.display();
}