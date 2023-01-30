const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: {
        type: Array,
        dafault : [],
    },
    follower: {
        type: Array,
        dafault : [],
    },
    following: {
        type: Array,
        dafault : [],
    },
    
})

module.exports = mongoose.model('Users', UserSchema)