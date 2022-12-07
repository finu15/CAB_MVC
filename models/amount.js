const {Sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const Amounts =db.sequelize.define('Amounts', {
    amount_id: {
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

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});

module.exports = Amounts;