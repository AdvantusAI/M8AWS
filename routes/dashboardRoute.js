// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../middleware/auth');
const salesController = require('../controllers/salesController');
const { getPivotedData } = require('../controllers/dashboardController');

router.get('/test', ensureAuthenticated, salesController.totalSales);

router.get('/pivoted-history', async (req, res) => {
    const { productId, locationId } = req.query;
  
    try {
      const results = await getPivotedData(productId, locationId);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching pivoted history data.' });
    }
  });

router.get('/SaveGridChanges',  salesController.SaveGridChanges);


module.exports = router;
