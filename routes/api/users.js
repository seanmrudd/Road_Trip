const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
// const auth = require('../auth');
// const Users = mongoose.model('Users');

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;