// filepath: /js-learning-project/js-learning-project/src/advanced/modules.js
// This file explains module creation and usage, including import and export statements.

// Exporting a function
export function greet(name) {
    return `Hello, ${name}!`;
}

// Exporting a constant
export const PI = 3.14;

// Exporting a class
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return PI * this.radius * this.radius;
    }
}

// Default export
export default function farewell(name) {
    return `Goodbye, ${name}!`;
}