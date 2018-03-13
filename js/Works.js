'use strict';

define(function(require,exports,module){
	var M=require('move.js');
	var W=require('Walls.js');
	exports.Works=function(id){
		var oDiv=document.getElementById(id);
		var oBtn=oDiv.getElementsByTagName('input')[0];
		var oBox=oDiv.getElementsByTagName('ul')[0];
		var aLi=oBox.children;
		
		var aPos=[];
		var JsonIndex=0;
		var Json=[
			{bgURL:'url(works_img/360kan.jpg) no-repeat',href:'works/360films/index.html',text:'360看看（JS）'},
			{bgURL:'url(works_img/baidu-drop.jpg) no-repeat',href:'works/baidu-drop/index.html',text:'百度下拉（Jsonp）'},
			{bgURL:'url(works_img/音悦台.jpg) no-repeat',href:'works/音悦台/index.html',text:'音悦台（Jquery）'},
			{bgURL:'url(works_img/WebQQ.jpg) no-repeat',href:'works/WebQQ/index.html',text:'WebQQ（Ajax）'},
			{bgURL:'url(works_img/slide.png) no-repeat',href:'works/slide/index.html',text:'无缝滚动轮播图'},
			{bgURL:'url(works_img/Date.png) no-repeat',href:'works/Date/index.html',text:'关于时间的例子'},
			{bgURL:'url(works_img/jd.jpg) no-repeat',href:'works/jd/index.html',text:'京东官网'},
			{bgURL:'url(works_img/photo-wall.jpg) no-repeat',href:'works/photo-wall/index.html',text:'照片墙'},
			{bgURL:'url(works_img/剑灵.jpg) no-repeat',href:'works/剑灵/index.html',text:'剑灵'},
			{bgURL:'url(works_img/美丽说.jpg) no-repeat',href:'works/美丽说/index.html',text:'美丽说'},
			{bgURL:'url(works_img/美团.jpg) no-repeat',href:'works/美团/details.html',text:'美团'},
			{bgURL:'url(works_img/蒙娜丽莎.jpg) no-repeat',href:'works/蒙娜丽莎/index.html',text:'蒙娜丽莎'},
			{bgURL:'url(works_img/瀑布流.jpg) no-repeat',href:'works/falls.html',text:'瀑布流'},
			{bgURL:'url(works_img/get-wall.jpg) no-repeat',href:'works/get-wall/index.html',text:'拉勾网穿墙'},
			{bgURL:'url(works_img/天猫.jpg) no-repeat',href:'works/天猫/index.html',text:'天猫'},
			{bgURL:'url(works_img/拖拽.jpg) no-repeat',href:'works/拖拽/index.html',text:'拖拽'},
			{bgURL:'url(works_img/yuan.png) no-repeat',href:'works/yuan.html',text:'圆周运动'},
			{bgURL:'#fff',href:'javascript:;',text:'敬请期待。。。'}
		];
		for(var i=0;i<aLi.length;i++){
			aPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
		}
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.left=aPos[i].left+'px';
			aLi[i].style.top=aPos[i].top+'px';
			aLi[i].style.position='absolute';	
			aLi[i].style.margin=0;
			aLi[i].style.background=Json[i].bgURL;
			aLi[i].innerHTML='<a href="'+Json[i].href+'" target="_blank"><span>'+Json[i].text+'</span></a>';
		}
		var timer;
		var bOk=false;
		oBtn.onclick=function(){
			if(bOk)return;
			bOk=!bOk;
			JsonIndex+=6;
			if(JsonIndex==18){
				JsonIndex=0;
			}
			var i=0;
			timer=setInterval(function(){
				(function(index){
					M.startMove(aLi[index],{left:oBtn.offsetLeft,top:oBtn.offsetTop-50,opacity:0,width:0,height:0},{end:function(){
						if(index==aLi.length-1){
							var i=index;
							timer=setInterval(function(){
								(function(index){
									aLi[index].style.background=Json[i+JsonIndex].bgURL;
									aLi[i].innerHTML='<a href="'+Json[i+JsonIndex].href+'" target="_blank"><span>'+Json[i+JsonIndex].text+'</span></a>';
									M.startMove(aLi[index],{left:aPos[index].left,top:aPos[index].top,width:200,height:200,opacity:1},{end:function(){
										W.Walls(id);
										if(index==0){
											bOk=!bOk;
										}
									}});	
								})(i);
								i--;
								if(i<0){
									clearInterval(timer);	
								}	
							},200);
						}	
					}});
				})(i);
				i++;
				if(i==aLi.length){
					clearInterval(timer);	
				}
			},200);
		};	
	}
});