var Vx=30;
var Vy=0;
var Sx=0;
var Sy=0;
var Fx=0;
var Fy=0;
var audiooname=new Audio();
audiooname.src="snake.mp3";

document.onkeydown=divDir;
function divDir(e)
{
  if(e.keyCode==37)
  {
    Vx=-30;
    Vy=0;
  }
  else if(e.keyCode==38)
  {
    Vx=0;
    Vy=-30;
  }
  else if(e.keyCode==39)
  {
    Vx=30;
    Vy=0;
  }
  else if(e.keyCode==40)
  {
    Vx=0;
    Vy=30;
  }
}

function move()
{
  Sx=Sx+Vx;
  Sy=Sy+Vy;
  if(Sx==Fx && Sy==Fy)
  {

  score++;
  drawFood();
  audiooname.play();

 updateScore();

  }
  if(Sx>570)
  {
    Sx=0;
    score=0;
    updateScore();
  }
  if(Sx<0)
  {
    Sx=570;
    score=0;
    updateScore();
  }
  if(Sy>570)
  {
    Sy=0;
    score=0;
    updateScore();
  }
  if(Sy<0)
  {
    Sy=570;
    score=0;
    updateScore();
  }
  document.getElementById("snake").style.left=Sx+'px';
  document.getElementById("snake").style.top=Sy+'px';
}
function updateScore()
{
  document.getElementById("score").innerHTML=score;
}
function drawFood()
{

  Fx=Math.floor(Math.random()*19)*30;
  Fy=Math.floor(Math.random()*19)*30;
  document.getElementById("food").style.left=Fx+'px';
    document.getElementById("food").style.top=Fy+'px';
}

function start()
{
  setInterval(move,200);
  drawFood();
  updateScore();
}
start();
