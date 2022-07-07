// IMPORTS //
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

// MIDDLEWARE //
app.use(express.json())

// ROUTES //
// Pets //
app.use('/api/v1/pets', require('./routes/api/pets.js'))

// PORT //
const port = 6000

app.listen(port, () => console.log(`Express app runnning on ${port}`))