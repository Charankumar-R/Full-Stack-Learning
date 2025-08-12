// filepath: /js-learning-project/js-learning-project/src/basics/objects.js
// Object Creation and Manipulation in JavaScript

// Object Literal
const person = {
    name: "Charan",
    age: 20,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

// Accessing Object Properties
console.log(person.name); // "Charan"
console.log(person['age']); // 20

// Adding a New Property
person.job = "Developer";
console.log(person.job); // "Developer"

// Updating a Property
person.age = 21;
console.log(person.age); // 21

// Deleting a Property
delete person.job;
console.log(person.job); // undefined

// Constructor Function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Creating an Object using Constructor Function
const myCar = new Car("Toyota", "Corolla", 2021);
console.log(myCar); // Car { make: 'Toyota', model: 'Corolla', year: 2021 }

// Prototypes
Car.prototype.getCarInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

console.log(myCar.getCarInfo()); // "2021 Toyota Corolla"

// Object Destructuring
const { name, age } = person;
console.log(name, age); // "Charan", 21

// Spread Operator
const additionalInfo = { hobby: "Coding", city: "New York" };
const completeProfile = { ...person, ...additionalInfo };
console.log(completeProfile); // { name: 'Charan', age: 21, hobby: 'Coding', city: 'New York' }