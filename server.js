const express = require('express')
const app = express()
require('dotenv').config()

const PORT = 5000

app.listen(port, () => console.log(`Express app runnning on ${PORT}`))