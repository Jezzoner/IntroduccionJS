// String o Cadena de Texto
const tweet = "Monitor 20\" Pulgadas"; // \ es un caracter de escape
//const producto2 = String('Monitor 24 Pulgadas');
//const producto3 = new String('Monitor 50 Pulgadas');
const producto2 = "Monitor HD";
const email = "correo@correo.com"

// Length
console.log(tweet.length);
//console.log(producto2);
//console.log(producto3);
console.log(producto2);

// IndexOf
console.log(tweet.indexOf('Pulgadas'));
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));

// Includes
console.log(tweet.includes('Pulgadas'));
console.log(producto2.includes('Tablet'));