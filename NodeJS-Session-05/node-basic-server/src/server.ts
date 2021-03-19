import express from 'express'

const app = express()

app.get('/', (req, res) => {
  
  res.send('Hello There!')

})

app.listen(3333, () => {
  console.log('started on http://localhost:3333')
})