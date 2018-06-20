const express = require('express');
const router = express.Router();
const user = require('../../db/models').User;

router.get('/', function(req, res) {
    user.findAll()
        .then(players => {
            res.json(players)
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.get('/:id', function(req, res) {
    user.findOne({where: {id: req.params.id}})
        .then(player => {
            res.json(player)
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

module.exports = router;