'use strict';

define(function(require,exports,module){
	exports.getStyle=function(obj,sName){
		return (obj.currentStyle||getComputedStyle(obj,false))[sName];	
	}
	
	exports.addClass=function(obj,sClass){
		if(obj.className){
			var reg=new RegExp('\\b'+sClass+'\\b','g');
			if(obj.className.search(reg)==-1){
				obj.className+=' '+sClass;	
			}
		}else{
			obj.className=sClass;	
		}	
	}
	
	exports.removeClass=function(obj,sClass){
		if(obj.className){
			var reg=new RegExp('\\b'+sClass+'\\b','g');
			if(obj.className.search(reg)!=-1){
				obj.className=obj.className.replace(reg,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
				if(!obj.className){
					obj.removeAttribute('class');
				}
			}
		}
	}
	
	exports.getByClass=function(obj,sClass){
		if(obj.getElementsByClassName){
			return obj.getElementsByClassName(sClass);	
		}else{
			var Result=[];
			var aEle=obj.getElementsByTagName('*');
			var Reg=new RegExp('\\b'+sClass+'\\b','g');
			for(var i=0;i<aEle.length;i++){
				if(aEle[i].className.search(Reg)!=-1){
					Result.push(aEle[i]);
				}
			}
			return Result;
		}	
	}
	
	exports.rnd=function(n,m){
		return parseInt(n+Math.random()*(m-n));	
	}
	
	exports.d2a=function(n){
		return n*Math.PI/180;	
	}
	
	exports.a2d=function(a){
		return a*180/Math.PI;	
	}
});