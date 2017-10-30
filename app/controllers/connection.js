const mysql = require('mysql');

//MySQL Connection ======================================================================
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Interlopers2!',
  database: 'burger_log_db'
});

connection.connect(function(err){
  if(err)throw err;
  console.log('MySQL connection at id: ' + connection.threadId + '\n Data:');
});

// console.log('connection.js imported');
module.exports = connection;

