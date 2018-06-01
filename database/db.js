// connect to db
var sample = require('./exampleData.js'); //sample data.
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost:3000',
	user: 'root',
	database: 'globalBookings',
});
var randomRest = () => { //gen num from 1-100.
	min = 1; 
	max = 100; 
	return Math.floor(Math.random() * (max - min + 1)) + min;
} 
var randomTime = () => { ////gen random index. 0 - 47. Time
	min = 0;
	max = 47;
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var injectData = () => {
	var q = 'INSERT INTO bookings (partySize, date, time, restaurant_id) VALUES (?, ?, ?, ?)';
	for (var i = 0; i < sample.data.length; i++) { //Insert 500 random datasets into table bookings. (REFER TO SCHEMA IF NEEDED).
		connection.query(q, [sample.data.partySize[i], sample.data.date[i], time[randomTime(), randomRest()], function(err, results, body) {
			if (err) {
				console.log("ERR in db.js database", err);
			} else {
				//cb the bdy.
			}
		});
	}
}

// time length is 47
var time = ['12:00 am', '12:30 am', '1:00 am', '1:30 am', '2:00 am',
						'2:30 am', '3:00 am', '3:30 am', '4:00 am', '4:30 am',
						'5:00 am', '5:30 am', '6:00 am', '6:30 am', '7:00 am',
						'7:30 am', '8:00 am', '8:30 am', '9:00 am', '9:30 am',
						'10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00pm',
						'1:00 pm', '1:30 pm', '2:00 pm',
						'2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm',
						'5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm',
						'7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm',
						'10:00 pm', '10:30 pm', '11:00 pm', '11:30 pm'];