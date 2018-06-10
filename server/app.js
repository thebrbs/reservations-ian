const path = require('path');
const express = require('express');
const db = require('../database/db.js');

let app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.send();
});

app.get('/restaurant/:restaurant_id/:date', function(req, res) {
  db.grabTimeSlots(req.params.restaurant_id, req.params.date, function(data) {
    res.send(data); 
  }); 
});  

module.exports = app;
