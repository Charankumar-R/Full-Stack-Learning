// Error handling in JavaScript: try-catch, throw, finally
// Custom error examples

// This file demonstrates advanced error handling in JavaScript using try-catch blocks,
// the throw statement to create custom errors, and the finally block to execute
// code regardless of an error occurring or not.

// ERROR HANDLING IN JAVASCRIPT
// - try, catch, finally
// - throw custom errors
// - Error object
// - Handling async errors
// - Defensive programming

// Basic structure of try-catch
try {
    // Code that may throw an error
} catch (error) {
    // Handling the error
    console.error("An error occurred:", error);
}

// Throwing a custom error
function doSomethingRisky() {
    throw new Error("Something went wrong!");
}

// Using try-catch with a custom error
try {
    doSomethingRisky();
} catch (error) {
    console.error("Caught a custom error:", error.message);
}

// Finally block example
try {
    // Code that may throw an error
} catch (error) {
    // Handling the error
    console.error("An error occurred:", error);
} finally {
    // Code that will run regardless of an error occurring or not
    console.log("Cleanup code can go here.");
}