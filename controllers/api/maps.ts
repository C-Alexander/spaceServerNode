const express = require('express');
const router = express.Router();
const map = require('../../db/models').StarMap;
const ship = require('../../db/models').Ship;
const user = require('../../db/models').User;

router.get('/', function(req, res) {
    let clause = {where : {}, include: [
            {model: ship, include: [
                    { model: user, required: true, attributes: {
                        exclude: ["password", "token"]
                        }}
                ]}
        ]};
    if (req.query.name) clause.where = { name: req.query.name };

    map.findAll(clause)
        .then(maps => {
            res.json(maps)
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.get('/:id', function(req, res) {
    map.findOne({where: {id: req.params.id}})
        .then(foundMap => {
            res.json(foundMap)
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.patch('/:id', function(req, res) {
    map.findOne({where: {id: req.params.id}})
        .then(foundMap => {
            foundMap.update(req.body)
                .then(resultMap => {
                    res.json(resultMap);
                })
        })
        .catch(error => {
            res.status(400).json(error);
        })
});
module.exports = router;