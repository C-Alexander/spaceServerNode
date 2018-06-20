"use strict";
var express = require('express');
var router = express.Router();
var ship = require('../../db/models').Ship;
router.get('/', function (req, res) {
    ship.findAll()
        .then(function (ships) {
        res.json(ships);
    })
        .catch(function (error) {
        res.status(500).json(error);
    });
});
router.get('/:id', function (req, res) {
    ship.findOne({ where: { id: req.params.id } })
        .then(function (foundShip) {
        res.json(foundShip);
    })
        .catch(function (error) {
        res.status(500).json(error);
    });
});
router.patch('/:id', function (req, res) {
    ship.findOne({ where: { id: req.params.id } })
        .then(function (foundShip) {
        if (req.body.x && req.body.y) {
            foundShip.update({ xDestination: req.body.x, yDestination: req.body.y })
                .then(function (resultShip) {
                res.json(resultShip);
            });
        }
        else if (req.body.xDest && req.body.yDest) {
            foundShip.update({ xPos: req.body.xDest, yPos: req.body.yDest })
                .then(function (resultShip) {
                res.json(resultShip);
            });
        }
        else {
            foundShip.update(req.body)
                .then(function (resultShip) {
                res.json(resultShip);
            });
        }
    })
        .catch(function (error) {
        res.status(400).json(error);
    });
});
module.exports = router;
//# sourceMappingURL=ships.js.map