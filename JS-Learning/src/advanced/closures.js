// filepath: /js-learning-project/js-learning-project/src/advanced/closures.js
function makeCounter() {
    let count = 0; // Private variable

    return function() {
        count++; // Increment the private variable
        return count; // Return the current count
    };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Example of closure in a loop
function createFunctions() {
    const funcs = [];
    for (let i = 0; i < 3; i++) {
        funcs.push(function() {
            return i; // Closure captures the variable i
        });
    }
    return funcs;
}

const functions = createFunctions();
console.log(functions[0]()); // 3
console.log(functions[1]()); // 3
console.log(functions[2]()); // 3

// Explanation of closures
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. 
// This allows for data encapsulation and private variables. Closures are commonly used in JavaScript for data privacy and maintaining state.