'use strict';

define(function(require,exports,module){
	exports.Explode=function(id,fn){
		var oBox=document.getElementById(id);
		var aSpan=oBox.children;
		for(var i=0;i<aSpan.length;i++){
			aSpan[i].style.transition='1s all cubic-bezier(0.42,0,0.58,1.0)';
			aSpan[i].style.transform='translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
			aSpan[i].style.MsTransform='translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
			aSpan[i].style.WebkitTransform='translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
			aSpan[i].style.OTransform='translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
			aSpan[i].style.MozsTransform='translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
			aSpan[i].style.opacity=1;	
		}
		setTimeout(function(){
			fn&&fn();	
		},1000);	
	}
});