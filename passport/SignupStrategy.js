const Strategy = require("passport-local").Strategy;
const User = require("../models/user");
const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy({ passReqToCallback: true }, function(req, username, password, done){
    User.findOne({username}).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }
        if (user) {
            return done("User already exists", null);
        }

        const encryptedPassword = bcrypt.hashSync(password, salt)

        let newUser = new User({
            username,
            password: encryptedPassword
        })

        newUser.save((error, inserted) => {
            if (error) {
                return done(error, null);
            }

            return done(null, inserted);
        });
    });
});

module.exports = SignupStrategy;