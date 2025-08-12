// Example demonstrating JSX syntax in React
// Demonstrates basic JSX usage in React
// JSX lets you write HTML-like syntax in JavaScript
import React from 'react';

function JSXExample() {
    const name = 'World';
    // JSX below will be compiled to React.createElement calls
    return (
        <div>
            {/* This is a JSX element */}
            <h1>Hello, {name}!</h1>
            <h2>JSX Example</h2>
            <p>This is rendered using JSX syntax!</p>
            {/* You can embed JavaScript expressions inside curly braces */}
            <p>{`2 + 2 = ${2 + 2}`}</p>
        </div>
    );
}

export default JSXExample;