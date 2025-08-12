// filepath: /js-learning-project/js-learning-project/src/basics/arrays.js
// Array Creation and Methods

// Creating an array
const fruits = ['Apple', 'Banana', 'Cherry'];

// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Adding elements
fruits.push('Orange'); // Adds to the end
console.log(fruits); // ['Apple', 'Banana', 'Cherry', 'Orange']

fruits.unshift('Mango'); // Adds to the beginning
console.log(fruits); // ['Mango', 'Apple', 'Banana', 'Cherry', 'Orange']

// Removing elements
fruits.pop(); // Removes from the end
console.log(fruits); // ['Mango', 'Apple', 'Banana', 'Cherry']

fruits.shift(); // Removes from the beginning
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

// Iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Finding an element
const indexOfBanana = fruits.indexOf('Banana');
console.log(indexOfBanana); // 1

// Slicing and Splicing
const citrus = fruits.slice(1, 3); // ['Banana', 'Cherry']
console.log(citrus);

fruits.splice(1, 1, 'Grapes'); // Replaces 'Banana' with 'Grapes'
console.log(fruits); // ['Apple', 'Grapes', 'Cherry']

// Array Length
console.log(fruits.length); // 3

// Array Methods Summary
// push(), pop(), shift(), unshift(), forEach(), indexOf(), slice(), splice()