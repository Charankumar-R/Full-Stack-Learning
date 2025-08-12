// DATA TYPES IN JAVASCRIPT
// ------------------------
// Primitive Types
let str = "Hello"; // string
let num = 42; // number
let bool = true; // boolean
let n = null; // null
let u = undefined; // undefined
let sm = Symbol("id"); // symbol
let big = 1234567890123456789012345678901234567890; // bigint

console.log(typeof str, typeof num, typeof bool, typeof n, typeof u, typeof sm, typeof big);

// Reference Types
let obj = { name: "Alice", age: 25 };
let arr = [1, 2, 3];
let func = function() { return "I am a function"; };
let date = new Date();
let regex = /abc/;

console.log(typeof obj, typeof arr, typeof func, typeof date, typeof regex);

// Type Checking
console.log(Array.isArray(arr)); // true
console.log(obj instanceof Object); // true
console.log(func instanceof Function); // true

// Type Conversion
let numStr = "123";
let convertedNum = Number(numStr); // 123
let strNum = String(456); // "456"
let boolNum = Boolean(0); // false
console.log(convertedNum, strNum, boolNum);

// Special Values
console.log(NaN, typeof NaN); // NaN, 'number'
console.log(Infinity, -Infinity);

// Memory and Mutability
// Primitives are immutable, objects/arrays are mutable
let x = "abc";
x[0] = "z"; // No effect
let y = [1,2,3];
y[0] = 9; // Changes array
console.log(x, y);

// - Primitive types: string, number, boolean, null, undefined, symbol, bigint
// - Reference types: object, array, function, date, regexp
// - Type checking: typeof, instanceof, Array.isArray
// - Type conversion: implicit, explicit, parseInt, parseFloat, String(), Number()
// - Special values: NaN, Infinity
// - Memory and mutability

// String: represents a sequence of characters
let name = "John Doe";
console.log(typeof name); // "string"

// Number: represents both integer and floating-point numbers
let age = 30;
let temperature = 98.6;
console.log(typeof age); // "number"
console.log(typeof temperature); // "number"

// Boolean: represents a logical entity and can have two values: true, false
let isStudent = true;
console.log(typeof isStudent); // "boolean"

// Undefined: represents a variable that has been declared but has not yet been assigned a value
let car;
console.log(typeof car); // "undefined"

// Null: represents the intentional absence of any object value
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a known bug in JavaScript)

// Symbol: represents a unique and immutable value, often used as an identifier for object properties
let sym = Symbol('description');
console.log(typeof sym); // "symbol"

// BigInt: represents whole numbers larger than 2^53 - 1, and can be created by appending n to the end of an integer literal
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // "bigint"

// Reference types
// Object: represents a collection of key-value pairs
let person = {
  name: "John Doe",
  age: 30
};
console.log(typeof person); // "object"

// Array: represents an ordered list of values
let colors = ["red", "green", "blue"];
console.log(typeof colors); // "object"
console.log(Array.isArray(colors)); // true

// Function: represents a reusable block of code that can be called with arguments and can return a value
function greet() {
  return "Hello, world!";
}
console.log(typeof greet); // "function"

// Date: represents a specific moment in time
let now = new Date();
console.log(typeof now); // "object"

// RegExp: represents a regular expression, used for pattern matching within strings
let pattern = /ab+c/;
console.log(typeof pattern); // "object"

// Type checking
console.log(typeof "Hello, world!"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof Symbol('description')); // "symbol"
console.log(typeof 1234567890123456789012345678901234567890n); // "bigint"

// instanceof: tests whether an object is an instance of a specific constructor
console.log(now instanceof Date); // true
console.log([] instanceof Array); // true
console.log(function(){} instanceof Function); // true

// Array.isArray: determines whether the passed value is an Array
console.log(Array.isArray(colors)); // true
console.log(Array.isArray({})); // false

// Type conversion
// Implicit conversion: JavaScript automatically converts one data type to another
let x = "5";
let y = 10;
console.log(x + y); // "510" (string concatenation)
console.log(typeof (x + y)); // "string"

// Explicit conversion: using functions to convert between data types
let z = "15";
console.log(Number(z) + y); // 25 (string to number conversion)
console.log(String(y) + z); // "1015" (number to string conversion)

// parseInt and parseFloat: functions to convert strings to integers or floating-point numbers
let a = "3.14";
console.log(parseInt(a)); // 3
console.log(parseFloat(a)); // 3.14

// Special values
// NaN: represents a value that is not a valid number
let notANumber = "hello" / 2;
console.log(notANumber); // NaN

// Infinity: represents a value that is greater than any finite value
let infinityValue = 1 / 0;
console.log(infinityValue); // Infinity

// Memory and mutability
// - Primitive values are immutable and stored directly in the location the variable accesses.
// - Reference values are mutable and stored in a location that is referenced by the variable.