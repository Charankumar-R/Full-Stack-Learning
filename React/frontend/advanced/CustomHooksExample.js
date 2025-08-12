// Example demonstrating custom React hooks

import { useState, useEffect } from 'react';

// Custom hook for fetching data
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
}

// Custom hook for form handling
export function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return {
        values,
        handleChange,
        resetForm,
    };
}

// Custom hook for counter
export function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return { count, increment, decrement };
}

// Component demonstrating the use of the custom counter hook
export function CustomHooksExample() {
    const { count, increment, decrement } = useCounter(5);
    return (
        <div>
            <h2>Custom Hooks Example</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

// CustomHooksExample.js
// Demonstrates a custom React hook
// Custom hooks let you reuse logic between components
import React, { useState } from 'react';

// useCounter is a custom hook for counting
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  // Functions to increment and decrement count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}

function CustomHooksExample() {
  // Use the custom hook in a component
  const { count, increment, decrement } = useCounter(5);
  return (
    <div>
      <h2>Custom Hooks Example</h2>
      <p>Count: {count}</p>
      {/* Buttons use the custom hook's functions */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CustomHooksExample;