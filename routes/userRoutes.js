// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const ensureAuthenticated = require('../middleware/auth');
const productController = require('../controllers/productController');


router.post('/login', userController.login);

router.get('/login', (req, res) => {
  res.render('login');
});

// Nueva ruta para GET
router.get('/', (req, res) => {
res.render('login');
});


router.get('/index', ensureAuthenticated, (req, res) => {
  res.render('index', { user: req.session.user});
});





/*
router.post('/register',  userController.register, (req, res) => {
    res.render('login');
});


//router.post('/register', userController.register);

// Nueva ruta para GET


router.get('/register', (req, res) => {
    res.render('register');
});



  router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.redirect('/login'); // en caso de error redirige a la página principal autenticada
      }
      res.clearCookie('connect.sid'); // Asegúrate de que el nombre de la cookie coincida con tu configuración
      res.redirect('/login'); // Redirige al usuario a la página de inicio de sesión tras cerrar la sesión
    });
  });




*/
  

module.exports = router;
