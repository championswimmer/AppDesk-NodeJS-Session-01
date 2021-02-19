
if (typeof process !== 'undefined') {
    const lib = require('./lib')
    lib.greet('Josh')
} else {
    greet('Josh')
}

