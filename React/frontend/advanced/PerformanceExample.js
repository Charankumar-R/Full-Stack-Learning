// PerformanceExample.js
// Demonstrates React performance optimization with memo
// memo prevents unnecessary re-renders of components
import React, { useState, memo } from 'react';

// ExpensiveComponent only re-renders if 'value' changes
const ExpensiveComponent = memo(({ value }) => {
  console.log('ExpensiveComponent rendered');
  return <div>Value: {value}</div>;
});

function PerformanceExample() {
  // Two pieces of state: count and value
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('A');

  return (
    <div>
      <h2>Performance Example</h2>
      {/* Changing count does NOT re-render ExpensiveComponent */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      {/* Changing value DOES re-render ExpensiveComponent */}
      <button onClick={() => setValue(value === 'A' ? 'B' : 'A')}>Change Value</button>
      <ExpensiveComponent value={value} />
      <p>Count: {count}</p>
    </div>
  );
}

export default PerformanceExample;