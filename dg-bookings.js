const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('bookings.csv');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
let i;
const data = () => `${faker.random.number({min:1, max:10000000})}|${faker.random.number({min:1, max:10000000})}|${faker.random.number({min:1, max:100000000})}|${faker.random.number({min:1, max:16})}|${faker.hacker.phrase()}|${(faker.date.future(1)).toJSON().toString().slice(0,11)}${getRandomIntInclusive(6,22).toString().padStart(2,"0")}:00:00.000Z`;

const generateBookings = function(writer) {

    writer.write("users_id|restaurant_id|table_id|partysize|notes|bookDate\n");
     i = 0;
     const write = () => {
        
      let ok = true;
      do {
        i++;
        if (i === 75000001) {
          writer.write(data());
          writer.end();
        } else {
          ok = writer.write(data()+"\n");
        }
        
      } while (i < 75000001 && ok);
        if (i < 75000001) {
          writer.once('drain', write)
      }
        
    }
    write();
      
  }

generateBookings(stream);