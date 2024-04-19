const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handle');

const app = express();

app.use(express.json());
routerApi(app);
app.get("/", (req, res) => res.send("Express on Vercel"));

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Prendido papa lindo at http://localhost:${port}`);
});

module.exports = app;
