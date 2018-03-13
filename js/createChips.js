'use strict';

define(function(require,exports,module){
	function rnd(n,m){
		return parseInt(n+Math.random()*(m-n));	
	}
	exports.createChips=function(id){
		var oBox=document.getElementById(id);
		var R=4;
		var C=7;
		for(var i=0;i<R;i++){
			for(var j=0;j<C;j++){
				var oS=document.createElement('span');
				oS.style.width=oBox.offsetWidth/C+'px';
				oS.style.height=oBox.offsetHeight/R+'px';
				oS.style.left=oBox.offsetWidth/C*j+'px';
				oS.style.top=oBox.offsetHeight/R*i+'px';
				oS.style.opacity=0;
				oBox.appendChild(oS);
				oS.style.backgroundPosition='-'+(oBox.offsetWidth/C*j)+'px -'+(oBox.offsetHeight/R*i)+'px';
				
				var x=oBox.offsetWidth/C*j+(oBox.offsetWidth/C)/2-oBox.offsetWidth/2;
				var y=oBox.offsetHeight/R*i+(oBox.offsetHeight/R)/2-oBox.offsetHeight/2;	
				
				oS.style.transform='translate3d('+x+'px,'+y+'px,200px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
				oS.style.MozsTransform='translate3d('+x+'px,'+y+'px,200px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
				oS.style.OTransform='translate3d('+x+'px,'+y+'px,200px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
				oS.style.WebkitTransform='translate3d('+x+'px,'+y+'px,200px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
				oS.style.MsTransform='translate3d('+x+'px,'+y+'px,200px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
			}	
		}	
	}
});