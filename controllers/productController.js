// controllers/userController.js
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const Category = require('../models/Category');
const History = require('../models/History');
const sequelize = require('../config/database');
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
    const { changedRows, columnId, newVal, productId, locationId} = req.body; 
     console.log('Received changedRows:', changedRows);
     console.log('Column:', columnId);
     console.log('New Value:', newVal);

     
     await sequelize.transaction(async (transaction) => { // Use 'transaction' instead of 't'
        const updatePromises = changedRows.map(row => {
            const updateValues = {
              Quantity: newVal
            };
            const whereConditions = {
              productId: productId,
              locationId: locationId
            };
            console.log(`Updating row with conditions:`, whereConditions, `and values:`, updateValues);
            

            return History.update(updateValues, {
                where: whereConditions,
                transaction: transaction // Pass 'transaction' here
              });
            });
     });

     
        const results = await Promise.all(updatePromises);
        await transaction.commit(); // Commit the transaction if all updates are successful
        //res.json({ status: 'success', message: 'Changes saved successfully!' });
        console.log(`Update results:`, results);
    };

  