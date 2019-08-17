const express = require("express");
const router = express.Router();
const LBDB = require("../models/leaderBoard");

router.route("/scores")
    .get(function (req, res) {
        LBDB.LeaderBoard
            .find(req.query)
            .sort({ score: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
    .post(function (req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    })
