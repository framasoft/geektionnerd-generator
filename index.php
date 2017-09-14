<!DOCTYPE html>
<html manifest="comicgen.appcache">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="gege.css"/>
<title>GéGé, Geektionnerd Generator</title>
 </head>
<body>

<!-- ajout conteneur global -->
<div id="wrapper">
  <div id="focusImg" style="display:none;"><img id="bigImg"/></div>
<!-- tableau de bord -->

	<div id="tableauDeBord">
 		<div id="menuContainer">
	<h1><span class="hidden">GéGé</span><img src="images/banniere_gege.png" width="240" height="74" alt="Banniere du generateur GKND" ></h1>
	<p class="hidden">Geektionnerd Generator</p>
			<div id="lib" class="rc">
			<div><label for="newText"><span class="hidden">Saisissez votre bulle</span></label> <input type="text" id="newText" placeholder="Saisissez votre bulle" onkeypress="cg.createTextFromInput(event)"/></div>
			</div>
	</div>
	
<div id="hiddenObjs">
	<div id="textTool" class="rc mini textTool" title="Ajouter du texte" onclick="cg.createText();">T</div>
	
	<div id="instructs" class="rc instructions">
		<h2>Instructions</h2>
		<ul>
			<li><em>Flêche bas</em>: rétrécir</li>
			<li><em>Flêche haut</em>: agrandir</li>
			<li><em>Gauche/Droite</em>: retournement horizontal</li>
			<li><em>Del</em>: effacer l'objet</li>
		</ul>

	</div></div>
<div id="toolbar" class="rcBottom">
	
	<h2 class="save"><a href="javascript:cg.saveImage();" title="enregistrer l image">Enregistrer votre image</a></h2>
<h2 class="last">Redimensionner la fenêtre</h2> 
	<p><a href="javascript:cg.setScreen(800, 600)" title="choisir une autre taille d ecran" png">800x600</a> | 
	<a href="javascript:cg.setScreen(640, 480)" title="choisir une autre taille d ecran">640x480</a> | 
	<a href="javascript:cg.setScreen(320, 240)" title="choisir une autre taille d ecran">320x240</a></p>
</div></div>
<!-- fin tableau de bord -->

	<div id="cscreen">
		<canvas class="rc" id="c" width="800" height="600">
			Le générateur du GKND a besoin d'un navigateur récent et de javascript pour fonctionner.
		</canvas>
	</div>
<footer>
	<p>Le Geektionnerd et l'intégralité de son contenu (images et textes) sont l'oeuvre de Simon "Gee" Giraudot et diffusés sous licence Creative Commons By-Sa.<br/>
	Découvrez le Geektionnerd sur <a href="http://geektionnerd.net/" title="Suivez les aventures du GKND sur le site dédié">http://geektionnerd.net/</a> et <a href="http://enventelibre.org/catalog/par-association/framasoft" title="Acheter l'album sur En Vente Libre">en album.</a><br/>

	Gégé est une adaptation de <a href="https://github.com/chambs/comicgen" title="Code source de l'auteur original sur Github">Comic Gen de Chamb</a> réalisée par Cyrille Largillier pour <a href="http://framasoft.org" title="Vous ne connaissez pas encore Framasoft ?">Framasoft</a>.</p>
</footer>
<script type="text/javascript" src="jquery-1.5.2.min.js"></script>
<script type="text/javascript" src="ragaboom.min.js"></script>
<script type="text/javascript" src="comicgen.js"></script>

</div>
</body>
</html>
