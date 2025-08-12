// filepath: /js-learning-project/js-learning-project/src/dom/events.js
// Event Handling in JavaScript

// Adding an event listener to a button
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
    console.log('Button was clicked!', event);
});

// Event propagation example
const parentDiv = document.getElementById('parentDiv');
const childDiv = document.getElementById('childDiv');

parentDiv.addEventListener('click', function() {
    console.log('Parent div clicked!');
});

childDiv.addEventListener('click', function(event) {
    console.log('Child div clicked!');
    event.stopPropagation(); // Prevents the event from bubbling up to the parent
});

// Removing an event listener
function handleMouseOver() {
    console.log('Mouse over the button!');
}

button.addEventListener('mouseover', handleMouseOver);

// To remove the event listener
button.removeEventListener('mouseover', handleMouseOver);