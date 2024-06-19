const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const sequelize = require('./config/database');
var bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes');
const salesRoutes = require('./routes/salesRoutes');
const dashboardRoutes = require('./routes/dashboardRoute');
const cataloguesRoutes = require('./routes/cataloguesRoutes');
require('dotenv').config();
const app = express();



app.use(express.json());
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//static files
app.use('/misc', express.static('misc'))
app.use('/assets', express.static('assets'))
// Middleware para parsear el cuerpo de las peticiones JSON

// Configuración de EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', 'views');  // Directorio donde se almacenarán las vistas



app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' }
}));


app.use('/', userRoutes)

//app.use('/api', salesRoutes);

app.use('/api/', cataloguesRoutes)
app.use('/api/dashboard/', dashboardRoutes)


// Sync the models with the database
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Failed to sync database:', err));




//const port = process.env.PORT || 3100;
//const PORT=5500;
//app.listen(PORT, () => {
//    console.log(`App running on port http://localhost:${PORT}...`);
//});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening `)
})