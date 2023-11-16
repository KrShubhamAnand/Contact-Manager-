const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Please enter your username!"]
    },
    email:{
        type: String,
        required: [true,"Please enter your email!"],
        unique: [true,"email is already taken, please enter valid email!"]
    },
    password:{
        type: String,
        required: [true,"Please enter your password!"]
    }
},
{
    timestamps:true,
})

const User = mongoose.model('User',userSchema);
module.exports = User;