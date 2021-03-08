const fs = require("fs");
const path = require("path");

function writeToFile(fileName, data) {
  console.log('going to write ' + fileName)
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, fileName), data, (err) => {
      if (err) reject(err);
      else {
        console.log('successfully writen to ' + fileName)
        resolve('SUCCESS');
      }
    });
  });
}

function readFromFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, fileName), (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function genRandLenString() {
  const N = parseInt(Math.random() * 10000)
  let charArr = []
  for (let i = 0; i < N; i++) { charArr.push('A') }
  return charArr.join('')
}


writeToFile('a.txt', genRandLenString())
.then(() => writeToFile('b.txt', genRandLenString()))
.then(() => writeToFile('c.txt', genRandLenString()))
.then(() => writeToFile('d.txt', genRandLenString()))
.then(() => writeToFile('e.txt', genRandLenString()))

writeToFile('f.txt', genRandLenString())
.then(() => writeToFile('g.txt', genRandLenString()))
.then(() => writeToFile('h.txt', genRandLenString()))
.then(() => writeToFile('i.txt', genRandLenString()))
.then(() => writeToFile('j.txt', genRandLenString()))

