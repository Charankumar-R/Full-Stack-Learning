// PROTOTYPES IN JAVASCRIPT
// - Prototype chain
// - Inheritance
// - Adding methods via prototypes
// - Object.getPrototypeOf, Object.setPrototypeOf
// - ES6 class inheritance

// Example of adding a method to the prototype of an existing object
// This will add the method 'greet' to all existing and future instances of 'Person'

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
}

// Creating a new instance of Person
var john = new Person("John");

// Calling the greet method
john.greet();  // Output: Hello, my name is John

// The greet method is now part of Person's prototype, and all instances of Person will have access to it.