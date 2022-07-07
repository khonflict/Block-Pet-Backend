// IMPORTS //
const express = require('express')
const app = express()
require('dotenv').config()

// ROUTES //


// PORT //
const PORT = 6000

app.listen(PORT, () => console.log(`Express app runnning on ${PORT}`))