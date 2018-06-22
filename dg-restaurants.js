const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('restaurants.csv');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


const generateRestaurants = function(writer) {
  let i = 10000000;
  writer.write("[name],[open],[close]\n");

   const write = () => {
      
    let ok = true;
    do {
      i--;
      if (i === 0) {
        writer.write(`${faker.company.companyName()},${getRandomIntInclusive(6,12).toString().padStart(2,"0")}:00,${getRandomIntInclusive(13,23)}:00`);
        writer.end();
      } else {
        if (i % 100000 === 0) {
          console.log(i);
        }
        ok = writer.write(`${faker.company.companyName()},${getRandomIntInclusive(6,12).toString().padStart(2,"0")}:00,${getRandomIntInclusive(13,23)}:00\n`);
      }
      
    } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write)
    }
      
  }
  write();
    
}

generateRestaurants(stream);