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
/*
app.get("/", function(req, res) {
  res.type("text/html");
  res.render(
    "index",
    {
      pagina: 1
    },
    function(err, html) {
      if (err) throw err;
      res.send(html);
    }
  );
});

app.get("/Catalogo", function(req, res) {
  res.type("text/html");
  res.render(
    "index",
    {
      pagina: 2
    },
    function(err, html) {
      if (err) throw err;
      res.send(html);
    }
  );
});

app.get("/Agendar", function(req, res) {
  res.type("text/html");
  res.render(
    "index",
    {
      pagina: 3
    },
    function(err, html) {
      if (err) throw err;
      res.send(html);
    }
  );
});

app.get("/Registro", function(req, res) {
  res.type("text/html");
  res.render(
    "index",
    {
      pagina: 4
    },
    function(err, html) {
      if (err) throw err;
      res.send(html);
    }
  );
});

app.get("/Login", function(req, res) {
  res.type("text/html");
  res.render(
    "index",
    {
      pagina: 5
    },
    function(err, html) {
      if (err) throw err;
      res.send(html);
    }
  );
});

//Error 404
app.use(function(req, res) {
  res.type("text/html");
  res.status(404);
  res.render(
    "index",
    {
      pagina: 6
    },
    function(err, html) {
      if (err) throw err;
      res.send(html);
    }
  );
});

// Pagina de error 500
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});*/
// rutas
app.use('/', indexRoutes);


//Inicialización del servidor
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
  });