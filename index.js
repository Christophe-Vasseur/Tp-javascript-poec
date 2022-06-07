/**
 * injection du code html dans la balise <body>
 * @param {string} code : code HTML
 */
function injectHtmlBody (code) {
    let body = document.getElementsByTagName('body')[0]
    body.innerHTML = code;
}

// ma superbe variable de code HTML
html = `<header>
<div class="container">
<nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand text-warning" href="#">Mon Super TP JS Responsive</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="./assets/ex1/ex1.html">Le Liste</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="./assets/ex2/ex02.html">L'horloge</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="./assets/ex3/ex3.html">Fizz Buzz</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="./assets/ex4/ex4.html">Fizz Buzz ++</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</header>    

  <div class="container d-flex h-100">
    <div class="row m-5 align-self-center">
      <div class="card mx-1" style="width: 18rem;">
      <img class="card-img-top" src="../assets/images/littlep.jpg" alt="Card image cap">
          <div class="card-body bg-primary text-white">
            <h5 class="card-title">La Liste</h5>
            <h6 class="card-subtitle mb-2 text-muted">Exercice 1</h6>
            <p class="card-text">Vous devez créer une liste qui contiendra les noms de 5 personnages de la série 'Firendship is Magic'. Vous 
              pouvez trouver les noms sur ce lien : https://mlp.fandom.com/fr/wiki/Personnages
              Vous générerez une liste html qui affichera les différents noms de personnages.</p>
            <a class="btn btn-secondary" href="./assets/ex1/ex1.html" role="button">Aller à l'exercice 1</a>

          </div>
      </div>

      <div class="card mx-1" style="width: 18rem;">
      <img class="card-img-top" src="../assets/images/licorne-horloge.jpg" alt="Card image cap">
          <div class="card-body bg-secondary">
            <h5 class="card-title">L'horloge</h5>
            <h6 class="card-subtitle mb-2 text-muted">Exercice 2</h6>
            <p class="card-text">Vous devez créer une horloge qui affiche l'heure à l'écran. L'horloge doit se mettre à jour toutes les secondes 
              pour afficher l'heure actuelle.</p>
            <a class="btn btn-primary" href="./assets/ex2/ex02.html" role="button">Aller à l'exercice 2</a>
          </div>
      </div>

      <div class="card mx-1" style="width: 18rem;">
        <img class="card-img-top" src="../assets/images/fizzbuzz.png" alt="Card image cap">
          <div class="card-body bg-danger">
            <h5 class="card-title">Le FizzBuzz</h5>
            <h6 class="card-subtitle mb-2 text-muted">Exercice 3</h6>
            <p class="card-text">Vous devez créer une page qui affichera la liste de tous les nombres entre 1 et 100. Pour chaque nom, on 
              affichera à coté de ce dernier 'fizz' si le nom est un multiple de 3, 'buzz' si le nom est un multiple de 5 et 
              'fizzbuzz' si le nom est un multiple de 3 et 5. Vous utiliserez une fonction !</p>
            <a class="btn btn-warning" href="./assets/ex3/ex3.html" role="button">Aller à l'exercice 3</a>
          </div>
      </div>

      <div class="card mx-1" style="width: 18rem;">
          <img class="card-img-top" src="../assets/images/fizzbuzzplus.jpg" alt="Card image cap">
          <div class="card-body bg-warning">
            <h5 class="card-title">Le FizzBuzz ++</h5>
            <h6 class="card-subtitle mb-2 text-muted">Exercice 4</h6>
            <p class="card-text">Vous devez créer une page qui reprendra la logique du fizzbuzz. Seul un chiffre sera affiché à l'écran (et 
              fizz/buzz/fizzbuzz si nécessaire) Cette fois, vous utiliserez des boutons pour incrémenter et décrémenter le 
              chiffre. Vous utiliserez une écoute d'événement pour les boutons !</p>
            <a class="btn btn-danger" href="./assets/ex4/ex4.html" role="button">Aller à l'exercice 4</a>
          </div>
      </div>
    </div>  
  </div>`;

  injectHtmlBody(html);
