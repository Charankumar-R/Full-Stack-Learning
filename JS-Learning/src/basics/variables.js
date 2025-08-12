// VARIABLES IN JAVASCRIPT
// -----------------------
// Variable Declaration
var a = 10; // function-scoped, can be redeclared
let b = 20; // block-scoped, cannot be redeclared in same scope
const c = 30; // block-scoped, cannot be reassigned

// Scope
function testScope() {
    var x = 'var';
    let y = 'let';
    const z = 'const';
    if (true) {
        var x2 = 'var in block';
        let y2 = 'let in block';
        const z2 = 'const in block';
        console.log(x2, y2, z2);
    }
    console.log(x, y, z);
}
testScope();

// Hoisting
console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';
// let and const are not hoisted the same way
// console.log(hoistedLet); // ReferenceError
// let hoistedLet = 'Not hoisted';

// Temporal Dead Zone
// Variables declared with let/const are not accessible before declaration

// Immutability
const PI = 3.14159; // cannot be reassigned
// PI = 3; // Error

// Best Practices
// - Prefer const for values that never change
// - Use let for block-scoped variables
// - Avoid var in modern code
// - Use descriptive variable names

// This is a variable declared with 'var'. It is function-scoped or globally-scoped.
var myVar = "Hello, World!";
console.log(myVar); // Hello, World!

// This is a variable declared with 'let'. It is block-scoped.
let myLet = "Hello, Universe!";
console.log(myLet); // Hello, Universe!

// This is a constant declared with 'const'. It is block-scoped and cannot be reassigned.
const MY_CONST = 3.14159;
console.log(MY_CONST); // 3.14159

// Example of scope: 'myVar' is accessible here if declared in the outer scope
function myFunction() {
    console.log(myVar);
}

// Example of hoisting: 'myVar' is hoisted to the top of its scope
console.log(myVar); // undefined
var myVar = "Hoisted variable";
console.log(myVar); // Hoisted variable