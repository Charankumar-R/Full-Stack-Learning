// LazyLoadingExample.js
// Demonstrates React lazy loading
// This component is loaded only when needed

import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function LazyLoadingExample() {
    return (
        <div>
            <h1>React Lazy Loading Example</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
}

export default LazyLoadingExample;

// LazyLoadingExample.js
// Demonstrates React lazy loading
// This component is loaded only when needed
import React from 'react';

function LazyLoadingExample() {
  // Rendered only when imported via React.lazy
  return <div>This component was loaded lazily!</div>;
}

export default LazyLoadingExample;