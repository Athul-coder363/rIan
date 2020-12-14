const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var ground,ball;
 var myworld,myEngine;
function setup() {
  createCanvas(600,600);
  myEngine=Engine.create();
  //myworld is myengine's world
  myworld=myEngine.world;
  var options={
    isStatic:true
  }
ground=Bodies.rectangle(200,480,500,10,options);
//myWorld=myEngine.World;
World.add(myworld,ground)
console.log(ground);
var vOption={
  restitution:1.0
}
ball=Bodies.circle(200,300,25,vOption);
World.add(myworld,ball);
  //createSprite(400, 400, 50, 50);
}

function draw() {
  background("black");  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,10,);
  ellipse(ball.position.x,ball.position.y,25,25);
  drawSprites();
}