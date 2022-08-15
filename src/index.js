const express = require('express');
const app = express();



//Settings 
app.set('port', process.env.PORT || 4000);

//Middleawares
app.use(express.json());

//Rutas -> Routes
app.use(require('./routes/usuarios'));



app.listen(app.get('port'), () => {
    console.log('Esta aplicacion esta corriendo en el puerto', app.get('port'));
});

