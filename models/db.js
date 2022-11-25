const {Sequelize, DataTypes} = require ('sequelize')

const sequelize = new Sequelize("csm_finu", "root", "0000", {
    host: "localhost",
    dialect: "mysql"
});

module.exports.sequelize = sequelize;