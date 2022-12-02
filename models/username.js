const {Sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const Username =db.sequelize.define('Username', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },

    cpassword: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    }

    // passenger_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
});

module.exports = Username;