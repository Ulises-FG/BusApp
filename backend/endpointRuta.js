const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post('/ruta', async (req, res) => {
  console.log('req.body', req.body);
  const body = req.body;
  const { nombre, imagen, idUsuario } = body;
  try {
    const ruta = await prisma.ruta.create({
      data: {
        nombre: nombre,
        imagen: imagen,
        idUsuario: idUsuario,
      },
    });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la ruta' });
  }
});

app.get('/ruta/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ruta = await prisma.ruta.findUnique({
      where: {
        id: id,
      },
    });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la ruta' });
  }
});

app.delete('/ruta/:id', async (req, res) => {
  const idRuta = req.params.id;

  try {
    const ruta = await prisma.ruta.delete({
      where: {
        id: idRuta,
      },
    });

    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la ruta' });
  }
});

app.put('/ruta/:id', async (req, res) => {
  const idRuta = parseInt(req.params.id);
  const { nombre, imagen, idUsuario } = req.body;

  try {
    const ruta = await prisma.ruta.update({
      where: {
        id: idRuta,
      },
      data: {
        nombre,
        imagen,
        idUsuario,
      },
    });

    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la ruta' });
  }
});

