// Microservices example
// This file contains examples and code snippets for implementing microservices.

// Example of a simple microservice
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the microservice!' });
});

app.listen(port, () => {
  console.log(`Microservice listening at http://localhost:${port}`);
});

// microservices.js
// Example microservice using Express
const app2 = express();

app2.get('/microservice', (req, res) => {
  res.json({ message: 'Hello from microservice!' });
});

app2.listen(4000, () => {
  console.log('Microservice running on port 4000');
});