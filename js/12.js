"use strict"; // correr JS en modo estricto

// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Object.freeze(producto); // No se puede modificar el objeto

Object.seal(producto); // No se puede agregar ni eliminar propiedades pero si modificar las existentes

producto.precio = "Nuevo precio"; // Se puede modificar la propiedad del objeto

// producto.imagen = "imagen.jpg";

//console.log(Object.isFrozen(producto));

console.log(producto);