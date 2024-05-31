const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const ensureAuthenticated = require('../middleware/auth');

// Assuming Sale is already defined in a model file, import it
const Product = require('../models/Product');  // Update the path as necessary
// Route to get total quantity of sales


//router.post('/register', userController.register);
//router.get('/product',ensureAuthenticated, productController.ListProduct);




//router.get('/product/:productId', productController.ListProductUId);


module.exports = router;
