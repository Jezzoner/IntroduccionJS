async function obtenerEmpleados() {

    const archivo = 'empleados.json';
    // fetch(archivo)
    //     .then( resultado => resultado.json())
    //     .then( datos => {

    //         const { empleados } = datos;
    //         //console.log(empleados);
    //         empleados.forEach( empleado => {
    //             //console.log(empleado)
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);

    //             document.querySelector('.json').textContent += empleado.nombre;
    //             document.querySelector('.json').textContent += empleado.puesto;
    //         });
    //    })
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();