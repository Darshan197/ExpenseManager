const path = require('path');
const express = require('express')
const app = express()
const colors = require('colors')
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const cors = require('cors')
app.use(cors())

const transactions = require('./routes/transactions')
app.use(express.json())
app.use('/transactions', transactions)

const connect = require('./config/Database')
connect()

app.use(express.static('react-client/build'))
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'react-client', 'build', 'index.html')))

const PORT = process.env.PORT
app.listen(PORT, console.log(`server is started on http://localhost:${PORT}`.cyan))