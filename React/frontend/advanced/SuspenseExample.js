// SuspenseExample.js
// Demonstrates React Suspense
// Suspense lets you show a fallback while loading components

import React, { Suspense } from 'react';

// Lazy load the LazyLoadingExample component
const LazyComponent = React.lazy(() => import('./LazyLoadingExample'));

function SuspenseExample() {
  return (
    <div>
      <h2>Suspense Example</h2>
      {/* Suspense wraps lazy components and shows fallback while loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default SuspenseExample;