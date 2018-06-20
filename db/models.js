"use strict";
var user = require('./models/user').User;
var ship = require('./models/ship').Ship;
var map = require('./models/map').StarMap;
module.exports.estabilishFKs = function () {
    ship.hasMany(user);
    user.belongsTo(ship);
    map.hasMany(ship);
    ship.belongsTo(map);
};
module.exports.defaultData = function () {
    map.create();
};
this.estabilishFKs();
this.defaultData();
module.exports.User = user;
module.exports.Ship = ship;
module.exports.StarMap = map;
//# sourceMappingURL=models.js.map