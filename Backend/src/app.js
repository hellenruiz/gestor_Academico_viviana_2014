const express = require('express');
const morgan = require('morgan');
const path = require('path');

const cors = require('cors'); //Permite la conexión entre dos servidores (Front-end y Back-end);


const app = express();

// Db connection
//const { mongoose } = require('./drivers_databases/driverMongoDB');
//const { mysql } = require('./drivers_databases/driverMySql');

// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors()); //Cada petición que llegue podrá enviar y recibir datos
app.use(morgan('dev'));
app.use(express.json());

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/teacher', require('./routes/teachers'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/student', require('./routes/students'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

module.exports = app;