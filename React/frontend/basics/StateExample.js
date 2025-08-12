// StateExample.js
// Demonstrates using state in React components
// State lets components keep track of changing data
import React, { useState } from 'react';

function StateExample() {
  // useState hook creates a state variable 'count' and a setter 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Example</h2>
      {/* Display the current count */}
      <p>Count: {count}</p>
      {/* Update state using setCount when buttons are clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default StateExample;