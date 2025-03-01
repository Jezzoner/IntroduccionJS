// Clases

// Clase: es una plantilla para crear objetos, un objeto es una instancia de una clase

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

    obtenerPrecio() {
        return `El precio es ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, true);
const producto3 = new Producto('Laptop"', 1200, false);

// Herencia

class Libro extends Producto{
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '1234567890');

console.log(libro.formatearProducto());

console.log(producto2.formatearProducto());
// console.log(producto3);
// console.log(producto2.obtenerPrecio());