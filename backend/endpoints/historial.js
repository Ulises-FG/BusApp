const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para analizar el cuerpo de las solicitudes como JSON
router.use(express.json());

// Crear un historial
router.post('/', async (req, res) => {
  try {
    const { rutaHistorial, idUsuario} = req.body;
    console.log(rutaHistorial, idUsuario);
    const historial = await prisma.historial.create({
      data: {
        rutaHistorial: rol,
        idUsuario: 1,
      },
    });
    res.json(historial);
  } catch (error) {
    console.log('holaaaaaaaa');
    res.status(500).json({ error: 'Error al crear un historial' });
  }
});

// Obtener un historial por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const hits = await prisma.historial.findUnique({
      where: {
        historialId:id,
      },
    });
    res.json(hits);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial' });
  }
});

// Eliminar un historial por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const historial = await prisma.historial.delete({
      where: {
        historialId: parseInt(id),
      },
    });
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el historial' });
  }
});

// Actualizar un usuario por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rutaHistorial, idUsuario} = req.body;
    const historial = await prisma.usuario.update({
      where: {
        historialId: parseInt(id),
      },
      data: {
        rutaHistorial: rol,
        idUsuario: 1,
      },
    });
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el historial' });
  }
});

module.exports = router;
