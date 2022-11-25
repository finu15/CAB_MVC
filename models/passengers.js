const {Sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const Passengers =db.sequelize.define('Passengers', {
    passenger_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    firstName: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    gender: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },

    phoneNumber: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },

    address: {
        type: DataTypes.STRING(80),
        allowNull: false
    }
});

module.exports = Passengers;