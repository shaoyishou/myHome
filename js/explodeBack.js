'use strict';

function ExplodeBack(id,fn){
	var oBox=document.getElementById(id);
	var aSpan=oBox.children;
	for(var i=0;i<aSpan.length;i++){
		aSpan[i].style.transition='1s all cubic-bezier(0.42,0,0.58,1.0)';
		
		var x=aSpan[i].offsetLeft+aSpan[i].offsetWidth/2-oBox.offsetWidth/2;
		var y=aSpan[i].offsetTop+aSpan[i].offsetHeight/2-oBox.offsetHeight/2;
		aSpan[i].style.transform='translate3d('+x+'px,'+y+'px,100px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
		aSpan[i].style.opacity=0;
	}
	setTimeout(function(){
		fn&&fn();	
	},1000);	
}