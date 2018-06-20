"use strict";
var express = require('express');
var router = express.Router();
var user = require('../db/models').User;
router.post('/', function (req, res) {
    if (!req.body.username || !req.body.password || !req.body.username.trim() || !req.body.password.trim())
        return res.status(400).json({ error: "Please fill in a username and password." });
    user.findOne({ where: { username: req.body.username, password: req.body.password } })
        .then(function (foundUser) {
        if (!foundUser)
            return res.status(400).json({ error: "Incorrect username or password." });
        return res.json({ username: foundUser.username, password: foundUser.password, token: foundUser.token });
    })
        .catch(function (error) { return res.status(500).json(error); });
});
module.exports = router;
//# sourceMappingURL=login.js.map