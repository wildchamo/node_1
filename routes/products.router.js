const express = require('express');
const ProductsService = require('../services/product.service');
const router = express.Router();

const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.post('/', (req, res) => {
  const body = req.body;

  const newProduct = service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct,
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const product = service.findOne(id);

  res.status(200).json({ data: product });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    message: 'update ',
    data: product,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);

  res.json({
    message: 'borrauw ',
    data: product,
  });
});

module.exports = router;
