// variabili js

// varieabile nome
var nome = prompt("come ti chiami?");
console.log(nome);

// variabile cognome
var cognome = prompt("qual'e' il tuo cognome?");
console.log(cognome);

// variabile colore
var colore = prompt("qual'e' il tuo colore preferito?");
console.log(colore);

// variabile numero
var numero = prompt("qual'e' il tuo numero preferito?");
console.log(numero);

// text da js
console.log(nome + cognome + colore + numero);

document.getElementById('title').innerHTML = nome + cognome + colore + numero;

// text da js con spazi
console.log(nome + " " + cognome + " " + colore + " " + numero);

document.getElementById('title').innerHTML = nome + " " + cognome + " " + colore + " " + numero;
