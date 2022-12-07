const {DataTypes} = require ('sequelize')
const db = require('./db');

const Passengers =db.sequelize.define('Passengers', {
    passenger_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    role: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    title: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    fullName: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    username: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
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

    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

module.exports = Passengers;