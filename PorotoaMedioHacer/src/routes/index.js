const express = require('express');
const router = express.Router();
const conexion = require('../db/db');

  router.get('/', (req, res)=>{                         
    console.log('Request for Catalogo recieved Time: ', Date.now());
    res.render('../views/index');          
})
  
  /*router.get('/Catalogo', (req, res) => {
    console.log('Request for Catalogo recieved Time: ', Date.now());
    res.render('../public/partes/Lab2MAguilar');
  });*/
  
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
  
  //const crud = require('../controllers/crud');

  //router.post('/save', crud.save);
  
  module.exports = router;