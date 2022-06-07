/**
 * injection du code html dans la balise <body>
 * @param {string} code : code HTML
 */
 function injectHtmlBody (code) {
    let body = document.getElementsByTagName('body')[0]
    body.innerHTML = code;
}

/**
 * Affiche l'heure à l'id "heure"
 */
function afficheHeure() {
    let ladate=new Date(); // création d'une variable date/heure
    // récupération de l'Id "heure" du fichier html
    let divHeure = document.getElementById('heure');
    //let essai = ladate.getHours();
    divHeure.innerHTML = "HEURE : " + ladate.getHours() + ":" + ladate.getMinutes()+ ":" + ladate.getSeconds();
    setTimeout(afficheHeure, 1000); // Relance la function 
}


// injection de la structure HTML dans le DOM
let html = `<div class="container">
<div class="alert alert-success text-center  fs-3">HORLOGE</div>
<div id="heure">
    
</div>
</div>`;
injectHtmlBody(html);

afficheHeure();