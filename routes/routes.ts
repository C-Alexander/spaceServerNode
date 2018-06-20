import index = require('../controllers/index');
import users = require('../controllers/users');
import login = require('../controllers/login');
import register = require('../controllers/register');
import players = require('../controllers/api/players');
import maps = require('../controllers/api/maps');
import ships = require('../controllers/api/ships');

import passport = require('passport');

    module.exports = (app) => {
    app.use('/', index);
    app.use('/users', users);
    app.use('/login', login);
    app.use('/register', register);
    app.use('/players', players);
    app.use('/ships', ships);
    app.use('/maps', maps);
    app.get('/profile',
        passport.authenticate('bearer', { session: false }),
        function(req, res) {
            res.json(req.user);
        });
};