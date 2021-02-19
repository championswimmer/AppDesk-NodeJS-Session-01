module.exports.b = 20
module.exports.A = require('./libA')

setTimeout(() => {
    module.exports.x = 14
}, 2000)
