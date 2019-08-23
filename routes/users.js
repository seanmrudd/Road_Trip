const express = require("express");
const router = express.Router();
const passport = require("../passport");

// router.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/');
//     req.session = null;
// });

router.post("/signup", (req, res, next) => {
    passport.authenticate("local-signup", function (error, user, info) {
        if (error) {
            return res.status(500).json({
                message: "oops",
                error: error.message || "inter server error"
            });
        }

        req.logIn(user, function (error) {
            if (error) {
                return res.status(500).json({
                    message: error || "Ooops, something went wrong"
                });
            }
            user.isAuthenticated = true;
            return res.json(user);
        });
    })(req, res, next);
});

router.post("/signin", function (req, res, next) {
    passport.authenticate("local-signin", function (error, user, info) {
        if (error) {
            return res.status(500).json({
                message: "oopsssss",
                error: error.message
            });
        }
        req.logIn(user, function (error) {
            if (error) {
                return res.status(500).json({
                    message: error || "Ooops, something went wrong"
                });
            }
            user.isAuthenticated = true;
            return res.json(user);
        });
    })(req, res, next);
});

// router.get("/userapi", (req, res) => {
//     const email = req.user;
//     res.json({
//         message: "hello world",
//     });
// });

module.exports = router;
