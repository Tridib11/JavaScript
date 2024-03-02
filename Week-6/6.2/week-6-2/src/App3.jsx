import React, { useMemo, useState } from "react";
import { debounce, throttle } from "lodash";

function App() {
  const [inputvalue, setInputValue] = useState(1);
  var [counter, setCounter] = useState(0);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i < inputvalue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputvalue]);
  return (
    <div>
      <input
        type="text"
        onChange={debounce(function (e) {
          setInputValue(e.target.value);
        }, 300)} // 300ms debounce delay
        placeholder="Sum of number from 1 to n"
      />
      {/*
  With debouncing, the event handler will only be invoked after the specified delay (300ms in this case) after the last input event. Throttling, on the other hand, ensures that the event handler is called at most once per specified interval (300ms in this case), regardless of how many times the event is fired during that interval. Choose the one that fits your use case best.


  throttling

<input
  type="text"
  onChange={throttle(function (e) {
    setInputValue(e.target.value);
  }, 300)} // 300ms throttle delay
  placeholder="Sum of number from 1 to n"
/>
*/}
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
