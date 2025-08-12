// filepath: /js-learning-project/js-learning-project/src/advanced/prototypes.js
// Prototypes in JavaScript

// Understanding the prototype chain
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const charan = new Person('Charan');
charan.greet(); // Hello, my name is Charan

// Inheritance using prototypes
function Employee(name, position) {
    Person.call(this, name); // Call the parent constructor
    this.position = position;
}

// Set the prototype of Employee to an instance of Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describe = function() {
    console.log(`I am ${this.name} and I work as a ${this.position}`);
};

const alice = new Employee('Alice', 'Developer');
alice.greet(); // Hello, my name is Alice
alice.describe(); // I am Alice and I work as a Developer

// Adding methods to the prototype
Array.prototype.first = function() {
    return this[0];
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.first()); // 1

// Checking the prototype chain
console.log(alice instanceof Employee); // true
console.log(alice instanceof Person); // true
console.log(alice instanceof Object); // true
console.log(numbers instanceof Array); // true
console.log(numbers instanceof Object); // true

// Summary of prototypes
// - Every JavaScript object has a prototype.
// - Prototypes allow for inheritance and method sharing.
// - Modifying the prototype affects all instances of the object.