var bglmg=document.createElement("img");
bglmg.src="images/666.png";
var hero=document.createElement("img");
hero.src="images/rukia.gif";
var ctlmg=document.createElement("img");
ctlmg.src="images/tower-btn.png";
var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");

function draw(){
 ctx.drawImage(bglmg,0,0);
 ctx.drawImage(hero,hero.x,hero.y);
 ctx.drawImage(ctlmg,520,360,120,120);
}
setTimeout(draw,1000);
$("#game").mousemove(function(event){
 console.log("x:"+event.offsetX+",y:"+event.offsetY);
});
