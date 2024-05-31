const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
var bodyParser = require('body-parser')
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoute');
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


app.use('/', productRoutes)


// Sync the models with the database
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Failed to sync database:', err));




//const port = process.env.PORT || 3100;
const PORT=5500;
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}...`);
});

