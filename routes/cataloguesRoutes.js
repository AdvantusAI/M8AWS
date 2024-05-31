// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middleware/auth');
const productController = require('../controllers/productController');
const locationsController = require('../controllers/locationsController');


router.get('/product', ensureAuthenticated, productController.ListCatProd);
router.get('/locations', ensureAuthenticated, locationsController.ListLocations);
router.get('/test', productController.test);


module.exports = router;
