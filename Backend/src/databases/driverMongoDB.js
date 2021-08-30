const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost:27017/databasetest";

mongoose.connect(URI)
  .then(db => console.log('MongoDB =========> Conexión exitosa'))
  .catch(error => console.error(error));

module.exports = mongoose;