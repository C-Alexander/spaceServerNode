"use strict";
var bearerStrategy = require('passport-http-bearer').Strategy;
var user = require('../db/models').User;
var ship = require('../db/models').Ship;
module.exports = function (passport) {
    passport.use(new bearerStrategy.Strategy(function (token, done) {
        user.findOne({
            where: { token: token },
            include: [
                { model: ship, required: false }
            ]
        })
            .then(function (foundUser) {
            if (foundUser)
                return done(null, foundUser, { scope: 'all' });
            return done(null, false);
        })
            .catch(function (error) { return done(error); });
    }));
};
//# sourceMappingURL=passport.js.map