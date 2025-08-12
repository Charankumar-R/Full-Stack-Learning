// filepath: /js-learning-project/js-learning-project/src/examples/js_tutorial.js
console.log("Welcome to the JavaScript Learning Project!");

// Variables
let name = "Charan";
const age = 20;
var isLearning = true;

console.log(`Name: ${name}, Age: ${age}, Is Learning: ${isLearning}`);

// Data Types
let number = 42; // Number
let string = "Hello, World!"; // String
let isActive = false; // Boolean
let nothing = null; // Null
let notDefined; // Undefined

console.log(typeof number, typeof string, typeof isActive, typeof nothing, typeof notDefined);

// Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Control Flow
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Switch Case
switch (age) {
    case 18:
        console.log("Just became an adult.");
        break;
    case 20:
        console.log("You are 20 years old.");
        break;
    default:
        console.log("Age is just a number.");
}

// Arrays
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange");
console.log("Fruits:", fruits);

// Objects
let person = {
    name: "Charan",
    age: 20,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet();

// Functions
function add(x, y) {
    return x + y;
}

console.log("Sum:", add(5, 10));

// Promises
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Async/Await
async function fetchData() {
    return "Data fetched!";
}

fetchData().then(data => console.log(data));