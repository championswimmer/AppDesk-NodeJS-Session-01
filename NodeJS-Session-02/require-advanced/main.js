const A = require('./libA')
const B = require('./libB')

console.log(A)
console.log(B)
console.log(A.B)
console.log(A.B.A)
console.log(A.B.A.B)

setTimeout(() => {
    console.log(A.B)
}, 3000)

// { a: 10 }
// { b: 20 }