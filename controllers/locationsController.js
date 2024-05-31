// controllers/userController.js
const jwt = require('jsonwebtoken');
const Location = require('../models/Locations');

const secretKey = 'your_jwt_secret';  // Deberías almacenar esto en variables de entorno.



exports.ListLocations = async (req, res) => {
    try {
      const locations = await Location.findAll(); // Using .lean() to get a plain JavaScript object
    
      res.json({ locations });
  } catch (error) {
    console.error('Failed to retrieve locations :', error);
    res.status(500).send('Error retrieving data.');
  }
};