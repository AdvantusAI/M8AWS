// controllers/userController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
var bcrypt = require('bcryptjs');
const secretKey = 'your_jwt_secret';  // Deberías almacenar esto en variables de entorno.

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, hashedPassword });
    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
  });
    //await user.save();
    //res.status(201).send('User registered');
    //res.render('login');
      // Respond with the new user's details (excluding the password)
      res.status(201).json({
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
     // Validate input
     if (!username || !password) {
      return res.status(400).json({ error: 'Please provide username and password' });
  }
    // Find the user by email
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }
    // Compare the provided password with the stored hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    req.session.user = { id: user._id, username: user.username, email: user.email };
    req.session.isAuthenticated = true;
    res.redirect('/index');
    //res.status(200).send({ token });
    //res.render('index');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};

// Agregar aquí métodos para CRUD de usuarios si es necesario
