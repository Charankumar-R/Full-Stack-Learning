// RecoilExample.js
// Demonstrates Recoil state management in React
import React from 'react';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// Define a Recoil atom
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

// Define a Recoil selector
const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const countState = atom({ key: 'countState', default: 0 });

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export function TextInputWithRecoil() {
  const [text, setText] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <div>Character count: {charCount}</div>
    </div>
  );
}

function RecoilExample() {
  return (
    <RecoilRoot>
      <h2>Recoil Example</h2>
      <Counter />
    </RecoilRoot>
  );
}

export default RecoilExample;