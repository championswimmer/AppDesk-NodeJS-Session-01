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


async function writeNFilesParallelly(N) {
  const tasks = []
  for (let i = 0; i < N; i++) {
    tasks.push(  writeToFile(`${i}.txt`, genRandLenString())  )
  }

  await Promise.all(tasks)
  console.log('all files written')
}

async function writeNFilesSerially(N) {
  for (let i = 0; i < N; i++) {
    await writeToFile(`${i}.txt`, genRandLenString())
  }
  console.log('all done!')
}


// writeNFilesParallelly(20)
writeNFilesSerially(30)