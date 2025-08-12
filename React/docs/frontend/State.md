# Markdown explanation for React State

React state is a built-in object that is used to contain data or information about the component. It is similar to props, but it is private and fully controlled by the component. State is where you store property values that belong to the component. When the state object changes, the component re-renders.

## When to Use State

You should use state when you need to keep track of information that affects the rendering of your component and that can change over time. Examples include form inputs, toggles, and any data that is fetched from an API.

## How to Use State

To use state in a functional component, you need to import the `useState` hook from React. Here is an example:

```javascript
import React, { useState } from 'react';

function MyComponent() {
  // Declare a state variable named "count", with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In the example above, `useState(0)` declares a state variable `count` with an initial value of `0`. `setCount` is a function that updates the value of `count`. When the button is clicked, `setCount` is called, and the component re-renders with the new count value.

## Important Points about State

1. **State is local**: State is local to the component where it is defined, and it cannot be accessed or modified from outside the component.

2. **State updates are asynchronous**: You should not rely on the current state to calculate the next state, as state updates may be batched for performance reasons. Use the functional form of the state updater function if the new state depends on the old state.

3. **Do not mutate state directly**: Always use the state updater function to update the state. Do not mutate the state directly, as it can lead to unexpected behavior and bugs.

4. **Multiple state variables**: You can use multiple state variables in a single component. Just call `useState` multiple times with different initial values.

5. **Lifting state up**: If several components need to share the same state, you can lift the state up to their closest common ancestor. This way, the ancestor component can pass the state down to its children via props.

6. **Performance optimization**: Be mindful of performance when using state, especially in large components or applications. Unnecessary re-renders can impact the performance of your application.