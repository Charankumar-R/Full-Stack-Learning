// DOM Manipulation: creating, updating, deleting elements
// Example manipulation techniques

// Function to create a new element
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

// Function to update an element's content
function updateElement(element, newText) {
    element.textContent = newText;
}

// Function to delete an element
function deleteElement(element) {
    element.parentNode.removeChild(element);
}

// Example usage:
// const newDiv = createElement('div', 'my-class', 'Hello World');
// document.body.appendChild(newDiv);

// updateElement(newDiv, 'Updated Text');

// deleteElement(newDiv);

// DOM MANIPULATION
// - Creating, updating, deleting elements
// - setAttribute, removeAttribute
// - Working with classes: classList
// - Performance considerations