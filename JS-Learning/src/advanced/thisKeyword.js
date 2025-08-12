// 'this' keyword in JavaScript: global, object, function context
// Example usages

// In the global context, 'this' refers to the global object
console.log(this); // In a browser, this would log the Window object

// Inside a function, 'this' refers to the object that the function is a method of
function showThis() {
  console.log(this);
}

const obj = {
  method: showThis
};

obj.method(); // Logs obj, because 'this' refers to obj in the method

// However, if the function is called as a standalone function, 'this' will not refer to the object
const standalone = obj.method;
standalone(); // Logs the global object (or undefined in strict mode)

// Arrow functions do not have their own 'this'. They inherit 'this' from the parent scope
const arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // Logs the global object (or undefined in strict mode), because arrow functions don't have their own 'this'

// 'this' can be explicitly set using call, apply, or bind
function setName(name) {
  this.name = name;
}

const user = {};

setName.call(user, 'John');
console.log(user.name); // John

setName.apply(user, ['Doe']);
console.log(user.name); // Doe

const boundSetName = setName.bind(user);
boundSetName('Smith');
console.log(user.name); // Smith

// 'THIS' KEYWORD IN JAVASCRIPT
// - Global, object, function, class context
// - Arrow functions and 'this'
// - call, apply, bind
// - Event handlers and 'this'
// - Common pitfalls