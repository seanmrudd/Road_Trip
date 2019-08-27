const db = require("../models");

module.exports = {
  findAllTenEasy: function(req, res) {
    db.LeaderBoardTenEasy
      .find(req.query)
      .sort({ score: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err),
      console.log(req.query));
      
  },
  findAllTwentyEasy: function(req, res) {
    db.LeaderBoardTwentyEasy
      .find(req.query)
      .sort({ score: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllThirtyEasy: function(req, res) {
    db.LeaderBoardThirtyEasy
      .find(req.query)
      .sort({ score: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTenHard: function(req, res) {
    db.LeaderBoardTenHard
      .find(req.query)
      .sort({ score: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTwentyHard: function(req, res) {
    db.LeaderBoardTwentyHard
      .find(req.query)
      .sort({ score: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllThirtyHard: function(req, res) {
    db.LeaderBoardThirtyHard
      .find(req.query)
      .sort({ score: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTenEasy: function(req, res) {
    db.LeaderBoardTenEasy
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTwentyEasy: function(req, res) {
    db.LeaderBoardTwentyEasy
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createThirtyEasy: function(req, res) {
    db.LeaderBoardThirtyEasy
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTenHard: function(req, res) {
    db.LeaderBoardTenHard
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTwentyHard: function(req, res) {
    db.LeaderBoardTwentyHard
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createThirtyHard: function(req, res) {
    db.LeaderBoardThirtyHard
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};