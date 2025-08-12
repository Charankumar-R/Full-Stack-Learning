// REST API example with Express

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/example', (req, res) => {
  res.send('This is an example endpoint!');
});

// Example REST API route
const router = express.Router();

// GET /api/items
router.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

app.use(router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});