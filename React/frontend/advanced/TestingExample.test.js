// Example demonstrating React testing with Jest/RTL

test('sample test', () => {
  expect(true).toBe(true);
});

// TestingExample.test.js
// Example React component test using Jest and React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import StateExample from '../basics/StateExample';

test('increments and decrements count', () => {
  render(<StateExample />);
  const incButton = screen.getByText(/Increment/i);
  const decButton = screen.getByText(/Decrement/i);
  fireEvent.click(incButton);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  fireEvent.click(decButton);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});