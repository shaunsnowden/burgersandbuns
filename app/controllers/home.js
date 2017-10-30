var connection = require('./connection.js');
const express = require('express');

var router = express.Router();

router.get('/',function(req,res){
  connection.query('SELECT * FROM burgers', function(err,data){
    if (err)throw err;
    console.log(data);
    res.render('home',{burgers:data});
  })
});

// console.log('home.js imported')

module.exports = router;