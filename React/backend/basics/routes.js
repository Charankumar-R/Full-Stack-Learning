// Basic Express routes example

// Importing necessary modules
const express = require('express');
const router = express.Router();

// Defining a simple route
router.get('/', (req, res) => {
    res.send('Hello from Express route!');
});

// Exporting the router
module.exports = router;