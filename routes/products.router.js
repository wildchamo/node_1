const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;

  const limit = size || 10;

  const products = [];

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy groot');
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, primerValor: 'Hola, Luis', price: 1000 });
});

module.exports = router;
