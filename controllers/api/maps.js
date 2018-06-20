"use strict";
var express = require('express');
var router = express.Router();
var map = require('../../db/models').StarMap;
var ship = require('../../db/models').Ship;
var user = require('../../db/models').User;
router.get('/', function (req, res) {
    var clause = { where: {}, include: [
            { model: ship, include: [
                    { model: user, required: true, attributes: {
                            exclude: ["password", "token"]
                        } }
                ] }
        ] };
    if (req.query.name)
        clause.where = { name: req.query.name };
    map.findAll(clause)
        .then(function (maps) {
        res.json(maps);
    })
        .catch(function (error) {
        res.status(500).json(error);
    });
});
router.get('/:id', function (req, res) {
    map.findOne({ where: { id: req.params.id } })
        .then(function (foundMap) {
        res.json(foundMap);
    })
        .catch(function (error) {
        res.status(500).json(error);
    });
});
router.patch('/:id', function (req, res) {
    map.findOne({ where: { id: req.params.id } })
        .then(function (foundMap) {
        foundMap.update(req.body)
            .then(function (resultMap) {
            res.json(resultMap);
        });
    })
        .catch(function (error) {
        res.status(400).json(error);
    });
});
module.exports = router;
//# sourceMappingURL=maps.js.map