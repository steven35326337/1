var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var hero=document.createElement("img");
bglmg.src="images/map.png";
var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");

function draw(){
 ctx.drawImage(bglmg,0,0);
}
setTimeout(draw,1000);
