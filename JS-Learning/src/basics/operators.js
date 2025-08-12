// filepath: /js-learning-project/js-learning-project/src/basics/operators.js

// Arithmetic Operators
const a = 10;
const b = 5;

console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0

// Comparison Operators
console.log("Equal (==):", a == b); // false
console.log("Strict Equal (===):", a === b); // false
console.log("Not Equal (!=):", a != b); // true
console.log("Strict Not Equal (!==):", a !== b); // true
console.log("Greater Than (>):", a > b); // true
console.log("Less Than (<):", a < b); // false

// Logical Operators
const x = true;
const y = false;

console.log("Logical AND (&&):", x && y); // false
console.log("Logical OR (||):", x || y); // true
console.log("Logical NOT (!):", !x); // false

// Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log("After += :", c); // 15

c -= 5; // c = c - 5
console.log("After -= :", c); // 10

c *= 2; // c = c * 2
console.log("After *= :", c); // 20

c /= 4; // c = c / 4
console.log("After /= :", c); // 5

c %= 2; // c = c % 2
console.log("After %= :", c); // 1

// Unary Operators
let d = 5;
console.log("Unary Plus (+):", +d); // 5
console.log("Unary Negation (-):", -d); // -5

// Ternary Operator
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // Yes