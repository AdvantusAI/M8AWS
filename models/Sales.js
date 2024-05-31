const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define a Schema for the sales
const SalesSchema = new mongoose.Schema({
    productID: {
    type: String,
    required: true,
    unique: true
  },
  dateTime: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  storeID: {
    type: String,
    required: true
  }
});

  
const Sale = mongoose.model('sales', SalesSchema);

module.exports = Sale;
