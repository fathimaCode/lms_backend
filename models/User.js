const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    userid: String,
    username: String,
    email:String,
    password:String,
    contact:String,
    created_at:String,
})



module.exports = mongoose.model('User',userSchema)