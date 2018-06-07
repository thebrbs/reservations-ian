const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'global_bookings',
});

let grabTimeSlots = (rest_id, date, cb) => {
  let q = 'SELECT * FROM bookings WHERE (restaurant_id = ' + rest_id + ' && date = ' + JSON.stringify(date) + ')';
  connection.query(q, function(error, results, fields) {
    if (error) {
      throw error;
    }
    cb(results);
  });
}
let postTimeSlot = (rest_id, date, time, cb) => {
  let q = 'INSERT INTO bookings (restaurant_id, date, time) VALUES (?, ?, ?)';
  connection.query(q, function(error, results, fields) {
    if (error) {
      throw error;
    }
  });
}
 
module.exports.grabTimeSlots = grabTimeSlots;
