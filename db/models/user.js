"use strict";
var db = require('../setup').getDb;
var types = require('sequelize').DataTypes;
module.exports.User = db.define('user', {
    id: {
        type: types.UUID, primaryKey: true, allowNull: false, defaultValue: types.UUIDV4
    },
    username: {
        type: types.TEXT, unique: { msg: 'This username already exists.' }, allowNull: false,
        validate: {
            len: { args: [3, 20], msg: "Please pick a username between 3 and 20 characters" }
        }
    },
    password: {
        type: types.TEXT, allowNull: false,
        validate: { notEmpty: { args: true, msg: "Please pick a non-empty password." } }
    },
    credits: {
        type: types.FLOAT, allowNull: false, defaultValue: 500.0
    },
    token: {
        type: types.UUID, defaultValue: types.UUIDV4
    }
});
//# sourceMappingURL=user.js.map