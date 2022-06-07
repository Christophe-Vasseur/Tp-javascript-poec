/**
 * injection du code html dans la balise <body>
 * @param {string} code : code HTML
 */
 function injectHtmlBody (code) {
    let body = document.getElementsByTagName('body')[0]
    body.innerHTML = code;
}

/**
 * Injection dans le DOM du "compteur"
 * @param {*} compteur (int)
 */
 function affichageFizzBuzz(compteur) {
    if (compteur%15 == 0) {
        affichage.innerHTML = compteur + " FizzBuzz";
    }else if (compteur%3 == 0) {
        affichage.innerHTML = compteur + " Fizz";
    }else if (compteur%5 == 0) {
        affichage.innerHTML = compteur + " Buzz";
    } else {
        affichage.innerHTML = compteur;
    }    
}


// injection de la structure du HTML
let html=`<div class="container">
<div class="alert alert-success text-center  fs-3">FIZZBUZZ ++</div>
<div>
    <button type="button" id="plus" class="btn btn-success">Plus</button>
    <p id="affichage">1</p>
    <button type="button" id="moins" class="btn btn-info">Moins</button>

</div>
</div>`;
injectHtmlBody(html);

// recupération des id du DOM
let boutonPlus = document.getElementById("plus");
let boutonMoins = document.getElementById("moins");
let affichage = document.getElementById("affichage");

// Initialisation du compteur
let compteur = 1;

/**
 * Ecouteur du bouton "Plus"
 */
boutonPlus.addEventListener("click", (event) => {
    compteur++;
    affichageFizzBuzz(compteur);
})

/**
 * Ecouteur du bouton "Moins"
 */
boutonMoins.addEventListener("click", (event)=>{
    if (compteur > 1) {
        compteur--;    
    }
    affichageFizzBuzz(compteur);
})

