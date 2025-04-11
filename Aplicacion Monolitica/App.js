const express = require('express');
const app = express();
app.use(express.json());

let products = [];

// Agregar producto
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Nombre y precio son requeridos' });
  }
  const newProduct = {
    id: Date.now(),
    name,
    price: parseFloat(price)
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Listar productos
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});


/*
Comentarios:

- Esta implementación es monolítica porque toda la lógica (servidor, rutas, almacenamiento y validaciones)
  está contenida en un solo archivo, sin separación de capas ni modularización.

- Desventajas de esta estructura:
    - Difícil de escalar: si el proyecto crece, este único archivo puede volverse inmanejable.
    - Complica el mantenimiento y la lectura del código.
    - No permite reutilizar lógicamente partes del código en otros contextos.
    - Es más propenso a errores, ya que no hay separación clara de responsabilidades.
*/