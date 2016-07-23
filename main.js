var FPS = 60;
var bglmg=document.createElement("img");
bglmg.src="images/666.png";
var hero=document.createElement("img");
hero.src="images/rukia.gif";
var ctlmg=document.createElement("img");
ctlmg.src="images/tower-btn.png";
var tlmg=document.createElement("img");
tlmg.src="images/tower.png";
var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");

var enemy={
 x:320,
 y:448,
 speed:64,
 direction:{x:0,y:-1},
 move:function(){
  this.x=this.x+this.direction.x*this.speed/FPS;
  this.y=this.y+this.direction.y*this.speed/FPS;
 }
}


var t={
 x:0,
 y:0
};

var isb=false;
$("#game").click(function(event){
 if(event.offsetX>520&&event.offsetY>360){
  isb=true;
 }else{
  if(isb==true){
  t.x=event.offsetX-event.offsetX%32;
  t.y=event.offsetY-event.offsetY%32;
 }
 isb=false;
 }
});


var xy={x:0,y:0}
setTimeout(draw,1000);
$("#game").mousemove(function(event){
 xy.y=event.offsetY;
 xy.x=event.offsetX;
});

function draw(){
 ctx.drawImage(bglmg,0,0);
 enemy.move();
 ctx.drawImage(hero,enemy.x,enemy.y);
 ctx.drawImage(ctlmg,620,460,20,60);
 if(isb==true){
  ctx.drawImage(tlmg,xy.x,xy.y);
 }
 else{
  ctx.drawImage(tlmg,t.x,t.y);
 }
 
}

setInterval(draw,1000/FPS);
