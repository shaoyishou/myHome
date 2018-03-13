'use strict';

define(function(require,exports,module){
	var F=require('flight.js');
	var CC=require('createChips.js');
	var M=require('move.js');
	var R=require('revolve.js');
	var C=require('common.js');
	var S=require('showSkill.js');
	var E=require('explode.js');
	var WR=require('Works.js');
	var WL=require('Walls.js');
	exports.myHome=function(){
		//飞机
		F.flight('track');
		//创造碎片
		CC.createChips('chip_bg');
		
		var bOk=true;
		
		
		var oMan=document.getElementById('man');
		var aMan=oMan.children;
		aMan[0].style.transform='scale(1)';
		aMan[0].style.MsTransform='scale(1)'; 
		aMan[0].style.WebkitTransform='scale(1)'; 
		aMan[0].style.OTransform='scale(1)'; 
		aMan[0].style.MozTransform='scale(1)';
		//aMan[0].style.opacity=1;
		M.startMove(aMan[0],{opacity:1},{time:1000});
		//aMan[1].style.opacity=1;
		M.startMove(aMan[1],{opacity:1},{time:1000});
		var oCNav=document.getElementById('con_nav');
		var aLi=oCNav.children;
		var arr=[{left:130,top:80},{left:130,top:250},{left:750,top:80},{left:750,top:250}];
		for(var i=0;i<aLi.length;i++){
			//aLi[i].style.left=arr[i].left+'px';
			//aLi[i].style.top=arr[i].top+'px';
			//aLi[i].style.opacity=1;
			M.startMove(aLi[i],{left:arr[i].left,top:arr[i].top,opacity:1},{time:1000,type:'easeIn'});	
		}
		
		var aBtn=oCNav.getElementsByTagName('a');
		var oNav=document.getElementById('nav');
		var aA=oNav.getElementsByTagName('a');
		var oCon=document.getElementById('con');
		var aDiv=oCon.children;
		var oContact=document.getElementById('contact');
		for(var i=0;i<aA.length;i++){
			(function(index){
				aBtn[i].onclick=function(){
					tab(index);
					if(index==0)return;
					//oNav.style.opacity=1;
					oNav.style.display='block';
					M.startMove(oNav,{opacity:1});
					R.Revolve(oCon,bOk,function(){
						for(var i=0;i<aBtn.length;i++){
							C.addClass(aDiv[i],'hide');
						}	
						C.removeClass(aDiv[index],'hide');
						bOk=!bOk;	
					});
					setTimeout(function(){
						switch(index){
							case 1:
								break;	
							case 2:
								S.showSkill('skill');
								break;	
							case 3:
								E.Explode('chip_bg');
								break;	
						}
					},1700);
				};
				
				aBtn[i].onmouseover=function(){
					C.addClass(this.parentNode,'active');
				};
				aBtn[i].onmouseout=function(){
					if(index==0)return;
					C.removeClass(this.parentNode,'active');	
				};
				
				aA[i].onclick=function(){
					R.Revolve(oCon,bOk,function(){
						for(var i=0;i<aBtn.length;i++){
							C.addClass(aDiv[i],'hide');
						}	
						C.removeClass(aDiv[index],'hide');
						bOk=!bOk;		
					});
					tab(index);
					if(index==0){
						M.startMove(oNav,{opacity:0},{end:function(){
							oNav.style.display='none';
						}});
					}
					setTimeout(function(){
						switch(index){
							case 0:
								break;
							case 1: 
								break;	
							case 2:
								S.showSkill('skill');
								break;	
							case 3:
								E.Explode('chip_bg');
								break;	
						}
					},1700);
				};		
			})(i);	
		}
		function tab(index){
			for(var i=0;i<aBtn.length;i++){
				C.removeClass(aA[i].parentNode,'active');
			}	
			C.addClass(aA[index].parentNode,'active');		
		}
		
		
		//足部字体变换
		var oFooter=document.getElementById('footer');
		var aSpan=oFooter.getElementsByTagName('span');
		
		var i=0;
		var timer=setInterval(function(){
			i++;
			for(var j=0;j<aSpan.length;j++){
				C.removeClass(aSpan[j],'on');
			}
			if(i==aSpan.length){
				i=0;	
			}
			C.addClass(aSpan[i],'on');
		},500);	
		
		WR.Works('works');
		WL.Walls('works');
	}
});