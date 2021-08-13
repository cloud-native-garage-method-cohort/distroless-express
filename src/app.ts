import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({
    status: "don’t sweat the technique",
  })
})

export default app
