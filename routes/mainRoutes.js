// routes/userRoutes.js
const express = require('express');
const router = express.Router();



// Nueva ruta para GET
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
