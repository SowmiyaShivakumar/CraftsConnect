require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/appRoutes')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_CONN)
    .then(() => {
        console.log("Database connected")
        app.listen(process.env.PORT ,() => {
            console.log("Server Listening on ",process.env.PORT)
        })
    })
    .catch(error => {
        console.log("Database not connected ",error)
    })



app.use('/' , userRouter)
