
function myFun () {
  console.log('hello World')
}

let otherFun = function () {
  console.log('hello World')
}

let x = myFun

otherFun()

console.log(x)

function greet(getGreeting, name) {
  if (typeof getGreeting !== 'function') {
    console.error('getGreeting must be a function')
    getGreeting = function () { return 'Generic Greeting' }
  }
  console.log(getGreeting() + ' ' + name)
}

function gm() {
  return 'Good Morning'
}

greet('asd', 'Arnav')

// closures 
function createCounter(init, delta) {
  let p = 10
  
  function count() {
    let q = 20
    init += delta
    p += delta
    return [init, p]
  }

  function another() {
    console.log('hello')
  }

  return { count, another }
}

const c = createCounter(10, 5)
console.log(c.count())
console.log(c.count())
console.log(c.count())
c.another()