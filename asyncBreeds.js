// asyncBreeds.js

const fs = require('fs');

const log = (msg) => console.log(msg);

const breedDetailsFromFile = (breed, callback) => {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.\n");
    callback(!error ? data : undefined);
  });
};

module.exports = breedDetailsFromFile;
