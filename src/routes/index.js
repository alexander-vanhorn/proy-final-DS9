const express = require('express');
const router = express.Router();
const Tarea = require('../models/tareas'); //conf para el enlance donde se encuentra el modelo de datos

// Es para la Página principal donde se despliega el listado de todos los registros
router.get('/', async (req, res) => {
    const tarea = await Tarea.find();
    console.log('Request for home recieved Time: ', Date.now());
    res.render('index', {
      tarea
    });
  });
  /*router.get('/', (req, res) => {
    console.log('Request for home recieved');
    res.render('index');
  });*/
  
  router.get('/Catalogo', (req, res) => {
    console.log('Request for Catalogo recieved Time: ', Date.now());
    res.render('../public/partes/Lab2MAguilar');
  });
  
  router.get('/Agendar', (req, res) => {
    console.log('Request for Agendar Citas recieved Time: ', Date.now());
    res.render('../public/partes/seleccion');
  });

  router.get('/Registro', (req, res) => {
    console.log('Request for Registro recieved Time: ', Date.now());
    res.render('../public/partes/registro');
  });
  
  router.get('/Login', (req, res) => {
    console.log('Request for Login recieved Time: ', Date.now());
    res.render('../public/partes/login');
  });

// Agregamos a la base de datos cuando en el formulario envia por medio del post información a /add
router.post('/add', async (req, res, next) => {
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.redirect('/');
  });

// Actualizamos el estatus de la tarea que inicialmente está en falso.
router.get('/turn/:id', async (req, res, next) => {
    let { id } = req.params;
    const tarea = await Tarea.findById(id);
    tarea.status = !tarea.status; //Se actualizar el estatus al contrario que existe en la BD
    await tarea.save();
    res.redirect('/');
  });
  
 // Se recibe el id del registro para realizar una actualización. 
router.get('/edit/:id', async (req, res, next) => {
    const tarea = await Tarea.findById(req.params.id);
    console.log(tarea)
    res.render('edit', { tarea });
  });
 
  // Se recibe del fomrulario de actualización los registros actualizados para llevarlo a la BD.  
router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Tarea.update({_id: id}, req.body);
    res.redirect('/');
  });
 
 // Se elimina un registro por medio de la busqueda del ID utilizando el método GET. 
router.get('/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Tarea.remove({_id: id});
    res.redirect('/');
  });
  
module.exports = router;