const { Sequelize } = require('sequelize');
var dbconfig = require('../db.config.js');

var sshConnected = false;

const sequelize = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.password, {
    port: 3307,
    host: dbconfig.host,
    logging: console.log,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
});

module.exports = sequelize;


