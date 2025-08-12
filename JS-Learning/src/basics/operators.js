// OPERATORS IN JAVASCRIPT
// ----------------------
// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);

// Assignment Operators
let x = 5;
x += 2; // 7
x -= 1; // 6
x *= 3; // 18
x /= 2; // 9
console.log(x);

// Comparison Operators
console.log(5 == "5"); // true (type coercion)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
console.log(5 > 3, 5 < 3, 5 >= 5, 5 <= 4);

// Logical Operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Bitwise Operators
console.log(5 & 1, 5 | 1, 5 ^ 1, ~5, 5 << 1, 5 >> 1, 5 >>> 1);

// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// Operator Precedence
console.log(2 + 3 * 4); // 14
console.log((2 + 3) * 4); // 20

// Short-circuiting
let name = "";
let displayName = name || "Guest";
console.log(displayName);