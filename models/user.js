const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        min: 1
    },
    tenQuestionEasy: {
        type: Number,
        default: 0
    },
    twentyQuestionEasy: {
        type: Number,
        default: 0
    },
    thirtyQuestionEasy: {
        type: Number,
        default: 0
    },
    tenQuestionHard: {
        type: Number,
        default: 0
    },
    twentyQuestionHard: {
        type: Number,
        default: 0
    },
    thirtyQuestionHard: {
        type: Number,
        default: 0
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});


const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
