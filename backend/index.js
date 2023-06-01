const express = require('express');
const app = express();

// Importar los archivos de enrutamiento
const usuarioRouter = require('./endpoints/usuario');

// Usar los enrutadores
app.use('/usuario', usuarioRouter);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
