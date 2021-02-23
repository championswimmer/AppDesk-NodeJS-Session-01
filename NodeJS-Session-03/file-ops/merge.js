const fs = require('fs')

console.log('start file read 1')
fs.readFile('1.txt', (err, data) => {
  if (err) throw err

  console.log(data.toString())
  console.log('done read file 1')

  console.log('start file read 2')
  fs.readFile('2.txt', (err, data) => {
    if (err) throw err

    console.log(data.toString())
    console.log('done read file 2')

    console.log('start file read 3')
    fs.readFile('3.txt', (err, data) => {
      if (err) throw err

      console.log(data.toString())
      console.log('done read file 3')
    })
  })
})

let x = `
1
2
3
4
`

fs.writeFile('out.txt', x, (err) => {
  if (err) throw err
})