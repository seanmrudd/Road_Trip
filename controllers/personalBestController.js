// const db = require("../models");

// module.exports = {
//     findTenEasyPersonal: function(req, res) {
//       db.Users.tenQuestionEasy
//         .find()
//         .sort({ score: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findTwentyEasy: function(req, res) {
//       db.Users
//         .find(req.query)
//         .sort({ score: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findThirtyEasy: function(req, res) {
//       db.Users
//         .find(req.query)
//         .sort({ score: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findTenHard: function(req, res) {
//       db.Users
//         .find(req.query)
//         .sort({ score: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findTwentyHard: function(req, res) {
//       db.Users
//         .find(req.query)
//         .sort({ score: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     findThirtyHard: function(req, res) {
//       db.Users
//         .find(req.query)
//         .sort({ score: -1 })
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     updateTenEasyPersonal: function(req, res) {
//       db.Users
//         .updateOne(username, req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     updateTwentyEasyPersonal: function(req, res) {
//       db.Users
//         .updateOne(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     updateThirtyEasyPersonal: function(req, res) {
//       db.Users
//         .updateOne(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     updateTenHardPersonal: function(req, res) {
//       db.Users
//         .updateOne(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     updateTwentyHardPersonal: function(req, res) {
//       db.Users
//         .updateOne(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     },
//     updateThirtyHardPersonal: function(req, res) {
//       db.Users
//         .updateOne(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(422).json(err));
//     }
//   };