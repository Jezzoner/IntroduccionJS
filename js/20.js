
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Borrando la canción: ${id}`);
}

reproductor.reproducir(3840); // Reproduciendo canción con el id 3840
reproductor.pausar(); // Pausando...
reproductor.borrarCancion(20); // Borrando canción... 20
reproductor.crearPlaylist('Heavy Metal'); // Creando la playlist
reproductor.reproducirPlaylist('Heavy Metal'); // Reproduciendo la playlist