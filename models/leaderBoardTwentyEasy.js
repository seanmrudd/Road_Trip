const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardTwentyEasySchema = new Schema({
        username: String,
        score: Number
});


const LeaderBoardTwentyEasy = mongoose.model('LeaderBoardTwentyEasy', LeaderBoardTwentyEasySchema);

module.exports = LeaderBoardTwentyEasy;