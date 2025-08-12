// filepath: /js-learning-project/js-learning-project/src/dom/manipulation.js
// DOM Manipulation Techniques

// Function to create a new element
function createElement(tag, content) {
    const element = document.createElement(tag);
    element.textContent = content;
    return element;
}

// Function to update an existing element's content
function updateElementContent(selector, newContent) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = newContent;
    } else {
        console.error(`Element with selector "${selector}" not found.`);
    }
}

// Function to delete an element
function deleteElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.remove();
    } else {
        console.error(`Element with selector "${selector}" not found.`);
    }
}

// Function to append a child element to a parent element
function appendChild(parentSelector, childElement) {
    const parent = document.querySelector(parentSelector);
    if (parent) {
        parent.appendChild(childElement);
    } else {
        console.error(`Parent element with selector "${parentSelector}" not found.`);
    }
}

// Function to set an attribute on an element
function setAttribute(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute(attribute, value);
    } else {
        console.error(`Element with selector "${selector}" not found.`);
    }
}

// Function to add a class to an element
function addClass(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add(className);
    } else {
        console.error(`Element with selector "${selector}" not found.`);
    }
}

// Function to remove a class from an element
function removeClass(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.remove(className);
    } else {
        console.error(`Element with selector "${selector}" not found.`);
    }
}