// import Sequelize constructor from library
const Sequelize = require('sequelize');

// create connection to database, pass in MQL info 
const sequelize = new Sequelize('process.env.DB_NAME', 'process.env.DB_USER', 'process.env.DB_PASSWORD', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;