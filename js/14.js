// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

// console.table(numeros);   // [10, 20, 30, 40, 50]

const meses1 = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');


// // Un arreglo que contiene datos de todo tipo
// const deTodo = ['Hola', 10, true, 'si', null, {nombre: 'Juan', trabajo: 'Programador'}, [1, 2, 3]];

// console.table(deTodo);   // ["Hola", 10, true, "si", null, {…}, Array(3)]

// Acceder a los valores de un arreglo
// console.log(numeros[4]);   // 30
// console.log(meses[2]);   // Marzo
// console.log(deTodo[6]);   // [1, 2, 3]

// Conocer la extensión de un arreglo
// console.log(meses.length);   // 5

// numeros.forEach(function(numero) {
//     console.log(numero);
// });

// Agregar elementos a un arreglo
// numeros[5] = 60;
//numeros[5] = 60;

numeros.push(60,70);   // Agrega al final del arreglo
numeros.push(80);

numeros.unshift(-10, -20, -30);   // Agrega al inicio del arreglo

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop();   // Elimina el último elemento del arreglo
// meses.shift();   // Elimina el primer elemento del arreglo
meses.splice(2, 1);   // Elimina un elemento en la posición indicada

console.table(meses);   // ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, 'Junio'];

console.table(nuevoArreglo);   // ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

