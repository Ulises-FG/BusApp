// index.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/usuario', async (req, res) => {
  console.log("hola");
  const body = req.body;
  const { rol, nombre, contrasena, correo } = body;
  try {
    const usuario = await prisma.Usuario.create({
      data: {
        rol: rol,
        nombre: nombre,
        contrasena: contrasena,
        correo: correo,
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

app.get('/usuario/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.Usuario.findUnique({
      where: {
        usuarioId: id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

app.delete('/usuario/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await prisma.Usuario.delete({
      where: {
        usuarioId: id,
      },
    });

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

app.put('/usuario/:id', async (req, res) => {
  const { id } = req.params;
  const { rol, nombre, contrasena, correo } = req.body;

  try {
    const usuario = await prisma.Usuario.update({
      where: {
        usuarioId: id,
      },
      data: {
        rol: rol,
        nombre: nombre,
        contrasena: contrasena,
        correo: correo,
      },
    });

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

app.listen(3000, () => {
  console.log('Servidor Express.js en funcionamiento');
});
