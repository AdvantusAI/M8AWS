// controllers/userController.js
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const Category = require('../models/Category');
const History = require('../models/History');
const { Sequelize } = require('sequelize');

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

exports.ListHistory = async (req, res) => {
    try {
        const history = await History.findAll({
            attributes: [
                'ProductId',
                'LocationId',
                'Type',
                'PostDate',
                [Sequelize.fn('SUM', Sequelize.col('Quantity')), 'Quantity']
            ],
            group: ['ProductId', 'LocationId', 'Type', 'PostDate'],
            order: [['PostDate', 'ASC']]
        });
        res.json({ history });
    } catch (error) {
        console.error('Failed to retrieve history:', error);
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
    const { changedRows, columnId, newVal } = req.body; 
    console.log('Received changedRows:', changedRows);
    console.log('Column:', columnId);
    console.log('New Value:', newVal);

    // Create an array of update promises
    const updatePromises = Object.keys(changedRows[0])
        .filter(F => F !== 'ProductId' && F !== 'LocationId' && F !== 'descripcion' && changedRows[0][F] !== null)
        .map(async K => {
            const record = await History.findOne({
                where: {
                    ProductId: changedRows[0]['ProductId'],
                    LocationId: changedRows[0]['LocationId'],
                    Type: 5,
                    PostDate: new Date(K)
                }
            });

            if (record) {
                return record.update({
                    "Quantity": changedRows[0][K]
                });
            }
        });

    try {
        // Execute all update promises in parallel
        await Promise.all(updatePromises);
        res.status(200).send('Updates successful');
    } catch (error) {
        console.error('Error updating rows:', error);
        res.status(500).send('Error updating rows');
    }
};
