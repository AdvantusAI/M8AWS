const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const History = sequelize.define('History', {
    History_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    LocationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PostDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
     Type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Hist_stream: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'History',
    timestamps: false // Disable timestamps if you don't want Sequelize to auto-manage createdAt and updatedAt fields
});

module.exports = History;
