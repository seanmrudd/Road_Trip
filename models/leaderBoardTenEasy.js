const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaderBoardTenEasySchema = new Schema({
        email: String,
        score: Number
});


const LeaderBoardTenEasy = mongoose.model('LeaderBoardTenEasy', LeaderBoardTenEasySchema);

module.exports = LeaderBoardTenEasy;