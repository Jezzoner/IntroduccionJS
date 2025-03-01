// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor

function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}



function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}


//crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop"', 1200, false);
const producto4 = new Producto('Teclado"', 50, true);
const producto5 = new Producto('Celular"', 500, false);

const cliente = new Cliente('Jesus', 'Castro');

console.log(cliente);

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

console.log(formatearProducto(producto2));
console.log(formatearProducto(producto3));
