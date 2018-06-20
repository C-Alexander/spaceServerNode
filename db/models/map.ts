const db = require('../setup').getDb;
const types = require('sequelize').DataTypes;

module.exports.StarMap = db.define('map', {
        id: {
            type: types.UUID, primaryKey: true, allowNull: false, defaultValue: types.UUIDV4
        },
        name: {
            type: types.STRING, allowNull: false, defaultValue: "Sol"
        },
    }
);