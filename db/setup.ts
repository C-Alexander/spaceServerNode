
const Sequelize = require('sequelize');

const sequel = new Sequelize({ dialect: 'sqlite'});

sequel.authenticate()
    .then((_) => console.log('debug', 'Successfully connected to the database'))
    .catch((error: Error) => console.log('error', 'Failed to connect to the database, ' + error));

sequel.sync();
module.exports.getDb = sequel;