import React, { useState } from "react";
import { debounce, throttle } from 'lodash';

function App() {
  const [inputvalue, setInputValue] = useState(1);
  var [counter, setCounter] = useState(0);
  let count = 0;
  for (let i = 0; i < inputvalue; i++) {
    count += i;
  }
  return (
    <div>
      <input
  type="text"
  onChange={debounce(function (e) {
    setInputValue(e.target.value);
  }, 300)} // 300ms debounce delay
  placeholder="Sum of number from 1 to n"
/>

      <br />
      Sum of number from 1 to {inputvalue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter {counter}
      </button>
    </div>
  );
}

export default App;
