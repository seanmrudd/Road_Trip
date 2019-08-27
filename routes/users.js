const express = require("express");
const router = express.Router();
const passport = require("../passport");
// const PersonalBestController = require("../controllers/personalBestController");


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


// router.get("/tenEasyPersonal", function (req, res, next) {
//     if (error) {
//         return res.status(500).json({
//             message: "oopsssss",
//             error: error.message
//         })
//     }
//     return res.json(data)
// })

// router.route("/twentyEasyPersonal")
//     .get(PersonalBestController.findTwentyEasy)
//     .update(PersonalBestController.updateTwentyEasyPersonal);

// router.route("/thirtyEasyPersonal")
//     .get(PersonalBestController.findThirtyEasy)
//     .update(PersonalBestController.updateThirtyEasyPersonal);

// router.route("/tenHardPersonal")
//     .get(PersonalBestController.findTenHard)
//     .update(PersonalBestController.updateTenHardPersonal);

// router.route("/twentyHardPersonal")
//     .get(PersonalBestController.findTwentyHard)
//     .update(PersonalBestController.updateTwentyHardPersonal);

// router.route("/thirtyHardPersonal")
//     .get(PersonalBestController.findThirtyHard)
//     .update(PersonalBestController.updateThirtyHardPersonal);


module.exports = router;
