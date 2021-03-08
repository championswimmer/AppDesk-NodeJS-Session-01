const fs = require("fs");
const path = require("path");

function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, fileName), data, (err) => {
      if (err) reject(err);
      else resolve('SUCCESS');
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

let p1 = writeToFile("a.txt", "Hello World");
let p2 = readFromFile("b.txt");
console.log(p1);
console.log(p2);

setTimeout(() => {
  console.log(p1);
  console.log(p2);
}, 1000);
