const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('todo los datos papa lindo');
  }
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, username: 'Luis' });
});

module.exports = router;
