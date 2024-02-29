import { useMemo, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [counter, setCounter] = useState(0);

  let count=useMemo(()=>{

      let count = 0;
      for (let i = 1; i <= inputValue; i++) {
        count += i;
      }
      return count;
  },[inputValue])
  return (
    <div>
      <input
        type="text"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      />
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
