'use strict';

define(function(require,exports,module){
	var C=require('common.js');
	var M=require('move.js');
	exports.showSkill=function(id){
		var oBox=document.getElementById(id);
		var oList=oBox.getElementsByTagName('ul')[0];
		var oRight=document.getElementById('next');
		var oLeft=document.getElementById('prev');
		var aP=oList.getElementsByTagName('p');
		var aOpa=C.getByClass(oList,'list_opa');
		var aABar=C.getByClass(oList,'qua_bar');
		var aLi=oList.children;
		
		var HeightArr=[120,200,215,150,120];
		
		var aPos=[{width:210,height:321,top:14,left:0,zIndex:1},
				{width:224,height:337,top:7,left:218,zIndex:2},
				{width:240,height:350,top:0,left:447,zIndex:3},
				{width:224,height:337,top:7,left:693,zIndex:2},
				{width:210,height:321,top:14,left:926,zIndex:1}
				];
		for(var i=0;i<aPos.length;i++){
			aLi[i].style.margin=0;
			aLi[i].style.zIndex=aPos[i].zIndex;
			M.startMove(aLi[i],{left:aPos[i].left,top:aPos[i].top,width:aPos[i].width,height:aPos[i].height},{time:700});
			if(i==3){
				M.startMove(aP[2],{height:60},{time:700});
				M.startMove(aOpa[2],{opacity:0},{time:700});
				M.startMove(aABar[2],{width:HeightArr[2]},{time:1300});		
			}
		}
		
		exchange();	
		oRight.onclick=fnRight;
		function fnRight(){
			var oLast=oList.lastElementChild||oList.lastChild;
			oList.insertBefore(oList.removeChild(oLast),oList.children[0]);
			HeightArr.unshift(HeightArr.pop());
			exchange();
		};
		oLeft.onclick=fnLeft;
		function fnLeft(){
			var oFirst=oList.firstElementChild||oList.firstChild;
			oFirst.style.zIndex=0;
			oList.appendChild(oFirst);
			HeightArr.push(HeightArr.shift());
			exchange();
		};	
		function exchange(){
			var aLi=oList.children;
			var aA=oList.getElementsByTagName('a');
			for(var i=0;i<aPos.length;i++){
				if(i!=2){
					M.startMove(aP[i],{height:0},{time:700});
					M.startMove(aOpa[i],{opacity:0.8},{time:700});
					M.startMove(aABar[i],{width:0},{time:700});	
					aLi[i].onmouseover=function(){
						M.startMove(this.children[0].children[0],{opacity:0},{time:700});		
					};	
					aLi[i].onmouseout=function(){
						M.startMove(this.children[0].children[0],{opacity:0.8},{time:700});	
					};
					aA[0].onclick=function(){
						this.parentNode.style.zIndex=1000;
						fnRight();
						fnRight();
						return false;
					};
					aA[1].onclick=function(){
						fnRight();
						return false;
					};
					aA[2].onclick=function(){
						return false;
					};	
					aA[3].onclick=function(){
						fnLeft();
						return false;
					};	
					aA[4].onclick=function(){
						fnLeft();
						fnLeft();
						return false;
					};	
				}else{
					M.startMove(aP[2],{height:60},{time:700});
					M.startMove(aOpa[2],{opacity:0},{time:700});
					M.startMove(aABar[2],{width:HeightArr[2]},{time:1300});			
					aLi[2].onmouseover=null;
					aLi[2].onmouseout=null;	
					aA[2].onclick=null;
				}
				M.startMove(aLi[i],{left:aPos[i].left,top:aPos[i].top,width:aPos[i].width,height:aPos[i].height},{end:function(){	
					for(var i=0;i<aPos.length;i++){
						aLi[i].style.zIndex=aPos[i].zIndex;
					}
				},time:700});
			}
		}	
	}
});