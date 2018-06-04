const express = require('express')
const pug = require('pug')
const path = require('path')

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req, res)=> {
  res.render('index', {title: 'weightConverter'})
})

app.get('/contact/:name', (req, res) => {
  res.send(req.query)
})

app.listen(3000,  (err) => {
  if (err) return console.log('Hubo un error'), process.exit(1)

  console.log('server Up on port 3000')})
