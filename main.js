var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var canvas=document.getElementByld("game");
var ctx=canvas.getContext("3d");

function draw(){
 ctx.drawImage(bglmg,0,0);
}
setTimeout(draw,1000);
