// app.js
// Main backend app entry point
const express = require('express');
const app = express();
const routes = require('./basics/routes');
const middleware = require('./basics/middleware');
const errorHandler = require('./intermediate/errorHandling');

app.use(express.json());
app.use(middleware);
app.use('/', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend app running on port ${PORT}`);
});