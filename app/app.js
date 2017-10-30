const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dateFormat = require('dateformat');
const exphbs = require('express-handlebars');

const routes = require('./controllers/home.js');

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

app.use('/', routes);

// Expose the public directory to access all files
app.use(express.static(path.join(__dirname, 'public')));
// https://expressjs.com/en/starter/static-files.html

//launch ======================================================================
app.listen(port);
console.log('\nGettin busy on port ' + port);




// exports = module.exports = app;