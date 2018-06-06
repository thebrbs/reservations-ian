const path = require('path');
const express = require('express');

let app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.send();
});

app.get('/restaurant/:restaurant_id', function(req, res) {
  res.send(req.params);
}); 

module.exports = app;