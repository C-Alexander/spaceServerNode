"use strict";
var express = require('express');
var router = express.Router();
var user = require('../../db/models').User;
router.get('/', function (req, res) {
    user.findAll()
        .then(function (players) {
        res.json(players);
    })
        .catch(function (error) {
        res.status(500).json(error);
    });
});
router.get('/:id', function (req, res) {
    user.findOne({ where: { id: req.params.id } })
        .then(function (player) {
        res.json(player);
    })
        .catch(function (error) {
        res.status(500).json(error);
    });
});
module.exports = router;
//# sourceMappingURL=players.js.map