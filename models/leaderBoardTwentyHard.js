const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardTwentyHardSchema = new Schema({
        email: String,
        score: Number
});


const LeaderBoardTwentyHard = mongoose.model('LeaderBoardTwentyHard', LeaderBoardTwentyHardSchema);

module.exports = LeaderBoardTwentyHard;