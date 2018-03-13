'use strict';

define(function(require,exports,module){
	var C=require('common.js');
	exports.flight=function(id){
		var oTrack=document.getElementById(id);
		var oAir=oTrack.children[0];
		var X=oTrack.offsetWidth/2;
		var Y=oTrack.offsetHeight/2;
		var a=0;
		
		
		move(oAir,360);
		
		function move(obj,iTarget){
			var start=obj.a||0;
			var dis=iTarget-start;
			var count=Math.floor(10000/30);
			clearInterval(obj.timer);
			var n=0;
			var i=0;
			obj.timer=setInterval(function(){
				n++;
				var cur=start+dis*n/count;
				obj.a=cur;
				var x=X+Math.sin(C.d2a(cur))*X;
				var y=Y-Math.cos(C.d2a(cur))*Y;
				obj.style.left=x+'px';
				obj.style.top=y+'px';
				obj.style.transform='rotate('+(cur+90)%360+'deg)';
				obj.style.MsTransform='rotate('+(cur+90)%360+'deg)'; 
				obj.style.WebkitTransform='rotate('+(cur+90)%360+'deg)'; 
				obj.style.OTransform='rotate('+(cur+90)%360+'deg)'; 
				obj.style.MozTransform='rotate('+(cur+90)%360+'deg)';
				
				/*i++;
				oAir.style.background='url(img/airplane'+i+'.png) no-repeat';
				if(i==5){
					i=0;
				}	*/ 		
			},30);
		}
	}
});