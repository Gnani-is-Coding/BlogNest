const mongoose = require("mongoose")
require("dotenv").config()

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: '6'}
})

const User = mongoose.model("User", userSchema)

module.exports = User