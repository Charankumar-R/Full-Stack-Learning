# Markdown explanation for Custom React Hooks

## Introduction
Custom React hooks are JavaScript functions whose names start with "use" and that can call other hooks. They allow you to extract component logic into reusable functions. This is particularly useful for sharing logic across multiple components or even across different projects.

## Rules of Hooks
1. **Only call hooks at the top level**: Don't call hooks inside loops, conditions, or nested functions. This ensures that hooks are called in the same order each time a component renders.
2. **Only call hooks from React functions**: Call them from within React functional components or from custom hooks, not from regular JavaScript functions.

## Creating a Custom Hook
To create a custom hook, you can follow these steps:

1. **Identify the logic**: Determine the stateful logic that you want to extract from your component.
2. **Create a function**: Write a JavaScript function that uses React hooks to implement the logic. Remember to start the function name with "use".
3. **Use the custom hook**: Call your custom hook from a React component just like you would with any built-in hook.

## Example
Here's a simple example to demonstrate the concept:

```javascript
// Custom hook
function useCounter(initialValue = 0) {
    const [count, setCount] = React.useState(initialValue);
    
    const increment = () => {
        setCount(c => c + 1);
    };
    
    const decrement = () => {
        setCount(c => c - 1);
    };
    
    return { count, increment, decrement };
}

// Component using the custom hook
function CounterComponent() {
    const { count, increment, decrement } = useCounter(10);
    
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
```

## Conclusion
Custom hooks are a powerful feature of React that allow for greater flexibility and reusability of stateful logic. By following the rules of hooks and structuring your custom hooks properly, you can significantly enhance the maintainability and readability of your React code.