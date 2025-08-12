// ErrorBoundaryExample.js
// Demonstrates React error boundary
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong.</h3>;
    }
    return this.props.children;
  }
}

function BuggyComponent() {
  throw new Error('Crash!');
}

function ErrorBoundaryExample() {
  return (
    <div>
      <h2>Error Boundary Example</h2>
      <ErrorBoundary>
        {/* Uncomment to see error boundary in action */}
        {/* <BuggyComponent /> */}
        <p>No error here!</p>
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundaryExample;