const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Products = sequelize.define('Products', {
  ProductId: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false // Assuming you don't have createdAt and updatedAt columns
});


module.exports = Products;
