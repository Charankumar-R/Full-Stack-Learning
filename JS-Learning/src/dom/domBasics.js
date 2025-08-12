// DOM Basics: accessing and manipulating DOM elements
// Example: document.getElementById, querySelector

// This file contains basic examples and explanations on how to access and manipulate
// DOM elements using vanilla JavaScript. It covers methods like `getElementById`,
// `querySelector`, and others to demonstrate the fundamentals of DOM manipulation.

// DOM BASICS
// - What is the DOM?
// - Selecting elements: getElementById, querySelector, etc.
// - Reading and modifying properties: textContent, innerHTML, value, style
// - Traversing the DOM: parent, children, siblings

// Accessing an element by its ID
// Syntax: document.getElementById('elementId')
// Returns the element that has the ID attribute with the
// Returns the first element that matches the specified CSS selector
// Example:
var firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// Accessing multiple elements
// Syntax: document.querySelectorAll('cssSelector')
// Returns a NodeList of all elements that match the specified CSS selector
// Example:
var listItems = document.querySelectorAll('ul li');
console.log(listItems);

// Manipulating element content
// Syntax: element.innerHTML or element.textContent
// Changes the HTML or text content of the specified element
// Example:
header.innerHTML = 'Welcome to DOM Manipulation';
firstParagraph.textContent = 'This is a basic example of manipulating DOM elements.';

// Manipulating element attributes
// Syntax: element.setAttribute('attributeName', 'value')
// Changes the value of an attribute on the specified element
// Example:
header.setAttribute('class', 'main-header');

// Note: Always ensure that the DOM is fully loaded before running scripts that
// manipulate DOM elements. This can be done by placing the script at the end of
// the body section or using the `DOMContentLoaded` event.