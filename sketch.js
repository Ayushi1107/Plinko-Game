const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinkos=[]
var divisions=[]

var engine, world;

function setup() {
  createCanvas(800,800);

engine=Engine.create()
world = engine.world;
  
  for(var s=0;s<=800;s=s+120){
    divisions.push(new Division(s,800-300/2,10,300))
  }
  for(var j=40;j<=800;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for(var j1=15;j1<=800-10;j1=j1+50){
    plinkos.push(new Plinko(j1,175))
  }
  for(var j2=40;j2<=800;j2=j2+50){
    plinkos.push(new Plinko(j2,275))
  }
  for(var j3=15;j3<=800-20;j3=j3+50){
    plinkos.push(new Plinko(j3,375))
  }
  
g1=new Ground(200,800,200,10)
 




  
}

function draw() {
  background("pink");  
  Engine.update(engine)

  if(frameCount%90==0){
    particles.push(new Particle(random((800/2)-10,(800/2)+10),10))
  }
  
  for(var s1=0;s1<7;s1++){
    divisions[s1].display();
  }
  for(var c1=0;c1<particles.length;c1++){
    particles[c1].display();
  }
  for(var b1=0;d1<plinkos.length;b1++){
    plinkos[b1].display();
  }

  g1.display();



  drawSprites();
}