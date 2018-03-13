'use strict';

seajs.config({
	alias:{
		'i':'index'	
	}	
});

seajs.use('i',function(mod){
	mod.myHome();	
});