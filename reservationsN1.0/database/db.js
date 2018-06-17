const mysql = require('mysql');
const key = require('./config.js');

let connection = mysql.createConnection({
  host: key.endpoint,
  user: key.user,
  database: key.database,
  password: key.password,
  port: key.rdsport,
});

let grabTimeSlots = (rest_id, date, cb) => {
  let q = 'SELECT * FROM bookings WHERE (restaurant_id = ' + rest_id + ' && date = ' + JSON.stringify(date) + ')';
  connection.query(q, function(error, results, fields) {
    if (error) {
      throw error;
    }
    cb(error, results); 
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
