const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


const Product = require('../models/Product');  // Update the path as necessary

router.get('/product', productController.ListProducts);

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
