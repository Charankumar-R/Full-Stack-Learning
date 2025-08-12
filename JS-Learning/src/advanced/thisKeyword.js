// This file explains the context of the this keyword in different scenarios, including global, object, and function contexts.

function globalContext() {
    console.log(this); // In the global context, 'this' refers to the global object (window in browsers)
}

const obj = {
    name: "Charan",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`); // 'this' refers to the object 'obj'
    }
};

const greetFunction = obj.greet;
greetFunction(); // In this case, 'this' will be undefined in strict mode or the global object in non-strict mode

const anotherObj = {
    name: "Alice",
    greet: obj.greet
};

anotherObj.greet(); // 'this' refers to 'anotherObj'

// Arrow functions do not have their own 'this', they inherit 'this' from the parent scope
const arrowFunction = () => {
    console.log(this); // 'this' refers to the global object (or undefined in strict mode)
};

arrowFunction(); 

// Using 'bind' to set 'this' explicitly
const boundGreet = obj.greet.bind(anotherObj);
boundGreet(); // 'this' refers to 'anotherObj' due to bind

// Using 'call' to invoke a function with a specific 'this' value
obj.greet.call(anotherObj); // 'this' refers to 'anotherObj'

// Using 'apply' to invoke a function with a specific 'this' value and arguments as an array
function introduce(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
}

introduce.apply(obj, ["Hi"]); // 'this' refers to 'obj' and outputs: "Hi, my name is Charan"