const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('category', {

    categoryId: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'category',
    timestamps: false // Disable timestamps
});


module.exports = Category;
