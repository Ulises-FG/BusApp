// index.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

app.listen(3000, () => {
  console.log('Servidor Express.js en funcionamiento');
});
