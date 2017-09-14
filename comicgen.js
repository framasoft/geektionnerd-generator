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

var miniUrls = ["fond1.png", "fond2.png", "fond3.png", "fond4.png", "toon13_mini.png", "toon01_mini.png", "toon02_mini.png", "toon04_mini.png", "toon05_mini.png", "toon07_mini.png", "toon08_mini.png", "toon11_mini.png", "toon09_mini.png", "toon15_mini.png", "toon06_mini.png", "toon10_mini.png", "toon03_mini.png", "toon12_mini.png", "toon14_mini.png", "smiley01.png", "smiley02.png", "smiley03.png", "ballon1_mini.png", "ballon2_mini.png", "ballon3_mini.png", "ballon4_mini.png", "ballon5_mini.png","ballon6_mini.png","ballon7_mini.png","ballon8_mini.png","ballon9_mini.png","ballon10_mini.png","affirmatif_mini.png","agace_mini.png","blagueur_bras_croises_mini.png","blagueur_bras_ecartes_mini.png","blagueur_doigt_leve_mini.png","blagueuse_mini.png","blase_mini.png","boude_mini.png","boudeur_mini.png","chasseur_mini.png","choque_mini.png","connard_mini.png","connard_avide_mini.png","connard_enoncant_mini.png","connard_menacant_mini.png","connard_pupitre_mini.png","depite_mini.png","desapointe_mini.png","desapointee_mini.png","effraye_mini.png","etonne_mini.png","facepalm_mini.png","facepalm2_mini.png","fache_mini.png","fbi_mini.png","festif_mini.png","guitare_mini.png","harpon_mini.png","heureux_mini.png","indigne_mini.png","inebranlable_mini.png","inebranlable2_mini.png","ironique_mini.png","journal_mini.png","journaliste_surpris_mini.png","joyeux_mini.png","lisant_mini.png","lisant_a_haute_voix_mini.png","la_mort_mini.png","marchant_mini.png","montre_du_doigt_mini.png","moqueur_mini.png","nauseeux_mini.png","negatif1_mini.png","negatif2_mini.png","negatif3_mini.png","negatif4_mini.png","negatif5_mini.png","non_mais_mini.png","paon_mini.png","pedant_mini.png","pensif_mini.png","pensive_mini.png","positif1_mini.png","positif2_mini.png","positif3_mini.png","positif4_mini.png","positif5_mini.png","psst_mini.png","sabre_laser_mini.png","scandalise_mini.png","se_cache_les_yeux_mini.png","souriante_mini.png","surarme_mini.png","surpris_mini.png","transpirant_mini.png","tsss_mini.png","vador_mini.png","vieille_dame_mini.png","voiture_mini.png","grisbouille000_mini.png" ,"grisbouille001_mini.png" ,"grisbouille002_mini.png" ,"grisbouille003_mini.png" ,"grisbouille004_mini.png" ,"grisbouille005_mini.png" ,"grisbouille006_mini.png" ,"grisbouille007_mini.png" ,"grisbouille008_mini.png" ,"grisbouille009_mini.png" ,"grisbouille010_mini.png" ,"grisbouille011_mini.png" ,"grisbouille012_mini.png" ,"grisbouille013_mini.png" ,"grisbouille014_mini.png" ,"grisbouille015_mini.png" ,"grisbouille016_mini.png" ,"grisbouille017_mini.png" ,"grisbouille018_mini.png" ,"grisbouille019_mini.png" ,"grisbouille020_mini.png" ,"grisbouille021_mini.png" ,"grisbouille022_mini.png" ,"grisbouille023_mini.png" ,"grisbouille024_mini.png" ,"grisbouille025_mini.png" ,"grisbouille026_mini.png" ,"grisbouille027_mini.png" ,"grisbouille028_mini.png" ,"grisbouille029_mini.png" ,"grisbouille030_mini.png" ,"grisbouille031_mini.png" ,"grisbouille032_mini.png" ,"grisbouille033_mini.png" ,"grisbouille034_mini.png" ,"grisbouille035_mini.png" ,"grisbouille036_mini.png" ,"grisbouille037_mini.png" ,"grisbouille038_mini.png" ,"grisbouille039_mini.png" ,"grisbouille040_mini.png" ,"grisbouille041_mini.png" ,"grisbouille042_mini.png" ,"grisbouille043_mini.png" ,"grisbouille044_mini.png" ,"grisbouille045_mini.png" ,"grisbouille046_mini.png" ,"grisbouille047_mini.png" ,"grisbouille048_mini.png" ,"grisbouille049_mini.png" ,"grisbouille050_mini.png" ,"grisbouille051_mini.png" ,"grisbouille052_mini.png" ,"grisbouille053_mini.png" ,"grisbouille054_mini.png" ,"grisbouille055_mini.png" ,"grisbouille056_mini.png" ,"grisbouille057_mini.png" ,"grisbouille058_mini.png" ,"grisbouille059_mini.png" ,"grisbouille060_mini.png" ,"grisbouille061_mini.png" ,"grisbouille062_mini.png" ,"grisbouille063_mini.png" ,"grisbouille064_mini.png" ,"grisbouille065_mini.png" ,"grisbouille066_mini.png" ,"grisbouille067_mini.png" ,"grisbouille068_mini.png" ,"grisbouille069_mini.png" ,"grisbouille070_mini.png" ,"grisbouille071_mini.png" ,"grisbouille072_mini.png" ,"grisbouille073_mini.png" ,"grisbouille074_mini.png" ,"grisbouille075_mini.png" ,"grisbouille076_mini.png" ,"grisbouille077_mini.png" ,"grisbouille078_mini.png" ,"grisbouille079_mini.png" ,"grisbouille080_mini.png" ,"grisbouille081_mini.png" ,"grisbouille082_mini.png" ,"grisbouille083_mini.png" ,"grisbouille084_mini.png" ,"grisbouille085_mini.png" ,"grisbouille086_mini.png" ,"grisbouille087_mini.png" ,"grisbouille088_mini.png" ,"grisbouille089_mini.png" ,"grisbouille090_mini.png" ,"grisbouille091_mini.png" ,"grisbouille092_mini.png" ,"grisbouille093_mini.png" ,"grisbouille094_mini.png" ,"grisbouille095_mini.png" ,"grisbouille096_mini.png" ,"grisbouille097_mini.png" ,"grisbouille098_mini.png" ,"grisbouille099_mini.png" ,"grisbouille100_mini.png" ,"grisbouille101_mini.png" ,"grisbouille102_mini.png" ,"grisbouille103_mini.png" ,"grisbouille104_mini.png" ,"grisbouille105_mini.png" ,"grisbouille106_mini.png" ,"grisbouille107_mini.png" ,"grisbouille108_mini.png" ,"grisbouille109_mini.png" ,"grisbouille110_mini.png" ,"grisbouille111_mini.png" ,"grisbouille112_mini.png" ,"grisbouille113_mini.png" ,"grisbouille114_mini.png" ,"grisbouille115_mini.png" ,"grisbouille116_mini.png" ,"grisbouille117_mini.png" ,"grisbouille118_mini.png" ,"grisbouille119_mini.png" ,"grisbouille120_mini.png" ,"grisbouille121_mini.png" ,"grisbouille122_mini.png" ,"grisbouille123_mini.png" ,"grisbouille124_mini.png" ,"grisbouille125_mini.png" ,"grisbouille126_mini.png" ,"grisbouille127_mini.png" ,"grisbouille128_mini.png" ,"grisbouille129_mini.png" ,"grisbouille130_mini.png" ,"grisbouille131_mini.png" ,"grisbouille132_mini.png"];
var toonUrls = ["fond1.png", "fond2.png", "fond3.png", "fond4.png", "toon13.png", "toon01.png", "toon02.png",  "toon04.png", "toon05.png", "toon07.png", "toon08.png", "toon11.png", "toon09.png", "toon15.png", "toon06.png", "toon10.png", "toon03.png", "toon12.png", "toon14.png", "smiley01.png", "smiley02.png", "smiley03.png", "ballon1.png", "ballon2.png", "ballon3.png", "ballon4.png", "ballon5.png", "ballon6.png", "ballon7.png","ballon8.png","ballon9.png","ballon10.png","affirmatif.png","agace.png","blagueur_bras_croises.png","blagueur_bras_ecartes.png","blagueur_doigt_leve.png","blagueuse.png","blase.png","boude.png","boudeur.png","chasseur.png","choque.png","connard.png","connard_avide.png","connard_enoncant.png","connard_menacant.png","connard_pupitre.png","depite.png","desapointe.png","desapointee.png","effraye.png","etonne.png","facepalm.png","facepalm2.png","fache.png","fbi.png","festif.png","guitare.png","harpon.png","heureux.png","indigne.png","inebranlable.png","inebranlable2.png","ironique.png","journal.png","journaliste_surpris.png","joyeux.png","lisant.png","lisant_a_haute_voix.png","la_mort.png","marchant.png","montre_du_doigt.png","moqueur.png","nauseeux.png","negatif1.png","negatif2.png","negatif3.png","negatif4.png","negatif5.png","non_mais.png","paon.png","pedant.png","pensif.png","pensive.png","positif1.png","positif2.png","positif3.png","positif4.png","positif5.png","psst.png","sabre_laser.png","scandalise.png","se_cache_les_yeux.png","souriante.png","surarme.png","surpris.png","transpirant.png","tsss.png","vador.png","vieille_dame.png","voiture.png","grisbouille000.png" ,"grisbouille001.png" ,"grisbouille002.png" ,"grisbouille003.png" ,"grisbouille004.png" ,"grisbouille005.png" ,"grisbouille006.png" ,"grisbouille007.png" ,"grisbouille008.png" ,"grisbouille009.png" ,"grisbouille010.png" ,"grisbouille011.png" ,"grisbouille012.png" ,"grisbouille013.png" ,"grisbouille014.png" ,"grisbouille015.png" ,"grisbouille016.png" ,"grisbouille017.png" ,"grisbouille018.png" ,"grisbouille019.png" ,"grisbouille020.png" ,"grisbouille021.png" ,"grisbouille022.png" ,"grisbouille023.png" ,"grisbouille024.png" ,"grisbouille025.png" ,"grisbouille026.png" ,"grisbouille027.png" ,"grisbouille028.png" ,"grisbouille029.png" ,"grisbouille030.png" ,"grisbouille031.png" ,"grisbouille032.png" ,"grisbouille033.png" ,"grisbouille034.png" ,"grisbouille035.png" ,"grisbouille036.png" ,"grisbouille037.png" ,"grisbouille038.png" ,"grisbouille039.png" ,"grisbouille040.png" ,"grisbouille041.png" ,"grisbouille042.png" ,"grisbouille043.png" ,"grisbouille044.png" ,"grisbouille045.png" ,"grisbouille046.png" ,"grisbouille047.png" ,"grisbouille048.png" ,"grisbouille049.png" ,"grisbouille050.png" ,"grisbouille051.png" ,"grisbouille052.png" ,"grisbouille053.png" ,"grisbouille054.png" ,"grisbouille055.png" ,"grisbouille056.png" ,"grisbouille057.png" ,"grisbouille058.png" ,"grisbouille059.png" ,"grisbouille060.png" ,"grisbouille061.png" ,"grisbouille062.png" ,"grisbouille063.png" ,"grisbouille064.png" ,"grisbouille065.png" ,"grisbouille066.png" ,"grisbouille067.png" ,"grisbouille068.png" ,"grisbouille069.png" ,"grisbouille070.png" ,"grisbouille071.png" ,"grisbouille072.png" ,"grisbouille073.png" ,"grisbouille074.png" ,"grisbouille075.png" ,"grisbouille076.png" ,"grisbouille077.png" ,"grisbouille078.png" ,"grisbouille079.png" ,"grisbouille080.png" ,"grisbouille081.png" ,"grisbouille082.png" ,"grisbouille083.png" ,"grisbouille084.png" ,"grisbouille085.png" ,"grisbouille086.png" ,"grisbouille087.png" ,"grisbouille088.png" ,"grisbouille089.png" ,"grisbouille090.png" ,"grisbouille091.png" ,"grisbouille092.png" ,"grisbouille093.png" ,"grisbouille094.png" ,"grisbouille095.png" ,"grisbouille096.png" ,"grisbouille097.png" ,"grisbouille098.png" ,"grisbouille099.png" ,"grisbouille100.png" ,"grisbouille101.png" ,"grisbouille102.png" ,"grisbouille103.png" ,"grisbouille104.png" ,"grisbouille105.png" ,"grisbouille106.png" ,"grisbouille107.png" ,"grisbouille108.png" ,"grisbouille109.png" ,"grisbouille110.png" ,"grisbouille111.png" ,"grisbouille112.png" ,"grisbouille113.png" ,"grisbouille114.png" ,"grisbouille115.png" ,"grisbouille116.png" ,"grisbouille117.png" ,"grisbouille118.png" ,"grisbouille119.png" ,"grisbouille120.png" ,"grisbouille121.png" ,"grisbouille122.png" ,"grisbouille123.png" ,"grisbouille124.png" ,"grisbouille125.png" ,"grisbouille126.png" ,"grisbouille127.png" ,"grisbouille128.png" ,"grisbouille129.png" ,"grisbouille130.png" ,"grisbouille131.png" ,"grisbouille132.png" ];

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

cg.hoverdiv = function(e,divid){

    var left  = e.clientX  + "px";
    var top  = e.clientY  + "px";

    
    var div = document.getElementById(divid);
    div.style.left = left;
    div.style.top = top;

    $("#"+divid).toggle();
    return false;
}
cg.sourceSwap = function (e) {
    var img_mini = $(this);
    var img_id = parseInt(img_mini.data('src-id'));
    var img_url = toonUrls[img_id];
    console.log(img_url)
    $("#bigImg").attr('src','toons/' + img_url);
    cg.hoverdiv(e,"focusImg")
}
cg.buildMinis = function(){
	var buffer = '';
	var imgString = "<img src='toons/IMG_URL' data-src-id='IMG_ID' class='rc mini' alt='toons'></img>";
	var link = "<a href=\"javascript:cg.createImage('toons/IMG_URL')\">";

	for(var i=0; i < miniUrls.length; i++){
		buffer += link.replace(/IMG_URL/, toonUrls[i]);
		buffer += imgString.replace(/IMG_URL/, miniUrls[i]).replace(/IMG_ID/, i) + '</a>';
	}

	lib.append(buffer);

	//lib.append( $('#textTool').clone() );
	$('#menuContainer').append( $('#instructs').clone() );
        $(function () {
          $('img.rc').hover(cg.sourceSwap, cg.sourceSwap);
        });
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

