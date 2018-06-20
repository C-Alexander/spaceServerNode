const user = require('./models/user').User;
const ship = require('./models/ship').Ship;
const map = require('./models/map').StarMap;

module.exports.estabilishFKs = () => {
    ship.hasMany(user);
    user.belongsTo(ship);
    map.hasMany(ship);
    ship.belongsTo(map);
};

module.exports.defaultData = () => {
    map.create();
};

this.estabilishFKs();

this.defaultData();

module.exports.User = user;
module.exports.Ship = ship;
module.exports.StarMap = map;