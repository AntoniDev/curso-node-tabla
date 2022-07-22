
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


/********PROMISE****************/
// const crearArchivo = (base = 5) => {

//     return new Promise( (resolve, reject) => { 
//         let salida = '';

//         console.log('==========================');
//         console.log('      Tabla del:', base );
//         console.log('==========================');

//         for (let i = 1; i <= 10; i++) {
//             salida +=`${ base } x ${ i } = ${ base * i }\n`;
//             // console.log(`${ base } x ${ i } = ${ base * i }`);
//         }

//         console.log(salida);

//         fs.writeFileSync( `tabla-${ base }.txt`, salida );

//         resolve(`tabla-${ base }.txt`);
//     }) 
// } 

/*********ASYNC******************/

const crearArchivo = async(base = 5, listar = false, hasta = 10 ) => {
    try {
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida +=`${ base } x ${ i } = ${ base * i }\n`;
            consola +=`${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
            // console.log(`${ base } x ${ i } = ${ base * i }`);
        }

        if (listar) {
            console.log('=========================='.green);
            console.log('      Tabla del:'.green, colors.blue(base) );
            console.log('=========================='.green);
            console.log(consola);
        } 
        

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err
    }     
} 

module.exports = {
    crearArchivo
}