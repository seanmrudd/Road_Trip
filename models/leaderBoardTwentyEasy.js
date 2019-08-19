const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardTwentyEasySchema = new Schema({
    twentyQuestionEasy: {
        email: String,
        score: Number
    }
});


const LeaderBoardTwentyEasy = mongoose.model('LeaderBoardTwentyEasy', LeaderBoardTwentyEasySchema);

module.exports = LeaderBoardTwentyEasy;