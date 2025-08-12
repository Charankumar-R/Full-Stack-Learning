// ES6 Classes in JavaScript: constructors, inheritance, static methods

// Example of a basic class with a constructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Instance method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Static method
    static species() {
        return 'Homo sapiens';
    }
}

// Example of inheritance
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
    }

    // Overriding the greet method
    greet() {
        super.greet(); // Call the parent class greet method
        console.log(`I work as a ${this.jobTitle}.`);
    }
}

// Usage
const john = new Person('John', 30);
john.greet(); // Hello, my name is John and I am 30 years old.

const jane = new Employee('Jane', 28, 'Software Developer');
jane.greet(); // Hello, my name is Jane and I am 28 years old. I work as a Software Developer.

console.log(Person.species()); // Homo sapiens
console.log(Employee.species()); // Homo sapiens

// CLASSES IN JAVASCRIPT
// - ES6 class syntax
// - Constructors
// - Inheritance (extends, super)
// - Static methods
// - Private fields (#)
// - Getters and setters