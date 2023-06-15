const mysql = require('mysql');
const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '',
 database: 'PruebaPP'
});
db.connect((error) => {
 if (error) {
 throw error;
 }
 console.log('Conexión exitosa a la base de datos.');
});
module.exports = db;
/*La base de datos le puedes colocar el nombre que guste, la tabla se llamará
productos con los siguientes campos
CREATE TABLE productos (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(255) NOT NULL,
 descripcion TEXT,
 precio DECIMAL(10,2) NOT NULL
);*/