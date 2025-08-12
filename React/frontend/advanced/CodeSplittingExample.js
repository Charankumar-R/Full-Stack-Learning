// Example demonstrating React code splitting
// This component is loaded asynchronously using React.lazy
// and Suspense to demonstrate code splitting in a React application.

import React, { Suspense, lazy, useState } from 'react';

// Lazy load the OtherComponent
const OtherComponent = lazy(() => import('./OtherComponent'));
const LazyComponent = lazy(() => import('./LazyLoadingExample'));

function CodeSplittingExample() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Code Splitting Example</h1>
            {/* Toggle to show/hide the lazy loaded component */}
            <button onClick={() => setShow(!show)}>Toggle Lazy Component</button>
            {/* Suspense shows fallback while loading */}
            <Suspense fallback={<div>Loading...</div>}>
                {show && <LazyComponent />}
                <OtherComponent />
            </Suspense>
        </div>
    );
}

export default CodeSplittingExample;

// CodeSplittingExample.js
// Demonstrates React code splitting with React.lazy
// Code splitting loads components only when needed
import React, { Suspense, useState } from 'react';

// Lazy load the LazyLoadingExample component
const LazyComponent = React.lazy(() => import('./LazyLoadingExample'));

function CodeSplittingExample() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>Code Splitting Example</h2>
      {/* Toggle to show/hide the lazy loaded component */}
      <button onClick={() => setShow(!show)}>Toggle Lazy Component</button>
      {/* Suspense shows fallback while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}

export default CodeSplittingExample;