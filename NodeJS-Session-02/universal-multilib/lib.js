

function greet(name) {
    console.log('Hello ' + name)
}

if (typeof process !== 'undefined') {
    module.exports = {
        greet
    }
}