const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', '*lqbSav5t*', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;