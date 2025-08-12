// server.js
// Basic Express server setup

const express = require('express');
const app = express();
const routes = require('./routes');
const middleware = require('./middleware');

app.use(express.json());
app.use(middleware);
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});