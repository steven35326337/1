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
 ctx.drawImage(hero,hero.x,hero.y);
 ctx.drawImage(ctlmg,520,360,120,120);
 ctx.drawImage(tlmg,xy.x,xy.y);
}

setInterval(draw,300);
