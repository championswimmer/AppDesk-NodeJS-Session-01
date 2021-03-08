const fs = require("fs");
const path = require("path");

function writeToFile(fileName, data) {
  const realStart = Date.now()
  console.log('going to write ' + fileName)
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, fileName), data, (err) => {
      if (err) reject(err);
      else {
        console.log('successfully writen to ' + fileName)
        const realEnd = Date.now()
        console.log('real time taken = ', realEnd - realStart)
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

const start = Date.now()
const p = writeToFile('a.txt', genRandLenString())

setTimeout(() => {
  
  p.then(() => {
    const end = Date.now()
    console.log('time taken by promise = ', end - start)
  })

}, 3000)