const db = require('../setup').getDb;
const types = require('sequelize').DataTypes;

module.exports.Ship = db.define('ship', {
        id: {
            type: types.UUID, primaryKey: true, allowNull: false, defaultValue: types.UUIDV4
        },
        hull: {
            type: types.INTEGER, allowNull: false, defaultValue: 1000,
        },
     shield: {
            type: types.INTEGER, allowNull: false, defaultValue: 100,
     },
    armor: {
        type: types.INTEGER, allowNull: false, defaultValue: 200,
    },
    xPos: {
        type: types.INTEGER, allowNull: false,
    },
    yPos: {
        type: types.INTEGER, allowNull: false,
    },
    xDestination: {
        type: types.INTEGER, allowNull: true,
    },
    yDestination: {
        type: types.INTEGER, allowNull: true,
    },
    }
);