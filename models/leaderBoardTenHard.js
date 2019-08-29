const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardTenHardSchema = new Schema({
        username: String,
        score: Number
});


const LeaderBoardTenHard = mongoose.model('LeaderBoardTenHard', LeaderBoardTenHardSchema);

module.exports = LeaderBoardTenHard;