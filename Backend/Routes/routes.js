const express = require('express');
const RegisterModel = require('../models/RegisterModel');
const Route = express.Router()

Route.post('/register', (req, res) => {

    RegisterModel.findOne({ email: req.body.email }).then(user => {
        if (user) {
            console.log('User Exists');
        } else {
            const User = new RegisterModel({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })

            User.save()
                .then(data => res.send('Data Entered'))
                .catch(err => res.send(err))
        }
    })
})

Route.post('/login', (req, res) => {
    const email = req.body.email
    RegisterModel.findOne({ email }).then(user => {
        if (!user) {
            console.log("no user found");
        }
        else {
            console.log('Matched Successfully');
        }
    })
})
 
const getData = async (req,res)=>{
    try {
        const result = await RegisterModel.find()
        res.send(result)
    } catch (error) {
        console.log(err);
    }
} 

Route.get('/Registered_User', getData)

module.exports = Route