//Modelo de la base de datos

const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

// Esquema de la tarea
const TaskSchema = Schema({
  title: String, // Se define los campos y el tipo de datos
  description: String,
  status: { //Este objeto es para cuando se almacene una nueva tares tenga un valor predeterminado en falso
    type: Boolean,
    default: false
  }
});

// Toma el esquema y lo guarda en la colleccion 'tarea' dentro de mongoDB
module.exports = mongoose.model('tareas', TaskSchema); 