/**
 * injection du code html dans la balise <body>
 * @param {string} code : code HTML
 */
 function injectHtmlBody (code) {
    let body = document.getElementsByTagName('body')[0]
    body.innerHTML = code;
}

/**
 * Genère le html du FizzBuzz de 1 à 100
 * @returns html (string)
 */
function genereHtmlFizzBuzz() {
    let html = "";
    for(i=1; i<=100; i++) {
        if (i%15 == 0) {
            //console.log(i + " : FIZZ BUZZ");
            html += '<p class="text-center fs-5">' + i + " : FIZZ BUZZ </p>";
        }
        else if (i%3 == 0) {
            //console.log(i + " : FIZZ");
            html += '<p class="text-center fs-5">' + i + " : FIZZ </p>";
        }
        else if (i%5 == 0) {
            //console.log(i + " : BUZZ");
            html += '<p class="text-center fs-5">' + i + " : BUZZ </p>";
        }
        else {
            //console.log(i);
            html += '<p class="text-center fs-5">' + i + "</p>";
        }
    }
    return html;
}

/**
 * Injecte le FizzBuzz dans le DOM à l'Id "fizzbuzz"
 */
function afficheFizzBuzz() {
    let divFizzBuzz = document.getElementById('fizzbuzz');
    let html = genereHtmlFizzBuzz();
    divFizzBuzz.innerHTML = html;    
}

// injection de la structure du HTML
let html = `<div class="container">
<div class="alert alert-success text-center  fs-3">FIZZBUZZ</div>
<div id="fizzbuzz">

</div>
</div>`;
injectHtmlBody(html);

afficheFizzBuzz();
