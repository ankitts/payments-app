const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:Z08sJggOs5P88gtY@cluster0.vld3hn2.mongodb.net/paytm")

const userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
})

const User = mongoose.model('user', userSchema, 'users');

module.exports = {
    User
}