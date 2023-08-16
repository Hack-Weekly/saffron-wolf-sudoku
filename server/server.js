const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const PORT = 8080

app.use(cors())
app.use(express.json())

app.use(express.static('public'))

const router = require('./routes/solve')

app.use('/', router)

app.listen(PORT, ()=>{
  console.log(`app is running at http://localhost:${PORT}`);
})