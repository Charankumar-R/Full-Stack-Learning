// filepath: /js-learning-project/js-learning-project/src/advanced/promises.js
// Promises in JavaScript

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function fetchData() {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success or failure

        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    });
}

// Using the promise
fetchData()
    .then(response => {
        console.log(response); // Handle success
    })
    .catch(error => {
        console.error(error); // Handle error
    })
    .finally(() => {
        console.log("Fetch attempt finished."); // Always runs
    });