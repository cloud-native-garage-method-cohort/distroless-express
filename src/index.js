const express = require('express')

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  res.json({
    status: "don’t sweat the technique",
  })
})

app.listen(PORT, () => {
  console.log('API Running', PORT)
})
