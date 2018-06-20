const express = require('express');
const router = express.Router();
const ship = require('../../db/models').Ship;

router.get('/', function(req, res) {
    ship.findAll()
        .then(ships => {
            res.json(ships)
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.get('/:id', function(req, res) {
    ship.findOne({where: {id: req.params.id}})
        .then(foundShip => {
            res.json(foundShip)
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.patch('/:id', function(req, res) {
    ship.findOne({where: {id: req.params.id}})
        .then(foundShip => {
            if (req.body.x && req.body.y) {
                foundShip.update({ xDestination: req.body.x, yDestination: req.body.y})
                    .then(resultShip => {
                        res.json(resultShip);
                    })
            } else if (req.body.xDest && req.body.yDest) {
                foundShip.update({ xPos: req.body.xDest, yPos: req.body.yDest})
                    .then(resultShip => {
                        res.json(resultShip);
                    })
            }
            else {
                foundShip.update(req.body)
                    .then(resultShip => {
                        res.json(resultShip);
                    })
            }
        })
        .catch(error => {
            res.status(400).json(error);
        })
});
module.exports = router;