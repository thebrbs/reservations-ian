// define server here
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.get('/', function(req, res) {
	console.log('SERVER GET WORKS');
})
// app.use()
app.listen(3000);   