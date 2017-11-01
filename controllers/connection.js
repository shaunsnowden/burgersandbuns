const mysql = require('mysql');
var connection;

//MySQL Connection ======================================================================
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Interlopers2!',
    database: 'burger_log_db'
  });
}

connection.connect(function(err){
  if(err)throw err;
  console.log('MySQL connection at id: ' + connection.threadId + '\n Data:');
});

console.log('connection.js imported');
module.exports = connection;

