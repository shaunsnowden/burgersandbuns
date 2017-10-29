const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dateFormat = require('dateformat');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

var port = process.env.PORT || 8010;
var now = new Date();

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Tells the system to use JSON
app.use(bodyParser.json());

// Handlebars setup and initiate the home page
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/',function(req,res){
    res.render('home');
});

// Expose the public directory to access all files
app.use(express.static(path.join(__dirname, 'public')));
// https://expressjs.com/en/starter/static-files.html

//launch ======================================================================
app.listen(port);
console.log('\nGettin busy on port ' + port);

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

app.get('/',function(req,res){
    connection.query('SELECT * FROM burgers;', function(err,data){
        console.log(JSON.stringify(data));
        res.render('home',{burgers:data});
    })
});


// exports = module.exports = app;