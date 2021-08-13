import express from 'express'

const app = express()


app.get('/', (req, res) => {
console.log(req)
  res.json({
    status: "don’t sweat the technique",
  })
})

export default app
