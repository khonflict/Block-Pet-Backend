// IMPORTS //
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./config/database')

// MIDDLEWARE //
app.use(express.json())
app.use(cors())

// Check token and create req.user
app.use(require('./config/checkToken'))

// ROUTES //

// Users //
app.use('/api/v1/users', require('./routes/api/users'))

// Protect API rountes below from unauthorized users
const ensureLoggedIn = require('./config/ensureLoggedIn')

// Pets //
app.use('/api/v1/pets', ensureLoggedIn, require('./routes/api/pets'))

// PORT //
const port = 3005

app.listen(port, () => console.log(`Express app runnning on port ${port}`))