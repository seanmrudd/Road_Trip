const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardSchema = new Schema({
    tenQuestionEasy: {
        email: String,
        score: Number
    },
    twentyQuestionEasy: {
        email: String,
        score: Number
    },
    thirtyQuestionEasy: {
        email: String,
        score: Number
    },
    tenQuestionHard: {
        email: String,
        score: Number
    },
    twentyQuestionHard: {
        email: String,
        score: Number
    },
    thirtyQuestionHard: {
        email: String,
        score: Number
    }
});


const LeaderBoard = mongoose.model('LeaderBoard', LeaderBoardSchema);

module.exports = LeaderBoard;