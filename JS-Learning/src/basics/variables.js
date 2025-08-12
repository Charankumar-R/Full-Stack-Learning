// filepath: /js-learning-project/js-learning-project/src/basics/variables.js
// Variable Declaration in JavaScript

// Using var
var name = "Charan"; // Function-scoped or globally-scoped
console.log(name); // Output: Charan

// Using let
let age = 25; // Block-scoped
console.log(age); // Output: 25

if (true) {
    let age = 30; // This age is different from the outer scope
    console.log(age); // Output: 30
}

console.log(age); // Output: 25

// Using const
const PI = 3.14; // Block-scoped and cannot be reassigned
console.log(PI); // Output: 3.14

// Hoisting
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// The following line would throw an error because let and const are not hoisted in the same way
// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";