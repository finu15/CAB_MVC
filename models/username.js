const {Sequelize, DataTypes} = require ('sequelize')
const db = require('./db');

const Username =db.sequelize.define('Username', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    // passenger_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model:"passengers",
    //         key:"passenger_id"
    //     }
    // },

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
});

module.exports = Username;