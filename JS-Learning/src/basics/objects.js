// OBJECTS IN JAVASCRIPT
// ---------------------
// Object literals
let person = {
    name: "Bob",
    age: 30,
    greet: function() { console.log("Hello!"); }
};
console.log(person.name, person.age);
person.greet();

// Adding/removing properties
person.job = "Developer";
delete person.age;
console.log(person);

// Computed properties
let key = "score";
person[key] = 100;
console.log(person);

// Methods
person.sayHi = function() { console.log("Hi!"); };
person.sayHi();

// Constructor functions
function Car(make, model) {
    this.make = make;
    this.model = model;
}
let car1 = new Car("Toyota", "Corolla");
console.log(car1);

// Object.create
let proto = { greet() { console.log("Proto greet"); } };
let obj2 = Object.create(proto);
obj2.greet();

// ES6 Classes
class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(this.name + " makes a sound"); }
}
let dog = new Animal("Dog");
dog.speak();

// Encapsulation, privacy
class Counter {
    #count = 0;
    increment() { this.#count++; }
    get value() { return this.#count; }
}
let counter = new Counter();
counter.increment();
console.log(counter.value);

// Object.assign, keys, values, entries
let o1 = {a:1}, o2 = {b:2};
let merged = Object.assign({}, o1, o2);
console.log(Object.keys(merged), Object.values(merged), Object.entries(merged));

// Deep vs shallow copy
let shallow = Object.assign({}, person);
let deep = JSON.parse(JSON.stringify(person));