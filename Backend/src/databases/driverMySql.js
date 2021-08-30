const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost',
  password: '',
  database: 'guillermo'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('mysql =========> Conexión exitosa');
});

module.exports = mysql;