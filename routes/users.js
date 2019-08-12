const express = require("express");
const router = express.Router();
const passport = require("../passport");

router.post("/signup", (req, res, next) => {
    passport.authenticate("local-signup", function(error, user, info){
        if (error) {
            return res.status(500).json({
                message: "oops",
                error: error.message || "inter server error"
            });
        }
        return res.json(user);
    })(req, res, next);
});

router.post("/signin", function(req, res, next){
    passport.authenticate("local-signin", function(error, user, info){
        if (error) {
            return res.status(500).json({
                message: "oopsssss",
                error: error.message
            });
        }
        return res.json(user);
    })(req, res, next);});

module.exports = router;
