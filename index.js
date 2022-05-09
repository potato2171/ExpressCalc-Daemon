const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors())
app.get('/', (req, res) => {
  var first = req.query.first
  var second = req.query.second
  var condition = req.query.condition
  var first = parseInt(first);
  var second = parseInt(second);

  switch (condition) {
      case "add":
        var total = first + second
        break;
      case "multiply":
        var total = first * second
        break;
      case "divide":
        var total = first / second
        break;
      case "subtract":
        var total = first - second
        break;
  }

  res.send({sum: total})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
