const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./users");
const userUpdate = require("./userUpdate");

router.use("/api", apiRoutes);
router.use("/authentication", userRoutes);
// router.use("/userUpdate", userUpdate);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;