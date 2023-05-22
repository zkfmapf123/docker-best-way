import express from 'express'

express()
  .get('/', (req, res) => res.send('hello world'))
  .get('/hello', (req, res) => res.send(JSON.stringify(req.query)))
  .listen(process.env.PORT, () => {
    console.log(`connect localhost:${process.env.PORT}`)
  })
