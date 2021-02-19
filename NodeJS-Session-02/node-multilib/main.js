const lib = require('./lib')
const lib2 = require('./lib')

let arg = process.argv[2]
lib.greet(arg)
lib2.greet(arg)

console.log(lib == lib2)
