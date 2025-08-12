// Error handling example
// This function logs the error message to the console
function logError(errorMessage) {
    console.error("Error: " + errorMessage);
}

// This function sends the error message to a monitoring service
function reportError(errorMessage) {
    // Code to send error message to a monitoring service
}

// This function displays a user-friendly error message
function displayError() {
    // Code to display a user-friendly error message
}

// errorHandling.js
// Example error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}

module.exports = errorHandler;