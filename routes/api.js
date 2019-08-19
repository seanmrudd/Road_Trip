const router = require("express").Router();
const LeaderBoardController = require("../controllers/leaderBoardController");

router.route("/tenEasy")
    .get(LeaderBoardController.findAllTenEasy)
    .post(LeaderBoardController.createTenEasy);

router.route("/twentyEasy")
    .get(LeaderBoardController.findAllTwentyEasy)
    .post(LeaderBoardController.createTwentyEasy);

router.route("/thirtyEasy")
    .get(LeaderBoardController.findAllThirtyEasy)
    .post(LeaderBoardController.createThirtyEasy);

router.route("/tenHard")
    .get(LeaderBoardController.findAllTenHard)
    .post(LeaderBoardController.createTenHard);

router.route("/twentyHard")
    .get(LeaderBoardController.findAllTwentyHard)
    .post(LeaderBoardController.createTwentyHard);

router.route("/thirtyHard")
    .get(LeaderBoardController.findAllThirtyHard)
    .post(LeaderBoardController.createThirtyHard);

module.exports = router;
