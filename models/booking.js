const { Sequelize, DataTypes } = require('sequelize')
const db = require('./db');

const Bookings = db.sequelize.define('Bookings', {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    pickup: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    destination: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    time: {
        type: DataTypes.TIME,
        allowNull: false
    },

    passenger_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Bookings;