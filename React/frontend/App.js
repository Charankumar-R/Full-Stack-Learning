// Main App component for React learning path
// This will be updated as you progress through the course
import React from 'react';
import JSXExample from './basics/JSXExample';
import ComponentsExample from './basics/ComponentsExample';
import PropsExample from './basics/PropsExample';
import StateExample from './basics/StateExample';

function App() {
  return (
    <div>
      <h1>React & Full Stack Learning Course</h1>
      <p>Welcome! Start with the basics and progress to advanced topics.</p>
      <JSXExample />
      <ComponentsExample />
      <PropsExample />
      <StateExample />
      {/* Add more examples as you progress */}
    </div>
  );
}

export default App;
