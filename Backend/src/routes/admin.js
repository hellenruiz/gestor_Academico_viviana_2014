const express = require('express');
const router = express.Router();

//Esta ruta hace referencia a /api/admin en app.js
router.route('/')
  .get((req, res) => res.send("Admin page"));

module.exports = router;