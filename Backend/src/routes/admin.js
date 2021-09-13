
const express = require('express');

const router = express.Router();




//llamnado controlador

const {getAdmins, getAdmin, createProfesor} = require('../controllers/admin.controllers');


//Esta ruta hace referencia a /api/admin en app.js


router.route('/')

    .get(getAdmins); 



router.route('/:id')

    .get(getAdmin); 












module.exports = router;