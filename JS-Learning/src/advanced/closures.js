// Closures in JavaScript: definition, examples, use cases

// A closure is a feature in JavaScript where an inner function gets access to the outer function's variables. 
// This happens even after the outer function has returned, allowing the inner function to "remember" the environment in which it was created.

// Example 1: Basic Closure
function outerFunction() {
    let outerVariable = 'I am from outer function!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Logs: 'I am from outer function!'

// Example 2: Closure with parameters
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    }
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // Logs: 10

// Example 3: Use case - private variables
function Counter() {
    let count = 0;

    this.increment = function() {
        count++;
        console.log(count);
    }

    this.decrement = function() {
        count--;
        console.log(count);
    }
}

const counter = new Counter();
counter.increment(); // Logs: 1
counter.increment(); // Logs: 2
counter.decrement(); // Logs: 1

// Example 4: Use case - function factories
function makeCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = makeCounter();
console.log(counter1.increment()); // Logs: 1
console.log(counter1.increment()); // Logs: 2
console.log(counter1.getCount()); // Logs: 2
console.log(counter1.decrement()); // Logs: 1

// Example 5: Use case - maintaining state in an asynchronous world
function fetchData(url) {
    let cachedResponse;

    return async function() {
        if (cachedResponse) {
            return Promise.resolve(cachedResponse);
        }

        const response = await fetch(url);
        cachedResponse = await response.json();
        return cachedResponse;
    }
}

const getData = fetchData('https://api.example.com/data');
getData().then(data => console.log(data));

// CLOSURES IN JAVASCRIPT
// - Definition and mechanics
// - Use cases: data privacy, factory functions
// - Lexical scope
// - Common closure patterns