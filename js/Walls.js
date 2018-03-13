'use strict';


define(function(require,exports,module){
	var C=require('common.js');
	var M=require('move.js');
	function hoverDir(obj,oEvent){
		var scrollL=document.documentElement.scrollLeft||document.body.scrollLeft;
		var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		var x=obj.offsetLeft+obj.offsetWidth/2-oEvent.clientX-scrollL+44;
		var y=obj.offsetTop+obj.offsetHeight/2-oEvent.clientY-scrollT+245;
		
		return Math.round((C.a2d(Math.atan2(y,x))+180)/90)%4;
	}
	function hoverGo(obj){
		var oSpan=obj.getElementsByTagName('span')[0];
		
		obj.onmouseover=function(ev){
			var oEvent=ev||event;
			var oFrom=oEvent.fromElement||oEvent.relatedTarget;
			if(obj.contains(oFrom))return;
			var dir=hoverDir(obj,oEvent);
			switch(dir){
				case 0:
					oSpan.style.left='200px';
					oSpan.style.top=0;
					break;
				case 1:
					oSpan.style.left=0;
					oSpan.style.top='200px';
					break;
				case 2:
					oSpan.style.left='-200px';
					oSpan.style.top=0;
					break;
				case 3:
					oSpan.style.left=0;
					oSpan.style.top='-200px';
					break;
			}
			M.startMove(oSpan,{left:0,top:0});
		};
		obj.onmouseout=function(ev){
			var oEvent=ev||event;
			var oTo=oEvent.toElement||oEvent.relatedTarget;
			if(obj.contains(oTo))return;
			var dir=hoverDir(obj,oEvent);
			switch(dir){
				case 0:
					M.startMove(oSpan,{left:200,top:0});
					break;	
				case 1:
					M.startMove(oSpan,{left:0,top:200});
					break;	
				case 2:
					M.startMove(oSpan,{left:-200,top:0});
					break;	
				case 3:
					M.startMove(oSpan,{left:0,top:-200});
					break;	
			}
		};	
	}
	
	exports.Walls=function(id){
		var oDiv=document.getElementById(id);
		var oBox=oDiv.getElementsByTagName('ul')[0];
		var aLi=oBox.children;
		
		for(var i=0;i<aLi.length;i++){
			hoverGo(aLi[i]);	
		}	
	};
});