// alert("Hello world");





// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// 1 Soluzione

// var invitati = ["Nick", "Daisy", "James", "Tom"];
//
// var utente = prompt("Inserisci nome");
// utente = utente.charAt(0).toUpperCase() + utente.substr(1).toLowerCase();
// console.log(utente);
//
// if (invitati.includes(utente)) {
//   console.log("sei stato invitato");
//
// } else {
//   console.log("non sei stato invitato");
// }

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// 2 Soluzione con For Loop

var invitati = ["Nick", "Daisy", "James", "Tom"];
var utente = prompt("Inserisci nome");
utente = utente.charAt(0).toUpperCase() + utente.substr(1).toLowerCase();
var messaggio = false;

for (var i = 0; i < invitati.length; i++) {
  if (utente == invitati[i]) {
    messaggio = true;
  }

}
if (messaggio) {
  console.log("sei stato invitato");
} else {
  console.log("non sei stato invitato");

}








// console.log();
