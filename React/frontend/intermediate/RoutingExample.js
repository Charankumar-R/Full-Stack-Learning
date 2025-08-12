// RoutingExample.js
// Demonstrates basic React Router usage
// Routing lets you navigate between different pages/components
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Home page component
function Home() {
  return <h3>Home Page</h3>;
}
// About page component
function About() {
  return <h3>About Page</h3>;
}

function RoutingExample() {
  return (
    // BrowserRouter enables routing in your app
    <BrowserRouter>
      {/* Navigation links to switch between routes */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      {/* Routes define which component to show for each path */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutingExample;