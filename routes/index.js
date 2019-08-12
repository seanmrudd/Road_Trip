const express = require('express');
const router = express.Router();

router.get("/", function(req, res, done){
    res.send("<p>bologna</p>");
});

module.exports = router;