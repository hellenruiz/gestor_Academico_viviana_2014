//iMPORTANDO LOS MODULOS  Usamos la variables de ambiente en el archivo .env
require('dotenv').config();

const app = require('./app');
require('./databases/driverMongoDB');
app.set('port', process.env.PORT || 4000);


/**
 * función que ejecutará el programa (Inicia)
 */
async function main () {
	await app.listen(app.get('port')); //Asincrono método.
    console.log(`Server on port ${app.get('port')}`);
}

main();