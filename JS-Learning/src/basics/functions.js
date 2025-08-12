// FUNCTIONS IN JAVASCRIPT
// ----------------------
// Function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2,3));

// Function expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(2,3));

// Arrow function
const subtract = (a, b) => a - b;
console.log(subtract(5,2));

// Default parameters
function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet();

// Rest and spread
function sum(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1,2,3,4));

// Return values
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));

// First-class functions
function callTwice(fn) {
    fn();
    fn();
}
callTwice(() => console.log("Called!"));

// Callback functions
function fetchData(callback) {
    setTimeout(() => callback("Data loaded"), 1000);
}
fetchData(data => console.log(data));

// IIFE
(function() {
    console.log("IIFE runs immediately");
})();

// Closures
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter(), counter());

// Recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));

// Function binding
function showThis() {
    console.log(this);
}
const bound = showThis.bind({x:1});
bound();