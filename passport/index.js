const passport = require("passport");

const LoginStrategy = require("./SigninStrategy");
const SignupStrategy = require("./SignupStrategy");

passport.use("local-signin", LoginStrategy);
passport.use("local-signup", SignupStrategy);

module.exports = passport;