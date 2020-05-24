//requires
const fs = require('fs');

let base = 7; // aca cambias el nro para que te cambie el factor de la tabla 
let data = '';

for (let i = 1; i <= 10; i++) {
    data += (`${base} * ${ i } = ${base * i}\n`);
}

fs.writeFile(`tablas/ tabla ${ base }.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla ${ base }.txt ha sido creado !`); // para que se vean los cambios tuve que cambiar de tabla-2 a tabla-3
});