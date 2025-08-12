// filepath: /js-learning-project/js-learning-project/src/basics/functions.js
// Function Declarations
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expressions
const add = function(a, b) {
    return a + b;
};

// Arrow Functions
const multiply = (a, b) => a * b;

// First-Class Functions
function higherOrderFunction(callback) {
    return callback();
}

// Example usage
console.log(greet("Charan")); // Hello, Charan!
console.log(add(5, 3)); // 8
console.log(multiply(4, 2)); // 8

const result = higherOrderFunction(() => "This is a first-class function!");
console.log(result); // This is a first-class function!