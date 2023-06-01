const fs = require('fs');
const crearArchivo =async (base = 5) => {

    let salida = '';
    console.log('============================');
    console.log('         TABLA DEL ', base);
    console.log('============================');
    for (let i = 0; i <= 10; i++) {
        salida += (`${base} x ${i} = ${i * base}\n`);
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);


    return('Tabla-5.txt creada!');
    
}


module.exports = {
    crearArchivo
}