// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middleware/auth');

const salesController = require('../controllers/salesController');
const productController = require('../controllers/productController');
const locationsController = require('../controllers/locationsController');

//router.get('/total-sales',ensureAuthenticated, salesController.totalSales);

//router.get('/product', ensureAuthenticated, productController.ListProducts);


//router.get('/locations', locationsController.ListLocations);

//router.get('/product', productController.ListCategories);

module.exports = router;
