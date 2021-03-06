const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dateFormat = require('dateformat');
const exphbs = require('express-handlebars');

const router = require('./controllers/home.js');
var connection = require('./controllers/connection.js');

var port = process.env.PORT || 8010;
var now = new Date();

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Tells the system to use JSON
app.use(bodyParser.json());

// Handlebars setup and initiate the home page
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// app.get('/',function(req,res){
//     res.render('home');
// });

app.post('/create', function(req,res){
  connection.query('INSERT INTO burgers (burger) VALUES (?);',[req.body.burger], function(err,result){
    if(err) throw err;
    res.redirect('/');
  });
});

app.put('/update', function(req,res){
  connection.query('UPDATE burgers SET eaten_by=?, has_been_eaten=1 WHERE id=?;',[req.body.eatenBy, req.body.burgerID], function(err,results){
    if(err) throw err;
    console.log("\n"+ [req.body.eatenBy, req.body.burgerID] + "\n");
    res.redirect('/');
  });
});

app.use('/', router);

// Expose the public directory to access all files
app.use(express.static(path.join(__dirname, 'public')));
// https://expressjs.com/en/starter/static-files.html

//launch ======================================================================
app.listen(port);
console.log('\nGettin busy on port ' + port);




// exports = module.exports = app;