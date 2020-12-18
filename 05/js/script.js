// alert("Hello world");

// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci la prima seconda");

if (primaParola.length > secondaParola.length) {
  console.log("La parola più corta è la seconda, la più lunga la prima");
} else if (primaParola.length < secondaParola.length) {
  console.log("La parola più corta è la prima, la più lunga la seconda");
} else {
  console.log("le parole sono uguali");
}









// console.log();
