const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('restaurants.csv');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


const generateRestaurants = function(writer) {
  let i = 0;
  writer.write("restaurant_name|restaurant_open|restaurant_close\n");

   const write = () => {
      
    let ok = true;
    do {
      i++;
      if (i === 0) {
        writer.write(`${faker.company.companyName()}|${getRandomIntInclusive(6,12).toString().padStart(2,"0")}:00:00|${getRandomIntInclusive(13,23)}:00:00`);
        writer.end();
      } else {
        ok = writer.write(`${faker.company.companyName()}|${getRandomIntInclusive(6,12).toString().padStart(2,"0")}:00:00|${getRandomIntInclusive(13,23)}:00:00\n`);
      }
      
    } while (i < 10000000 && ok);
      if (i < 10000000) {
        writer.once('drain', write)
    }
      
  }
  write();
    
}

generateRestaurants(stream);