const express = require('express');
const app = express();

// Importar los archivos de enrutamiento
const usuarioRouter = require('./endpoints/usuario');
const historialRouter = require('./endpoints/historial');
const rutaRouter = require('./endpoints/ruta');

// Usar los enrutadores
app.use('/usuario', usuarioRouter);
app.use('/historial', historialRouter);
app.use('/ruta', rutaRouter);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
