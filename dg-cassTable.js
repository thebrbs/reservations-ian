const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('cass-bookings.csv');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
let i = 0;
const data = () => `${faker.company.companyName()}|${faker.random.number({min:1, max:10})}|${i}|${faker.internet.userName()}|${faker.name.firstName()} ${faker.name.lastName()}|${faker.internet.email()}|${faker.phone.phoneNumberFormat(1)}|${getRandomIntInclusive(1,16)}|${faker.hacker.phrase()}|${(faker.date.future(1)).toJSON().toString().slice(0,11)}${getRandomIntInclusive(6,22).toString().padStart(2,"0")}:00:00.000Z`;

const generateBookings = function(writer) {
    
    writer.write("restaurantName|individualTableId|id|userName|userActualName|email|phoneNumber|partySize|notes|bookDate\n");
  
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