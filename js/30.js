



const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = true;8

    if(auth) {
        resolve('Usuario Autenticado'); // El promise se cumple
    } else {
        reject('No se puede iniciar sesion'); // El promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado) )
    .catch( error => console.log(error) );

// En los promises existen 3 valores posibles
// - Fulfill: El promise se cumple
// - Reject: El promise no se cumple
// - Pending: No se ha cumplido y tampoco se ha rechazado