
//Obs: confundi os projetos, esse é o 2, e o outro é o 1;

var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;

var divisionHeight=300;
var score =0;

var jogadas = 0;
var GS = "YG";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  text("Jogadas : "+jogadas,590,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();

  //400
  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }

  if(GS === "YG") {
    if(ball!=null)
    {
       ball.display();

      if(ball.body.position.y > 760) {
       
       if(ball.body.position.x < 300) {

        score = score+500;

        jogadas = jogadas+1;

        ball = null;

        if(jogadas >= 5) { GS = "NG" }

       }
     }
    }

    if(ball != null){
     if(ball.body.position.y > 760) {
       
      if(ball.body.position.x > 301 && ball.body.position.x < 600) {

       score = score+100;

       jogadas = jogadas+1;

       ball = null;

       if(jogadas >= 5) { GS = "NG" }

      }
    }
  }

    if(ball != null) {
      if(ball.body.position.y > 760) {
       
      if(ball.body.position.x > 601 && ball.body.position.x < 800) {

       score = score+200;

       jogadas = jogadas+1;

       ball = null;

       if(jogadas >= 5) { GS = "NG" }

      }
    }
  }

  

}
   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
   
   if(GS === "NG") {

    fill("red");
    textSize(100);
    text("GAME OVER",100,260);
    fill("yellow");
    textSize(30);
    text("SUA PONTUAÇÃO FOI DE: "+score ,160,310);
    fill("white");

  }
   
}


function mousePressed()
{
  if(GS === "YG") {
  ball=new Ball(mouseX, 10, 10, 10);
  }
}

