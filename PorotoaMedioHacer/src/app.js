const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
// Esto nos permite usar archivos estáticos como CSS, imágenes, etc.
app.use(express.static('public'));
// Configura EJS como motor de vistas
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
//app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(__dirname + '/public'));
// middlewares
app.use(session({
 secret: 'my secret',
 resave: false,
 saveUninitialized: false,
 cookie: { secure: false } // cambiar a true si estás en un entorno https
}));
// Rutas const indexRoutes = require('./routes/index');
const productosRoutes = require('./routes/productos');
const dexRoutes = require('./routes/index');
const carritoRoutes = require('./routes/carrito');
const paypalRoutes = require('./routes/paypal');
//app.use('/index', dexRoutes);
app.use('/productos', productosRoutes);
app.use('/carrito', carritoRoutes);
app.use('/paypal', paypalRoutes);
app.use('/', dexRoutes);
app.get('/Catalogo', (req, res) => {
  res.redirect('/productos');
 });
app.listen(port, () => {
 console.log(`El servidor se está ejecutando en
http://localhost:${port}`);
});