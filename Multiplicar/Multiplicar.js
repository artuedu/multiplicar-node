//requireds
const fs = require('fs'); //Es propia de node
// const fs = require('express'); // No existe, es un paquete que se instala
// const fs = require('fs'); //Archivos que creamos en el proyecto inician con ./ o 

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i} \n`;
        }

        resolve(contenido);

    });
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base * i} \n`;
        }

        const data = new Uint8Array(Buffer.from(contenido));

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}