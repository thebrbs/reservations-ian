const faker = require('faker');
const fs = require('fs');

const stream = fs.createWriteStream('indivtables.csv');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

const generateIndivTables = function(writer) {
  let i = 0;
  writer.write("id|size|restaurant_id\n");

   const write = () => {
      
    let ok = true;
    do {
      i++;
      if (i === 100000001) {
        writer.write(`${i}|${getRandomIntInclusive(2,16)}|${getRandomIntInclusive(1,10000000)}`);
        writer.end();
      } else {
        ok = writer.write(`${i}|${getRandomIntInclusive(2,16)}|${getRandomIntInclusive(1,10000000)}\n`);
      }
      
    } while (i < 100000001 && ok);
      if (i < 100000001) {
        writer.once('drain', write)
    }
      
  }
  write();
    
}

generateIndivTables(stream);