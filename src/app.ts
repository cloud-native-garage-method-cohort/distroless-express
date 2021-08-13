import express from 'express'

const app = express()

app.get('/', (res) => {
  res.json({
    status: "don’t sweat the technique",
  })
})

export default app
