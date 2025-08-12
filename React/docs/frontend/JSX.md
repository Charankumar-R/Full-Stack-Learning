# Markdown explanation for JSX in React

JSX is a syntax extension for JavaScript, commonly used with React to describe what the UI should look like. It looks similar to HTML, but there are some key differences and rules:

- **JSX Tags**: JSX is made up of tags, which can be either HTML tags or custom React components. Tags must be closed, either with a closing tag (e.g., `</div>`) or self-closed (e.g., `<img />`).
- **JavaScript Expressions**: You can embed JavaScript expressions inside JSX by wrapping them in curly braces `{}`. For example, `<h1>{title}</h1>` will display the value of the `title` variable.
- **Attributes**: JSX tags can have attributes, similar to HTML. However, some attributes are named differently in JSX (e.g., `class` becomes `className`, `onclick` becomes `onClick`).
- **Styling**: You can apply styles to JSX elements using the `style` attribute, which accepts a JavaScript object with camelCased properties (e.g., `style={{ backgroundColor: 'red' }}`).
- **Children**: JSX tags can contain children, which can be other JSX elements, strings, or numbers. For example, `<div>Hello, {user.name}!</div>`.

Here is an example of a functional component using JSX:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

And here is how you might use this component:

```javascript
<Welcome name="Sara" />
```

This would render as:

```html
<h1>Hello, Sara!</h1>
```

Remember, JSX is not required to use React, but it is widely adopted because it makes writing and understanding React components easier.

# JSX.md

## JSX in React

JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI code in a declarative way.

### Basic Theory
- JSX is compiled to `React.createElement` calls
- You can embed JavaScript expressions inside `{}`

### Code Walkthrough
```
const element = <h1>Hello, world!</h1>;
```

### Real-World Usage
- All React components use JSX for rendering

### Advanced Techniques
- Custom Babel plugins for JSX
- TypeScript with JSX