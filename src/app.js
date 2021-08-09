const express = require('express')
const app = express()

app.get('/ingress', (req, res) => {
  res.json({
    status: "don’t sweat the technique",
  })
})

module.exports = app
