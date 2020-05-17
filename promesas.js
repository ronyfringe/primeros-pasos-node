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

// ejercicio 1 en promesa

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id}`)
        } else {
            resolve(empleadoDB);
        }

    });

}

// getEmpleado(1).then(empleado => {
//     console.log('Empleado de BD', empleado);
// }, (err) => {
//     console.log(err);
// });


//ejercicio 2 en promesa

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }


    });
}

getEmpleado(3).then(empleado => {

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${ resp.nombre} es de ${ resp.salario}$`);
    }, err => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});