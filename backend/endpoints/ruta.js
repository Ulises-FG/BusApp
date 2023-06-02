const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para analizar el cuerpo de las solicitudes como JSON
router.use(express.json());

// Crear una ruta
router.post('/', async (req, res) => {
  try {
    const { nombre, imagen, idUsuario } = req.body;
    const ruta = await prisma.ruta.create({
      data: {
        nombre: nombre,
        imagen: imagen,
        idUsuario: idUsuario,
      },
    });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la ruta' });
  }
});

// Obtener una ruta por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ruta = await prisma.ruta.findUnique({
      where: {
        rutaId: id,
      },
      include: {
        usuario: true,
      },
    });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la ruta' });
  }
});

// Eliminar una ruta por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ruta = await prisma.ruta.delete({
      where: {
        rutaId: id,
      },
      include: {
        usuario: true,
      },
    });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la ruta' });
  }
});

// Actualizar una ruta por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, imagen, idUsuario } = req.body;
    const ruta = await prisma.ruta.update({
      where: {
        rutaId: id,
      },
      include: {
        usuario: true,
      },
      data: {
        nombre: nombre,
        imagen: imagen,
        idUsuario: idUsuario,
      },
    });
    res.json(ruta);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la ruta' });
  }
});

module.exports = router;
