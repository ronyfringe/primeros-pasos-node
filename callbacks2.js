let empleados = [{
    id: 1,
    nombre: 'Hercules'
}, {
    id: 2,
    nombre: 'Princesa'
}, {
    id: 3,
    nombre: 'Henry'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


// ejercicio 1

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${ id}`)
    } else {
        callback(null, empleadoDB);
    }

}

// getEmpleado(1);


//ejercicio 2 

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(2, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };

        console.log(`El salario de ${ resp.nombre } es de ${resp.salario }$`);

    })
});