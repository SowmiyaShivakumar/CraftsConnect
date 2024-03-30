// const mongoose = require('mongoose')
const UserModel = require('../models/UserModel')

// creating account for the user 
const signup = async (req, res) => {
    const { email } = req.body;
    try{
        const user = await UserModel.findOne({ email });
        if(user){
            return res.json("Exists");
        } 
        else{
            const newUser = await UserModel.create(req.body);
            return res.json(newUser);
        }
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// logging in the user 
const login = async (req,res) => {
    const {email , password} = await req.body
    UserModel.findOne({email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Logged in")
            }
            else{
                res.json("Incorrect Password")
            }
        }
        else{
            res.json("User doesn't exist")
        }
    })
    .catch(error => {
        res.json("Error occured")
    })
}

module.exports = {
    signup,
    login
}