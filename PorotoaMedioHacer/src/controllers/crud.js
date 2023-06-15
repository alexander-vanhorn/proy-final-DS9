//Invocamos a la conexion de la DB
/*const conexion = require('../db/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const nombreS = req.body.user;
    const precioS = req.body.precioTotal;
    const cantidadS = req.body.cantidadTotal
    conexion.query('INSERT INTO orders SET ?',{user:nombreS, cantidad:cantidadS, precio:precioS}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);   
            res.redirect('/');         
        }
});
};
/*ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const nombreS = req.body.nombre;
    const apellidoS = req.body.apellido;
    const emailS = req.body.email;
    const cedulaS = req.body.cedula;
    conexion.query('UPDATE cliente SET ? WHERE id_cliente = ?',[{nombre:nombreS, apellido:apellidoS, email:emailS, cedula:cedulaS}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};*/