const path = require('path');
const express = require('express');
const db = require('../database/db.js');

let app = express();
app.use('/', function(req,res,next) {
  console.log(req.url);
  next();
})
// app.use('/restaurant/:restaurant_id/bootstrap.min.css', express())
app.use('/restaurant/:restaurant_id', express.static(path.join(__dirname, '../public')));

app.get('/restaurant/:restaurant_id/:date', function(req, res) {
  db.grabTimeSlots(req.params.restaurant_id, req.params.date, function(error, data) {
    if (error) {
      res.sendStatus(500);
    }
    res.send(data); 
  }); 
});  
   
module.exports = app;
 