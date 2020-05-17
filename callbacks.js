let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Hercules',
        id
    }

    callback(usuario);

}

getUsuarioById(10, (usuario) => {
    console.log('Usuario de base de datos', usuario);

});