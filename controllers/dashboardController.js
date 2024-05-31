// controllers/userController.js
const jwt = require('jsonwebtoken');
const dashboard_data = require('../models/dashboard_data');
const secretKey = 'your_jwt_secret';  // Deberías almacenar esto en variables de entorno.
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

exports.fillDashboard = async (req, res) => {
        try {
          const dashboardData = await dashboard_data.find().lean();
          res.json({ dashboardData });
        } catch (error) {
          console.error('Failed to retrieve dashboard Data:', error);
          res.status(500).send('Server Error');
        }
      };


async function getPivotedData(productId, locationId) {
  try {
    console.log(productId)
    const query = `CALL GetPivotedHistory(:productId, :locationId);`;
    const results = await sequelize.query(query, {
      replacements: { productId, locationId },
      type: DataTypes.RAW // Ensure QueryTypes is used correctly
    });
    return results;
  } catch (error) {
    console.error('Error executing stored procedure:', error);
    throw error;
  }
}

module.exports = { getPivotedData };