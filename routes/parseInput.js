// parsing the input
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

// let sudoku = []

router.post('/', (req, res) => {
  console.log(req.body.sudoku);
  res.redirect('/')
})


module.exports = router