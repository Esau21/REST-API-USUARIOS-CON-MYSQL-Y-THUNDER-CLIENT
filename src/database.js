const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'apiusuarios'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Database Connect :D');
    }
});


//Autor: Edgar Esau Zelaya Moran

module.exports = mysqlConnection;