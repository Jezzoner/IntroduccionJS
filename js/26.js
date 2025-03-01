// this

const reservation = {
    nombre: 'Jesus',
    apellido: 'Castro',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservation.informacion();
// El cliente Jesus reservo y su cantidad a pagar es de 5000