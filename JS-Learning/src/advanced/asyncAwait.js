// filepath: /js-learning-project/js-learning-project/src/advanced/asyncAwait.js
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Example usage
const url = 'https://api.example.com/data';
fetchData(url).then(data => {
    if (data) {
        console.log(data);
    }
});