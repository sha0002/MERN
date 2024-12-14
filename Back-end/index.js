const express = require('express')
const authRouter = require('./routes/auth')
const contactRouter = require('./routes/contact-router')
const ConnectToMongo = require('./Database/db')
const errormiddleware = require('./Middlewares/error-middleware')

const app = express()
const port = 4500
app.use(express.json())
app.use(errormiddleware)
ConnectToMongo();

app.use('/api/auth', authRouter)
app.use('/api/form', contactRouter)

app.listen(port, () => {
    console.log(`Server is Running ${port}`)
})