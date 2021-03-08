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


async function task1 () {

  const group1 = Promise.all([
    writeToFile('a.txt', genRandLenString()),
    writeToFile('b.txt', genRandLenString()),
    writeToFile('c.txt', genRandLenString()),
    writeToFile('d.txt', genRandLenString())
  ])
  
  const group2 = Promise.all([
    writeToFile('e.txt', genRandLenString()),
    writeToFile('f.txt', genRandLenString()),
    writeToFile('g.txt', genRandLenString()),
    writeToFile('h.txt', genRandLenString())
  ])

  let results1 = await group1 
  let results2 = await group2
  console.log('res1', results1)
}

let x = setInterval(() => {
  console.log('running')
}, 5)

setTimeout(() => {
  clearInterval(x)
}, 100)

task1()



