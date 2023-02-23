const express = require('express')
const app = express()

// DB connection
const mongoose = require('mongoose')
mongoose
    .connect('mongodb://localhost/coasters-app')
    .then(() => console.log('CONECTADO A BBDD'))


// CORS
const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// Routing
app.use('/api', require('./routes'))


// Listen
app.listen(5005, () => console.log('SERVIDOR LEVANTADO'))