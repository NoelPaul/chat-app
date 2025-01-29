const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "provide name"]
    },
    password: {
        type: String,
        required: [true, "provide password"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "provide email"]
    },
    profile_pic: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel; // Corrected this line
