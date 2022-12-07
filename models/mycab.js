const { Sequelize, DataTypes } = require('sequelize')
const db = require('./db');

const Cab = db.sequelize.define('Cab', {
    cab_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    cabmodel: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    regnum: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    lnum: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    dlnum: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    passenger_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Cab;