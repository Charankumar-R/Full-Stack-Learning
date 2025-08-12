// Example demonstrating React hooks
// Demonstrates use of React hooks
// Hooks let you use state and other React features in functional components

import React, { useState, useEffect } from 'react';

const HooksExample = () => {
    // useState creates a state variable 'time' and a setter 'setTime'
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());

    // useEffect runs after every render (or when dependencies change)
    useEffect(() => {
        // Set up a timer to update time every second
        const timer = setInterval(() => setTime(new Date()), 1000);
        // Cleanup function to clear timer when component unmounts
        return () => clearInterval(timer);
    }, []); // Empty array means this runs once on mount

    return (
        <div>
            <h2>Hooks Example</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            {/* Display the current time, updated every second */}
            <p>Current time: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default HooksExample;