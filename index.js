'use strict'
const express = require('express')
const app = express()
const mainRouter = require('./mainRoutes')
const port = process.env.port || 3000
app.use(mainRouter)
app.listen(port)
console.log(`Express server running on ports ${port}`)
