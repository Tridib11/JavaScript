import './App.css'
import React, { useState } from 'react';
function App() {

  return (
    <>
      
    </>
  )
}

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App
