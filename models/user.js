const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        min: [6, "Not enought characters"]
    },
    data: {
            tenQuestion: Number,
            twentyQuestion: Number,
            thirtyQuestion: Number
    }
});


const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
