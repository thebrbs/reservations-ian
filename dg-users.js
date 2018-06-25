const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('users.csv');

const generateUsers = function(writer) {
  let i = 0;
  writer.write("id|username|actual_name|email|phonenumber\n");

   const write = () => {
      
    let ok = true;
    do {
      i++;
      if (i === 10000001) {
        writer.write(`${i}|${faker.internet.userName()}|${faker.name.firstName()} ${faker.name.lastName()}|${faker.internet.email()}|${faker.phone.phoneNumberFormat(1)}`);
        writer.end();
      } else {
        ok = writer.write(`${i}|${faker.internet.userName()}|${faker.name.firstName()} ${faker.name.lastName()}|${faker.internet.email()}|${faker.phone.phoneNumberFormat(1)}\n`);
      }
    } while (i < 10000001 && ok);
      if (i < 10000001) {
        writer.once('drain', write)
    }
      
  }
  write();
    
}

generateUsers(stream);