const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImage,character,characterImage
var snows=[]

function setup() {
  createCanvas(1200,600);
  character= createSprite(width/2,400)
  character.addImage(characterImage)
  character.scale=0.25
  engine = Engine.create();
    world = engine.world;
}

function preload(){
  backgroundImage = loadImage("snow3.jpg")
  characterImage = loadImage("character.png")
}

function draw() {
  Engine.update(engine);

  background(backgroundImage); 
  if(frameCount%60===0){
    snow = new Snow(random(10,width-10),10,50,50)
    snows.push(snow)
  }

  for (var i = 0; i < snows.length; i++) {
    snows[i].display();   
  }
  
  








  drawSprites();
}