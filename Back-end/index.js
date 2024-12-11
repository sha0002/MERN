const express = require('express')
const ConnectToMongo = require('./Database/db')

const app = express()

const port = 4500

app.use(express.json())

ConnectToMongo();

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Server is Running ${port}`)
})