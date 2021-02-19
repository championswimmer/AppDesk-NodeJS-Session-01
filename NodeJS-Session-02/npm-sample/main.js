const axios = require('axios')
const slugify = require('slugify')

console.log(slugify('This is a title'))

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
        console.log(response.data)
    })