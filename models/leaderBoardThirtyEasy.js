const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardThirtyEasySchema = new Schema({
    thirtyQuestionEasy: {
        email: String,
        score: Number
    }
});


const LeaderBoardThirtyEasy = mongoose.model('LeaderBoardThirtyEasy', LeaderBoardThirtyEasySchema);

module.exports = LeaderBoardThirtyEasy;