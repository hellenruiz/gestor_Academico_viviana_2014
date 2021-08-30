const express = require('express');
const router = express.Router();

//Esta ruta hace referencia a /api/teacher en app.js
router.route('/')
  .get((req, res) => res.send({message:"GET - teacher page"}))
  .post((req, res) => res.send({message:"GET - teacher page"}))


router.route('/:id')
  //.get((req, res) );
  //.put((req, res) );
  //.delete((req, res) );
module.exports = router;