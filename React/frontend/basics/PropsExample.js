// PropsExample.js
// Demonstrates passing props to React components
// Props are used to pass data from parent to child

import React from 'react';

// Welcome component receives 'name' as a prop
function Welcome(props) {
  // Access props using props.name
  return <h3>Welcome, {props.name}!</h3>;
}

function PropsExample() {
  // Passing different values for 'name' prop
  return (
    <div>
      <h2>Props Example</h2>
      {/* Each Welcome component gets a different name prop */}
      <Welcome name="Charan" />
      <Welcome name="Student" />
    </div>
  );
}

export default PropsExample;