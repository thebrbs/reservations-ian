var sample = require('./exampleData.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'global_bookings',
});
var randomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
var time = 
[
	'5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM',
	'7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
	'10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00PM',
	'1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
	'3:30 PM', '4:00 PM', '4:30 PM','5:00 PM', '5:30 PM',
	'6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
	'8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM',
	'11:00 PM', 
];
var q = 'INSERT INTO bookings (party_size, date, party_size_max, time, restaurant_id) VALUES (?, ?, ?, ?, ?)';
for (var i = 0; i < sample.data.length; i++) {
	connection.query(q, [sample.data[i].partySize, sample.data[i].date, randomNum(5,15), time[randomNum(0,35)], randomNum(1001,1100)], function(err, results) {
		if (err) {
			console.log("ERR entry " + i + " with " + sample.data[i].partySize, sample.data[i].date, err);
		}
	});
}
connection.close();