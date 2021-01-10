const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0; 
var particle;
var count = 0;


var gameState = 'PLAY';

function preload() { 

} 

function setup() { 
createCanvas(480, 800); 
engine = Engine.create(); 
world = engine.world; 

ground= new Ground(240,730,500,10);


for(var k = 0;k<480;k=k+60){
  divisions.push(new Divison(k,580,10,divisionHeight));
}

for(var j = 50;j<430;j = j+50){
  plinkos.push(new Plinko(j,100));
}
for(var j = 50;j<430;j = j+50){
  plinkos.push(new Plinko(j,200));
}
for(var j = 50;j<430;j = j+50){
  plinkos.push(new Plinko(j, 300));
}

 

} 


function draw() { 
rectMode(CENTER); 
background("black");
Engine.update(engine);
if(particle!= null)
{
  particle.display();

  if(particle.body.position.y>760){

    if(particle.body.position.x<200)
    {
      score = score+500
      particle = null;
      if (count>= 5) gameState = 'END';
       
    }
     else if(particle.body.position.x < 480 && particle.body.position.x>301 ){
      
      score = score+100
      particle = null;
      if(count>=5){gameState = 'END'}
    }
    else if(particle.body.position.x<300 && particle.position.x>200){
      
      score = score+200
      particle = null;
      if (count>= 5) gameState = 'END';
    }
  }
  text("score"+score,50,50);
}

for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
}

for(var j = 0;j<plinkos.length;j++){
  plinkos[j].display();
}

for(var i = 0;i<particles.length;i++){
  particles[i].display();

}
textSize(30)
text("500",5,500);
text("500",65,500);
text("500",125,500);
text("200",185,500);
text("200",245,500);
text("100",305,500);
text("100",365,500);

if(gameState === 'END')
   {
     
     strokeWeight(1);
     stroke("red")
     textSize(60);
     fill("yellow")
     text("GAME OVER",200,250);
     textSize(50);
     stroke("yellow")
     text("Press Space Key to Restart",100,340)
     
   }

ground.display();
} 



function keyPressed()
{
  if(keyCode === 32)
  {
    score = 0;
    gameState = 'PLAY';
  }
}

async function fetchtime()
{
    var time = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var data = await time.json();
    console.log(data);
    var hour = data.datetime.slice(11,13);
    
}

function mousePressed()
{
  if(gameState!= 'END')
  {
    count++;
    particle = new Particle(mouseX,10);

  }
}