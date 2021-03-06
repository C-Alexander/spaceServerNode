"use strict";
var express = require('express');
var router = express.Router();
var user = require('../db/models').User;
var map = require('../db/models').StarMap;
var sequel = require('../db/setup').getDb;
router.post('/', function (req, res) {
    if (!req.body.username || !req.body.password || !req.body.username.trim() || !req.body.password.trim())
        return res.status(400).json({ error: "Please fill in a username and password." });
    user.create({ username: req.body.username, password: req.body.password })
        .then(function (createdUser) {
        map.findOne({ order: sequel.random() }).then(function (randomMap) {
            createdUser.createShip({
                xPos: Math.floor(Math.random() * Math.floor(100)),
                yPos: Math.floor(Math.random() * Math.floor(200)),
                xDestination: Math.floor(Math.random() * Math.floor(100)),
                yDestination: Math.floor(Math.random() * Math.floor(200)),
                mapId: randomMap.id
            });
            return res.status(201).json(createdUser);
        });
    })
        .catch(function (error) {
        return res.status(400).json({ error: error.errors[0].message });
    });
});
module.exports = router;
//# sourceMappingURL=register.js.map