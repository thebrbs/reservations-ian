
let grabTimeSlots = (rest_id, date, cb) => {
  let q = 'SELECT * FROM bookings WHERE (restaurant_id = ' + rest_id + ' && date = ' + JSON.stringify(date) + ');';
  connection.query(q, function(error, results, fields) {
    if (error) {
      throw error;
    }
    cb(error, results); 
  });
}