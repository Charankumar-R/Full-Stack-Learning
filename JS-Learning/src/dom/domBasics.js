// filepath: /js-learning-project/js-learning-project/src/dom/domBasics.js
// This file introduces the Document Object Model (DOM) and how to access and manipulate DOM elements.

document.addEventListener("DOMContentLoaded", () => {
    // Accessing elements
    const heading = document.querySelector("h1");
    console.log("Heading:", heading.textContent);

    // Creating a new element
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added to the DOM.";
    document.body.appendChild(newElement);

    // Updating an existing element
    heading.textContent = "Learn JavaScript with Charan";

    // Removing an element
    const elementToRemove = document.querySelector("p");
    if (elementToRemove) {
        document.body.removeChild(elementToRemove);
    }
});