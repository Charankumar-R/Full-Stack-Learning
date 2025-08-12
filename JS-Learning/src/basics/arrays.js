// ARRAYS IN JAVASCRIPT
// --------------------
// Array creation
let arr1 = [1, 2, 3];
let arr2 = new Array(4, 5, 6);
console.log(arr1, arr2);

// Array methods
arr1.push(4); // add to end
arr1.pop(); // remove from end
arr1.unshift(0); // add to start
arr1.shift(); // remove from start
console.log(arr1);

// splice, slice
let arr3 = [1,2,3,4,5];
arr3.splice(2, 1); // remove 1 at index 2
console.log(arr3);
let sliced = arr3.slice(1,3); // get elements 1 to 2
console.log(sliced);

// concat, map, filter, reduce
let arr4 = arr1.concat(arr2);
let mapped = arr4.map(x => x * 2);
let filtered = arr4.filter(x => x > 2);
let reduced = arr4.reduce((acc, val) => acc + val, 0);
console.log(arr4, mapped, filtered, reduced);

// forEach, find, includes, indexOf
arr4.forEach(x => console.log(x));
console.log(arr4.find(x => x === 5));
console.log(arr4.includes(2));
console.log(arr4.indexOf(2));

// sort, reverse, flat
let arr5 = [3,1,4,2];
arr5.sort();
arr5.reverse();
console.log(arr5);
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2));

// Iteration
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
for (let val of arr1) {
    console.log(val);
}

// Multidimensional arrays
let matrix = [[1,2],[3,4]];
console.log(matrix[0][1]);

// Array-like objects
function arrayLike() {
    console.log(arguments.length);
}
arrayLike(1,2,3);

// Creating an array
let fruits = ['apple', 'banana', 'cherry'];

// Accessing array elements
console.log(fruits[0]); // 'apple'

// Array properties
console.log(fruits.length); // 3

// Array methods
fruits.push('orange'); // adds 'orange' to the end
fruits.pop(); // removes the last element
fruits.shift(); // removes the first element
fruits.unshift('strawberry'); // adds 'strawberry' to the beginning

// Iterating over an array
fruits.forEach(function(fruit) {
    console.log(fruit);
});