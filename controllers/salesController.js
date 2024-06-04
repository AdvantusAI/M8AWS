// controllers/userController.js
const jwt = require('jsonwebtoken');
const dashboard_data = require('../models/dashboard_data');

const secretKey = 'your_jwt_secret';  // Deberías almacenar esto en variables de entorno.



    exports.totalSales = async (req, res) => {
      console.log('dashboardCards')
      try {
        // Extract parameters from the request query
        const { productId, locationId  } = req.query;
    
        // Create a filter object
        const filter = {};
    
        // Add filters based on the provided parameters
        if (productId) {
          filter.productId = productId;
        }
        if (locationId) {
          filter.locationId = locationId;
        }
        // Fetch data with filters
        const dashboard_Data = await dashboard_data.findAll({
          where: filter
        });
    
        res.json({ dashboard_Data });
      } catch (error) {
        console.error('Failed to retrieve dashboard_Data:', error);
        res.status(500).send('Error retrieving data.');
      }
    };
    
    exports.SaveGridChanges = async (req, res) => {
      res.json(results);
      const { changedRows, columnDefs } = req.body;
      console.log('SaveGridChanges')
      console.log(changedRows);
     };

   