// ASYNC/AWAIT IN JAVASCRIPT
// - async functions
// - await keyword
// - Error handling with try-catch
// - Sequential vs parallel async operations
// - Combining async/await with promises

// This is an example of an async function
async function fetchData() {
    try {
        // The await keyword is used to wait for a Promise
        let response = await fetch('https://api.example.com/data');
        
        // If the response is not ok, throw an error
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Parse the JSON from the response
        let data = await response.json();
        
        // Do something with the data
        console.log(data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the async function
fetchData();