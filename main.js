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

var isb=false;
$("#game").click(function(event){
 isb=false;
 if(event.offsetX>520&&event.offsetY>360){
  isb=true;
 }else{
  tower.x=event.offsetX-event.offsetX%32;
  tower.y=event.offsetY-event.offsetY%32;
 }
 isb=false;
});

var t={
 x:0
 y:0
};

var xy={x:0,y:0}
setTimeout(draw,1000);
$("#game").mousemove(function(event){
 xy.y=event.offsetY;
 xy.x=event.offsetX;
});

function draw(){
 ctx.drawImage(bglmg,0,0);
 ctx.drawImage(hero,hero.x,hero.y);
 ctx.drawImage(ctlmg,440,280,200,200);
 if(isb==true){
  ctx.drawImage(tlmg,xy.x,xy.y);
 }
 else{
  ctx.drawImage(tlmg,tower.x,tower.y);
 }
 
}

setInterval(draw,3);
