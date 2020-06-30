const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles = [];
var plinkos = [];
var divisions = [];

var Score = 0;

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k<=width; k=k+80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));

  }

   gr = new Ground(250,750,800,5)
   //p = new Particle(240,10,10)
   gr1 = new Ground(250,775,800,5)
   gr2 = new Ground(250,795,800,5)



  for (var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75,10));
   
  }

  for (var j = 15; j<=width - 10; j=j+50)
  {
    plinkos.push(new Plinko(j,175,10));
  }
  for (var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275,10));
   
  }

  for (var j = 15; j<=width - 10; j=j+50)
  {
    plinkos.push(new Plinko(j,375,10));
  }
  /*
  particlesgfp1 = new Particle(240,10,10) 
  particlesgrp2 = new Particle(240,10,10) 
  particlesgfp3 = new Particle(240,10,10) 
  particlesgrp4 = new Particle(240,10,10) 
  particlesgfp5 = new Particle(240,10,10) 
  particlesgrp6 = new Particle(240,10,10) 
  particlesgfp7 = new Particle(240,10,10) 
  particlesgrp8 = new Particle(240,10,10) 
  particlesgfp9 = new Particle(240,10,10) 
  particlesgrp10 = new Particle(240,10,10) 
  particlesgfp11 = new Particle(240,10,10) 
  particlesgrp12 = new Particle(240,10,10) 
  particlesgfp13 = new Particle(240,10,10) 
  particlesgrp14 = new Particle(240,10,10) 
  particlesgfp15 = new Particle(240,10,10) 
  particlesgrp16 = new Particle(240,10,10) 
  particlesgfp17 = new Particle(240,10,10) 
  particlesgrp18 = new Particle(240,10,10) 
  particlesgfp19 = new Particle(240,10,10) 
  particlesgrp20 = new Particle(240,10,10) 
  particlesgfp21 = new Particle(240,10,10) 
  particlesgrp22 = new Particle(240,10,10) 
  particlesgfp23 = new Particle(240,10,10) 
  particlesgrp24 = new Particle(240,10,10) 

  particlesgfp111 = new Particle(240,10,10) 
  particlesgrp211 = new Particle(240,10,10) 
  particlesgfp311 = new Particle(240,10,10) 
  particlesgrp411 = new Particle(240,10,10) 
  particlesgfp511 = new Particle(240,10,10) 
  particlesgrp611 = new Particle(240,10,10) 
  particlesgfp711 = new Particle(240,10,10) 
  particlesgrp811 = new Particle(240,10,10) 
  particlesgfp911 = new Particle(240,10,10) 
  particlesgrp1011 = new Particle(240,10,10) 
  particlesgfp1111 = new Particle(240,10,10) 
  particlesgrp1211 = new Particle(240,10,10) 
  particlesgfp1311 = new Particle(240,10,10) 
  particlesgrp1411 = new Particle(240,10,10) 
  particlesgfp1511 = new Particle(240,10,10) 
  particlesgrp1611 = new Particle(240,10,10) 
  particlesgfp1711 = new Particle(240,10,10) 
  particlesgrp1811 = new Particle(240,10,10) 
  particlesgfp1911= new Particle(240,10,10) 
  particlesgrp2011 = new Particle(240,10,10) 
  particlesgfp2111 = new Particle(240,10,10) 
  particlesgrp2211 = new Particle(240,10,10) 
  particlesgfp2311 = new Particle(240,10,10) 
  particlesgrp2411 = new Particle(240,10,10) 

  particlesgfp1w = new Particle(240,10,10) 
  particlesgrp2w = new Particle(240,10,10) 
  particlesgfp3w = new Particle(240,10,10) 
  particlesgrp4w = new Particle(240,10,10) 
  particlesgfp5w = new Particle(240,10,10) 
  particlesgrp6w = new Particle(240,10,10) 
  particlesgfp7w = new Particle(240,10,10) 
  particlesgrp8w = new Particle(240,10,10) 
  particlesgfp9w = new Particle(240,10,10) 
  particlesgrp10w = new Particle(240,10,10) 
  particlesgfp11w = new Particle(240,10,10) 
  particlesgrp12w = new Particle(240,10,10) 
  particlesgfp13w = new Particle(240,10,10) 
  particlesgrp14w = new Particle(240,10,10) 
  particlesgfp15w = new Particle(240,10,10) 
  particlesgrp16w = new Particle(240,10,10) 
  particlesgfp17w = new Particle(240,10,10) 
  particlesgrp18w = new Particle(240,10,10) 
  particlesgfp19w = new Particle(240,10,10) 
  particlesgrp20w = new Particle(240,10,10) 
  particlesgfp21w = new Particle(240,10,10) 
  particlesgrp22w = new Particle(240,10,10) 
  particlesgfp23w = new Particle(240,10,10) 
  particlesgrp24w = new Particle(240,10,10) 

  particlesgfp111w = new Particle(240,10,10) 
  particlesgrp211w = new Particle(240,10,10) 
  particlesgfp311w = new Particle(240,10,10) 
  particlesgrp411w = new Particle(240,10,10) 
  particlesgfp511w = new Particle(240,10,10) 
  particlesgrp611w = new Particle(240,10,10) 
  particlesgfp711w = new Particle(240,10,10) 
  particlesgrp811w = new Particle(240,10,10) 
  particlesgfp911w = new Particle(240,10,10) 
  particlesgrp1011w = new Particle(240,10,10) 
  particlesgfp1111w = new Particle(240,10,10) 
  particlesgrp1211w = new Particle(240,10,10) 
  particlesgfp1311w = new Particle(240,10,10) 
  particlesgrp1411w = new Particle(240,10,10) 
  particlesgfp1511w = new Particle(240,10,10) 
  particlesgrp1611w = new Particle(240,10,10) 
  particlesgfp1711w = new Particle(240,10,10) 
  particlesgrp1811w = new Particle(240,10,10) 
  particlesgfp1911w = new Particle(240,10,10) 
  particlesgrp2011w = new Particle(240,10,10) 
  particlesgfp2111w = new Particle(240,10,10) 
  particlesgrp2211w = new Particle(240,10,10) 
  particlesgfp2311w = new Particle(240,10,10) 
  particlesgrp2411w = new Particle(240,10,10) 

*/

  

  




  
  

  if(particles.x>50){
    particles.push(new Particle(240,10,10));

  }

 //random(width/2 -10, width/2+10)
 // ground = new Ground(240,795,479,10);


  Engine.run(engine);
}

function draw() {
  background("black");  
  
  for (var j = 0; j< particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k< divisions.length; k++){
    divisions[k].display();
  }
  
  for (var i = 0; i< plinkos.length; i++){
    plinkos[i].display();
  }
  
/*
  particlesgfp1.display(); 
  particlesgrp2.display();
  particlesgfp3.display();
  particlesgrp4.display();
  particlesgfp5.display();
  particlesgrp6.display();
  particlesgfp7.display();
  particlesgrp8.display();
  particlesgfp9.display();
  particlesgrp10.display(); 
  particlesgfp11.display(); 
  particlesgrp12.display();
  particlesgfp13.display();
  particlesgrp14.display();
  particlesgfp15.display();
  particlesgrp16.display();
  particlesgfp17.display();
  particlesgrp18.display();
  particlesgfp19.display();
  particlesgrp20.display();
  particlesgfp21.display();
  particlesgrp22.display();
  particlesgfp23.display();
  particlesgrp24.display();

  particlesgfp111.display();
  particlesgrp211.display();
  particlesgfp311.display();
  particlesgrp411.display();
  particlesgfp511.display();
  particlesgrp611.display();
  particlesgfp711.display();
  particlesgrp811.display();
  particlesgfp911.display();
  particlesgrp1011.display();
  particlesgfp1111.display();
  particlesgrp1211.display();
  particlesgfp1311.display();
  particlesgrp1411.display();
  particlesgfp1511.display();
  particlesgrp1611.display();
  particlesgfp1711.display();
  particlesgrp1811.display();
  particlesgfp1911.display();
  particlesgrp2011.display();
  particlesgfp2111.display();
  particlesgrp2211.display();
  particlesgfp2311.display();
  particlesgrp2411.display();
*/
  gr.display();
  gr1.display();
  gr2.display();

  //p.display();
/*
  particlesgfp1w.display(); 
  particlesgrp2w.display();
  particlesgfp3w.display();
  particlesgrp4w.display();
  particlesgfp5w.display();
  particlesgrp6w.display();
  particlesgfp7w.display();
  particlesgrp8w.display();
  particlesgfp9w.display();
  particlesgrp10w.display(); 
  particlesgfp11w.display(); 
  particlesgrp12w.display();
  particlesgfp13w.display();
  particlesgrp14w.display();
  particlesgfp15w.display();
  particlesgrp16w.display();
  particlesgfp17w.display();
  particlesgrp18w.display();
  particlesgfp19w.display();
  particlesgrp20w.display();
  particlesgfp21w.display();
  particlesgrp22w.display();
  particlesgfp23w.display();
  particlesgrp24w.display();

  particlesgfp111w.display();
  particlesgrp211w.display();
  particlesgfp311w.display();
  particlesgrp411w.display();
  particlesgfp511w.display();
  particlesgrp611w.display();
  particlesgfp711w.display();
  particlesgrp811w.display();
  particlesgfp911w.display();
  particlesgrp1011w.display();
  particlesgfp1111w.display();
  particlesgrp1211w.display();
  particlesgfp1311w.display();
  particlesgrp1411w.display();
  particlesgfp1511w.display();
  particlesgrp1611w.display();
  particlesgfp1711w.display();
  particlesgrp1811w.display();
  particlesgfp1911w.display();
  particlesgrp2011w.display();
  particlesgfp2111w.display();
  particlesgrp2211w.display();
  particlesgfp2311w.display();
  particlesgrp2411w.display();

  if(particlesgfp1.y>600 && particlesgfp1.x>300){
    Score=Score+1;
  }

  */
 
 if(frameCount%1==0){
  particles.push(new Particle(240,10,10));

}



 fill("white")
 text("SCORE",100,100);
 text(Score,150,100);

 if(2>1){
  Score = Score +1 ;
}
  
  drawSprites();
}