const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//conexión a la BD
mongoose.connect('mongodb://127.0.0.1/BD-lab2') // BD-lab2 vendría siendo el nombre de la base de datos, para mongoose se puede crear desde código
  .then(db => console.log('DB conectado'))
  .catch(err => console.log(err));


// Importar rutas
const indexRoutes = require('./routes/index');

//Configuración
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //Carpeta de las vistas
app.set('view engine', 'ejs'); // Motor de plantilla
app.use('/public', express.static(__dirname + '/public'));
// middlewares
app.use(morgan('dev')); // Con morgan podemos ver los procesos en la vista de la consola.
app.use(express.urlencoded({extended: false})) //Para interpretar los datos que vienen de un formulario y poder procesarlo

// rutas
app.use('/', indexRoutes);


//Inicialización del servidor
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });