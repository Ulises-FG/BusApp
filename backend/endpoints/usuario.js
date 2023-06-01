const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Middleware para analizar el cuerpo de las solicitudes como JSON
router.use(express.json());

// Crear un usuario
router.post('/', async (req, res) => {
  try {
    const { rol, nombre, contrasena, correo } = req.body;
    console.log(rol, nombre, contrasena, correo);
    const usuario = await prisma.usuario.create({
      data: {
        rol: rol,
        nombre: nombre,
        contrasena: contrasena,
        correo: correo,
      },
    });
    res.json(usuario);
  } catch (error) {
    console.log('holaaaaaaaa');
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.usuario.findUnique({
      where: {
        usuarioId: parseInt(id),
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.delete({
      where: {
        usuarioId: parseInt(id),
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

// Actualizar un usuario por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rol, nombre, contrasena, correo } = req.body;
    const usuario = await prisma.usuario.update({
      where: {
        usuarioId: parseInt(id),
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

module.exports = router;
