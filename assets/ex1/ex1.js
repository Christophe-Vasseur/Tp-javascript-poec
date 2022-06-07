/**
 * injection du code html dans la balise <body>
 * @param {string} code : code HTML
 */
 function injectHtmlBody (code) {
    let body = document.getElementsByTagName('body')[0]
    body.innerHTML = code;
}

// injection de la structure HTML dans le DOM
let html = `<div class="container">
<div class="alert alert-success fs-3 text-center">PERSONNAGE FIREDSHIP IS MAGIC</div>
<ul class="list-group text-center fs-4" id="liste">
    
</ul>
</div>`;
injectHtmlBody(html);

const tabPersonnage = ["Twilight Sparkle", "Applejack", "Fluttershy", "Rarity", "Pinkie Pie", "Rainbow Dash", "Spike"];

//Récupération de l'Id "liste"
let listePersonnage = document.getElementById('liste');

// Génération du code html des balises <li> 
let list = ""
for(let i=0; i<tabPersonnage.length; i++) {
    list += `<li class="list-group-item"> ${tabPersonnage[i]}</li>`;
}
// injection dans le DOM
listePersonnage.innerHTML = list;