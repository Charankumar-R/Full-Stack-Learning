# Markdown explanation for React Props

React Props are short for properties. They are read-only attributes used to pass data from one component to another in a React application. Props are essential for making components reusable and dynamic. Here's a basic overview of how props work in React:

## 1. Passing Props

Props are passed to components similarly to how arguments are passed to functions. You can pass any data type as a prop: strings, numbers, arrays, objects, or even functions.

```javascript
function ParentComponent() {
  return <ChildComponent name="John" age={30} />;
}
```

## 2. Receiving Props

In the child component, you can access the props passed to it via the function parameters.

```javascript
function ChildComponent(props) {
  return <div>{props.name}</div>;
}
```

## 3. Default Props

You can define default values for your props in case they are not provided by the parent component.

```javascript
ChildComponent.defaultProps = {
  name: "Guest",
  age: 18,
};
```

## 4. Prop Types

React allows you to specify the types of props that a component should receive. This is useful for validation and documentation purposes.

```javascript
import PropTypes from "prop-types";

ChildComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
```

## 5. Children Prop

Every component in React has access to the `children` prop, which contains any child elements defined between the opening and closing tags of the component.

```javascript
function ParentComponent() {
  return (
    <ChildComponent>
      <p>This is a child element</p>
    </ChildComponent>
  );
}
```

## Conclusion

Props are a fundamental concept in React that allow you to pass data and event handlers down to child components, enabling a unidirectional data flow and making your components more dynamic and reusable. Understanding how to effectively use props is essential for any React developer.

# Props.md

## React Props

Props are used to pass data from parent to child components.

### Basic Theory

- Props are read-only
- Used for configuration and data

### Code Walkthrough

```
<Welcome name="Charan" />
```

### Real-World Usage

- Customizing components

### Advanced Techniques

- PropTypes for validation
- Default props