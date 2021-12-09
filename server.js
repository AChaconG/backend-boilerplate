const axios = require('axios')
const express = require('express')

const app = express()
const port = 3003

app.get('/', async (req, res, next) => {
    try {
        res.json({"data": "hello"})
    } catch (error) {
        next(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

