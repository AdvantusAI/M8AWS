// controllers/userController.js
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');


const secretKey = 'your_jwt_secret';  // Deberías almacenar esto en variables de entorno.



exports.ListProducts = async (req, res) => {
  try {
      const products = await Product.findAll();
      res.json({ products });
  } catch (error) {
      console.error('Failed to retrieve products:', error);
      res.status(500).send('Error retrieving data.');
  }
};
  
