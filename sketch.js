const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, tri;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options ={
        restitution: 1,
        density: 1.5
    }

    var tris_options ={
        restitution: 1.4,
        density: 1.5
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,200,15,ball_options);
    World.add(world,ball);

    tri = Bodies.polygon(100,200,3,20,tris_options);
    World.add(world,tri)

    console.log(tri);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,15,15);
    triangle(tri.vertices[0].x,tri.vertices[0].y,tri.vertices[1].x,tri.vertices[1].y,tri.vertices[2].x,tri.vertices[2].y)
}