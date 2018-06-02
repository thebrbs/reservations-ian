var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, './public')));
// app.get('/', function(req, res) {
// 	console.log('SERVER GET WORKS');
// })
// app.use()
app.listen(3000);   