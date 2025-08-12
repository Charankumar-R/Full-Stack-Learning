// WebSocket example
// This file contains the implementation of WebSocket connections
// for advanced features in the backend.

// Import necessary modules
const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// Listen for connection events
wss.on('connection', (ws) => {
  console.log('New client connected');

  // Listen for messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  // Send a welcome message to the new client
  ws.send('Welcome to the WebSocket server!');

  // Handle client disconnect
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');