const api = require('./api/api.controller')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.header(`Access-Control-Allow-Origin`, `*`)
    res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS')
    next()
})

app.use(bodyParser.json())

app.use('/api', api)

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})



module.exports = app;