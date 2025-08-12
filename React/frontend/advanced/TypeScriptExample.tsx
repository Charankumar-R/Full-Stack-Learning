// TypeScriptExample.tsx
// Demonstrates React with TypeScript
import React from 'react';

type Props = {
  message: string;
};

const TypeScriptExample: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export default TypeScriptExample;