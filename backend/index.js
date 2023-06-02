const express = require('express');
const app = express();

// Importar los archivos de enrutamiento Ruta
const rutaRouter = require('./endpoints/ruta');

// Usar los enrutadores Ruta
app.use('/ruta', rutaRouter);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
