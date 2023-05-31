// index.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/usuario', async (req, res) => {
  console.log('req.body', req.body);
  const body = req.body;
  const { rol, nombre, contrasena, correo } = body;
  try {
    const usuario = await prisma.user.create({
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
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

app.delete('/usuario/:id', async (req, res) => {
  const idUsuario = parseInt(req.params.id);

  try {
    const usuario = await prisma.user.delete({
      where: {
        id: idUsuario,
      },
    });

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

app.put('/usuario/:id', async (req, res) => {
  const idUsuario = parseInt(req.params.id);
  const { rol, nombre, contrasena, correo } = req.body;

  try {
    const usuario = await prisma.user.update({
      where: {
        id: idUsuario,
      },
      data: {
        rol,
        nombre,
        contrasena,
        correo,
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
