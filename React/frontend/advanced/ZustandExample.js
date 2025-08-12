// ZustandExample.js
// Demonstrates Zustand state management in React
import React from 'react';
import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

function ZustandExample() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <h2>Zustand Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default ZustandExample;