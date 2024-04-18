const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 2023;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log(`Prendido papa lindo at http://localhost:${port}`);
});
