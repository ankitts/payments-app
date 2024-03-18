const mongoose = require('mongoose');
const { number } = require('zod');

mongoose.connect("mongodb+srv://admin:Z08sJggOs5P88gtY@cluster0.vld3hn2.mongodb.net/paytm")

const userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String
})

const User = mongoose.model('user', userSchema);


const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model('account', accountSchema);

module.exports = {
    User,
    Account
}