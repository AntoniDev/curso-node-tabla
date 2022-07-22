const argv = require('yargs')
                // .option('b', {
                //     alias: 'base',
                //     type: 'number',
                //     demandOption: true,
                //     describe: 'Es la base de la tabla de multiplicar'
                // })
                // .option('l', {
                //     alias: 'listar',
                //     type: 'boolean',
                //     demandOption: true,
                //     default: 'false',
                //     description: 'Muestra la tabla en consola'
                // })
                .options( {
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: 'false',
                        description: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        description: 'Límite de la tabla'
                    }
                } )
                .check( (argv, options ) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    }
                    if( isNaN( argv.h ) ){
                        throw 'El límite tiene que ser un número entre 1 y 100'
                    }
                    if (argv.h < 1 || argv.h > 100) {
                        throw 'El límite tiene que ser un número entre 1 y 100'
                    }
                    return true;
                })   
                .argv


module.exports = argv;