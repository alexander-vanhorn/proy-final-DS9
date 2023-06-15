const express = require('express');
const router = express.Router();
const db = require('../db/db');
router.get('/', (req, res) => {
 db.query('SELECT * FROM productos', (error, results) => {
 if (error) {
 throw error;
 }
 res.render('../public/partes/Lab2MAguilar', {productos: results});
 });
});
module.exports = router;