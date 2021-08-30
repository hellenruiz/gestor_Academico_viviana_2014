const express = require('express');
const router = express.Router();

const {getStudents, createStudent} = require('../controllers/students.controllers');

//Esta ruta hace referencia a /api/student en app.js
router.route('/')
  .get(getStudents) //se llama desde el controlador.Esto genera orden
  .post(createStudent)

module.exports = router;