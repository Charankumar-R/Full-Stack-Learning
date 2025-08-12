// Example demonstrating React components
// This file contains basic examples of React components to demonstrate their usage and functionality.

import React from 'react';

// A simple functional component
export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// A class component
export class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h1>Seconds: {this.state.seconds}</h1>
            </div>
        );
    }
}

// A component with local state and event handling
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// A component demonstrating component lifecycle
export class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Current time: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

// ComponentsExample.js
// Demonstrates basic React component usage
// Components are reusable pieces of UI
import React from 'react';

// This is a child component
function Greeting() {
  // Returns a JSX element
  return <h3>Hello from a child component!</h3>;
}

function ComponentsExample() {
  // Parent component rendering the child
  return (
    <div>
      <h2>Components Example</h2>
      {/* Using the Greeting component below */}
      <Greeting />
    </div>
  );
}

export default ComponentsExample;