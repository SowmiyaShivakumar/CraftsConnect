const express = require('express')
const route = express.Router()

const {
    signup,
    login
} = require('../controllers/userController')

// sign-up a user
route.post('/' , signup)

// login 
route.post('/login' , login)

module.exports = route