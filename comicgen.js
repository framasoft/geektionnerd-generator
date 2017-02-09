var d = document;
var cg = {};
var c = $('#c')[0];
var ctx = c.getContext('2d');
var scene = new RB.Scene(c);
var w = c.width;
var h = c.height;
var fontFamily = "Domestic Manners, Arial, helvetica, sans serif";
var pop = new Audio('pop.ogg');
var currentObj = null;

scene.add( scene.rect(w, h, 'white') );
scene.update();

var lib = $('#lib');

var miniUrls = ["fond1.png", "fond2.png", "fond3.png", "fond4.png", "toon13_mini.png", "toon01_mini.png", "toon02_mini.png", "toon04_mini.png", "toon05_mini.png", "toon07_mini.png", "toon08_mini.png", "toon11_mini.png", "toon09_mini.png", "toon15_mini.png", "toon06_mini.png", "toon10_mini.png", "toon03_mini.png", "toon12_mini.png", "toon14_mini.png", "smiley01.png", "smiley02.png", "smiley03.png", "ballon1_mini.png", "ballon2_mini.png", "ballon3_mini.png", "ballon4_mini.png", "ballon5_mini.png","ballon6_mini.png","affirmatif_mini.png","agace_mini.png","blagueur_bras_croises_mini.png","blagueur_bras_ecartes_mini.png","blagueur_doigt_leve_mini.png","blagueuse_mini.png","blase_mini.png","boude_mini.png","boudeur_mini.png","chasseur_mini.png","choque_mini.png","connard_mini.png","connard_avide_mini.png","connard_enoncant_mini.png","connard_menacant_mini.png","connard_pupitre_mini.png","depite_mini.png","desapointe_mini.png","desapointee_mini.png","effraye_mini.png","etonne_mini.png","facepalm_mini.png","facepalm2_mini.png","fache_mini.png","fbi_mini.png","festif_mini.png","guitare_mini.png","harpon_mini.png","heureux_mini.png","indigne_mini.png","inebranlable_mini.png","inebranlable2_mini.png","ironique_mini.png","journal_mini.png","journaliste_surpris_mini.png","joyeux_mini.png","lisant_mini.png","lisant_a_haute_voix_mini.png","la_mort_mini.png","marchant_mini.png","montre_du_doigt_mini.png","moqueur_mini.png","nauseeux_mini.png","negatif1_mini.png","negatif2_mini.png","negatif3_mini.png","negatif4_mini.png","negatif5_mini.png","non_mais_mini.png","paon_mini.png","pedant_mini.png","pensif_mini.png","pensive_mini.png","positif1_mini.png","positif2_mini.png","positif3_mini.png","positif4_mini.png","positif5_mini.png","psst_mini.png","sabre_laser_mini.png","scandalise_mini.png","se_cache_les_yeux_mini.png","souriante_mini.png","surarme_mini.png","surpris_mini.png","transpirant_mini.png","tsss_mini.png","vador_mini.png","vieille_dame_mini.png","voiture_mini.png"];
var toonUrls = ["fond1.png", "fond2.png", "fond3.png", "fond4.png", "toon13.png", "toon01.png", "toon02.png",  "toon04.png", "toon05.png", "toon07.png", "toon08.png", "toon11.png", "toon09.png", "toon15.png", "toon06.png", "toon10.png", "toon03.png", "toon12.png", "toon14.png", "smiley01.png", "smiley02.png", "smiley03.png", "ballon1.png", "ballon2.png", "ballon3.png", "ballon4.png", "ballon5.png", "ballon6.png", "affirmatif.png","agace.png","blagueur_bras_croises.png","blagueur_bras_ecartes.png","blagueur_doigt_leve.png","blagueuse.png","blase.png","boude.png","boudeur.png","chasseur.png","choque.png","connard.png","connard_avide.png","connard_enoncant.png","connard_menacant.png","connard_pupitre.png","depite.png","desapointe.png","desapointee.png","effraye.png","etonne.png","facepalm.png","facepalm2.png","fache.png","fbi.png","festif.png","guitare.png","harpon.png","heureux.png","indigne.png","inebranlable.png","inebranlable2.png","ironique.png","journal.png","journaliste_surpris.png","joyeux.png","lisant.png","lisant_a_haute_voix.png","la_mort.png","marchant.png","montre_du_doigt.png","moqueur.png","nauseeux.png","negatif1.png","negatif2.png","negatif3.png","negatif4.png","negatif5.png","non_mais.png","paon.png","pedant.png","pensif.png","pensive.png","positif1.png","positif2.png","positif3.png","positif4.png","positif5.png","psst.png","sabre_laser.png","scandalise.png","se_cache_les_yeux.png","souriante.png","surarme.png","surpris.png","transpirant.png","tsss.png","vador.png","vieille_dame.png","voiture.png"];

cg.clearScreen = function(){
	ctx = c.getContext('2d');
	scene = new RB.Scene(c);
	w = c.width;
	h = c.height;
	fontFamily = "Domestic Manners, Arial, helvetica, sans serif";
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
	var buffer = '';
	var imgString = "<img src='toons/IMG_URL' class='rc mini' alt='toons'></img>";
	var link = "<a href=\"javascript:cg.createImage('toons/IMG_URL')\">";

	for(var i=0; i < miniUrls.length; i++){
		buffer += link.replace(/IMG_URL/, toonUrls[i]);
		buffer += imgString.replace(/IMG_URL/, miniUrls[i]) + '</a>';
	}

	lib.append(buffer);

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

