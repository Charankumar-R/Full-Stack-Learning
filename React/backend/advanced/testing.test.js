// Backend testing example with Jest & Supertest

// Import necessary modules and dependencies
const request = require('supertest');
const express = require('express');
const routes = require('../basics/routes');

// Initialize the express application
const app = express();
app.use('/', routes);

// Describe the test suite for the root route
describe('GET /', () => {
  // Define a test case for the root route
  it('should return hello message', async () => {
    // Send a GET request to the root endpoint
    const res = await request(app).get('/');

    // Assert the response text
    expect(res.text).toBe('Hello from Express route!');
  });
});

// Describe the test suite for the /api/example route
describe('GET /api/example', () => {
  // Define a test case
  it('should respond with a 200 status and JSON data', async () => {
    // Send a GET request to the endpoint
    const response = await request(app).get('/api/example');

    // Assert the response status and content type
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);

    // Assert the response body structure and content
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toBeInstanceOf(Array);
  });
});