// alert("Hello world");





// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitati = ["Nick", "Daisy", "James", "Tom"];

var utente = prompt("Inserisci nome");
utente = utente.charAt(0).toUpperCase() + utente.substr(1).toLowerCase();
console.log(utente);

if (invitati.includes(utente)) {
  console.log("sei stato invitato");

} else {
  console.log("non sei stato invitato");
}




// console.log();
