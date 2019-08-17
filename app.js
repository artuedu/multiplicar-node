//requireds
const argv = require('./config/yargs.js').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(
            mensaje => console.log(colors.green(mensaje))
        ).catch(
            error => console.log(error)
        );
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(
            archivo => console.log(colors.green(`Archivo creado: ${archivo}`))
        ).catch(
            error => console.log(error)
        );
        break;
    default:
        console.log('Comando no reconocido');
}