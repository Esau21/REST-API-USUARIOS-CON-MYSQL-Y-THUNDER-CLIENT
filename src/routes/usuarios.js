//autor Edgar Esau Zelaya Moran
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Aqui recibimos todos los registros de nuestra base de datos
router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Aqui recibimos solo un registro mediante un ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});


router.post('/', (req, res) => {
    const { id, name, apellido, telefono , dui } = req.body;
    const query = `
        CALL usuariosAddorEdit(?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, apellido, telefono, dui], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'USUARIO REGISTRADO CON EXITO'});
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const {  name, apellido, telefono , dui } = req.body;
    const { id } = req.params;
    const query = 'CALL usuariosAddorEdit(?, ?, ?, ?, ?)';
    mysqlConnection.query(query, [id, name, apellido, telefono, dui], (err, rows, fields) => {
        if(!err){
            res.json({status: 'USUARIO ACTUALIZADO'});
        } else {
            console.log(err);
        }
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM usuarios WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({status: 'EL USUARIO SE ELIMINO CON EXITO'});
        } else {
            console.log(err);
        }
    });
});




module.exports = router;