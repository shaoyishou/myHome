'use strict';

define(function(require,exports,module){
	exports.Revolve=function(obj,bOk,fn){
		obj.style.transition='1s all ease-in';
		obj.style.transform='perspective(800px) rotateY(270deg) rotateX(0deg)';
		obj.style.MSTransform='perspective(800px) rotateY(270deg) rotateX(0deg)';
		obj.style.WebkitTransform='perspective(800px) rotateY(270deg) rotateX(0deg)';
		obj.style.OTransform='perspective(800px) rotateY(270deg) rotateX(0deg)';
		obj.style.MozTransform='perspective(800px) rotateY(270deg) rotateX(0deg)';
		
		setTimeout(function(){
			fn&&fn();
			obj.style.transition='.5s all linear';
			if(bOk){
				obj.style.transform='perspective(800px) rotateY(360deg) rotateX(0deg)';
				obj.style.MSTransform='perspective(800px) rotateY(360deg) rotateX(0deg)';
				obj.style.WebkitTransform='perspective(800px) rotateY(360deg) rotateX(0deg)';
				obj.style.OTransform='perspective(800px) rotateY(360deg) rotateX(0deg)';
				obj.style.MozTransform='perspective(800px) rotateY(360deg) rotateX(0deg)';
			}else{
				obj.style.transform='perspective(800px) rotateY(0deg) rotateX(0deg)';
				obj.style.MSTransform='perspective(800px) rotateY(0deg) rotateX(0deg)';
				obj.style.WebkitTransform='perspective(800px) rotateY(0deg) rotateX(0deg)';
				obj.style.OTransform='perspective(800px) rotateY(0deg) rotateX(0deg)';
				obj.style.MozTransform='perspective(800px) rotateY(0deg) rotateX(0deg)';	
			}
		},1000);	
	}
});