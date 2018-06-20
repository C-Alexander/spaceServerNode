const bearerStrategy = require('passport-http-bearer').Strategy;
const user = require('../db/models').User;
const ship = require('../db/models').Ship;

module.exports = function (passport) {
    passport.use(new bearerStrategy.Strategy(
        function(token, done) {
            user.findOne({
                where: { token: token },
                include: [
                    { model: ship, required: false }
                ]})
                .then(foundUser => {
                    if (foundUser) return done(null, foundUser, { scope: 'all'});
                    return done(null, false);
                })
                .catch(error => { return done(error) });
        }
    ));
};