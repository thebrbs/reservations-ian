var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.get('/restaurant/:restaurant_id', function(req, res) {
  res.send(req.params);
}); 

app.listen(3000);

