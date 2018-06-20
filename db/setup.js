"use strict";
var Sequelize = require('sequelize');
var sequel = new Sequelize({ dialect: 'sqlite' });
sequel.authenticate()
    .then(function (_) { return console.log('debug', 'Successfully connected to the database'); })
    .catch(function (error) { return console.log('error', 'Failed to connect to the database, ' + error); });
sequel.sync();
module.exports.getDb = sequel;
//# sourceMappingURL=setup.js.map