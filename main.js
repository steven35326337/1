var treeHP=100;
var score=0;
var money=0;
var clock=0;
var FPS = 60;
var bglmg=document.createElement("img");
bglmg.src="images/666.png";
var hero=document.createElement("img");
hero.src="images/rukia.gif";
var ctlmg=document.createElement("img");
ctlmg.src="images/tower-btn.png";
var tlmg=document.createElement("img");
tlmg.src="images/tower.png";
var crosshairlmg=document.createElement("img");
crosshairlmg.src="images/crosshair.png";
var canvas=document.getElementById("game");
var ctx=canvas.getContext("2d");
ctx.font="24px Arial";
ctx.fillStyle="cyan";
var ep=[
	{x:320,y:352},
	{x:0,y:352},
	{x:0,y:0},
	{x:96,y:0},
	{x:96,y:288},
	{x:192,y:288},
	{x:192,y:32},
	{x:544,y:32},
	{x:544,y:128}
];  

function isc(pointX,pointY,targetX,targetY,targetWidth,targetHeight){
	if(  pointX>=targetX
		&& pointX<=targetX+targetWidth
		&& pointY>=targetY
		&& pointY<=targetY+targetHeight
	){
		return true;
	}else{
		return false;
	}
}

function Enemy(){
	this.hp=100
	this.x=320,
	this.y=448,
	this.speed=64,
	this.pathDes=0,
	this.direction={x:0,y:-1},
	this.move=function(){
 		if(isc(ep[this.pathDes].x,ep[this.pathDes].y,this.x,this.y,this.speed/FPS,this.speed/FPS)){
			this.x=ep[this.pathDes].x;
			this.y=ep[this.pathDes].y;
			this.pathDes+=1;
			if(this.pathDes>=ep.length){
				this.HP=0;
				treeHP = treeHP-7;
				return;
			}
			if(ep[this.pathDes].x>this.x){
				this.direction={x:1,y:0}
			} else if(ep[this.pathDes].x<this.x){
				this.direction={x:-1,y:0}
			} else if(ep[this.pathDes].y>this.y){
				this.direction={x:0,y:1}
			} else if(ep[this.pathDes].y<this.y){
				this.direction={x:0,y:-1}
			}
		} else {
		   this.x=this.x+this.direction.x*this.speed/FPS;
		   this.y=this.y+this.direction.y*this.speed/FPS;
  		}
	}
};
var enemies=[];
var t={
shoot:function(id){
ctx.beginPath();
ctx.moveTo(this.x + 16,this.y);
ctx.lineTo(enemies[id].x + 16,enemies[id].y);
ctx.strokeStyle='red';
ctx.lineWidth=3;
ctx.stroke();
enemies[id].hp-=this.damage;
},
fireRate:0.75,
readyShoot:0.75,
damage:50,
 x:0,
 y:0,
 range:96,
 aimingEnemyid:null,
 searchEnemy:function(){
 	this.readyShoot-=1/FPS
 	for(var i = 0;i < enemies.length;i++){
 		var distance=Math.sqrt(
 			Math.pow(this.x-enemies[i].x,2)+Math.pow(this.y-enemies[i].y,2)
 		);
 		if(distance<=this.range){
 			this.aimingEnemyid=i;
 			if(this.readyShoot<=0){
 				this.shoot(i);
 				this.readyShoot=this.fireRate;
 			}
 			return;
 		}
 	}
 aimingEnemyid=null;	
 }
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
	if(clock % 80 == 0){
		var enemy=new Enemy();
		enemies.push(enemy);
	}
	clock++;
	ctx.drawImage(bglmg,0,0);
            for(var i = 0;i < enemies.length;i++){
        	if (enemies[i].hp<=0){
        		enemies.splice(i,1);
        	}else{
        	enemies[i].move();
        	ctx.drawImage(hero,enemies[i].x,enemies[i].y);
        	}
        }
	ctx.drawImage(ctlmg,620,460,20,60);
	if(isb==true){
		ctx.drawImage(tlmg,xy.x,xy.y);
	}
	else{
		ctx.drawImage(tlmg,t.x,t.y);
		ctx.fillText("HP:"+treeHP,65,32);
		t.searchEnemy();
		if(t.aimingEnemyid!=null){
			var id=t.aimingEnemyid;
			ctx.drawImage(crosshairlmg,enemies[id].x,enemies[id].y);
		}
	}
}

setInterval(draw,1000/FPS);
