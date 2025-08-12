// ReduxToolkitExample.js
// Demonstrates Redux Toolkit usage in React
import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function Counter() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
      <span>{value}</span>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
    </div>
  );
}

function ReduxToolkitExample() {
  return (
    <Provider store={store}>
      <h2>Redux Toolkit Example</h2>
      <Counter />
    </Provider>
  );
}

export default ReduxToolkitExample;