"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index = require("../controllers/index");
var users = require("../controllers/users");
var login = require("../controllers/login");
var register = require("../controllers/register");
var players = require("../controllers/api/players");
var maps = require("../controllers/api/maps");
var ships = require("../controllers/api/ships");
var passport = require("passport");
module.exports = function (app) {
    app.use('/', index);
    app.use('/users', users);
    app.use('/login', login);
    app.use('/register', register);
    app.use('/players', players);
    app.use('/ships', ships);
    app.use('/maps', maps);
    app.get('/profile', passport.authenticate('bearer', { session: false }), function (req, res) {
        res.json(req.user);
    });
};
//# sourceMappingURL=routes.js.map