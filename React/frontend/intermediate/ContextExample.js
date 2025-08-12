// Example demonstrating React Context API

import React, { createContext, useContext, useState } from 'react';

// Create a Context
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
    const [value, setValue] = useState("some value");

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
}

// Custom hook to use the MyContext
export function useMyContext() {
    return useContext(MyContext);
}

// ContextExample.js
// Demonstrates use of React Context API
// Context lets you share values between components without passing props
const ThemeContext = createContext('light');

// Component that consumes the context value
function ThemeDisplay() {
  // useContext reads the current value of ThemeContext
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function ContextExample() {
  // Provide a value ('dark') to ThemeContext for all children
  return (
    <ThemeContext.Provider value="dark">
      <h2>Context Example</h2>
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}

export default ContextExample;