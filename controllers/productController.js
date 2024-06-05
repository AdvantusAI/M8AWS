// controllers/userController.js
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const Category = require('../models/Category');
const History = require('../models/History');

const secretKey = 'your_jwt_secret';  // Deberías almacenar esto en variables de entorno.

// Define associations
Category.hasMany(Product, { foreignKey: 'categoryId', sourceKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId', targetKey: 'categoryId' });



exports.ListProducts = async (req, res) => {
  try {
      const products = await Product.findAll({
          include: [{
              model: Category,
              attributes: ['categoryName'] // Include only the category name in the response
          }]
      });
      res.json({ products });
  } catch (error) {
      console.error('Failed to retrieve products:', error);
      res.status(500).send('Error retrieving data.');
  }
};


exports.ListCatProd = async (req, res) => { 
    try {
    const categories = await Category.findAll({
        include: [
            {
                model: Product
            }
        ]
    });
    res.json(categories);
} catch (error) {
    console.error('Failed to retrieve categories:', error);
    res.status(500).json({ error: error.message });
}
};

exports.test = async (req, res) => {
    console.log('dashboardCards')
    res.json('dashboardCards');
};

exports.saveChanges = async (req, res) => {
    console.log('Endpoint hit');
    const { changedRows } = req.body; 
    console.log('Received changedRows:', changedRows);
};
  