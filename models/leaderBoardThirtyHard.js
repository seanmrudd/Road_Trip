const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardThirtyHardSchema = new Schema({
    thirtyQuestionHard: {
        email: String,
        score: Number
    }
});


const LeaderBoardThirtyHard = mongoose.model('LeaderBoardThirtyHard', LeaderBoardThirtyHardSchema);

module.exports = LeaderBoardThirtyHard;