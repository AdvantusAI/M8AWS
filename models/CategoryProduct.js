const sequelize = require('../config/database');
const Category = require('./Category');
const Product = require('/Product');
const History = require('./History');
const Forecast_type = require('./forecast_type');


// Define associations
Category.hasMany(Product, { foreignKey: 'categoryId', sourceKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId', targetKey: 'categoryId' });
History.belongsTo(Forecast_type, { foreignKey: 'Type', targetKey: 'Type' });


module.exports = {
    sequelize,
    Category,
    Product,
    History
};
