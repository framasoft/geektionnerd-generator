var d = document;
var cg = {};
var c = $('#c')[0];
var ctx = c.getContext('2d');
var scene = new RB.Scene(c);
var w = c.width;
var h = c.height;
var fontFamily = "Domestic_Manners, Arial, helvetica";
var pop = new Audio('pop.ogg');
var currentObj = null;

scene.add( scene.rect(w, h, 'white') );
scene.update();

var lib = $('#lib');

var miniUrlsfond = ["fond1.png", "fond2.png", "fond3.png", "fond4.png",];
var Urlsfond = ["fond1.png", "fond2.png", "fond3.png", "fond4.png",];
var miniUrlstoon = ["toon01_mini.png", "toon02_mini.png", "toon03_mini.png", "toon04_mini.png", "toon05_mini.png", "toon06_mini.png", "toon07_mini.png", "toon08_mini.png", "toon09_mini.png", "toon10_mini.png", "toon11_mini.png",];
var Urlstoon = ["toon01.png", "toon02.png", "toon03.png", "toon04.png", "toon05.png", "toon06.png", "toon07.png", "toon08.png", "toon09.png", "toon10.png", "toon11.png",];
var miniUrlsbulle = ["ballon1_mini.png", "ballon2_mini.png", "ballon3_mini.png", "ballon4_mini.png", "ballon5_mini.png","ballon6_mini.png",];
var Urlsbulle = ["ballon1.png", "ballon2.png", "ballon3.png", "ballon4.png", "ballon5.png","ballon6.png",];

cg.clearScreen = function(){
	ctx = c.getContext('2d');
	scene = new RB.Scene(c);
	w = c.width;
	h = c.height;
	fontFamily = "Domestic_Manners, Arial, helvetica";
	pop = new Audio('pop.ogg');
	currentObj = null;

	scene.add( scene.rect(w, h, 'white') );
	scene.update();
}

$(d).keyup(function(e){

	var key = e.keyCode || e.which;

	if(key == 46 && currentObj){
		scene.remove(currentObj);
		scene.update();
		RB.destroyCanvas( currentObj.getCanvas().id );
		currentObj = null;
	}
	
	if( currentObj && (key==37 || key==39) ){
		cg.hFlip(currentObj);
	}
});

$(d).keydown(function(event){
	
	var key = event.keyCode || event.which;

	if(key == 38 && currentObj){
		cg.zoomIn(currentObj);
	}
	
	if(key == 40 && currentObj){
		cg.zoomOut(currentObj);
	}
});

d.onmousewheel = function(mw){
	if(currentObj && mw.wheelDelta > 0){
		cg.zoomIn(currentObj);
	} else if (currentObj && mw.wheelDelta < 0){
		cg.zoomOut(currentObj);
	}
};

cg.buildMinis = function(){
	var bufferd = '<div id="menutoon" class="deroulep"></div><div id="toon">';
	var bufferf ='</div>*******************************';
	var buffer = '';
	

	
	var imgString = "<img src='toons/IMG_URL' class='rc mini'></img>";
	var link = "<a href=\"javascript:cg.createImage('toons/IMG_URL')\">";
	
	for(var i=0; i < miniUrlstoon.length; i++){
		buffer += link.replace(/IMG_URL/, Urlstoon[i]);
		buffer += imgString.replace(/IMG_URL/, miniUrlstoon[i]) + '</a>';
	}
	
	lib.append(bufferd+buffer+bufferf);
	
	var fondbufferd = '<div id="menufond" class="deroulef"></div><div id="fond">';
	var fondbufferf = '</div>*******************************';
	var fondbuffer = '';
	

	
	var imgString = "<img src='toons/IMG_URL' class='rc mini'></img>";
	var link = "<a href=\"javascript:cg.createImage('toons/IMG_URL')\">";
	
	for(var i=0; i < miniUrlsfond.length; i++){
		fondbuffer += link.replace(/IMG_URL/, Urlsfond[i]);
		fondbuffer += imgString.replace(/IMG_URL/, miniUrlsfond[i]) + '</a>';
	}
	
	lib.append(fondbufferd+fondbuffer+fondbufferf);
	
	var bullebufferd = '<div id="menubulle" class="derouleb"></div><div id="bulle">';
	var bullebufferf ='</div>*******************************';
	var bullebuffer = '';
	

	
	var imgString = "<img src='toons/IMG_URL' class='rc mini'></img>";
	var link = "<a href=\"javascript:cg.createImage('toons/IMG_URL')\">";
	
	for(var i=0; i < miniUrlsbulle.length; i++){
		bullebuffer += link.replace(/IMG_URL/, Urlsbulle[i]);
		bullebuffer += imgString.replace(/IMG_URL/, miniUrlsbulle[i]) + '</a>';
	}
	
	lib.append(bullebufferd+bullebuffer+bullebufferf);
	
	
	//lib.append( $('#textTool').clone() );
	$('#menuContainer').append( $('#instructs').clone() );
}

cg.buildMinis();

cg.createImage = function(url){
	scene.image(url, function(obj){
		obj.draggable = true;
		obj.setXY(30, 30);
		
		obj.onmousedown = function(e){
			currentObj = obj;
			scene.zIndex(obj, 1);
			scene.update();
		}
		
		scene.add(obj);
		currentObj = obj;
		scene.update();
		pop.play();
	});
}

cg.createText = function(){
	var txt = prompt("Adicione um texto:");
	
	if(txt){
		var obj = scene.text(txt, fontFamily, 26, 'black');
		obj.setXY(40, 40);
		obj.draggable = true;
		
		obj.onmousedown = function(e){
			currentObj = obj;
			scene.zIndex(obj, 1);
			scene.update();
		}
		currentObj = obj;
		
		scene.add(obj);
		scene.update();
		pop.play();
	}
}

cg.createTextFromInput = function(e){

	var key = e.keyCode || e.which;
	var txt = $('#newText').val();
	
	if(key == 13){
		var obj = scene.text(txt, fontFamily, 26, 'black');
		obj.setXY(40, 40);
		obj.draggable = true;
		
		obj.onmousedown = function(e){
			currentObj = obj;
			scene.zIndex(obj, 1);
			scene.update();
		}
		currentObj = obj;
		
		scene.add(obj);
		scene.update();
		$('#newText').val('');
		pop.play();
	}
}

cg.saveImage = function(){
	var data = c.toDataURL('png');
	var win = window.open();
	var b = win.document.body;
	var img = new Image();
	img.src = data;
	b.appendChild(img);
}

cg.zoomOut = function(obj){
	var w = obj.w * 0.05;
	var h = obj.h * 0.05;

	if(obj.w - w > 0 && obj.h - h > 0){
		obj.w -= w;
		obj.h -= h;
		
		obj.x += (w/2);
		obj.y += (h/2);
		
		scene.update();
	}
}

cg.zoomIn = function(obj){
	var w = obj.w * 0.05;
	var h = obj.h * 0.05;
	
	obj.w += w;
	obj.h += h;
	
	obj.x -= (w/2);
	obj.y -= (h/2);
	
	scene.update();
}

cg.hFlip = function(obj){
	var tmpCanvas = $(obj.getCanvas()).clone()[0];
	var img = obj.getCanvas();
	var tmpCtx = tmpCanvas.getContext('2d');
	var w = tmpCanvas.width;
	var h = tmpCanvas.height;
	
	//save current size and position
	var cW = obj.w, cH = obj.h, cX = obj.x, cY = obj.y;
	
	tmpCtx.translate(w/2, h/2);
	tmpCtx.scale(-1, 1);
	tmpCtx.drawImage(img, (-1*w/2), (-1*h/2));
	tmpCanvas.id = obj.getCanvas().id;
	obj.getCanvas().id = 'killme';
	
	RB.destroyCanvas('killme');
	d.body.appendChild(tmpCanvas);
	obj.setCanvas(tmpCanvas);
	obj.x=cX; obj.y=cY; obj.h=cH; obj.w=cW;	
	scene.update();
}

cg.setScreen = function(w, h){
	if(w && h && !isNaN(w) && !isNaN(h)){
		//var ok = confirm('All your work will be lost. Continue?');
		ok=true;
		if(ok){
			c.width = w;
			c.height = h;
			scene.update();
			//cg.clearScreen();
		}
	}
}
