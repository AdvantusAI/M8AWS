const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Forecast_type = sequelize.define('forecast_type', {
    Type: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'forecast_type',
    timestamps: false // Assuming you don't have createdAt and updatedAt columns
});


module.exports = Forecast_type;
