// Promises in JavaScript: creation, then, catch, finally
// Example promise usage

// A promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject.
// The function passed to the Promise constructor is executed immediately by the Promise implementation, and its result is used to either fulfill or reject the promise.

// Here's an example of a promise that resolves successfully:
const successfulPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

// And here's an example of a promise that fails:
const failingPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Failure!');
    }, 1000);
});

// You can use the then method to specify what should happen when a promise is fulfilled, and the catch method to specify what should happen when a promise is rejected.
successfulPromise
    .then(result => {
        console.log(result); // This will run if the promise is resolved
    })
    .catch(error => {
        console.error(error); // This will run if the promise is rejected
    });

// The finally method can be used to specify code that should run regardless of whether the promise was fulfilled or rejected.
successfulPromise
    .finally(() => {
        console.log('Promise settled (either fulfilled or rejected)');
    });

// PROMISES IN JAVASCRIPT
// - Creating promises
// - then, catch, finally
// - Chaining promises
// - Promise.all, Promise.race, Promise.any, Promise.allSettled
// - Error handling
// - Real-world use cases